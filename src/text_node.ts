import { HarfBuzzFont } from "./harfbuzz";
import Point from "./point";
import SceneNode from "./scene_node";

export default class TextNode extends SceneNode{
  font:HarfBuzzFont|null = null;
  size:number = 16;
  text:string = 'Hello\ncmds\n,vkdfsml\n\n,vlds' + String.fromCharCode(Math.random() * 100);
  position:Point = new Point(0, 0);
  interliniage:number = 1.2;
  cached:Path2D|null = null;
  
  constructor(){
      super();
  }

  render(ctx: CanvasRenderingContext2D): void {
    
    if (this.font) {
      if (!this.cached) {
        const lines = this.text.split('\n');

        let x = 0;
        let y = 0;
        const path2d_text = new Path2D();
        const scale = this.size / this.font.unitsPerEM
        for (const line of lines) {
          let shapes = this.font.shape(line);
          for (const shape of shapes) {
            path2d_text.addPath(new Path2D(this.font.glyphToPath(shape.GlyphId)), new DOMMatrix().translate(x, y).flipY().scale(scale));
            x += shape.XAdvance * scale;
          }
          x = 0
          y += this.size * this.interliniage;
        }
       
        this.cached = path2d_text;
      }
      ctx.save()
      ctx.translate(this.position.x, this.position.y)
      ctx.fill(this.cached);
      ctx.restore()
      return;
      
      
    }
    ctx.save()
    ctx.font = this.size + 'px system-ui';
    ctx.fillText(this.text, 100, 100);
    ctx.restore();
  }
}