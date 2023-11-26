import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDoIappiedJobadditonalinfo1700869616523 implements MigrationInterface {
    name = 'AddDoIappiedJobadditonalinfo1700869616523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" ADD "doIApplied" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job" ADD "JobAdditionalInfo" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "JobAdditionalInfo"`);
        await queryRunner.query(`ALTER TABLE "job" DROP COLUMN "doIApplied"`);
    }

}
