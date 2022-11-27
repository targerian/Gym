import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Router, { Switch, Route, Link, RouterProvider } from "react-router-dom";
import AppRouter, { router } from "./Router";
import GymsList from "./pages/Gyms";
import Navbar from "./components/navbar";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
