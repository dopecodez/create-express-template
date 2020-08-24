import { Column, Entity } from 'typeorm';
import { Base } from '../Base';

@Entity()
export class User extends Base {
  @Column({ length: 250, name: "first_name", nullable: false })
  firstName!: string;

  @Column({ length: 250, name: "last_name", nullable: true })
  lastName!: string;
}



