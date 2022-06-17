// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player';
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css';


createApp(App).use(Vue3VideoPlayer, {
	lang: 'zh-CN'
}).mount('#app');
