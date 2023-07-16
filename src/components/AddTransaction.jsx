import React, { useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid'

export const AddTransaction = () => {
    // state 
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    // functions 
    const { addTransaction } = useContext(GlobalContext)
   
    const onSubmit = e => {
        e.preventDefault()
        const newTransaction = {
            id: uuidv4(),
            text,
            // convert text to number 
            amount: +amount
        }
        // addTransaction function takes newTransaction and adds it to Transactions in GlobalContext  
            addTransaction(newTransaction)
            // remove text and number from field after sumbit button 
            setAmount(0)
            setText("")
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text ...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount"> Amount <br/>
                 (negative - expense, positive - income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter text ...' />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
