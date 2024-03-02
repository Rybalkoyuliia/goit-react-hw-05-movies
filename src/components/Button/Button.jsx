import { Link } from 'react-router-dom';
import s from './Button.module.css';

const Button = ({ to }) => {
  return (
    <Link className={s.back_button} to={to}>
      Go Back
    </Link>
  );
};

export default Button;
