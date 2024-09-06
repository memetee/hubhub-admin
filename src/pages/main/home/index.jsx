import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentWrap } from "./style";
import { Col, Row, Timeline, Card } from "antd";
import Overview from "./components/overview/index";
import DynamicStatistics from "./components/echarts/dynamic_statistics";
import b1 from "assets/img/b1.jpg";
import PageView from "./components/echarts/page_view";
import { SyncOutlined } from "@ant-design/icons";
import { getHomeInfo } from "../../../services/fetch";
const Content = memo(() => {
  const navigate = useNavigate();
  const [homeInfo, setHomeInfo] = useState({});
  useEffect(() => {
    getHomeInfo()
      .then((res) => {
        setHomeInfo(res);
      })
      .catch(() => {
        console.log(1);
        navigate("/login");
      });
  }, []);
  const taskList = [
    {
      type: "success",
      title: "任务1",
      children: "新版本迭代会",
      color: "green",
    },
    {
      type: "success",
      title: "任务2",
      children: "完成网站设计初版",
      color: "green",
    },
    { type: "reject", title: "任务3", children: "联调接口", color: "red" },
    {
      type: "doing",
      title: "任务4",
      children: "登录功能设计",
      color: "#108ee9",
    },
  ];
  return (
    <ContentWrap>
      <Row justify="space-between" gutter={20} className="gutter-row">
        <Col span={8}>
          <Overview countObj={homeInfo}></Overview>
        </Col>
        <Col span={16}>
          <DynamicStatistics></DynamicStatistics>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={20}>
        <Col span={8}>
          <Card bordered={true} className="task">
            <div className="header">
              <div className="title">
                <h3>任务</h3>
                <SyncOutlined />
              </div>
              <small>10个已经完成，2个待完成，1个正在进行中</small>
            </div>
            <Timeline items={taskList} />
          </Card>
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
              <li className="message-list-item">
                <div className="avatar-wrap">
                  <img src={b1} className="avatar" alt="avatar" />
                </div>
                <div className="content-wrap">
                  <h4>鸣人</h4>
                  <p className="content">终于当上火影了！</p>
                </div>
              </li>
              <li className="message-list-item">
                <div className="avatar-wrap">
                  <img src={b1} className="avatar" alt="avatar" />
                </div>
                <div className="content-wrap">
                  <h4>鸣人</h4>
                  <p className="content">终于当上火影了！</p>
                </div>
              </li>
              <li className="message-list-item">
                <div className="avatar-wrap">
                  <img src={b1} className="avatar" alt="avatar" />
                </div>
                <div className="content-wrap">
                  <h4>鸣人</h4>
                  <p className="content">终于当上火影了！</p>
                </div>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={true} className="message">
            <div className="header">
              <div className="title">
                <h3>访问量统计</h3>
                <SyncOutlined />
              </div>
              <small>最近7天用户访问量</small>
            </div>
            <div className="page-view">
              <PageView></PageView>
            </div>
          </Card>
        </Col>
      </Row>
    </ContentWrap>
  );
});

export default Content;
