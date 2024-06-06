import Canvas from "./canvas"
import Scene from "./scene"
import Point from "./point.ts";
import TextNode from "./text_node.ts";
import FontsManager from "./fonts_manager.ts";

export default class Designer {
  constructor(canvas_el: HTMLCanvasElement) {
    const scene = new Scene()
    const canvas = new Canvas(canvas_el, scene)
    const font_path = canvas_el.dataset.fonts || ""
    
    const fm = new FontsManager(font_path)

    canvas.on('pointerdown', (point:Point)=>{
      const text = new TextNode()
      text.position = point
      text.font = fm.get('font') || null
      scene.add(text)
      
    })

    
    
  }
}