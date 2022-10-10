/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { DECORATORS } from '@nestjs/swagger/dist/constants';
import { Bindings } from '../../config/bindings';
import { JSON_API_DECORATOR_OPTIONS } from '../../constants';
import {
	ConfigParam,
	DecoratorOptions,
	Entity,
	MethodName,
	NestController,
} from '../../types';
import { camelToKebab } from '../utils';
import { FilterOperand } from './filter-operand-model';
import { swaggerMethod } from './method';
import { createApiModels } from './utils';

export function setSwaggerDecorator(
	controller: NestController,
	entity: Entity,
	config: ConfigParam
) {
	const apiTag = Reflect.getMetadata(DECORATORS.API_TAGS, controller);
	if (!apiTag) {
		const entityName =
      entity instanceof Function ? entity.name : entity.options.name;
		ApiTags(camelToKebab(entityName))(controller);
	}
	ApiExtraModels(FilterOperand)(controller);
	ApiExtraModels(createApiModels(entity))(controller);

	const decoratorOptions: DecoratorOptions = Reflect.getMetadata(
		JSON_API_DECORATOR_OPTIONS,
		controller
	);

	for (const method in Bindings) {
		if (decoratorOptions) {
			const { allowMethod = [] } = decoratorOptions;

			if (!allowMethod.includes(method as MethodName)) {
				continue;
			}
		}

		if (!swaggerMethod[method]) {
			continue;
		}

		swaggerMethod[method](controller, entity, Bindings[method], config);
	}
}
