/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Entity } from '../../../types';
import * as inputBodySchemaJson from '../schema/input-body-schema.json';

export declare function inputBodyPostSchema(entity: Entity, fieldsArray: string[], relationsField: Record<string, string[]>, schemaName: string, arrayPropsConfig: {
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
}): typeof inputBodySchemaJson;
