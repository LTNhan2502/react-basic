import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/global.scss';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './views/Examples/MyComponent';
import ListTodo from './views/Todos/ListTodo';
import ListUser from './views/Users/ListUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="mycomponent" element={<MyComponent />} />
          <Route path="todo" element={<ListTodo />} />
          <Route path="user" element={<ListUser />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
