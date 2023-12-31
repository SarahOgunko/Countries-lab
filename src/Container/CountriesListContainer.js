import CountriesListComponent from "../Components/CountriesListComponents";
import { useEffect, useState } from "react";
import '../App.css';

const CountriesListContainer = () => {
    const [countries, setCountries]=useState([]);
    const [visitedCountries, setVisitedCountries]=useState([]);
    
    const CountriesToVisit = async (countryName) => {
        const response = await fetch ("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
        console.log(data);
        
       
    }
    useEffect(()=> {
        CountriesToVisit();
    }, [])

    const handleVisit = (country) => {
       
        setCountries((visited) =>
          visited.filter((countryVisited) => countryVisited !== country)
        );
        setVisitedCountries((visited) => [...visited, country]);
      };

     return ( 

        <div className="style">
        <h1>Country Bucket List</h1>
      <div >
        <h2 className="title">Countries I Want to Visit</h2>
        {countries.map((country, id) => (
          <CountriesListComponent 
          key={id} 
          country={country} 
          IWentThere={() => handleVisit(country)}
          
           />
        ))}
      </div>
      <hr />
      <div>
        <h2>Visited Countries</h2>
        {visitedCountries.map((visitedCountry, id) => (
          <CountriesListComponent
           key={id} 
           country={visitedCountry} />
        ))}
      </div>
      </div>
       
     );
}
 
export default CountriesListContainer;