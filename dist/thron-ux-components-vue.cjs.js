/*!
 * thron-ux-components v.1.0.0
 * 2018 THRON
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//

var name = "th-button";

//Button has only css, not JS.
var script = {
	install: function install(Vue) {
		Vue.component(name, this);
	},
	// declare the props
	props: {
		materialIconName: String,
		iconClass: {
			type: String,
			default: ""
		},
		iconPosition: {
			type: String,
			validator: function validator(value) {
				return value === "left" || value === "right";
			},
			default: "left"
		}
	},
	computed: {
		cssClassIcon: function cssClassIcon() {
			return this.iconClass + " " + this.iconPosition;
		}
	},
	methods: {
		onclick: function onclick(e) {
			this.$emit("click", e);
		}
	},
	mounted: function mounted() {
		console.log("I AM BUTTON");
	}
};

var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "btn waves-effect waves-light", on: { click: _vm.onclick } }, [_vm._t("default"), _vm._v(" "), _vm.materialIconName ? _c("i", { staticClass: "material-icons", class: _vm.cssClassIcon }, [_vm._v("\n        " + _vm._s(_vm.materialIconName) + "\n    ")]) : _vm._e()], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

var __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};
/* style */
var __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-aac225c2_0", { source: "\nh1.button {\n  background-color: red;\n}\n\n/*# sourceMappingURL=Button.vue.map */", map: undefined, media: undefined });
};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = script$$1 || {};

  {
    component.__file = "/Users/alessandro.grosselle/Documents/projects/example-vue-rollup/src/vueWrapper/genericComponents/Button/Button.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = {};
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var BtnComponent$1 = /*#__PURE__*/__vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//
//
//
//

var name$1 = "th-modal";

//Button has only css, not JS.
var script$1 = {
	install: function install(Vue) {
		Vue.component(name$1, BtnComponent);
	},
	// declare the props
	props: {
		materialIconName: String,
		iconClass: {
			type: String,
			default: ""
		},
		iconPosition: {
			type: String,
			validator: function validator(value) {
				return value === "left" || value === "right";
			},
			default: "left"
		}
	},
	computed: {
		cssClassIcon: function cssClassIcon() {
			return this.iconClass + " " + this.iconPosition;
		}
	},
	methods: {
		onclick: function onclick(e) {
			this.$emit("click", e);
		}
	},
	mounted: function mounted() {
		console.log("I AM MODAL");
	}
};

var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "btn waves-effect waves-light", on: { click: _vm.onclick } }, [_vm._t("default"), _vm._v(" "), _vm.materialIconName ? _c("i", { staticClass: "material-icons", class: _vm.cssClassIcon }, [_vm._v("\n        " + _vm._s(_vm.materialIconName) + "\n    ")]) : _vm._e()], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

var __vue_template__$1 = typeof __vue_render__$1 !== 'undefined' ? { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 } : {};
/* style */
var __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-075f9006_0", { source: "\nh1.modal {\n  background-color: red;\n}\n\n/*# sourceMappingURL=Modal.vue.map */", map: undefined, media: undefined });
};
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = script || {};

  {
    component.__file = "/Users/alessandro.grosselle/Documents/projects/example-vue-rollup/src/vueWrapper/genericComponents/Modal/Modal.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$1() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = {};
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var ModalComponent = /*#__PURE__*/__vue_normalize__$1(__vue_template__$1, __vue_inject_styles__$1, typeof __vue_script__$1 === 'undefined' ? {} : __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, typeof __vue_create_injector__$1 !== 'undefined' ? __vue_create_injector__$1 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

exports.Button = BtnComponent$1;
exports.Modal = ModalComponent;
