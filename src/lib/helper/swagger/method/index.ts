/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { deleteOne } from './delete-one';
import { deleteRelationship } from './delete-relationship';
import { getAll } from './get-all';
import { getOne } from './get-one';
import { getRelationship } from './get-relationship';
import { patchOne } from './patch-one';
import { patchRelationship } from './patch-relationship';
import { postOne } from './post-one';
import { postRelationship } from './post-relationship';

export const swaggerMethod = {
	getAll,
	getOne,
	deleteOne,
	postOne,
	patchOne,
	getRelationship,
	deleteRelationship,
	postRelationship,
	patchRelationship,
};

export const errorSchema = {
	type: 'object',
	properties: {
		status: {
			type: 'number',
		},
		errors: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					detail: {
						type: 'string',
					},
					source: {
						type: 'object',
						properties: {
							parameter: {
								type: 'string',
							},
						},
					},
				},
				required: ['detail'],
			},
		},
	},
};
