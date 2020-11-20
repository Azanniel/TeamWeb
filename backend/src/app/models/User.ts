import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm'
import bcrypt from 'bcryptjs'

import Collaborator from './Collaborator'

@Entity('user')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => Collaborator, collaborator => collaborator.creator, {
    cascade: ['insert', 'update']
  })
  collaborators: Collaborator[]

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword () {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}

export default User
