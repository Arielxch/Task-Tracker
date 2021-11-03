import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Link to='/tasks'>

        {location.pathname === '/' && (
          <Button
            elementId='tasks-button'
            buttonColor='brown'
            text='Tasks' />
        )}
      </Link>
      {location.pathname === '/' && (
        <Button
          elementId="header-button"
          buttonColor={showAdd ? 'green' : 'red'}
          text={showAdd ? 'fermer' : 'ajouter'}
          onClick={onAdd}
        />
      )}

    </header >
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = { color: 'red', backgroundColor: 'black' }
export default Header;
