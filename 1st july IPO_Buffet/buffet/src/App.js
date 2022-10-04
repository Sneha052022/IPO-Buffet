// import "./styles.css";
import styles from "./Components/RestaurantCard.module.css";
import RestaurantCard from "./Components/RestaurantCard";
import { useEffect, useState } from "react";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [filterRating, setFilterRating] = useState(0);
  const [costForTwoOrder, setCostForTwoOrder] = useState(0);
  const [page, setPage] = useState(1);
  function getRestaurants({ filterRating }) {
    setLoading(true);
    setError(false);
    return fetch(
      `https://stark-shore-90477.herokuapp.com/restaurants?&_page=${page}&_limit=3&_sort=costForTwo&_order=${costForTwoOrder}&rating_gte=${filterRating}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }
  useEffect(() => {
    getRestaurants({ page, costForTwoOrder, filterRating });
  }, [page, costForTwoOrder, filterRating]);

  return (
    <div className="App">
      <div>
        <button onClick={() => setFilterRating(4)}>Greater than 4</button>
        <button onClick={() => setFilterRating(3)}>Greater than 3</button>
        <button onClick={() => setFilterRating(2)}>Greater than 2</button>
        <button onClick={() => setFilterRating(1)}>Greater than 1</button>
        <button onClick={() => setFilterRating(0)}>Show All</button>
      </div>
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <div>
        <button onClick={() => setCostForTwoOrder("DESC")}>High To Low</button>
        <button onClick={() => setCostForTwoOrder("ASC")}>Low To Low</button>
      </div>
      {/* <RestaurantCard/> */}
      {data.map((res) => (
        <RestaurantCard key={res.id} data={res} />
      ))}
    </div>
  );
}


// import logo from './logo.svg';
// import './App.css';
// import "./styles.css";
// import RestaurantCard from "./Components/RestaurantCard";
// import { useEffect, useState } from "react";
// export default function App() {
//   return (
//     <div className="App">
      
//       const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [filterRating, setFilterRating] = useState(0);
//   const [costForTwoOrder, setCostForTwoOrder] = useState(0);
//   const [page, setPage] = useState(1);
//   function getRestaurants({ filterRating }) {
//     setLoading(true);
//     setError(false);
//     return fetch(
//       `https://stark-shore-90477.herokuapp.com/restaurants?&_page=${page}&_limit=3&_sort=costForTwo&_order=${costForTwoOrder}&rating_gte=${filterRating}`
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setLoading(false);
//         setData(res);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError(true);
//       });
//   }
//   useEffect(() => {
//     getRestaurants({ page, costForTwoOrder, filterRating });
//   }, [page, costForTwoOrder, filterRating]);

//   return (
//     <div className="App">
//       <div>
//         <button onClick={() => setFilterRating(4)}>Greater than 4</button>
//         <button onClick={() => setFilterRating(3)}>Greater than 3</button>
//         <button onClick={() => setFilterRating(2)}>Greater than 2</button>
//         <button onClick={() => setFilterRating(1)}>Greater than 1</button>
//         <button onClick={() => setFilterRating(0)}>Show All</button>
//       </div>
//       <div>
//         <button onClick={() => setPage(page - 1)}>Prev</button>
//         <button onClick={() => setPage(page + 1)}>Next</button>
//       </div>
//       <div>
//         <button onClick={() => setCostForTwoOrder("DESC")}>High To Low</button>
//         <button onClick={() => setCostForTwoOrder("ASC")}>Low To Low</button>
//       </div>
//       {/* <RestaurantCard/> */}
//       {data.map((res) => (
//         <RestaurantCard key={res.id} data={res} />
//       ))}




//     </div>
//   );
// }


