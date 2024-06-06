import Eventer from "./eventer";
import Point from "./point"
import Scene from "./scene";

export default class Canvas extends Eventer{
  constructor(public canvas:HTMLCanvasElement, public scene:Scene) {
    super();
    scene.on('update', ()=>{this.render(scene)})
    canvas.width = 800;
    canvas.height = 400;
    
    canvas.addEventListener('pointerdown', (e:PointerEvent)=>{
      const pointer = new Point(e.offsetX, e.offsetY)
      
      this.emit('pointerdown', pointer)
    })
  }
  render(scene:Scene){
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    scene.render(ctx)
  }
}