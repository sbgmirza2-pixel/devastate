# Vercel Deployment

This project deploys as a standard Next.js application on Vercel. Docker is not required.

## Environment variables

Configure these in the Vercel project for Preview and Production as appropriate:

- `BLOB_READ_WRITE_TOKEN`: Vercel Blob read/write token for images and APK files (if using file uploads)

Do not commit `.env.local` or real credentials.

## Deploy

1. Import the repository into Vercel and select the Next.js framework preset.
2. Add the required environment variables (if any).
3. Deploy from the connected Git branch or with `npx vercel --prod`.
4. Configure the domain in Vercel and verify HTTPS, `/`, `/download`, `/robots.txt`, and `/sitemap.xml`.

Vercel functions are ephemeral. Upload routes use Vercel Blob storage rather than writing to local directories.