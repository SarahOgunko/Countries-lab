
const CountriesListComponent = ({country, IWentThere}) => {
    return ( 
        <div>
            <li>
                {country.name.common}
                {IWentThere && <button onClick={IWentThere}>I went There</button>}
            </li>
         
        </div>
     );
}
 
export default CountriesListComponent;;