/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { FilterOperand as FilterOperandType } from '../../types-common';

export declare const OperandsMapTitle: {
    in: string;
    nin: string;
    eq: string;
    ne: string;
    gt: string;
    gte: string;
    like: string;
    lt: string;
    lte: string;
    regexp: string;
    some: string;
};
export declare class FilterOperand {
	[FilterOperandType.in]: string[];
	[FilterOperandType.nin]: string[];
	[FilterOperandType.eq]: string;
	[FilterOperandType.ne]: string;
	[FilterOperandType.gte]: string;
	[FilterOperandType.gt]: string;
	[FilterOperandType.lt]: string;
	[FilterOperandType.lte]: string;
	[FilterOperandType.regexp]: string;
	[FilterOperandType.some]: string;
}
