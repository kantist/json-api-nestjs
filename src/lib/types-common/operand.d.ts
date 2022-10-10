/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

export declare enum FilterOperand {
    eq = "eq",
    gt = "gt",
    gte = "gte",
    in = "in",
    like = "like",
    lt = "lt",
    lte = "lte",
    ne = "ne",
    nin = "nin",
    regexp = "regexp",
    some = "some"
}
export declare const OperandsMap: {
    eq: string;
    regexp: string;
    gt: string;
    gte: string;
    in: string;
    like: string;
    lt: string;
    lte: string;
    ne: string;
    nin: string;
    some: string;
};
export declare const OperandMapForNull: {
    ne: string;
    eq: string;
};
export declare const OperandMapForNullRelation: {
    ne: string;
    eq: string;
};
