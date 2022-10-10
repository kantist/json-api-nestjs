/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Entity } from '../../../types';
import { inputBodyPostSchema } from './';

export declare function inputBodyPatchSchema(entity: Entity, fieldsArray: string[], relationsField: Record<string, string[]>, schemaName: string, arrayPropsConfig: {
    arrayProps: {
        [key: string]: boolean;
    };
    relationArrayProps: {
        [key: string]: {
            [key: string]: boolean;
        };
    };
    relationType: {
        [key: string]: Function | string;
    };
}): ReturnType<typeof inputBodyPostSchema>;
