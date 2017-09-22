<template>
	<div>
		<h1>新闻列表</h1>
		<div v-for="(item,index) in news" :key="index">
			<p class="newsItem">{{item.title}}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			news: 'getNews'
		})
	},

	created() {
		this.$store.dispatch(`getNews`)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsItem {
	cursor: pointer;
}

.newsItem:hover {
	color: #fff;
}
</style>
