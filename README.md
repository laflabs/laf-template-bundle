# laf-template-bundle

## 使用

首先请使用`laf app init [appId] -b`来生成`.app.yaml`文件.

```bash
pnpm install # 安装依赖
pnpm run build # 编译 src/functions 中的函数到 dist/functions
pnpm run deploy # 发布 dist/functions 里编译的函数到Laf
```

## 注意

目前依赖还无法用`deploy`脚本来管理, 因为`laf-cli`会改变`package.json`的内容, 将线上的所有依赖都写入到`package.json`的`devDependencies`中, 这可能会导致`tsup`编译错误, 我们需要合理管理`dependencies`和`devDependencies`的内容.

待我提交一个pr给`laf-cli`后, 再使用`deploy`脚本来管理依赖.
