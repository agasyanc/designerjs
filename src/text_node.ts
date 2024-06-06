import { HarfBuzzFont } from "./harfbuzz";
import Point from "./point";
import SceneNode from "./scene_node";

export default class TextNode extends SceneNode{
  font:HarfBuzzFont|null = null;
  size:number = 16;
  text:string = 'Hello';
  position:Point = new Point(0, 0);
  
  constructor(){
      super();
  }
  render(ctx: CanvasRenderingContext2D): void {
    
    if (this.font) {
      let x = this.position.x;
      const scale = this.size / this.font.unitsPerEM
      const shapes = this.font.shape(this.text);
      console.log(shapes);
      
      const path2d_text = new Path2D();
      for (const shape of shapes) {
        path2d_text.addPath(new Path2D(this.font.glyphToPath(shape.GlyphId)), new DOMMatrix().translate(x, this.position.y).flipY().scale(scale));
        x += shape.XAdvance * scale;
      }
      ctx.fill(path2d_text);
      return;
    }
    ctx.save()
    ctx.font = this.size + 'px system-ui';
    ctx.fillText(this.text, 100, 100);
    ctx.restore();
  }
}