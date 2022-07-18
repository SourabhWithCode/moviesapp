import React, { useContext, useEffect, useState } from 'react'
const apikey = process.env.REACT_APP_API_KEY 

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=avenger&page=2`;




const AppContext = React.createContext(0);

const AppProvider = ({ children }) => {

    const [isLoading ,setIsLoading] = useState(true);
    const [movie ,setMovie] = useState([])
    const [isError,setIsError] = useState({show:'false' , msg:""});
    console.log();

    const getMovies = async(url)=>{

        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)
            if(data.Response === 'True'){
                setMovie(data.Search);
                setIsLoading(false);
            }else{
                setIsError({show:true,
                msg:data.error,
                })
            }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        getMovies(API_URL);

    },[])
    return  <AppContext.Provider value={{isLoading,isError,movie}}>
        {children}
    </AppContext.Provider>

};

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}


