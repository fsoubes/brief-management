import { BriefStatus } from './../entity/brief.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBriefDTO } from 'src/dto/create-brief.dto';
import { Brief } from 'src/entity/brief.entity';
import { Repository } from 'typeorm';
import { BriefDTO } from 'src/dto/brief.dto';
import { UpdateBriefDTO } from 'src/dto/update-brief.dto';

@Injectable()
export class BriefService {
  constructor(
    @InjectRepository(Brief) private briefRepository: Repository<Brief>,
  ) {}

  private entityToDTO(brief: Brief): BriefDTO {
    const briefDTO = new BriefDTO();
    briefDTO.id = brief.id;
    briefDTO.title = brief.title;
    briefDTO.comment = brief.comment;
    briefDTO.productId = brief.productId;
    briefDTO.status = brief.status;
    return briefDTO;
  }

  private async findBrief(id: number): Promise<Brief> {
    const brief: Brief = await this.briefRepository.findOne(id);

    if (!brief)
      throw new NotFoundException(`brief with this id ${id} was not found`);

    return brief;
  }

  public async createOne(createBriefRequest: CreateBriefDTO) {
    const brief: Brief = new Brief();
    brief.title = createBriefRequest.title;
    brief.comment = createBriefRequest.comment;
    brief.productId = createBriefRequest.productId;
    brief.status = BriefStatus.Created;

    await this.briefRepository.save(brief);

    return this.entityToDTO(brief);
  }

  public async updateOneBrief(
    briefId: number,
    updateBriefRequest: UpdateBriefDTO,
  ) {
    const brief: Brief = await this.findBrief(briefId);

    brief.title = updateBriefRequest.title || brief.title;
    brief.comment = updateBriefRequest.comment || brief.comment;
    brief.productId = updateBriefRequest.productId || brief.productId;
    brief.status = updateBriefRequest.status || brief.status;

    await this.briefRepository.save(brief);

    return this.entityToDTO(brief);
  }

  public async deleteOneBrief(briefId: number) {
    await this.briefRepository.delete(await this.findBrief(briefId));
  }

  public async getOne(briefId: number) {
    return this.entityToDTO(await this.findBrief(briefId));
  }

  public async getAll() {
    const briefs: Brief[] = await this.briefRepository.find();
    return briefs.map((x) => this.entityToDTO(x));
  }
}
