import '@testing-library/jest-dom';

// 添加全局的测试设置
beforeAll(() => {
  // 设置测试环境变量
  process.env.NODE_ENV = 'test';
});

// 清理测试环境
afterEach(() => {
  // 清理 DOM
  document.body.innerHTML = '';
}); 