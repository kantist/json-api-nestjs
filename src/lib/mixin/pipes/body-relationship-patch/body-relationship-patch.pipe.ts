/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import {
	BadRequestException,
	Inject,
	Injectable,
	PipeTransform,
} from '@nestjs/common';
import AjvCall, { ValidateFunction } from 'ajv';
import { upperFirstLetter } from '../../../helper';
import { ValidationError } from '../../../types';
import { Relationship } from '../../../types-common';
import { ResourceRequestObject } from '../../../types-common/request';

@Injectable()
export class BodyRelationshipPatchPipe<Entity> implements PipeTransform {
	protected validateFunction: ValidateFunction<ResourceRequestObject<Entity>>;

	constructor(@Inject(AjvCall) protected ajvCall: AjvCall) {
		this.validateFunction = this.ajvCall.getSchema<
      ResourceRequestObject<Entity>
    >('body-relationship-patch-schema');
	}

	transform(value: any): ResourceRequestObject<Entity>['data'] {
		const validate = this.validateFunction(value);

		const errorResult: ValidationError[] = [];
		if (!validate) {
			for (const error of this.validateFunction.errors) {
				const errorMsg: string[] = [];
				errorMsg.push(upperFirstLetter(error.message));

				switch (error.keyword) {
					case 'enum':
						errorMsg.push(
							`Allowed values are: "${error.params.allowedValues.join(',')}"`
						);
						break;
					case 'additionalProperties':
						errorMsg.push(
							`Additional Property is: "${error.params.additionalProperty}"`
						);
						break;
					case 'oneOf':
						if (error.schemaPath === '#/$defs/dataSchema/oneOf') {
							errorMsg[errorMsg.length - 1] =
                'Must match exactly one schema: "null" or "object"';
						} else {
							errorMsg[errorMsg.length - 1] =
                'Must match exactly one schema: "object" or "array"';
						}
						break;
				}
				errorResult.push({
					source: {
						parameter: error.instancePath,
					},
					detail: errorMsg.join('. '),
				});
			}
		}

		if (errorResult.length > 0) {
			throw new BadRequestException(errorResult);
		}

		return value.data;
	}
}
