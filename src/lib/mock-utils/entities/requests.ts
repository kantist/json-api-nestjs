/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { IsEmpty } from 'class-validator';
import {
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { IPods, Pods } from '.';

export type IRequests = Requests;

@Entity('requests')
export class Requests {
  @PrimaryGeneratedColumn()
	public id: number;

  @IsEmpty()
  @CreateDateColumn({
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

  @ManyToMany(() => Pods, (item) => item.lockedRequests)
  @JoinTable({
  	name: 'requests_have_pod_locks',
  	inverseJoinColumn: {
  		referencedColumnName: 'id',
  		name: 'pod_id',
  	},
  	joinColumn: {
  		referencedColumnName: 'id',
  		name: 'request_id',
  	},
  })
  public podLocks: IPods[];
}
