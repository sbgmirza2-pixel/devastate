# Vercel Deployment

This project deploys as a standard Next.js application on Vercel. Docker is not required.

## Environment variables

Configure these in the Vercel project for Preview and Production as appropriate:

- `MONGO_DB`: MongoDB Atlas connection string
- `MONGO_DB_NAME`: database name, normally `devastate-data`
- `ADMIN_SECRET`: long random secret used to hash session tokens
- `ADMIN_SESSION_TTL_SECONDS`: session lifetime, for example `28800`
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob read/write token for images and APK files

Do not commit `.env.local` or real credentials. Rotate any credential that has been exposed in chat, logs, or source control.

## Deploy

1. Import the repository into Vercel and select the Next.js framework preset.
2. Add the environment variables above.
3. Run `npm run db:migrate` locally against the production Atlas database once.
4. Deploy from the connected Git branch or with `npx vercel --prod`.
5. Configure the domain in Vercel and verify HTTPS, `/`, `/download`, `/admin/login`, `/robots.txt`, and `/sitemap.xml`.

Vercel functions are ephemeral. Upload routes therefore use Vercel Blob rather than writing to `public/`. MongoDB Atlas is the persistent application database.

## Initial owner

Insert an administrator document manually; the application intentionally does not seed defaults:

```json
{
  "email": "admin@example.com",
  "passwordHash": "<bcrypt hash>",
  "name": "Site Owner",
  "role": "owner",
  "permissions": [],
  "active": true
}
```

The first owner must be created in MongoDB before admin login is possible.
