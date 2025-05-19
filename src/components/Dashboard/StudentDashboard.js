import React from 'react';

const StudentDashboard = () => (
  <div style={{ padding: '2rem' }}>
    <h2 style={{ marginBottom: '2rem', color: '#2d3436' }}>Student Dashboard</h2>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '1rem'
    }}>
      {/* Student Information Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3436' }}>Student Information</h3>
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ color: '#636e72', marginBottom: '0.5rem' }}><strong>Student ID:</strong> 2023-0001</p>
          <p style={{ color: '#636e72', marginBottom: '0.5rem' }}><strong>Name:</strong> John Doe</p>
          <p style={{ color: '#636e72', marginBottom: '0.5rem' }}><strong>Course:</strong> Bachelor of Science in Computer Science</p>
          <p style={{ color: '#636e72' }}><strong>Year Level:</strong> 2nd Year</p>
        </div>
      </div>

      {/* Academic Performance Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3436' }}>Academic Performance</h3>
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ color: '#636e72', marginBottom: '0.5rem' }}><strong>Current GWA:</strong> 1.25</p>
          <p style={{ color: '#636e72', marginBottom: '0.5rem' }}><strong>Academic Status:</strong> Good Standing</p>
          <p style={{ color: '#636e72' }}><strong>Units Completed:</strong> 48/144</p>
        </div>
      </div>

      {/* Recent Grades Card */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2d3436' }}>Recent Grades</h3>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr',
            gap: '0.5rem',
            marginBottom: '0.5rem'
          }}>
            <p style={{ color: '#636e72' }}>Data Structures</p>
            <p style={{ color: '#636e72' }}>1.0</p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr',
            gap: '0.5rem',
            marginBottom: '0.5rem'
          }}>
            <p style={{ color: '#636e72' }}>Database Systems</p>
            <p style={{ color: '#636e72' }}>1.25</p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr',
            gap: '0.5rem'
          }}>
            <p style={{ color: '#636e72' }}>Web Development</p>
            <p style={{ color: '#636e72' }}>1.5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard; 