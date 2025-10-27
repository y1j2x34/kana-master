# 🚀 快速开始

## 立即体验

### 方法1: 本地打开（推荐用于快速测试）
```bash
# 克隆或下载项目后，直接用浏览器打开
open index.html  # macOS
# 或
xdg-open index.html  # Linux
# 或
start index.html  # Windows
```

### 方法2: 使用本地服务器
```bash
# 进入项目目录
cd kana-master

# Python 3（通常系统自带）
python3 -m http.server 8000

# 然后在浏览器访问: http://localhost:8000
```

## 部署到GitHub Pages

### 1. 创建GitHub仓库
1. 访问 https://github.com/new
2. 仓库名: `kana-master`
3. 选择 Public
4. 点击 Create repository

### 2. 推送代码
```bash
cd kana-master
git init
git add .
git commit -m "🎌 Initial commit: 日语五十音学习工具"
git branch -M main
git remote add origin https://github.com/你的用户名/kana-master.git
git push -u origin main
```

### 3. 启用GitHub Pages
1. 进入仓库的 Settings
2. 左侧菜单找到 Pages
3. Source选择: GitHub Actions
4. 等待3-5分钟

### 4. 访问你的网站
```
https://你的用户名.github.io/kana-master/
```

## 第一次使用

1. **选择练习模式**
   - 新手推荐: 假名→发音 + 简单 + 单字

2. **开始练习**
   - 点击"开始练习"按钮

3. **答题**
   - 输入答案后按Enter或点击"提交答案"

4. **查看统计**
   - 点击右上角📊图标

## 需要帮助？

- 📖 详细使用说明: [USAGE.md](USAGE.md)
- 🚀 部署指南: [DEPLOYMENT.md](DEPLOYMENT.md)
- ✨ 功能清单: [FEATURES.md](FEATURES.md)

---

**提示**: 首次加载需要联网（加载TailwindCSS），之后可离线使用。

开始学习吧！がんばって！💪
