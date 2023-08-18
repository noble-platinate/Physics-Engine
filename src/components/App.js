import React from "react";
import { Layout } from 'antd';
import './App.css'
import Questions from "./Que/Question";
import 'antd/dist/antd.css';
import { BrowserRouter,  Routes,
  Route, } from "react-router-dom";
import Home from './Que/home'
import Login from './Que/login'
import { Provider } from "react-redux";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Invoices</Link> |{" "}
        <Link to="/home">Expenses</Link>
        <Link to="/chapter">Chapter</Link>
        
      </nav>
    </div>
  );
}
