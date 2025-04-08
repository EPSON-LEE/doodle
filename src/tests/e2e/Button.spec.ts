import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
  test.beforeEach(async ({ page }) => {
    // 访问 Button 组件的 Storybook 页面
    await page.goto('/?path=/docs/components-button--primary');
  });

  test('should render primary button correctly', async ({ page }) => {
    // 检查按钮是否存在
    const button = page.getByRole('button', { name: 'Primary Button' });
    await expect(button).toBeVisible();
    
    // 检查按钮样式
    await expect(button).toHaveClass(/bg-blue-500/);
  });

  test('should handle click events', async ({ page }) => {
    // 获取按钮元素
    const button = page.getByRole('button', { name: 'Primary Button' });
    
    // 点击按钮
    await button.click();
    
    // 这里可以添加点击后的验证逻辑
    // 例如检查是否触发了回调函数等
  });

  test('should render different variants', async ({ page }) => {
    // 测试 Secondary 变体
    await page.goto('/?path=/docs/components-button--secondary');
    const secondaryButton = page.getByRole('button', { name: 'Secondary Button' });
    await expect(secondaryButton).toHaveClass(/bg-gray-500/);

    // 测试 Outline 变体
    await page.goto('/?path=/docs/components-button--outline');
    const outlineButton = page.getByRole('button', { name: 'Outline Button' });
    await expect(outlineButton).toHaveClass(/border-2/);
  });

  test('should handle disabled state', async ({ page }) => {
    // 访问禁用状态的按钮
    await page.goto('/?path=/docs/components-button--disabled');
    
    // 获取禁用状态的按钮
    const disabledButton = page.getByRole('button', { name: 'Disabled Button' });
    
    // 验证按钮是否被禁用
    await expect(disabledButton).toBeDisabled();
  });

  test('should render different sizes', async ({ page }) => {
    // 测试小尺寸按钮
    await page.goto('/?path=/docs/components-button--small');
    const smallButton = page.getByRole('button', { name: 'Small Button' });
    await expect(smallButton).toHaveClass(/text-sm/);

    // 测试大尺寸按钮
    await page.goto('/?path=/docs/components-button--large');
    const largeButton = page.getByRole('button', { name: 'Large Button' });
    await expect(largeButton).toHaveClass(/text-lg/);
  });
}); 