/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import 'reflect-metadata';

import { Bindings, excludeMethod } from '../../config/bindings';
import {
	JSON_API_DECORATOR_ENTITY,
	JSON_API_DECORATOR_OPTIONS,
} from '../../constants/reflection';
import { DecoratorOptions } from '../../types';
import { JsonApi } from './json-api.decorator';

describe('InjectServiceDecorator', () => {
	it('should save entity in class', () => {
		const testedEntity = class SomeEntity {};

    @JsonApi(testedEntity)
		class SomeClass {}

    const data = Reflect.getMetadata(JSON_API_DECORATOR_ENTITY, SomeClass);
    expect(data).toBe(testedEntity);
	});

	it('should save options in class', () => {
		const testedEntity = class SomeEntity {};
		const apiOptions: DecoratorOptions = {
			allowMethod: ['getAll', 'deleteRelationship'],
		};

    @JsonApi(testedEntity, apiOptions)
		class SomeClass {}

    const data = Reflect.getMetadata(JSON_API_DECORATOR_OPTIONS, SomeClass);
    expect(data).toEqual(apiOptions);
	});

	it('should save options in class using helpFunction', () => {
		const testedEntity = class SomeEntity {};
		const example = ['getAll', 'deleteRelationship'];
		const apiOptions: DecoratorOptions = {
			allowMethod: excludeMethod(example as any),
		};

    @JsonApi(testedEntity, apiOptions)
		class SomeClass {}

    const data: DecoratorOptions = Reflect.getMetadata(
    	JSON_API_DECORATOR_OPTIONS,
    	SomeClass
    );
    expect(data).toEqual(apiOptions);
    expect(data.allowMethod).toEqual(
    	Object.keys(Bindings).filter((k) => !example.includes(k))
    );
	});
});
