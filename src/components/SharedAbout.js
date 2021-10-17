import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const SharedAbout = ({ versionTitle, versionNumber, goBackButtonText }) => {
  return (
    <div>
      <h4 style={{ textTransform: 'capitalize' }}>{`${versionTitle}: ${versionNumber}`}</h4>
      <Link to='/'>
        <Button
          buttonColor='green'
          text={goBackButtonText} />
      </Link>
    </div>
  );
};


SharedAbout.defaultProps = {
  versionTitle: 'default version',
  versionNumber: '0.0.0',
  goBackButtonText: 'go back from default'
};

SharedAbout.propTypes = {
  versionTitle: PropTypes.string,
  versionNumber: PropTypes.string,
  goBackButtonText: PropTypes.string
};
export default SharedAbout;