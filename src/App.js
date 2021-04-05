import logo from './logo.svg';
import './App.css';

import Tmr from './resources/Tmr-MainWindow.jpeg';
import SAUApplication01 from './resources/IMG7741.PNG';
import SAUApplication02 from './resources/IMG7738.PNG';
import SAUApplication03 from './resources/IMG7608.PNG';
import ColorPicker2 from './resources/f8a9af.png';
import BatteryWidget from './resources/batteryWidget.png';
import RhythmGame01 from './resources/GameMusicSelect.gif';
import RhythmGame02 from './resources/GameIngame.gif';
import RhythmGame03 from './resources/GameOver.png';

import React, { useState } from 'react';

import { SiCplusplus, SiCsharp, SiDotNet, SiJavascript, SiNodeDotJs, SiOpengl, SiTypescript } from 'react-icons/si';
import { CgFormatSlash } from 'react-icons/cg';
import { AiFillApple, AiFillAndroid, AiFillWindows } from 'react-icons/ai';
import { faWindows, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SwiperCore, {Pagination, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Navigation]);

function App() {
  const [isProjectDescriptionToggle, setisProjectDescriptionToggle] = useState(false);
  const [isNickNameVisibility, setisNickNameVisibility] = useState(false);
  const year = "'20";
  const yearNext = "'21";
  return (
    <div className="App">
      <div class="profileSection">
        <ul class="contactSection">
          <li><span><FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/ryuuseikang">GITHUB</a></span></li>
          <li><span><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:me@ryuusei.io">CONTACT ME</a></span></li>
        </ul>
        <span id="title">RYUUSEI</span>
      </div>
      <div class="mainSection">
        <div class="section sec1">
          <div>
            <div class="nowContainer">
              <span class="now"><div>따뜻한 <span class="latte">라떼 한잔</span> 같은</div><div>코드를 쓰고 있어요 ☕</div></span>
            </div>
            <div class="line">
              <span><a onMouseOver={(event) => { setisNickNameVisibility(true); }} onMouseLeave={(event) => { setisNickNameVisibility(false); }}>
                강유성<span class={isNickNameVisibility ? "adana show-adana" : "adana hide-adana"}> RYUUSEIKANG</span></a>이라는 명의로 활동하고 있습니다.
              </span>
            </div>
            <div class="line">
              <span>스타벅스 바리스타 <span class="year">'20.01~'21.04</span></span>
            </div>
            <div class="line">
              <span>신안산대학교 졸업 <span class="year">'18.03~'20.02</span></span>
            </div>
            <div class="line">
              <span>의정부고등학교 졸업 <span class="year">'15.03~'18.02</span></span>
            </div>
          </div>
        </div>
        <div>
          <div class="section">
            <div class="sectionTitleContainer">
              <span class="sectionTitle">사용하는 것들</span>
            </div>
            <div class="line">
              <div><a href="https://reactjs.org">React Native</a> <span class="footnote"><SiJavascript/><CgFormatSlash/><SiTypescript/></span></div>
              <div class="description">요즘은 리액트 네이티브로 모바일 환경의 어플리케이션을 개발하는데 흥미를 가지고 있어요.</div>
            </div>
            <div class="line">
              <div><a href="https://openframeworks.cc/">OpenFrameworks</a> <span class="footnote"><SiCplusplus/></span></div>
              <div class="description">OpenGL 기반의 OpenFrameworks로 리듬게임도 개발했어요.</div>
            </div>
            <div class="line">
              <div><a href="https://nodejs.org/">Node.js</a></div>
              <div class="description">Node.js로 REST 서버를 구축했어요.</div>
            </div>
            <div class="line">
              <div><a href="https://docs.microsoft.com/ko-kr/dotnet/desktop/wpf/introduction-to-wpf">WPF Application</a> <span class="footnote"><SiCsharp/><CgFormatSlash/><SiDotNet/></span></div>
              <div class="description">윈도우에서 동작하는 시각적인 어플리케이션을 만들어요.</div>
            </div>
          </div>
          <div class="section">
            <div class="sectionTitleContainer">
              <span class="sectionTitle">수상 이력</span>
            </div>
            <div>
            <div class="line">
              <span class="headline"><a href="https://www.thisisgame.com/webzine/news/nboard/4/?n=79130&utm_source=naver&utm_medium=outlink&utm_campaign=tigadmin29&utm_content=79130&nogate">넷마블게임아카데미 2기 우수상</a> <span class="year">'18.01</span></span>
              <div class="description">» 팀 NAEXUN으로 참가하여 리듬게임을 OpenFrameworks를 사용하여 개발하였습니다.</div>
            </div>
            <div class="line">
              <span class="headline"><a href="https://www.donga.com/news/article/all/20160724/79378351/1">AppJam 11회 장려상</a> <span class="year">'16.07</span></span>
              <div class="description">» 미니멀리즘이라는 주제로 데드라인 카운터라는 나의 업무에 집중하는 윈도우10 모바일 어플리케이션을 개발하였습니다.</div>
            </div>
            <div class="line">
              <span class="headline"><a href="https://www.donga.com/news/article/all/20160328/77261138/1">AppJam 10회 최우수상</a> <span class="year">'16.03</span></span>
              <div class="description">» 팀 위어로 참가하여 투표형 고민상담 안드로이드 어플리케이션 위어드를 개발하였습니다.</div>
            </div>
            </div>
          </div>
        </div>
        <div> 
          <div class="section">
            <div class="sectionTitleContainer">
              <span class="sectionTitle">프로젝트</span>
            </div>
            <div class="projectsContainer">
              <span class="background-year">'20.08</span>
              <div class="projectTitleContainer">
                <span class="projectTitle">안내 방송 프로그램</span> <span class="footnote"><AiFillWindows/></span> <span class="footnote"><SiCsharp/></span>
              </div>
              <div class="githubLink">스케줄 설정에 관련된 코드로 인해 소스코드를 열람 할 수 없어요.<br/>전국의 <a href="https://starbucks.co.kr">스타벅스</a>에서 사용하고 있어요.</div>
              <div class="descriptionContainer">
                <Swiper slidesPerView={1}
                  direction='horizontal'
                  pagination={{dynamicBullets: false}}>
                    <SwiperSlide><img class="descriptionImage" src={Tmr}/></SwiperSlide>
                </Swiper>
                <div class="description">
                  » .NET Framework 4.7로 개발하였습니다.
                </div>
              </div>
            </div>
            <div class="projectsContainer">
              <span class="background-year">'19.12</span>
              <div class="projectTitleContainer">
                <span class="projectTitle">신안산대학교 학사관리 어플리케이션</span> <span class="footnote"><AiFillApple/><CgFormatSlash/><AiFillAndroid/></span> <span class="footnote"><SiJavascript/></span>
              </div>
              <div class="githubLink"><a href="https://github.com/RyuuseiKang/SAUApp">GITHUB에서 소스코드 열람하기</a></div>
              <Swiper slidesPerView={1}
                  direction='horizontal'
                  navigation
                  pagination={{dynamicBullets: true}}>
                    <SwiperSlide><img class="descriptionImage" src={SAUApplication01}/></SwiperSlide>
                    <SwiperSlide><img class="descriptionImage" src={SAUApplication02}/></SwiperSlide>
                    <SwiperSlide><img class="descriptionImage" src={SAUApplication03}/></SwiperSlide>
                </Swiper>
              <div class="description">
                » 어플리케이션은 React Native, REST서버는 Node.js를 사용하여 개발하였습니다.
              </div>
            </div>
            <div class="projectsContainer">
              <span class="background-year">'19.11</span>
              <div class="projectTitleContainer">
              <span class="projectTitle">리듬게임</span> <span class="footnote"><AiFillApple/><CgFormatSlash/><AiFillWindows/></span> <span class="footnote"><SiOpengl/><CgFormatSlash/><SiCplusplus/></span>
              </div>
              <Swiper slidesPerView={1}
                  direction='horizontal'
                  navigation
                  pagination={{dynamicBullets: true}}>
                    <SwiperSlide><img class="descriptionImage" src={RhythmGame01}/></SwiperSlide>
                    <SwiperSlide><img class="descriptionImage" src={RhythmGame02}/></SwiperSlide>
                    <SwiperSlide><img class="descriptionImage" src={RhythmGame03}/></SwiperSlide>
                </Swiper>
              <div class="description">
              » 게임은 OpenFrameworks + C++, 서버는 Node.js를 통해 개발하였습니다.
              </div>
            </div>
            <div class="projectsContainer">
              <span class="background-year">'19.03</span>
              <div class="projectTitleContainer">
                <span class="projectTitle">ColorPicker2</span> <span class="footnote"><AiFillWindows/></span> <span class="footnote"><SiCsharp/></span>
              </div>
              <div class="githubLink"><a href="https://github.com/RyuuseiKang/ColorPicker2">GITHUB에서 소스코드 열람하기</a></div>
              <Swiper slidesPerView={1}
                direction='horizontal'
                pagination={{dynamicBullets: false}}>
                <SwiperSlide><img class="descriptionImage" src={ColorPicker2}/></SwiperSlide>
              </Swiper>
              <div class="description">
                » <a href="https://te6.in">주찬휘</a>님의 디자인을 Windows 어플리케이션으로 만들었어요.
              </div>
            </div>
            <div class="projectsContainer">
              <span class="background-year">'19.01</span>
            <div class="projectTitleContainer">
              <span class="projectTitle">SDVXBatteryWidget</span> <span class="footnote"><AiFillWindows/></span> <span class="footnote"><SiCsharp/></span>
            </div>
            <div class="githubLink">프로젝트 파일 유실로 소스코드를 열람할 수 없어요.</div>  
            <Swiper slidesPerView={1}
                direction='horizontal'
                pagination={{dynamicBullets: false}}>
                <SwiperSlide><img class="descriptionImage" src={BatteryWidget}/></SwiperSlide>
              </Swiper>
              <div class="description">
              » Sound Voltex 라는 게임의 게이지를 배터리로 나타낸 프로그램이에요.<br/>디자인은 <a href="https://shiftpsh.com">shiftpsh</a>님이 해주셨어요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
