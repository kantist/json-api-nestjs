/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { PipeTransform } from '@nestjs/common';
import AjvCall, { ValidateFunction } from 'ajv';
import { Repository } from 'typeorm';
import { Entity, PipeMixin, QuerySchemaTypes } from '../../../types';

export declare class QuerySchemaPipe implements PipeTransform {
	protected repository: Repository<Entity>;
	protected ajvCall: AjvCall;
	protected validateFunction: ValidateFunction<QuerySchemaTypes>;
	static inject(pip: PipeMixin): void;
	constructor(repository: Repository<Entity>, ajvCall: AjvCall);
	private getErrorMsg;
	transform(value: unknown): Promise<QuerySchemaTypes>;
}
