import '../css/app.css';
import './bootstrap';
import 'animate.css/animate.min.css'; // Add this line to import Animate.css
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import AppWrapper from './Components/AppWrapper';
// import Aos from 'aos';
// import 'aos/dist/aos.css'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // root.render(<App {...props} />);
        // Render the AppWrapper component with App and props
        root.render(<AppWrapper App={App} props={props} />);

        // Initialize AOS
        // Aos.init({
        //     duration: 1200, // You can customize this value
        // });
    },
    progress: {
        color: '#4B5563',
    },
});
