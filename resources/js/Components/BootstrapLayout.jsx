import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
export default function BootstrapLayout({ children }) {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    //     script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    //     script.crossOrigin = "anonymous";
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script); // Cleanup on unmount
    //     };
    // }, []);
    useEffect(() => {
        // Dynamically load the Bootstrap JavaScript (bundle)
        const script = document.createElement('script');
        script.src = "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; // Path to Bootstrap JS in node_modules
        script.integrity = "sha384-..."; // Optional: Add integrity hash if needed
        script.crossOrigin = "anonymous"; // Optional: Cross-origin attribute if needed
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
    }, []);

    return (
        <>
            {/* <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet" 
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous" 
            /> */}
            {/* <div>
                {children}
            </div> */}
            {children}
        </>
    );
}

