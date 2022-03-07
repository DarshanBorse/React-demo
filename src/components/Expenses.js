import ExpenseItem from "./ExpenseItem";
import "../css/Expense.css";
import Card from "./UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";

const Expence = (props) => {
    const [fileterdYear, setfileterdYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        setfileterdYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={fileterdYear} onChangeFilter={filterChangeHandler} />
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
};

export default Expence;