import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import TransactionDetail from './component/TransactionDetail';
import Profile from './component/Profile';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/transaction-detail" element={<TransactionDetail/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
