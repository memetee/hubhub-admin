import styled from "styled-components";

export const TaskDetail = styled.div`

.ql-editor {
    font-size: 14px;
  }
  /* 加粗和斜体 */
  .ql-editor strong {
    font-weight: bold;
  }
  .ql-editor em {
    font-style: italic;
  }

  /* 引用样式 (blockquote) */
  .ql-editor blockquote {
    color: #666;
    font-style: italic;
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }

  /* 超链接样式 */
  .ql-editor a {
    color: #007bff;
    text-decoration: underline;
  }

  /* 图片和视频 */
  .ql-editor img {
    max-width: 100%;
    height: auto;
    margin: 1em 0;
  }
  .ql-editor video {
    max-width: 100%;
    margin: 16px 0;
  }

  /* 无序和有序列表 */
  .ql-editor ul {
    list-style-type: disc;
    margin-left: 1.5em;
  }
  .ql-editor ol {
    list-style-type: decimal;
    margin-left: 1.5em;
  }

  /* 删除线 */
  .ql-editor s {
    text-decoration: line-through;
  }

  /* 对齐方式 */
  .ql-editor .ql-align-center {
    text-align: center;
  }
  .ql-editor .ql-align-right {
    text-align: right;
  }

  /* 代码块 */
  .ql-editor .ql-code-block-container{
    background-color: #23241f;
    color: #f8f8f2;
    border-radius:  3px;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
  }

  /* 代码块和行内代码 */
  .ql-editor pre {
    background-color: #f4f4f4;
    padding: 16px;
    border-radius: 5px;
    overflow-x: auto;
  }
  .ql-editor code {
    background-color: #f4f4f4;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  /* 公式 */
  .ql-editor .ql-formula {
    font-style: italic;
  }
`