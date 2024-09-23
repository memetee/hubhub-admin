import { Modal } from 'antd';
import React, { useEffect, useRef, memo } from "react";
// 引入 Quill样式
import "quill/dist/quill.snow.css"; // 引入 Quill 的样式
import 'quill/dist/quill.core.css'
const Overview = memo((props) => {
  const editorRef = useRef(null); // 用于引用 DOM 元素
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = props.taskDetail.content;
    }
  }, [props.taskDetail.title])
  return (
    <Modal title={props.taskDetail.title}  open={props.showDetail} onCancel={props.handleShowDetail} footer={null}>
      <div className='ql-editor' ref={editorRef}></div>
    </Modal>
  );
});

export default Overview;
