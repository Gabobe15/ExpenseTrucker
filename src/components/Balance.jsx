import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const totals = amounts.reduce((acc, curr) => (acc += curr), 0).toFixed(2)
  // const totals = amount.reduce((accumulator, currentValue) => (accumulator += currentValue), initalValue).toFixed(2)
  // .toFixed(2) two decimal place 
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totals}</h1>
    </>
  )
}

