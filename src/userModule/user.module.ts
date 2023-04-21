import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
import { userController } from './users.controller';


@Module({
  imports: [],
  controllers: [userController],
  providers: [],           //provides:[userServices]
  exports: [],
})


export class UserModule {}
