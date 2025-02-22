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
  navComponent(navElement);
  dropDownComponent(navElement);
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
function navComponent(nav) {
  nav?.addEventListener('click', handleMobileNavMenu.bind(null, nav));
}

/**
 * This function is responsible for handling the functionality mobile navigation
 * @param {HTMLElement | null} nav - The navigation element to be
 * @param {Event} evtObj - The event object.
 * @returns {void}
 */
function handleMobileNavMenu(nav, evtObj) {
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

  // Call the animate function to animate the navigation links and account buttons
  animateNavMenu();
}

/**
 * This function animates the navigation links and the account buttons
 */
function animateNavMenu() {
  const navLinksButtons = /**@type {NodeListOf<HTMLLIElement>}*/ (
    document.querySelectorAll('.nav-menu__container > ul > li')
  );
  const DELAYDIVIDER = 25;

  navLinksButtons.forEach(function (navLinkButton, index) {
    // When the user clicks the first time there is no animation
    // When they click again there is an existing animation
    const fillMode = /** @type {HTMLLIElement} */ (navLinkButton).style
      .animationFillMode;
    if (fillMode.includes('forwards')) {
      /**@type {HTMLLIElement} */ (navLinkButton).style.animation = ``;
    } else {
      /** @type {HTMLLIElement} */ (navLinkButton).style.animation =
        `animate 0.8s ease forwards ${index / DELAYDIVIDER}s`;
    }
  });
}

/**
 * This function handles the dropdown menu button clicked by the user.
 * @param {HTMLElement | null} nav - The navigation element to be handled.
 * @returns {void}
 */
function dropDownComponent(nav) {
  console.log(nav);
  const menu = /**@type {HTMLUListElement}*/ (
    nav?.querySelector('.nav-menu__links')
  );
  const btnControls = /**@type {NodeListOf<HTMLButtonElement>} */ (
    document.querySelectorAll('.nav-menu__links button')
  );
  const submenus = /** @type {HTMLUListElement[]} */ ([]);
  const useArrowKeys = /**@type {Boolean} */ (true);
  let openIndex = /**@type {number|null} */ (null);

  btnControls.forEach(function (btnControl) {
    // We want to be sure that we are clicking on the button element
    if (btnControl.hasAttribute('aria-controls')) {
      const submenu = btnControl.parentNode?.querySelector('ul');
      if (!submenu) return;
      // save the reference that is controlled by the menu
      submenus.push(submenu);

      // Attach the event listeners

      // When the user clicks the menu button, so we can open the submenu.
      btnControl.addEventListener(
        'click',
        handleBtnDropdown.bind(null, btnControls, submenus)
      );

      // When the button is expanded we want to be able to use arrow keys, Home, and End Keys to navigate into the submenu.
      btnControl.addEventListener(
        'keydown',
        handleBtnKeyDown.bind(null, btnControls, submenus, useArrowKeys)
      );
    }
  });
}
/**
 * This function handles the functionality of the arrow keys, Home, and End Keys when the user navigates into the submenu.
 * @param {NodeList} btnControls - The buttons
 * @param {HTMLUListElement[]} submenus - The submenus
 * @param {boolean} useArrowKeys - The current state of the arrows keys
 * @param {KeyboardEvent} evtObj - The event object
 * @returns {void}
 */
function handleBtnKeyDown(btnControls, submenus, useArrowKeys, evtObj) {
  // We need to get the element that currently has focus when the user keys down or presses any key on the button element.
  const activeElement = document.activeElement;
  const btn = /**@type {HTMLButtonElement}*/ (evtObj.currentTarget);
  const btnIndex = Array.from(btnControls).indexOf(btn);
  if (activeElement) {
    // We want to get the index of the active element that current has focus.
    const activeElementIndex = Array.from(btnControls).indexOf(activeElement);
    if (evtObj.key === 'Escape') {
      toggleBtnExpanded(btnIndex, false, submenus, btnControls);
    }

    // We use the arrow keys to move focus into the first anchor element of the submenu as the active element changes
    else if (
      useArrowKeys &&
      btnIndex === activeElementIndex &&
      evtObj.key === 'ArrowDown'
    ) {
      evtObj.preventDefault();
      submenus[btnIndex].querySelector('a')?.focus();
    }

    // Using the condition of the 'useArrowkeys' we want to navigate between the top level buttons, if set
    else if (useArrowKeys) {
      controlFocusByKey(evtObj, btnControls, activeElementIndex);
    }
  }
}

/**
 * This function controls the focus based on the keys pressed by the user Arrow Up/Down, Home, End, and Arrow Left/Right
 * @param {KeyboardEvent} evtObj - The event object
 * @param {NodeList} btnControls - The buttons
 * @param {number} activeElementIndex - The index
 * @returns {void}
 */
function controlFocusByKey(evtObj, btnControls, activeElementIndex) {
  const ONE = 1;
  const ZERO = 0;
  switch (evtObj.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      evtObj.preventDefault();
      if (activeElementIndex > -ONE) {
        const prevIndex = Math.max(ZERO, activeElementIndex - ONE);
        /**@type {HTMLButtonElement}*/ (btnControls[prevIndex]).focus();
      }
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      evtObj.preventDefault();
      if (activeElementIndex > -ONE) {
        const nextIndex = Math.min(
          btnControls.length - ONE,
          activeElementIndex + ONE
        );
        /**@type {HTMLButtonElement}*/ (btnControls[nextIndex]).focus();
      }
      break;
    case 'Home':
      /**@type {HTMLButtonElement}*/ (btnControls[ZERO]).focus();
      break;
    case 'End':
      /**@type {HTMLButtonElement}*/ (
        btnControls[btnControls.length - ONE]
      ).focus();
      break;
    default:
  }
}

/**
 * This function handles the button which triggers the dropdown menu when clicked on.
 * @param {NodeList} btnControls - The buttons
 * @param {HTMLUListElement[]} submenus - The submenus
 * @param {Event} evtObj - The event object.
 * @returns {void}
 */
function handleBtnDropdown(btnControls, submenus, evtObj) {
  const btn = /**@type {HTMLButtonElement}*/ (evtObj.target);
  const btnIndex = Array.from(btnControls).indexOf(btn);
  const isBtnExpanded = btn?.getAttribute('aria-expanded') === 'true';
  toggleBtnExpanded(btnIndex, !isBtnExpanded, submenus, btnControls);
}

/**
 * This function is called when the user clicks the button and we want to toggle opening and closing the dropdown menu.
 * @param {number} index - The index of the button that is clicked.
 * @param {boolean} isExpanded -- The value of isExpanded that lets us know the state of the dropdown menu when clicked.
 * @param {HTMLUListElement[]} submenus - The list of submenus.
 * @param {NodeList} btnControls - The buttons
 * @returns {void}
 */
function toggleBtnExpanded(index, isExpanded, submenus, btnControls) {
  if (btnControls[index]) {
    /**@type {HTMLButtonElement}*/ (btnControls[index]).setAttribute(
      'aria-expanded',
      `${isExpanded}`
    );
    toggleMenu(submenus[index], isExpanded);
  }
}

/**
 * The function to toggle displaying and hiding the menu.
 * @param {HTMLUListElement} submenu -The navigation submenu
 * @param {boolean} display - The state that indicates whether the submenu is expanded or not.
 */
function toggleMenu(submenu, display) {
  if (submenu) {
    console.log(display);
    submenu.style.display = display ? 'block' : 'none';
  }
}

App();

// openIndex = isExpanded ? index : null