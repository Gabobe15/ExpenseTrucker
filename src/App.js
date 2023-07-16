import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

// context API 
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
      <GlobalProvider>
          <Header/>
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
      </GlobalProvider>
  );
}

export default App;
