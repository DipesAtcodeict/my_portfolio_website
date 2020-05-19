import React from 'react';
import AppBarLg from './screen_lg';
import AppBarSm from './screen_sm';
import useWindowSize from '../../hooks/useWindowSize';

const AppBar = () => {
  const [width] = useWindowSize();

  return <>{width > 680 ? <AppBarLg /> : <AppBarSm />}</>;
};

export default AppBar;
