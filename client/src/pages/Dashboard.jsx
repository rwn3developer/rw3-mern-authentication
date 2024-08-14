import React from "react";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth);

  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
