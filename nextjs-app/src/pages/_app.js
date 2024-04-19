// pages/_app.js
import '../nextjs_assets/styles/global.css'; // Adjust the path as necessary
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import useScrollToTop from '../hooks/useScrollToTop';  // Make sure this path is correct

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MyApp({ Component, pageProps }) {
    useScrollToTop();  // Call the custom hook with logging

    return <Component {...pageProps} />;
}
