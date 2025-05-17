import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AdminLogin from './components/Auth/AdminLogin';
import StudentLogin from './components/Auth/StudentLogin';
import AdminCRUD from './components/Dashboard/AdminAccounts';
import StudentList from './components/Dashboard/StudentAccounts';
import StudentGrades from './components/Dashboard/GradeManagement';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/admin-login">Admin Login</Link>
        <Link to="/student-login">Student Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-crud" element={<AdminCRUD />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/student-grades" element={<StudentGrades />} />
      </Routes>
    </Router>
  );
}

export default App;
