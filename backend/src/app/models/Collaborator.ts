import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import User from './User'

@Entity('collaborator')
class Collaborator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  department: string;

  @Column()
  position: string;

  @ManyToOne(() => User, user => user.collaborators)
  @JoinColumn({ name: 'creator' })
  creator: User;
}

export default Collaborator
