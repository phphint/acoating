// hooks/useScrollToTop.js or utils/useScrollToTop.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useScrollToTop = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            console.log("Detected a route change!");
            // Ensure window is defined (avoid errors in non-browser environments)
            if (typeof window !== 'undefined') {
                const adjustment = -Math.abs(document.querySelector('body').offsetTop);
                window.scrollTo(0, 0);
                console.log(`Scroll to top executed with dynamic adjustment: ${adjustment}px`);
    
            } else {
                console.log("Window object is not available - cannot scroll.");
            }
        };

        // Add the scroll to top functionality on route change completion
        router.events.on('routeChangeComplete', handleRouteChange);
        console.log("Event listener for routeChangeComplete added.");

        // Cleanup function to remove the event listener
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            console.log("Event listener for routeChangeComplete removed.");
        };
    }, [router]);

    // It's useful to log when the hook itself is rerun
    console.log("useScrollToTop hook re-run.");
};

export default useScrollToTop;
