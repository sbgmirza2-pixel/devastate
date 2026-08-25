import dns from 'node:dns';
import { MongoClient } from 'mongodb';
import dns from 'dns';

// Configure reliable DNS servers (Google & Cloudflare) to prevent SRV lookup failures on restrictive local networks
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4', '1.0.0.1']);
} catch (e) {
  // Ignore in environments where setting DNS servers is not allowed
}

const uri = process.env.MONGO_DB;
const databaseName = process.env.MONGO_DB_NAME || 'devastate';
dns.setServers(["8.8.8.8", "1.1.1.1"]);

let clientPromise;
if (uri) {
  const globalForMongo = globalThis;
  if (!globalForMongo.__devastateMongoClient) {
    globalForMongo.__devastateMongoClient = new MongoClient(uri);
  }
  clientPromise = globalForMongo.__devastateMongoClient.connect();
}

export async function getDatabase() {
  if (!uri && process.env.NODE_ENV === 'production') {
    throw new Error('MONGO_DB must be configured in production');
  }
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(databaseName);
}