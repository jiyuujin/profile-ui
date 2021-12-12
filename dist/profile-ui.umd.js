(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["profile-ui"] = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

  var script = {
      props: {
          image: {
              type: String,
              default: ''
          },
          name: {
              type: String,
              default: ''
          },
          description: {
              type: String,
              default: ''
          }
      },
      setup() {
          const toggle = () => {
              const navEl = document.querySelector('.header-nav');
              navEl.classList.toggle('menu_active');
          };
          return { toggle };
      }
  };

  vue.pushScopeId("data-v-bf1681ae");
  const _hoisted_1 = { class: "profile" };
  const _hoisted_2 = { class: "profile-icon" };
  const _hoisted_3 = { class: "profile-icon_image" };
  const _hoisted_4 = ["src"];
  const _hoisted_5 = { class: "profile-info" };
  const _hoisted_6 = { class: "info-title" };
  const _hoisted_7 = ["innerHTML"];
  vue.popScopeId();

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("div", _hoisted_2, [
        vue.createElementVNode("div", _hoisted_3, [
          vue.createElementVNode("img", {
            src: $props.image,
            alt: "image",
            decoding: "async"
          }, null, 8 /* PROPS */, _hoisted_4)
        ])
      ]),
      vue.createElementVNode("section", _hoisted_5, [
        vue.createElementVNode("h2", _hoisted_6, vue.toDisplayString($props.name), 1 /* TEXT */),
        vue.createElementVNode("h3", {
          class: "info-description",
          innerHTML: $props.description
        }, null, 8 /* PROPS */, _hoisted_7)
      ])
    ]))
  }

  script.render = render;
  script.__scopeId = "data-v-bf1681ae";
  script.__file = "src/components/Profile.vue";

  exports.Profile = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
