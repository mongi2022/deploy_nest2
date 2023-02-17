import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { VideosEntity } from "./entity/videos.entity";
import { VideosController } from "./videos.controller";
import { VideosService } from "./videos.service";

    @Module({
        imports: [TypeOrmModule.forFeature([VideosEntity,PropertyEntity])],
        controllers:[VideosController],
        providers:[VideosService,PropertyService]
        
    })
   
    export class VideosModule {
    
    }