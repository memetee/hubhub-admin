import styled from "styled-components";
import background from "assets/img/login_background.png";
export const LoginWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${background});
  transition: opacity 0.7s ease-in-out;
  opacity: ${(props) => props.opacity};
  .container {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 500px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.25);
    padding: 80px 20px;
    box-sizing: border-box;

    .title {
      text-align: center;
    }

    .to-signup {
      display: block;
      text-align: center;
      margin-top: 40px;
      font-size: 14px;
      color: #1677ff;
    }
  }
`;
