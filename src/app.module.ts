import { Module } from '@nestjs/common';
import { userController } from './userModule/users.controller';
import { adminController } from './userModule/admin.controller';
import { userCrudController } from './userModule/userCrud.controller copy';


@Module({

  controllers: [userController,adminController,userCrudController]    // to make Api/Req - Route/Controller

})
export class AppModule {}
