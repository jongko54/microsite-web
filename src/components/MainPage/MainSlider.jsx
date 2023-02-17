import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from '../Font';

import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import slider3 from '../../assets/img/slider3.png';
import play from '../../assets/img/playIcon.png';
import pause from '../../assets/img/pauseIcon.png';

const data = [
  {
    id: 1,
    t_line1: '소상공인',
    t_line2: '풍수해보험',
    t_line3: '무료지원 사업',
    link: '',
    bg_img: slider1,
    color: 'PRIMARY',
  },
  {
    id: 2,
    t_line1: '소상공인',
    t_line2: '지원센터',
    t_line3: '오픈 EVENT',
    link: '',
    bg_img: slider2,
    color: 'SECONDARY',
  },
  {
    id: 3,
    t_line1: '2023년',
    t_line2: '소상공인',
    t_line3: '지원정책',
    link: '',
    bg_img: slider3,
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
  background-size: 100%;
  background-position: left;
`;

const DetailButton = styled.button`
  font-family: 'SCoreDream';
  color: ${props => props.theme.color[props.color]};
  background-color: #FFFFFF;
  font-size: 20px;
  padding: 12.5px 52px;
  border-radius: 100px;
  margin-top: 3.7%;
`;

const TextBox = styled.div`
  padding: 10% 12.5% 21.17%;
  > h1 {
    font-size: 60px;
    color: #FFFFFF;
    line-height: 1.25;
  }
`;

const SliderPlayerGroup = styled.div`
  position: absolute;
  bottom: 10%;
  left: 12.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 55px;
`;

const ButtonBox = styled.div`
  width: 46px;
  display: flex;
  justify-content: space-between;
`;

const PlayButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-size: contain;
`;
const PauseButton = styled.button`
  width: 12px;
  height: 22px;
  background-image: url(${pause});
  background-repeat: no-repeat;
  background-size: contain;
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
  
`;

const Page = styled.h2`
  font-size: 15px;
  font-weight: 200;
  color: #FFFFFF;
`;

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
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
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
          <Banner key={dt.id} bgImg={dt.bg_img}>
            <TextBox>
              <Title bold='300'>{dt.t_line1}</Title>
              <Title bold='300'>{dt.t_line2}</Title>
              <Title>{dt.t_line3}</Title>
              <DetailButton onClick={dt.link} color={dt.color}>자세히보기</DetailButton>
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