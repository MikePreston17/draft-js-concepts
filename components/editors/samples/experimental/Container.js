/**
 * IOC Container for React
 * https://codesandbox.io/s/ioc-container-react-6oov7
 * Sample:
 *  let c = createContainer();
 *  let SuperElite = c.SuperElite;
 */
export default class Container {
  constructor() {
    this.services = {};
  }
  service(name, cb) {
    Object.defineProperty(this, name, {
      get: () => {
        if (!this.services.hasOwnProperty(name)) {
          this.services[name] = cb(this);
        }
        return this.services[name];
      },
      configurable: true,
      enumerable: true
    });
    return this;
  }
}
