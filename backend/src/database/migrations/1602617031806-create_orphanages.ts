import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602617031806 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
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
            name: "name",
            type: "varchar", // string curto de até 200 caracteres
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10, //numeros dps da virgula
            precision: 2, //numeros antes da virgula
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "opening_hours",
            type: "varchar", // string curto de até 200 caracteres
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orphanages");
  }
}
