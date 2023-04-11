import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerWrap = styled.p`
  color: #2F2F2F;
  position: absolute;
  bottom: 30px;
  right: 20px;
`;

const Timer = ({ mm, ss }) => {
  const [minutes, setMinutes] = useState(parseInt(mm));
  const [seconds, setSeconds] = useState(parseInt(ss));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <TimerWrap>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </TimerWrap>
  );
};

export default Timer;
