import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from '../Font';

import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import slider3 from '../../assets/img/slider3.png';
import mb_slider1 from '../../assets/img/mb_slider1.png';
import mb_slider2 from '../../assets/img/mb_slider2.png';
import mb_slider3 from '../../assets/img/mb_slider3.png';
import play from '../../assets/img/playIcon.png';
import pause from '../../assets/img/pauseIcon.png';

import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';


const data = [
  {
    id: 1,
    t_line1: '소상공인',
    t_line2: '풍수해보험',
    t_line3: '무료지원 사업',
    link: '/freeApply',
    bg_img: slider1,
    mb_bg_img: mb_slider1,
    color: 'PRIMARY',
  },
  {
    id: 2,
    t_line1: '소상공인',
    t_line2: '지원센터',
    t_line3: '오픈 EVENT',
    link: '/event',
    bg_img: slider2,
    mb_bg_img: mb_slider2,
    color: 'SECONDARY',
  },
  {
    id: 3,
    t_line1: '2023년',
    t_line2: '소상공인',
    t_line3: '지원정책',
    link: '/bizsupport',
    bg_img: slider3,
    mb_bg_img: mb_slider3,
    color: 'POINT',
  }
];

const Wrap = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
`;

const Banner = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  padding: 10.03% 12.5% 21.17%;
  
  ${(props) => props.theme.window.mobile} {
    background-image: url(${(props) => props.mbBgImg});
    padding: 33.2% 7.466666666666667% 129.4%;
   
  }
`;

const StyleLink = styled(Link)`
  font-family: 'SCoreDream';
  color: ${props => props.theme.color[props.color]};
  background-color: #FFFFFF;
  font-size: 1rem;
  padding: 0.6rem 1.666666666666667rem;
  border-radius: 5rem;
  margin-top: 3.7%;
  display: inline-block;
  ${(props) => props.theme.window.mobile} {
    padding: 0.6rem 1.666666666666667rem;
    margin-top: 6.5%;
  }
`;
 
const TextBox = styled.div`
  
  > h1 {
    color: #FFFFFF;
    line-height: 1.25;
  }

  ${(props) => props.theme.window.mobile} {

  }

`;

// 재생버튼은 px로 고정해야함
const SliderPlayerGroup = styled.div`
  position: absolute;
  bottom: 10%;
  left: 12.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 2.75rem;

  ${(props) => props.theme.window.mobile} {
    width: 200px;
    left: 7.466666666666667%;
    bottom: 50%;
  }
`;


const ButtonBox = styled.div`
  width: 46px;
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.window.mobile} {
    width: 31px;
  }
`;

const PlayButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) => props.theme.window.mobile} {
    width: 15px;
    height: 15px;
  } 
`;
const PauseButton = styled.button`
  width: 12px;
  height: 22px;
  background-image: url(${pause});
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) => props.theme.window.mobile} {
    width: 10px;
    height: 15px;
  } 
`;

const ProgressWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 230px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 21px;
  .progress-bar {
    background-color: #FFFFFF;
    height: 3px;
    transition: 1s ease-in-out;
  }
  ${(props) => props.theme.window.mobile} {
    width: 120px;
    margin-right: 14px;
    .progress-bar {
      height: 2px;
    }
  }

`;
const Page = styled.h2`
  font-size: 0.75rem;
  font-weight: 200;
  color: #FFFFFF;
  white-space: nowrap;

  ${(props) => props.theme.window.mobile} {
    font-size: 0.9333333333333333rem;
  }
`;
/////////////////////////////////////

const Progress = ({ currentSlide, totalSlides }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  return (
    <ProgressWrap>
      <ProgressBar>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </ProgressBar>
      <Page>{`${currentSlide + 1} / ${totalSlides}`}</Page>
    </ProgressWrap>
  )
}

function MainSlider() {
  const { width } = useWindowSize();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };
  const handleAfterChange = () => {};

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const play = () => {
    sliderRef.current.slickPlay();
  };

  
  const settings = {
    dots: false,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
  }



  return (
    <Wrap>
      <StyledSlider
        ref={sliderRef}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
        {...settings}
      >
        {data.map((dt) => (
          <Banner key={dt.id} bgImg={dt.bg_img} mbBgImg={dt.mb_bg_img}>
            <TextBox>
              <Title bold='300' size={width > 768 ? '3rem' : '1.866666666666667rem'}>{dt.t_line1}</Title>
              <Title bold='300' size={width > 768 ? '3rem' : '1.866666666666667rem'}>{dt.t_line2}</Title>
              <Title size={width > 768 ? '3rem' : '1.866666666666667rem'}>{dt.t_line3}</Title>
              <StyleLink to={dt.link} color={dt.color}>
                자세히보기
              </StyleLink>
            </TextBox>
          </Banner>
        ))}
      </StyledSlider>
      
      <SliderPlayerGroup> 
        <ButtonBox>
          <PauseButton onClick={pause} />
          <PlayButton onClick={play} />
        </ButtonBox>
        <Progress currentSlide={currentSlide} totalSlides={'3'} />
      </SliderPlayerGroup>
    </Wrap>
  )
}

export default MainSlider