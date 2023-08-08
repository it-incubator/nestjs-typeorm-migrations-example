import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAgeForUser1691504901882 implements MigrationInterface {
  name = 'AddAgeForUser1691504901882';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "age" integer NOT NULL DEFAULT '18'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
  }
}
