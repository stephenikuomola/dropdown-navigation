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
})({"gKzwS":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ca1ab0b180f74e06";
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

},{}],"78uP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "--animation-fade-in": "fade-in .5s var(--ease-3)",
    "--animation-fade-in-@": "\n@keyframes fade-in {\n  to { opacity: 1 }\n}",
    "--animation-fade-in-bloom": "fade-in-bloom 2s var(--ease-3)",
    "--animation-fade-in-bloom-@": "\n@keyframes fade-in-bloom {\n  0% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(2) blur(10px) }\n100% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "--animation-fade-in-bloom-@media:dark": "\n@keyframes fade-in-bloom {\n  0% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(0.5) blur(10px) }\n100% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "--animation-fade-out": "fade-out .5s var(--ease-3)",
    "--animation-fade-out-@": "\n@keyframes fade-out {\n  to { opacity: 0 }\n}",
    "--animation-fade-out-bloom": "fade-out-bloom 2s var(--ease-3)",
    "--animation-fade-out-bloom-@": "\n@keyframes fade-out-bloom {\n100% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(2) blur(10px) }\n  0% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "--animation-fade-out-bloom-@media:dark": "\n@keyframes fade-out-bloom {\n100% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(0.5) blur(10px) }\n  0% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "--animation-scale-up": "scale-up .5s var(--ease-3)",
    "--animation-scale-up-@": "\n@keyframes scale-up {\n  to { transform: scale(1.25) }\n}",
    "--animation-scale-down": "scale-down .5s var(--ease-3)",
    "--animation-scale-down-@": "\n@keyframes scale-down {\n  to { transform: scale(.75) }\n}",
    "--animation-slide-out-up": "slide-out-up .5s var(--ease-3)",
    "--animation-slide-out-up-@": "\n@keyframes slide-out-up {\n  to { transform: translateY(-100%) }\n}",
    "--animation-slide-out-down": "slide-out-down .5s var(--ease-3)",
    "--animation-slide-out-down-@": "\n@keyframes slide-out-down {\n  to { transform: translateY(100%) }\n}",
    "--animation-slide-out-right": "slide-out-right .5s var(--ease-3)",
    "--animation-slide-out-right-@": "\n@keyframes slide-out-right {\n  to { transform: translateX(100%) }\n}",
    "--animation-slide-out-left": "slide-out-left .5s var(--ease-3)",
    "--animation-slide-out-left-@": "\n@keyframes slide-out-left {\n  to { transform: translateX(-100%) }\n}",
    "--animation-slide-in-up": "slide-in-up .5s var(--ease-3)",
    "--animation-slide-in-up-@": "\n@keyframes slide-in-up {\n  from { transform: translateY(100%) }\n}",
    "--animation-slide-in-down": "slide-in-down .5s var(--ease-3)",
    "--animation-slide-in-down-@": "\n@keyframes slide-in-down {\n  from { transform: translateY(-100%) }\n}",
    "--animation-slide-in-right": "slide-in-right .5s var(--ease-3)",
    "--animation-slide-in-right-@": "\n@keyframes slide-in-right {\n  from { transform: translateX(-100%) }\n}",
    "--animation-slide-in-left": "slide-in-left .5s var(--ease-3)",
    "--animation-slide-in-left-@": "\n@keyframes slide-in-left {\n  from { transform: translateX(100%) }\n}",
    "--animation-shake-x": "shake-x .75s var(--ease-out-5)",
    "--animation-shake-x-@": "\n@keyframes shake-x {\n  0%, 100% { transform: translateX(0%) }\n  20% { transform: translateX(-5%) }\n  40% { transform: translateX(5%) }\n  60% { transform: translateX(-5%) }\n  80% { transform: translateX(5%) }\n}",
    "--animation-shake-y": "shake-y .75s var(--ease-out-5)",
    "--animation-shake-y-@": "\n@keyframes shake-y {\n  0%, 100% { transform: translateY(0%) }\n  20% { transform: translateY(-5%) }\n  40% { transform: translateY(5%) }\n  60% { transform: translateY(-5%) }\n  80% { transform: translateY(5%) }\n}",
    "--animation-shake-z": "shake-z 1s var(--ease-in-out-3)",
    "--animation-shake-z-@": "\n@keyframes shake-z {\n  0%, 100% { transform: rotate(0deg) }\n  20% { transform: rotate(-2deg) }\n  40% { transform: rotate(2deg) }\n  60% { transform: rotate(-2deg) }\n  80% { transform: rotate(2deg) }\n}",
    "--animation-spin": "spin 2s linear infinite",
    "--animation-spin-@": "\n@keyframes spin {\n  to { transform: rotate(1turn) }\n}",
    "--animation-ping": "ping 5s var(--ease-out-3) infinite",
    "--animation-ping-@": "\n@keyframes ping {\n  90%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}",
    "--animation-blink": "blink 1s var(--ease-out-3) infinite",
    "--animation-blink-@": "\n@keyframes blink {\n  0%, 100% {\n    opacity: 1\n  }\n  50% {\n    opacity: .5\n  }\n}",
    "--animation-float": "float 3s var(--ease-in-out-3) infinite",
    "--animation-float-@": "\n@keyframes float {\n  50% { transform: translateY(-25%) }\n}",
    "--animation-bounce": "bounce 2s var(--ease-squish-2) infinite",
    "--animation-bounce-@": "\n@keyframes bounce {\n  25% { transform: translateY(-20%) }\n  40% { transform: translateY(-3%) }\n  0%, 60%, 100% { transform: translateY(0) }\n}",
    "--animation-pulse": "pulse 2s var(--ease-out-3) infinite",
    "--animation-pulse-@": "\n@keyframes pulse {\n  50% { transform: scale(.9,.9) }\n}",
    "--size-000": "-.5rem",
    "--size-00": "-.25rem",
    "--size-1": ".25rem",
    "--size-2": ".5rem",
    "--size-3": "1rem",
    "--size-4": "1.25rem",
    "--size-5": "1.5rem",
    "--size-6": "1.75rem",
    "--size-7": "2rem",
    "--size-8": "3rem",
    "--size-9": "4rem",
    "--size-10": "5rem",
    "--size-11": "7.5rem",
    "--size-12": "10rem",
    "--size-13": "15rem",
    "--size-14": "20rem",
    "--size-15": "30rem",
    "--size-px-000": "-8px",
    "--size-px-00": "-4px",
    "--size-px-1": "4px",
    "--size-px-2": "8px",
    "--size-px-3": "16px",
    "--size-px-4": "20px",
    "--size-px-5": "24px",
    "--size-px-6": "28px",
    "--size-px-7": "32px",
    "--size-px-8": "48px",
    "--size-px-9": "64px",
    "--size-px-10": "80px",
    "--size-px-11": "120px",
    "--size-px-12": "160px",
    "--size-px-13": "240px",
    "--size-px-14": "320px",
    "--size-px-15": "480px",
    "--size-fluid-1": "clamp(.5rem, 1vw, 1rem)",
    "--size-fluid-2": "clamp(1rem, 2vw, 1.5rem)",
    "--size-fluid-3": "clamp(1.5rem, 3vw, 2rem)",
    "--size-fluid-4": "clamp(2rem, 4vw, 3rem)",
    "--size-fluid-5": "clamp(4rem, 5vw, 5rem)",
    "--size-fluid-6": "clamp(5rem, 7vw, 7.5rem)",
    "--size-fluid-7": "clamp(7.5rem, 10vw, 10rem)",
    "--size-fluid-8": "clamp(10rem, 20vw, 15rem)",
    "--size-fluid-9": "clamp(15rem, 30vw, 20rem)",
    "--size-fluid-10": "clamp(20rem, 40vw, 30rem)",
    "--size-content-1": "20ch",
    "--size-content-2": "45ch",
    "--size-content-3": "60ch",
    "--size-header-1": "20ch",
    "--size-header-2": "25ch",
    "--size-header-3": "35ch",
    "--size-xxs": "240px",
    "--size-xs": "360px",
    "--size-sm": "480px",
    "--size-md": "768px",
    "--size-lg": "1024px",
    "--size-xl": "1440px",
    "--size-xxl": "1920px",
    "--size-relative-000": "-.5ch",
    "--size-relative-00": "-.25ch",
    "--size-relative-1": ".25ch",
    "--size-relative-2": ".5ch",
    "--size-relative-3": "1ch",
    "--size-relative-4": "1.25ch",
    "--size-relative-5": "1.5ch",
    "--size-relative-6": "1.75ch",
    "--size-relative-7": "2ch",
    "--size-relative-8": "3ch",
    "--size-relative-9": "4ch",
    "--size-relative-10": "5ch",
    "--size-relative-11": "7.5ch",
    "--size-relative-12": "10ch",
    "--size-relative-13": "15ch",
    "--size-relative-14": "20ch",
    "--size-relative-15": "30ch",
    "--gray-0": "#f8f9fa",
    "--gray-1": "#f1f3f5",
    "--gray-2": "#e9ecef",
    "--gray-3": "#dee2e6",
    "--gray-4": "#ced4da",
    "--gray-5": "#adb5bd",
    "--gray-6": "#868e96",
    "--gray-7": "#495057",
    "--gray-8": "#343a40",
    "--gray-9": "#212529",
    "--gray-10": "#16191d",
    "--gray-11": "#0d0f12",
    "--gray-12": "#030507",
    "--stone-0": "#f8fafb",
    "--stone-1": "#f2f4f6",
    "--stone-2": "#ebedef",
    "--stone-3": "#e0e4e5",
    "--stone-4": "#d1d6d8",
    "--stone-5": "#b1b6b9",
    "--stone-6": "#979b9d",
    "--stone-7": "#7e8282",
    "--stone-8": "#666968",
    "--stone-9": "#50514f",
    "--stone-10": "#3a3a37",
    "--stone-11": "#252521",
    "--stone-12": "#121210",
    "--red-0": "#fff5f5",
    "--red-1": "#ffe3e3",
    "--red-2": "#ffc9c9",
    "--red-3": "#ffa8a8",
    "--red-4": "#ff8787",
    "--red-5": "#ff6b6b",
    "--red-6": "#fa5252",
    "--red-7": "#f03e3e",
    "--red-8": "#e03131",
    "--red-9": "#c92a2a",
    "--red-10": "#b02525",
    "--red-11": "#962020",
    "--red-12": "#7d1a1a",
    "--pink-0": "#fff0f6",
    "--pink-1": "#ffdeeb",
    "--pink-2": "#fcc2d7",
    "--pink-3": "#faa2c1",
    "--pink-4": "#f783ac",
    "--pink-5": "#f06595",
    "--pink-6": "#e64980",
    "--pink-7": "#d6336c",
    "--pink-8": "#c2255c",
    "--pink-9": "#a61e4d",
    "--pink-10": "#8c1941",
    "--pink-11": "#731536",
    "--pink-12": "#59102a",
    "--purple-0": "#f8f0fc",
    "--purple-1": "#f3d9fa",
    "--purple-2": "#eebefa",
    "--purple-3": "#e599f7",
    "--purple-4": "#da77f2",
    "--purple-5": "#cc5de8",
    "--purple-6": "#be4bdb",
    "--purple-7": "#ae3ec9",
    "--purple-8": "#9c36b5",
    "--purple-9": "#862e9c",
    "--purple-10": "#702682",
    "--purple-11": "#5a1e69",
    "--purple-12": "#44174f",
    "--violet-0": "#f3f0ff",
    "--violet-1": "#e5dbff",
    "--violet-2": "#d0bfff",
    "--violet-3": "#b197fc",
    "--violet-4": "#9775fa",
    "--violet-5": "#845ef7",
    "--violet-6": "#7950f2",
    "--violet-7": "#7048e8",
    "--violet-8": "#6741d9",
    "--violet-9": "#5f3dc4",
    "--violet-10": "#5235ab",
    "--violet-11": "#462d91",
    "--violet-12": "#3a2578",
    "--indigo-0": "#edf2ff",
    "--indigo-1": "#dbe4ff",
    "--indigo-2": "#bac8ff",
    "--indigo-3": "#91a7ff",
    "--indigo-4": "#748ffc",
    "--indigo-5": "#5c7cfa",
    "--indigo-6": "#4c6ef5",
    "--indigo-7": "#4263eb",
    "--indigo-8": "#3b5bdb",
    "--indigo-9": "#364fc7",
    "--indigo-10": "#2f44ad",
    "--indigo-11": "#283a94",
    "--indigo-12": "#21307a",
    "--blue-0": "#e7f5ff",
    "--blue-1": "#d0ebff",
    "--blue-2": "#a5d8ff",
    "--blue-3": "#74c0fc",
    "--blue-4": "#4dabf7",
    "--blue-5": "#339af0",
    "--blue-6": "#228be6",
    "--blue-7": "#1c7ed6",
    "--blue-8": "#1971c2",
    "--blue-9": "#1864ab",
    "--blue-10": "#145591",
    "--blue-11": "#114678",
    "--blue-12": "#0d375e",
    "--cyan-0": "#e3fafc",
    "--cyan-1": "#c5f6fa",
    "--cyan-2": "#99e9f2",
    "--cyan-3": "#66d9e8",
    "--cyan-4": "#3bc9db",
    "--cyan-5": "#22b8cf",
    "--cyan-6": "#15aabf",
    "--cyan-7": "#1098ad",
    "--cyan-8": "#0c8599",
    "--cyan-9": "#0b7285",
    "--cyan-10": "#095c6b",
    "--cyan-11": "#074652",
    "--cyan-12": "#053038",
    "--teal-0": "#e6fcf5",
    "--teal-1": "#c3fae8",
    "--teal-2": "#96f2d7",
    "--teal-3": "#63e6be",
    "--teal-4": "#38d9a9",
    "--teal-5": "#20c997",
    "--teal-6": "#12b886",
    "--teal-7": "#0ca678",
    "--teal-8": "#099268",
    "--teal-9": "#087f5b",
    "--teal-10": "#066649",
    "--teal-11": "#054d37",
    "--teal-12": "#033325",
    "--green-0": "#ebfbee",
    "--green-1": "#d3f9d8",
    "--green-2": "#b2f2bb",
    "--green-3": "#8ce99a",
    "--green-4": "#69db7c",
    "--green-5": "#51cf66",
    "--green-6": "#40c057",
    "--green-7": "#37b24d",
    "--green-8": "#2f9e44",
    "--green-9": "#2b8a3e",
    "--green-10": "#237032",
    "--green-11": "#1b5727",
    "--green-12": "#133d1b",
    "--lime-0": "#f4fce3",
    "--lime-1": "#e9fac8",
    "--lime-2": "#d8f5a2",
    "--lime-3": "#c0eb75",
    "--lime-4": "#a9e34b",
    "--lime-5": "#94d82d",
    "--lime-6": "#82c91e",
    "--lime-7": "#74b816",
    "--lime-8": "#66a80f",
    "--lime-9": "#5c940d",
    "--lime-10": "#4c7a0b",
    "--lime-11": "#3c6109",
    "--lime-12": "#2c4706",
    "--yellow-0": "#fff9db",
    "--yellow-1": "#fff3bf",
    "--yellow-2": "#ffec99",
    "--yellow-3": "#ffe066",
    "--yellow-4": "#ffd43b",
    "--yellow-5": "#fcc419",
    "--yellow-6": "#fab005",
    "--yellow-7": "#f59f00",
    "--yellow-8": "#f08c00",
    "--yellow-9": "#e67700",
    "--yellow-10": "#b35c00",
    "--yellow-11": "#804200",
    "--yellow-12": "#663500",
    "--orange-0": "#fff4e6",
    "--orange-1": "#ffe8cc",
    "--orange-2": "#ffd8a8",
    "--orange-3": "#ffc078",
    "--orange-4": "#ffa94d",
    "--orange-5": "#ff922b",
    "--orange-6": "#fd7e14",
    "--orange-7": "#f76707",
    "--orange-8": "#e8590c",
    "--orange-9": "#d9480f",
    "--orange-10": "#bf400d",
    "--orange-11": "#99330b",
    "--orange-12": "#802b09",
    "--choco-0": "#fff8dc",
    "--choco-1": "#fce1bc",
    "--choco-2": "#f7ca9e",
    "--choco-3": "#f1b280",
    "--choco-4": "#e99b62",
    "--choco-5": "#df8545",
    "--choco-6": "#d46e25",
    "--choco-7": "#bd5f1b",
    "--choco-8": "#a45117",
    "--choco-9": "#8a4513",
    "--choco-10": "#703a13",
    "--choco-11": "#572f12",
    "--choco-12": "#3d210d",
    "--brown-0": "#faf4eb",
    "--brown-1": "#ede0d1",
    "--brown-2": "#e0cab7",
    "--brown-3": "#d3b79e",
    "--brown-4": "#c5a285",
    "--brown-5": "#b78f6d",
    "--brown-6": "#a87c56",
    "--brown-7": "#956b47",
    "--brown-8": "#825b3a",
    "--brown-9": "#6f4b2d",
    "--brown-10": "#5e3a21",
    "--brown-11": "#4e2b15",
    "--brown-12": "#422412",
    "--sand-0": "#f8fafb",
    "--sand-1": "#e6e4dc",
    "--sand-2": "#d5cfbd",
    "--sand-3": "#c2b9a0",
    "--sand-4": "#aea58c",
    "--sand-5": "#9a9178",
    "--sand-6": "#867c65",
    "--sand-7": "#736a53",
    "--sand-8": "#5f5746",
    "--sand-9": "#4b4639",
    "--sand-10": "#38352d",
    "--sand-11": "#252521",
    "--sand-12": "#121210",
    "--camo-0": "#f9fbe7",
    "--camo-1": "#e8ed9c",
    "--camo-2": "#d2df4e",
    "--camo-3": "#c2ce34",
    "--camo-4": "#b5bb2e",
    "--camo-5": "#a7a827",
    "--camo-6": "#999621",
    "--camo-7": "#8c851c",
    "--camo-8": "#7e7416",
    "--camo-9": "#6d6414",
    "--camo-10": "#5d5411",
    "--camo-11": "#4d460e",
    "--camo-12": "#36300a",
    "--jungle-0": "#ecfeb0",
    "--jungle-1": "#def39a",
    "--jungle-2": "#d0e884",
    "--jungle-3": "#c2dd6e",
    "--jungle-4": "#b5d15b",
    "--jungle-5": "#a8c648",
    "--jungle-6": "#9bbb36",
    "--jungle-7": "#8fb024",
    "--jungle-8": "#84a513",
    "--jungle-9": "#7a9908",
    "--jungle-10": "#658006",
    "--jungle-11": "#516605",
    "--jungle-12": "#3d4d04",
    "--gray-0-hsl": "210 17% 98%",
    "--gray-1-hsl": "210 17% 95%",
    "--gray-2-hsl": "210 16% 93%",
    "--gray-3-hsl": "210 14% 89%",
    "--gray-4-hsl": "210 14% 83%",
    "--gray-5-hsl": "210 11% 71%",
    "--gray-6-hsl": "210 7% 56%",
    "--gray-7-hsl": "210 9% 31%",
    "--gray-8-hsl": "210 10% 23%",
    "--gray-9-hsl": "210 11% 15%",
    "--gray-10-hsl": "214 14% 10%",
    "--gray-11-hsl": "216 16% 6%",
    "--gray-12-hsl": "210 40% 2%",
    "--stone-0-hsl": "200 27% 98%",
    "--stone-1-hsl": "210 18% 96%",
    "--stone-2-hsl": "210 11% 93%",
    "--stone-3-hsl": "192 9% 89%",
    "--stone-4-hsl": "197 8% 83%",
    "--stone-5-hsl": "202 5% 71%",
    "--stone-6-hsl": "200 3% 60%",
    "--stone-7-hsl": "180 2% 50%",
    "--stone-8-hsl": "160 1% 41%",
    "--stone-9-hsl": "90 1% 31%",
    "--stone-10-hsl": "60 3% 22%",
    "--stone-11-hsl": "60 6% 14%",
    "--stone-12-hsl": "60 6% 7%",
    "--red-0-hsl": "0 100% 98%",
    "--red-1-hsl": "0 100% 95%",
    "--red-2-hsl": "0 100% 89%",
    "--red-3-hsl": "0 100% 83%",
    "--red-4-hsl": "0 100% 76%",
    "--red-5-hsl": "0 100% 71%",
    "--red-6-hsl": "0 94% 65%",
    "--red-7-hsl": "0 86% 59%",
    "--red-8-hsl": "0 74% 54%",
    "--red-9-hsl": "0 65% 48%",
    "--red-10-hsl": "0 65% 42%",
    "--red-11-hsl": "0 65% 36%",
    "--red-12-hsl": "0 66% 30%",
    "--pink-0-hsl": "336 100% 97%",
    "--pink-1-hsl": "336 100% 94%",
    "--pink-2-hsl": "338 91% 87%",
    "--pink-3-hsl": "339 90% 81%",
    "--pink-4-hsl": "339 88% 74%",
    "--pink-5-hsl": "339 82% 67%",
    "--pink-6-hsl": "339 76% 59%",
    "--pink-7-hsl": "339 67% 52%",
    "--pink-8-hsl": "339 68% 45%",
    "--pink-9-hsl": "339 69% 38%",
    "--pink-10-hsl": "339 70% 32%",
    "--pink-11-hsl": "339 69% 27%",
    "--pink-12-hsl": "339 70% 21%",
    "--purple-0-hsl": "280 67% 96%",
    "--purple-1-hsl": "287 77% 92%",
    "--purple-2-hsl": "288 86% 86%",
    "--purple-3-hsl": "289 85% 78%",
    "--purple-4-hsl": "288 83% 71%",
    "--purple-5-hsl": "288 75% 64%",
    "--purple-6-hsl": "288 67% 58%",
    "--purple-7-hsl": "288 56% 52%",
    "--purple-8-hsl": "288 54% 46%",
    "--purple-9-hsl": "288 54% 40%",
    "--purple-10-hsl": "288 55% 33%",
    "--purple-11-hsl": "288 56% 26%",
    "--purple-12-hsl": "288 55% 20%",
    "--violet-0-hsl": "252 100% 97%",
    "--violet-1-hsl": "257 100% 93%",
    "--violet-2-hsl": "256 100% 87%",
    "--violet-3-hsl": "255 94% 79%",
    "--violet-4-hsl": "255 93% 72%",
    "--violet-5-hsl": "255 91% 67%",
    "--violet-6-hsl": "255 86% 63%",
    "--violet-7-hsl": "255 78% 60%",
    "--violet-8-hsl": "255 67% 55%",
    "--violet-9-hsl": "255 53% 50%",
    "--violet-10-hsl": "255 53% 44%",
    "--violet-11-hsl": "255 53% 37%",
    "--violet-12-hsl": "255 53% 31%",
    "--indigo-0-hsl": "223 100% 96%",
    "--indigo-1-hsl": "225 100% 93%",
    "--indigo-2-hsl": "228 100% 86%",
    "--indigo-3-hsl": "228 100% 78%",
    "--indigo-4-hsl": "228 96% 72%",
    "--indigo-5-hsl": "228 94% 67%",
    "--indigo-6-hsl": "228 89% 63%",
    "--indigo-7-hsl": "228 81% 59%",
    "--indigo-8-hsl": "228 69% 55%",
    "--indigo-9-hsl": "230 57% 50%",
    "--indigo-10-hsl": "230 57% 43%",
    "--indigo-11-hsl": "230 57% 37%",
    "--indigo-12-hsl": "230 57% 30%",
    "--blue-0-hsl": "205 100% 95%",
    "--blue-1-hsl": "206 100% 91%",
    "--blue-2-hsl": "206 100% 82%",
    "--blue-3-hsl": "206 96% 72%",
    "--blue-4-hsl": "207 91% 64%",
    "--blue-5-hsl": "207 86% 57%",
    "--blue-6-hsl": "208 80% 52%",
    "--blue-7-hsl": "208 77% 47%",
    "--blue-8-hsl": "209 77% 43%",
    "--blue-9-hsl": "209 75% 38%",
    "--blue-10-hsl": "209 76% 32%",
    "--blue-11-hsl": "209 75% 27%",
    "--blue-12-hsl": "209 76% 21%",
    "--cyan-0-hsl": "185 81% 94%",
    "--cyan-1-hsl": "185 84% 88%",
    "--cyan-2-hsl": "186 77% 77%",
    "--cyan-3-hsl": "187 74% 65%",
    "--cyan-4-hsl": "187 69% 55%",
    "--cyan-5-hsl": "188 72% 47%",
    "--cyan-6-hsl": "187 80% 42%",
    "--cyan-7-hsl": "188 83% 37%",
    "--cyan-8-hsl": "189 85% 32%",
    "--cyan-9-hsl": "189 85% 28%",
    "--cyan-10-hsl": "189 84% 23%",
    "--cyan-11-hsl": "190 84% 17%",
    "--cyan-12-hsl": "189 84% 12%",
    "--teal-0-hsl": "161 79% 95%",
    "--teal-1-hsl": "160 85% 87%",
    "--teal-2-hsl": "162 78% 77%",
    "--teal-3-hsl": "162 72% 65%",
    "--teal-4-hsl": "162 68% 54%",
    "--teal-5-hsl": "162 73% 46%",
    "--teal-6-hsl": "162 82% 40%",
    "--teal-7-hsl": "162 87% 35%",
    "--teal-8-hsl": "162 88% 30%",
    "--teal-9-hsl": "162 88% 26%",
    "--teal-10-hsl": "162 89% 21%",
    "--teal-11-hsl": "162 88% 16%",
    "--teal-12-hsl": "163 89% 11%",
    "--green-0-hsl": "131 67% 95%",
    "--green-1-hsl": "128 76% 90%",
    "--green-2-hsl": "128 71% 82%",
    "--green-3-hsl": "129 68% 73%",
    "--green-4-hsl": "130 61% 64%",
    "--green-5-hsl": "130 57% 56%",
    "--green-6-hsl": "131 50% 50%",
    "--green-7-hsl": "131 53% 46%",
    "--green-8-hsl": "131 54% 40%",
    "--green-9-hsl": "132 52% 35%",
    "--green-10-hsl": "132 52% 29%",
    "--green-11-hsl": "132 53% 22%",
    "--green-12-hsl": "131 53% 16%",
    "--lime-0-hsl": "79 81% 94%",
    "--lime-1-hsl": "80 83% 88%",
    "--lime-2-hsl": "81 81% 80%",
    "--lime-3-hsl": "82 75% 69%",
    "--lime-4-hsl": "83 73% 59%",
    "--lime-5-hsl": "84 69% 51%",
    "--lime-6-hsl": "85 74% 45%",
    "--lime-7-hsl": "85 79% 40%",
    "--lime-8-hsl": "86 84% 36%",
    "--lime-9-hsl": "85 84% 32%",
    "--lime-10-hsl": "85 83% 26%",
    "--lime-11-hsl": "85 83% 21%",
    "--lime-12-hsl": "85 84% 15%",
    "--yellow-0-hsl": "50 100% 93%",
    "--yellow-1-hsl": "49 100% 87%",
    "--yellow-2-hsl": "49 100% 80%",
    "--yellow-3-hsl": "48 100% 70%",
    "--yellow-4-hsl": "47 100% 62%",
    "--yellow-5-hsl": "45 97% 54%",
    "--yellow-6-hsl": "42 96% 50%",
    "--yellow-7-hsl": "39 100% 48%",
    "--yellow-8-hsl": "35 100% 47%",
    "--yellow-9-hsl": "31 100% 45%",
    "--yellow-10-hsl": "31 100% 35%",
    "--yellow-11-hsl": "31 100% 25%",
    "--yellow-12-hsl": "31 100% 20%",
    "--orange-0-hsl": "34 100% 95%",
    "--orange-1-hsl": "33 100% 90%",
    "--orange-2-hsl": "33 100% 83%",
    "--orange-3-hsl": "32 100% 74%",
    "--orange-4-hsl": "31 100% 65%",
    "--orange-5-hsl": "29 100% 58%",
    "--orange-6-hsl": "27 98% 54%",
    "--orange-7-hsl": "24 94% 50%",
    "--orange-8-hsl": "21 90% 48%",
    "--orange-9-hsl": "17 87% 45%",
    "--orange-10-hsl": "17 87% 40%",
    "--orange-11-hsl": "17 87% 32%",
    "--orange-12-hsl": "17 87% 27%",
    "--choco-0-hsl": "48 100% 93%",
    "--choco-1-hsl": "35 91% 86%",
    "--choco-2-hsl": "30 85% 79%",
    "--choco-3-hsl": "27 80% 72%",
    "--choco-4-hsl": "25 75% 65%",
    "--choco-5-hsl": "25 71% 57%",
    "--choco-6-hsl": "25 70% 49%",
    "--choco-7-hsl": "25 75% 42%",
    "--choco-8-hsl": "25 75% 37%",
    "--choco-9-hsl": "25 76% 31%",
    "--choco-10-hsl": "25 71% 26%",
    "--choco-11-hsl": "25 66% 21%",
    "--choco-12-hsl": "25 65% 15%",
    "--brown-0-hsl": "36 60% 95%",
    "--brown-1-hsl": "32 44% 87%",
    "--brown-2-hsl": "28 40% 80%",
    "--brown-3-hsl": "28 38% 72%",
    "--brown-4-hsl": "27 36% 65%",
    "--brown-5-hsl": "28 34% 57%",
    "--brown-6-hsl": "28 32% 50%",
    "--brown-7-hsl": "28 35% 43%",
    "--brown-8-hsl": "28 38% 37%",
    "--brown-9-hsl": "27 42% 31%",
    "--brown-10-hsl": "25 48% 25%",
    "--brown-11-hsl": "23 58% 19%",
    "--brown-12-hsl": "22 57% 16%",
    "--sand-0-hsl": "200 27% 98%",
    "--sand-1-hsl": "48 17% 88%",
    "--sand-2-hsl": "45 22% 79%",
    "--sand-3-hsl": "44 22% 69%",
    "--sand-4-hsl": "44 17% 62%",
    "--sand-5-hsl": "44 14% 54%",
    "--sand-6-hsl": "42 14% 46%",
    "--sand-7-hsl": "43 16% 39%",
    "--sand-8-hsl": "41 15% 32%",
    "--sand-9-hsl": "43 14% 26%",
    "--sand-10-hsl": "44 11% 20%",
    "--sand-11-hsl": "60 6% 14%",
    "--sand-12-hsl": "60 6% 7%",
    "--camo-0-hsl": "66 71% 95%",
    "--camo-1-hsl": "64 69% 77%",
    "--camo-2-hsl": "65 69% 59%",
    "--camo-3-hsl": "65 61% 51%",
    "--camo-4-hsl": "63 61% 46%",
    "--camo-5-hsl": "60 62% 41%",
    "--camo-6-hsl": "59 65% 36%",
    "--camo-7-hsl": "56 67% 33%",
    "--camo-8-hsl": "54 70% 29%",
    "--camo-9-hsl": "54 69% 25%",
    "--camo-10-hsl": "53 69% 22%",
    "--camo-11-hsl": "53 69% 18%",
    "--camo-12-hsl": "52 69% 13%",
    "--jungle-0-hsl": "74 98% 84%",
    "--jungle-1-hsl": "74 79% 78%",
    "--jungle-2-hsl": "74 68% 71%",
    "--jungle-3-hsl": "75 62% 65%",
    "--jungle-4-hsl": "74 56% 59%",
    "--jungle-5-hsl": "74 53% 53%",
    "--jungle-6-hsl": "74 55% 47%",
    "--jungle-7-hsl": "74 66% 42%",
    "--jungle-8-hsl": "74 79% 36%",
    "--jungle-9-hsl": "73 90% 32%",
    "--jungle-10-hsl": "73 91% 26%",
    "--jungle-11-hsl": "73 91% 21%",
    "--jungle-12-hsl": "73 90% 16%",
    "--font-system-ui": "system-ui, sans-serif",
    "--font-transitional": "Charter, Bitstream Charter, Sitka Text, Cambria, serif",
    "--font-old-style": "Iowan Old Style, Palatino Linotype, URW Palladio L, P052, serif",
    "--font-humanist": "Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif",
    "--font-geometric-humanist": "Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif",
    "--font-classical-humanist": "Optima, Candara, Noto Sans, source-sans-pro, sans-serif",
    "--font-neo-grotesque": "Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif",
    "--font-monospace-slab-serif": "Nimbus Mono PS, Courier New, monospace",
    "--font-monospace-code": "Dank Mono,Operator Mono, Inconsolata, Fira Mono, ui-monospace, SF Mono, Monaco, Droid Sans Mono, Source Code Pro, Cascadia Code, Menlo, Consolas, DejaVu Sans Mono, monospace",
    "--font-industrial": "Bahnschrift, DIN Alternate, Franklin Gothic Medium, Nimbus Sans Narrow, sans-serif-condensed, sans-serif",
    "--font-rounded-sans": "ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif",
    "--font-slab-serif": "Rockwell, Rockwell Nova, Roboto Slab, DejaVu Serif, Sitka Small, serif",
    "--font-antique": "Superclarendon, Bookman Old Style, URW Bookman, URW Bookman L, Georgia Pro, Georgia, serif",
    "--font-didone": "Didot, Bodoni MT, Noto Serif Display, URW Palladio L, P052, Sylfaen, serif",
    "--font-handwritten": "Segoe Print, Bradley Hand, Chilanka, TSCu_Comic, casual, cursive",
    "--font-sans": "var(--font-system-ui)",
    "--font-serif": "ui-serif, serif",
    "--font-mono": "var(--font-monospace-code)",
    "--font-weight-1": "100",
    "--font-weight-2": "200",
    "--font-weight-3": "300",
    "--font-weight-4": "400",
    "--font-weight-5": "500",
    "--font-weight-6": "600",
    "--font-weight-7": "700",
    "--font-weight-8": "800",
    "--font-weight-9": "900",
    "--font-lineheight-00": ".95",
    "--font-lineheight-0": "1.1",
    "--font-lineheight-1": "1.25",
    "--font-lineheight-2": "1.375",
    "--font-lineheight-3": "1.5",
    "--font-lineheight-4": "1.75",
    "--font-lineheight-5": "2",
    "--font-letterspacing-0": "-.05em",
    "--font-letterspacing-1": ".025em",
    "--font-letterspacing-2": ".050em",
    "--font-letterspacing-3": ".075em",
    "--font-letterspacing-4": ".150em",
    "--font-letterspacing-5": ".500em",
    "--font-letterspacing-6": ".750em",
    "--font-letterspacing-7": "1em",
    "--font-size-00": ".5rem",
    "--font-size-0": ".75rem",
    "--font-size-1": "1rem",
    "--font-size-2": "1.1rem",
    "--font-size-3": "1.25rem",
    "--font-size-4": "1.5rem",
    "--font-size-5": "2rem",
    "--font-size-6": "2.5rem",
    "--font-size-7": "3rem",
    "--font-size-8": "3.5rem",
    "--font-size-fluid-0": "clamp(.75rem, 2vw, 1rem)",
    "--font-size-fluid-1": "clamp(1rem, 4vw, 1.5rem)",
    "--font-size-fluid-2": "clamp(1.5rem, 6vw, 2.5rem)",
    "--font-size-fluid-3": "clamp(2rem, 9vw, 3.5rem)",
    "--border-size-1": "1px",
    "--border-size-2": "2px",
    "--border-size-3": "5px",
    "--border-size-4": "10px",
    "--border-size-5": "25px",
    "--radius-1": "2px",
    "--radius-2": "5px",
    "--radius-3": "1rem",
    "--radius-4": "2rem",
    "--radius-5": "4rem",
    "--radius-6": "8rem",
    "--radius-drawn-1": "255px 15px 225px 15px / 15px 225px 15px 255px",
    "--radius-drawn-2": "125px 10px 20px 185px / 25px 205px 205px 25px",
    "--radius-drawn-3": "15px 255px 15px 225px / 225px 15px 255px 15px",
    "--radius-drawn-4": "15px 25px 155px 25px / 225px 150px 25px 115px",
    "--radius-drawn-5": "250px 25px 15px 20px / 15px 80px 105px 115px",
    "--radius-drawn-6": "28px 100px 20px 15px / 150px 30px 205px 225px",
    "--radius-round": "1e5px",
    "--radius-blob-1": "30% 70% 70% 30% / 53% 30% 70% 47%",
    "--radius-blob-2": "53% 47% 34% 66% / 63% 46% 54% 37%",
    "--radius-blob-3": "37% 63% 56% 44% / 49% 56% 44% 51%",
    "--radius-blob-4": "63% 37% 37% 63% / 43% 37% 63% 57%",
    "--radius-blob-5": "49% 51% 48% 52% / 57% 44% 56% 43%",
    "--radius-conditional-1": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-1))",
    "--radius-conditional-2": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-2))",
    "--radius-conditional-3": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-3))",
    "--radius-conditional-4": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-4))",
    "--radius-conditional-5": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-5))",
    "--radius-conditional-6": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-6))",
    "--ratio-square": "1",
    "--ratio-landscape": "4/3",
    "--ratio-portrait": "3/4",
    "--ratio-widescreen": "16/9",
    "--ratio-ultrawide": "18/5",
    "--ratio-golden": "1.6180/1",
    "--ease-1": "cubic-bezier(.25, 0, .5, 1)",
    "--ease-2": "cubic-bezier(.25, 0, .4, 1)",
    "--ease-3": "cubic-bezier(.25, 0, .3, 1)",
    "--ease-4": "cubic-bezier(.25, 0, .2, 1)",
    "--ease-5": "cubic-bezier(.25, 0, .1, 1)",
    "--ease-in-1": "cubic-bezier(.25, 0, 1, 1)",
    "--ease-in-2": "cubic-bezier(.50, 0, 1, 1)",
    "--ease-in-3": "cubic-bezier(.70, 0, 1, 1)",
    "--ease-in-4": "cubic-bezier(.90, 0, 1, 1)",
    "--ease-in-5": "cubic-bezier(1, 0, 1, 1)",
    "--ease-out-1": "cubic-bezier(0, 0, .75, 1)",
    "--ease-out-2": "cubic-bezier(0, 0, .50, 1)",
    "--ease-out-3": "cubic-bezier(0, 0, .3, 1)",
    "--ease-out-4": "cubic-bezier(0, 0, .1, 1)",
    "--ease-out-5": "cubic-bezier(0, 0, 0, 1)",
    "--ease-in-out-1": "cubic-bezier(.1, 0, .9, 1)",
    "--ease-in-out-2": "cubic-bezier(.3, 0, .7, 1)",
    "--ease-in-out-3": "cubic-bezier(.5, 0, .5, 1)",
    "--ease-in-out-4": "cubic-bezier(.7, 0, .3, 1)",
    "--ease-in-out-5": "cubic-bezier(.9, 0, .1, 1)",
    "--ease-elastic-out-1": "cubic-bezier(.5, .75, .75, 1.25)",
    "--ease-elastic-out-2": "cubic-bezier(.5, 1, .75, 1.25)",
    "--ease-elastic-out-3": "cubic-bezier(.5, 1.25, .75, 1.25)",
    "--ease-elastic-out-4": "cubic-bezier(.5, 1.5, .75, 1.25)",
    "--ease-elastic-out-5": "cubic-bezier(.5, 1.75, .75, 1.25)",
    "--ease-elastic-in-1": "cubic-bezier(.5, -0.25, .75, 1)",
    "--ease-elastic-in-2": "cubic-bezier(.5, -0.50, .75, 1)",
    "--ease-elastic-in-3": "cubic-bezier(.5, -0.75, .75, 1)",
    "--ease-elastic-in-4": "cubic-bezier(.5, -1.00, .75, 1)",
    "--ease-elastic-in-5": "cubic-bezier(.5, -1.25, .75, 1)",
    "--ease-elastic-in-out-1": "cubic-bezier(.5, -.1, .1, 1.5)",
    "--ease-elastic-in-out-2": "cubic-bezier(.5, -.3, .1, 1.5)",
    "--ease-elastic-in-out-3": "cubic-bezier(.5, -.5, .1, 1.5)",
    "--ease-elastic-in-out-4": "cubic-bezier(.5, -.7, .1, 1.5)",
    "--ease-elastic-in-out-5": "cubic-bezier(.5, -.9, .1, 1.5)",
    "--ease-step-1": "steps(2)",
    "--ease-step-2": "steps(3)",
    "--ease-step-3": "steps(4)",
    "--ease-step-4": "steps(7)",
    "--ease-step-5": "steps(10)",
    "--ease-elastic-1": "var(--ease-elastic-out-1)",
    "--ease-elastic-2": "var(--ease-elastic-out-2)",
    "--ease-elastic-3": "var(--ease-elastic-out-3)",
    "--ease-elastic-4": "var(--ease-elastic-out-4)",
    "--ease-elastic-5": "var(--ease-elastic-out-5)",
    "--ease-squish-1": "var(--ease-elastic-in-out-1)",
    "--ease-squish-2": "var(--ease-elastic-in-out-2)",
    "--ease-squish-3": "var(--ease-elastic-in-out-3)",
    "--ease-squish-4": "var(--ease-elastic-in-out-4)",
    "--ease-squish-5": "var(--ease-elastic-in-out-5)",
    "--ease-spring-1": "linear(\n    0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%,\n    0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%,\n    1.001\n  )",
    "--ease-spring-2": "linear(\n    0, 0.007, 0.029 2.2%, 0.118 4.7%, 0.625 14.4%, 0.826 19%, 0.902, 0.962,\n    1.008 26.1%, 1.041 28.7%, 1.064 32.1%, 1.07 36%, 1.061 40.5%, 1.015 53.4%,\n    0.999 61.6%, 0.995 71.2%, 1\n  )",
    "--ease-spring-3": "linear(\n    0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077,\n    1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,\n    1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,\n    0.997 69.8%, 1.003 76.9%, 1\n  )",
    "--ease-spring-4": "linear(\n    0, 0.009, 0.037 1.7%, 0.153 3.6%, 0.776 10.3%, 1.001, 1.142 16%, 1.185,\n    1.209 19%, 1.215 19.9% 20.8%, 1.199, 1.165 25%, 1.056 30.3%, 1.008 33%, 0.973,\n    0.955 39.2%, 0.953 41.1%, 0.957 43.3%, 0.998 53.3%, 1.009 59.1% 63.7%,\n    0.998 78.9%, 1\n  )",
    "--ease-spring-5": "linear(\n    0, 0.01, 0.04 1.6%, 0.161 3.3%, 0.816 9.4%, 1.046, 1.189 14.4%, 1.231,\n    1.254 17%, 1.259, 1.257 18.6%, 1.236, 1.194 22.3%, 1.057 27%, 0.999 29.4%,\n    0.955 32.1%, 0.942, 0.935 34.9%, 0.933, 0.939 38.4%, 1 47.3%, 1.011,\n    1.017 52.6%, 1.016 56.4%, 1 65.2%, 0.996 70.2%, 1.001 87.2%, 1\n  )",
    "--ease-bounce-1": "linear(\n    0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141, 0.191, 0.25, 0.316, 0.391 36.8%,\n    0.563, 0.766, 1 58.8%, 0.946, 0.908 69.1%, 0.895, 0.885, 0.879, 0.878, 0.879,\n    0.885, 0.895, 0.908 89.7%, 0.946, 1\n  )",
    "--ease-bounce-2": "linear(\n    0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141 15.1%, 0.25, 0.391, 0.562, 0.765,\n    1, 0.892 45.2%, 0.849, 0.815, 0.788, 0.769, 0.757, 0.753, 0.757, 0.769, 0.788,\n    0.815, 0.85, 0.892 75.2%, 1 80.2%, 0.973, 0.954, 0.943, 0.939, 0.943, 0.954,\n    0.973, 1\n  )",
    "--ease-bounce-3": "linear(\n    0, 0.004, 0.016, 0.035, 0.062, 0.098, 0.141 11.4%, 0.25, 0.39, 0.562, 0.764,\n    1 30.3%, 0.847 34.8%, 0.787, 0.737, 0.699, 0.672, 0.655, 0.65, 0.656, 0.672,\n    0.699, 0.738, 0.787, 0.847 61.7%, 1 66.2%, 0.946, 0.908, 0.885 74.2%, 0.879,\n    0.878, 0.879, 0.885 79.5%, 0.908, 0.946, 1 87.4%, 0.981, 0.968, 0.96, 0.957,\n    0.96, 0.968, 0.981, 1\n  )",
    "--ease-bounce-4": "linear(\n    0, 0.004, 0.016 3%, 0.062, 0.141, 0.25, 0.391, 0.562 18.2%, 1 24.3%, 0.81,\n    0.676 32.3%, 0.629, 0.595, 0.575, 0.568, 0.575, 0.595, 0.629, 0.676 48.2%,\n    0.811, 1 56.2%, 0.918, 0.86, 0.825, 0.814, 0.825, 0.86, 0.918, 1 77.2%,\n    0.94 80.6%, 0.925, 0.92, 0.925, 0.94 87.5%, 1 90.9%, 0.974, 0.965, 0.974, 1\n  )",
    "--ease-bounce-5": "linear(\n    0, 0.004, 0.016 2.5%, 0.063, 0.141, 0.25 10.1%, 0.562, 1 20.2%, 0.783, 0.627,\n    0.534 30.9%, 0.511, 0.503, 0.511, 0.534 38%, 0.627, 0.782, 1 48.7%, 0.892,\n    0.815, 0.769 56.3%, 0.757, 0.753, 0.757, 0.769 61.3%, 0.815, 0.892, 1 68.8%,\n    0.908 72.4%, 0.885, 0.878, 0.885, 0.908 79.4%, 1 83%, 0.954 85.5%, 0.943,\n    0.939, 0.943, 0.954 90.5%, 1 93%, 0.977, 0.97, 0.977, 1\n  )",
    "--squircle-1": "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 18.75 18.75, 0 75, 0 S 150, 18.75 150, 75 131.25, 150 75, 150 0, 131.25 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
    "--squircle-2": "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 13.500000000000004 13.500000000000004, 0 75, 0 S 150, 13.500000000000004 150, 75 136.5, 150 75, 150 0, 136.5 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
    "--squircle-3": "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 5.999999999999997 5.999999999999997, 0 75, 0 S 150, 5.999999999999997 150, 75 144, 150 75, 150 0, 144 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
    "--gradient-1": "linear-gradient(to bottom right,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)",
    "--gradient-2": "linear-gradient(to bottom right,#48005c, #8300e2, #a269ff)",
    "--gradient-3": "\n    radial-gradient(\n      circle at top right, \n      hsl(180 100% 50%), hsl(180 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(328 100% 54%), hsl(328 100% 54% / 0%)\n    )",
    "--gradient-4": "linear-gradient(to bottom right,#00F5A0,#00D9F5)",
    "--gradient-5": "conic-gradient(from -270deg at 75% 110%, fuchsia, floralwhite)",
    "--gradient-6": "conic-gradient(from -90deg at top left, black, white)",
    "--gradient-7": "linear-gradient(to bottom right,#72C6EF,#004E8F)",
    "--gradient-8": "conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111)",
    "--gradient-9": "conic-gradient(from .5turn at bottom center, lightblue, white)",
    "--gradient-10": "conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)",
    "--gradient-11": "conic-gradient(at bottom left, deeppink, cyan)",
    "--gradient-12": "conic-gradient(from 90deg at 25% -10%, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85)",
    "--gradient-13": "radial-gradient(circle at 50% 200%, #000142, #3b0083, #b300c3, #ff059f, #ff4661, #ffad86, #fff3c7)",
    "--gradient-14": "conic-gradient(at top right, lime, cyan)",
    "--gradient-15": "linear-gradient(to bottom right, #c7d2fe, #fecaca, #fef3c7)",
    "--gradient-16": "radial-gradient(circle at 50% -250%, #374151, #111827, #000)",
    "--gradient-17": "conic-gradient(from -90deg at 50% -25%, blue, blueviolet)",
    "--gradient-18": "\n    linear-gradient(0deg,   hsla(0   100% 50% / 80%), hsla(0   100% 50% / 0) 75%),\n    linear-gradient(60deg,  hsla(60  100% 50% / 80%), hsla(60  100% 50% / 0) 75%),\n    linear-gradient(120deg, hsla(120 100% 50% / 80%), hsla(120 100% 50% / 0) 75%),\n    linear-gradient(180deg, hsla(180 100% 50% / 80%), hsla(180 100% 50% / 0) 75%),\n    linear-gradient(240deg, hsla(240 100% 50% / 80%), hsla(240 100% 50% / 0) 75%),\n    linear-gradient(300deg, hsla(300 100% 50% / 80%), hsla(300 100% 50% / 0) 75%)\n  ",
    "--gradient-19": "linear-gradient(to bottom right,#ffe259,#ffa751)",
    "--gradient-20": "conic-gradient(from -135deg at -10% center, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)",
    "--gradient-21": "conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)",
    "--gradient-22": "linear-gradient(to bottom right,#acb6e5,#86fde8)",
    "--gradient-23": "linear-gradient(to bottom right,#536976,#292E49)",
    "--gradient-24": "conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)",
    "--gradient-25": "conic-gradient(at 125% 50%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)",
    "--gradient-26": "linear-gradient(to bottom right,#9796f0,#fbc7d4)",
    "--gradient-27": "conic-gradient(from .5turn at bottom left, deeppink, rebeccapurple)",
    "--gradient-28": "conic-gradient(from -90deg at 50% 105%, white, orchid)",
    "--gradient-29": "\n    radial-gradient(\n      circle at top right, \n      hsl(250 100% 85%), hsl(250 100% 85% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(220 90% 75%), hsl(220 90% 75% / 0%)\n    )",
    "--gradient-30": "radial-gradient(\n      circle at top right, \n      hsl(150 100% 50%), hsl(150 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(150 100% 84%), hsl(150 100% 84% / 0%)\n    )",
    "--noise-1": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "--noise-2": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "--noise-3": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "--noise-4": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "--noise-5": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "--noise-filter-1": "contrast(300%) brightness(100%)",
    "--noise-filter-2": "contrast(200%) brightness(150%)",
    "--noise-filter-3": "contrast(200%) brightness(250%)",
    "--noise-filter-4": "contrast(200%) brightness(500%)",
    "--noise-filter-5": "contrast(200%) brightness(1000%)",
    "--shadow-color": "220 3% 15%",
    "--shadow-strength": "1%",
    "--shadow-color-@media:dark": "220 40% 2%",
    "--shadow-strength-@media:dark": "25%",
    "--inner-shadow-highlight": "inset 0 -.5px 0 0 #fff, inset 0 .5px 0 0 #0001",
    "--inner-shadow-highlight-@media:dark": "inset 0 -.5px 0 0 #fff1, inset 0 .5px 0 0 #0007",
    "--shadow-1": "0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
    "--shadow-2": "\n    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))",
    "--shadow-3": "\n    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))",
    "--shadow-4": "\n    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))",
    "--shadow-5": "\n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))",
    "--shadow-6": "\n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),\n    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))",
    "--inner-shadow-0": "inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
    "--inner-shadow-1": "inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "--inner-shadow-2": "inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "--inner-shadow-3": "inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "--inner-shadow-4": "inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "--layer-1": 1,
    "--layer-2": 2,
    "--layer-3": 3,
    "--layer-4": 4,
    "--layer-5": 5,
    "--layer-important": 2147483647,
    "--mask-edge-scoop-bottom": "radial-gradient(20px at 50% 100%,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%",
    "--mask-edge-scoop-top": "radial-gradient(20px at 50% 0,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%",
    "--mask-edge-scoop-vertical": "radial-gradient(20px at 50% 20px,#0000 97%,#000) 50% -20px/ calc(1.9 * 20px) 100%",
    "--mask-edge-scoop-left": "radial-gradient(20px at 0 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)",
    "--mask-edge-scoop-right": "radial-gradient(20px at 100% 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)",
    "--mask-edge-scoop-horizontal": "radial-gradient(20px at 20px 50%,#0000 97%,#000) -20px/ 100% calc(1.9 * 20px)",
    "--mask-edge-scalloped": "\n    radial-gradient(farthest-side,#000 97%,#0000) 0 0 / 20px 20px round,\n    linear-gradient(#000 0 0) 50%/calc(100% - 20px) calc(100% - 20px) no-repeat\n  ",
    "--mask-edge-scalloped-bottom": "\n    linear-gradient(to top,#0000 20px,#000 0),\n    radial-gradient(20px at top,#000 97%,#0000) bottom / calc(1.9 * 20px) 20px\n  ",
    "--mask-edge-scalloped-top": "\n    linear-gradient(to bottom,#0000 20px,#000 0),\n    radial-gradient(20px at bottom,#000 97%,#0000) top / calc(1.9 * 20px) 20px\n  ",
    "--mask-edge-scalloped-vertical": "\n    linear-gradient(0deg,#0000 calc(2 * 20px),#000 0) 0 20px,\n    radial-gradient(20px,#000 97%,#0000) 50% / calc(1.9 * 20px) calc(2 * 20px) repeat space\n  ",
    "--mask-edge-scalloped-left": "\n    linear-gradient(to right,#0000 20px,#000 0),\n    radial-gradient(20px at right,#000 97%,#0000) left / 20px calc(1.9 * 20px)\n  ",
    "--mask-edge-scalloped-right": "\n    linear-gradient(to left,#0000 20px,#000 0),\n    radial-gradient(20px at left,#000 97%,#0000) right / 20px calc(1.9 * 20px)\n  ",
    "--mask-edge-scalloped-horizontal": "\n    linear-gradient(-90deg,#0000 calc(2 * 20px),#000 0) 20px,\n    radial-gradient(20px,#000 97%,#0000) 50% / calc(2 * 20px) calc(1.9 * 20px) space repeat\n  ",
    "--mask-edge-drip-bottom": "\n    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 100% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ",
    "--mask-edge-drip-top": "\n    radial-gradient(20px at top,#0000 97%,#000) 50% 20px / calc(2 * 20px) 100% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 1% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ",
    "--mask-edge-drip-vertical": "\n    radial-gradient(20px at top   ,#0000 97%,#000) 50%             20px  / calc(2 * 20px) 51% repeat-x,\n    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 51% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% -   20px) 1%  / calc(4 * 20px) calc(2 * 20px) repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 3*20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ",
    "--mask-edge-drip-left": "\n    radial-gradient(20px at left,#0000 97%,#000) 20px 50% / 100% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ",
    "--mask-edge-drip-right": "\n    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 100% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ",
    "--mask-edge-drip-horizontal": "\n    radial-gradient(20px at left ,#0000 97%,#000)             20px  50% / 51% calc(2 * 20px) repeat-y,  \n    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 51% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1%  calc(50% -   20px) / calc(2 * 20px) calc(4 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 3*20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ",
    "--mask-edge-zig-zag-top": "conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%",
    "--mask-edge-zig-zag-bottom": "conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%",
    "--mask-edge-zig-zag-left": "conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)",
    "--mask-edge-zig-zag-right": "conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)",
    "--mask-edge-zig-zag-horizontal": "\n    conic-gradient(from   45deg at left ,#0000,#000 1deg 90deg,#0000 91deg) left  / 51% calc(2 * 20px) repeat-y,\n    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right / 51% calc(2 * 20px) repeat-y\n  ",
    "--mask-edge-zig-zag-vertical": "\n    conic-gradient(from 135deg at top   ,#0000,#000 1deg 90deg,#0000 91deg) top    / calc(2 * 20px) 51% repeat-x,\n    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom / calc(2 * 20px) 51% repeat-x\n  ",
    "--mask-corner-cut-circles-1": "radial-gradient(1rem at 1rem 1rem,#0000 99%,#000) -1rem -1rem",
    "--mask-corner-cut-circles-2": "radial-gradient(2rem at 2rem 2rem,#0000 99%,#000) -2rem -2rem",
    "--mask-corner-cut-circles-3": "radial-gradient(4rem at 4rem 4rem,#0000 99%,#000) -4rem -4rem",
    "--mask-corner-cut-squares-1": "conic-gradient(at calc(2*1rem) calc(2*1rem),#000 75%,#0000 0) -1rem -1rem",
    "--mask-corner-cut-squares-2": "conic-gradient(at calc(2*2rem) calc(2*2rem),#000 75%,#0000 0) -2rem -2rem",
    "--mask-corner-cut-squares-3": "conic-gradient(at calc(2*4rem) calc(2*4rem),#000 75%,#0000 0) -4rem -4rem",
    "--mask-corner-cut-angles-1": "\n    conic-gradient(from -45deg at 1rem 1rem,#0000 25%,#000 0) \n    -1rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 1rem calc(100% - 1rem),#0000 25%,#000 0) \n    -1rem 100%/100% 51% repeat-x\n  ",
    "--mask-corner-cut-angles-2": "\n    conic-gradient(from -45deg at 2rem 2rem,#0000 25%,#000 0) \n    -2rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 2rem calc(100% - 2rem),#0000 25%,#000 0) \n    -2rem 100%/100% 51% repeat-x\n  ",
    "--mask-corner-cut-angles-3": "\n    conic-gradient(from -45deg at 4rem 4rem,#0000 25%,#000 0) \n    -4rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 4rem calc(100% - 4rem),#0000 25%,#000 0) \n    -4rem 100%/100% 51% repeat-x\n  ",
    "animationFadeIn": "fade-in .5s var(--ease-3)",
    "animationFadeIn@": "\n@keyframes fade-in {\n  to { opacity: 1 }\n}",
    "animationFadeInBloom": "fade-in-bloom 2s var(--ease-3)",
    "animationFadeInBloom@": "\n@keyframes fade-in-bloom {\n  0% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(2) blur(10px) }\n100% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "animationFadeInBloom@media:dark": "\n@keyframes fade-in-bloom {\n  0% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(0.5) blur(10px) }\n100% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "animationFadeOut": "fade-out .5s var(--ease-3)",
    "animationFadeOut@": "\n@keyframes fade-out {\n  to { opacity: 0 }\n}",
    "animationFadeOutBloom": "fade-out-bloom 2s var(--ease-3)",
    "animationFadeOutBloom@": "\n@keyframes fade-out-bloom {\n100% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(2) blur(10px) }\n  0% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "animationFadeOutBloom@media:dark": "\n@keyframes fade-out-bloom {\n100% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(0.5) blur(10px) }\n  0% { opacity: 1; filter: brightness(1) blur(0) }\n}",
    "animationScaleUp": "scale-up .5s var(--ease-3)",
    "animationScaleUp@": "\n@keyframes scale-up {\n  to { transform: scale(1.25) }\n}",
    "animationScaleDown": "scale-down .5s var(--ease-3)",
    "animationScaleDown@": "\n@keyframes scale-down {\n  to { transform: scale(.75) }\n}",
    "animationSlideOutUp": "slide-out-up .5s var(--ease-3)",
    "animationSlideOutUp@": "\n@keyframes slide-out-up {\n  to { transform: translateY(-100%) }\n}",
    "animationSlideOutDown": "slide-out-down .5s var(--ease-3)",
    "animationSlideOutDown@": "\n@keyframes slide-out-down {\n  to { transform: translateY(100%) }\n}",
    "animationSlideOutRight": "slide-out-right .5s var(--ease-3)",
    "animationSlideOutRight@": "\n@keyframes slide-out-right {\n  to { transform: translateX(100%) }\n}",
    "animationSlideOutLeft": "slide-out-left .5s var(--ease-3)",
    "animationSlideOutLeft@": "\n@keyframes slide-out-left {\n  to { transform: translateX(-100%) }\n}",
    "animationSlideInUp": "slide-in-up .5s var(--ease-3)",
    "animationSlideInUp@": "\n@keyframes slide-in-up {\n  from { transform: translateY(100%) }\n}",
    "animationSlideInDown": "slide-in-down .5s var(--ease-3)",
    "animationSlideInDown@": "\n@keyframes slide-in-down {\n  from { transform: translateY(-100%) }\n}",
    "animationSlideInRight": "slide-in-right .5s var(--ease-3)",
    "animationSlideInRight@": "\n@keyframes slide-in-right {\n  from { transform: translateX(-100%) }\n}",
    "animationSlideInLeft": "slide-in-left .5s var(--ease-3)",
    "animationSlideInLeft@": "\n@keyframes slide-in-left {\n  from { transform: translateX(100%) }\n}",
    "animationShakeX": "shake-x .75s var(--ease-out-5)",
    "animationShakeX@": "\n@keyframes shake-x {\n  0%, 100% { transform: translateX(0%) }\n  20% { transform: translateX(-5%) }\n  40% { transform: translateX(5%) }\n  60% { transform: translateX(-5%) }\n  80% { transform: translateX(5%) }\n}",
    "animationShakeY": "shake-y .75s var(--ease-out-5)",
    "animationShakeY@": "\n@keyframes shake-y {\n  0%, 100% { transform: translateY(0%) }\n  20% { transform: translateY(-5%) }\n  40% { transform: translateY(5%) }\n  60% { transform: translateY(-5%) }\n  80% { transform: translateY(5%) }\n}",
    "animationShakeZ": "shake-z 1s var(--ease-in-out-3)",
    "animationShakeZ@": "\n@keyframes shake-z {\n  0%, 100% { transform: rotate(0deg) }\n  20% { transform: rotate(-2deg) }\n  40% { transform: rotate(2deg) }\n  60% { transform: rotate(-2deg) }\n  80% { transform: rotate(2deg) }\n}",
    "animationSpin": "spin 2s linear infinite",
    "animationSpin@": "\n@keyframes spin {\n  to { transform: rotate(1turn) }\n}",
    "animationPing": "ping 5s var(--ease-out-3) infinite",
    "animationPing@": "\n@keyframes ping {\n  90%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}",
    "animationBlink": "blink 1s var(--ease-out-3) infinite",
    "animationBlink@": "\n@keyframes blink {\n  0%, 100% {\n    opacity: 1\n  }\n  50% {\n    opacity: .5\n  }\n}",
    "animationFloat": "float 3s var(--ease-in-out-3) infinite",
    "animationFloat@": "\n@keyframes float {\n  50% { transform: translateY(-25%) }\n}",
    "animationBounce": "bounce 2s var(--ease-squish-2) infinite",
    "animationBounce@": "\n@keyframes bounce {\n  25% { transform: translateY(-20%) }\n  40% { transform: translateY(-3%) }\n  0%, 60%, 100% { transform: translateY(0) }\n}",
    "animationPulse": "pulse 2s var(--ease-out-3) infinite",
    "animationPulse@": "\n@keyframes pulse {\n  50% { transform: scale(.9,.9) }\n}",
    "size000": "-.5rem",
    "size00": "-.25rem",
    "size1": ".25rem",
    "size2": ".5rem",
    "size3": "1rem",
    "size4": "1.25rem",
    "size5": "1.5rem",
    "size6": "1.75rem",
    "size7": "2rem",
    "size8": "3rem",
    "size9": "4rem",
    "size10": "5rem",
    "size11": "7.5rem",
    "size12": "10rem",
    "size13": "15rem",
    "size14": "20rem",
    "size15": "30rem",
    "sizePx000": "-8px",
    "sizePx00": "-4px",
    "sizePx1": "4px",
    "sizePx2": "8px",
    "sizePx3": "16px",
    "sizePx4": "20px",
    "sizePx5": "24px",
    "sizePx6": "28px",
    "sizePx7": "32px",
    "sizePx8": "48px",
    "sizePx9": "64px",
    "sizePx10": "80px",
    "sizePx11": "120px",
    "sizePx12": "160px",
    "sizePx13": "240px",
    "sizePx14": "320px",
    "sizePx15": "480px",
    "sizeFluid1": "clamp(.5rem, 1vw, 1rem)",
    "sizeFluid2": "clamp(1rem, 2vw, 1.5rem)",
    "sizeFluid3": "clamp(1.5rem, 3vw, 2rem)",
    "sizeFluid4": "clamp(2rem, 4vw, 3rem)",
    "sizeFluid5": "clamp(4rem, 5vw, 5rem)",
    "sizeFluid6": "clamp(5rem, 7vw, 7.5rem)",
    "sizeFluid7": "clamp(7.5rem, 10vw, 10rem)",
    "sizeFluid8": "clamp(10rem, 20vw, 15rem)",
    "sizeFluid9": "clamp(15rem, 30vw, 20rem)",
    "sizeFluid10": "clamp(20rem, 40vw, 30rem)",
    "sizeContent1": "20ch",
    "sizeContent2": "45ch",
    "sizeContent3": "60ch",
    "sizeHeader1": "20ch",
    "sizeHeader2": "25ch",
    "sizeHeader3": "35ch",
    "sizeXxs": "240px",
    "sizeXs": "360px",
    "sizeSm": "480px",
    "sizeMd": "768px",
    "sizeLg": "1024px",
    "sizeXl": "1440px",
    "sizeXxl": "1920px",
    "sizeRelative000": "-.5ch",
    "sizeRelative00": "-.25ch",
    "sizeRelative1": ".25ch",
    "sizeRelative2": ".5ch",
    "sizeRelative3": "1ch",
    "sizeRelative4": "1.25ch",
    "sizeRelative5": "1.5ch",
    "sizeRelative6": "1.75ch",
    "sizeRelative7": "2ch",
    "sizeRelative8": "3ch",
    "sizeRelative9": "4ch",
    "sizeRelative10": "5ch",
    "sizeRelative11": "7.5ch",
    "sizeRelative12": "10ch",
    "sizeRelative13": "15ch",
    "sizeRelative14": "20ch",
    "sizeRelative15": "30ch",
    "gray0": "#f8f9fa",
    "gray1": "#f1f3f5",
    "gray2": "#e9ecef",
    "gray3": "#dee2e6",
    "gray4": "#ced4da",
    "gray5": "#adb5bd",
    "gray6": "#868e96",
    "gray7": "#495057",
    "gray8": "#343a40",
    "gray9": "#212529",
    "gray10": "#16191d",
    "gray11": "#0d0f12",
    "gray12": "#030507",
    "stone0": "#f8fafb",
    "stone1": "#f2f4f6",
    "stone2": "#ebedef",
    "stone3": "#e0e4e5",
    "stone4": "#d1d6d8",
    "stone5": "#b1b6b9",
    "stone6": "#979b9d",
    "stone7": "#7e8282",
    "stone8": "#666968",
    "stone9": "#50514f",
    "stone10": "#3a3a37",
    "stone11": "#252521",
    "stone12": "#121210",
    "red0": "#fff5f5",
    "red1": "#ffe3e3",
    "red2": "#ffc9c9",
    "red3": "#ffa8a8",
    "red4": "#ff8787",
    "red5": "#ff6b6b",
    "red6": "#fa5252",
    "red7": "#f03e3e",
    "red8": "#e03131",
    "red9": "#c92a2a",
    "red10": "#b02525",
    "red11": "#962020",
    "red12": "#7d1a1a",
    "pink0": "#fff0f6",
    "pink1": "#ffdeeb",
    "pink2": "#fcc2d7",
    "pink3": "#faa2c1",
    "pink4": "#f783ac",
    "pink5": "#f06595",
    "pink6": "#e64980",
    "pink7": "#d6336c",
    "pink8": "#c2255c",
    "pink9": "#a61e4d",
    "pink10": "#8c1941",
    "pink11": "#731536",
    "pink12": "#59102a",
    "purple0": "#f8f0fc",
    "purple1": "#f3d9fa",
    "purple2": "#eebefa",
    "purple3": "#e599f7",
    "purple4": "#da77f2",
    "purple5": "#cc5de8",
    "purple6": "#be4bdb",
    "purple7": "#ae3ec9",
    "purple8": "#9c36b5",
    "purple9": "#862e9c",
    "purple10": "#702682",
    "purple11": "#5a1e69",
    "purple12": "#44174f",
    "violet0": "#f3f0ff",
    "violet1": "#e5dbff",
    "violet2": "#d0bfff",
    "violet3": "#b197fc",
    "violet4": "#9775fa",
    "violet5": "#845ef7",
    "violet6": "#7950f2",
    "violet7": "#7048e8",
    "violet8": "#6741d9",
    "violet9": "#5f3dc4",
    "violet10": "#5235ab",
    "violet11": "#462d91",
    "violet12": "#3a2578",
    "indigo0": "#edf2ff",
    "indigo1": "#dbe4ff",
    "indigo2": "#bac8ff",
    "indigo3": "#91a7ff",
    "indigo4": "#748ffc",
    "indigo5": "#5c7cfa",
    "indigo6": "#4c6ef5",
    "indigo7": "#4263eb",
    "indigo8": "#3b5bdb",
    "indigo9": "#364fc7",
    "indigo10": "#2f44ad",
    "indigo11": "#283a94",
    "indigo12": "#21307a",
    "blue0": "#e7f5ff",
    "blue1": "#d0ebff",
    "blue2": "#a5d8ff",
    "blue3": "#74c0fc",
    "blue4": "#4dabf7",
    "blue5": "#339af0",
    "blue6": "#228be6",
    "blue7": "#1c7ed6",
    "blue8": "#1971c2",
    "blue9": "#1864ab",
    "blue10": "#145591",
    "blue11": "#114678",
    "blue12": "#0d375e",
    "cyan0": "#e3fafc",
    "cyan1": "#c5f6fa",
    "cyan2": "#99e9f2",
    "cyan3": "#66d9e8",
    "cyan4": "#3bc9db",
    "cyan5": "#22b8cf",
    "cyan6": "#15aabf",
    "cyan7": "#1098ad",
    "cyan8": "#0c8599",
    "cyan9": "#0b7285",
    "cyan10": "#095c6b",
    "cyan11": "#074652",
    "cyan12": "#053038",
    "teal0": "#e6fcf5",
    "teal1": "#c3fae8",
    "teal2": "#96f2d7",
    "teal3": "#63e6be",
    "teal4": "#38d9a9",
    "teal5": "#20c997",
    "teal6": "#12b886",
    "teal7": "#0ca678",
    "teal8": "#099268",
    "teal9": "#087f5b",
    "teal10": "#066649",
    "teal11": "#054d37",
    "teal12": "#033325",
    "green0": "#ebfbee",
    "green1": "#d3f9d8",
    "green2": "#b2f2bb",
    "green3": "#8ce99a",
    "green4": "#69db7c",
    "green5": "#51cf66",
    "green6": "#40c057",
    "green7": "#37b24d",
    "green8": "#2f9e44",
    "green9": "#2b8a3e",
    "green10": "#237032",
    "green11": "#1b5727",
    "green12": "#133d1b",
    "lime0": "#f4fce3",
    "lime1": "#e9fac8",
    "lime2": "#d8f5a2",
    "lime3": "#c0eb75",
    "lime4": "#a9e34b",
    "lime5": "#94d82d",
    "lime6": "#82c91e",
    "lime7": "#74b816",
    "lime8": "#66a80f",
    "lime9": "#5c940d",
    "lime10": "#4c7a0b",
    "lime11": "#3c6109",
    "lime12": "#2c4706",
    "yellow0": "#fff9db",
    "yellow1": "#fff3bf",
    "yellow2": "#ffec99",
    "yellow3": "#ffe066",
    "yellow4": "#ffd43b",
    "yellow5": "#fcc419",
    "yellow6": "#fab005",
    "yellow7": "#f59f00",
    "yellow8": "#f08c00",
    "yellow9": "#e67700",
    "yellow10": "#b35c00",
    "yellow11": "#804200",
    "yellow12": "#663500",
    "orange0": "#fff4e6",
    "orange1": "#ffe8cc",
    "orange2": "#ffd8a8",
    "orange3": "#ffc078",
    "orange4": "#ffa94d",
    "orange5": "#ff922b",
    "orange6": "#fd7e14",
    "orange7": "#f76707",
    "orange8": "#e8590c",
    "orange9": "#d9480f",
    "orange10": "#bf400d",
    "orange11": "#99330b",
    "orange12": "#802b09",
    "choco0": "#fff8dc",
    "choco1": "#fce1bc",
    "choco2": "#f7ca9e",
    "choco3": "#f1b280",
    "choco4": "#e99b62",
    "choco5": "#df8545",
    "choco6": "#d46e25",
    "choco7": "#bd5f1b",
    "choco8": "#a45117",
    "choco9": "#8a4513",
    "choco10": "#703a13",
    "choco11": "#572f12",
    "choco12": "#3d210d",
    "brown0": "#faf4eb",
    "brown1": "#ede0d1",
    "brown2": "#e0cab7",
    "brown3": "#d3b79e",
    "brown4": "#c5a285",
    "brown5": "#b78f6d",
    "brown6": "#a87c56",
    "brown7": "#956b47",
    "brown8": "#825b3a",
    "brown9": "#6f4b2d",
    "brown10": "#5e3a21",
    "brown11": "#4e2b15",
    "brown12": "#422412",
    "sand0": "#f8fafb",
    "sand1": "#e6e4dc",
    "sand2": "#d5cfbd",
    "sand3": "#c2b9a0",
    "sand4": "#aea58c",
    "sand5": "#9a9178",
    "sand6": "#867c65",
    "sand7": "#736a53",
    "sand8": "#5f5746",
    "sand9": "#4b4639",
    "sand10": "#38352d",
    "sand11": "#252521",
    "sand12": "#121210",
    "camo0": "#f9fbe7",
    "camo1": "#e8ed9c",
    "camo2": "#d2df4e",
    "camo3": "#c2ce34",
    "camo4": "#b5bb2e",
    "camo5": "#a7a827",
    "camo6": "#999621",
    "camo7": "#8c851c",
    "camo8": "#7e7416",
    "camo9": "#6d6414",
    "camo10": "#5d5411",
    "camo11": "#4d460e",
    "camo12": "#36300a",
    "jungle0": "#ecfeb0",
    "jungle1": "#def39a",
    "jungle2": "#d0e884",
    "jungle3": "#c2dd6e",
    "jungle4": "#b5d15b",
    "jungle5": "#a8c648",
    "jungle6": "#9bbb36",
    "jungle7": "#8fb024",
    "jungle8": "#84a513",
    "jungle9": "#7a9908",
    "jungle10": "#658006",
    "jungle11": "#516605",
    "jungle12": "#3d4d04",
    "gray0Hsl": "210 17% 98%",
    "gray1Hsl": "210 17% 95%",
    "gray2Hsl": "210 16% 93%",
    "gray3Hsl": "210 14% 89%",
    "gray4Hsl": "210 14% 83%",
    "gray5Hsl": "210 11% 71%",
    "gray6Hsl": "210 7% 56%",
    "gray7Hsl": "210 9% 31%",
    "gray8Hsl": "210 10% 23%",
    "gray9Hsl": "210 11% 15%",
    "gray10Hsl": "214 14% 10%",
    "gray11Hsl": "216 16% 6%",
    "gray12Hsl": "210 40% 2%",
    "stone0Hsl": "200 27% 98%",
    "stone1Hsl": "210 18% 96%",
    "stone2Hsl": "210 11% 93%",
    "stone3Hsl": "192 9% 89%",
    "stone4Hsl": "197 8% 83%",
    "stone5Hsl": "202 5% 71%",
    "stone6Hsl": "200 3% 60%",
    "stone7Hsl": "180 2% 50%",
    "stone8Hsl": "160 1% 41%",
    "stone9Hsl": "90 1% 31%",
    "stone10Hsl": "60 3% 22%",
    "stone11Hsl": "60 6% 14%",
    "stone12Hsl": "60 6% 7%",
    "red0Hsl": "0 100% 98%",
    "red1Hsl": "0 100% 95%",
    "red2Hsl": "0 100% 89%",
    "red3Hsl": "0 100% 83%",
    "red4Hsl": "0 100% 76%",
    "red5Hsl": "0 100% 71%",
    "red6Hsl": "0 94% 65%",
    "red7Hsl": "0 86% 59%",
    "red8Hsl": "0 74% 54%",
    "red9Hsl": "0 65% 48%",
    "red10Hsl": "0 65% 42%",
    "red11Hsl": "0 65% 36%",
    "red12Hsl": "0 66% 30%",
    "pink0Hsl": "336 100% 97%",
    "pink1Hsl": "336 100% 94%",
    "pink2Hsl": "338 91% 87%",
    "pink3Hsl": "339 90% 81%",
    "pink4Hsl": "339 88% 74%",
    "pink5Hsl": "339 82% 67%",
    "pink6Hsl": "339 76% 59%",
    "pink7Hsl": "339 67% 52%",
    "pink8Hsl": "339 68% 45%",
    "pink9Hsl": "339 69% 38%",
    "pink10Hsl": "339 70% 32%",
    "pink11Hsl": "339 69% 27%",
    "pink12Hsl": "339 70% 21%",
    "purple0Hsl": "280 67% 96%",
    "purple1Hsl": "287 77% 92%",
    "purple2Hsl": "288 86% 86%",
    "purple3Hsl": "289 85% 78%",
    "purple4Hsl": "288 83% 71%",
    "purple5Hsl": "288 75% 64%",
    "purple6Hsl": "288 67% 58%",
    "purple7Hsl": "288 56% 52%",
    "purple8Hsl": "288 54% 46%",
    "purple9Hsl": "288 54% 40%",
    "purple10Hsl": "288 55% 33%",
    "purple11Hsl": "288 56% 26%",
    "purple12Hsl": "288 55% 20%",
    "violet0Hsl": "252 100% 97%",
    "violet1Hsl": "257 100% 93%",
    "violet2Hsl": "256 100% 87%",
    "violet3Hsl": "255 94% 79%",
    "violet4Hsl": "255 93% 72%",
    "violet5Hsl": "255 91% 67%",
    "violet6Hsl": "255 86% 63%",
    "violet7Hsl": "255 78% 60%",
    "violet8Hsl": "255 67% 55%",
    "violet9Hsl": "255 53% 50%",
    "violet10Hsl": "255 53% 44%",
    "violet11Hsl": "255 53% 37%",
    "violet12Hsl": "255 53% 31%",
    "indigo0Hsl": "223 100% 96%",
    "indigo1Hsl": "225 100% 93%",
    "indigo2Hsl": "228 100% 86%",
    "indigo3Hsl": "228 100% 78%",
    "indigo4Hsl": "228 96% 72%",
    "indigo5Hsl": "228 94% 67%",
    "indigo6Hsl": "228 89% 63%",
    "indigo7Hsl": "228 81% 59%",
    "indigo8Hsl": "228 69% 55%",
    "indigo9Hsl": "230 57% 50%",
    "indigo10Hsl": "230 57% 43%",
    "indigo11Hsl": "230 57% 37%",
    "indigo12Hsl": "230 57% 30%",
    "blue0Hsl": "205 100% 95%",
    "blue1Hsl": "206 100% 91%",
    "blue2Hsl": "206 100% 82%",
    "blue3Hsl": "206 96% 72%",
    "blue4Hsl": "207 91% 64%",
    "blue5Hsl": "207 86% 57%",
    "blue6Hsl": "208 80% 52%",
    "blue7Hsl": "208 77% 47%",
    "blue8Hsl": "209 77% 43%",
    "blue9Hsl": "209 75% 38%",
    "blue10Hsl": "209 76% 32%",
    "blue11Hsl": "209 75% 27%",
    "blue12Hsl": "209 76% 21%",
    "cyan0Hsl": "185 81% 94%",
    "cyan1Hsl": "185 84% 88%",
    "cyan2Hsl": "186 77% 77%",
    "cyan3Hsl": "187 74% 65%",
    "cyan4Hsl": "187 69% 55%",
    "cyan5Hsl": "188 72% 47%",
    "cyan6Hsl": "187 80% 42%",
    "cyan7Hsl": "188 83% 37%",
    "cyan8Hsl": "189 85% 32%",
    "cyan9Hsl": "189 85% 28%",
    "cyan10Hsl": "189 84% 23%",
    "cyan11Hsl": "190 84% 17%",
    "cyan12Hsl": "189 84% 12%",
    "teal0Hsl": "161 79% 95%",
    "teal1Hsl": "160 85% 87%",
    "teal2Hsl": "162 78% 77%",
    "teal3Hsl": "162 72% 65%",
    "teal4Hsl": "162 68% 54%",
    "teal5Hsl": "162 73% 46%",
    "teal6Hsl": "162 82% 40%",
    "teal7Hsl": "162 87% 35%",
    "teal8Hsl": "162 88% 30%",
    "teal9Hsl": "162 88% 26%",
    "teal10Hsl": "162 89% 21%",
    "teal11Hsl": "162 88% 16%",
    "teal12Hsl": "163 89% 11%",
    "green0Hsl": "131 67% 95%",
    "green1Hsl": "128 76% 90%",
    "green2Hsl": "128 71% 82%",
    "green3Hsl": "129 68% 73%",
    "green4Hsl": "130 61% 64%",
    "green5Hsl": "130 57% 56%",
    "green6Hsl": "131 50% 50%",
    "green7Hsl": "131 53% 46%",
    "green8Hsl": "131 54% 40%",
    "green9Hsl": "132 52% 35%",
    "green10Hsl": "132 52% 29%",
    "green11Hsl": "132 53% 22%",
    "green12Hsl": "131 53% 16%",
    "lime0Hsl": "79 81% 94%",
    "lime1Hsl": "80 83% 88%",
    "lime2Hsl": "81 81% 80%",
    "lime3Hsl": "82 75% 69%",
    "lime4Hsl": "83 73% 59%",
    "lime5Hsl": "84 69% 51%",
    "lime6Hsl": "85 74% 45%",
    "lime7Hsl": "85 79% 40%",
    "lime8Hsl": "86 84% 36%",
    "lime9Hsl": "85 84% 32%",
    "lime10Hsl": "85 83% 26%",
    "lime11Hsl": "85 83% 21%",
    "lime12Hsl": "85 84% 15%",
    "yellow0Hsl": "50 100% 93%",
    "yellow1Hsl": "49 100% 87%",
    "yellow2Hsl": "49 100% 80%",
    "yellow3Hsl": "48 100% 70%",
    "yellow4Hsl": "47 100% 62%",
    "yellow5Hsl": "45 97% 54%",
    "yellow6Hsl": "42 96% 50%",
    "yellow7Hsl": "39 100% 48%",
    "yellow8Hsl": "35 100% 47%",
    "yellow9Hsl": "31 100% 45%",
    "yellow10Hsl": "31 100% 35%",
    "yellow11Hsl": "31 100% 25%",
    "yellow12Hsl": "31 100% 20%",
    "orange0Hsl": "34 100% 95%",
    "orange1Hsl": "33 100% 90%",
    "orange2Hsl": "33 100% 83%",
    "orange3Hsl": "32 100% 74%",
    "orange4Hsl": "31 100% 65%",
    "orange5Hsl": "29 100% 58%",
    "orange6Hsl": "27 98% 54%",
    "orange7Hsl": "24 94% 50%",
    "orange8Hsl": "21 90% 48%",
    "orange9Hsl": "17 87% 45%",
    "orange10Hsl": "17 87% 40%",
    "orange11Hsl": "17 87% 32%",
    "orange12Hsl": "17 87% 27%",
    "choco0Hsl": "48 100% 93%",
    "choco1Hsl": "35 91% 86%",
    "choco2Hsl": "30 85% 79%",
    "choco3Hsl": "27 80% 72%",
    "choco4Hsl": "25 75% 65%",
    "choco5Hsl": "25 71% 57%",
    "choco6Hsl": "25 70% 49%",
    "choco7Hsl": "25 75% 42%",
    "choco8Hsl": "25 75% 37%",
    "choco9Hsl": "25 76% 31%",
    "choco10Hsl": "25 71% 26%",
    "choco11Hsl": "25 66% 21%",
    "choco12Hsl": "25 65% 15%",
    "brown0Hsl": "36 60% 95%",
    "brown1Hsl": "32 44% 87%",
    "brown2Hsl": "28 40% 80%",
    "brown3Hsl": "28 38% 72%",
    "brown4Hsl": "27 36% 65%",
    "brown5Hsl": "28 34% 57%",
    "brown6Hsl": "28 32% 50%",
    "brown7Hsl": "28 35% 43%",
    "brown8Hsl": "28 38% 37%",
    "brown9Hsl": "27 42% 31%",
    "brown10Hsl": "25 48% 25%",
    "brown11Hsl": "23 58% 19%",
    "brown12Hsl": "22 57% 16%",
    "sand0Hsl": "200 27% 98%",
    "sand1Hsl": "48 17% 88%",
    "sand2Hsl": "45 22% 79%",
    "sand3Hsl": "44 22% 69%",
    "sand4Hsl": "44 17% 62%",
    "sand5Hsl": "44 14% 54%",
    "sand6Hsl": "42 14% 46%",
    "sand7Hsl": "43 16% 39%",
    "sand8Hsl": "41 15% 32%",
    "sand9Hsl": "43 14% 26%",
    "sand10Hsl": "44 11% 20%",
    "sand11Hsl": "60 6% 14%",
    "sand12Hsl": "60 6% 7%",
    "camo0Hsl": "66 71% 95%",
    "camo1Hsl": "64 69% 77%",
    "camo2Hsl": "65 69% 59%",
    "camo3Hsl": "65 61% 51%",
    "camo4Hsl": "63 61% 46%",
    "camo5Hsl": "60 62% 41%",
    "camo6Hsl": "59 65% 36%",
    "camo7Hsl": "56 67% 33%",
    "camo8Hsl": "54 70% 29%",
    "camo9Hsl": "54 69% 25%",
    "camo10Hsl": "53 69% 22%",
    "camo11Hsl": "53 69% 18%",
    "camo12Hsl": "52 69% 13%",
    "jungle0Hsl": "74 98% 84%",
    "jungle1Hsl": "74 79% 78%",
    "jungle2Hsl": "74 68% 71%",
    "jungle3Hsl": "75 62% 65%",
    "jungle4Hsl": "74 56% 59%",
    "jungle5Hsl": "74 53% 53%",
    "jungle6Hsl": "74 55% 47%",
    "jungle7Hsl": "74 66% 42%",
    "jungle8Hsl": "74 79% 36%",
    "jungle9Hsl": "73 90% 32%",
    "jungle10Hsl": "73 91% 26%",
    "jungle11Hsl": "73 91% 21%",
    "jungle12Hsl": "73 90% 16%",
    "fontSystemUi": "system-ui, sans-serif",
    "fontTransitional": "Charter, Bitstream Charter, Sitka Text, Cambria, serif",
    "fontOldStyle": "Iowan Old Style, Palatino Linotype, URW Palladio L, P052, serif",
    "fontHumanist": "Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif",
    "fontGeometricHumanist": "Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif",
    "fontClassicalHumanist": "Optima, Candara, Noto Sans, source-sans-pro, sans-serif",
    "fontNeoGrotesque": "Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif",
    "fontMonospaceSlabSerif": "Nimbus Mono PS, Courier New, monospace",
    "fontMonospaceCode": "Dank Mono,Operator Mono, Inconsolata, Fira Mono, ui-monospace, SF Mono, Monaco, Droid Sans Mono, Source Code Pro, Cascadia Code, Menlo, Consolas, DejaVu Sans Mono, monospace",
    "fontIndustrial": "Bahnschrift, DIN Alternate, Franklin Gothic Medium, Nimbus Sans Narrow, sans-serif-condensed, sans-serif",
    "fontRoundedSans": "ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif",
    "fontSlabSerif": "Rockwell, Rockwell Nova, Roboto Slab, DejaVu Serif, Sitka Small, serif",
    "fontAntique": "Superclarendon, Bookman Old Style, URW Bookman, URW Bookman L, Georgia Pro, Georgia, serif",
    "fontDidone": "Didot, Bodoni MT, Noto Serif Display, URW Palladio L, P052, Sylfaen, serif",
    "fontHandwritten": "Segoe Print, Bradley Hand, Chilanka, TSCu_Comic, casual, cursive",
    "fontSans": "var(--font-system-ui)",
    "fontSerif": "ui-serif, serif",
    "fontMono": "var(--font-monospace-code)",
    "fontWeight1": "100",
    "fontWeight2": "200",
    "fontWeight3": "300",
    "fontWeight4": "400",
    "fontWeight5": "500",
    "fontWeight6": "600",
    "fontWeight7": "700",
    "fontWeight8": "800",
    "fontWeight9": "900",
    "fontLineheight00": ".95",
    "fontLineheight0": "1.1",
    "fontLineheight1": "1.25",
    "fontLineheight2": "1.375",
    "fontLineheight3": "1.5",
    "fontLineheight4": "1.75",
    "fontLineheight5": "2",
    "fontLetterspacing0": "-.05em",
    "fontLetterspacing1": ".025em",
    "fontLetterspacing2": ".050em",
    "fontLetterspacing3": ".075em",
    "fontLetterspacing4": ".150em",
    "fontLetterspacing5": ".500em",
    "fontLetterspacing6": ".750em",
    "fontLetterspacing7": "1em",
    "fontSize00": ".5rem",
    "fontSize0": ".75rem",
    "fontSize1": "1rem",
    "fontSize2": "1.1rem",
    "fontSize3": "1.25rem",
    "fontSize4": "1.5rem",
    "fontSize5": "2rem",
    "fontSize6": "2.5rem",
    "fontSize7": "3rem",
    "fontSize8": "3.5rem",
    "fontSizeFluid0": "clamp(.75rem, 2vw, 1rem)",
    "fontSizeFluid1": "clamp(1rem, 4vw, 1.5rem)",
    "fontSizeFluid2": "clamp(1.5rem, 6vw, 2.5rem)",
    "fontSizeFluid3": "clamp(2rem, 9vw, 3.5rem)",
    "borderSize1": "1px",
    "borderSize2": "2px",
    "borderSize3": "5px",
    "borderSize4": "10px",
    "borderSize5": "25px",
    "radius1": "2px",
    "radius2": "5px",
    "radius3": "1rem",
    "radius4": "2rem",
    "radius5": "4rem",
    "radius6": "8rem",
    "radiusDrawn1": "255px 15px 225px 15px / 15px 225px 15px 255px",
    "radiusDrawn2": "125px 10px 20px 185px / 25px 205px 205px 25px",
    "radiusDrawn3": "15px 255px 15px 225px / 225px 15px 255px 15px",
    "radiusDrawn4": "15px 25px 155px 25px / 225px 150px 25px 115px",
    "radiusDrawn5": "250px 25px 15px 20px / 15px 80px 105px 115px",
    "radiusDrawn6": "28px 100px 20px 15px / 150px 30px 205px 225px",
    "radiusRound": "1e5px",
    "radiusBlob1": "30% 70% 70% 30% / 53% 30% 70% 47%",
    "radiusBlob2": "53% 47% 34% 66% / 63% 46% 54% 37%",
    "radiusBlob3": "37% 63% 56% 44% / 49% 56% 44% 51%",
    "radiusBlob4": "63% 37% 37% 63% / 43% 37% 63% 57%",
    "radiusBlob5": "49% 51% 48% 52% / 57% 44% 56% 43%",
    "radiusConditional1": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-1))",
    "radiusConditional2": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-2))",
    "radiusConditional3": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-3))",
    "radiusConditional4": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-4))",
    "radiusConditional5": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-5))",
    "radiusConditional6": "clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-6))",
    "ratioSquare": "1",
    "ratioLandscape": "4/3",
    "ratioPortrait": "3/4",
    "ratioWidescreen": "16/9",
    "ratioUltrawide": "18/5",
    "ratioGolden": "1.6180/1",
    "ease1": "cubic-bezier(.25, 0, .5, 1)",
    "ease2": "cubic-bezier(.25, 0, .4, 1)",
    "ease3": "cubic-bezier(.25, 0, .3, 1)",
    "ease4": "cubic-bezier(.25, 0, .2, 1)",
    "ease5": "cubic-bezier(.25, 0, .1, 1)",
    "easeIn1": "cubic-bezier(.25, 0, 1, 1)",
    "easeIn2": "cubic-bezier(.50, 0, 1, 1)",
    "easeIn3": "cubic-bezier(.70, 0, 1, 1)",
    "easeIn4": "cubic-bezier(.90, 0, 1, 1)",
    "easeIn5": "cubic-bezier(1, 0, 1, 1)",
    "easeOut1": "cubic-bezier(0, 0, .75, 1)",
    "easeOut2": "cubic-bezier(0, 0, .50, 1)",
    "easeOut3": "cubic-bezier(0, 0, .3, 1)",
    "easeOut4": "cubic-bezier(0, 0, .1, 1)",
    "easeOut5": "cubic-bezier(0, 0, 0, 1)",
    "easeInOut1": "cubic-bezier(.1, 0, .9, 1)",
    "easeInOut2": "cubic-bezier(.3, 0, .7, 1)",
    "easeInOut3": "cubic-bezier(.5, 0, .5, 1)",
    "easeInOut4": "cubic-bezier(.7, 0, .3, 1)",
    "easeInOut5": "cubic-bezier(.9, 0, .1, 1)",
    "easeElasticOut1": "cubic-bezier(.5, .75, .75, 1.25)",
    "easeElasticOut2": "cubic-bezier(.5, 1, .75, 1.25)",
    "easeElasticOut3": "cubic-bezier(.5, 1.25, .75, 1.25)",
    "easeElasticOut4": "cubic-bezier(.5, 1.5, .75, 1.25)",
    "easeElasticOut5": "cubic-bezier(.5, 1.75, .75, 1.25)",
    "easeElasticIn1": "cubic-bezier(.5, -0.25, .75, 1)",
    "easeElasticIn2": "cubic-bezier(.5, -0.50, .75, 1)",
    "easeElasticIn3": "cubic-bezier(.5, -0.75, .75, 1)",
    "easeElasticIn4": "cubic-bezier(.5, -1.00, .75, 1)",
    "easeElasticIn5": "cubic-bezier(.5, -1.25, .75, 1)",
    "easeElasticInOut1": "cubic-bezier(.5, -.1, .1, 1.5)",
    "easeElasticInOut2": "cubic-bezier(.5, -.3, .1, 1.5)",
    "easeElasticInOut3": "cubic-bezier(.5, -.5, .1, 1.5)",
    "easeElasticInOut4": "cubic-bezier(.5, -.7, .1, 1.5)",
    "easeElasticInOut5": "cubic-bezier(.5, -.9, .1, 1.5)",
    "easeStep1": "steps(2)",
    "easeStep2": "steps(3)",
    "easeStep3": "steps(4)",
    "easeStep4": "steps(7)",
    "easeStep5": "steps(10)",
    "easeElastic1": "var(--ease-elastic-out-1)",
    "easeElastic2": "var(--ease-elastic-out-2)",
    "easeElastic3": "var(--ease-elastic-out-3)",
    "easeElastic4": "var(--ease-elastic-out-4)",
    "easeElastic5": "var(--ease-elastic-out-5)",
    "easeSquish1": "var(--ease-elastic-in-out-1)",
    "easeSquish2": "var(--ease-elastic-in-out-2)",
    "easeSquish3": "var(--ease-elastic-in-out-3)",
    "easeSquish4": "var(--ease-elastic-in-out-4)",
    "easeSquish5": "var(--ease-elastic-in-out-5)",
    "easeSpring1": "linear(\n    0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%,\n    0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%,\n    1.001\n  )",
    "easeSpring2": "linear(\n    0, 0.007, 0.029 2.2%, 0.118 4.7%, 0.625 14.4%, 0.826 19%, 0.902, 0.962,\n    1.008 26.1%, 1.041 28.7%, 1.064 32.1%, 1.07 36%, 1.061 40.5%, 1.015 53.4%,\n    0.999 61.6%, 0.995 71.2%, 1\n  )",
    "easeSpring3": "linear(\n    0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077,\n    1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,\n    1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,\n    0.997 69.8%, 1.003 76.9%, 1\n  )",
    "easeSpring4": "linear(\n    0, 0.009, 0.037 1.7%, 0.153 3.6%, 0.776 10.3%, 1.001, 1.142 16%, 1.185,\n    1.209 19%, 1.215 19.9% 20.8%, 1.199, 1.165 25%, 1.056 30.3%, 1.008 33%, 0.973,\n    0.955 39.2%, 0.953 41.1%, 0.957 43.3%, 0.998 53.3%, 1.009 59.1% 63.7%,\n    0.998 78.9%, 1\n  )",
    "easeSpring5": "linear(\n    0, 0.01, 0.04 1.6%, 0.161 3.3%, 0.816 9.4%, 1.046, 1.189 14.4%, 1.231,\n    1.254 17%, 1.259, 1.257 18.6%, 1.236, 1.194 22.3%, 1.057 27%, 0.999 29.4%,\n    0.955 32.1%, 0.942, 0.935 34.9%, 0.933, 0.939 38.4%, 1 47.3%, 1.011,\n    1.017 52.6%, 1.016 56.4%, 1 65.2%, 0.996 70.2%, 1.001 87.2%, 1\n  )",
    "easeBounce1": "linear(\n    0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141, 0.191, 0.25, 0.316, 0.391 36.8%,\n    0.563, 0.766, 1 58.8%, 0.946, 0.908 69.1%, 0.895, 0.885, 0.879, 0.878, 0.879,\n    0.885, 0.895, 0.908 89.7%, 0.946, 1\n  )",
    "easeBounce2": "linear(\n    0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141 15.1%, 0.25, 0.391, 0.562, 0.765,\n    1, 0.892 45.2%, 0.849, 0.815, 0.788, 0.769, 0.757, 0.753, 0.757, 0.769, 0.788,\n    0.815, 0.85, 0.892 75.2%, 1 80.2%, 0.973, 0.954, 0.943, 0.939, 0.943, 0.954,\n    0.973, 1\n  )",
    "easeBounce3": "linear(\n    0, 0.004, 0.016, 0.035, 0.062, 0.098, 0.141 11.4%, 0.25, 0.39, 0.562, 0.764,\n    1 30.3%, 0.847 34.8%, 0.787, 0.737, 0.699, 0.672, 0.655, 0.65, 0.656, 0.672,\n    0.699, 0.738, 0.787, 0.847 61.7%, 1 66.2%, 0.946, 0.908, 0.885 74.2%, 0.879,\n    0.878, 0.879, 0.885 79.5%, 0.908, 0.946, 1 87.4%, 0.981, 0.968, 0.96, 0.957,\n    0.96, 0.968, 0.981, 1\n  )",
    "easeBounce4": "linear(\n    0, 0.004, 0.016 3%, 0.062, 0.141, 0.25, 0.391, 0.562 18.2%, 1 24.3%, 0.81,\n    0.676 32.3%, 0.629, 0.595, 0.575, 0.568, 0.575, 0.595, 0.629, 0.676 48.2%,\n    0.811, 1 56.2%, 0.918, 0.86, 0.825, 0.814, 0.825, 0.86, 0.918, 1 77.2%,\n    0.94 80.6%, 0.925, 0.92, 0.925, 0.94 87.5%, 1 90.9%, 0.974, 0.965, 0.974, 1\n  )",
    "easeBounce5": "linear(\n    0, 0.004, 0.016 2.5%, 0.063, 0.141, 0.25 10.1%, 0.562, 1 20.2%, 0.783, 0.627,\n    0.534 30.9%, 0.511, 0.503, 0.511, 0.534 38%, 0.627, 0.782, 1 48.7%, 0.892,\n    0.815, 0.769 56.3%, 0.757, 0.753, 0.757, 0.769 61.3%, 0.815, 0.892, 1 68.8%,\n    0.908 72.4%, 0.885, 0.878, 0.885, 0.908 79.4%, 1 83%, 0.954 85.5%, 0.943,\n    0.939, 0.943, 0.954 90.5%, 1 93%, 0.977, 0.97, 0.977, 1\n  )",
    "squircle1": "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 18.75 18.75, 0 75, 0 S 150, 18.75 150, 75 131.25, 150 75, 150 0, 131.25 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
    "squircle2": "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 13.500000000000004 13.500000000000004, 0 75, 0 S 150, 13.500000000000004 150, 75 136.5, 150 75, 150 0, 136.5 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
    "squircle3": "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 5.999999999999997 5.999999999999997, 0 75, 0 S 150, 5.999999999999997 150, 75 144, 150 75, 150 0, 144 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
    "gradient1": "linear-gradient(to bottom right,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)",
    "gradient2": "linear-gradient(to bottom right,#48005c, #8300e2, #a269ff)",
    "gradient3": "\n    radial-gradient(\n      circle at top right, \n      hsl(180 100% 50%), hsl(180 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(328 100% 54%), hsl(328 100% 54% / 0%)\n    )",
    "gradient4": "linear-gradient(to bottom right,#00F5A0,#00D9F5)",
    "gradient5": "conic-gradient(from -270deg at 75% 110%, fuchsia, floralwhite)",
    "gradient6": "conic-gradient(from -90deg at top left, black, white)",
    "gradient7": "linear-gradient(to bottom right,#72C6EF,#004E8F)",
    "gradient8": "conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111)",
    "gradient9": "conic-gradient(from .5turn at bottom center, lightblue, white)",
    "gradient10": "conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)",
    "gradient11": "conic-gradient(at bottom left, deeppink, cyan)",
    "gradient12": "conic-gradient(from 90deg at 25% -10%, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85)",
    "gradient13": "radial-gradient(circle at 50% 200%, #000142, #3b0083, #b300c3, #ff059f, #ff4661, #ffad86, #fff3c7)",
    "gradient14": "conic-gradient(at top right, lime, cyan)",
    "gradient15": "linear-gradient(to bottom right, #c7d2fe, #fecaca, #fef3c7)",
    "gradient16": "radial-gradient(circle at 50% -250%, #374151, #111827, #000)",
    "gradient17": "conic-gradient(from -90deg at 50% -25%, blue, blueviolet)",
    "gradient18": "\n    linear-gradient(0deg,   hsla(0   100% 50% / 80%), hsla(0   100% 50% / 0) 75%),\n    linear-gradient(60deg,  hsla(60  100% 50% / 80%), hsla(60  100% 50% / 0) 75%),\n    linear-gradient(120deg, hsla(120 100% 50% / 80%), hsla(120 100% 50% / 0) 75%),\n    linear-gradient(180deg, hsla(180 100% 50% / 80%), hsla(180 100% 50% / 0) 75%),\n    linear-gradient(240deg, hsla(240 100% 50% / 80%), hsla(240 100% 50% / 0) 75%),\n    linear-gradient(300deg, hsla(300 100% 50% / 80%), hsla(300 100% 50% / 0) 75%)\n  ",
    "gradient19": "linear-gradient(to bottom right,#ffe259,#ffa751)",
    "gradient20": "conic-gradient(from -135deg at -10% center, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)",
    "gradient21": "conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)",
    "gradient22": "linear-gradient(to bottom right,#acb6e5,#86fde8)",
    "gradient23": "linear-gradient(to bottom right,#536976,#292E49)",
    "gradient24": "conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)",
    "gradient25": "conic-gradient(at 125% 50%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)",
    "gradient26": "linear-gradient(to bottom right,#9796f0,#fbc7d4)",
    "gradient27": "conic-gradient(from .5turn at bottom left, deeppink, rebeccapurple)",
    "gradient28": "conic-gradient(from -90deg at 50% 105%, white, orchid)",
    "gradient29": "\n    radial-gradient(\n      circle at top right, \n      hsl(250 100% 85%), hsl(250 100% 85% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(220 90% 75%), hsl(220 90% 75% / 0%)\n    )",
    "gradient30": "radial-gradient(\n      circle at top right, \n      hsl(150 100% 50%), hsl(150 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(150 100% 84%), hsl(150 100% 84% / 0%)\n    )",
    "noise1": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "noise2": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "noise3": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "noise4": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "noise5": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
    "noiseFilter1": "contrast(300%) brightness(100%)",
    "noiseFilter2": "contrast(200%) brightness(150%)",
    "noiseFilter3": "contrast(200%) brightness(250%)",
    "noiseFilter4": "contrast(200%) brightness(500%)",
    "noiseFilter5": "contrast(200%) brightness(1000%)",
    "shadowColor": "220 3% 15%",
    "shadowStrength": "1%",
    "shadowColor@media:dark": "220 40% 2%",
    "shadowStrength@media:dark": "25%",
    "innerShadowHighlight": "inset 0 -.5px 0 0 #fff, inset 0 .5px 0 0 #0001",
    "innerShadowHighlight@media:dark": "inset 0 -.5px 0 0 #fff1, inset 0 .5px 0 0 #0007",
    "shadow1": "0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
    "shadow2": "\n    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))",
    "shadow3": "\n    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))",
    "shadow4": "\n    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))",
    "shadow5": "\n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))",
    "shadow6": "\n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),\n    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))",
    "innerShadow0": "inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))",
    "innerShadow1": "inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "innerShadow2": "inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "innerShadow3": "inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "innerShadow4": "inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)",
    "layer1": 1,
    "layer2": 2,
    "layer3": 3,
    "layer4": 4,
    "layer5": 5,
    "layerImportant": 2147483647,
    "maskEdgeScoopBottom": "radial-gradient(20px at 50% 100%,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%",
    "maskEdgeScoopTop": "radial-gradient(20px at 50% 0,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%",
    "maskEdgeScoopVertical": "radial-gradient(20px at 50% 20px,#0000 97%,#000) 50% -20px/ calc(1.9 * 20px) 100%",
    "maskEdgeScoopLeft": "radial-gradient(20px at 0 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)",
    "maskEdgeScoopRight": "radial-gradient(20px at 100% 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)",
    "maskEdgeScoopHorizontal": "radial-gradient(20px at 20px 50%,#0000 97%,#000) -20px/ 100% calc(1.9 * 20px)",
    "maskEdgeScalloped": "\n    radial-gradient(farthest-side,#000 97%,#0000) 0 0 / 20px 20px round,\n    linear-gradient(#000 0 0) 50%/calc(100% - 20px) calc(100% - 20px) no-repeat\n  ",
    "maskEdgeScallopedBottom": "\n    linear-gradient(to top,#0000 20px,#000 0),\n    radial-gradient(20px at top,#000 97%,#0000) bottom / calc(1.9 * 20px) 20px\n  ",
    "maskEdgeScallopedTop": "\n    linear-gradient(to bottom,#0000 20px,#000 0),\n    radial-gradient(20px at bottom,#000 97%,#0000) top / calc(1.9 * 20px) 20px\n  ",
    "maskEdgeScallopedVertical": "\n    linear-gradient(0deg,#0000 calc(2 * 20px),#000 0) 0 20px,\n    radial-gradient(20px,#000 97%,#0000) 50% / calc(1.9 * 20px) calc(2 * 20px) repeat space\n  ",
    "maskEdgeScallopedLeft": "\n    linear-gradient(to right,#0000 20px,#000 0),\n    radial-gradient(20px at right,#000 97%,#0000) left / 20px calc(1.9 * 20px)\n  ",
    "maskEdgeScallopedRight": "\n    linear-gradient(to left,#0000 20px,#000 0),\n    radial-gradient(20px at left,#000 97%,#0000) right / 20px calc(1.9 * 20px)\n  ",
    "maskEdgeScallopedHorizontal": "\n    linear-gradient(-90deg,#0000 calc(2 * 20px),#000 0) 20px,\n    radial-gradient(20px,#000 97%,#0000) 50% / calc(2 * 20px) calc(1.9 * 20px) space repeat\n  ",
    "maskEdgeDripBottom": "\n    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 100% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ",
    "maskEdgeDripTop": "\n    radial-gradient(20px at top,#0000 97%,#000) 50% 20px / calc(2 * 20px) 100% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 1% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ",
    "maskEdgeDripVertical": "\n    radial-gradient(20px at top   ,#0000 97%,#000) 50%             20px  / calc(2 * 20px) 51% repeat-x,\n    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 51% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% -   20px) 1%  / calc(4 * 20px) calc(2 * 20px) repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 3*20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ",
    "maskEdgeDripLeft": "\n    radial-gradient(20px at left,#0000 97%,#000) 20px 50% / 100% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ",
    "maskEdgeDripRight": "\n    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 100% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ",
    "maskEdgeDripHorizontal": "\n    radial-gradient(20px at left ,#0000 97%,#000)             20px  50% / 51% calc(2 * 20px) repeat-y,  \n    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 51% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1%  calc(50% -   20px) / calc(2 * 20px) calc(4 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 3*20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ",
    "maskEdgeZigZagTop": "conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%",
    "maskEdgeZigZagBottom": "conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%",
    "maskEdgeZigZagLeft": "conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)",
    "maskEdgeZigZagRight": "conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)",
    "maskEdgeZigZagHorizontal": "\n    conic-gradient(from   45deg at left ,#0000,#000 1deg 90deg,#0000 91deg) left  / 51% calc(2 * 20px) repeat-y,\n    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right / 51% calc(2 * 20px) repeat-y\n  ",
    "maskEdgeZigZagVertical": "\n    conic-gradient(from 135deg at top   ,#0000,#000 1deg 90deg,#0000 91deg) top    / calc(2 * 20px) 51% repeat-x,\n    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom / calc(2 * 20px) 51% repeat-x\n  ",
    "maskCornerCutCircles1": "radial-gradient(1rem at 1rem 1rem,#0000 99%,#000) -1rem -1rem",
    "maskCornerCutCircles2": "radial-gradient(2rem at 2rem 2rem,#0000 99%,#000) -2rem -2rem",
    "maskCornerCutCircles3": "radial-gradient(4rem at 4rem 4rem,#0000 99%,#000) -4rem -4rem",
    "maskCornerCutSquares1": "conic-gradient(at calc(2*1rem) calc(2*1rem),#000 75%,#0000 0) -1rem -1rem",
    "maskCornerCutSquares2": "conic-gradient(at calc(2*2rem) calc(2*2rem),#000 75%,#0000 0) -2rem -2rem",
    "maskCornerCutSquares3": "conic-gradient(at calc(2*4rem) calc(2*4rem),#000 75%,#0000 0) -4rem -4rem",
    "maskCornerCutAngles1": "\n    conic-gradient(from -45deg at 1rem 1rem,#0000 25%,#000 0) \n    -1rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 1rem calc(100% - 1rem),#0000 25%,#000 0) \n    -1rem 100%/100% 51% repeat-x\n  ",
    "maskCornerCutAngles2": "\n    conic-gradient(from -45deg at 2rem 2rem,#0000 25%,#000 0) \n    -2rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 2rem calc(100% - 2rem),#0000 25%,#000 0) \n    -2rem 100%/100% 51% repeat-x\n  ",
    "maskCornerCutAngles3": "\n    conic-gradient(from -45deg at 4rem 4rem,#0000 25%,#000 0) \n    -4rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 4rem calc(100% - 4rem),#0000 25%,#000 0) \n    -4rem 100%/100% 51% repeat-x\n  "
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["gKzwS"], null, "parcelRequire94c2")

//# sourceMappingURL=index.80f74e06.js.map
