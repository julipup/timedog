import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { internalIpV4 } from 'internal-ip';
import Icons from 'unplugin-icons/vite';

export default defineConfig(async () => {
	const host = await internalIpV4();

    /** @type {import('vite').UserConfig} */
    const config = {
        plugins: [
			sveltekit(),
			Icons({
				compiler: 'svelte',
			})
		],
        test: {
            include: ['src/**/*.{test,spec}.{js,ts}']
        },
        server: {
            host: '0.0.0.0', // listen on all addresses
            port: 5173,
            strictPort: true,
            hmr: {
                protocol: 'ws',
                host,
                port: 5183
            }
        }
    };

	return config
});