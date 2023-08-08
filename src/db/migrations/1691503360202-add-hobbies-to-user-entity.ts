import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHobbiesToUserEntity1691503360202 implements MigrationInterface {
  name = 'AddHobbiesToUserEntity1691503360202';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "hobbies" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hobbies"`);
  }
}
