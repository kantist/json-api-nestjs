/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { ModuleOptions } from '../lib/types';
import { CURRENT_DATA_SOURCE_TOKEN, GLOBAL_MODULE_OPTIONS_TOKEN } from './constants';
import { ajvFactory } from './factory';
import { ErrorInterceptors } from './mixin/interceptors';

@Module({})
export class JsonApiNestJsCommonModule {
	static forRoot(options: ModuleOptions): DynamicModule {
		const optionProvider = {
			provide: GLOBAL_MODULE_OPTIONS_TOKEN,
			useValue: options,
		};

		const currentDataSourceProvider = {
			provide: CURRENT_DATA_SOURCE_TOKEN,
			useFactory: (dataSource: DataSource) => dataSource,
			inject: [getDataSourceToken(options.connectionName)],
		};

		const typeOrmModule = TypeOrmModule.forFeature(options.entities, options.connectionName);

		return {
			module: JsonApiNestJsCommonModule,
			imports: [typeOrmModule],
			providers: [
				...(options.providers || []),
				ajvFactory,
				optionProvider,
				currentDataSourceProvider,
				ErrorInterceptors,
			],
			exports: [...(options.providers || []), typeOrmModule, ajvFactory, optionProvider, ErrorInterceptors],
		};
	}
}
