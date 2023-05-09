import React, {memo} from 'react';

import Layout from 'src/components/Layout';

function Routes() {
  return (
    <Layout name="Test">
      <div>page</div>
    </Layout>
  );
}
export default memo(Routes);
