/* eslint-disable react/react-in-jsx-scope */
import { Result } from 'antd';

function Error500() {
  return (
    <Result status="500" title="500" subTitle="Sorry, something went wrong." />
  );
}

export default Error500;
