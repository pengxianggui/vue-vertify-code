<template>
    <div id="captcha" ref="captcha"></div>
</template>

<script>
    import CanvasDraw from './canvasDraw'

    export default {
        name: "VertifyCode",
        props: {
            width: {
                type: Number,
                default: () => 300
            },
            height: {
                type: Number,
                default: () => 160
            },
            side: {
                type: Number,
                default: () => 36
            },
            radius: {
                type: Number,
                default: () => 8
            }
        },
        mounted() {
            const _this = this
            const {width, height, side, radius} = _this
            CanvasDraw.init({
                el: this.$refs['captcha'],
                width: width,
                height: height,
                side: side,
                radius: radius,
                onSuccess: function () {
                    _this.onSuccess()
                },
                onFail: function () {
                    _this.onFail()
                },
                onRefresh: function () {
                    _this.onRefresh()
                }
            })
        },
        methods: {
            onSuccess() {
                this.$emit('success')
            },
            onFail() {
                this.$emit('fail')
            },
            onRefresh() {
                this.$emit('refresh')
            }
        }
    }
</script>

<style scoped>
</style>