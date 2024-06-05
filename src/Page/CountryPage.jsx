import { useEffect } from "react";
import { useCountry } from "../context/CountryContext";
import CountryCard from "../components/CountryCard";

function CountryPage() {

  const {countries } = useCountry();


  if (countries.length === 0 )return <h1>No countries</h1>
  return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
}

export default CountryPage;
