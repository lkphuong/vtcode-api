import { Injectable } from '@nestjs/common';
import { BaseEntity, DeleteResult, Repository } from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
@Injectable()
export abstract class BaseRespository<T extends BaseEntity> {
  constructor(protected readonly entityRespository: Repository<T>) {}

  async findAll(): Promise<T[] | null> {
    return this.entityRespository.find();
  }

  async findByID(id: EntityId): Promise<T | null> {
    return this.entityRespository.findOne(id);
  }

  async create(userId: EntityId, createEntityData: any): Promise<T> {
    const entity = {
      ...createEntityData,
      create_by: userId,
    };

    return this.entityRespository.save(entity);
  }

  async update(
    id: EntityId,
    userId: EntityId,
    updateEntityData: any,
  ): Promise<T> {
    const entity = {
      ...updateEntityData,
      update_by: userId,
    };
    await this.entityRespository.update(id, entity);
    return this.findByID(id);
  }

  async delete(id: EntityId): Promise<DeleteResult> {
    return this.entityRespository.delete(id);
  }
}
