import { BriefStatus } from 'src/entity/brief.entity';

export class UpdateBriefDTO {
  title?: string;
  comment?: string;
  status?: BriefStatus;
  productId: number;
}
