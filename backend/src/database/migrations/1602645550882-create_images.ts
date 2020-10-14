import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602645550882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id", //Essa coluna vai ser gerada automaticamente
            type: "integer",
            unsigned: true, //não pode ser um negativo
            isPrimary: true, //Primary key
            isGenerated: true, //Essa coluna é gerada automaticamente
            generationStrategy: "increment", //1,2,3,4,5,6,7...
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "orphanage_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "ImageOrphanage",
            columnNames: ["orphanage_id"],
            referencedTableName: "orphanages",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
