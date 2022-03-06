import React from 'react';
import './App.css';
import Expence from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {
    const expense = [
        { id: "1", title: "Toilet paper", amount: "94.12", date: new Date(2022, 2, 1) },
        { id: "2", title: "New TV", amount: "799.49", date: new Date(2022, 2, 12) },
        { id: "3", title: "Car Insurance", amount: "294.12", date: new Date(2022, 2, 1) },
        { id: "4", title: "New Desk", amount: "450", date: new Date(2022, 5, 12) }
    ];

    const addExpenseHandler = (expense) => {
        console.log('App.js');
        console.log(expense);
    }

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expence expence={expense} />
        </div>
    );

}

export default App;
