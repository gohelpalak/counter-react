import { useEffect, useState } from "react"

function App() {
  let [count,setcount]=useState(0)
  let [student, setstudent] = useState([{ name: "ram", age: 20, gender: "male" },
    { name: "Shyam", age: 21, gender: "male" },
    { name: "Shiv", age: 18, gender: "male" },
    { name: "Radha", age: 19, gender: "female" },
    { name: "krishna", age: 22, gender: "female" },
    ])

  useEffect(()=>{
    let info=0;

   let data= setInterval(()=>{
    info=info+1;
    console.log(info);

    },2000)
    return()=>{
      clearInterval(data)
    }
    
  },[])

  return (
    <>
    <h1>App Component</h1>
    <button onClick={()=>setcount(count+1)}>Increment</button>
    <h4>{count}</h4>
    <button onClick={()=>setcount(count-1)}>Decrement</button>

   <br></br> {/* <h1>{info}</h1> */}
   
    <br></br>


    <table border={2} cellPadding={10} cellSpacing={10}>
      <th>name</th>
      <th>age</th>
      <th>gender</th>
      {
        student.map((val,index)=>{
          return(<>
               <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.gender}</td>
            
            </tr>
          
          </>)

         

        })
      }
    </table>

    </>
  )
}

export default App
