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
            <ExpenseItem title={props.expence[0].title} amount={props.expence[0].amount} date={props.expence[0].date} />
            <ExpenseItem title={props.expence[1].title} amount={props.expence[1].amount} date={props.expence[1].date} />
            <ExpenseItem title={props.expence[2].title} amount={props.expence[2].amount} date={props.expence[2].date} />
            <ExpenseItem title={props.expence[3].title} amount={props.expence[3].amount} date={props.expence[3].date} />
        </Card>
    );
};

export default Expence;