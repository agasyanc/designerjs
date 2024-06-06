var l=Object.defineProperty;var d=(_,t,e)=>t in _?l(_,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):_[t]=e;var s=(_,t,e)=>(d(_,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))n(h);new MutationObserver(h=>{for(const o of h)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(h){const o={};return h.integrity&&(o.integrity=h.integrity),h.referrerPolicy&&(o.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?o.credentials="include":h.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(h){if(h.ep)return;h.ep=!0;const o=e(h);fetch(h.href,o)}})();class f{constructor(){s(this,"subscribers",[])}on(t,e){this.subscribers.push({name:t,callback:e})}emit(t,...e){this.subscribers.forEach(n=>{n.name===t&&n.callback(...e)})}}class c{constructor(t,e){this.x=t,this.y=e}}class p extends f{constructor(t,e){super(),this.canvas=t,this.scene=e,e.on("update",()=>{this.render(e)}),t.width=800,t.height=400,t.addEventListener("pointerdown",n=>{const h=new c(n.offsetX,n.offsetY);this.emit("pointerdown",h)})}render(t){const e=this.canvas.getContext("2d");e&&(e.clearRect(0,0,this.canvas.width,this.canvas.height),t.render(e))}}class b extends f{constructor(){super(...arguments);s(this,"children",[])}add(e){e.on("update",()=>{this.emit("update")}),this.children.push(e),this.emit("update")}remove(e){this.children.splice(this.children.indexOf(e),1)}render(e){for(let n of this.children)n.render(e)}}class g extends b{constructor(){super()}}class y extends b{constructor(){super();s(this,"font",null);s(this,"size",16);s(this,"text","Hello");s(this,"position",new c(0,0))}render(e){if(this.font){let n=this.position.x;const h=this.size/this.font.unitsPerEM,o=this.font.shape(this.text);console.log(o);const i=new Path2D;for(const a of o)i.addPath(new Path2D(this.font.glyphToPath(a.GlyphId)),new DOMMatrix().translate(n,this.position.y).flipY().scale(h)),n+=a.XAdvance*h;e.fill(i);return}e.save(),e.font=this.size+"px system-ui",e.fillText(this.text,100,100),e.restore()}}const m=2,v=-1;class w{constructor(t){s(this,"heapu8");s(this,"heapu32");s(this,"heapf32");s(this,"heapi32");s(this,"utf8Encoder");s(this,"malloc");s(this,"free");s(this,"free_ptr");s(this,"hb_blob_create");s(this,"hb_blob_destroy");s(this,"hb_face_create");s(this,"hb_face_get_upem");s(this,"hb_face_destroy");s(this,"hb_font_create");s(this,"hb_font_set_scale");s(this,"hb_font_destroy");s(this,"hb_face_collect_unicodes");s(this,"hb_set_create");s(this,"hb_set_destroy");s(this,"hb_set_get_population");s(this,"hb_set_next_many");s(this,"hb_buffer_create");s(this,"hb_buffer_add_utf8");s(this,"hb_buffer_guess_segment_properties");s(this,"hb_buffer_set_direction");s(this,"hb_shape");s(this,"hb_buffer_get_length");s(this,"hb_buffer_get_glyph_infos");s(this,"hb_buffer_get_glyph_positions");s(this,"hb_buffer_destroy");s(this,"hbjs_glyph_svg");s(this,"hb_font_set_variations");this.heapu8=new Uint8Array(t.memory.buffer),this.heapu32=new Uint32Array(t.memory.buffer),this.heapf32=new Float32Array(t.memory.buffer),this.heapi32=new Int32Array(t.memory.buffer),this.utf8Encoder=new TextEncoder,this.malloc=t.malloc,this.free=t.free,this.free_ptr=t.free_ptr,this.hb_blob_destroy=t.hb_blob_destroy,this.hb_blob_create=t.hb_blob_create,this.hb_face_create=t.hb_face_create,this.hb_face_get_upem=t.hb_face_get_upem,this.hb_face_destroy=t.hb_face_destroy,this.hb_face_collect_unicodes=t.hb_face_collect_unicodes,this.hb_set_create=t.hb_set_create,this.hb_set_destroy=t.hb_set_destroy,this.hb_set_get_population=t.hb_set_get_population,this.hb_set_next_many=t.hb_set_next_many,this.hb_font_create=t.hb_font_create,this.hb_font_set_scale=t.hb_font_set_scale,this.hb_font_set_variations=t.hb_font_set_variations,this.hb_font_destroy=t.hb_font_destroy,this.hb_buffer_create=t.hb_buffer_create,this.hb_buffer_add_utf8=t.hb_buffer_add_utf8,this.hb_buffer_guess_segment_properties=t.hb_buffer_guess_segment_properties,this.hb_buffer_set_direction=t.hb_buffer_set_direction,this.hb_shape=t.hb_shape,this.hb_buffer_get_length=t.hb_buffer_get_length,this.hb_buffer_get_glyph_infos=t.hb_buffer_get_glyph_infos,this.hb_buffer_get_glyph_positions=t.hb_buffer_get_glyph_positions,this.hb_buffer_destroy=t.hb_buffer_destroy,this.hbjs_glyph_svg=t.hbjs_glyph_svg}hb_tag(t){return(t.charCodeAt(0)&255)<<24|(t.charCodeAt(1)&255)<<16|(t.charCodeAt(2)&255)<<8|(t.charCodeAt(3)&255)<<0}}let r;class E{constructor(t){s(this,"ptr");s(this,"length");var e=r.utf8Encoder.encode(t);this.ptr=r.malloc(e.byteLength),r.heapu8.set(e,this.ptr),this.length=e.byteLength}destroy(){r.free(this.ptr)}}class z{constructor(t){s(this,"ptr");let e=r.malloc(t.length);r.heapu8.set(t,e),this.ptr=r.hb_blob_create(e,t.byteLength,m,e,r.free_ptr())}destroy(){r.hb_blob_destroy(this.ptr)}}function P(_,t){const e=r[`heap${t}`],n=e.BYTES_PER_ELEMENT,h=r.hb_set_get_population(_),o=r.malloc(h*n),i=o/n,a=e.subarray(i,i+h);return e.set(a,i),r.hb_set_next_many(_,v,o,h),a}class A{constructor(t,e){s(this,"ptr");this.ptr=r.hb_face_create(t.ptr,e)}getUnitsPerEM(){return r.hb_face_get_upem(this.ptr)}collectUnicodes(){const t=r.hb_set_create();r.hb_face_collect_unicodes(this.ptr,t);const e=P(t,"u32");return r.hb_set_destroy(t),e}destroy(){r.hb_face_destroy(this.ptr)}}class B{constructor(t){s(this,"ptr");s(this,"unitsPerEM");this.ptr=r.hb_font_create(t.ptr),this.unitsPerEM=t.getUnitsPerEM()}shape(t){let e=new M;e.addText(t),e.guessSegmentProperties(),e.shape(this,[]);let n=e.json();return e.destroy(),n}glyphToPath(t){let e=65536,n=r.malloc(e),h=r.hbjs_glyph_svg(this.ptr,t,n,e);var o=new TextDecoder("utf8");return h>0?o.decode(r.heapu8.subarray(n,n+h)):""}setVariations(t){var e=Object.entries(t),n=r.malloc(8*e.length);e.forEach(function(h,o){r.heapu32[n/4+o*2+0]=r.hb_tag(h[0]),r.heapf32[n/4+o*2+1]=h[1]}),r.hb_font_set_variations(this.ptr,n,e.length),r.free(n)}setScale(t,e){r.hb_font_set_scale(this.ptr,t,e)}destroy(){r.hb_font_destroy(this.ptr)}}class O{constructor(t,e,n,h,o,i){s(this,"GlyphId");s(this,"Cluster");s(this,"XAdvance");s(this,"YAdvance");s(this,"XOffset");s(this,"YOffset");this.GlyphId=t,this.Cluster=e,this.XAdvance=n,this.YAdvance=h,this.XOffset=o,this.YOffset=i}}class M{constructor(){s(this,"ptr");this.ptr=r.hb_buffer_create()}addText(t){let e=new E(t);r.hb_buffer_add_utf8(this.ptr,e.ptr,e.length,0,e.length),e.destroy()}guessSegmentProperties(){r.hb_buffer_guess_segment_properties(this.ptr)}shape(t,e){let n=r.malloc(e.length*4);r.heapu32.set(e,n/4),r.hb_shape(t.ptr,this.ptr,n,e.length),r.free(n)}setDirection(t){let e={ltr:4,rtl:5,ttb:6,btt:7}[t];r.hb_buffer_set_direction(this.ptr,e)}json(){for(var t=r.hb_buffer_get_length(this.ptr),e=new Array,n=r.hb_buffer_get_glyph_infos(this.ptr,0)/4,h=r.hb_buffer_get_glyph_positions(this.ptr,0)/4,o=r.heapu32.subarray(n,n+5*t),i=r.heapi32.subarray(h,h+5*t),a=0;a<t;++a)e.push(new O(o[a*5+0],o[a*5+2],i[a*5+0],i[a*5+1],i[a*5+2],i[a*5+3]));return e}destroy(){r.hb_buffer_destroy(this.ptr)}}const u=new Map;function L(_){return fetch(_).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t)).then(t=>{r=new w(t.instance.exports)})}function C(_,t){return fetch(t).then(e=>e.arrayBuffer().then(n=>{let h=new Uint8Array(n),o=new z(h),i=new A(o,0),a=new B(i);u.set(_,a),i.destroy(),o.destroy()}))}const S="/assets/hb-Ce-v8t8_.wasm";class T{constructor(t){s(this,"fonts",new Map);L(S).then(()=>{C("font",t).then(()=>{this.fonts=u})})}get(t){return this.fonts.get(t)}}class F{constructor(t){const e=new g,n=new p(t,e),h=t.dataset.fonts||"",o=new T(h);n.on("pointerdown",i=>{const a=new y;a.position=i,a.font=o.get("font")||null,e.add(a)})}}const I=document.getElementById("canvas");new F(I);
