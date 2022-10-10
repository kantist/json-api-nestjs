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
import { PipeMixin } from '../../../types';
import { ResourceRequestObject } from '../../../types-common/request';

export declare class BodyInputPatchPipe<Entity> implements PipeTransform {
	protected repository: Repository<Entity>;
	protected ajvCall: AjvCall;
	protected validateFunction: ValidateFunction<ResourceRequestObject<Entity>>;
	static inject(pip: PipeMixin): void;
	private relationList;
	constructor(repository: Repository<Entity>, ajvCall: AjvCall);
	transform(value: ResourceRequestObject<Entity>): Promise<ResourceRequestObject<Entity>['data']>;
}
