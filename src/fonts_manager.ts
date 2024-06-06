import * as hb from './harfbuzz.ts';
// @ts-ignore
import wasmUrl from './hb.wasm?url';

export default class FontsManager {
  fonts: Map<string, hb.HarfBuzzFont> = new Map();
  constructor(font_path:string){
    hb.loadHarfbuzz(wasmUrl).then(()=>{
      hb.loadAndCacheFont('font', font_path).then(()=>{
        this.fonts = hb.harfbuzzFonts
      })
    })
  }
  get(name:string){
    return this.fonts.get(name)
  }
}