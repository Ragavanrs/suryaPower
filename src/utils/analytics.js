/**
 * Analytics utility — thin wrapper around window.gtag (GA4).
 *
 * Usage:
 *   import analytics from '../utils/analytics';
 *   analytics.trackEvent('contact_form_submit', { service: 'Generator Rental' });
 *
 * To enable Google Analytics 4:
 *   1. Set REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX in .env
 *   2. Add the GA4 gtag.js script to public/index.html
 */

const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const analytics = {
  /**
   * Track a custom GA4 event.
   * @param {string} eventName
   * @param {Record<string, unknown>} [params]
   */
  trackEvent(eventName, params = {}) {
    if (!GA_ID || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params);
  },

  /**
   * Track a page view — called automatically by GA4 on SPA navigation
   * if enhanced measurement is enabled. Call this manually if needed.
   * @param {string} path
   * @param {string} title
   */
  trackPageView(path, title) {
    if (!GA_ID || typeof window.gtag !== 'function') return;
    window.gtag('config', GA_ID, { page_path: path, page_title: title });
  },
};

export default analytics;
