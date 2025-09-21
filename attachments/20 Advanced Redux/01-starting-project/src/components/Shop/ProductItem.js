import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const handleCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
        quantitiy: 1,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
