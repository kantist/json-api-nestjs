/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Attributes, Relationships } from './response';

export declare type ResourceRequestObject<T> = {
    data: {
        type: string;
        id?: string;
        attributes: Attributes<Omit<T, 'id'>>;
        relationships?: Partial<Relationships<T>>;
    };
};
