/* eslint-disable react/react-in-jsx-scope */
import { Result } from 'antd';

function Error404() {
  return (
    <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
  );
}

export default Error404;
