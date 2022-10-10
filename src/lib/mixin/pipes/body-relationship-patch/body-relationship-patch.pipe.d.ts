/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { PipeTransform } from '@nestjs/common';
import AjvCall, { ValidateFunction } from 'ajv';
import { ResourceRequestObject } from '../../../types-common/request';

export declare class BodyRelationshipPatchPipe<Entity> implements PipeTransform {
	protected ajvCall: AjvCall;
	protected validateFunction: ValidateFunction<ResourceRequestObject<Entity>>;
	constructor(ajvCall: AjvCall);
	transform(value: any): ResourceRequestObject<Entity>['data'];
}
