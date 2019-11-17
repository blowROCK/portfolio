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
    window.requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element) {
          window.setTimeout(callback, this.state.second / this.state.tick);
        }
      );
    })();
    super(props);
    // this
    this.loadHandler = this.props.loadHandler.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.animate = this.animate.bind(this);
    this.resource = {
      earth_B : [mask_B, earth_B],
      earth_L : [mask_L, earth_L],
      earth_C : [mask_C, earth_C],
      milkyway : milkyway2,
      galaxy_1 : galaxy_1,
      galaxy_2 : galaxy_2
    };
    this.state = {
      canvas_width: 1500,
      canvas_height: 1500,
      earth_width : 1000, 
      earth_height : 1000,
      earth_ground : 4000,
      TickLate : 24,
      second : 1000,
      earthExtraSize : 500,
      spaceExtraSize : 1000,
      x : {
        L : -500,
        B : -500,
        C : -500
      },
      loaded: this.props.loaded
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
    this.SPACE.loading2 = this.refs.loading2.getContext("2d");

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
      console.log("로딩 끝");
      setTimeout(()=>{
        this.loadHandler(true);
        this.startAnimate();
        console.log("TCL: Space -> setupCanvas -> this.state.loaded", this.state.loaded)
        console.log("TCL: Space -> setupCanvas -> this.props.loaded", this.props.loaded)
      },200)
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
    let CTX_LOADING2 = this.SPACE.loading2;
    let CENTER_X = this.getX('center');
    let CENTER_Y = this.getY('center');
    let EARTH_SIZE = this.state.earth_height/2;


    // 외곽 glow
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
    }, [[0, 'transparent'], [0.3, 'rgba(33, 84, 150, 0.8)'], [1, 'transparent']])
    
    // 내부 glow
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

    // 태양 빛
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
    
    this.drawArc(
      CTX_LOADING2,
      CENTER_X,
      CENTER_Y,
      EARTH_SIZE+10,
    )
    this.drawRGradient(CTX_LOADING2, {
      x: CENTER_X+CENTER_X/2,
      y: CENTER_Y-CENTER_Y/2,
      size: 0
    }, {
      x: CENTER_X,
      y: CENTER_Y,
      size: EARTH_SIZE
    }, [[0, 'rgba(0,0,0,0.85)'], [0.5, 'rgba(0,0,0,0.95)'], [1, 'rgba(0,0,0,1)']])

  }
  animate(){
    let X = this.state.x;
    this.SPACE.ctx_L.drawImage(this.SPACE.b_light.img, X.L, this.getY('LAND'), this.state.earth_ground, this.state.earth_height)
    this.SPACE.ctx_B.drawImage(this.SPACE.b_black.img, X.B, this.getY('LAND'), this.state.earth_ground, this.state.earth_height)
    
    this.SPACE.ctx_C.globalCompositeOperation = 'source-over';
    this.SPACE.ctx_C.clearRect(0, 0, this.state.canvas_width, this.state.canvas_height);
    this.SPACE.ctx_C.drawImage(this.SPACE.b_cloud.mask, this.getX(), this.getY(), this.state.earth_width, this.state.earth_height);
    this.SPACE.ctx_C.globalCompositeOperation = 'source-in';
    this.SPACE.ctx_C.drawImage(this.SPACE.b_cloud.img, X.C, this.getY('LAND'), this.state.earth_ground, this.state.earth_height)

    for (const key in X) {
      if(X[key] < -(this.state.earth_ground/2)){
        X[key] = 0;
      }
    }
    this.setState({
      x : {
        L : X.L - 0.05,
        B : X.B - 0.05,
        C : X.C - 0.1
      }
    })
    requestAnimationFrame(this.animate)
  }
  startAnimate(){
    this.animate();
    this.setState({loaded:true})
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
    else if(posi === 'LAND')
      return -(this.state.earth_height/4)
      
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
      <div className={"wrapper Space"}>
        <div id="space-wrapper">
          <canvas id="milky" ref="milky" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <div id="earth">
            <div className="loading">
              <canvas className={this.state.loaded===true ? 'loaded' : 'load'} id="loading2" ref="loading2" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
            </div>
            <canvas className={this.state.loaded===true ? 'loaded' : 'load'} id="earth_B" ref="earth_B" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
            <canvas className={this.state.loaded===true ? 'loaded' : 'load'} id="earth_L" ref="earth_L" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
            <canvas className={this.state.loaded===true ? 'loaded' : 'load'} id="earth_C" ref="earth_C" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
            <canvas className={this.state.loaded===true ? 'loaded' : 'load'} id="shading" ref="shading" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          </div>
        </div>
      </div>
    );
  }
}
export default Space;
