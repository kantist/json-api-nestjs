import { EntityMetadata } from 'typeorm';
import { QueryParams, ValidationError } from '../../../types';
export declare function checkQueryFilterParam(queryParams: QueryParams, entityMetadata: EntityMetadata): Promise<ValidationError[]>;
