import React, { memo, useEffect, useState } from "react";
import { TaskItem } from "./style";
import { Timeline, Card } from "antd";
import dayjs from "dayjs";
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { SyncOutlined } from "@ant-design/icons";



const TaskList= memo((props) => {
  const [taskList, setTaskList] = useState([]);
  const [counts, setCounts] = useState({pendingCount:0, finishCount: 0, failCount:0});

  useEffect(() => {
    const homeTaskList = props.homeInfo.taskList;
    
    // 处理数量
    const newCounts = {...counts};
    homeTaskList.forEach(item => {
      if (item.status === 'finish') newCounts.finishCount++
      if (item.status === 'fail') newCounts.failCount++
      if (item.status === 'pending') newCounts.pendingCount++
    })
    setCounts(newCounts);

    // 处理listItem
    setTaskList(handleTaskList(homeTaskList));
  }, [props.homeInfo])

  const getColor = (status) => {
    switch (status) {
      case 'finish': return 'green';
      case 'fail': return 'red';
      default: return '#108ee9';
    }
  };
  
  const handleTaskList = (taskList) => {
    // 仅展示5条任务
    return taskList.slice(0, 5).map((item, index) => {
      const color = getColor(item.status);
      return {
        children: (
          <>
            <TaskItem>
              <span style={{color}}>{dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}</span>
              {
                item.status === 'pending' && <div className="btns">
                  <CloseCircleTwoTone twoToneColor="#ff8e92" className="btn-item" style={{ fontSize: '16px'}} onClick={() => handleStatus('fail', item.id)}/>
                  <CheckCircleTwoTone twoToneColor="#3294c5" className="btn-item" style={{ fontSize: '16px'}} onClick={() => handleStatus('finish', item.id)}/>
                </div>
              }
            </TaskItem>
            <p className="task-title" style={{color: '#6C758F'}} onClick={() => props.clickTask(item)}>{item.title}</p>
          </>
        ),
        color: color
      }
    })
  };

  function handleStatus(status, id) {
    props.updateTask(status, id);
  }

  return (
    <Card bordered={true} className="task">
      <div className="header">
        <div className="title">
          <h3>任务</h3>
          <SyncOutlined />
        </div>
        <small>{counts.pendingCount}个任务正在进行中; {counts.finishCount}个任务已经完成；取消了{counts.failCount}个任务，</small>
      </div>
      <Timeline items={taskList} />
    </Card>
  )
})

export default TaskList;
