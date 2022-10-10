/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import * as bodyRelationshipSchemaJson from '../schema/body-relationship-schema.json';

export function bodyRelationshipSchema(): typeof bodyRelationshipSchemaJson {
	const json: typeof bodyRelationshipSchemaJson = JSON.parse(
		JSON.stringify(bodyRelationshipSchemaJson)
	);
	json.$id = `${json.$id}/bodyRelationshipSchema`;

	return json;
}
