import { Controller ,Get,Post,Put,Delete,Patch,Request,Header,HttpCode,Redirect,Param,Query,Headers, Body} from "@nestjs/common";
import { CreateUserDTO } from "../dto";


let USERS=[];

@Controller("/userCrud")
 export class userCrudController{


  
    @Post()     // this api will work without Router
      createCrud(@Body() createUserCrudDto:CreateUserDTO){
       
        USERS.push(createUserCrudDto)
        return "this is Post CRUD Controller  Resonse"
    }

    @Get('/getUserCrud')    // this api will work with - /userCrud/getUserCrud
    getCruds(){
        return USERS
    }
 
    @Get('getUserCrud/:id')     // id - is Index NUMBER
    getCrud(@Param('id') id:number ){
        return USERS.find((user)=>+user.id===+id)
        
    }
   
    @Put('/getUserCrud/update/:id')
    updateCrud(@Param('id') id:number, @Body() updateCrudDTO:CreateUserDTO){    // WILL PASS 2 Paramater bcz - kise update karna h , and kya update karna h
       const userIndex=USERS.findIndex((user)=>+user.id===+id)

       if(!userIndex){
        return  'no user founf'
       }
       else {USERS[userIndex]=updateCrudDTO}
       return USERS
    }
    
    @Delete('/getUserCrud/delete/:id')
    deleteCrud(@Param('id') id:number){    
       USERS=USERS.filter((user)=>+user.id===+id)
       return {
        msg:'deletd Sucessfully',
        data:USERS
       }
    
    }
   

}