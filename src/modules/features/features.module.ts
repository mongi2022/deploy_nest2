import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { FeaturesEntity } from "./entity/features.entity";
import { FeaturesController } from "./features.controller";
import { FeaturesService } from "./features.service";

    @Module({
        imports: [TypeOrmModule.forFeature([FeaturesEntity,PropertyEntity])],
        controllers:[FeaturesController],
        providers:[FeaturesService,PropertyService]
        
    })
   
    export class FeaturesModule {
    
    }