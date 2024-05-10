const s: string = 'TypeScript'
console.log(s)
import { createApp } from 'vue/dist/vue.esm-browser'
import SmartyUI from './entry'
createApp({
    template: `
        <div>
            <XButton color="pink" icon="search">粉色按钮</XButton>
            <XButton color="red" icon="edit">红色按钮</XButton>
        </div>
    `
}).use(SmartyUI).mount('#app')