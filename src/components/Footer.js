import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  // locate the current location by using useLocation from react-router-dom
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy;2021</p>
      <Link to="/about">
        {/* only when the current page is home page, button is presented */}
        {(location.pathname === '/' || location.pathname === '/tasks' || location.pathname === '/task') && (
          <Button
            elementId='footer-button'
            buttonColor='blue'
            text='About' />
        )}
      </Link>
      <Link to="/future-version">
        {/* only when the current page is home page, button is presented */}
        {(location.pathname === '/' || location.pathname === '/tasks' || location.pathname === '/task') && (
          <Button
            elementId='footer-button'
            buttonColor='coral'
            text='Future Version' />
        )}
      </Link>
      <Link to="/default-version">
        {/* only when the current page is home page, button is presented */}
        {(location.pathname === '/' || location.pathname === '/tasks' || location.pathname === '/task') && (
          <Button
            elementId='footer-button'
            buttonColor='gray'
            text='Default Version' />
        )}
      </Link>

    </footer>
  );
};

export default Footer;
