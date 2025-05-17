import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{textAlign: 'center', marginTop: '10vh'}}>
    <h1>Welcome to the Student Grades Portal</h1>
    <div style={{marginTop: 32}}>
      <Link to="/admin-login">
        <button style={{margin: '0 16px', padding: '12px 32px', fontSize: '1rem'}}>Admin Login</button>
      </Link>
      <Link to="/student-login">
        <button style={{margin: '0 16px', padding: '12px 32px', fontSize: '1rem'}}>Student Login</button>
      </Link>
    </div>
  </div>
);

export default Home; 