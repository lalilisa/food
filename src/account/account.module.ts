import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entities/user/user.entity';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[AccountService],
    controllers:[AccountController]
})
export class AccountModule {
}

