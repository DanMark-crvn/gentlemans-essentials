import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    // server: {
    //     host: '', //WIFI Ip
    //     // host: '', //LAN HOME
    //     // host: '', //
    //     // host: '', //Ip
    //     // host: '', //Ip
    //     port: 5173,      // Default Vite port, change if necessary
    // }
});
