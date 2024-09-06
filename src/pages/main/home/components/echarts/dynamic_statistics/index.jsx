import React, { memo } from "react";
import ReactEcharts from "echarts-for-react";
import dayjs from 'dayjs';
import { DynamicStatisticsWrap } from "./style.js";
// 获取最近七天的日期
const getLastDays = (day) => {
  let days = [];
  for (let i = day; i > 0; i--) {
    days.push(dayjs().subtract(i, 'day').format('MM-DD')); // 格式化为MM-DD
  }
  return days;
};

const xAxisData = getLastDays(20); // 使用最近七天日期作为X轴数据

let data = [];
for (let i = 0; i < 30; i++) {
  data.push(i*2)
}
const option = {
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
      data: xAxisData,
      axisLabel: {
        color: "#ccc"
      },
    },
    {
      show: false,
      data: xAxisData,
    },
  ],
  grid: {
    top: '20%', // 向下移动图表区域
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {},
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
      data: data,
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
const DynamicStatistics = memo(() => {
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
