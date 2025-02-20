// We want to listen for the load event dispatched directly on the window object.

// Create an App function
/**
 * This function is responsible for the initialization of the application.
 * It will be called when the window has finished loading.
 * @returns {void}
 */
function App() {
  const mediaQuery = /**@type {string} */ 'only screen and (max-width:767px)';
  const navElement = /**@type {HTMLElement | null} */ (
    document.querySelector('.nav-container')
  );
  handleMediaQuery(mediaQuery);
  NavComponent(navElement);
}

/**
 * This function is responsible for handling the media query.
 * @param {string} query - The media query to be handled.
 * @returns {void}
 */
function handleMediaQuery(query) {
  const isMobileDevice = /** @type {boolean}*/ window.matchMedia(query).matches;
  console.log(isMobileDevice);
  const navMenu = /**@type {HTMLDivElement | null} */ (
    document.querySelector('.nav-menu')
  );
  navMenu?.setAttribute('aria-hidden', `${isMobileDevice ? 'true' : 'false'}`);
}
/**
 * This navigation component is responsible for handling the navigation element.
 * @param {HTMLElement | null} nav - The navigation element to be handled.
 * @returns {void}
 */
function NavComponent(nav) {
  nav?.addEventListener('click', handleMobileNavigation.bind(null, nav));
}

/**
 * This function is responsible for handling the functionality mobile navigation
 * @param {HTMLElement | null} nav - The navigation element to be
 * @param {Event} evtObj - The event object.
 * @returns {void}
 */
function handleMobileNavigation(nav, evtObj) {
  // Get the nav-menu element
  const navMenu = nav?.querySelector('.nav-menu');

  // Get the event target
  const eventTarget = /**@type {HTMLElement} */ (evtObj.target);
  if (!(eventTarget instanceof HTMLElement)) return;

  // Get the mobile navigation element by search up the DOM tree
  const mobileNavBtn = /**@type {HTMLButtonElement | null}*/ (
    eventTarget.closest('.menuBtn')
  );
  if (!mobileNavBtn) return;

  // Get the dropshadow-overlayElement
  const dropShadowOverlay =
    /**@type {HTMLDivElement | null}*/ document.querySelector(
      '.dropshadow-overlay'
    );

  console.log(dropShadowOverlay);

  // On mobile devices the value of aria-expanded is check and we need to manipulate it dynamically depending on the state.
  const closedMenu = /**@type {Boolean} */ (
    mobileNavBtn.getAttribute('aria-expanded') === 'false' || false
  );
  console.log(closedMenu);

  // Using the closedMenu variable we want to remove the aria-expanded attribute on the clicked mobileNavBtn
  mobileNavBtn.removeAttribute('aria-expanded');

  // Remove the active class from the mobileNavBtn
  mobileNavBtn.classList.remove('active');

  // Using the closedMenu variable we want to dynamically alter the the aria-hidden attribute of the navMenu element
  navMenu?.setAttribute('aria-hidden', `${!closedMenu}`);

  // We need to check if the value of the aria-expanded attribute of the mobileNavBtn element is true and if the next sibling element of the mobileNavBtn element is a button element
  if (
    closedMenu &&
    mobileNavBtn.nextElementSibling instanceof HTMLButtonElement
  ) {
    // Using the closedMenu variable we want to dynamically alter the aria-expanded attribute of the sibling element of the mobileNavBtn element which is also a button element
    mobileNavBtn?.nextElementSibling?.setAttribute(
      'aria-expanded',
      `${closedMenu}`
    );
    mobileNavBtn?.nextElementSibling?.classList.add('active');
    navMenu?.classList.add('active');
  } else {
    mobileNavBtn?.previousElementSibling?.setAttribute(
      'aria-expanded',
      `${closedMenu}`
    );
    mobileNavBtn?.previousElementSibling?.classList.add('active');
    navMenu?.classList.remove('active');
  }
}

App();
