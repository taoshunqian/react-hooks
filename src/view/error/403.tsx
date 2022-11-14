/* eslint-disable react/react-in-jsx-scope */
import { Result } from 'antd';

function Error403() {
  return (
    <Result status="403" title="403" subTitle="Sorry, you are not authorized to access this page." />
  );
}

export default Error403;
