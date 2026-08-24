import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB;
const databaseName = process.env.MONGO_DB_NAME || 'devastate';

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