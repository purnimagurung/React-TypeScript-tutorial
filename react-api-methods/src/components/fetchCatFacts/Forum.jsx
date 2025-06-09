import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

/* using SWR using axios
 */

// const Forum = () => {
//   // Initialize catFacts as an array, not a string
//   const [catFacts, setCatFacts] = useState([]);

//   const fetchCatFacts = () => {
//     axios.get("https://catfact.ninja/fact").then((res) => {
//       // Append the new fact to the array
//       setCatFacts((prevFacts) => [...prevFacts, res.data.fact]);
//     });
//   };

//   useEffect(() => {
//     fetchCatFacts(); // Fetches a fact when the component mounts
//   }, []);

/* API calls  */
const fetchCatFacts = async() => {
  const res = await axios.get("https://catfact.ninja/fact");
  console.log("api respons:", res);
  return res.data.fact;
}


/* Forum component  */
const Forum = () => {
  const [catFacts, setCatFacts] = useState([]); //initialize the catFacts as an empty array

  const {refetch} = useQuery({
    queryKey: ["catFact"],
    queryFn: fetchCatFacts,
    refetchOnWindowFocus: false,
    enabled: false,
    onSucess:(newFact) => {
      console.log("fetch data:", newFact);
      setCatFacts((prevFacts) => [...prevFacts, newFact]);
    },  
  });

  return (
    <div>
      <button onClick={refetch}>Show New API DATA</button>
      
      {console.log("Current catFacts state:", catFacts)} {/* Check state before rendering */}
      
      {catFacts.length > 0 ? (
        <ul>
          {
          catFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))
          }
        </ul>
      ) : (
        <p>No facts yet, click the button to load some!</p>
      )}
    </div>
  );
  
};

export default Forum;
