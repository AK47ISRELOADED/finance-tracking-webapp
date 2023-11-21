


import React from 'react'
import { useState } from 'react';
import ('./App.css')



const Tracking = () => {

    
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  const [description, setDescription] = useState('');
  const [id, setid] = useState('');
  const [amount, setAmount] = useState('');
  const [amount2, setAmount2] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [incomeSource, setIncomeSource] = useState('');




  const addIncome = () =>{
    if (incomeSource && amount && date) {
      const newIncome = {
        id: income.length + 1,
        source: incomeSource,
        amount: parseFloat(amount),
        date 
      };

      setIncome([...income, newIncome]);

      setIncomeSource('');
      setAmount('');
      setDate('');
      setid('')
    } else{
      alert('Please fill in the fields.');
    }
  };

  
  const addExpense = () => {
    if (description && amount2 && date ) {
      const newExpense = {
        id: expenses.length + 1,
        description,
        amount2: parseFloat(amount2),
        date,
        category
      };

      setExpenses([...expenses, newExpense]);

      setDescription('');
      setAmount2('');
      setDate('');
      setCategory('');


    }else{
      alert('Please fill in all fields.');
    }
  };


  const totalIncome = income.reduce((total, item) => total + item.amount, 0);
  const totalExpenses = expenses.reduce((total, item) => total + item.amount2, 0);

 
  const handleDelete = id=> {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  }; 



  return (
      <div id='main' >
        <h1>expenses Tracking app</h1>
     
     <div id="entry">
     <div id="income">
            <h2>Income Tracker</h2>
         <input type="text" value={incomeSource} placeholder='source' onChange={(e) => setIncomeSource(e.target.value)}/>
         <input type="number" value={amount} placeholder='amount' onChange={(e) => setAmount(e.target.value)} />
         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

         <button onClick={addIncome}>Add Income</button>
        
            
        </div>
        <div id="expense">
        <h2>Expense Entry</h2>
         
          <input type="text" value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} />

       
          <input type="number" value={amount2} placeholder='amount' onChange={(e) => setAmount2(e.target.value)} />

        
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="text" placeholder='catagory e.g., groceries, utilities, entertainment' value={category} onChange={(e) => setCategory(e.target.value)} />


          <button onClick={addExpense}>Add Expense</button>
        </div>
       
     </div>


    <div id="info">
      
           <div id='overview'>
            <h2>Overview</h2>
            <p>Total Income: ${totalIncome}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            </div>

          <div id="info2">
          <div id='income-info'>
              <h2>Income</h2>
              
              <ul>
                {income.map((item) =>(
                  <li key={item.id}>
                    {item.source} - ₹{item.amount} - {item.date}
                  </li>
                ))}
              </ul>
              </div>

              <div id='expense-info'>
                <h2>Expenses</h2>
                <ul>
                  {expenses.map((expense) => (
                    <li key={expense.id}>
                      {expense.id}-{expense.description} - ₹{expense.amount2} - {expense.date}- {expense.category}
                      <button onClick={() => handleDelete(expenses.id)}>Delete</button>

                    </li>
                  ))}
                </ul>
                </div>
          </div>

    </div>

      </div>

  )
}

export default Tracking









