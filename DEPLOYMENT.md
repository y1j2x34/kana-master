# 🚀 部署指南

## GitHub Pages 部署步骤

### 1. 推送代码到GitHub

```bash
# 初始化Git仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 日语五十音学习工具"

# 添加远程仓库
git remote add origin https://github.com/y1j2x34/kana-master.git

# 推送到主分支
git push -u origin main
# 或者如果你使用master分支
git push -u origin master
```

### 2. 配置GitHub Pages

1. 进入你的GitHub仓库
2. 点击 `Settings` (设置)
3. 在左侧菜单找到 `Pages`
4. 在 `Source` 部分:
   - 选择 `GitHub Actions` 作为部署源

### 3. 自动部署

当你推送代码到main/master分支后，GitHub Actions会自动：
1. 检出代码
2. 配置GitHub Pages
3. 上传网站文件
4. 部署到GitHub Pages

### 4. 访问你的网站

部署完成后，你的网站将在以下地址可访问：
```
https://y1j2x34.github.io/kana-master/
```

### 5. 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名，例如：
   ```
   kana.yourdomain.com
   ```
3. 在你的域名提供商处添加DNS记录：
   - 类型: CNAME
   - 主机: kana (或你想要的子域名)
   - 值: y1j2x34.github.io

## 本地测试

### 方法1: 直接打开
直接在浏览器中打开 `index.html` 文件即可。

### 方法2: 使用本地服务器

使用Python的HTTP服务器：

```bash
# Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

或使用Node.js的http-server：

```bash
# 先安装 http-server
npm install -g http-server

# 运行
http-server -p 8000

# 然后访问 http://localhost:8000
```

## 更新网站

每次你修改代码并推送到GitHub后，GitHub Actions会自动重新部署：

```bash
git add .
git commit -m "更新说明"
git push
```

## 故障排除

### 1. GitHub Actions失败

- 检查 `.github/workflows/deploy.yml` 文件是否正确
- 确保GitHub Pages在仓库设置中已启用
- 查看Actions标签页的日志了解具体错误

### 2. 页面无法访问

- 确保GitHub Pages已正确配置
- 等待3-5分钟，部署需要一些时间
- 清除浏览器缓存

### 3. 样式或功能异常

- 检查浏览器控制台是否有错误
- 确保浏览器支持ES6+语法
- 检查文件路径是否正确（GitHub Pages区分大小写）

## 监控和分析

### 添加Google Analytics（可选）

在 `index.html` 的 `<head>` 标签中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 性能优化建议

1. **压缩图片**: 如果添加了图片资源
2. **使用CDN**: TailwindCSS已通过CDN加载
3. **启用缓存**: GitHub Pages自动处理
4. **监控性能**: 使用Lighthouse测试

## 安全建议

1. 不要在代码中包含敏感信息
2. 定期更新依赖（如TailwindCSS CDN链接）
3. 使用HTTPS（GitHub Pages默认支持）

---

如有问题，请查看GitHub Actions日志或提交Issue。

