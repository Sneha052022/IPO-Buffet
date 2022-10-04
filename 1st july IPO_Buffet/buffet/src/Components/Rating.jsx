function RatingComponent({rating,votes,reveiws}){
    return(
      <div className="ratingContainer">
        <div>{rating}</div>
        <div>{votes} votes</div>
        <div>{reveiws} reveiws</div>
      </div>
    )
  }
  export default RatingComponent;