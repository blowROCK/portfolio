import React, { PureComponent } from "react";
import { random } from "./../util/random";
import "./passport.sass";

class Passport extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stampType: ["double", "dashed", "round", "ticket", "tomb"],
      citys: [
        {
          Markup: [
            ["HTML", "b fa-html5"],
            ["Canvas", "s fa-pencil-ruler"],
            ["SVG", "s fa-draw-polygon"],
            ["PUG", "s fa-dog"]
          ]
        },
        {
          Style: [
            ["CSS", "b fa-css3-alt"],
            ["SASS", "b fa-sass"]
          ]
        },
        {
          Script: [
            ["jvascript", "b fa-js-square"],
            ["ES6", "s fa-code"],
            ["jquery", "s fa-file-invoice-dollar"],
            ["angularJS", "b fa-angular"],
            ["React", "b fa-react"]
          ]
        },
        { App: [["Ionic", "s fa-mobile"]] },
        {
          Package: [
            ["npm", "b fa-npm"],
            ["gulp", "b fa-gulp"],
            ["babel", "s fa-dumbbell"],
            ["Jekyll", "s fa-flask"]
          ]
        },
        { Server: [["nodeJS", "b fa-node-js"]] },
        {
          Service: [
            ["AWS s3", "b fa-aws"],
            ["AWS EC2", "s fa-server"],
            ["AWS SES", "s fa-mail-bulk"],
            ["GitPage", "b fa-git"]
          ]
        },
        {
          Version: [
            ["Github", "b fa-github"],
            ["Bitbucket", "b fa-bitbucket"],
            ["SourceTree", "b fa-sourcetree"]
          ]
        },
        {
          Database: [
            ["Firebase", "b fa-google"],
            ["mongoDB", "s fa-database"],
            ["Mongoose", "s fa-paw"]
          ]
        }
      ],
      first: true
    };
  }
  componentDidMount() {}
  randomShape() {
    var index = this.getRandom(0, 4);
    return this.state.stampType[index];
  }
  getRandom(min, max) {
    return random(min, max);
  }
  randomColor() {
    let list = [
      "rgba(229, 59, 58, 0.35)",
      "rgba(62, 165, 206,0.4)",
      "rgba(251, 197, 0, 0.45)",
      "rgba(153, 199, 18, 0.4)"
    ];
    let index = this.getRandom(0, 3);
    return list[index];
  }
  render() {
    return (
      <div className="flex w-full flex-wrap">
        {this.state.citys.map((value, index) => {
          let obj = Object.keys(value);
          let citys = value[obj[0]];
          return (
            <div className={'stampBox flex w-full flex-wrap '+obj[0]} key={index}>
              <div className={'stamHead flex w-full'}>
                <h1 className="text-white text text-shadow-1 text-3xl font-bold">{obj[0]}</h1>
              </div>
              {citys.map(city => {
                console.log("");
                return (
                  <div
                    className="flex w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-5"
                    key={city + index}
                    style={{
                      transform: "rotate(" + this.getRandom(-8, 8) + "deg)"
                    }}
                  >
                    <div
                      className={"w-full stamp-container " + this.randomShape()}
                    >
                      <span
                        className="stamp w-full"
                        style={{ background: this.randomColor() }}
                      >
                        <span className="type">{obj[0]}</span>
                        <span
                          className="iconBox"
                          style={{
                            transform:
                              "rotate(" + this.getRandom(-10, 10) + "deg)"
                          }}
                        >
                          <span className="icon">
                            <i className={"fa" + city[1]}></i>
                          </span>
                        </span>
                        <span className="name">{city[0]}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Passport;
