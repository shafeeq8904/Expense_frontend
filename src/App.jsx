import { useEffect, useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"
import axios from "axios"

const App =() =>{
    // const title="Movie"
    // const amount=310
   

    const  [expense, setExpense]= useState([
//       {
//       id:1,
//       title:"LEO",
//     amount:300
// },{
//   id:2,
//     title:"VIKRAM",
//     amount:400 
// },{
//   id:3,
//   title:"KAITHI",
//   amount:400 
// },{
//   id:4,
//   title:"LOVER",
//   amount:-400 
// }
])

useEffect(() => {
  axios.get('https://shafeeqexpensetracker-api.onrender.com/get-entries')
  .then(res => {
    console.log(res.data)
    setExpense(res.data)

  })
  .catch(err => console.log(err))
}, [])


const addExpense =(title,amount)=>{
  const nextId=expense.length===0 ? 1: expense[expense.length-1].id+1
  setExpense([...expense, {id:nextId,title: title,amount: amount }])
}

const deleteExpense =(id)=> {
  setExpense(expense.filter((exp) => exp.id !== id))
}

let income =0, expenses =0

expense.forEach((exp) =>{
    if(exp.amount>0){
        income+=exp.amount
    }else{
      expenses += exp.amount
    }
    
   
})
    
    return(
        <>        
      <div>
        <div className="balance">EXPENSE TRACKER</div>
        <div className="balance1">BALANCE :{income+expenses }</div>
        <div className="income-expense-container">
        <div className="income">
            <span className="title">Income</span>
            <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
        <span className="title">Expense</span>
        <span>{expenses}</span>
        </div>
      </div>
      </div>

        
        <ExpenseForm addExpense={addExpense}/>
     {
      expense.map((item) =>{
        return(
        <ExpenseItem key={item.id} onDelete={deleteExpense}{...item} />)
        
})}
        
    </>
    )
}
export default App