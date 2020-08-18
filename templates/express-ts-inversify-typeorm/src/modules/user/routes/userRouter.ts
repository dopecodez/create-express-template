import { Request, Response, Router, Express } from 'express';
import { IRouter } from '../../router.interface';
import { provide } from 'inversify-binding-decorators';
import { USERROUTE, USER_SERVICE } from '../../../const/types';
import { inject } from 'inversify';
import { IUserService } from '../services/userService.interface';

const router = Router();

@provide(USERROUTE)
class UserRouter implements IRouter{
    @inject(USER_SERVICE) private userService! : IUserService

    get routes(){
        router.get('/', async (req: Request, res: Response) => {
            try {
                console.log('this hits and returns')
                let quote = await this.userService.getRandomTest();
                return res.send(quote);
            } catch (err) {
                throw err;
            }
        });
        return router;
    }
}