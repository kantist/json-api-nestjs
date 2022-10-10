/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Entity } from '../../../types';
import * as inputQuerySchemaJson from '../schema/input-query-schema.json';

export declare function inputQuerySchema(entity: Entity, fieldsArray: string[], relationsField: Record<string, string[]>, schemaName: string): typeof inputQuerySchemaJson;
