import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBriefDTO } from 'src/dto/create-brief.dto';
import { UpdateBriefDTO } from 'src/dto/update-brief.dto';
import { BriefService } from './brief.service';

@Controller('briefs')
export class BriefController {
  constructor(private readonly briefService: BriefService) {}

  @Post()
  public async createOne(@Body() createBriefRequest: CreateBriefDTO) {
    return await this.briefService.createOne(createBriefRequest);
  }

  @Put('/:id')
  public async updateOneBrief(
    @Param('id') briefId: number,
    @Body() updateBriefRequest: UpdateBriefDTO,
  ) {
    return await this.briefService.updateOneBrief(briefId, updateBriefRequest);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteOneBrief(@Param('id') briefId: number) {
    return await this.briefService.deleteOneBrief(briefId);
  }

  @Get('/:id')
  public async getSingleBrief(@Param('id') briefId: number) {
    return await this.briefService.getOne(briefId);
  }

  @Get()
  public async getAllBriefs() {
    return await this.briefService.getAll();
  }
}
