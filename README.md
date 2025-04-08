# React 组件库

这是一个基于 React、TypeScript、Storybook 和 Playwright 的组件库项目。

## 技术栈

- React 18.2.0
- TypeScript 4.9.5
- Storybook 7.6.17
- Playwright 1.41.2
- Jest 29.7.0

## 项目结构

```
src/
  ├── components/     # 组件源码
  ├── stories/       # Storybook 故事文件
  └── tests/         # 测试文件
      ├── e2e/      # Playwright E2E 测试
      ├── unit/     # Jest 单元测试
      └── setup.ts  # Jest 测试设置文件
```

## 开发指南

### 安装依赖

```bash
npm install
```

### Storybook 相关命令

1. 启动 Storybook 开发服务器
```bash
npm run storybook
```

2. 构建 Storybook 静态文件
```bash
npm run build-storybook
```

### Playwright 测试相关命令

1. 安装 Playwright 浏览器
```bash
npx playwright install
```

2. 运行所有 E2E 测试
```bash
npm run test:e2e
```

3. 在特定浏览器中运行测试
```bash
# Chrome
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# Safari
npx playwright test --project=webkit
```

4. 在 UI 模式下运行测试
```bash
npx playwright test --ui
```

5. 查看测试报告
```bash
npx playwright show-report
```

### Jest 测试相关命令

1. 运行所有单元测试
```bash
npm test
```

2. 监视模式运行测试
```bash
npm test -- --watch
```

3. 生成测试覆盖率报告
```bash
npm test -- --coverage
```

4. 运行特定测试文件
```bash
npm test -- path/to/test.tsx
```

5. 运行匹配特定名称的测试
```bash
npm test -- -t "test name pattern"
```

### 其他命令

1. 构建项目
```bash
npm run build
```

2. 代码格式化
```bash
npm run format
```

3. 代码检查
```bash
npm run lint
```

## 开发流程

1. 在 `src/components` 中创建新组件
2. 在 `src/stories` 中创建对应的故事文件
3. 在 `src/tests` 中编写测试用例
   - 单元测试放在 `src/tests/unit` 目录
   - E2E 测试放在 `src/tests/e2e` 目录
4. 使用 Storybook 进行组件开发和预览
5. 运行测试确保组件质量

## 测试规范

### 单元测试 (Jest)
- 使用 `@testing-library/react` 进行组件渲染和交互测试
- 使用 `@testing-library/user-event` 模拟用户事件
- 测试文件命名规范：`*.test.tsx`
- 保持测试覆盖率在 80% 以上

### E2E 测试 (Playwright)
- 测试文件命名规范：`*.spec.ts`
- 每个测试用例都应该有清晰的描述
- 使用 `test.beforeEach` 设置测试环境
- 合理使用 `expect` 断言

## 注意事项

- 确保在运行 Playwright 测试前已安装浏览器
- Storybook 开发服务器默认运行在 6006 端口
- 测试失败时会自动生成截图和追踪文件
- 运行测试前确保所有依赖都已正确安装 