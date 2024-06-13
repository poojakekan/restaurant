import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImg from "../assets/meals.jpg";
import classes from './Header.module.css';

function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton />
        </header>
      <div className={classes['main-imgage']}>
      <img src={mealsImg} alt="Table full of delici0us food!" />
      </div>
    </Fragment>
  );
}

export default Header;
