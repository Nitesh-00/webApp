import { useState, Component } from 'react'
import './App.css'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Counter from './Components/Counter'
import Hover from './Components/Hover'
import Form from './Components/Form'



class App extends Component{
  render(){
    return (
      <div>
       <Form></Form>
      </div>  )
  }
}



// function App() {
//   let [count,setCount] = useState(0);
//   let insCount = () => {
//     setCount((currCount) => {
//       console.log(currCount);
//       return 23 ;
      
//     });
//     setCount((currCount) => {
//       console.log(currCount);
//       return 25 ;
      
//     });
//   }
//   let decCount = () => {
//     setCount(count-1);
//   }
//   return (
    
//     <>
    
//       <div>
//         <h1>Count = {count}</h1>
//         <button onClick={insCount}>INC</button>
//         <button onClick={decCount}>DEC</button>
//       </div>
      
//     </>
//   )
// }

export default App
