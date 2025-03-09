import { Migration } from '@mikro-orm/migrations';

export class Migration20250308070442_users_and_accommodations extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "users" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);`);

    this.addSql(`create table "accommodations" ("id" serial primary key, "name" varchar(255) not null, "location" varchar(255) not null, "description" varchar(255) null, "price_per_night" int not null, "is_available" boolean not null default true, "rating" real not null default 0, "thumbnail" varchar(255) null, "ammenities" jsonb not null default '[]', "images" jsonb not null default '[]', "facilities" jsonb not null default '[]', "property_type" varchar(255) not null, "distance_from_city_center" real null default 0, "number_of_bedrooms" int not null default 0, "number_of_bathrooms" int not null default 0, "number_of_guests" int not null default 0, "number_of_beds" int not null default 0, "host_id" int not null);`);

    this.addSql(`alter table "accommodations" add constraint "accommodations_host_id_foreign" foreign key ("host_id") references "users" ("id") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "accommodations" drop constraint "accommodations_host_id_foreign";`);

    this.addSql(`drop table if exists "users" cascade;`);

    this.addSql(`drop table if exists "accommodations" cascade;`);
  }

}
