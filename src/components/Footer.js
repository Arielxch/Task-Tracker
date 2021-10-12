import { Link } from 'react-router-dom'
import Button from './Button'

const Footer = () => {

  return (
    <footer>
      <p>Copyright &copy;2021</p>
      <Link to="/about">
        <Button
          buttonColor='blue'
          text='About' />
      </Link>

    </footer>
  )
}

export default Footer
