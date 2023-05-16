import React, {memo} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import Layout from 'src/components/Layout';

function ArticlesItem() {
  const location = useLocation();
  const params = useParams();

  console.log({location, params});

  return (
    <Layout name="ArticlesItem">
      <div>ArticlesItem page</div>
    </Layout>
  );
}
export default memo(ArticlesItem);
