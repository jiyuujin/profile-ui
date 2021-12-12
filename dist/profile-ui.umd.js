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
          },
          social: {
              type: Object,
              default: () => { }
          }
      },
      setup(props) {
          const toggle = () => {
              const navEl = document.querySelector('.header-nav');
              navEl.classList.toggle('menu_active');
          };
          const discordUrl = vue.computed(() => {
              return props.social?.discord;
          });
          const githubUrl = vue.computed(() => {
              return props.social?.github;
          });
          const twitterUrl = vue.computed(() => {
              return props.social?.twitter;
          });
          const instagramUrl = vue.computed(() => {
              return props.social?.instagram;
          });
          return { toggle, discordUrl, githubUrl, twitterUrl, instagramUrl };
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
  const _hoisted_8 = { class: "info-social" };
  const _hoisted_9 = { key: 0 };
  const _hoisted_10 = ["href"];
  const _hoisted_11 = /*#__PURE__*/vue.createElementVNode("img", {
    alt: "discord logo",
    src: "https://i.imgur.com/QTBoiOf.jpg",
    width: "20px"
  }, null, -1 /* HOISTED */);
  const _hoisted_12 = [
    _hoisted_11
  ];
  const _hoisted_13 = { key: 1 };
  const _hoisted_14 = ["href"];
  const _hoisted_15 = /*#__PURE__*/vue.createElementVNode("img", {
    alt: "github logo",
    src: "https://i.imgur.com/VpGQK9i.jpg",
    width: "20px"
  }, null, -1 /* HOISTED */);
  const _hoisted_16 = [
    _hoisted_15
  ];
  const _hoisted_17 = { key: 2 };
  const _hoisted_18 = ["href"];
  const _hoisted_19 = /*#__PURE__*/vue.createElementVNode("img", {
    alt: "twitter logo",
    src: "https://i.imgur.com/brhG1RW.jpg",
    width: "20px"
  }, null, -1 /* HOISTED */);
  const _hoisted_20 = [
    _hoisted_19
  ];
  const _hoisted_21 = { key: 3 };
  const _hoisted_22 = ["href"];
  const _hoisted_23 = /*#__PURE__*/vue.createElementVNode("img", {
    alt: "instagram logo",
    src: "https://i.imgur.com/niXFHId.jpg",
    width: "20px"
  }, null, -1 /* HOISTED */);
  const _hoisted_24 = [
    _hoisted_23
  ];
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
        }, null, 8 /* PROPS */, _hoisted_7),
        vue.createElementVNode("ul", _hoisted_8, [
          ($setup.discordUrl)
            ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_9, [
                vue.createElementVNode("a", {
                  href: $setup.discordUrl,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, _hoisted_12, 8 /* PROPS */, _hoisted_10)
              ]))
            : vue.createCommentVNode("v-if", true),
          ($setup.githubUrl)
            ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_13, [
                vue.createElementVNode("a", {
                  href: $setup.githubUrl,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, _hoisted_16, 8 /* PROPS */, _hoisted_14)
              ]))
            : vue.createCommentVNode("v-if", true),
          ($setup.twitterUrl)
            ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_17, [
                vue.createElementVNode("a", {
                  href: $setup.twitterUrl,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, _hoisted_20, 8 /* PROPS */, _hoisted_18)
              ]))
            : vue.createCommentVNode("v-if", true),
          ($setup.instagramUrl)
            ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_21, [
                vue.createElementVNode("a", {
                  href: $setup.instagramUrl,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, _hoisted_24, 8 /* PROPS */, _hoisted_22)
              ]))
            : vue.createCommentVNode("v-if", true)
        ])
      ])
    ]))
  }

  script.render = render;
  script.__scopeId = "data-v-bf1681ae";
  script.__file = "src/components/Profile.vue";

  exports.Profile = script;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
