import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class TestMigration implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection('test');
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection('test');
  }
}
