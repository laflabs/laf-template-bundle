# laf-template-bundle

## 使用

```bash
pnpm install # 安装依赖
pnpm run build # 编译 src/functions 中的函数到 dist/functions
pnpm run deploy # 发布 dist/functions 里编译的函数到Laf
```

## 注意

目前依赖还无法用`deploy`脚本来管理, 因为`laf-cli`会改变`package.json`的内容, 我再看看这块是否需要同步线上的依赖到本地, 如果不需要, 我会提个pr到`laf-cli`.
