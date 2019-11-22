/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { PureComponent } from "react";

import "./Contents.sass";
import Passport from "./../module/passport";
import Works from "./../module/works";
import SVG from "./../module/svg";

import logo from "./../assets/img/logo_bw.png";
import rocketman from "./../assets/img/rocketman.png";

import { smooth } from "./../util/smooth.js";

class Contents extends PureComponent {
  constructor(props) {
    super(props);
    this.loadHandler = this.props.loadHandler.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      loaded: this.props.loaded,
      current: 'main'
    }
  }
  componentDidMount(){
    console.log("TCL: Contents -> componentDidMount -> this.state.loaded", this.state.loaded)
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll(e){
    let scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    let opacity = 1 - (scrollTop*0.001);
    let main = document.getElementById("main");
    let about = document.getElementById("about");
    let skill = document.getElementById("skill");
    let works = document.getElementById("works");
    let footer = document.getElementById("footer");
    
    document.getElementById("mouse").setAttribute(
      "style", 
      "opacity:"+opacity+";"
    );
    main.setAttribute(
      "style", 
      "transform:translate3d(0, -"+scrollTop*0.6+"px, 0);"+
      "opacity:"+opacity+";"
    );

    let aboutRect = about.getBoundingClientRect();
    let skillRect = skill.getBoundingClientRect();
    let worksRect = works.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    let eventZone = window.innerHeight*0.7;
    if(eventZone > footerRect.top){
      console.log("풋터 ----- ");
      this.setState({
        current: 'works'
      })
    }else if(eventZone > worksRect.top){
      console.log("웍스 ----- ");
      this.setState({
        current: 'works'
      })
    }else if(eventZone > skillRect.top){
      console.log("스킬 ----- ");
      this.setState({
        current: 'skill'
      })
    }else if(eventZone > aboutRect.top){
      console.log("어바웃 ----- ");
      this.setState({
        current: 'about'
      })
    }else {
      console.log("메인 ----- ");
      this.setState({
        current: 'main'
      })
    }
  }
  isLoaded(){
    let loaded = this.props.loaded;
    return (loaded===true)?"loaded":"loading";
  }
  isOnScreen(id){
    return this.state.current === id ? 'active' : '';
  }
  onClick(id, addY){
    smooth(id, addY);
  }
  render() {
    return (
      <div className={"wrapper contents " + this.isLoaded()}>
        <section id="main" className={"flex flex-col fixed"}>
          <div className="flex w-full justify-center mt-32">
            <img className="logo h-auto w-12 sm:w-12 md:w-16 load_opa" src={ logo } alt="logo"/>
          </div>
          <div className="flex w-full flex-col text-center mt-32">
            <h3 className="name tran254 font_black text-6xl text-white text-6xl load_opa load_letter_5 text-shadow-1">박수봉</h3>
            <h1 className="title tran254 text-6xl font_black text-gray-200 uppercase load_opa load_letter_1 text-shadow-1">portfolio</h1>
          </div>
        </section>
        <section id="about" className={"flex relative max-w-6xl mx-auto " + this.isOnScreen('about')}>
          <div className="mouse-container absolute active_opa" onClick={() => this.onClick("about", -14)}>
            <div id="mouse" className="mouse"><div className="scroll"></div></div>
          </div>
          <article className="w-full mt-36">
            <div className="artTitle font_black text-white text-center">
              <h1 className="text-2xl tran106 active_letter_1 text-myRed-200 text-shadow-1">Keep Exploring</h1>
              <h1 className="text-6xl tran106 active_letter_3 text-shadow-1">항상<br/>탐험하는<br/>개발자</h1>
            </div>
            <div className="rocketman flex justify-center mx-auto mt-12">
              <img className="h-auto" src={ rocketman } alt="rocketman"/>
            </div>
            <div className="content mt-16 max-w-xl mx-auto">
              <p className="text-white text-center text-xl text-shadow-1">
              프론트엔드는 시작하기는 쉽지만 마스터하기에는 너무 광대하고 항상 새로워 마치 밤 하늘에 떠 있는 우주 같습니다. 저는 미지의 세계를 탐험하는 우주인이 되어 새로운 것을 배우고 만드는 개발을 하고 있습니다.
              </p>
            </div>
          </article>
        </section>
        <section id="skill" className={"flex relative max-w-6xl mx-auto mt-32 " + this.isOnScreen('skill')}>
          <article className="w-full mt-36 flex-wrap">
            <div className="artTitle font_black text-white text-center">
              <h1 className="text-2xl tran106 active_letter_1 text-myRed-200 text-shadow-1">My Skills</h1>
              <h1 className="text-6xl tran106 active_letter_3 text-shadow-1">배운것들</h1>
            </div>
            <Passport></Passport>
          </article>
        </section>
        <section id="works" className={"flex relative max-w-6xl mx-auto mb-32 mt-32 " + this.isOnScreen('works')}>
          <article className="w-full mt-36 flex-wrap">
            <div className="artTitle font_black text-white text-center">
              <h1 className="text-2xl tran106 active_letter_1 text-myRed-200 text-shadow-1">WORKS</h1>
              <h1 className="text-6xl tran106 active_letter_3 text-shadow-1">포트폴리오</h1>
            </div>
            <Works></Works>
          </article>
        </section>
        <section id="footer" className={"flex relative max-w-6xl mx-auto mt-32 mb-4 pb-32 " + this.isOnScreen('works')}>
          <article className="w-full mt-36 flex-wrap pt-40 pb-8 text-center text-white">
            <img className="logo h-auto w-20 sm:w-20 md:w-32 load_opa" src={ logo } alt="logo"/>
            <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl mb-16">
              재미있게 보셨으면 좋아요 와 구ㄷ.. 아니<br/>자세한 내용은 경력기술서와 포트폴리오를 참고해주세요!<br/>그리고 저의 블로그와 깃허브도 구경하세요!
            </p>
            <ul className="flex flex-wrap justify-center  mb-20">
              <li className="social more mr-20">
                <a href="http://error404.co.kr/" target="_blank" rel="noopener noreferrer">
                  <span className="fas fa-blog"></span>
                  <SVG
                    width="70px"
                    height="70px"
                    points="150,75 112.5,140 37.5,140 0,75 37.5,10 112.5,10"
                  ></SVG>
                </a>
              </li>
              <li className="social more">
                <a href="https://github.com/blowROCK" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-github-alt"></span>
                  <SVG
                    width="70px"
                    height="70px"
                    points="150,75 112.5,140 37.5,140 0,75 37.5,10 112.5,10"
                  ></SVG>
                </a>
              </li>
            </ul>
            <div className="mail text-white text-2xl font-bold">
              <i className="far fa-envelope mr-6"></i> dex@kakao.com
            </div>
            
          </article>
          {/* <div className="background">
            <img className="absolute" scr={require("./../assets/img/galaxy_1.png")} alt="galaxy"></img>
            <img className="absolute" scr={require("./../assets/img/galaxy_2.png")} alt="galaxy"></img>
          </div> */}
          <div className="copyright">© 2019 parksoobong . All rights reserved</div>
        </section>
      </div>
      
    );
  }
}
export default Contents;