import React, { Component } from "react";
import earth_B from "./../assets/img/earth_B.jpg";
import earth_L from "./../assets/img/earth_L.jpg";
import earth_C from "./../assets/img/earth_C.png";
import mask_B from "./../assets/img/mask_B.png";
import mask_L from "./../assets/img/mask_L.png";
import mask_C from "./../assets/img/mask_C.png";

import milkyway2 from "./../assets/img/milky_way2.jpg";
import galaxy_1 from "./../assets/img/galaxy_1.png";
import galaxy_2 from "./../assets/img/galaxy_2.png";

import "./Space.sass";

class Space extends Component {
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.resource = {
      earth_B : [mask_B, earth_B],
      earth_L : [mask_L, earth_L],
      earth_C : [mask_C, earth_C],
      milkyway : milkyway2,
      galaxy_1 : galaxy_1,
      galaxy_2 : galaxy_2
    };
    this.state = {
      canvas_width: 1800,
      canvas_height: 1800,
      earth_width : 1200, 
      earth_height : 1200,
      earth_ground : 3600,
      TickLate : 24,
      earthExtraSize : 500,
      spaceExtraSize : 1000
    };
    this.SPACE = {
    };
  }
  componentDidMount() {
    this.setupCanvas();
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll(e){
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    let totalHeigh = document.documentElement.scrollHeight - window.innerHeight;
    let ratio = scrollTop / totalHeigh;
    document.getElementById("milky").style.transform = "translate3d(0, -"+this.state.earthExtraSize*ratio+"px, 0)";
    document.getElementById("earth").style.transform = "translate3d(0, -"+this.state.spaceExtraSize*ratio+"px, 0)";
  }
  setupCanvas() {
    console.log("---setupCanvas---")
    this.SPACE.ctx_B = this.refs.earth_B.getContext("2d");
    this.SPACE.ctx_L = this.refs.earth_L.getContext("2d");
    this.SPACE.ctx_C = this.refs.earth_C.getContext("2d");
    this.SPACE.ctx_back = this.refs.milky.getContext("2d");
    this.SPACE.shading = this.refs.shading.getContext("2d");
    this.SPACE.Loading = this.refs.Loading.getContext("2d");
    this.drawImageCanvas(
      'b_space',
      this.resource.milkyway,
      this.SPACE.ctx_back,
      0, 0, this.state.canvas_width, this.state.canvas_width*2
    ).then(()=>{
      return this.drawImageCanvasWithMask(
        'b_light',
        this.resource.earth_L,
        this.SPACE.ctx_L,
        this.getX(),
        this.getY()
      )
    })
    .then(()=>{
      return this.drawImageCanvasWithMask(
        'b_black',
        this.resource.earth_B,
        this.SPACE.ctx_B,
        this.getX(),
        this.getY()
      )
    }).then(()=>{
      return this.drawImageCanvasWithMask(
        'b_cloud',
        this.resource.earth_C,
        this.SPACE.ctx_C,
        this.getX(),
        this.getY()
      )
    }).then(()=>{
      return this.drawShading()
    }).then(()=>{
      console.log("끗");
      console.log("TCL: Header -> newImg.onload -> this.SPACE", this.SPACE)
      this.initAniamtion();
    })
  }
  drawArc(ctx, x, y, size){
    ctx.beginPath();
    ctx.arc(x, y, size,0,2 * Math.PI);
  }
  drawRGradient(ctx, first, second, colors){
    let gradient = ctx.createRadialGradient(
      first.x, first.y, first.size,
      second.x, second.y, second.size
    );
    for (const iterator of colors) {
      gradient.addColorStop(iterator[0], iterator[1]);
    }
    ctx.fillStyle = gradient;
    ctx.fill();
  }
  drawShading(){
    let CTX_SHADING = this.SPACE.shading;
    let CENTER_X = this.getX('center');
    let CENTER_Y = this.getY('center');
    let EARTH_SIZE = this.state.earth_height/2;
    this.drawArc(
      CTX_SHADING,
      CENTER_X,
      CENTER_Y,
      EARTH_SIZE + 150,
    )
    this.drawRGradient(CTX_SHADING, {
      x: CENTER_X,
      y: CENTER_Y,
      size: EARTH_SIZE
    }, {
      x: CENTER_X,
      y: CENTER_Y,
      size: EARTH_SIZE + 55
    }, [[0, 'transparent'], [0.0001, 'rgba(33, 84, 150, 0.8)'], [1, 'transparent']])
    
    this.drawArc(
      CTX_SHADING,
      CENTER_X,
      CENTER_Y,
      EARTH_SIZE,
    )
    this.drawRGradient(CTX_SHADING, {
      x: CENTER_X,
      y: CENTER_Y,
      size: EARTH_SIZE - 100
    }, {
      x: CENTER_X,
      y: CENTER_Y,
      size: EARTH_SIZE
    }, [[0, 'transparent'], [0.0001, 'rgba(60, 105, 175, 0.01)'], [1, 'rgba(60, 105, 175, 0.4)']])

    this.drawArc(
      CTX_SHADING,
      CENTER_X,
      CENTER_Y,
      EARTH_SIZE,
    )
    this.drawRGradient(CTX_SHADING, {
      x: CENTER_X+CENTER_X/2,
      y: CENTER_Y-CENTER_Y/2,
      size: 0
    }, {
      x: CENTER_X,
      y: CENTER_Y,
      size: EARTH_SIZE
    }, [[0, 'rgba(255, 255, 255, 0.5)'], [1, 'transparent']])
  }
  initAniamtion(){
    let tick = this.state.TickLate;
    let count = 0;
    let x = {
      L : 0,
      B : 0,
      C : 0
    }
    this.interval = setInterval(()=>{
      x.L -= 0.05;
      x.B -= 0.05;
      x.C -= 0.1;
      for (const key in x) {
        if(x[key] < -(this.state.earth_ground/2)){
          x[key] = 0;
        }
      }
      this.SPACE.ctx_L.drawImage(this.SPACE.b_light.img, x.L, this.getY(), this.state.earth_ground, this.state.earth_height)
      this.SPACE.ctx_B.drawImage(this.SPACE.b_black.img, x.B, this.getY(), this.state.earth_ground, this.state.earth_height)
      
      this.SPACE.ctx_C.globalCompositeOperation = 'source-over';
      this.SPACE.ctx_C.clearRect(0, 0, this.state.canvas_width, this.state.canvas_height);
      this.SPACE.ctx_C.drawImage(this.SPACE.b_cloud.mask, this.getX(), this.getY(), this.state.earth_width, this.state.earth_height);
      this.SPACE.ctx_C.globalCompositeOperation = 'source-in';
      this.SPACE.ctx_C.drawImage(this.SPACE.b_cloud.img, x.C, this.getY(), this.state.earth_ground, this.state.earth_height)
      count++;
      if(count > 5000){
        // this.stopAnimation();
      }
    }, tick/1000)
  }
  stopAnimation(){
    clearInterval(this.interval);
  }
  getX(posi){
    if(posi === 'center')
      return this.state.canvas_width/2;
    return (this.state.canvas_width - this.state.earth_width)/2;
  }
  getY(posi){
    if(posi === 'center')
      return -(this.state.earth_height/3) + this.state.earth_height/2;
    return -(this.state.earth_height/3);
  }
  drawImageCanvas(imgName, imgSrc, ctx, x = 0, y = 0){
    var loadImg = new Promise((resolve, reject)=>{
      this.SPACE[imgName] = {};
      let newImg = new Image();
      newImg.src = imgSrc;
      newImg.onload = () => {
        let rato = this.state.canvas_width / newImg.naturalWidth;
        let height = this.state.canvas_height * rato;

        ctx.drawImage(newImg, x, y, this.state.canvas_width, height);
        this.SPACE[imgName].img = newImg;
        resolve();
      }
    })
    return loadImg;
  }
  drawImageCanvasWithMask(imgName, resource, ctx, x = 0, y = 0){
    var loadImg = new Promise((resolve, reject)=>{
      this.SPACE[imgName] = {};
      let mask = new Image();
      let newImg = new Image();

      mask.src = resource[0];
      newImg.src = resource[1];

      mask.onload = () => {
        ctx.drawImage(mask, x, y, this.state.earth_width, this.state.earth_height);
        ctx.globalCompositeOperation = 'source-in';
        this.SPACE[imgName].mask = mask;
      }
      newImg.onload = () => {
        ctx.drawImage(newImg, x, 0, this.state.earth_ground, this.state.earth_height);
        this.SPACE[imgName].img = newImg;
        resolve();
      }
    })
    return loadImg;
  }
  render() {
    return (
      <div className="space" id="space">
        <canvas id="milky" ref="milky" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
        <div id="earth">
          <canvas id="Loading" ref="Loading" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="earth_B" ref="earth_B" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="earth_L" ref="earth_L" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="earth_C" ref="earth_C" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="shading" ref="shading" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
        </div>
      </div>
    );
  }
}
export default Space;
