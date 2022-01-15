import { BriefStatus } from './../entity/brief.entity';
export class BriefDTO {
  id: number;
  title: string;
  comment: string;
  productId: number;
  status: BriefStatus;
}
