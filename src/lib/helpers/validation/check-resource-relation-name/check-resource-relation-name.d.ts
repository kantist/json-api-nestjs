import { EntityMetadata } from 'typeorm';
import { ValidationError } from '../../../types';
export declare function checkResourceRelationName(relationName: string, entityMetadata: EntityMetadata): Promise<ValidationError[]>;
