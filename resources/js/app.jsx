import '../css/app.css';
import './bootstrap';
import 'animate.css/animate.min.css'; // Add this line to import Animate.css
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import Aos from 'aos';
import 'aos/dist/aos.css'
import PageLoader from './Components/PageLoader';
import { useEffect, useState } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

function InertiaAppWithLoader({ App, props }) {
    // State to handle loading
    const [loading, setLoading] = useState(true);

    // Effect to initialize AOS and set loading to false once done
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
        // setLoading(false); // Set loading to false after AOS initialization
        // Set a longer delay for loader visibility
        setTimeout(() => setLoading(false), 2500); // Adjust the delay as needed (e.g., 3000ms = 3 seconds)
    }, []);

    return loading ? <PageLoader /> : <App {...props} />;
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <InertiaAppWithLoader App={App} props={props} />
        );

        // root.render(<App {...props} />);

        // // Initialize AOS
        // Aos.init({
        //     duration: 1200, // You can customize this value
        // });
    },
    progress: {
        color: '#4B5563',
    },
});
