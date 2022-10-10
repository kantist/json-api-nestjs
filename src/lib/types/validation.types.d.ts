/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

export interface ValidationError {
    status?: string;
    code?: string;
    title?: string;
    meta?: string;
    detail: string;
    source?: {
        parameter?: string;
        pointer?: string;
    };
}
