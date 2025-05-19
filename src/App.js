import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AdminLogin from './components/Auth/AdminLogin';
import StudentLogin from './components/Auth/StudentLogin';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import AdminCRUD from './components/Dashboard/AdminAccounts';
import StudentList from './components/Dashboard/StudentAccounts';
import StudentGrades from './components/Dashboard/GradeManagement';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-crud" element={<AdminCRUD />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/student-grades" element={<StudentGrades />} />
      </Routes>
    </Router>
  );
}

export default App;
