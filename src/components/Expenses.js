import "../css/Expense.css";
import Card from "./UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expence = (props) => {
    const [fileterdYear, setfilterdYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        setfilterdYear(selectedYear);
    };

    const filtredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === fileterdYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={fileterdYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filtredExpenses} />
            <ExpensesList expenses={filtredExpenses} />
        </Card>
    );
};

export default Expence;