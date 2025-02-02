import React, { useState , useEffect} from 'react' 
import meal from "../api/meal"
import meal from '../api/meal'
export default ()=>{
      const [results, setResults] = useState([])
      const [errorMessage, setErrorMessage] = useState("")
    
      const mealApi = async ()=>{
        try {
          const res = await meal.get("/search.php", {
            params: {
              s: searchTerm
            }
          })
    
    
          const data = res.data
          setResults(data.meals || [])
          
        } catch (error) {
            setErrorMessage(`error loading data : ${error.errorMessage}`)
        }
      }
    
    useEffect(()=>{
    mealApi("lamb")
    }, [])
    
    return [ results, errorMessage, mealApi]
}