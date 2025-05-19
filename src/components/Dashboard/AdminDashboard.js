import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div style={{ padding: '2rem' }}>
    <h2 style={{ marginBottom: '2rem', color: '#2d3436' }}>Admin Dashboard</h2>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '1rem'
    }}>
      {/* Manage Students Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3436' }}>Manage Students</h3>
        <p style={{ marginBottom: '1.5rem', color: '#636e72' }}>
          View and manage student accounts, add new students, or update existing ones.
        </p>
        <Link to="/student-list" style={{
          display: 'inline-block',
          backgroundColor: '#0984e3',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background-color 0.2s'
        }}>
          Manage Students
        </Link>
      </div>

      {/* Grade Management Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3436' }}>Grade Management</h3>
        <p style={{ marginBottom: '1.5rem', color: '#636e72' }}>
          View and update student grades, calculate GWA, and manage academic records.
        </p>
        <Link to="/student-grades" style={{
          display: 'inline-block',
          backgroundColor: '#0984e3',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background-color 0.2s'
        }}>
          Manage Grades
        </Link>
      </div>

      {/* Admin Accounts Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3436' }}>Admin Accounts</h3>
        <p style={{ marginBottom: '1.5rem', color: '#636e72' }}>
          Manage admin accounts, add new administrators, or update existing ones.
        </p>
        <Link to="/admin-crud" style={{
          display: 'inline-block',
          backgroundColor: '#0984e3',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background-color 0.2s'
        }}>
          Manage Admins
        </Link>
      </div>
    </div>
  </div>
);

export default AdminDashboard; 