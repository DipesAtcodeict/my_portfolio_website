import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import IntroCoverLg from './screen_lg';
import IntroCoverSm from './screen_sm';

const IntroCover = () => {
  const [width] = useWindowSize();

  return <>{width > 680 ? <IntroCoverLg /> : <IntroCoverSm />}</>;
};

export default IntroCover;
