import React, { useEffect, useState } from 'react';
import PageLoader from '@/Components/PageLoader'; // Import your PageLoader component
import Aos from 'aos';
import 'aos/dist/aos.css';

function AppWrapper({ App, props }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize AOS and start loading
        Aos.init({ duration: 1200 });
        setLoading(true);

        // Simulate a loading delay or set loading to false after a task completes
        const timeout = setTimeout(() => setLoading(false), 2000); // Adjust delay as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? <PageLoader message="Gentleman's Essentials" /> : <App {...props} />}
        </>
    );
}

export default AppWrapper;
