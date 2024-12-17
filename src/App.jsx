import { useState } from "react"

  const API = 'https://api.adviceslip.com/advice'


function App(){
      const[advice, setAdvice] = useState('Click the button to get an advice')
      const[id, setId]= useState('id')
      const[loading,setLoading]= useState(false)

      const getAdvice = async()=>{
        try{ 
          setLoading(true)
           const response = await fetch(API)
    const data= await response.json()
        setLoading(false)
       setAdvice(data.slip.advice)
       setId(data.slip.id)
      }
        catch(error){
          console.log(error)
          setAdvice('There is an error with the server.Please try again')
          setLoading(false)
        }
      

      }
      
      
  return(
    <div>

        <h1>{advice} </h1>
        <button onClick={getAdvice}>  Get Advice</button>
        
        <p>The ID is {id}</p>
    </div>
  )
}

export default App
