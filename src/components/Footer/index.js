import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import useWindowSize from '../../hooks/useWindowSize';
import Tada from 'react-reveal/Tada';

const usestyles = makeStyles({
  footer: {
    marginTop: '2rem',
    padding: '20px',
    color: grey[300],
    textAlign: 'center',
    backgroundColor: '#004d40',
    fontSize: '1.2rem',
  },
});

const Footer = () => {
  const classes = usestyles();
  const [width] = useWindowSize();
  const date = new Date();

  if (width < 680) {
    return <div style={{ marginBottom: '6rem' }}></div>;
  }
  return (
    <div className={classes.footer}>
      <h3>
        <span>Made with</span>
        <Tada forever>
          <i className='fas fa-heart'></i>
        </Tada>
        <span>using ReactJS, Material UI and FontAwesome</span>
        <span>
          <i class='fas fa-copyright'></i>
        </span>
        <span>Dipesh Chaulagain - {date.getFullYear()}</span>
      </h3>
    </div>
  );
};

export default Footer;
