import { ExtendedBaseEntity } from "./extended-base.entity";
import { BaseEntity, EntityManager, EntityTarget, QueryRunner, Repository } from "typeorm";
export declare class ExtendedBaseRepository<T extends (BaseEntity | ExtendedBaseEntity)> extends Repository<T> {
    constructor(target: EntityTarget<T>, manager: EntityManager, queryRunner?: QueryRunner);
}
