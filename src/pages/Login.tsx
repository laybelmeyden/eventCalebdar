import { Layout, Row } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import loginScss from '../scss/login.module.scss'
import { setCount, setLogin } from "../store/reducers/auth/auth";

const Login: FC = () => {
  const dispatch = useDispatch();
  const loginState = useTypedSelector((state) => state.authReducer);
  const onLogin = () => {
    dispatch(setLogin(!loginState.isAuth))
  }
  const onCounterInc = () => {
    dispatch(setCount(loginState.counter))
    console.log('render')
  }
  return (
    <Layout>
      <Row justify="center" align="middle" className={loginScss.centered}>
        <p>asd</p>
        <button onClick={() => onLogin()}>login</button>
        <br /><br />
        <button onClick={() => onCounterInc()}>incr</button>
        {loginState ? 'true' : 'false'}
        {loginState.counter}
      </Row>
    </Layout>
  );
};

export default Login;
