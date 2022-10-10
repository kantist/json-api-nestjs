/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


export type Enum<T> = Record<keyof T, number | string> & {
  [k: number]: string;
};
export type EntityField<T> =
  | string
  | number
  | boolean
  | Enum<T>
  | Date
  | string[]
  | number[]
  | Enum<string>;

export type EntityProps<T> = {
  [P in keyof T]: T[P] extends EntityField<T> ? P & string : never;
}[keyof T];

export type EntityRelation<T> = {
  [P in keyof T]: T[P] extends EntityField<T> ? never : P & string;
}[keyof T];

export type ElementType<T> = T extends (infer U)[] ? U : T;
