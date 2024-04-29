// React and Router Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './Pages/Landing';
import SecondPage from './Pages/SecondPage';


// Style Sheets Imports
import '/public/assets/css/index.css';
import FirstPage from './Pages/FirstPage/FirstPage.jsx';
import Customer from './Pages/Customer/Customer.jsx';

// Application Component
export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/secondPage" element={<SecondPage />}  />
        <Route path="/first" element={<FirstPage />}  />
        <Route path="/customer" element={<Customer/>}  />

      </Routes>
    </BrowserRouter>
  );
}

// Rendering the Application
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<Application />);
} else {
  console.error('Failed to find the root element');
}