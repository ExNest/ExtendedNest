import { LocalDateTime } from "@js-joda/core";
import { ExtendedBaseEntity } from "classes";
import { Column, DeleteDateColumn } from "typeorm";
import { LocalDateTimeTransformer } from "utils";

export abstract class ExtendedBaseTimeEntity extends ExtendedBaseEntity {
  @Column({
    type: "timestamptz",
    nullable: false,
    transformer: new LocalDateTimeTransformer()
  })
  createdAt: LocalDateTime;

  @Column({
    type: "timestamptz",
    nullable: false,
    transformer: new LocalDateTimeTransformer()
  })
  updatedAt: LocalDateTime;

  @DeleteDateColumn({
    type: "timestamptz",
    nullable: true,
    transformer: new LocalDateTimeTransformer()
  })
  deletedAt: LocalDateTime;
}