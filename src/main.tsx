// 禁止右键菜单（防止长按复制/搜题）
document.addEventListener('contextmenu', e => e.preventDefault());

// 禁止用户选中文字
document.addEventListener('selectstart', e => e.preventDefault());

// 禁止键盘快捷键复制（Ctrl+C / Cmd+C）
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 's' || e.key === 'S')) {
    e.preventDefault();
  }
});

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
