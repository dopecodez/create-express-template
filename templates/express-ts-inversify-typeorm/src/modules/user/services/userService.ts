import { USER_SERVICE } from '../../../const/types';
import { provide } from "inversify-binding-decorators";
import { IUserService } from "./userService.interface";

@provide(USER_SERVICE)
class UserService implements IUserService{// eslint-disable-line

    async getRandomTest(): Promise<any>{
        try{
            return {};
        }catch(error){
            console.log(error);
            return error;
        }
    }
}