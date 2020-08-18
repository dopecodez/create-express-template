import { Router } from 'express';
import { inject } from 'inversify';
import { USERROUTE, BASEROUTE } from '../const/types';
import { IRouter } from './router.interface';
import { provide } from 'inversify-binding-decorators';

// Init router
const router = Router();

//Inject all new routes here and use them
@provide(BASEROUTE)
class BaseRouter implements IRouter{
    @inject(USERROUTE) userRouter!: IRouter;

    get routes(){
        router.use('/users', this.userRouter.routes);
        return router;
    }
}
