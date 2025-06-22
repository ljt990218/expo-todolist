# Expo TodoList App

一个使用 Expo、React Native 和 Tailwind CSS 构建的简单美观的待办事项（Todo List）应用。它支持浅色和深色模式，并提供流畅的用户体验。

## ✨ 主要功能

- **查看任务列表**: 清晰地展示您的所有待办事项。
- **添加新任务**: 通过一个模态框轻松添加新任务。
- **标记完成**: 点击即可切换任务的完成状态。
- **主题切换**: 支持浅色和深色模式，并能根据系统设置自动切换。
- **流畅动画**: 在添加任务和切换状态时有平滑的动画效果。

## 📸 截图

| 浅色模式 | 深色模式 |
| :---: | :---: |
| *（此处放置浅色模式截图）* | *（此处放置深色模式截图）* |

## 🛠️ 技术栈

- **[React Native](https://reactnative.dev/)**: 跨平台应用开发框架。
- **[Expo](https://expo.dev/)**: 加速 React Native 应用开发的平台和工具集。
- **[TypeScript](https://www.typescriptlang.org/)**: 为 JavaScript 添加静态类型。
- **[Tailwind CSS (NativeWind)](https://www.nativewind.dev/)**: 一个工具类优先的 CSS 框架，用于快速构建用户界面。
- **[Expo Router](https://docs.expo.dev/router/introduction/)**: 用于 React Native 和 Web 的文件系统路由。

## 🚀 快速开始

请按照以下步骤在本地运行项目：

**1. 克隆仓库**
```bash
git clone https://github.com/your-username/expo-todolist.git
cd expo-todolist
```

**2. 安装依赖**

推荐使用 `yarn`：
```bash
yarn install
```
或者使用 `npm`：
```bash
npm install
```

**3. 启动应用**
```bash
yarn expo start
```
或者
```bash
npx expo start
```
然后，在您的手机上使用 Expo Go 应用扫描二维码，或者在模拟器中运行。

## 📁 项目结构

```
expo-todolist/
├── app/              # Expo Router 路由和页面
│   ├── (tabs)/       # 标签页布局和屏幕
│   └── _layout.tsx   # 全局布局
├── assets/           # 字体、图片等静态资源
├── components/       # 可重用的 React 组件
├── constants/        # 应用常量（如颜色）
├── hooks/            # 自定义 Hooks
├── package.json      # 项目依赖和脚本
└── tailwind.config.js # Tailwind CSS 配置文件
```

## 🤝 贡献

欢迎提交 Pull Request 或 Issue 来为这个项目做出贡献！
