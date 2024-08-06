// pages/index.js (or any other page)
import React from 'react';
import { useRouter } from 'next/router';
import { useHistory } from '../../utils/useNavigationHistory';

const HomePage = () => {
    const router = useRouter();
  const { back, history } = useHistory();
  console.log('111111111111111',history)

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>{
         console.info('gamer')
            router.push('/razer')
        
      }}>Go Back</button>
      <ul>
        {history.map((route, index) => (
          <li key={index}>{route}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
