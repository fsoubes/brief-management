import {MigrationInterface, QueryRunner} from "typeorm";

export class updateBrief1642288651302 implements MigrationInterface {
    name = 'updateBrief1642288651302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brief" ADD "productId" integer DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brief" DROP COLUMN "productId"`);
    }

}
