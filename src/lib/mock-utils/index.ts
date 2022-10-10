/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { join } from 'path';
import { newDb } from 'pg-mem';

import { DataSource } from 'typeorm';
import {
	Addresses,
	Comments,
	Pods,
	Requests,
	RequestsHavePodLocks,
	Roles,
	Users,
} from './entities';

export * from './entities';

export const entities = [
	Users,
	Roles,
	RequestsHavePodLocks,
	Requests,
	Pods,
	Comments,
	Addresses,
];

const dump = readFileSync(join(__dirname, 'db-for-test'), { encoding: 'utf8' });
export function mockDBTestModule(): DynamicModule {
	const db = newDb({
		autoCreateForeignKeyIndices: true,
	});

	db.public.registerFunction({
		name: 'current_database',
		implementation: () => 'test',
	});

	db.public.registerFunction({
		name: 'version',
		implementation: () =>
			'PostgreSQL 12.5 on x86_64-pc-linux-musl, compiled by gcc (Alpine 10.2.1_pre1) 10.2.1 20201203, 64-bit',
	});

	db.public.none(dump);
	const backup = db.backup();

	return TypeOrmModule.forRootAsync({
		useFactory() {
			return {
				type: 'postgres',
				entities: [
					Users,
					Roles,
					RequestsHavePodLocks,
					Requests,
					Pods,
					Comments,
					Addresses,
				],
			};
		},
		async dataSourceFactory(options) {
			const dataSource: DataSource = await db.adapters.createTypeormDataSource(
				options
			);

			return dataSource;
		},
	});
}
