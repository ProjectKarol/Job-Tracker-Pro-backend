import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageUrl1700838200813 implements MigrationInterface {
    name = 'AddImageUrl1700838200813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" ADD "image_url" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "image_url"`);
    }

}
