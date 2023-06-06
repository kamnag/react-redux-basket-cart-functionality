import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Main Page</Link>
              </li>
              <li>
                <Link to="/basket">Basket</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
