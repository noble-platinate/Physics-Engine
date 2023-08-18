// 
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Back() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
      <button onClick={() => navigate(1)}>go forward</button>
    </>
  );
}
export default Back