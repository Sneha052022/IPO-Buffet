import styles from "./RestaurantCard.module.css";

import { DetailsComponent } from "./DetailsComponent";
import { Image } from "./Image";
import { OrderButton } from "./OrderButton";
import RatingComponent from "./Rating";

function RestaurantCard({ data }) {
  //array destruction
  const {
    name,
    id,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods,
    rating,
    votes,
    reviews,
    src
  } = data;
  return (
    <div>
      <div className={styles.container}>
        <div>
          <Image src={src} width="100px" height="200px" />
        </div>
        <div>
          <DetailsComponent
            title={name}
            priceForTwo={costForTwo}
            minPrice={minOrder}
            time={deliveryTime}
            cuisine={cuisine}
            cash={payment_methods.cash}
            card={payment_methods.card}
          />
        </div>
        <div>
          <RatingComponent rating={rating} votes={votes} reveiws={reviews} />
        </div>
      </div>
      <div className={styles.footer}>
        <OrderButton />
      </div>
    </div>
  );
}
export default RestaurantCard;
