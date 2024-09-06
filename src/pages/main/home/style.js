import styled from "styled-components";

export const ContentWrap = styled.div`
  padding: 20px;
  flex: 1;
  background-color: #fff;
  .react_for_echarts {
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .gutter-row {
    margin-top: 30px;
  }
  .task {
    /* height: 450px; */
  }
  .message {
    .message-list {
      .message-list-item {
        display: flex;
        margin-bottom: 28px;
        .avatar-wrap {
          width: 60px;
          .avatar {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50px;
          }
        }
        .content-wrap {
          .content {
            color: #666;
          }
        }
      }
    }
  }
  .header{
    padding-bottom: 30px;
    .title {
      display: flex;
      justify-content: space-between;
    }
  }
`;
