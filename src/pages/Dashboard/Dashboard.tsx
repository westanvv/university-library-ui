import React, {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import Layout from 'src/components/Layout';

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/articles');
  }, [navigate]);

  return (
    <Layout name="Dashboard">
      <div>Dashboard page</div>

      <button onClick={handleClick}>Go to articles</button>
    </Layout>
  );
}
export default memo(Dashboard);
