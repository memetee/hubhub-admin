import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentWrap } from "./style";
import { Col, Row, Card } from "antd";
import Overview from "./components/overview/index";
import DynamicStatistics from "./components/echarts/dynamic_statistics";
import PageView from "./components/echarts/page_view";
import { SyncOutlined } from "@ant-design/icons";
import { getHomeInfo, updateTask } from "../../../services/fetch";
import TaskList from "./components/taskList";
import TaskDetail from './components/taskDetail';
const Content = memo(() => {
  const navigate = useNavigate();
  const [homeInfo, setHomeInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [taskDetail, setTaskDetail] = useState('')
  useEffect(() => {
    getHomeInfoData();
  }, []);

  function getHomeInfoData() {
    getHomeInfo()
      .then((res) => {
        setHomeInfo(res);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }

  function handleShowDetail() {
    setShowDetail(!showDetail)
  }

  function handleStatus(status, id) {
    updateTask({status, id}).then(res => {
      getHomeInfoData();
    }).catch(err => {
      console.log('err', err);
    })
  }

  function clickTask(item) {
    setTaskDetail({title: item.title, content: item.content});
    handleShowDetail();
  }

  return (
    !loading && <ContentWrap>
      <Row justify="space-between" gutter={20} className="gutter-row">
        <Col span={8}>
          <Overview countObj={homeInfo}></Overview>
        </Col>
        <Col span={16}>
          <DynamicStatistics homeInfo={homeInfo}></DynamicStatistics>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={20}>
        <Col span={8}>
          <TaskList homeInfo={homeInfo} updateTask={handleStatus} clickTask={clickTask}></TaskList>
        </Col>
        <Col span={8}>
          <Card bordered={true} className="message">
            <div className="header">
              <div className="title">
                <h3>消息栏</h3>
                <SyncOutlined />
              </div>
              <small>&nbsp;</small>
            </div>
            <ul className="message-list">
              TODO
            </ul>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={true} className="message">
            <div className="header">
              <div className="title">
                <h3>访问量统计</h3>
                <SyncOutlined/>
              </div>
              <small>最近7天用户访问量</small>
            </div>
            <div className="page-view">
              <PageView homeInfo={homeInfo}></PageView>
            </div>
          </Card>
        </Col>
      </Row>
      <TaskDetail showDetail={showDetail} handleShowDetail={handleShowDetail} taskDetail={taskDetail}></TaskDetail>
    </ContentWrap>
  );
});

export default Content;
