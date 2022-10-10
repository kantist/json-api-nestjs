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
import { PipeMixin, QueryParams } from '../../../types';

export declare class QueryTransformSchemaPipe<Entity> implements PipeTransform {
	protected repository: Repository<Entity>;
	protected ajvCall: AjvCall;
	protected validateFunction: ValidateFunction<QueryParams<Entity>>;
	protected allowPropsField: string[];
	protected allowPropsFilter: string[];
	protected allowPropsSort: string[];
	protected allowPropsRelationFilter: Record<string, string[]>;
	protected allowPropsRelationSort: Record<string, string[]>;
	static inject(pip: PipeMixin): void;
	constructor(repository: Repository<Entity>, ajvCall: AjvCall);
	transform(value: QueryParams<Entity>): Promise<QueryParams<Entity>>;
	private getErrors;
}
