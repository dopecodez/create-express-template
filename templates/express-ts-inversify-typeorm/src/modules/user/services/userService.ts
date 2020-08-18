import { inject } from "inversify";
import { PROXY, USER_SERVICE } from '../../../const/types';
import { provide } from "inversify-binding-decorators";
import { IUserService } from "./userService.interface";

@provide(USER_SERVICE)
class UserService implements IUserService{

    async getRandomTest(): Promise<Object>{
        try{
            return {};
        }catch(error){
            console.log(error);
            return error;
        }
    }
}