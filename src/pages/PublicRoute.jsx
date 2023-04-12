import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ auth, restricted, component: Component }) => {
  return (
    auth && restricted ? 
    <Navigate to='/' {...alert('접근이 불가능합니다.')} /> :
    Component
  )
};

export default PublicRoute;