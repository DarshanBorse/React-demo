import ExpenseItem from "./ExpenseItem";
import "../css/Expense.css";

const Expence = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem title={props.expence[0].title} amount={props.expence[0].amount} date={props.expence[0].date} />
            <ExpenseItem title={props.expence[1].title} amount={props.expence[1].amount} date={props.expence[1].date} />
            <ExpenseItem title={props.expence[2].title} amount={props.expence[2].amount} date={props.expence[2].date} />
            <ExpenseItem title={props.expence[3].title} amount={props.expence[3].amount} date={props.expence[3].date} />
        </div>
    );
}

export default Expence;