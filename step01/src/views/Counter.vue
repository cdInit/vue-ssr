<template>
	<div>
		<h1>这是计数</h1>
		<button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
    <h3>Count is {{ count }}</h3>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
