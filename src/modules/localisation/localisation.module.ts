import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { LocalisationEntity } from "./entity/localisation.entity";
import { LocalisationController } from "./localisation.controller";
import { LocalisationService } from "./localisation.service";

    @Module({
        imports: [TypeOrmModule.forFeature([LocalisationEntity,PropertyEntity])],
        controllers:[LocalisationController],
        providers:[LocalisationService,PropertyService]
        
    })
   
    export class LocalisationModule {
    
    }