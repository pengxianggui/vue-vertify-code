import VertifyCode from "./VertifyCode";
import './canvasDraw.css'

VertifyCode.install = function (Vue) {
    Vue.component(VertifyCode.name, VertifyCode)
}

export default VertifyCode