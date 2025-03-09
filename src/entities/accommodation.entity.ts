import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './user.entity';

@Entity({ tableName: 'accommodations' })
export class Accommodation {
  @PrimaryKey()
  id!: number;
  @Property()
  name!: string;
  @Property()
  location: string;
  @Property({ nullable: true })
  description: string;
  @Property()
  pricePerNight!: number;
  @Property({ default: true })
  isAvailable!: boolean;
  @Property({ type: 'float', default: 0.0 })
  rating: number;
  @Property({ nullable: true })
  thumbnail: string;
  @Property({ type: 'json', default: '[]' })
  ammenities: string[];
  @Property({ type: 'json', default: '[]' })
  images: string[];
  @Property({ type: 'json', default: '[]' })
  facilities: string[];
  @Property()
  propertyType: string;
  @Property({ type: 'float', default: 0.0, nullable: true })
  distanceFromCityCenter: number;
  @Property({ default: 0 })
  numberOfBedrooms: number;
  @Property({ default: 0 })
  numberOfBathrooms: number;
  @Property({ default: 0 })
  numberOfGuests: number;
  @Property({ default: 0 })
  numberOfBeds: number;
  @ManyToOne()
  host!: User;
}
