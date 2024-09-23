import React, { useEffect, useRef, memo, useState } from "react";
// 引入 Quill
import Quill from "quill";
import "quill/dist/quill.snow.css"; // 引入 Quill 的样式
import 'quill/dist/quill.core.css'
import { TaskWrap } from "./style";
import { Button, Input } from 'antd';
import { createTask } from "../../../../services/fetch";
const TaskManage = memo(() => {
  const editorRef = useRef(null); // 用于引用 DOM 元素
  const [quillInstance, setQuillInstance] = useState(null); // 保存 Quill 实例
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (editorRef.current) {
      // 初始化 Quill 编辑器
      const quill = new Quill(editorRef.current, {
        theme: "snow", // 选择主题
        placeholder: "请输入内容...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],       // 加粗 斜体 下划线 删除线
            ["blockquote", "code-block"],                    // 引用  代码块
            [{ list: "ordered" }, { list: "bullet" }],       // 有序、无序列表
            [{ indent: "-1" }, { indent: "+1" }],            // 缩进
            [{ size: ["small", false, "large", "huge"] }],   // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }],         // 标题
            [{'color': []}],                                 // 字体颜色
            [{ background: [] }],                            // 字体背景颜色
            [{ align: [] }],                                 // 对齐方式
            ["clean"],                                       // 清除文本格式
            ['link',
              // "image", "video"
            ],                                              // 链接、图片、视频                
          ],
        },
      });
      const titleConfig=[
        {Choice:'.ql-bold',title:'加粗'},
        {Choice:'.ql-italic',title:'斜体'},
        {Choice:'.ql-underline',title:'下划线'},
        {Choice:'.ql-header',title:'段落格式'},
        {Choice:'.ql-strike',title:'删除线'},
        {Choice:'.ql-blockquote',title:'块引用'},
        {Choice:'.ql-code',title:'插入代码'},
        {Choice:'.ql-code-block',title:'插入代码段'},
        {Choice:'.ql-font',title:'字体'},
        {Choice:'.ql-size',title:'字体大小'},
        {Choice:'.ql-list[value="ordered"]',title:'编号列表'},
        {Choice:'.ql-list[value="bullet"]',title:'项目列表'},
        {Choice:'.ql-direction',title:'文本方向'},
        {Choice:'.ql-header[value="1"]',title:'h1'},
        {Choice:'.ql-header[value="2"]',title:'h2'},
        {Choice:'.ql-align',title:'对齐方式'},
        {Choice:'.ql-color',title:'字体颜色'},
        {Choice:'.ql-background',title:'背景颜色'},
        {Choice:'.ql-image',title:'图像'},
        {Choice:'.ql-video',title:'视频'},
        {Choice:'.ql-link',title:'添加链接'},
        {Choice:'.ql-formula',title:'插入公式'},
        {Choice:'.ql-clean',title:'清除字体格式'},
        {Choice:'.ql-script[value="sub"]',title:'下标'},
        {Choice:'.ql-script[value="super"]',title:'上标'},
        {Choice:'.ql-indent[value="-1"]',title:'向左缩进'},
        {Choice:'.ql-indent[value="+1"]',title:'向右缩进'},
        {Choice:'.ql-header .ql-picker-label',title:'标题大小'},
        {Choice:'.ql-header .ql-picker-item[data-value="1"]',title:'标题一'},
        {Choice:'.ql-header .ql-picker-item[data-value="2"]',title:'标题二'},
        {Choice:'.ql-header .ql-picker-item[data-value="3"]',title:'标题三'},
        {Choice:'.ql-header .ql-picker-item[data-value="4"]',title:'标题四'},
        {Choice:'.ql-header .ql-picker-item[data-value="5"]',title:'标题五'},
        {Choice:'.ql-header .ql-picker-item[data-value="6"]',title:'标题六'},
        {Choice:'.ql-header .ql-picker-item:last-child',title:'标准'},
        {Choice:'.ql-size .ql-picker-item[data-value="small"]',title:'小号'},
        {Choice:'.ql-size .ql-picker-item[data-value="large"]',title:'大号'},
        {Choice:'.ql-size .ql-picker-item[data-value="huge"]',title:'超大号'},
        {Choice:'.ql-size .ql-picker-item:nth-child(2)',title:'标准'},
        {Choice:'.ql-align',title:'居左方式'},
        {Choice:'.ql-align .ql-picker-item:first-child',title:'居左对齐'},
        {Choice:'.ql-align .ql-picker-item[data-value="center"]',title:'居中对齐'},
        {Choice:'.ql-align .ql-picker-item[data-value="right"]',title:'居右对齐'},
        {Choice:'.ql-align .ql-picker-item[data-value="justify"]',title:'两端对齐'}
      ];
      for (let item of titleConfig) {
        let tip = document.querySelector('.ql-toolbar ' + item.Choice)
        if (!tip) continue
        tip.setAttribute('title', item.title)
      }
      setQuillInstance(quill); // 保存 Quill 实例到 state
    }
  }, []); // 空数组，确保只在组件挂载时执行一次

  const submitTask = () => {
    const contentHTML = quillInstance.root.innerHTML; // 保存HTML格式
    createTask({title, content: contentHTML, status: 'pending'}).then(res => {
      quillInstance.setText(0, quillInstance.getLength())
      setTitle('');
    })
  }
  return (
    <TaskWrap>
      <h2 className="title">新增任务</h2>
      <Input placeholder="请输入标题" value={title} className="title-input" onChange={(e) => setTitle(e.target.value)}/>
      <div ref={editorRef} id="editor"></div>

      <div className="btns">
        <Button type="primary" onClick={submitTask}>提交</Button>
      </div>
    </TaskWrap>
  );
});

export default TaskManage;