import styled from "styled-components";
import background from "assets/img/home_background.png";
export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center center;

  .header {
    height: 25%;
  }
  .main {
    .logo {
      display: block;
      margin: 0 auto;
      border-radius: 100px;
    }
  }
  .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #f1f1f1;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
        color: #666;

        a {
            color: #666;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
  }
`;
