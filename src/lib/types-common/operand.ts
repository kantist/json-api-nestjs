/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


export enum FilterOperand {
  eq = 'eq',
  gt = 'gt',
  gte = 'gte',
  in = 'in',
  like = 'like',
  lt = 'lt',
  lte = 'lte',
  ne = 'ne',
  nin = 'nin',
  regexp = 'regexp',
  some = 'some',
}

export const OperandsMap = {
	[FilterOperand.eq]: '= :EXPRESSION',
	[FilterOperand.regexp]: '~* :EXPRESSION',
	[FilterOperand.gt]: '> :EXPRESSION',
	[FilterOperand.gte]: '>= :EXPRESSION',
	[FilterOperand.in]: 'IN (:...EXPRESSION)',
	[FilterOperand.like]: 'ILIKE :EXPRESSION',
	[FilterOperand.lt]: '< :EXPRESSION',
	[FilterOperand.lte]: '<= :EXPRESSION',
	[FilterOperand.ne]: '<> :EXPRESSION',
	[FilterOperand.nin]: 'NOT IN (:...EXPRESSION)',
	[FilterOperand.some]: '&& :EXPRESSION',
};

export const OperandMapForNull = {
	[FilterOperand.ne]: 'IS NOT NULL',
	[FilterOperand.eq]: 'IS NULL',
};

export const OperandMapForNullRelation = {
	[FilterOperand.ne]: 'EXISTS EXPRESSION',
	[FilterOperand.eq]: 'NOT EXISTS EXPRESSION',
};
