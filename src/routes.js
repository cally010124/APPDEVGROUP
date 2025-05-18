import React from 'react';

const Home = React.lazy(() => import('./components/Home'));
const AdminLogin = React.lazy(() => import('./components/Auth/AdminLogin'));
const StudentLogin = React.lazy(() => import('./components/Auth/StudentLogin'));
const AdminCRUD = React.lazy(() => import('./components/Dashboard/AdminAccounts'));
const StudentList = React.lazy(() => import('./components/Dashboard/StudentAccounts'));
const StudentGrades = React.lazy(() => import('./components/Dashboard/GradeManagement'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/admin-login', element: <AdminLogin /> },
  { path: '/student-login', element: <StudentLogin /> },
  { path: '/admin-crud', element: <AdminCRUD /> },
  { path: '/student-list', element: <StudentList /> },
  { path: '/student-grades', element: <StudentGrades /> },
];

export default routes; 