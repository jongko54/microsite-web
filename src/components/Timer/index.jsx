import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerWrap = styled.p`
  color: #2F2F2F;
  position: absolute;
  bottom: 15px;
  right: 0;
`;

const Timer = ({ active }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let timer;
    //clearInterval(timer);
    if (active) {
      timer = setInterval(() => {
        if (Number(sec) > 0) {
          setSec(Number(sec) - 1);
        }
        if (Number(sec) === 0) {
          if (Number(min) === 0) {
            clearInterval(timer);
            // onCheckTime();
          } else {
            setMin(Number(min) - 1);
            setSec(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [min, sec, active]);

  return (
    <TimerWrap>
      {min}:{sec < 10 ? `0${sec}` : sec}
    </TimerWrap>
  );
};

export default Timer;
