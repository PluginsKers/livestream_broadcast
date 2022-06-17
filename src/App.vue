<script lang="ts">
// @ts-nocheck
import Video from './components/Video.vue';

export default {
	components: {
		Video,
	},

	data() {
		let loaded: boolean = false;
		return { loaded };
	},

	mounted() {
		setTimeout(() => {
			this.loaded = true;
		}, 1000);
	},
}

</script>

<template>
	<div class="loading" v-if="!loaded">加载中...</div>
	<Video v-else />
</template>

<style>
@font-face {
	font-family: "zj520";
	src: url(./assets/fonts/font.ttf);
}

body,
html {
	margin: 0;
	padding: 0;
	background: rgb(41, 41, 41);
}

#app {
	display: flex;
	font-family: zj520, Avenir, Helvetica, Arial, sans-serif;
	font-smooth: antialiased;
	z-index: 1;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	flex-wrap: nowrap;
}

.loading {
	position: absolute;
	font-size: 30px;
	top: 5vh;
	left: 0;
	width: 100vw;
	text-align: center;
	color: #fff;
	z-index: 2;
}
</style>
