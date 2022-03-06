import React from "react";
import "../css/NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveDataExpenceHandler = (enteredExpenceData) => {
        const expenseData = {
            ...enteredExpenceData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveDataExpenceHandler} />
        </div>
    )
}

export default NewExpense;