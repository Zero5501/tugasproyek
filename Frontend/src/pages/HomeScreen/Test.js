import classes from "./Test.module.css";
import Container from "../../components/Container";
const Test = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.content}>
          <h3>Pionir e-Commerce di Indonesia</h3>
          <h4>Sejarah</h4>
          <p>Lorem ipsum sir dolomet dkk dll dst</p>
        </div>
      </Container>
    </div>
  );
};

export default Test;