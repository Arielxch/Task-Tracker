import PropTypes from 'prop-types'

const Button = ({ buttonColor, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: buttonColor, color: "white", textTransform: 'capitalize' }}
      className='btn'>
      {text}
    </button>
  )
}
Button.defaultProps = {
  buttonColor: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  buttonColor: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
