import {useState} from 'react'
import About from './component/about'
import AppRoute from './route/appRoute'

import Sign from './component/signup'
import Log from './component/login'
export default function App() {
  return (
    <>
    {/* <h1>SignIn</h1>
        
    <Sign/>
    <h1>LogIn</h1>
    <Log/> */}
    <AppRoute/>
    </>
  );
}
