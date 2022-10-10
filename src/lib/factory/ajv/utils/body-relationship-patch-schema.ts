/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import * as bodyRelationshipPatchSchemaJson from '../schema/body-relationship-patch-schema.json';

export function bodyRelationshipPatchSchema(): typeof bodyRelationshipPatchSchemaJson {
	const json: typeof bodyRelationshipPatchSchemaJson = JSON.parse(
		JSON.stringify(bodyRelationshipPatchSchemaJson)
	);
	json.$id = `${json.$id}/bodyRelationshipPatchSchema`;

	return json;
}
