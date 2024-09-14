import React, { memo } from "react";
import ReactEcharts from "echarts-for-react";
import { DynamicStatisticsWrap } from "./style.js";
// 获取最近七天的日期
const handleList = (list) => {
  const dateList = list.map(item => {
    return item.date;
  })
  const countList = list.map(item => {
    return item.count;
  })
  return {
    dateList,
    countList
  }
};

const getOption = function (list) {
  const newDateList = handleList(list);
  return {
    title: {
      text: "动态新增统计",
      left: "center",
      top: 10,
      textStyle: {
        color: "#ccc",
        fontSize: 18,
      },
    },
    backgroundColor: "#2b2e32",
    xAxis: [
      {
        show: true,
        data: newDateList.dateList,
        axisLabel: {
          color: "#ccc"
        },
      },
      {
        show: false,
        data: newDateList.dateList,
      },
    ],
    grid: {
      top: '20%', // 向下移动图表区域
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true,
    },
    visualMap: {
      show: false,
      min: 0,
      max: 10,
      dimension: 0,
      inRange: {
        color: ["#4a657a", "#308e92", "#b1cfa5", "#f5d69f", "#f5898b", "#ef5055"],
      },
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#ccc",
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#284671",
        },
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: "新增动态数量",
        type: "bar",
        data: newDateList.countList,
        xAxisIndex: 1,
        z: 3,
        itemStyle: {
          borderRadius: 5,
        },
      },
    ],
    animationEasing: "elasticOut",
    animationEasingUpdate: "elasticOut",
    animationDelay: function (idx) {
      return idx * 20;
    },
    animationDelayUpdate: function (idx) {
      return idx * 20;
    },
  };
}
const DynamicStatistics = memo((props) => {
  const homeInfo = props.homeInfo;
  const option = getOption(homeInfo.addDynamicList)
  return (
    <DynamicStatisticsWrap>
      <ReactEcharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        className={"react_for_echarts"}
      />
    </DynamicStatisticsWrap>
  );
});

export default DynamicStatistics;
