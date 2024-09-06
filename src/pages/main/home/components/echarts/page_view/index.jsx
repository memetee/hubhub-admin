import React, { memo } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/lib/echarts";
const getOption = (data, timeList) => {
  return {
    title: {
      text: "最近7天用户访问量",
      left: "50%",
      show: false,
      textAlign: "center",
    },
    grid: {
      left: 12,
      right: 25,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#ddd",
        },
      },
      backgroundColor: "rgba(255,255,255,1)",
      padding: [5, 10],
      textStyle: {
        color: "#7588E4",
      },
      extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)",
    },
    legend: {
      right: 20,
      orient: "vertical",
    },
    xAxis: {
      type: "category",
      data: timeList,
      boundaryGap: false,
      splitLine: {
        show: true,
        interval: "auto",
        lineStyle: {
          color: ["#D4DFF5"],
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#609ee9",
        },
      },
      axisLabel: {
        margin: 10,
        fontSize: 10,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: ["#D4DFF5"],
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#609ee9",
        },
      },
      axisLabel: {
        margin: 0,
        fontSize: 8,
      },
    },
    series: [
      {
        name: "数量",
        type: "line",
        smooth: true,
        showSymbol: false,
        symbol: "circle",
        symbolSize: 6,
        data,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(216, 244, 247,1)",
              },
              {
                offset: 1,
                color: "rgba(216, 244, 247,1)",
              },
            ],
            false
          ),
        },
        itemStyle: {
          color: "#58c8da"
        },
        lineStyle: {
          width: 3
        },
      },
    ],
  };
};
const PageView = memo(() => {
	const pageViewInfo = [
		{time: '2024-08-02', visitCount: 30},
		{time: '2024-08-03', visitCount: 10},
		{time: '2024-08-04', visitCount: 19},
		{time: '2024-08-05', visitCount: 53},
		{time: '2024-08-06', visitCount: 42},
		{time: '2024-08-07', visitCount: 36},
		{time: '2024-08-08', visitCount: 29}
	]
	let countList = [];
	let timeList = [];
	pageViewInfo.forEach(item => {
		countList.push(item.visitCount)
		timeList.push(item.time);
	})

  const option = getOption(countList, timeList);
  return (
    <ReactEcharts
      option={option}
      style={{ height: "350px", width: "100%" }}
      className={"react_for_echarts"}
    />
  );
});

export default PageView;
