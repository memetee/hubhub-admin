import React, { memo } from "react";
import { OverviewWrap } from "./style";
import { Col, Row, Statistic, Card } from "antd";
import CountUp from "react-countup";

const formatter = (value) => <CountUp end={value} separator="," />;

const Overview = memo((props) => {
  const {countObj} = props
  return (
    <OverviewWrap>
      <Row gutter={20}>
        <Col span={12}>
          <Card className="gutter-card" hoverable>
            <Statistic
              title={"动态数量"}
              value={countObj.dynamicCount}
              formatter={formatter}
            />
          </Card>
          <Card className="gutter-card" hoverable>
            <Statistic
              title={"今日新增动态"}
              value={countObj.addDynamicCount}
              formatter={formatter}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="gutter-card" hoverable>
            <Statistic
              title={"注册人数"}
              value={countObj.userCount}
              formatter={formatter}
            />
          </Card>
          <Card className="gutter-card" hoverable>
            <Statistic
              title={"今日新增注册"}
              value={countObj.addUserCount}
              formatter={formatter}
            />
          </Card>
        </Col>
      </Row>
    </OverviewWrap>
  );
});

export default Overview;
