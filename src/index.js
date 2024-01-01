import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import TextInputWithFocusButton from './chapter_07/TextInputWithFocusButton';
import Accommodation from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import Attendancebook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//     <Library/>
//     <Clock />
//   </React.StrictMode>
//   );
// }, 1000)
root.render(
  <React.StrictMode>
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    {/* <TextInputWithFocusButton /> */}
    {/* <Accommodation /> */}
    {/* <ConfirmButton /> */}
    {/* <LandingPage /> */}
    {/* <Attendancebook /> */}
    {/* <SignUp /> */}
    <Calculator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
