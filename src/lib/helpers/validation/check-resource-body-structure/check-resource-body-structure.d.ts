import { EntityMetadata } from 'typeorm';
import { ValidationError } from '../../../types';
export declare function checkResourceBodyStructure(value: any, entityMetadata: EntityMetadata, isNullableRelationships?: boolean, isIdentifierRequired?: boolean): Promise<ValidationError[]>;
