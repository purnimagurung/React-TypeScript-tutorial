import axios from "axios";
import { useEffect, useState } from "react";

const Index = () => {
    const [name, setName] = useState(""); // State to hold input name
    const [predictedGender, setPredictedGender] = useState(""); // State to hold gender prediction

    // Separate function to handle the input change
    const handleInputChange = (event) => {
        setName(event.target.value); // Update the name state
    };

    // useEffect to fetch gender prediction whenever the name changes
    useEffect(() => {
        const fetchGenderPrediction = () => {
            if (name) { // Only make the request if name is provided
                axios.get(`https://api.genderize.io/?name=${name}`)
                    .then((res) => {
                        setPredictedGender(res.data.gender); // Set the predicted gender
                        // console.log(res.data);
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
            } else {
                setPredictedGender(""); // Reset prediction if name is empty
            }
        };

        fetchGenderPrediction(); // Call the fetch function
    }, [name]); // Dependency array with name to run whenever it changes

    return (
        <div>
            <input 
                onChange={handleInputChange} // Use the separate function
                placeholder="Enter a name..." 
            />
            <h1>Predict Gender: {predictedGender ? predictedGender : "No prediction yet"}</h1>
        </div>
    );
};

export default Index;
