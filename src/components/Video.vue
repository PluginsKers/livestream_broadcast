<script setup lang="ts">
import HLSCore from '@cloudgeek/playcore-hls';
const options = {
	sources: [
		{
			src: "//stream.i5res.com:8080/hls/zj520.m3u8",
			type: "application/x-mpegURL",
		},
	]
}

</script>

<template>
	<div class="player-wrap">
		<vue3-video-player :core="HLSCore" :src="options.sources" title="直播间">
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
