import styles from "./RestaurantCard.module.css";
export const DetailsComponent = ({
  title,
  cuisine,
  priceForTwo,
  time,
  minPrice,
  cash=false,
  upi=false,
  card=false
}) => {
  let text = "";
  // if(cash && upi && card){
  //   text="Accepted all payments(cash,card,upi)"
  // }else if()
  return (
    <div className={styles.detailsContainer}>
      <h3>{title}</h3>
      <div>{cuisine.join(",")}</div>
      <div>Cost {priceForTwo} for Two</div>
      <div>
        Min {minPrice} Up to {time} min{" "}
      </div>
      <div>
        Accepts {cash && "cash"} {upi && "upi"} {card && "card"} payments
      </div>
    </div>
  );
};