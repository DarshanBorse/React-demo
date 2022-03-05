import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expence = [
    { id: "1", title: "Toilet paper", amount: "94.12", date: new Date(2022, 2, 1) },
    { id: "2", title: "New TV", amount: "799.49", date: new Date(2022, 2, 12) },
    { id: "3", title: "Car Insurance", amount: "294.12", date: new Date(2022, 2, 1) },
    { id: "4", title: "New Desk", amount: "450", date: new Date(2022, 5, 12) }
  ]

  return (
    <>
      <h2>Let's go started</h2>
      <ExpenseItem title={expence[0].title} amount={expence[0].amount} date={expence[0].date} />
      <ExpenseItem title={expence[1].title} amount={expence[1].amount} date={expence[1].date} />
      <ExpenseItem title={expence[2].title} amount={expence[2].amount} date={expence[2].date} />
      <ExpenseItem title={expence[3].title} amount={expence[3].amount} date={expence[3].date} />
    </>
  );
}

export default App;
