import { Request, Response, Router } from 'express';
import { IRouter } from '../router.interface';
import { provide } from 'inversify-binding-decorators';
import { USERROUTE, USERSERVICE } from '../../const/types';
import { inject } from 'inversify';
import { IUserService } from './services/userService.interface';

const router = Router();

@provide(USERROUTE)
class UserRouter implements IRouter{// eslint-disable-line
    @inject(USERSERVICE) private userService! : IUserService

    get routes(){
        router.get('/', async (req: Request, res: Response) => {
             // eslint-disable-next-line no-useless-catch
            try {
                const quote = await this.userService.getRandomTest();
                return res.send(quote);
            } catch (err) {
                throw err;
            }
        });
        return router;
    }
}