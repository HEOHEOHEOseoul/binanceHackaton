(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./hooks/index.tsx + 1 modules
var hooks = __webpack_require__(390);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/Header.tsx





// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경
const scrollLink = [
    {
        id: "/dapp",
        name: "DApp"
    }
];
const Header = ()=>{
    const { account , getAccount  } = (0,hooks/* useWallet */.Os)();
    const onClickWallet = ()=>{
        getAccount();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        position: "fixed",
        w: "full",
        top: 0,
        justifyContent: "space-between",
        alignItems: "center",
        px: 8,
        py: 2,
        shadow: "md",
        zIndex: 1,
        bgColor: "gray.50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontWeight: "bold",
                        fontSize: "xl",
                        cursor: "pointer",
                        children: "SpotSpot"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: scrollLink.map((v, i)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: v.id,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            mx: 12,
                            variant: "ghost",
                            fontWeight: "bold",
                            children: v.name
                        })
                    }, i);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justifyContent: "center",
                alignItems: "center",
                children: account ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Popover, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverTrigger, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineWallet, {
                                        size: 28
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        ml: 2,
                                        fontSize: "xs",
                                        children: [
                                            account.substring(0, 4),
                                            "...",
                                            account.substring(account.length - 4)
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.PopoverContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverArrow, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverCloseButton, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverHeader, {
                                    fontWeight: "bold",
                                    children: "ProjectLion NFT"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.PopoverBody, {
                                    cursor: "pointer",
                                    fontSize: "xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/my-nft",
                                        children: "내 NFT 보기"
                                    })
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                    onClick: onClickWallet,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineWallet, {
                            size: 28
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            ml: 2,
                            fontSize: "xs",
                            children: [
                                "MetaMask",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " LogIn"
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_Header = (Header);

;// CONCATENATED MODULE: ./components/common/Layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "SpotSpot NFT"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "ProjectLion NFT"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(common_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    textAlign: "center",
                    my: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontSize: "sm",
                            children: "Team HotSpot | 76, Haneul-gil, Gangseo-gu, Seoul, Republic of Korea | E-Mail h662@olbm.app"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontSize: "xs",
                            mt: 1,
                            children: "COPYRIGHT \xa9 Team HotSpot. ALL RIGHT RESERVED"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const common_Layout = (Layout);

// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(5544);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(common_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 5544:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,390], () => (__webpack_exec__(8225)));
module.exports = __webpack_exports__;

})();