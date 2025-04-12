import React from 'react'
import { createBrowserRouter } from 'react-router'
import Login from '../../components/Login';
import Dashboard from '../../components/Dashboard';



export const WithoutAuthenticationRoutes = createBrowserRouter([
  {
    path: "/",
    element:
      <Login />
  }
]);

export const WithAuthenticationRoutes = createBrowserRouter([
  {
    path: "/dashboard",
    element:
      <Dashboard />
  }
]);
