/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { deleteOne } from './delete-one/delete-one';
import { deleteRelationship } from './delete-relationship/delete-relationship';
import { getAll } from './get-all/get-all';
import { getOne } from './get-one/get-one';
import { getRelationship } from './get-relationship/get-relationship';
import { patchOne } from './patch-one/patch-one';
import { patchRelationship } from './patch-relationship/patch-relationship';
import { postOne } from './post-one/post-one';
import { postRelationship } from './post-relationship/post-relationship';

export declare const MethodsService: {
    getAll: typeof getAll;
    getOne: typeof getOne;
    deleteOne: typeof deleteOne;
    postOne: typeof postOne;
    patchOne: typeof patchOne;
    getRelationship: typeof getRelationship;
    deleteRelationship: typeof deleteRelationship;
    postRelationship: typeof postRelationship;
    patchRelationship: typeof patchRelationship;
};
