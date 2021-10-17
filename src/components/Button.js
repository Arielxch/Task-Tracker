import PropTypes from 'prop-types';

const Button = ({ buttonColor, text, elementId, onClick }) => {
  return (
    <button
      id={elementId}
      onClick={onClick}
      style={{ backgroundColor: buttonColor, color: "white", textTransform: 'capitalize' }}
      className='btn'>
      {text}
    </button>
  );
};
Button.defaultProps = {
  buttonColor: 'steelblue'
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
  elementId: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
