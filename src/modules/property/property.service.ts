import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyDTO } from "./dto/property.dto";
import { PropertyEntity } from "./entity/property.entity";

@Injectable()
export class PropertyService{
constructor(@InjectRepository(PropertyEntity) 
private readonly propertyRepository:Repository<PropertyEntity>,
          
          ){}


 getAllProperties(){
    return  this.propertyRepository.find();
}

getPropertyById(id:number){
    return this.propertyRepository.findOne({where:{id}})

}



async createProperty(data: PropertyDTO):Promise<PropertyEntity>{
        const property = await this.propertyRepository.create(data );
        return this.propertyRepository.save(property);
      
 
}

 async updateProperty( id:number, data:Partial<PropertyEntity>){
    await this.propertyRepository.update({id},data)
     const property=await this.propertyRepository.findOne({where:{id}})
     if ( property ==null) throw new NotFoundException(`property N°: ${id} n'existe pas`)
     return property
}

async deleteProperty(id:number):Promise<PropertyEntity>{

    const property= await this.propertyRepository.findOne({where:{id}})
    
    if ( property ==null) throw new NotFoundException(`property N°: ${id} n'existe pas`)
    this.propertyRepository.delete({id})

    return property
}


}