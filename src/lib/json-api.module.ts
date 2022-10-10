/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { DynamicModule, Module } from '@nestjs/common';

import { ConfigParamDefault, DEFAULT_CONNECTION_NAME, JSON_API_DECORATOR_ENTITY } from '../lib/constants';
import { BaseModuleClass } from '../lib/mixin';
import { ModuleOptions } from '../lib/types';
import { JsonApiNestJsCommonModule } from './json-api-nestjs-common.module';

@Module({})
export class JsonApiModule {
	private static connectionName = DEFAULT_CONNECTION_NAME;

	public static forRoot(options: ModuleOptions): DynamicModule {
		JsonApiModule.connectionName = options.connectionName || JsonApiModule.connectionName;

		options.connectionName = JsonApiModule.connectionName;
		options.options = {
			...ConfigParamDefault,
			...options.options,
		};

		const entityImport = options.entities.map((entity) => {
			const controller = (options.controllers || []).find(
				(item) => Reflect.getMetadata(JSON_API_DECORATOR_ENTITY, item) === entity
			);
			const module = BaseModuleClass.forRoot({
				entity,
				connectionName: JsonApiModule.connectionName,
				controller,
				config: {
					...ConfigParamDefault,
					...options.options,
				},
			});
			module.imports = [...module.imports, JsonApiNestJsCommonModule.forRoot(options)];

			return module;
		});

		return {
			module: JsonApiModule,
			imports: [...entityImport],
		};
	}
}
