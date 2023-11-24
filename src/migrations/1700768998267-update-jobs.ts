import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateJobs1700768998267 implements MigrationInterface {
    name = 'UpdateJobs1700768998267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "job" ADD "company" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "company"`);
        await queryRunner.query(`ALTER TABLE "job" ADD "company" integer NOT NULL`);
    }

}
