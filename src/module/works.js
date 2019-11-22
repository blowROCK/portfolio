/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import SVG from "./../module/svg";
import "./works.sass";
import Modal from './../module/modal';
import ModalPortal from './../module/modalPortal';

class Works extends PureComponent {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      keys: ["edu", "code", "play", "admin", "omug", "inno"],
      imgs: [
        {
          edu: {
            key: 'edu',
            subTitle: "Coding Education",
            title: "코딩 강좌 사이트",
            skill:
              "gulp, babel, npm, Pug, SASS, AngularJS, NodeJS, AWS, MongoDB",
            content:
              "Google blockly를 이용한 블록코딩 개발\nSVG와 Canvas를 이용한 코딩 게임 개발\n블록을 Javascript로 변환하는 번역기 개발\n변환된 코드를 JS 인터프리터를 통해 실행하여\n게임 내에 Animation을 실행하는 게임 개발\ncompile-run를 이용해 실행되어 결과 값이 리턴되는 컴파일러 개발\n컴파일러를 이용한 JAVA, C, Cpp, Python, Javascript용 코딩 게임개발\n회원가입, 비밀번호, 메일링, 진도상황체크 등",
            role: "웹디자인, 프론트엔드, 백엔드 등 모든 개발에 100% 참여",
            imgs: [
              "edu-01.gif",
              "edu-02.gif",
              "edu-03.gif",
              "edu-04.gif",
              "edu-05.gif",
              "edu-06.gif",
              "edu-07.png",
              "edu-08.png",
              "edu-09.png",
              "edu-10.png",
              "edu-11.png",
              "edu-12.png",
              "edu-13.png",
              "edu-14.png",
              "edu-15.gif",
              "edu-16.png",
              "edu-17.png"
            ]
          }
        },
        {
          code: {
            key: 'code',
            title: "프렌차이즈 학원용 코딩 사이트",
            subTitle: "Block Coding",
            skill:
              "gulp, babel, npm, Pug, SASS, AngularJS, Jquery, NodeJS, AWS, MongoDB, 반응형, 웹표준",
            content:
              "Google blockly를 이용한 블록코딩 개발\nSVG와 Canvas를 이용한 코딩 게임 개발\nAWS s3를 이용한 클라우드서비스,\n회원가입, 권한 관리, 진도상황체크 등 개발",
            role: "웹디자인, 프론트엔드, 백엔드 등 모든 개발에 100% 참여",
            url: "http://code.playcoding.ac/",
            imgs: [
              "code-01.gif",
              "code-02.png",
              "code-03.png",
              "code-04.gif",
              "code-05.gif",
              "code-06.gif",
              "code-07.gif",
              "code-08.gif",
              "code-10.gif"
            ]
          }
        },
        {
          play: {
            key: 'play',
            title: "프렌차이즈 회사 홈페이지",
            subTitle: "Franchise Site",
            skill:
              "gulp, babel, npm, Pug, SASS, AngularJS, Jquery, NodeJS, AWS, MongoDB, 반응형, 웹표준",
            content:
              "다양한 애니메이션, KakaoMap을 이용한 지점 소개\n글작성, 지점 업로드",
            role: "웹디자인, 프론트엔드, 백엔드 등 모든 개발에 100% 참여",
            url: "http://playcoding.ac/",
            imgs: [
              "playcoding-0.gif",
              "playcoding-1.gif",
              "playcoding-2.png",
              "playcoding-3.png",
              "playcoding-4.png",
              "playcoding-5.png",
              "playcoding-6.png",
              "playcoding-7.png"
            ]
          }
        },
        {
          admin: {
            key: 'admin',
            title: "코딩 사이트, 회사 사이트\n통합 어드민",
            subTitle: "Admin Page",
            skill:
              "gulp, babel, npm, Pug, SASS, AngularJS, Jquery, NodeJS, AWS, MongoDB, 반응형, 웹표준",
            content:
              "모든 회원 관리, 모든 지점 관리, 수업관리,\n슬라이드변경, 업로드 글쓰기 등\n모든 업무 총괄 어드민 페이지",
            role: "웹디자인(50%), 프론트엔드(90%), 백엔드(100%)",
            imgs: ["admin-0.gif", "admin-1.gif", "admin-2.png"]
          }
        },
        {
          omug: {
            key: 'omug',
            title: "SNS스타일 카페소개\n하이브리드 APP",
            subTitle: "Hybrid Ionic App",
            skill:
              "HTML, SASS,  Javascript, Angular, Ionic, Firebase, Beacon, BLE, 반응형, 웹표준",
            content:
              "2016.09 ~ 2016.11\nIonic을 이용한 Hybrid App 개발\n비콘을 통해 실시간으로 사용자가 업체에 방문 정보를 받게 개발\nFireBase를 통해 사용자, 업주간 실시간 채팅 등 개발",
            role: "디자인(100%), 프론트엔드(100%)",
            imgs: ["omug-1.png", "omug-2.png", "omug-3.png"]
          }
        },
        {
          inno: {
            key: 'inno',
            title: "회사 홈페이지",
            subTitle: "Company Homepage",
            skill:
              "HTML, CSS, Javascript, Jqueary, PHP, gulp, git, npm, bootstrap, slick, 반응형, 웹표준",
            content: "2017.03 ~ 2017.04\nWordPress 기반 홈페이지",
            role: "디자인(100%), 프론트엔드(100%)",
            imgs: ["inno-1.png", "inno-2.png", "inno-3.png", "inno-4.png"]
          }
        }
      ],
      modal: false,
      value: '',
      key: ''
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll(e) {
    this.state.keys.map((id, index) => {
      let element = document.getElementById("box_" + id);
      let bound = element.getBoundingClientRect();

      if (bound.top < window.innerHeight*1.5) {
        let img1 = document.getElementById("img_" + id + "_1");
        let img2 = document.getElementById("img_" + id + "_2");

        img1.setAttribute(
          "style",
          "transform:translate3d(0, " + bound.top * 0.5 + "px, 0);"
        );
        img2.setAttribute(
          "style",
          "transform:translate3d(0, " + bound.top * 0.2 + "px, 0);"
        );
      }
    });
  }
  handleOpenModal = (value, key) => {
    this.setState({
      modal: true,
      value: value[key]
    });
    document.body.classList.add("overflow-hidden");
  };
  handleCloseModal = () => {
    this.setState({
      modal: false,
      value: ''
    });
    document.body.classList.remove('overflow-hidden');
  };
  render() {
    return (
      // sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6
      <div className="work-container flex w-full flex-wrap">
        {this.state.imgs.map((value, index) => {
          let obj = Object.keys(value);
          let key = obj[0];
          let work = value[key];
          return (
            <div className="work flex flex-wrap w-full mt-32 mb-40 relative" key={index}>
              <div
                id={"box_" + key}
                className="image-container w-full sm:w-full md:w-full lg:w-7/12 relative mb-20 sm:mb-20 md:mb-20 lg:mb-0"
              >
                {work.imgs.map((value, index) => {
                  if (index > 2) return;
                  return (
                    <img
                      id={"img_" + key + "_" + index}
                      key={key + "-" + index}
                      src={require("./../assets/img/screen/" +
                        key +
                        "/" +
                        value)}
                    ></img>
                  );
                })}
              </div>
              <div className="text-container w-full sm:w-full md:w-full lg:w-5/12 relative text-white text-center sm:text-center lg:text-right text-106xl tracking-wide text-shadow-1">
                <div className="subTitle uppercase text-myRed-200 text-106xl font_black text-center tracking-widest pl-0 sm:pl-0 md:pl-0 lg:pl-20">
                  <h3>{work.subTitle}</h3>
                </div>
                <div className="mainTitle text-4xl font_black word-keepAll float-right whitespace-pre-wrap tracking-widest mb-6 w-full sm:w-full md:w-full lg:w-100rem xl:w-100rem">
                  <h1>{work.title}</h1>
                </div>
                <div className="skill mb-4">
                  <h6>{work.skill}</h6>
                </div>
                <div className="role mb-4">
                  <h6>{work.role}</h6>
                </div>
                <div className="content mb-4 leading-relaxed">
                  <p className="whitespace-pre-wrap word-keepAll">{work.content}</p>
                </div>
                <div className="works more mb-4">
                  <a onClick={() => this.handleOpenModal(value, key)}>
                    <span>+</span>
                    <SVG
                      width="50px"
                      height="50px"
                      points="150,75 112.5,140 37.5,140 0,75 37.5,10 112.5,10"
                    ></SVG>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        {this.state.modal && (
          <ModalPortal>
            <Modal onClose={this.handleCloseModal} value={this.state.value}/>
          </ModalPortal>
        )}{''}
      </div>
    );
  }
}

// WORKS
// 코데듀, 코드월드, 플코딩, 어드민
// 하이브리드앱(오머그), 이노앱
// 클릭하면 -> 팝업
export default Works;
