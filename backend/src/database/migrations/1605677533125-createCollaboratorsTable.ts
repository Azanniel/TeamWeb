import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCollaboratorsTable1605677533125 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'collaborator',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar',
          length: '120'
        },
        {
          name: 'cpf',
          type: 'varchar',
          length: '14'
        },
        {
          name: 'department',
          type: 'varchar',
          length: '100'
        },
        {
          name: 'position',
          type: 'varchar',
          length: '100'
        },
        { name: 'creator', type: 'integer', unsigned: true }
      ],
      foreignKeys: [
        {
          name: 'CollaboratorHasCreator',
          columnNames: ['creator'],
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('collaborator')
  }
}
