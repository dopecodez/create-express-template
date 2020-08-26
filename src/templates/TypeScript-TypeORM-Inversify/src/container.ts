import './config/ioc';

import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';

class ContainerData {
  container: Container;

  constructor() {
    this.container = new Container();
    this.container.load(buildProviderModule());
  }

  get getContainer() {
    return this.container;
  }
}

export const receptacle = new ContainerData();
