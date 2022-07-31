import divBoth from '@/package/div-both.vue'
import divBox from '@/package/div-box.vue'
import divCard from '@/package/div-card.vue'
import divCenter from '@/package/div-center.vue'
import divDad from '@/package/div-dad.vue'
import divFoot from '@/package/div-foot.vue'
import divHeight from '@/package/div-height.vue'
import divImg from '@/package/div-img.vue'
import divLeft from '@/package/div-left.vue'
import divRight from '@/package/div-right.vue'
import divSon from '@/package/div-son.vue'
import divText from '@/package/div-text.vue'
import divWidth from '@/package/div-width.vue'


const components = [
    divBoth,
    divBox,
    divCard,
    divCenter,
    divDad,
    divFoot,
    divHeight,
    divImg,
    divLeft,
    divRight,
    divSon,
    divText,
    divWidth
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })

    // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
    }

}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
    install
}