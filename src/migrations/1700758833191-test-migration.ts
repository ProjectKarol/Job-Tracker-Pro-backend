import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration1700758833191 implements MigrationInterface {
    name = 'TestMigration1700758833191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "filename"`);
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "views"`);
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "isPublished"`);
        await queryRunner.query(`ALTER TABLE "job" ADD "url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job" ADD "company" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job" ADD "experience" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "job" ADD "isPublished" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job" ADD "views" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job" ADD "filename" character varying NOT NULL`);
    }

}
