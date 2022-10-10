/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Entity as EntityClassOrSchema, QueryParams, QuerySchemaTypes } from '../../../types';

export declare class QueryTransformPipe<Entity extends EntityClassOrSchema> implements PipeTransform {
	private repository;
	constructor(repository: Repository<Entity>);
	transform(value: QuerySchemaTypes): Promise<QueryParams<Entity>>;
}
