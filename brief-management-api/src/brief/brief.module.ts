import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BriefService } from './brief.service';
import { BriefController } from './brief.controller';
import { Brief } from 'src/entity/brief.entity';

@Module({
  providers: [BriefService],
  controllers: [BriefController],
  imports: [TypeOrmModule.forFeature([Brief])],
})
export class BriefModule {}
