/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { IsEmpty, IsEnum, IsNotEmpty } from 'class-validator';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { IUsers, Users } from '.';

export enum CommentKind {
  Comment = 'COMMENT',
  Message = 'MESSAGE',
  Note = 'NOTE',
}

@Entity('comments')
export class Comments {
  @PrimaryGeneratedColumn()
	public id: number;

  @IsNotEmpty()
  @Column({
  	type: 'text',
  	nullable: false,
  })
  public text: string;

  @IsNotEmpty()
  @IsEnum(CommentKind)
  @Column({
  	type: 'enum',
  	enum: CommentKind,
  	nullable: false,
  })
  public kind: CommentKind;

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

  @ManyToOne(() => Users, (item) => item.id)
  @IsNotEmpty()
  @JoinColumn({
  	name: 'created_by',
  })
  public createdBy: IUsers;
}
