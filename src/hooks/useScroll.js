import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = (e) => {
    setState({ y: window.scrollY, x: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return state;
};

