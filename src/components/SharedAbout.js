import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SharedAbout = ({ versionTitle, versionNumber }) => {
  return (
    <div>
      <h4 style={{ textTransform: 'capitalize' }}>{`${versionTitle}: ${versionNumber}`}</h4>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

SharedAbout.defaultProps = {
  versionTitle: 'default version',
  versionNumber: '0.0.0'
};

SharedAbout.propTypes = {
  versionTitle: PropTypes.string,
  versionNumber: PropTypes.string
};
export default SharedAbout;