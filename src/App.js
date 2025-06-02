/* eslint-disable no-undef */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import ChatInterface from "./ChatPage/ChatInterface"
import ChatInterface2 from './ChatPage/ChatInterface2.jsx';
import ChatInterface3 from './ChatPage/ChatInterface3.jsx';
import ChatInterface4 from './ChatPage/ChatInterface4.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ChatInterface />,
    },
    {
      path: '/mesothelioma-cb2',
      element: <ChatInterface2 />,
    },
    {
      path: '/mesothelioma-cb3',
      element: <ChatInterface3 />,
    },
    {
      path: '/mesothelioma-cb4',
      element: <ChatInterface4 />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
