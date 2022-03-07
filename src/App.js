import React, { useState } from 'react';
import './App.css';
import Expence from './components/Expenses';
import NewExpense from './components/NewExpense';

const dummy_expense = [
    { id: "1", title: "Toilet paper", amount: "94.12", date: new Date(2022, 2, 1) },
    { id: "2", title: "New TV", amount: "799.49", date: new Date(2022, 2, 12) },
    { id: "3", title: "Car Insurance", amount: "294.12", date: new Date(2022, 2, 1) },
    { id: "4", title: "New Desk", amount: "450", date: new Date(2022, 5, 12) }
];

function App() {
    const [expenses, setExpense] = useState(dummy_expense);

    const addExpenseHandler = (expense) => {
        setExpense((preExpenses) => {
            return [expense, ...preExpenses]
        });
    }

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expence expenses={expenses} />
        </div>
    );

}

export default App;
