import {Controller,Get, Post,Put,Delete,Patch,Request,Body} from '@nestjs/common';
import { rejects } from 'assert';
import { resolve } from 'path';

@Controller('/user')
export class userController {
  // Controller

  @Get('/profile') // -Api HJandler   // jab /user  control ke baad koi aur control bhi ho  -  like - /user/profile
  async getprofile(@Request() req) {
    //Api Controlleer Function
    console.log(req); // to get req/data details   -  we will pass req as a parameter

    //  return "this is nested router Resonse"

    //  return {
    //   msg:  "this is Json Response"
    //  }

    return new Promise((resolve, reject) => {
      resolve({
        msg: 'this Json Responce is Coming from Resolve',
      });
    });
  }


  @Post('/signUp')
  createSignUp(@Body() Body:Record<string,any>){
    console.log(Body)
     return {
        msg:"Data Post / SignUp Sucessfully",
        data: Body
    }
  }
}


