# Database

MongoDB is configured with `MONGO_DB` and `MONGO_DB_NAME`. The application does not seed defaults. Run `npm run db:migrate` against the target database to create the schema indexes and migration record.

To restore the data that was committed in Git before the JSON files were removed, run `npm run db:seed:git`. This reads the files from `git:HEAD` directly, does not recreate `/data`, does not create an admin, and can be run repeatedly.

Collections:

- `admins`: hashed credentials, role, permissions, active state
- `sessions`: hashed expiring session tokens
- `content`: mutable APK and site settings records keyed by `key`
- `apks`: versioned APK records with status, download links, SEO, media references, and timestamps
- `categories`: category name, slug, description
- `media`: uploaded icons, screenshots, and featured images
- `downloads`: download events used for dashboard counts
- `activityLogs`: admin, action, entity, details, and timestamp
- `backups`: reserved for backup metadata

The protected `GET/POST /api/admin/backup` endpoint exports and restores BSON-safe JSON. Restore is owner-only and replaces the supported collections, so take a backup first.

Required deployment variables, including `BLOB_READ_WRITE_TOKEN` for durable Vercel uploads, are documented in `.env.example` and `VERCEL.md`. Never use the old JSON fallback in production; configure MongoDB and a long random `ADMIN_SECRET`.

## API inventory

- `GET /api/admin/dashboard`, `/api/admin/activity`, `/api/admin/apks`, `/api/admin/categories`, `/api/admin/media`, `/api/admin/users`
- `POST /api/admin/apks`, `/api/admin/categories`, `/api/admin/media`, `/api/admin/users`
- `PUT/DELETE /api/admin/apks/:id`, `/api/admin/categories/:id`, `/api/admin/media/:id`, `/api/admin/users/:id`
- `GET/POST /api/admin/backup` for owner-only JSON backup and restore
- `GET/PUT /api/admin/pages/:slug` for the allowlisted editable page records
- `GET/PUT /api/apk` for the public current published APK and admin metadata compatibility route

All admin endpoints require the HTTP-only session cookie. Owner-only operations include user administration, APK deletion, and backup/restore.

## Deployment checklist

1. Set `MONGO_DB`, `MONGO_DB_NAME`, and a unique random `ADMIN_SECRET` in the hosting provider.
2. Run `npm run db:migrate` once against the production database.
3. Create the first owner document with a bcrypt `passwordHash`, `role: "owner"`, and `active: true`.
4. Deploy with `npm run build` and `npm start` (or the provider's Next.js deployment integration).
5. Configure the domain and HTTPS at the hosting/DNS provider, then verify `/`, `/download`, `/admin/login`, and `/robots.txt`.

Domain ownership, DNS, SSL activation, and production smoke testing cannot be verified from this repository without hosting-provider access.