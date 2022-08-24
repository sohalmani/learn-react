import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="submit" onClick={props.onClick}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
