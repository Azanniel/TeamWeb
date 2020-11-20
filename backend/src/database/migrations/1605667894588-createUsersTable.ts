import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUsersTable1605667894588 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
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
          name: 'username',
          type: 'varchar',
          length: '120'
        },
        {
          name: 'email',
          type: 'varchar',
          length: '120',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user')
  }
}
