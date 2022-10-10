/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
	CONFIG_PARAM_POSTFIX,
	TYPEORM_MIXIN_SERVICE_POSTFIX,
} from '../../../constants';
import { getProviderName, nameIt } from '../../../helper';
import { Entity as EntityClassOrSchema, NestProvider } from '../../../types';
import { TypeormMixinService } from './typeorm.mixin';

export function typeormMixin<Entity extends EntityClassOrSchema>(
	entity: Entity,
	connectionName: string,
	transformService: NestProvider
): NestProvider {
	const serviceClass = nameIt(
		getProviderName(entity, TYPEORM_MIXIN_SERVICE_POSTFIX),
		TypeormMixinService
	);
	Injectable()(serviceClass);
	InjectRepository(entity, connectionName)(serviceClass, 'repository', 0);
	Inject(getProviderName(entity, CONFIG_PARAM_POSTFIX))(
		serviceClass,
		'config',
		1
	);
	Inject(transformService)(serviceClass, 'transform', 2);

	return serviceClass;
}
