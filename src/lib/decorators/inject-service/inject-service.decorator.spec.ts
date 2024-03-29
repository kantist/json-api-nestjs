/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { getProviderName } from '../../helper';
import 'reflect-metadata';

import { InjectService } from './inject-service.decorator';
import { JSON_API_SERVICE_POSTFIX } from '../../constants';

describe('InjectServiceDecorator', () => {
	it('should save property key', () => {
		class SomeClass {
      @InjectService() protected property;
		}

		const properties = Reflect.getMetadata(PROPERTY_DEPS_METADATA, SomeClass);
		const serviceToken = getProviderName(SomeClass, JSON_API_SERVICE_POSTFIX);

		expect(properties.find((item) => item.type === serviceToken)).toBeDefined();
	});
});
