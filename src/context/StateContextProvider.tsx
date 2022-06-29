

import {createContext, useContext, useState} from "react";

const StateContext: any = createContext(true);

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"

export const StateContextProvider = ({ children }: any) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Anshuman Talukdar');
  
    const getResults = async (url: string) => {
      setLoading(true);
  
      const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
          'x-user-agent': 'desktop',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        },
      });
  
      const data = await res.json();

      if(url.includes("/news")){
        setResults(data.entries);
      }else if(url.includes("/image")){
        setResults(data.image_results);
      }else{
        setResults(data.results);
      }
      setLoading(false);
    };
  
    return (
      <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);