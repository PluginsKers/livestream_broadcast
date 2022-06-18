<script setup lang="ts">
import HLSCore from '@cloudgeek/playcore-hls';
import { reactive } from 'vue';

const options = reactive({
	sources: [
		{
			src: "https://stream.i5res.com/hls/zj520.m3u8",
			type: "application/x-mpegURL",
		},
	]
});

</script>

<template>
	<div class="player-wrap">
		<vue3-video-player :core="HLSCore" :options="options" :src="options.sources" title="大猫咪的直播间">
		</vue3-video-player>
	</div>
</template>

<style scoped>
.player-wrap {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #000;
}
</style>
