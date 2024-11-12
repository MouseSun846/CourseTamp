import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
	plugins: [uni()],
	server: {
			proxy: {
				'/course-camp': {
					target: 'http://localhost:8089/course-camp',
					changeOrigin: true,
					rewrite: path => {
						return path.replace(/^\/course-camp/, '')
					}
				},
				
			}
		}
});