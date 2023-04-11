import { Controller,Get} from '@nestjs/common';
import { User } from 'src/core/entities/user/user.entity';
import { AccountService } from './account.service';


@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService){}
    @Get()
    findAll() : Promise<User[]>{
        return this.accountService.findAll();
    }
        
}
