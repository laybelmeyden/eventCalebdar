import React, { FC, useEffect } from "react";
import AppRouter from "./components/AppRouter";
import "./App.css";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import { useActions } from "./hooks/useActions";
import { IUuser } from "./models/IUuser";

const App: FC = () => {
  const {setUser, setLogin} = useActions()
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setUser({username: localStorage.getItem('username' || '')} as IUuser)
      setLogin(true)
    }
  }, [])

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default App;
