import { defineConfig } from '@mikro-orm/postgresql';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default defineConfig({
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  clientUrl:
    'postgres://neondb_owner:npg_EwdHSb8TsLW0@ep-curly-snowflake-a1oel8al-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  driverOptions: {
    connection: { ssl: true },
  },
  debug: true,
  driver: PostgreSqlDriver,
  migrations: {
    snapshot: false,
  },
  metadataProvider: TsMorphMetadataProvider,
  metadataCache: { enabled: false },
});
