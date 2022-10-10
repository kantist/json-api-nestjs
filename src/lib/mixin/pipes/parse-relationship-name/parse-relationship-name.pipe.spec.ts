/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import {
	CURRENT_DATA_SOURCE_TOKEN,
	DEFAULT_CONNECTION_NAME,
	GLOBAL_MODULE_OPTIONS_TOKEN,
} from '../../../constants';
import { ajvFactory } from '../../../factory';
import { Users, entities, mockDBTestModule } from '../../../mock-utils';
import { parseRelationshipNameMixin } from '../index';
import { ParseRelationshipNamePipe } from './parse-relationship-name.pipe';

describe('ParseRelationshipNamePipe', () => {
	let pipe: ParseRelationshipNamePipe<Users>;
	const mockConnectionName = DEFAULT_CONNECTION_NAME;
	const parseRelationshipNameMixinPip = parseRelationshipNameMixin(
		Users,
		mockConnectionName
	);

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [mockDBTestModule()],
			providers: [
				parseRelationshipNameMixinPip,
				ajvFactory,
				{
					provide: GLOBAL_MODULE_OPTIONS_TOKEN,
					useValue: {
						entities: entities,
						connectionName: DEFAULT_CONNECTION_NAME,
					},
				},
				{
					provide: CURRENT_DATA_SOURCE_TOKEN,
					useFactory: (dataSource: DataSource) => dataSource,
					inject: [getDataSourceToken(DEFAULT_CONNECTION_NAME)],
				},
				{
					provide: getRepositoryToken(Users, DEFAULT_CONNECTION_NAME),
					useFactory(dataSource: DataSource) {
						return dataSource.getRepository<Users>(Users);
					},
					inject: [
						{
							token: CURRENT_DATA_SOURCE_TOKEN,
							optional: false,
						},
					],
				},
			],
		}).compile();

		pipe = module.get<ParseRelationshipNamePipe<Users>>(
			parseRelationshipNameMixinPip
		);
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('Should be error', async () => {
		try {
			await pipe.transform('rereerer');
		} catch (e) {
			expect(e).toBeInstanceOf(BadRequestException);
			expect(e.response.message[0].detail).toBe(
				"Relation 'rereerer' does not exist in resource 'users'"
			);
			expect(e.response.message.length).toBeGreaterThan(0);
		}
	});

	it('Should be ok', async () => {
		const result = await pipe.transform('addresses');
		expect(result).toBe('addresses');
	});
});
