/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { IsEmpty, IsOptional, Length } from 'class-validator';
import {
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { IUsers, Users } from '.';

export type IAddresses = Addresses;

@Entity('addresses')
export class Addresses {
  @PrimaryGeneratedColumn()
	public id: number;

  @IsOptional()
  @Length(3, 70)
  @Column({
  	type: 'varchar',
  	length: 70,
  	nullable: true,
  	default: 'NULL',
  })
  public city: string;

  @IsOptional()
  @Length(3, 70)
  @Column({
  	type: 'varchar',
  	length: 70,
  	nullable: true,
  	default: 'NULL',
  })
  public state: string;

  @IsOptional()
  @Length(3, 68)
  @Column({
  	type: 'varchar',
  	length: 68,
  	nullable: true,
  	default: 'NULL',
  })
  public country: string;

  @Column({
  	name: 'array_field',
  	type: 'varchar',
  	nullable: true,
  	default: 'NULL',
  	array: true,
  })
  public arrayField: string[];

  @IsEmpty()
  @Column({
  	name: 'created_at',
  	type: 'timestamp',
  	nullable: true,
  	default: 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @IsEmpty()
  @UpdateDateColumn({
  	name: 'updated_at',
  	type: 'timestamp',
  	nullable: true,
  	default: 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;

  @OneToOne(() => Users, (item) => item.addresses)
  public user: IUsers;
}
