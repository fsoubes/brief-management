import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBrief1642085540305 implements MigrationInterface {
    name = 'AddBrief1642085540305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brief" ("id" SERIAL NOT NULL, "title" character varying(64), "comment" character varying(1024), "status" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_127657d07cd4734cff26bad2f02" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "brief"`);
    }

}
