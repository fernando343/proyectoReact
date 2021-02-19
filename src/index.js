import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import App from './routes/App'
import reportWebVitals from './reportWebVitals';

const initialState = {
  "jobs": [
    {
      id: 1,
      title: "Wedding photography",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      skills: ["wedding, ", "portrait "],
      status: false,
      price: 300
    },
    {
      id: 2,
      title: "Advertising photography",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      skills: ["Minimalist photography, ", "Food photography "],
      status: true,
      price: 200
    },
    {
      id: 3,
      title: "Fashion photography",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      skills: ["Night photography, ", "portrait "],
      status: false,
      price: 150
    },
    {
      id: 4,
      title: "Aerial photography",
      content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
      skills: ["drive drone, ", "Night photography, ", "Social photography "],
      status: true,
      price: 1550
    }
  ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
