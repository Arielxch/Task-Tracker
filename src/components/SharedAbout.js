import { Link } from 'react-router-dom';

const SharedAbout = ({ versionNumber }) => {
  return (
    <div>
      <h4>Version {versionNumber}</h4>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default SharedAbout;