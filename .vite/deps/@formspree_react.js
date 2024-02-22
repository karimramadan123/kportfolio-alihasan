import {
  CardElement,
  useElements,
  useStripe
} from "./chunk-MXBRX2LQ.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-HS7GO4I2.js";

// node_modules/@stripe/stripe-js/dist/pure.js
var require_pure = __commonJS({
  "node_modules/@stripe/stripe-js/dist/pure.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var V3_URL = "https://js.stripe.com/v3";
    var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
    var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
    var findScript = function findScript2() {
      var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (!V3_URL_REGEX.test(script.src)) {
          continue;
        }
        return script;
      }
      return null;
    };
    var injectScript = function injectScript2(params) {
      var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
      var script = document.createElement("script");
      script.src = "".concat(V3_URL).concat(queryString);
      var headOrBody = document.head || document.body;
      if (!headOrBody) {
        throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
      }
      headOrBody.appendChild(script);
      return script;
    };
    var registerWrapper = function registerWrapper2(stripe, startTime) {
      if (!stripe || !stripe._registerWrapper) {
        return;
      }
      stripe._registerWrapper({
        name: "stripe-js",
        version: "1.53.0",
        startTime
      });
    };
    var stripePromise = null;
    var loadScript = function loadScript2(params) {
      if (stripePromise !== null) {
        return stripePromise;
      }
      stripePromise = new Promise(function(resolve, reject) {
        if (typeof window === "undefined" || typeof document === "undefined") {
          resolve(null);
          return;
        }
        if (window.Stripe && params) {
          console.warn(EXISTING_SCRIPT_MESSAGE);
        }
        if (window.Stripe) {
          resolve(window.Stripe);
          return;
        }
        try {
          var script = findScript();
          if (script && params) {
            console.warn(EXISTING_SCRIPT_MESSAGE);
          } else if (!script) {
            script = injectScript(params);
          }
          script.addEventListener("load", function() {
            if (window.Stripe) {
              resolve(window.Stripe);
            } else {
              reject(new Error("Stripe.js not available"));
            }
          });
          script.addEventListener("error", function() {
            reject(new Error("Failed to load Stripe.js"));
          });
        } catch (error) {
          reject(error);
          return;
        }
      });
      return stripePromise;
    };
    var initStripe = function initStripe2(maybeStripe, args, startTime) {
      if (maybeStripe === null) {
        return null;
      }
      var stripe = maybeStripe.apply(void 0, args);
      registerWrapper(stripe, startTime);
      return stripe;
    };
    var validateLoadParams = function validateLoadParams2(params) {
      var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");
      if (params === null || _typeof(params) !== "object") {
        throw new Error(errorMessage);
      }
      if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === "boolean") {
        return params;
      }
      throw new Error(errorMessage);
    };
    var loadParams;
    var loadStripeCalled = false;
    var loadStripe = function loadStripe2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      loadStripeCalled = true;
      var startTime = Date.now();
      return loadScript(loadParams).then(function(maybeStripe) {
        return initStripe(maybeStripe, args, startTime);
      });
    };
    loadStripe.setLoadParameters = function(params) {
      if (loadStripeCalled && loadParams) {
        var validatedParams = validateLoadParams(params);
        var parameterKeys = Object.keys(validatedParams);
        var sameParameters = parameterKeys.reduce(function(previousValue, currentValue) {
          var _loadParams;
          return previousValue && params[currentValue] === ((_loadParams = loadParams) === null || _loadParams === void 0 ? void 0 : _loadParams[currentValue]);
        }, true);
        if (sameParameters) {
          return;
        }
      }
      if (loadStripeCalled) {
        throw new Error("You cannot change load parameters after calling loadStripe");
      }
      loadParams = validateLoadParams(params);
    };
    exports.loadStripe = loadStripe;
  }
});

// node_modules/@stripe/stripe-js/pure.js
var require_pure2 = __commonJS({
  "node_modules/@stripe/stripe-js/pure.js"(exports, module) {
    module.exports = require_pure();
  }
});

// node_modules/@formspree/react/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_pure = __toESM(require_pure2(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var Q = Object.create;
var M = Object.defineProperty;
var Z = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var G = Object.getPrototypeOf;
var W = Object.prototype.hasOwnProperty;
var X = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ee = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of q(t))
      !W.call(e, o) && o !== r && M(e, o, { get: () => t[o], enumerable: !(s = Z(t, o)) || s.enumerable });
  return e;
};
var A = (e, t, r) => (r = e != null ? Q(G(e)) : {}, ee(t || !e || !e.__esModule ? M(r, "default", { value: e, enumerable: true }) : r, e));
var C = X((Le, k) => {
  "use strict";
  var w = Object.defineProperty, te = Object.getOwnPropertyDescriptor, re = Object.getOwnPropertyNames, oe = Object.prototype.hasOwnProperty, se = (e, t) => {
    for (var r in t)
      w(e, r, { get: t[r], enumerable: true });
  }, ne = (e, t, r, s) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o of re(t))
        !oe.call(e, o) && o !== r && w(e, o, { get: () => t[o], enumerable: !(s = te(t, o)) || s.enumerable });
    return e;
  }, ie = (e) => ne(w({}, "__esModule", { value: true }), e), N = {};
  se(N, { Client: () => L, createClient: () => Y, getDefaultClient: () => be, isFieldError: () => le });
  k.exports = ie(N);
  var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ae = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  function de(e) {
    e = String(e);
    for (var t, r, s, o, n = "", m = 0, l = e.length % 3; m < e.length; ) {
      if ((r = e.charCodeAt(m++)) > 255 || (s = e.charCodeAt(m++)) > 255 || (o = e.charCodeAt(m++)) > 255)
        throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
      t = r << 16 | s << 8 | o, n += h.charAt(t >> 18 & 63) + h.charAt(t >> 12 & 63) + h.charAt(t >> 6 & 63) + h.charAt(t & 63);
    }
    return l ? n.slice(0, l - 3) + "===".substring(l) : n;
  }
  function pe(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ae.test(e))
      throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    e += "==".slice(2 - (e.length & 3));
    for (var t, r = "", s, o, n = 0; n < e.length; )
      t = h.indexOf(e.charAt(n++)) << 18 | h.indexOf(e.charAt(n++)) << 12 | (s = h.indexOf(e.charAt(n++))) << 6 | (o = h.indexOf(e.charAt(n++))), r += s === 64 ? String.fromCharCode(t >> 16 & 255) : o === 64 ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, t & 255);
    return r;
  }
  var me = "2.8.1", U = ((e) => (e.REQUIRED_FIELD_MISSING = "REQUIRED_FIELD_MISSING", e.REQUIRED_FIELD_EMPTY = "REQUIRED_FIELD_EMPTY", e.TYPE_EMAIL = "TYPE_EMAIL", e.TYPE_NUMERIC = "TYPE_NUMERIC", e.TYPE_TEXT = "TYPE_TEXT", e))(U || {});
  function le(e) {
    return e.code in U && e.field !== void 0;
  }
  function ce(e) {
    return e.errors !== void 0;
  }
  var ue = (e) => de(JSON.stringify(e)), fe = (e) => {
    let t = `@formspree/core@${me}`;
    return e ? `${e} ${t}` : t;
  }, ye = () => 1 * /* @__PURE__ */ new Date(), b = (e, t, r) => {
    e instanceof FormData ? e.append(t, r) : e = Object.assign(e, { [t]: r });
  }, he = async ({ stripePromise: e, response: t, responseData: r, payload: s, data: o, fetchImpl: n, request: m, url: l }) => {
    let f = await e.handleCardAction(r.stripe.paymentIntentClientSecret);
    if (f.error)
      return { response: t, body: { errors: [{ code: "STRIPE_CLIENT_ERROR", message: "Stripe SCA error", field: "paymentMethod" }] } };
    {
      s.paymentMethod.id || b(o, "paymentMethod", s.paymentMethod.id), b(o, "paymentIntent", f.paymentIntent.id), b(o, "resubmitKey", r.resubmitKey);
      let p = await n(l, { ...m, body: JSON.stringify({ paymentIntent: f.paymentIntent.id, resubmitKey: r.resubmitKey }) }), c = await p.json();
      return { response: p, body: c };
    }
  };
  function O({ body: e, response: t }) {
    return !ce(e) && (e == null ? void 0 : e.error) && (e = { errors: [{ message: e.error }] }), { body: e, response: t };
  }
  var Ee = () => navigator.webdriver || !!document.documentElement.getAttribute(pe("d2ViZHJpdmVy")) || !!window.callPhantom || !!window._phantom, ge = class {
    constructor() {
      this.loadedAt = ye(), this.webdriver = Ee();
    }
    teardown() {
    }
    data() {
      return { loadedAt: this.loadedAt, webdriver: this.webdriver };
    }
  }, L = class {
    constructor(e = {}) {
      this.project = e.project, this.stripePromise = e.stripePromise, typeof window < "u" && this.startBrowserSession();
    }
    startBrowserSession() {
      this.session || (this.session = new ge());
    }
    teardown() {
      this.session && this.session.teardown();
    }
    async submitForm(e, t, r = {}) {
      let s = r.endpoint || "https://formspree.io", o = r.fetchImpl || fetch, n = this.project ? `${s}/p/${this.project}/f/${e}` : `${s}/f/${e}`, m = (p) => p instanceof FormData ? p : JSON.stringify(p), l = { Accept: "application/json", "Formspree-Client": fe(r.clientName) };
      this.session && (l["Formspree-Session-Data"] = ue(this.session.data())), t instanceof FormData || (l["Content-Type"] = "application/json");
      let f = { method: "POST", mode: "cors", body: m(t), headers: l };
      if (this.stripePromise && r.createPaymentMethod) {
        let p = await r.createPaymentMethod();
        if (p.error)
          return { response: null, body: { errors: [{ code: "STRIPE_CLIENT_ERROR", message: "Error creating payment method", field: "paymentMethod" }] } };
        b(t, "paymentMethod", p.paymentMethod.id);
        let c = await o(n, { ...f, body: t }), y = await c.json();
        return y && y.stripe && y.stripe.requiresAction && y.resubmitKey ? await he({ stripePromise: this.stripePromise, responseData: y, response: c, payload: p, data: t, fetchImpl: o, request: f, url: n }) : O({ response: c, body: y });
      } else
        return o(n, f).then((p) => p.json().then((c) => O({ body: c, response: p }))).catch();
    }
  }, Y = (e) => new L(e), be = () => (v || (v = Y()), v), v;
});
var F = A(C());
var ve = (0, import_react.lazy)(() => import("./react-stripe.esm-M766AU7O.js").then((e) => ({ default: e.Elements })));
var j = import_react.default.createContext({ client: void 0 });
j.displayName = "Formspree";
var _;
var we = (e) => (_ || (_ = (0, import_pure.loadStripe)(e)), _);
var V = (e, t) => {
  let r = {};
  return e && (r.stripePromise = e), t && (r.project = t), (0, F.createClient)(r);
};
var Ce = (e) => {
  let [t, r] = (0, import_react.useState)(void 0), [s, o] = (0, import_react.useState)(V(t, e.project));
  return (0, import_react.useEffect)(() => (s.startBrowserSession(), () => {
    s.teardown();
  }), []), (0, import_react.useEffect)(() => {
    let n = async () => {
      let m = await we(e.stripePK);
      r(m);
    };
    e.stripePK && n();
  }, [e.stripePK]), (0, import_react.useEffect)(() => {
    t && o(V(t, e.project));
  }, [t]), import_react.default.createElement(j.Provider, { value: { client: s } }, e.stripePK ? import_react.default.createElement(import_react.default.Fragment, null, t && import_react.default.createElement(import_react.Suspense, { fallback: import_react.default.createElement("p", null, "....") }, import_react.default.createElement(ve, { stripe: t }, import_react.default.createElement(import_react.default.Fragment, null, e.children)))) : import_react.default.createElement(import_react.default.Fragment, null, e.children));
};
function T() {
  let e = (0, import_react.useContext)(j);
  return e.client ? e : { client: (0, F.getDefaultClient)() };
}
var $ = "2.4.1";
var Te = (e) => e.preventDefault !== void 0;
var Ie = (e, t = {}) => {
  let [r, s] = (0, import_react2.useState)(null), [o, n] = (0, import_react2.useState)(false), [m, l] = (0, import_react2.useState)(false), [f, p] = (0, import_react2.useState)([]), c = T(), y = t.client || c, I, R;
  if (!y)
    throw new Error("You must provide a Formspree client");
  if (!e)
    throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');
  c.client && c.client.stripePromise && (I = useStripe(), R = useElements());
  let g = !!t.debug, E = t.data;
  return [{ result: r, submitting: o, succeeded: m, errors: f }, async (P) => {
    let B = async (i) => {
      i.preventDefault();
      let d = i.target;
      if (d.tagName != "FORM")
        throw new Error("submit was triggered for a non-form element");
      return new FormData(d);
    }, a = Te(P) ? await B(P) : P, H = (i, d) => {
      a instanceof FormData ? a.append(i, d) : a = Object.assign(a, { [i]: d });
    };
    if (typeof E == "object")
      for (let i in E) {
        let d;
        typeof E[i] == "function" ? (d = E[i].call(null), typeof (d == null ? void 0 : d.then) == "function" && (d = await d)) : d = E[i], d !== void 0 && H(i, d);
      }
    let J = async () => {
      let i = { ...a.address_line1 && { line1: a.address_line1 }, ...a.address_line2 && { line2: a.address_line2 }, ...a.address_city && { city: a.address_city }, ...a.address_country && { country: a.address_country }, ...a.address_state && { state: a.address_state }, ...a.address_postal_code && { postal_code: a.address_postal_code } };
      return await I.createPaymentMethod({ type: "card", card: R.getElement(CardElement), billing_details: { ...a.name && { name: a.name }, ...a.email && { email: a.email }, ...a.phone && { phone: a.phone }, ...i && { address: i } } });
    };
    return n(true), c.client.submitForm(e, a, { endpoint: t.endpoint, clientName: `@formspree/react@${$}`, createPaymentMethod: c.client && c.client.stripePromise ? J : void 0 }).then((i) => {
      let d = i.response.status, S;
      return d === 200 ? (g && console.log("Form submitted", i), l(true), s(i), p([])) : d >= 400 && (S = i.body, S.errors ? (p(S.errors), g && console.log("Error", i)) : (p([{ message: "Unexpected error" }]), g && console.log("Unexpected error", i)), l(false)), i;
    }).catch((i) => {
      throw g && console.log("Unexpected error", i), l(false), i;
    }).finally(() => {
      n(false);
    });
  }, () => {
    n(false), l(false), p([]);
  }];
};
var Me = (e) => {
  let { prefix: t, field: r, errors: s, ...o } = e, n = (s || []).find((m) => m.field === r);
  return n ? import_react3.default.createElement("div", { ...o }, t, " ", n.message) : null;
};
var Ae = A(C());
var export_isFieldError = Ae.isFieldError;
export {
  CardElement,
  Ce as FormspreeProvider,
  Me as ValidationError,
  export_isFieldError as isFieldError,
  Ie as useForm,
  T as useFormspree
};
//# sourceMappingURL=@formspree_react.js.map
