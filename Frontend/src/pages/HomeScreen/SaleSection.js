import classes from "./SaleSection.module.css";
import Container from "../../components/Container";
const SaleSection = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.content}>
          <h3>Up to 50% Off</h3>
          <h4>Winter Sale</h4>
          <p>Shop Now! Limited Time Offer!</p>
          <a href="/shop">Shop Now</a>
        </div>
      </Container>
    </div>
  );
};

export default SaleSection;
