import { Disptacher } from 'flux';

class AppDisptacher extends Dispatcher {
  dispatcher(action = {}) {
    console.log("Dispatched", action);
    super.dispatch(action);
  }
}

export default new AppDispatcher();
