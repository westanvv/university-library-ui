import React, {memo} from 'react';

import Layout from 'src/components/Layout';

function ArticlesList() {
  return (
    <Layout name="ArticlesList">
      <div>ArticlesList page</div>
    </Layout>
  );
}
export default memo(ArticlesList);
