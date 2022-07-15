import { EntityMetadata } from 'typeorm';
import { ValidationError, QueryParams, QueryField } from '../../../types';
export declare function checkEntityFieldMetadata(name: string, queryParams: QueryParams, entityMetadata: EntityMetadata, sourceParameter: QueryField): ValidationError[];
