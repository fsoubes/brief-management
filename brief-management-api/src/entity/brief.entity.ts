import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BriefStatus {
  Created = 0,
  InProgress = 1,
  Done = 2,
}

@Entity()
export class Brief {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 64 })
  title: string;

  @Column({ nullable: true, length: 1024 })
  comment: string;

  @Column({ nullable: true })
  productId: number;

  @Column({ nullable: false, default: BriefStatus.Created })
  status: BriefStatus;
}
