import { Controller ,Get,Post,Put,Delete,Patch,Request,Header,HttpCode,Redirect,Param,Query,Headers} from "@nestjs/common";
import { rejects } from "assert";
import { query } from "express";
import { resolve } from "path";


@Controller("/admin")
 export class adminController{
  
    @Header("token",  "jwt")        // to send/set Header in key-value pair ,  we can also set/send Multipal hearder
    @Header ("x-auth" , "barrier-token")   
    @HttpCode (501)   // to send Custom Status Code
    @Redirect("/admin/accounts")
    @Post()    // jab admin/ ke baad - koi control na ho
     getDeatils(){
        return "this is Post Controller  Resonse"
    }
 
     @Get("/accounts")
    redirectRouter(){
        return "this is Redirect Router Response"
    }

    @Get("/accounts/:id")   // to make Params Api
    getAllQuery(@Param() Params:Record<string,any>){     // TO get  All Params
        console.log(Params)
        return "this response is Coming from - Dynamic/path All Param/Query"
    }

    @Get("/accounts/:id/:name") 
    getSpecificQuery(@Param('name') Param:string){        // to Get Specific Params
        console.log(Param)
        return "Spicific Query Reponse"
    }

    @Get('/query')
    getQueryParams(@Query() Query:Record<string ,any>){   // to Get - All Query
        console.log(Query)
        return "Query Params - Response"
    }


    @Get('/getHeader')
    getHeader(@Headers() Headers:Record<string,any>){     // to Get -  Req Header All Deatils
      console.log(Headers)
      return "To Get Header Deatils"

    }
    // getSpecificHeader(@Headers('host') Headers:string){       // to Get - Specific Header deatils
    //     console.log(Headers)
    //     return 'Specific Header'
    // }




}