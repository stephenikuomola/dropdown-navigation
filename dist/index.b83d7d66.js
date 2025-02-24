// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lFQN6":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "420a6326b83d7d66";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6GCUi":[function(require,module,exports,__globalThis) {
// Create an App function
/**
 * This function is responsible for the initialization of the application.
 * It will be called when the window has finished loading.
 * @returns {void}
 */ function App() {
    const mediaQuery = /**@type {string} */ 'only screen and (max-width:767px)';
    const navElement = /**@type {HTMLElement | null} */ document.querySelector('.nav-container');
    const dropShadow = /**@type {HTMLElement | null} */ document.querySelector('.dropshadow-overlay');
    console.log(dropShadow);
    handleMediaQuery(mediaQuery);
    navComponent(navElement);
    dropDownComponent(navElement);
    dropShadowComponent(navElement, dropShadow);
}
/**
 * This function is responsible for handling the media query.
 * @param {string} query - The media query to be handled.
 * @returns {void}
 */ function handleMediaQuery(query) {
    const isMobileDevice = /** @type {boolean}*/ window.matchMedia(query).matches;
    const navMenu = /**@type {HTMLDivElement | null} */ document.querySelector('.nav-menu');
    navMenu?.setAttribute('aria-hidden', `${isMobileDevice ? 'true' : 'false'}`);
}
/**
 * This navigation component is responsible for handling the navigation element.
 * @param {HTMLElement | null} nav - The navigation element to be handled.
 * @returns {void}
 */ function navComponent(nav) {
    nav?.addEventListener('click', handleMobileNavMenu.bind(null, nav));
}
/**
 * This function is responsible for handling the functionality mobile navigation
 * @param {HTMLElement | null} nav - The navigation element to be
 * @param {Event} evtObj - The event object.
 * @returns {void}
 */ function handleMobileNavMenu(nav, evtObj) {
    // Get the nav-menu element
    const navMenu = nav?.querySelector('.nav-menu');
    // Get the event target
    const eventTarget = /**@type {HTMLElement} */ evtObj.target;
    if (!(eventTarget instanceof HTMLElement)) return;
    // Get the mobile navigation element by search up the DOM tree
    const mobileNavBtn = /**@type {HTMLButtonElement | null}*/ eventTarget.closest('.menuBtn');
    if (!mobileNavBtn) return;
    // Get the dropshadow-overlayElement
    const dropShadowOverlay = /**@type {HTMLDivElement | null}*/ document.querySelector('.dropshadow-overlay');
    // On mobile devices the value of aria-expanded is check and we need to manipulate it dynamically depending on the state.
    const closedMenu = /**@type {Boolean} */ mobileNavBtn.getAttribute('aria-expanded') === 'false' || false;
    // Using the closedMenu variable we want to remove the aria-expanded attribute on the clicked mobileNavBtn
    mobileNavBtn.removeAttribute('aria-expanded');
    // Remove the active class from the mobileNavBtn
    mobileNavBtn.classList.remove('active');
    // Using the closedMenu variable we want to dynamically alter the the aria-hidden attribute of the navMenu element
    navMenu?.setAttribute('aria-hidden', `${!closedMenu}`);
    // We need to check if the value of the aria-expanded attribute of the mobileNavBtn element is true and if the next sibling element of the mobileNavBtn element is a button element
    if (closedMenu && mobileNavBtn.nextElementSibling instanceof HTMLButtonElement) {
        // Using the closedMenu variable we want to dynamically alter the aria-expanded attribute of the sibling element of the mobileNavBtn element which is also a button element
        mobileNavBtn?.nextElementSibling?.setAttribute('aria-expanded', `${closedMenu}`);
        mobileNavBtn?.nextElementSibling?.classList.add('active');
        navMenu?.classList.add('active');
        dropShadowOverlay?.classList.add('active');
    } else {
        mobileNavBtn?.previousElementSibling?.setAttribute('aria-expanded', `${closedMenu}`);
        mobileNavBtn?.previousElementSibling?.classList.add('active');
        navMenu?.classList.remove('active');
        dropShadowOverlay?.classList.remove('active');
    }
    // Call the animate function to animate the navigation links and account buttons
    animateNavMenu();
}
/**
 * This function animates the navigation links and the account buttons
 */ function animateNavMenu() {
    const navLinksButtons = /**@type {NodeListOf<HTMLLIElement>}*/ document.querySelectorAll('.nav-menu__container > ul > li');
    const DELAYDIVIDER = 25;
    navLinksButtons.forEach(function(navLinkButton, index) {
        // When the user clicks the first time there is no animation
        // When they click again there is an existing animation
        const fillMode = /** @type {HTMLLIElement} */ navLinkButton.style.animationFillMode;
        if (fillMode.includes('forwards')) /**@type {HTMLLIElement} */ navLinkButton.style.animation = ``;
        else /** @type {HTMLLIElement} */ navLinkButton.style.animation = `animate 0.8s ease forwards ${index / DELAYDIVIDER}s`;
    });
}
/**
 * This function handles the dropdown menu button clicked by the user.
 * @param {HTMLElement | null} nav - The navigation element to be handled.
 * @returns {void}
 */ function dropDownComponent(nav) {
    const menu = /**@type {HTMLUListElement}*/ nav?.querySelector('.nav-menu__links');
    const btnControls = /**@type {NodeListOf<HTMLButtonElement>} */ document.querySelectorAll('.nav-menu__links button');
    const submenus = /** @type {HTMLUListElement[]} */ [];
    const useArrowKeys = /**@type {Boolean} */ true;
    btnControls.forEach(function(btnControl) {
        // We want to be sure that we are clicking on the button element
        if (btnControl.hasAttribute('aria-controls')) {
            const submenu = btnControl.parentNode?.querySelector('ul');
            if (!submenu) return;
            // save the reference that is controlled by the menu
            submenus.push(submenu);
            // Attach the event listeners
            // When the user clicks the menu button, so we can open the submenu.
            btnControl.addEventListener('click', handleBtnDropdown.bind(null, btnControls, submenus));
            // When the button is expanded we want to be able to use arrow keys to navigate into the submenu.
            btnControl.addEventListener('keydown', handleBtnKeyDown.bind(null, btnControls, submenus, useArrowKeys));
            // When we are in the submenu we want to navigate between elements in the submenus
            submenu.addEventListener('keydown', handleSubMenuKeyDown.bind(null, btnControls, submenus, useArrowKeys));
        }
    });
    menu.addEventListener('focusout', onFocusOut.bind(null, btnControls, submenus));
}
/**
 * This function handles the functionality of the arrow keys when the user navigates inside the submenu
 * @param {NodeList} btnControls - The buttons
 *  @param {HTMLUListElement[]} submenus - The submenus
 * @param {boolean} useArrowKeys - The current state of the arrows keys
 * @param {KeyboardEvent} evtObj - The keyboard event object
 * @returns {void}
 */ function handleSubMenuKeyDown(btnControls, submenus, useArrowKeys, evtObj) {
    // We want to get the element that currently has focus when the event is triggered in the submenu
    const activeElement = document.activeElement;
    // Using the eventListener attached to the submenu we can navigate to its sibling and obtain the button.
    const btn = /**@type {HTMLButtonElement }*/ evtObj.currentTarget.previousElementSibling;
    // We want be sure that the button element is an instance of HTMLButtonElement
    if (!(btn instanceof HTMLButtonElement)) return;
    // We need the index of the button of its submenu
    const btnIndex = Array.from(btnControls).indexOf(btn);
    // We can get all the links in the submenu by using the index of the button element to get the submenu we are on then find all the links in that submenu
    const menuLinks = Array.from(submenus[btnIndex].querySelectorAll('a'));
    // Check if the active element exists
    if (activeElement) {
        // If the active element is an instance of the anchor element which is what we want we can proceed and if not return and stop the execution of the function.
        if (!(activeElement instanceof HTMLAnchorElement)) return;
        // So from all the anchor elements in the array menuLinks we want to know the active anchor element's index.
        const activeElementIndex = menuLinks.indexOf(activeElement);
        // We the user presses the escape key or button
        if (evtObj.key === 'Escape') {
            // Change the nodeList of an button to an array of button elements.
            const btnArray = Array.from(btnControls);
            // Check if the element in the button array exist
            if (btnArray[btnIndex]) // Move the focus back to the button element
            /**@type {HTMLButtonElement}*/ btnArray[btnIndex].focus();
            // Then we can close the submenu element
            toggleBtnExpanded(btnIndex, false, submenus, btnControls);
        } else if (useArrowKeys) controlFocusByKey(evtObj, menuLinks, activeElementIndex);
    }
}
/**
 * This function handles the functionality of the arrow keys, Home, and End Keys when the user navigates into the submenu.
 * @param {NodeList} btnControls - The buttons
 * @param {HTMLUListElement[]} submenus - The submenus
 * @param {boolean} useArrowKeys - The current state of the arrows keys
 * @param {KeyboardEvent} evtObj - The event object
 * @returns {void}
 */ function handleBtnKeyDown(btnControls, submenus, useArrowKeys, evtObj) {
    // We need to get the element that currently has focus when the user keys down or presses any key on the button element.
    const activeElement = document.activeElement;
    // The currentTarget gives us the button element since that is the element that the event listener is attached to.
    const btn = /**@type {HTMLButtonElement}*/ evtObj.currentTarget;
    // We can get the index of the Array of buttons
    const btnIndex = Array.from(btnControls).indexOf(btn);
    if (activeElement) {
        // We want to get the index of the active element that current has focus which is the button element.
        const activeElementIndex = Array.from(btnControls).indexOf(activeElement);
        if (evtObj.key === 'Escape') toggleBtnExpanded(btnIndex, false, submenus, btnControls);
        else if (useArrowKeys && btnIndex === activeElementIndex && evtObj.key === 'ArrowDown') submenus[btnIndex].querySelector('a')?.focus();
        else if (useArrowKeys) controlFocusByKey(evtObj, btnControls, activeElementIndex);
    }
}
/**
 * This function controls the focus based on the keys pressed by the user Arrow Up/Down, Home, End, and Arrow Left/Right
 * @param {KeyboardEvent} evtObj - The event object
 * @param {NodeList | HTMLElement[]} collection - The buttons
 * @param {number} activeElementIndex - The index
 * @returns {void}
 */ function controlFocusByKey(evtObj, collection, activeElementIndex) {
    const ONE = 1;
    const ZERO = 0;
    switch(evtObj.key){
        case 'ArrowUp':
        case 'ArrowLeft':
            evtObj.preventDefault();
            if (activeElementIndex > -ONE) {
                const prevIndex = Math.max(ZERO, activeElementIndex - ONE);
                /**@type {HTMLButtonElement}*/ collection[prevIndex].focus();
            }
            break;
        case 'ArrowDown':
        case 'ArrowRight':
            evtObj.preventDefault();
            if (activeElementIndex > -ONE) {
                const nextIndex = Math.min(collection.length - ONE, activeElementIndex + ONE);
                /**@type {HTMLButtonElement}*/ collection[nextIndex].focus();
            }
            break;
        case 'Home':
            /**@type {HTMLButtonElement}*/ collection[ZERO].focus();
            break;
        case 'End':
            /**@type {HTMLButtonElement}*/ collection[collection.length - ONE].focus();
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
 */ function handleBtnDropdown(btnControls, submenus, evtObj) {
    // The target gives us the button clicked
    const btn = /**@type {HTMLButtonElement}*/ evtObj.target;
    // We get the index of the button element from the ModeList of buttons
    const btnIndex = Array.from(btnControls).indexOf(btn);
    // We want to know if the button is currently expanded as at when clicked
    const isBtnExpanded = btn?.getAttribute('aria-expanded') === 'true';
    // We simply toggle the button and show the submenu
    toggleBtnExpanded(btnIndex, !isBtnExpanded, submenus, btnControls);
}
/**
 * This function is called when the user clicks the button and we want to toggle opening and closing the dropdown menu.
 * @param {number} index - The index of the button that is clicked.
 * @param {boolean} isExpanded -- The value of isExpanded that lets us know the state of the dropdown menu when clicked.
 * @param {HTMLUListElement[]} submenus - The list of submenus.
 * @param {NodeList} btnControls - The buttons
 * @returns {void}
 */ function toggleBtnExpanded(index, isExpanded, submenus, btnControls) {
    if (btnControls[index]) {
        /**@type {HTMLButtonElement}*/ btnControls[index].setAttribute('aria-expanded', `${isExpanded}`);
        toggleMenu(submenus[index], isExpanded);
    }
}
/**
 * The function to toggle displaying and hiding the menu.
 * @param {HTMLUListElement} submenu -The navigation submenu
 * @param {boolean} display - The state that indicates whether the submenu is expanded or not.
 */ function toggleMenu(submenu, display) {
    if (submenu) {
        console.log(display);
        submenu.style.display = display ? 'block' : 'none';
    }
}
/**
 * The function handles when the menu no longer has focus.
 * @param {NodeList} btnControls - The buttons
 * @param {HTMLUListElement[]} submenus - The submenus
 * @param {FocusEvent} evtObj - The focus event
 * @returns {void}
 */ function onFocusOut(btnControls, submenus, evtObj) {
    // When any element in the menu has just gained focus we want to know that element.
    const hasGainedFocus = /**@type {HTMLElement}*/ evtObj.relatedTarget;
    // We want to know if the menu element contains any element that has just gained focus.
    const menuContainsFocus = /**@type {HTMLUListElement}*/ evtObj.currentTarget.contains(hasGainedFocus);
    if (!menuContainsFocus) // Loop over the buttons close the submenu
    btnControls.forEach(function(__, index, btnControls) {
        toggleBtnExpanded(index, false, submenus, btnControls);
    });
}
/**
 * This function will close the mobile nav menu when the user click on the dropshadow
 * @param {HTMLElement | null} nav - The nav element
 * @param {HTMLElement | null} dropshadow - The dropshadow element
 * @returns {void}
 */ function dropShadowComponent(nav, dropshadow) {
    dropshadow?.addEventListener('click', function() {
        // Get the navigation menu element
        const navMenu = nav?.querySelector('.nav-menu');
        // We need the button element that is currently visible on the page.
        const mobileNavBtn = nav?.querySelector('button[class~="active"]');
        // On mobile devices the value of aria-expanded is checked and we need to manipulate it dynamically depending on the state.
        const openedMenu = /**@type {Boolean} */ mobileNavBtn?.getAttribute('aria-expanded') === 'false' || false;
        mobileNavBtn?.setAttribute('aria-expanded', `${!openedMenu}`);
        mobileNavBtn?.classList.remove('active');
        mobileNavBtn?.previousElementSibling?.setAttribute('aria-expanded', `${openedMenu}`);
        console.log(mobileNavBtn?.previousElementSibling);
        mobileNavBtn?.previousElementSibling?.classList.add('active');
        dropshadow.classList.remove('active');
        navMenu?.classList.remove('active');
    });
}
App();

},{}]},["lFQN6","6GCUi"], "6GCUi", "parcelRequire94c2")

//# sourceMappingURL=index.b83d7d66.js.map
