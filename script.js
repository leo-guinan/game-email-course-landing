/**
 * Find Your Game — Landing page scripts
 * - ConvertKit form success detection → Fathom "Email signup" event
 *
 * Config: Replace SITE_ID in index.html (Fathom) and the ConvertKit script
 * (data-uid + src) with your real values. See README.
 */

(function () {
  var FATHOM_EVENT_NAME = 'Email signup';
  var CONVERTKIT_SUCCESS_SELECTOR = '.formkit-alert-success';

  var container = document.getElementById('convertkit-form-container');
  if (!container) return;

  var signupTracked = false;

  function trackSignup() {
    if (signupTracked) return;
    signupTracked = true;
    if (typeof window.fathom === 'object' && typeof window.fathom.trackEvent === 'function') {
      window.fathom.trackEvent(FATHOM_EVENT_NAME);
    }
  }

  function checkForSuccess() {
    if (container.querySelector(CONVERTKIT_SUCCESS_SELECTOR)) {
      trackSignup();
    }
  }

  var observer = new MutationObserver(function () {
    checkForSuccess();
  });

  observer.observe(container, {
    childList: true,
    subtree: true
  });

  // In case ConvertKit already injected success before observer started
  checkForSuccess();
})();
