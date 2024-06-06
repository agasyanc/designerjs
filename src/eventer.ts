export default class Eventer {
  subscribers:{name:string, callback:Function}[] = [];
  constructor(){

  }
  on(name:string, callback:Function) {
    this.subscribers.push({name, callback});
  }
  emit(name:string, ...args:any[]) {
    this.subscribers.forEach(subscriber => {
      if(subscriber.name === name) subscriber.callback(...args);
    });
  }
}