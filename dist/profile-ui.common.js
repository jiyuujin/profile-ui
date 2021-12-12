import { computed, pushScopeId, popScopeId, openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode } from 'vue';

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
        const discordUrl = computed(() => {
            return props.social?.discord;
        });
        const githubUrl = computed(() => {
            return props.social?.github;
        });
        const twitterUrl = computed(() => {
            return props.social?.twitter;
        });
        const instagramUrl = computed(() => {
            return props.social?.instagram;
        });
        return { toggle, discordUrl, githubUrl, twitterUrl, instagramUrl };
    }
};

pushScopeId("data-v-bf1681ae");
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
const _hoisted_11 = /*#__PURE__*/createElementVNode("img", {
  alt: "discord logo",
  src: "https://i.imgur.com/QTBoiOf.jpg",
  width: "20px"
}, null, -1 /* HOISTED */);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = { key: 1 };
const _hoisted_14 = ["href"];
const _hoisted_15 = /*#__PURE__*/createElementVNode("img", {
  alt: "github logo",
  src: "https://i.imgur.com/VpGQK9i.jpg",
  width: "20px"
}, null, -1 /* HOISTED */);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = { key: 2 };
const _hoisted_18 = ["href"];
const _hoisted_19 = /*#__PURE__*/createElementVNode("img", {
  alt: "twitter logo",
  src: "https://i.imgur.com/brhG1RW.jpg",
  width: "20px"
}, null, -1 /* HOISTED */);
const _hoisted_20 = [
  _hoisted_19
];
const _hoisted_21 = { key: 3 };
const _hoisted_22 = ["href"];
const _hoisted_23 = /*#__PURE__*/createElementVNode("img", {
  alt: "instagram logo",
  src: "https://i.imgur.com/niXFHId.jpg",
  width: "20px"
}, null, -1 /* HOISTED */);
const _hoisted_24 = [
  _hoisted_23
];
popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        createElementVNode("img", {
          src: $props.image,
          alt: "image",
          decoding: "async"
        }, null, 8 /* PROPS */, _hoisted_4)
      ])
    ]),
    createElementVNode("section", _hoisted_5, [
      createElementVNode("h2", _hoisted_6, toDisplayString($props.name), 1 /* TEXT */),
      createElementVNode("h3", {
        class: "info-description",
        innerHTML: $props.description
      }, null, 8 /* PROPS */, _hoisted_7),
      createElementVNode("ul", _hoisted_8, [
        ($setup.discordUrl)
          ? (openBlock(), createElementBlock("li", _hoisted_9, [
              createElementVNode("a", {
                href: $setup.discordUrl,
                target: "_blank",
                rel: "noopener noreferrer"
              }, _hoisted_12, 8 /* PROPS */, _hoisted_10)
            ]))
          : createCommentVNode("v-if", true),
        ($setup.githubUrl)
          ? (openBlock(), createElementBlock("li", _hoisted_13, [
              createElementVNode("a", {
                href: $setup.githubUrl,
                target: "_blank",
                rel: "noopener noreferrer"
              }, _hoisted_16, 8 /* PROPS */, _hoisted_14)
            ]))
          : createCommentVNode("v-if", true),
        ($setup.twitterUrl)
          ? (openBlock(), createElementBlock("li", _hoisted_17, [
              createElementVNode("a", {
                href: $setup.twitterUrl,
                target: "_blank",
                rel: "noopener noreferrer"
              }, _hoisted_20, 8 /* PROPS */, _hoisted_18)
            ]))
          : createCommentVNode("v-if", true),
        ($setup.instagramUrl)
          ? (openBlock(), createElementBlock("li", _hoisted_21, [
              createElementVNode("a", {
                href: $setup.instagramUrl,
                target: "_blank",
                rel: "noopener noreferrer"
              }, _hoisted_24, 8 /* PROPS */, _hoisted_22)
            ]))
          : createCommentVNode("v-if", true)
      ])
    ])
  ]))
}

script.render = render;
script.__scopeId = "data-v-bf1681ae";
script.__file = "src/components/Profile.vue";

export { script as Profile };
