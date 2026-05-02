import { h, d as defineComponent, o as openBlock, c as createElementBlock, a as createVNode, u as unref, _ as _export_sfc, b as createBaseVNode, e as createTextVNode, F as Fragment, r as renderList, n as normalizeClass, t as toDisplayString, w as withBase, f as computed, g as useData, i as useRoute, j as watch, k as onMounted, l as onBeforeUnmount, m as withCtx, T as Transition, p as ref, q as nextTick, s as resolveComponent, v as createBlock, x as createCommentVNode } from "./framework.KpO8PD4X.js";
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const isEmptyString = (value) => value === "";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = ({
  name,
  iconNode,
  absoluteStrokeWidth,
  "absolute-stroke-width": absoluteStrokeWidthKebabCase,
  strokeWidth,
  "stroke-width": strokeWidthKebabCase,
  size = defaultAttributes.width,
  color = defaultAttributes.stroke,
  ...props
}, { slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      ...props,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": isEmptyString(absoluteStrokeWidth) || isEmptyString(absoluteStrokeWidthKebabCase) || absoluteStrokeWidth === true || absoluteStrokeWidthKebabCase === true ? Number(strokeWidth || strokeWidthKebabCase || defaultAttributes["stroke-width"]) * 24 / Number(size) : strokeWidth || strokeWidthKebabCase || defaultAttributes["stroke-width"],
      class: mergeClasses(
        "lucide",
        props.class,
        ...name ? [`lucide-${toKebabCase(toPascalCase(name))}-icon`, `lucide-${toKebabCase(name)}`] : ["lucide-icon"]
      ),
      ...!slots.default && !hasA11yProp(props) && { "aria-hidden": "true" }
    },
    [...iconNode.map((child) => h(...child)), ...slots.default ? [slots.default()] : []]
  );
};
const createLucideIcon = (iconName, iconNode) => (props, { slots, attrs }) => h(
  Icon,
  {
    ...attrs,
    ...props,
    iconNode,
    name: iconName
  },
  slots
);
const ArrowUp = createLucideIcon("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const BookOpen = createLucideIcon("book-open", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
const Clock3 = createLucideIcon("clock-3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
]);
const Menu = createLucideIcon("menu", [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
]);
const NotebookPen = createLucideIcon("notebook-pen", [
  ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" }],
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  [
    "path",
    {
      d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "pqwjuv"
    }
  ]
]);
const ScrollText = createLucideIcon("scroll-text", [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "BackToTopButton",
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "back-to-top",
        type: "button",
        "aria-label": "返回顶部",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, [
        createVNode(unref(ArrowUp), {
          class: "back-to-top__icon",
          size: 18,
          "aria-hidden": "true"
        })
      ]);
    };
  }
});
const BackToTopButton = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-b0c4b2fd"]]);
const _hoisted_1$e = {
  class: "doc-outline",
  "aria-label": "文章目录"
};
const _hoisted_2$a = { class: "outline-card" };
const _hoisted_3$7 = { class: "outline-title" };
const _hoisted_4$7 = { class: "outline-nav" };
const _hoisted_5$5 = ["href"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DocOutline",
  props: {
    activeId: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$e, [
        createBaseVNode("div", _hoisted_2$a, [
          createBaseVNode("p", _hoisted_3$7, [
            createVNode(unref(ScrollText), {
              class: "outline-title__icon",
              size: 15,
              "aria-hidden": "true"
            }),
            _cache[0] || (_cache[0] = createTextVNode(" 目录 ", -1))
          ]),
          createBaseVNode("nav", _hoisted_4$7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
              return openBlock(), createElementBlock("a", {
                key: item.id,
                class: normalizeClass(["outline-link", `outline-link--level-${item.level}`, { active: __props.activeId === item.id }]),
                href: `#${item.id}`
              }, toDisplayString(item.text), 11, _hoisted_5$5);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const DocOutline = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-4736af79"]]);
const _hoisted_1$d = { class: "home-view" };
const _hoisted_2$9 = { class: "home-hero" };
const _hoisted_3$6 = { class: "home-copy" };
const _hoisted_4$6 = { class: "lead" };
const _hoisted_5$4 = { class: "home-actions" };
const _hoisted_6$3 = ["href"];
const _hoisted_7$2 = ["href"];
const _hoisted_8$1 = {
  class: "desk-board",
  "aria-label": "Desk highlights"
};
const _hoisted_9$1 = ["href"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  props: {
    description: {},
    highlights: {},
    siteTitle: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$d, [
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("div", _hoisted_3$6, [
            _cache[2] || (_cache[2] = createBaseVNode("p", { class: "eyebrow" }, "技术 / 生活 / 阅读 / 音乐", -1)),
            createBaseVNode("h1", null, toDisplayString(__props.siteTitle), 1),
            createBaseVNode("p", _hoisted_4$6, toDisplayString(__props.description), 1),
            createBaseVNode("div", _hoisted_5$4, [
              createBaseVNode("a", {
                class: "button primary",
                href: unref(withBase)("/notes.html")
              }, [
                createVNode(unref(NotebookPen), {
                  class: "button__icon",
                  size: 18,
                  "aria-hidden": "true"
                }),
                _cache[0] || (_cache[0] = createTextVNode(" 翻开笔记 ", -1))
              ], 8, _hoisted_6$3),
              createBaseVNode("a", {
                class: "button secondary",
                href: unref(withBase)("/bookshelf.html")
              }, [
                createVNode(unref(BookOpen), {
                  class: "button__icon",
                  size: 18,
                  "aria-hidden": "true"
                }),
                _cache[1] || (_cache[1] = createTextVNode(" 看看书架 ", -1))
              ], 8, _hoisted_7$2)
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.highlights, (item) => {
              return openBlock(), createElementBlock("a", {
                key: item.title,
                class: "desk-note",
                href: unref(withBase)(item.link)
              }, [
                createBaseVNode("span", null, toDisplayString(item.label), 1),
                createBaseVNode("strong", null, toDisplayString(item.title), 1),
                createBaseVNode("small", null, toDisplayString(item.text), 1)
              ], 8, _hoisted_9$1);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-eadd1efb"]]);
const _hoisted_1$c = { class: "site-header" };
const _hoisted_2$8 = ["href"];
const _hoisted_3$5 = ["aria-expanded"];
const _hoisted_4$5 = ["href"];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  props: {
    description: {},
    isMobileNavOpen: { type: Boolean },
    navItems: {},
    siteTitle: {},
    currentPath: {}
  },
  emits: ["close", "toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const normalizedCurrentPath = computed(() => props.currentPath.replace(/\/$/, "") || "/");
    const isActive = (link) => {
      const itemPath = link.replace(/\/$/, "") || "/";
      return normalizedCurrentPath.value === itemPath;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1$c, [
        createBaseVNode("a", {
          class: "brand",
          href: unref(withBase)("/")
        }, [
          _cache[2] || (_cache[2] = createBaseVNode("span", {
            class: "brand-mark",
            "aria-hidden": "true"
          }, "J", -1)),
          createBaseVNode("span", null, [
            createBaseVNode("strong", null, toDisplayString(__props.siteTitle), 1),
            createBaseVNode("small", null, toDisplayString(__props.description), 1)
          ])
        ], 8, _hoisted_2$8),
        createBaseVNode("button", {
          class: "nav-toggle",
          type: "button",
          "aria-expanded": __props.isMobileNavOpen ? "true" : "false",
          "aria-controls": "site-nav",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
        }, [
          createVNode(unref(Menu), {
            class: "nav-toggle__icon",
            size: 18,
            "aria-hidden": "true"
          }),
          _cache[3] || (_cache[3] = createBaseVNode("span", null, "菜单", -1))
        ], 8, _hoisted_3$5),
        createBaseVNode("nav", {
          id: "site-nav",
          class: normalizeClass(["site-nav", { "is-open": __props.isMobileNavOpen }]),
          "aria-label": "Primary navigation"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.navItems, (item) => {
            return openBlock(), createElementBlock("a", {
              key: item.link,
              class: normalizeClass({ active: isActive(item.link) }),
              href: unref(withBase)(item.link),
              onClick: _cache[1] || (_cache[1] = ($event) => emit("close"))
            }, toDisplayString(item.text), 11, _hoisted_4$5);
          }), 128))
        ], 2)
      ]);
    };
  }
});
const SiteHeader = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-ae03999f"]]);
const homeHighlights = [
  {
    label: "文章更新",
    title: "视频 autoplay 为什么时灵时不灵",
    text: "把浏览器策略、静音限制和 WebView 差异理顺，解释清楚它为什么总是时灵时不灵。",
    link: "/video-autoplay.html"
  },
  {
    label: "阅读中",
    title: "The Pragmatic Programmer",
    text: "书架上那本被反复抽出来，又反复塞回去的老朋友。",
    link: "/bookshelf.html"
  },
  {
    label: "近期动态",
    title: "个人博客重新开张",
    text: "给技术、生活、读书和奇怪想法各留一个抽屉。",
    link: "/timeline.html"
  }
];
const navItems = [
  { text: "首页", link: "/" },
  { text: "笔记", link: "/notes.html" },
  { text: "书架", link: "/bookshelf.html" },
  { text: "音乐", link: "/music.html" },
  { text: "时间线", link: "/timeline.html" },
  { text: "关于", link: "/about.html" }
];
const _hoisted_1$b = { class: "site-shell" };
const _hoisted_2$7 = { class: "doc-main" };
const _hoisted_3$4 = { class: "page-kicker" };
const _hoisted_4$4 = { class: "page-title" };
const _hoisted_5$3 = {
  key: 0,
  class: "page-meta"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { site, frontmatter } = useData();
    const route = useRoute();
    const isMobileNavOpen = ref(false);
    const showBackToTop = ref(false);
    const tocItems = ref([]);
    const activeTocId = ref("");
    let contentObserver = null;
    let tocRefreshTimer = null;
    const pageTitle = computed(() => frontmatter.value.title || site.value.title);
    const pageKicker = computed(() => {
      const customKicker = frontmatter.value.kicker;
      if (customKicker) {
        return customKicker;
      }
      if (frontmatter.value.home) {
        return "";
      }
      return `Javen 的${pageTitle.value}`;
    });
    const pageReadingTime = computed(() => frontmatter.value.readingTime);
    const hasToc = computed(() => tocItems.value.length > 0);
    const pageClass = computed(() => frontmatter.value.pageClass);
    const contentClass = computed(() => [
      "content",
      {
        "content--plain": pageClass.value === "bookshelf-page" || pageClass.value === "music-page" || pageClass.value === "about-page",
        "content--notes": pageClass.value === "notes-page"
      }
    ]);
    const toggleMobileNav = () => {
      isMobileNavOpen.value = !isMobileNavOpen.value;
    };
    const closeMobileNav = () => {
      isMobileNavOpen.value = false;
    };
    const updateBackToTop = () => {
      showBackToTop.value = window.scrollY > 360;
    };
    const getDocHeadings = () => Array.from(document.querySelectorAll(".doc-view .content h2, .doc-view .content h3"));
    const collectTocItems = () => {
      const headings = getDocHeadings();
      tocItems.value = headings.map((heading) => {
        const id = heading.id;
        const text = heading.childNodes[0]?.textContent?.trim() || heading.textContent?.trim();
        const level = heading.tagName === "H2" ? 2 : 3;
        if (!id || !text) {
          return null;
        }
        return { id, text, level };
      }).filter((item) => item !== null);
    };
    const syncActiveTocIntoView = () => {
      const activeLink = document.querySelector(".outline-link.active");
      activeLink?.scrollIntoView({ block: "nearest" });
    };
    const updateActiveToc = () => {
      const headings = getDocHeadings();
      if (!headings.length) {
        activeTocId.value = "";
        return;
      }
      const offset = 132;
      let currentId = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= offset) {
          currentId = heading.id;
          continue;
        }
        break;
      }
      if (activeTocId.value !== currentId) {
        activeTocId.value = currentId;
        syncActiveTocIntoView();
      }
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const updatePageScrollState = () => {
      updateBackToTop();
      updateActiveToc();
    };
    const scheduleTocRefresh = () => {
      if (tocRefreshTimer !== null) {
        window.clearTimeout(tocRefreshTimer);
      }
      tocRefreshTimer = window.setTimeout(() => {
        tocRefreshTimer = null;
        collectTocItems();
        updatePageScrollState();
      }, 0);
    };
    const refreshPageChrome = async () => {
      tocItems.value = [];
      activeTocId.value = "";
      await nextTick();
      scheduleTocRefresh();
    };
    watch(
      () => route.path,
      () => {
        closeMobileNav();
        refreshPageChrome();
      }
    );
    onMounted(() => {
      refreshPageChrome();
      const main = document.querySelector("main");
      if (main) {
        contentObserver = new MutationObserver(() => {
          scheduleTocRefresh();
        });
        contentObserver.observe(main, { childList: true, subtree: true });
      }
      window.addEventListener("scroll", updatePageScrollState, { passive: true });
    });
    onBeforeUnmount(() => {
      if (tocRefreshTimer !== null) {
        window.clearTimeout(tocRefreshTimer);
        tocRefreshTimer = null;
      }
      contentObserver?.disconnect();
      window.removeEventListener("scroll", updatePageScrollState);
    });
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(SiteHeader, {
          description: unref(site).description,
          "is-mobile-nav-open": isMobileNavOpen.value,
          "nav-items": unref(navItems),
          "site-title": unref(site).title,
          "current-path": unref(route).path,
          onClose: closeMobileNav,
          onToggle: toggleMobileNav
        }, null, 8, ["description", "is-mobile-nav-open", "nav-items", "site-title", "current-path"]),
        createBaseVNode("main", null, [
          createVNode(Transition, {
            name: "page-fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              unref(frontmatter).home ? (openBlock(), createBlock(HomeHero, {
                key: unref(route).path,
                description: unref(site).description,
                highlights: unref(homeHighlights),
                "site-title": unref(site).title
              }, null, 8, ["description", "highlights", "site-title"])) : (openBlock(), createElementBlock("article", {
                key: unref(route).path,
                class: normalizeClass(["doc-view", pageClass.value])
              }, [
                createBaseVNode("div", _hoisted_2$7, [
                  createBaseVNode("p", _hoisted_3$4, toDisplayString(pageKicker.value), 1),
                  createBaseVNode("h1", _hoisted_4$4, toDisplayString(pageTitle.value), 1),
                  pageReadingTime.value ? (openBlock(), createElementBlock("p", _hoisted_5$3, [
                    createVNode(unref(Clock3), {
                      class: "page-meta__icon",
                      size: 15,
                      "aria-hidden": "true"
                    }),
                    createTextVNode(" 约 " + toDisplayString(pageReadingTime.value) + "读完 ", 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", {
                    class: normalizeClass(contentClass.value)
                  }, [
                    createVNode(_component_Content)
                  ], 2)
                ]),
                hasToc.value ? (openBlock(), createBlock(DocOutline, {
                  key: 0,
                  "active-id": activeTocId.value,
                  items: tocItems.value
                }, null, 8, ["active-id", "items"])) : createCommentVNode("", true)
              ], 2))
            ]),
            _: 1
          })
        ]),
        createVNode(Transition, { name: "back-to-top" }, {
          default: withCtx(() => [
            showBackToTop.value ? (openBlock(), createBlock(BackToTopButton, {
              key: 0,
              onClick: scrollToTop
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-dde8aba9"]]);
const aboutProfile = {
  name: "Javen",
  role: "程序员 / 记录者 / 普通人",
  intro: "写写东西，发发牢骚，也顺手把日子里那些值得留一下的东西记下来。",
  meta: ["偏爱清楚的表达", "喜欢顺手的工具", "珍惜长久而美好的事物"],
  contactTitle: "联系方式",
  contactText: "如果你想交流技术、项目或文章里的某个观点，可以发邮件到",
  contactEmail: "2856572867@qq.com"
};
const aboutPrinciples = [
  { index: "01", title: "不故作高深", text: "能说人话的时候，就别把简单的事写复杂。" },
  { index: "02", title: "不是标题党", text: "不靠夸张、误导和硬拽悬念骗点击，标题该和内容对得上。" },
  { index: "03", title: "不重复造轮子", text: "能复用成熟方案的地方，精力更该花在判断和取舍上。" },
  { index: "04", title: "不写同质化内容", text: "不跟着热门模板复述一遍，尽量写出自己的判断、经验和表达。" }
];
const _hoisted_1$a = { class: "about-scene" };
const _hoisted_2$6 = { class: "about-badge" };
const _hoisted_3$3 = { class: "about-badge__head" };
const _hoisted_4$3 = { class: "about-badge__meta" };
const _hoisted_5$2 = { class: "about-principles" };
const _hoisted_6$2 = { class: "about-contact" };
const _hoisted_7$1 = ["href"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AboutPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("section", _hoisted_2$6, [
            createBaseVNode("div", _hoisted_3$3, [
              _cache[0] || (_cache[0] = createBaseVNode("span", null, "关于我", -1)),
              createBaseVNode("strong", null, toDisplayString(unref(aboutProfile).name), 1),
              createBaseVNode("small", null, toDisplayString(unref(aboutProfile).role), 1)
            ]),
            createBaseVNode("p", null, toDisplayString(unref(aboutProfile).intro), 1),
            createBaseVNode("ul", _hoisted_4$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(aboutProfile).meta, (item) => {
                return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(aboutPrinciples), (principle) => {
              return openBlock(), createElementBlock("article", {
                key: principle.index,
                class: "about-principle"
              }, [
                createBaseVNode("span", null, toDisplayString(principle.index), 1),
                createBaseVNode("strong", null, toDisplayString(principle.title), 1),
                createBaseVNode("small", null, toDisplayString(principle.text), 1)
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_6$2, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "about-contact__seal" }, "J", -1)),
          createBaseVNode("div", null, [
            createBaseVNode("strong", null, toDisplayString(unref(aboutProfile).contactTitle), 1),
            createBaseVNode("p", null, [
              createTextVNode(toDisplayString(unref(aboutProfile).contactText) + " ", 1),
              createBaseVNode("a", {
                href: `mailto:${unref(aboutProfile).contactEmail}`
              }, toDisplayString(unref(aboutProfile).contactEmail), 9, _hoisted_7$1),
              _cache[1] || (_cache[1] = createTextVNode("。 ", -1))
            ])
          ])
        ])
      ]);
    };
  }
});
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-d91f9f71"]]);
const bookshelf = [
  {
    title: "黑客与画家",
    author: "保罗·格雷厄姆",
    summary: "很多年前写的，今天再看创业、技术品味和行业变化，还是有种被提前说中的感觉。",
    cover: "/books/hackers-painters.jpg",
    coverAlt: "《黑客与画家》书封",
    progress: "读至一半"
  },
  {
    title: "活着",
    author: "余华",
    summary: "大学熬夜看完的，写的好，但剧情很悲惨，不想看第二遍",
    cover: "/books/to-live.jpg",
    coverAlt: "《活着》书封",
    progress: "读完"
  },
  {
    title: "未来世界的幸存者",
    author: "阮一峰",
    summary: "十年前聊技术变局和普通人的处境，现在回头看 AI、自动化这些趋势，准得有点吓人。",
    cover: "/books/survivor.jpg",
    coverAlt: "《未来世界的幸存者》书封",
    progress: "读至大半"
  },
  {
    title: "前方的路",
    author: "阮一峰",
    summary: "也是很多年前的判断，放到今天看技术、职业和个人选择，像在提前给后来的人指路。",
    cover: "/books/road-ahead.jpg",
    coverAlt: "《前方的路》书封",
    progress: "读至一半"
  },
  {
    title: "Vibe Coding：AI编程时代的认知重构",
    author: "张昕东",
    summary: "不凑热闹，从理性角度看待AI编程的发展史，但后面的章节有点乏味",
    cover: "/books/vibe-coding.jpg",
    coverAlt: "《Vibe Coding：AI编程时代的认知重构》书封",
    progress: "读至一半"
  }
];
const _hoisted_1$9 = { class: "book-card" };
const _hoisted_2$5 = { class: "book-progress" };
const _hoisted_3$2 = { class: "book-cover" };
const _hoisted_4$2 = ["src", "alt"];
const _hoisted_5$1 = { class: "book-info" };
const _hoisted_6$1 = { class: "book-author" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BookCard",
  props: {
    book: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", _hoisted_1$9, [
        createBaseVNode("span", _hoisted_2$5, toDisplayString(__props.book.progress), 1),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("img", {
            src: __props.book.cover,
            alt: __props.book.coverAlt,
            loading: "lazy"
          }, null, 8, _hoisted_4$2)
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("h2", null, toDisplayString(__props.book.title), 1),
          createBaseVNode("p", _hoisted_6$1, toDisplayString(__props.book.author), 1),
          createBaseVNode("p", null, toDisplayString(__props.book.summary), 1)
        ])
      ]);
    };
  }
});
const BookCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-04bc17bd"]]);
const _hoisted_1$8 = {
  class: "book-grid",
  "aria-label": "真实阅读书架"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BookshelfPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(bookshelf), (book, index) => {
          return openBlock(), createBlock(BookCard, {
            key: book.title,
            book,
            index
          }, null, 8, ["book", "index"]);
        }), 128))
      ]);
    };
  }
});
const BookshelfPage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-620d0052"]]);
const musicTracks = [
  {
    title: "终身美丽",
    artist: "郑秀文",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8a/a3/a3/8aa3a363-5183-6e80-aa5c-0da1e8c21e4b/825646139743.jpg/100x100bb.jpg",
    coverAlt: "《终身美丽》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/99/89/1d9989b8-3191-d69b-f8fe-d53c0679ff50/mzaf_12098648720726268602.plus.aac.p.m4a",
    lyricBackdrop: [
      "是你去唤醒我",
      "努力才能被爱慕",
      "但回头目睹你",
      "为我好自己不好",
      "我这幸运儿合着眼睛",
      "只得你沉重身影",
      "如果这记忆非爱情",
      "连天都不会太高兴",
      "莫非可终身美丽",
      "才值得勾勾手指发誓"
    ]
  },
  {
    title: "死性不改",
    artist: "Twins & Boy'z",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/01/61/aa/0161aa94-a238-e9ad-a9bc-fdf050bbf881/EEG1172V1.jpg/100x100bb.jpg",
    coverAlt: "《死性不改》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/04/60/9f/04609fab-5b83-6b7e-ec3a-1e3048ff25ae/mzaf_4823890793210855613.plus.aac.p.m4a",
    lyricBackdrop: [
      "无奈你最够刺激我",
      "凡事也治倒我",
      "几多黑心的教唆",
      "我亦挨得过",
      "来煽风来点火",
      "就击倒我么",
      "谁恋爱就多障碍",
      "死性我不想改",
      "如我没有你的爱",
      "我没法活得来",
      "情人的存在",
      "是我从来都志在"
    ]
  },
  {
    title: "国际歌",
    artist: "唐朝乐队",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/5b/88/5d5b8838-6ab9-585c-afac-efa87f0c8163/RLP089-_-_Cover3000.jpg/100x100bb.jpg",
    coverAlt: "《国际歌》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/06/52/ee/0652eec8-e033-b60d-7ecc-1942e0d09159/mzaf_14924484654348959602.plus.aac.p.m4a",
    lyricBackdrop: [
      "不要说我们一无所有 我们要做天下的主人",
      "这是最后的斗争 团结起来到明天",
      "英特纳雄耐尔就一定要实现",
      "这是最后的斗争 团结起来到明天"
    ]
  },
  {
    title: "触动心 触动爱",
    artist: "By2",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/01/2e/c9/012ec93d-bd5e-5785-84d1-fa9abdd2b03f/mzm.svjhsdvv.jpg/100x100bb.jpg",
    coverAlt: "《触动心 触动爱》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/74/d0/68/74d06819-4b00-a2e8-196b-45ce7530648e/mzaf_8958087024283831106.plus.aac.p.m4a",
    lyricBackdrop: [
      "空气都变得很甜",
      "我相信 只要 和你在一起 世界都变梦幻",
      "现在 把自信全都加满",
      "合：触动心 触动爱",
      "Miko：开始 蹦蹦跳跳 吵吵闹闹 别再发呆",
      "合：跟着你我节拍",
      "Yumi：所有烦恼 统统抛开",
      "合：触动心 触动爱",
      "Miko：不要 结结巴巴 拖拖拉拉 别再等待",
      "Yumi：真爱 用心触动才精彩"
    ]
  },
  {
    title: "爱的双重魔力",
    artist: "By2",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/9f/e0/96/9fe096ce-19b3-8c04-5b8c-072124a70aa0/8da7ee255341b1c97439b414c0a7d779.jpg/100x100bb.jpg",
    coverAlt: "《爱的双重魔力》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a9/d7/0d/a9d70d88-3d52-4e46-257e-1662868bac7b/mzaf_10124245697132962379.plus.aac.p.m4a",
    lyricBackdrop: [
      "爱有双重魔力",
      "也苦涩也甜蜜",
      "悄悄地在心底",
      "说一万遍我爱你",
      "爱你",
      "借我勇气",
      "满满地藏在心",
      "一步步走向你",
      "给我爱的魔力",
      "不退缩不犹豫",
      "甜蜜化在嘴里",
      "是告诉你我爱你",
      "爱你",
      "随变奇迹",
      "爱上改变的勇气",
      "都是因为你"
    ]
  },
  {
    title: "绿色的旋律",
    artist: "陈洁丽",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/37/d4/4b/37d44b39-f37f-ec2a-d297-5e3bf6f2f87c/754213532871.jpg/100x100bb.jpg",
    coverAlt: "《绿色的旋律》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8c/78/35/8c78353e-6e13-5cc0-e007-e7bfb525ce6b/mzaf_17150937697454599278.plus.aac.p.m4a",
    lyricBackdrop: [
      "天上的浮云 尘风和星星",
      "地上我和你 都在倾听",
      "小草慢慢钻出大地",
      "绿色的旋律 我的声音",
      "在歌唱 I'd like to sing",
      "This song hand in hand tenderly",
      "Hand tenderly",
      "I'd like to stay in your arms",
      "By the Christmas tree",
      "By the Christmas tree",
      "春夏秋冬四季 来为我换新衣",
      "夕阳和流星伴我行"
    ]
  },
  {
    title: "财神到",
    artist: "许冠杰",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/20/80/7b/20807b31-3f5f-09be-6e10-d6ff787fc685/00042283782426.rgb.jpg/100x100bb.jpg",
    coverAlt: "《财神到》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a8/33/fc/a833fc0d-298a-5699-dde9-b3b7fd39b9a9/mzaf_4236982368749125258.plus.aac.p.m4a",
    lyricBackdrop: [
      "朝晚多多欢笑",
      "锦绣前程",
      "愿夫妇恩爱",
      "体贴入微",
      "成日有吉星照",
      "百事无忌",
      "共亲友相见",
      "说话投机",
      "充满新春喜气",
      "欢鹊跃娓",
      "财神到 财神到",
      "好心得好报",
      "财神话 财神话",
      "揾钱依正路",
      "财神到 财神到",
      "好走快两步",
      "得到佢睇起你",
      "你有前途",
      "啦……"
    ]
  },
  {
    title: "祗想一生跟你走",
    artist: "张学友",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/58/50/d2/5850d2e7-a1c3-1ca6-01c7-6afe8c5cd641/00602498367070.rgb.jpg/100x100bb.jpg",
    coverAlt: "《祗想一生跟你走》封面",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6f/d0/08/6fd008d6-8a51-2f0b-b53d-c778818cb1f0/mzaf_3034293702994425770.plus.aac.p.m4a"
  }
];
const _hoisted_1$7 = ["aria-pressed", "aria-label"];
const _hoisted_2$4 = ["src", "alt"];
const _hoisted_3$1 = {
  key: 1,
  class: "cd-cover cd-cover-placeholder",
  "aria-hidden": "true"
};
const _hoisted_4$1 = { class: "tape-meta" };
const _hoisted_5 = { class: "cd-artist" };
const _hoisted_6 = { class: "sr-only" };
const _hoisted_7 = {
  key: 1,
  class: "cd-sleeve is-unavailable"
};
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = {
  key: 1,
  class: "cd-cover cd-cover-placeholder",
  "aria-hidden": "true"
};
const _hoisted_10 = { class: "tape-meta" };
const _hoisted_11 = { class: "cd-artist" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MusicTrackCard",
  props: {
    track: {},
    isActive: { type: Boolean },
    isPlaying: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: normalizeClass(["cd-card", { "is-disabled": !__props.track.previewUrl }])
      }, [
        __props.track.previewUrl ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: normalizeClass(["cd-sleeve cd-button is-playable", { "is-active": __props.isActive, "is-playing": __props.isPlaying }]),
          type: "button",
          "aria-pressed": __props.isActive && __props.isPlaying,
          "aria-label": `${__props.isPlaying ? "暂停" : "播放"}《${__props.track.title}》试听`,
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
        }, [
          __props.track.cover ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "cd-cover",
            src: __props.track.cover,
            alt: __props.track.coverAlt,
            loading: "lazy",
            referrerpolicy: "no-referrer"
          }, null, 8, _hoisted_2$4)) : (openBlock(), createElementBlock("div", _hoisted_3$1, "♪")),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("h2", null, toDisplayString(__props.track.title), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString(__props.track.artist), 1)
          ]),
          _cache[1] || (_cache[1] = createBaseVNode("div", {
            class: "tape-window",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "tape-reel tape-reel-left" }),
            createBaseVNode("span", { class: "tape-reel tape-reel-right" })
          ], -1)),
          createBaseVNode("span", _hoisted_6, toDisplayString(__props.isPlaying ? "正在播放" : "当前未播放"), 1)
        ], 10, _hoisted_1$7)) : (openBlock(), createElementBlock("div", _hoisted_7, [
          __props.track.cover ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "cd-cover",
            src: __props.track.cover,
            alt: __props.track.coverAlt,
            loading: "lazy",
            referrerpolicy: "no-referrer"
          }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("div", _hoisted_9, "♪")),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("h2", null, toDisplayString(__props.track.title), 1),
            createBaseVNode("p", _hoisted_11, toDisplayString(__props.track.artist), 1)
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("div", {
            class: "tape-window",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "tape-reel tape-reel-left" }),
            createBaseVNode("span", { class: "tape-reel tape-reel-right" })
          ], -1))
        ]))
      ], 2);
    };
  }
});
const MusicTrackCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-197f403a"]]);
const _hoisted_1$6 = { class: "music-stage" };
const _hoisted_2$3 = {
  class: "cd-wall",
  "aria-label": "最近在听的音乐墙"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MusicPage",
  setup(__props) {
    const currentTrackTitle = ref(null);
    const isPlaying = ref(false);
    let audio = null;
    const activeTrack = computed(() => musicTracks.find((track) => track.title === currentTrackTitle.value) ?? null);
    const lyricBackdropBlocks = computed(() => {
      if (!activeTrack.value || !isPlaying.value) {
        return [];
      }
      const lines = activeTrack.value.lyricBackdrop?.filter(Boolean) ?? [];
      if (lines.length === 0) {
        return [];
      }
      const blocks = [];
      for (let index = 0; index < lines.length; index += 2) {
        blocks.push(lines.slice(index, index + 2).join("\n"));
      }
      return blocks.slice(0, 5);
    });
    const syncPausedState = () => {
      isPlaying.value = false;
    };
    const syncPlayingState = () => {
      isPlaying.value = true;
    };
    const resetState = () => {
      currentTrackTitle.value = null;
      isPlaying.value = false;
    };
    const playTrack = async (track) => {
      if (!audio || !track.previewUrl) {
        return;
      }
      if (currentTrackTitle.value === track.title) {
        if (audio.paused) {
          await audio.play();
          return;
        }
        audio.pause();
        return;
      }
      currentTrackTitle.value = track.title;
      isPlaying.value = false;
      audio.src = track.previewUrl;
      audio.currentTime = 0;
      try {
        await audio.play();
      } catch {
        resetState();
      }
    };
    const toggleTrack = async (track) => {
      await playTrack(track);
    };
    onMounted(() => {
      audio = new Audio();
      audio.preload = "none";
      audio.addEventListener("pause", syncPausedState);
      audio.addEventListener("play", syncPlayingState);
      audio.addEventListener("ended", resetState);
    });
    onBeforeUnmount(() => {
      if (!audio) {
        return;
      }
      audio.pause();
      audio.removeEventListener("pause", syncPausedState);
      audio.removeEventListener("play", syncPlayingState);
      audio.removeEventListener("ended", resetState);
      audio = null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$6, [
        createBaseVNode("div", {
          class: normalizeClass(["lyric-backdrop", { "is-visible": lyricBackdropBlocks.value.length > 0 }]),
          "aria-hidden": "true"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(lyricBackdropBlocks.value, (block, index) => {
            return openBlock(), createElementBlock("p", {
              key: `${block}-${index}`,
              class: normalizeClass(["lyric-block", `block-${index + 1}`])
            }, toDisplayString(block), 3);
          }), 128))
        ], 2),
        createBaseVNode("section", _hoisted_2$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(musicTracks), (track) => {
            return openBlock(), createBlock(MusicTrackCard, {
              key: `${track.title}-${track.artist}`,
              track,
              "is-active": currentTrackTitle.value === track.title,
              "is-playing": currentTrackTitle.value === track.title && isPlaying.value,
              onToggle: ($event) => toggleTrack(track)
            }, null, 8, ["track", "is-active", "is-playing", "onToggle"]);
          }), 128))
        ])
      ]);
    };
  }
});
const MusicPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9537b471"]]);
const notes = [
  {
    title: "视频 autoplay 为什么时灵时不灵",
    href: "/video-autoplay.html",
    summary: "把浏览器策略、静音限制和 WebView 差异理顺，解释清楚它为什么总是时灵时不灵。",
    readingTime: "6 分钟",
    featured: true
  },
  {
    title: "文章排版样张",
    href: "/markdown-examples.html",
    summary: "把标题、代码块、表格和提示框都摊开来看，确认这个主题写长文时够不够顺手。",
    readingTime: "2 分钟"
  },
  {
    title: "VitePress 运行时 API",
    href: "/api-examples.html",
    summary: "放一些和主题能力、页面数据、运行时接口相关的小实验，顺手验证站点可扩展性。",
    readingTime: "3 分钟"
  }
];
const _hoisted_1$5 = ["href"];
const _hoisted_2$2 = { class: "note-reading-time" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NoteCard",
  props: {
    note: {}
  },
  setup(__props) {
    const props = __props;
    const cardClass = computed(() => ["note-card", { "note-card--featured": props.note.featured }]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(cardClass.value),
        href: unref(withBase)(__props.note.href)
      }, [
        createBaseVNode("small", _hoisted_2$2, [
          createVNode(unref(Clock3), {
            class: "note-reading-time__icon",
            size: 14,
            "aria-hidden": "true"
          }),
          createTextVNode(" 约 " + toDisplayString(__props.note.readingTime), 1)
        ]),
        createBaseVNode("strong", null, toDisplayString(__props.note.title), 1),
        createBaseVNode("p", null, toDisplayString(__props.note.summary), 1)
      ], 10, _hoisted_1$5);
    };
  }
});
const NoteCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d96d4c81"]]);
const _hoisted_1$4 = { class: "notes-layout" };
const _hoisted_2$1 = { class: "note-rail" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NotesPage",
  setup(__props) {
    const featuredNote = computed(() => notes.find((note) => note.featured));
    const otherNotes = computed(() => notes.filter((note) => !note.featured));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        featuredNote.value ? (openBlock(), createBlock(NoteCard, {
          key: 0,
          note: featuredNote.value
        }, null, 8, ["note"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(otherNotes.value, (note) => {
            return openBlock(), createBlock(NoteCard, {
              key: note.href,
              note
            }, null, 8, ["note"]);
          }), 128))
        ])
      ]);
    };
  }
});
const NotesPage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a71b52b4"]]);
const projects = [
  {
    category: "站点",
    title: "Javen Blog",
    summary: "一个用 VitePress 搭出来的个人桌面。",
    stack: "VitePress / Vue / CSS"
  },
  {
    category: "工具",
    title: "未来的小工具",
    summary: "也许是 CLI，也许是网页工具，也许只是一个周末的冲动。",
    stack: "TypeScript / Node.js"
  },
  {
    category: "实验",
    title: "实验台",
    summary: "放一些运行时 API、主题能力和前端交互试验。",
    stack: "Vue / VitePress"
  }
];
const _hoisted_1$3 = { class: "project-card" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", _hoisted_1$3, [
        createBaseVNode("span", null, toDisplayString(__props.project.category), 1),
        createBaseVNode("strong", null, toDisplayString(__props.project.title), 1),
        createBaseVNode("small", null, toDisplayString(__props.project.summary), 1),
        createBaseVNode("em", null, toDisplayString(__props.project.stack), 1)
      ]);
    };
  }
});
const ProjectCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3873228e"]]);
const _hoisted_1$2 = { class: "project-grid" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(projects), (project) => {
          return openBlock(), createBlock(ProjectCard, {
            key: project.title,
            project
          }, null, 8, ["project"]);
        }), 128))
      ]);
    };
  }
});
const ProjectsPage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f8a29533"]]);
const timeline = [
  { era: "最近几年", year: "2026", title: "买房", text: "发生得很突然，像是某个普通工作日顺手就把人生进度条往前拨了一格。回过神来，自己也有了个小窝。" },
  { era: "刚进社会", year: "2020", title: "大学毕业", text: "一边兼职送外卖，一边继续往前走。商家给我准备的电瓶车居然没有刹车，现在想起来还是很离谱。" },
  { era: "刚进社会", year: "2019", title: "参加工作", text: "面试时脑子里只有“面试官你好，我是 xxx”这几句开场白，后面的问题越问越多，心里就只剩下：怎么还没问完。" },
  { era: "学生时代", year: "2017", title: "高中毕业", text: "高三是真的累，身体和心里都累。可怀念也是真的，有些很纯真的东西，一旦过期，就不会再原样回来。" },
  { era: "学生时代", year: "2014", title: "初中毕业", text: "那会儿最大的遗憾很朴素：早知道还是该多学一点，少去几次网吧打 CF。" },
  { era: "学生时代", year: "2011", title: "小学毕业", text: "天天和小伙伴到处跑，年味也足，日子松快得像没有尽头。现在回头看，那可能是最自由也最开心的一段。" },
  { era: "故事开头", year: "2000", title: "出生", text: "开局一个碗。后面的剧情，慢慢更新。" }
];
const _hoisted_1$1 = { class: "timeline-ticket__year" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineTicket",
  props: {
    item: {},
    featured: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("article", {
        class: normalizeClass(["timeline-ticket", { "timeline-ticket--featured": __props.featured }])
      }, [
        createBaseVNode("span", _hoisted_1$1, toDisplayString(__props.item.year), 1),
        createBaseVNode("strong", null, toDisplayString(__props.item.title), 1),
        createBaseVNode("small", null, toDisplayString(__props.item.text), 1)
      ], 2);
    };
  }
});
const TimelineTicket = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d65523ea"]]);
const _hoisted_1 = { class: "timeline-ledger" };
const _hoisted_2 = { class: "timeline-flow" };
const _hoisted_3 = { class: "timeline-era__meta" };
const _hoisted_4 = { class: "timeline-era__list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimelinePage",
  setup(__props) {
    const timelineGroups = computed(() => {
      const groups = [];
      for (const item of timeline) {
        const label = item.era || "这些年";
        const lastGroup = groups[groups.length - 1];
        if (!lastGroup || lastGroup.label !== label) {
          groups.push({ label, items: [item] });
          continue;
        }
        lastGroup.items.push(item);
      }
      return groups;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("header", { class: "timeline-intro" }, [
          createBaseVNode("p", { class: "timeline-note" }, "有些年份当时只觉得忙、累、普通，后来才慢慢长成一句会反复想起的话。")
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(timelineGroups.value, (group, groupIndex) => {
            return openBlock(), createElementBlock("section", {
              key: group.label,
              class: "timeline-era"
            }, [
              createBaseVNode("header", _hoisted_3, [
                createBaseVNode("span", null, toDisplayString(group.label), 1),
                createBaseVNode("small", null, toDisplayString(group.items[0].year) + " - " + toDisplayString(group.items[group.items.length - 1].year), 1)
              ]),
              createBaseVNode("div", _hoisted_4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (item, index) => {
                  return openBlock(), createBlock(TimelineTicket, {
                    key: `${item.year}-${item.title}`,
                    item,
                    featured: index === 0 && groupIndex === 0
                  }, null, 8, ["item", "featured"]);
                }), 128))
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const TimelinePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8830b22"]]);
const RawTheme = {
  Layout,
  enhanceApp({ app }) {
    app.component("AboutPage", AboutPage);
    app.component("BookshelfPage", BookshelfPage);
    app.component("MusicPage", MusicPage);
    app.component("NotesPage", NotesPage);
    app.component("ProjectsPage", ProjectsPage);
    app.component("TimelinePage", TimelinePage);
  }
};
export {
  RawTheme as R
};
