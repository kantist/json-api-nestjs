/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Entity } from '../../../types';
import * as transformQuerySchemaJson from '../schema/transform-query-schema.json';

export declare function transformQuerySchema(entity: Entity, fieldsArray: string[], relationsField: Record<string, string[]>, schemaName: string, arrayPropsConfig: {
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
}): typeof transformQuerySchemaJson;
