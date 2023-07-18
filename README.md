# laf-template-bundle

## 使用

首先请使用`laf app init [appId] -b`来生成`.app.yaml`文件. (最好新建一个应用进行测试, 避免造成旧应用数据丢失)

```bash
pnpm install # 安装依赖
pnpm run build # 编译 src/functions 中的函数到 dist/functions
pnpm run deploy # 发布 dist/functions 里编译的函数到Laf
```
