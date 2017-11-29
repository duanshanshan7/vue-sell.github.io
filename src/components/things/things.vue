<template>
	<div>
		<div class="things" ref="thingsWrapper">
			<ul class="thing-list">
				<li v-for="item in things.data" class="thing" @click="detailShow(item)">
					<img :src="item.pic" class="pic">
					<span class="name">《{{item.name}}》</span>
					<span class="score">评分：{{item.score}}</span><br>
					<span class="rating">{{item.ratings[0].rating}}</span>
				</li>
			</ul>
		</div>
		<thingDetail :thing="thing" ref="thing"></thingDetail>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import thingDetail from '@/components/thingDetail/thingDetail';
	export default {
		// props: {
	 //      things: {
	 //        type: Object
	 //      }
	 //    },
		data() {
			return {
				things:{},
				thing:{}
			}
		},
		created() {
		    this.$http.get('/api/things').then(function(res){
		      this.things = res.data;
		      this.$nextTick(() => {
				this._initScroll();
			   })
		    },function(res){

		    })
		},
		methods:{
			detailShow(data) {
				this.thing = data;
				this.$refs.thing.show();
			},
			_initScroll() {
		        this.Scroll = new BScroll(this.$refs.thingsWrapper, {
		          click: true
		        });
			}
		},
		components:{
			thingDetail
		}
	}
</script>

<style lang="scss">
	$background-color:#eee;
	.things{
		position: absolute;
		top:40px;
		bottom:0px;
		width: 100%;
		background-color: $background-color;
		overflow: hidden;
	}
	.thing-list{
		column-count:2;
		column-gap: 0.7em;
		-webkit-column-break-before: avoid;
		-webkit-column-break-after: avoid;
		-webkit-column-break-inside: avoid;
		.thing{
			-webkit-column-break-before: avoid;
			-webkit-column-break-after: avoid;
			-webkit-column-break-inside: avoid;
			overflow: hidden;
			border-radius: 3px;
			background-color: #fff;
			margin-bottom: 8px;
			padding: 5px;
			box-shadow: 3px 3px 3px #aaa;
			font-size: 12px;
			line-height: 1.5em;
			text-align: center;
			.pic{
				width:100%;
				border-radius: 3px;
			}
			.name,.score{
				display: inline-block;
				margin: 5px 5px 0px 5px;
				text-align: left;
				color: #ffa500;
			}
			.rating{
				width:100%;
				display:-webkit-box;
				-webkit-line-clamp:3; 
				-webkit-box-orient:vertical;
				overflow:hidden;
				text-align: left;
				text-indent: 20px;
				font-weight: bold;
			}
		}
	}
</style>