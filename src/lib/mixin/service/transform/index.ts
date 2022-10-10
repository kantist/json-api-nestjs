/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { Inject, Injectable } from '@nestjs/common';
import { ApplicationConfig } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';

import {
	CONFIG_PARAM_POSTFIX,
	TRANSFORM_MIXIN_SERVICE_POSTFIX,
} from '../../../constants';
import { getProviderName, nameIt } from '../../../helper';
import { Entity as EntityClassOrSchema, NestProvider } from '../../../types';
import { TransformMixinService } from './transform.mixin';

export function transformMixin<Entity extends EntityClassOrSchema>(
	entity: Entity,
	connectionName: string
): NestProvider {
	const serviceClass = nameIt(
		getProviderName(entity, TRANSFORM_MIXIN_SERVICE_POSTFIX),
		TransformMixinService
	);
	Injectable()(serviceClass);
	InjectRepository(entity, connectionName)(serviceClass, 'repository', 0);
	Inject(getProviderName(entity, CONFIG_PARAM_POSTFIX))(
		serviceClass,
		'config',
		1
	);
	Inject(ApplicationConfig)(serviceClass, 'applicationConfig', 2);

	return serviceClass;
}
