import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard'
import Properties from './Properties'
import Clients from './Clients'
import Transaction from './Transactions'
import allProperties from './allProperties';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/all" element={<allProperties />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  )
}

export default Pages
