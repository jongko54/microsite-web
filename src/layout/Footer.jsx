import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import { Text } from '../components/Font'; 
import cs from '../assets/img/customer_service_center_icon.png';


const FooterWrap = styled.footer`
  display: flex;
  justify-content: space-between;
  
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
const Menu = styled.ul`
  display: flex;

  > li {
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 400;
    position: relative;
    margin-right: 10px;
    ::after {
      content: '|';
      display: block;
      position: absolute;
      top: 0;
      right: -7px;
    }
    :last-child::after {
      content: none;
    }
  }

`;

const RightContent = styled.div`
 
  > div {
    display: flex;
    padding-bottom: 24%;
  }
`;

const Info = styled.div`
  margin-bottom: 9.5%;
  > p {
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 52px;
  background-image: url(${cs});
  background-size: contain;
  margin-right: 18px;
`;


function Footer() {

  return (
    <Section color='BG_BLACK' top='5%' bottom='2%'>
      <FooterWrap>
        <LeftContent>
          <Menu>
            <li>이용안내</li>
            <li>개인정보처리방침</li>
          </Menu>
          <Info>
            <p>06247 ) 서울특별시 강남구 논현로75길</p>
            <p>사업자등록번호 690-87-01268</p>
          </Info>
        </LeftContent>
        <RightContent>
          <div>
            <Icon />
            <div>
              <Text size='15px' color='WHITE' bold='350'>고객센터</Text>
              <Text size='23px' color='WHITE' bold='700'>070-4126-3333</Text>
            </div>
          </div>
          
          <Text size='15px' color='WHITE' bold='400'>Copyright@INSUROBO All Right Reserved.</Text>
        </RightContent>
      </FooterWrap>
    </Section>
  )
}

export default Footer