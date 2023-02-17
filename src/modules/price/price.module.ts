import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { PriceEntity } from "./entity/price.entity";
import { PriceController } from "./price.controller";
import { PriceService } from "./price.service";

    @Module({
        imports: [TypeOrmModule.forFeature([PriceEntity,PropertyEntity])],
        controllers:[PriceController],
        providers:[PriceService,PropertyService]
        
    })
   
    export class PriceModule {
    
    }