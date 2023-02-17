import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaEntity } from "./entity/area.entity";
import { AreaController } from "./area.controller";
import { AreaService } from "./area.service";
import { PropertyService } from "../property/property.service";
import { PropertyEntity } from "../property/entity/property.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([AreaEntity,PropertyEntity])],
        controllers:[AreaController],
        providers:[AreaService,PropertyService]
        
    })
   
    export class AreaModule {
    
    }