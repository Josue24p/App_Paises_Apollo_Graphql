import {createContext, useContext, useState} from 'react'
import GET_COUNTRIES from '../graphql/getCountries.graphql';
import React from 'react'
import { useQuery } from '@apollo/client'

const CountryContext = createContext();

export const useCountry = () => {
    const context = useContext(CountryContext)

    if (!context){
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
}


export function CountryProvider({children}) {

    const [countries, setCountries] = useState([]);

    const {data, error, loading} = useQuery(GET_COUNTRIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>`Error... ${error.message}`</p>

    useEffect(() => {
        if (data && !loading && !error) {
          setCountries(data.countries);
        }
      }, [data, error, loading]);
    

  return (
    <CountryContext.Provider
        value={{
            countries
        }}
    >
      {children}
    </CountryContext.Provider>
  )
}
