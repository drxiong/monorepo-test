# ui-test
vite built component library prototype

# 单元测试
pnpm test
# main分支push的时候，会自动校验eslint和单测
# publish分支push的时候，会自动发包（需要手动升级版本号）
# 主版本号：当你做了不兼容的 API 修改；
# 次版本号：当你做了向下兼容的功能性新增；
# 修订号：当你做了向下兼容的问题修正。


# 外部引用
import SmartyUI from "xy-ui-vite"
import 'xy-ui-vite/dist/style.css'
createApp({}).use(SmartyUI).mount('#app')