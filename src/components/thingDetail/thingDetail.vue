<template>
	<transition name="move">
		<div v-show="showFlag" class="thingDetail" ref="thing">
			<div class="back" @click="hide()">&lt;</div>
			<div class="pic">
				<img :src="thing.pic">
			</div>
			<div class="info">
				<span>{{thing.name}}</span>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props:{
			thing:{
				type:Object
			}
		},
		data() {
			return {
				showFlag:false
			}
		},
		methods:{
			show() {
				this.showFlag = true;
			},
			hide() {
				this.showFlag = false;
			}
		}
	}
</script>

<style lang="scss">
	.thingDetail{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		bottom: 0;
		background-color: #fff;
		transition:translate3d(0, 0, 0);
		.back{
			position: absolute;
			width:20px;
			height: 20px;
			top:10px;
			left: 10px;
			font-weight: bold;
			color: #fff;
			text-shadow: 3px 3px 3px #aaa;
			font-size: 20px;
		}
		.pic{
	    	// border:1px #aaa solid;
	    	box-shadow: 3px 3px 3px #aaa;
	    }
	    .pic img{
	    	width: 100%;
	    }
	}
	.move-enter-active, .move-leave-active {
          transition: all 0.1s linear
        }
    .move-enter, .move-leave-active {
      transform: translate3d(100%, 0, 0)
    }

</style>