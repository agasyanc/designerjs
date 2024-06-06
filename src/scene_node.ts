import Eventer from "./eventer";

export default class SceneNode extends Eventer{
  children: SceneNode[] = [];

  add(child: SceneNode){
    child.on('update', ()=>{this.emit('update')})
    this.children.push(child);
    this.emit('update');
  }
  remove(child: SceneNode){
    this.children.splice(this.children.indexOf(child), 1);
  }
  render(ctx: CanvasRenderingContext2D){
    for(let child of this.children){
      child.render(ctx);
    }
  }
}