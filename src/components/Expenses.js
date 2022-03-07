import "../css/Expense.css";
import Card from "./UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expence = (props) => {
    const [fileterdYear, setfilterdYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        setfilterdYear(selectedYear);
    };

    const filtedExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === fileterdYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={fileterdYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList expenses={filtedExpenses} />
        </Card>
    );
};

export default Expence;