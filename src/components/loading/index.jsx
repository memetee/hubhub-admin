import React, { memo } from "react";
import { Spin } from 'antd';
import { LoadingWrap } from './style';
const contentStyle = {
  // padding: 50,
  // borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Loading = memo(() => {
  return (
    <LoadingWrap>
      <Spin tip="Loading">{content}</Spin>
    </LoadingWrap>
  );
});

export default Loading;
