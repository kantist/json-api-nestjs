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

export declare const swaggerMethod: {
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
export declare const errorSchema: {
    type: string;
    properties: {
        status: {
            type: string;
        };
        errors: {
            type: string;
            items: {
                type: string;
                properties: {
                    detail: {
                        type: string;
                    };
                    source: {
                        type: string;
                        properties: {
                            parameter: {
                                type: string;
                            };
                        };
                    };
                };
                required: string[];
            };
        };
    };
};
