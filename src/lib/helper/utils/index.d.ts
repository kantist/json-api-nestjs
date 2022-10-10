/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { EntityTarget } from 'typeorm/common/EntityTarget';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import { Entity } from '../../types';

export declare const nameIt: (name: any, cls: any) => {
    new (...arg: any[]): {
        [x: string]: any;
    };
    [x: string]: any;
};
export declare const getEntityName: <Entity_1 extends ObjectLiteral>(entity: EntityTarget<Entity_1>) => string;
export declare function isString<T, P extends T>(value: T): value is P;
export declare function snakeToCamel(str: string): string;
export declare function camelToKebab(str: string): string;
export declare function upperFirstLetter(string: string): string;
export declare function getProviderName(entity: EntityTarget<Entity>, name: string): string;
