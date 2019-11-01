# 베이스 프로젝트
- **PUG, SCSS, ES06 베이스**
	> Jquey, flex grid 적용.
	

- **Gulp babel comand**
	- dev : 콘솔 포함한 빌드 후, 라이브로드
	- release : 콘솔 삭제 빌드, 깃허브 브런치 ghPages로 업로드
	- build : 
		- clean : /build 폴더 비움 
		- components : js(uglify), css(miniCSS) 후 concat, merge 함
		- imgBuild :  모든 img를 최적화함.
		

- **Directory**
    -----
	![enter image description here](https://github.com/blowROCK/rootproject/blob/master/dir.png?raw=true)


- **Dependencies**
	- "@babel/core": "^7.6.2"
    - "@babel/preset-env": "^7.6.2"
    - "@babel/register": "^7.6.2"
    - "babelify": "^10.0.0"
    - "browserify": "^16.5.0"
    - "browserslist": "^4.7.0"
    - "del": "^4.1.1"
    - "gulp": "^4.0.2"
    - "gulp-autoprefixer": "^6.1.0"
    - "gulp-bro": "^1.0.3"
    - "gulp-concat": "^2.6.1"
    - "gulp-csso": "^3.0.1"
    - "gulp-gh-pages": "^0.5.4"
    - "gulp-if": "^3.0.0"
    - "gulp-image": "^4.4.1"
    - "gulp-minify-css": "^1.2.4"
    - "gulp-pug": "^4.0.1"
    - "gulp-sass": "^4.0.2"
    - "gulp-strip-debug": "^3.0.0"
    - "gulp-uglify": "^3.0.2"
    - "gulp-webserver": "^0.9.1"
    - "merge-stream": "^2.0.0"
    - "node-sass": "^4.12.0"
    - "pngquant-bin": "^5.0.2"
    - "run-sequence": "^2.2.1"
    - "uglifyify": "^5.0.1"