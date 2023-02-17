import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { GalleryEntity } from "./entity/gallery.entity";
import { GalleryController } from "./gallery.controller";
import { GalleryService } from "./gallery.service";

    @Module({
        imports: [TypeOrmModule.forFeature([GalleryEntity,PropertyEntity]),
        MulterModule.register({
            dest: './images',
          })],
        controllers:[GalleryController],
        providers:[GalleryService,PropertyService],
        
    })
       export class GalleryModule {
    
    }