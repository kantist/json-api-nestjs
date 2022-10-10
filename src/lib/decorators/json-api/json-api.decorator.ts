/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import {
	JSON_API_DECORATOR_ENTITY,
	JSON_API_DECORATOR_OPTIONS,
} from '../../constants';
import { DecoratorOptions , Entity } from '../../types';

export function JsonApi(
	entity: Entity,
	options?: DecoratorOptions
): ClassDecorator {
	return (target): typeof target => {
		Reflect.defineMetadata(JSON_API_DECORATOR_ENTITY, entity, target);
		if (options) {
			Reflect.defineMetadata(JSON_API_DECORATOR_OPTIONS, options, target);
		}

		return target;
	};
}
