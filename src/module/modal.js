/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/require-render-return */
import "./modal.sass";
import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.props.onClose;
    this.value = this.props.value;
    let skill = this.value.skill;
    this.skill = skill.split(', ');
    this.imgs = [];
    for (const iterator of this.value.imgs) {
      let name = iterator.split('.');
      this.imgs.push({
        original:require("./../assets/img/screen/"+this.value.key+'/'+iterator),
        thumbnail:require("./../assets/img/screen/"+this.value.key+'/thum_'+name[0]+'.jpg')
      })
    }
    this.state = {};
  }
  render() {
    return (
      <div id="Modal" className="fixed z-10 text-white">
        <div className="modal fixed">
          <div className="modal-container z-20">
            <div className="header relative py-4 pl-6">
              <div className="title text-xl">
                {this.value.title}
              </div>
              <div className="subTitle text-gray-500 text-base">
                {this.value.subTitle}
              </div>
                {
                  this.value.url ? 
                  <div className="link"><a href={this.value.url} target="_blank" rel="noopener noreferrer"><i className="fas fa-window-restore"></i>LINK</a></div>
                    : ''
                }
              <div className="closeModal absolute cursor-pointer" onClick={this.onClose}><i className="fas fa-times"></i></div>
            </div>
            <div className="contents">
              <div className="sliderContainer">
                <ImageGallery 
                  items={this.imgs}
                  infinite={true}
                  showNav={false}
                  showIndex={true}
                  showThumbnails={true}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showBullets={false}
                  thumbnailPosition='bottom'
                  lazyLoad={true}
                />
              </div>
              <div className="textContainer p-5">
                <div className="skill">
                  <ul>
                    {this.skill.map((value,index)=>{
                      return (<li key={index}>{value}</li>);
                    })}
                  </ul>
                </div>
                <div className="text"><i className="fas fa-caret-right"></i><p>{this.value.content}</p></div>
                <div className="role"><p><i className="fas fa-user-tag"></i>{this.value.role}</p></div>
              </div>
            </div>
          </div>
          
          <div
            className="background fixed inset-0 z-10 w-full h-full cursor-pointer"
            onClick={this.onClose}
          ></div>
        </div>
      </div>
    );
  }
}

export default Modal;
