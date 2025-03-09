import {
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Collection,
} from '@mikro-orm/core';
import { Accommodation } from './accommodation.entity';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey()
  id!: number;
  @Property()
  name!: string;
  @Property()
  email!: string;
  @Property()
  password!: string;
  @OneToMany({ mappedBy: 'host' })
  accommodations = new Collection<Accommodation>(this);
}
