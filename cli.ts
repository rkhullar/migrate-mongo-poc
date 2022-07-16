import { mongoMigrateCli } from 'mongo-migrate-ts';

mongoMigrateCli({
    uri: process.env.MONGO_MIGRATE_URI,
    database: process.env.MONGO_MIGRATE_DB,
    migrationsDir: `${__dirname}/migrations`,
    migrationsCollection: 'migrations',
});