// ErrorPage.js
import React from "react";
import { ErrorPageWrap } from "./style";
const err = require('assets/img/404.png')
const ErrorPage = () => {
  return (
    <ErrorPageWrap>
      <img src={err} alt="" />
    </ErrorPageWrap>
  );
};

export default ErrorPage;
