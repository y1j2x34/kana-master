# 📁 项目文件结构说明

## 核心文件

### `index.html` (250行)
**用途**: 应用主页面
- 定义整体HTML结构
- 包含所有UI组件
- 设置面板、答题面板、统计面板
- 引入TailwindCSS（CDN）
- 引入data.js和app.js

**关键部分**:
- 顶部导航栏（主题切换、统计按钮）
- 设置面板（题型/难度/内容选择）
- 答题区域（题目显示、输入、反馈）
- 统计面板（学习数据展示）

### `styles.css` (370行)
**用途**: 自定义样式表
- 补充TailwindCSS未覆盖的样式
- 定义动画效果
- 深色模式样式
- 按钮、卡片、进度条等组件样式

**关键样式**:
- `.btn-primary` - 主按钮
- `.option-btn` - 选项按钮
- `.card` - 卡片容器
- `.progress-bar` - 进度条
- 动画: `bounce`, `shake`, `fadeIn`

### `data.js` (300行)
**用途**: 日语数据库
- 完整的五十音数据（清音、浊音、拗音）
- 单词库（按难度分类）
- 句子库（日常会话）
- 片假名外来词

**数据结构**:
```javascript
seionData        // 46个清音
dakuonData       // 25个浊音/半浊音
yoonData         // 36个拗音
allKanaData      // 按难度组织
wordBank         // 单词库
sentenceBank     // 句子库
```

### `app.js` (774行)
**用途**: 应用核心逻辑
- 状态管理
- 题目生成
- 答案验证
- 统计系统
- UI控制
- 本地存储

**核心模块**:
```javascript
appState          // 应用状态
utils             // 工具函数
questionGenerator // 题目生成器
audioSystem       // 音频系统（Web Speech API）
statsSystem       // 统计系统
uiController      // UI控制器
```

## GitHub Actions

### `.github/workflows/deploy.yml`
**用途**: 自动部署配置
- 监听main/master分支推送
- 自动部署到GitHub Pages
- 无需额外配置

**工作流程**:
1. 检出代码
2. 配置GitHub Pages
3. 上传构建产物
4. 部署到Pages

## 配置文件

### `.gitignore`
**用途**: Git忽略文件
- 忽略编辑器配置
- 忽略系统文件
- 忽略临时文件

## 文档文件

### `README.md` (146行)
**用途**: 项目主文档
- 项目介绍
- 功能特性
- 快速开始
- 使用说明
- 技术栈

### `USAGE.md` (210行)
**用途**: 详细使用说明
- 练习模式详解
- 难度选择说明
- 界面功能介绍
- 学习建议
- 常见问题

### `DEPLOYMENT.md` (154行)
**用途**: 部署指南
- GitHub Pages部署步骤
- 本地测试方法
- 自定义域名配置
- 故障排除
- 性能优化建议

### `FEATURES.md` (约200行)
**用途**: 功能清单
- 需求对照检查
- 功能完整性验证
- 测试清单
- 项目统计

### `QUICKSTART.md`
**用途**: 快速开始指南
- 最简单的使用方法
- 快速部署步骤
- 第一次使用指引

### `PROJECT_STRUCTURE.md`（本文件）
**用途**: 项目结构说明
- 所有文件的用途说明
- 代码结构介绍
- 开发者指南

### `LICENSE`
**用途**: 开源许可证
- MIT License
- 允许自由使用和修改

## 项目统计

```
文件总数: 10个核心文件 + 1个workflow配置
代码行数:
  - HTML:       250行
  - CSS:        370行
  - JavaScript: 774行（app.js）
  - Data:       300行（data.js）
  - 总计:       1,694行代码

文档行数:
  - README:     146行
  - USAGE:      210行
  - DEPLOYMENT: 154行
  - 其他:       约300行
  - 总计:       约800行文档

总大小: 约100KB（未压缩）
```

## 技术架构

```
┌─────────────────────────────────────┐
│          index.html                 │
│  (HTML结构 + TailwindCSS)           │
└───────────┬─────────────────────────┘
            │
            ├──> styles.css (自定义样式)
            │
            ├──> data.js (数据层)
            │     ├─ 五十音数据
            │     ├─ 单词库
            │     └─ 句子库
            │
            └──> app.js (应用逻辑层)
                  ├─ 状态管理
                  ├─ 题目生成
                  ├─ 答案验证
                  ├─ 统计系统
                  └─ UI控制
                       │
                       ├─ 本地存储 (localStorage)
                       └─ 语音合成 (Web Speech API)
```

## 数据流

```
用户操作
   ↓
UI控制器 (uiController)
   ↓
题目生成器 (questionGenerator)
   ↓
数据库 (data.js)
   ↓
显示题目
   ↓
用户答题
   ↓
答案验证 (utils.checkAnswer)
   ↓
统计记录 (statsSystem)
   ↓
本地存储 (localStorage)
   ↓
反馈显示
```

## 开发指南

### 添加新的假名
编辑 `data.js`:
```javascript
const seionData = [
    // 添加新的假名对象
    { hiragana: '新', katakana: '新', romaji: ['shin'], type: 'consonant' }
];
```

### 添加新的单词
编辑 `data.js`:
```javascript
const wordBank = {
    easy: [
        // 添加新单词
        { word: '新語', romaji: 'shingo', meaning: '新词', type: 'noun' }
    ]
};
```

### 添加新的题型
1. 在 `index.html` 添加UI选项
2. 在 `questionGenerator` 添加生成逻辑
3. 在 `uiController.displayQuestion` 添加显示逻辑
4. 在 `uiController.submitAnswer` 添加验证逻辑

### 修改样式
- 全局样式: 修改 `styles.css`
- TailwindCSS类: 修改 `index.html` 中的class属性

### 调试技巧
```javascript
// 在浏览器控制台查看应用状态
console.log(appState);

// 查看当前题目
console.log(appState.currentQuestion);

// 查看统计数据
console.log(appState.stats);

// 清除本地存储
localStorage.clear();
```

## 性能优化点

1. **数据结构**: 使用对象而非数组查找（O(1)）
2. **事件委托**: 减少事件监听器数量
3. **CSS动画**: 使用transform和opacity（GPU加速）
4. **本地存储**: 避免频繁读写
5. **CDN加载**: TailwindCSS通过CDN加速

## 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE不支持（已停止支持）

## 未来扩展方向

- [ ] 添加更多单词和句子
- [ ] 支持自定义词库
- [ ] 添加学习曲线图表
- [ ] 导出学习报告
- [ ] 支持多用户（账号系统）
- [ ] 添加更多语音选项
- [ ] 游戏化元素（积分、徽章）
- [ ] 社交分享功能

---

## 快速参考

**启动项目**: 直接打开 `index.html`
**修改数据**: 编辑 `data.js`
**修改逻辑**: 编辑 `app.js`
**修改样式**: 编辑 `styles.css`
**修改UI**: 编辑 `index.html`

**文档**: 
- 用户文档: `README.md`, `USAGE.md`
- 开发文档: `PROJECT_STRUCTURE.md`
- 部署文档: `DEPLOYMENT.md`, `QUICKSTART.md`

---

最后更新: 2025-10-27

