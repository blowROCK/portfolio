import React, { Component } from "react";
import earth_B from "./../assets/img/earth_B.jpg";
import earth_L from "./../assets/img/earth_L.jpg";
import earth_C from "./../assets/img/earth_C.png";
import mask_B from "./../assets/img/mask_B.png";
import mask_L from "./../assets/img/mask_L.png";
import mask_C from "./../assets/img/mask_C.png";
import "./Header.sass";

class Header extends Component {
  constructor(props){
    super(props);
    this.resource = {
      earth_B : [mask_B, earth_B],
      earth_L : [mask_L, earth_L],
      earth_C : [mask_C, earth_C]
    };
    this.state = {
      canvas_width: 1500,
      canvas_height: 1000,
      earth_width : 800, 
      earth_height : 800,
      earth_ground : 3200,
      TickLate : 30,

    };
    this.SPACE = {
    };
  }
  componentDidMount() {
    this.setupCanvas();
  }
  setupCanvas() {
    console.log("---setupCanvas---")
    this.SPACE.ctx_B = this.refs.earth_B.getContext("2d");
    this.SPACE.ctx_L = this.refs.earth_L.getContext("2d");
    this.SPACE.ctx_C = this.refs.earth_C.getContext("2d");
    this.SPACE.Loading = this.refs.Loading.getContext("2d");
    this.drawImageCanvasWithMask(
      'LIGHT',
      this.resource.earth_L,
      this.SPACE.ctx_L,
      this.getX(),
      this.getY()
    ).then(()=>{
      return this.drawImageCanvasWithMask(
        'BLACK',
        this.resource.earth_B,
        this.SPACE.ctx_B,
        this.getX(),
        this.getY()
      )
    }).then(()=>{
      return this.drawImageCanvasWithMask(
        'CLOUD',
        this.resource.earth_C,
        this.SPACE.ctx_C,
        this.getX(),
        this.getY()
      )
    }).then(()=>{
      console.log("끗");
      console.log("TCL: Header -> newImg.onload -> this.SPACE", this.SPACE)
      this.initAniamtion();
    }) 
  }
  initAniamtion(){
    let tick = 24;
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
      this.SPACE.ctx_L.drawImage(this.SPACE.LIGHT.img, x.L, 0, this.state.earth_ground, this.state.earth_height)

      this.SPACE.ctx_B.drawImage(this.SPACE.BLACK.img, x.B, 0, this.state.earth_ground, this.state.earth_height)

      this.SPACE.ctx_C.globalCompositeOperation = 'source-over';
      this.SPACE.ctx_C.clearRect(0, 0, this.state.canvas_width, this.state.canvas_height);
      this.SPACE.ctx_C.drawImage(this.SPACE.CLOUD.mask, this.getX(), this.getY(), this.state.earth_width, this.state.earth_height);
      this.SPACE.ctx_C.globalCompositeOperation = 'source-in';
      this.SPACE.ctx_C.drawImage(this.SPACE.CLOUD.img, x.C, 0, this.state.earth_ground, this.state.earth_height)

      count++;
      if(count > 5000){
        // this.stopAnimation();
      }
    }, tick/1000)
  }
  stopAnimation(){
    clearInterval(this.interval);
  }
  getX(){
    return (this.state.canvas_width - this.state.earth_width)/2;
  }
  getY(){
    return 0;
    return -(this.state.earth_height/2);
  }
  drawImageCanvas(imgName, imgSrc, ctx, x = 0, y = 0 , mask){
    this.SPACE[ctx][imgName] = new Image();
    let img = this.SPACE[ctx][imgName];
    img.src = imgSrc;
    img.onload = () => {
      ctx.drawImage(img, x, y);
    }
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
        ctx.drawImage(newImg, x, y, this.state.earth_ground, this.state.earth_height);
        this.SPACE[imgName].img = newImg;
        resolve();
      }
    })
    return loadImg;
  }
  render() {
    return (
      <div>
        <div className="earth" id="earth">
          <canvas id="Loading" ref="Loading" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="earth_B" ref="earth_B" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="earth_L" ref="earth_L" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
          <canvas id="earth_C" ref="earth_C" width={this.state.canvas_width+"px"} height={this.state.canvas_height+"px"}></canvas>
        </div>
      </div>
    );
  }
}
export default Header;
