"use strict";
(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 4447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function StackList(props) {
    const { stack: stack1  } = props;
    const renderList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((stack)=>{
        const { value , color  } = config_stack__WEBPACK_IMPORTED_MODULE_1__/* .StackInfo */ .AQ[stack];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white",
            style: {
                background: color
            },
            children: value
        }, stack);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-2 flex flex-wrap",
        children: react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(stack1.map(renderList))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StackList);


/***/ }),

/***/ 4823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Project),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Conditional.tsx

function Conditional(props) {
    const { condition , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: Boolean(condition) && children
    });
}
/* harmony default export */ const components_Conditional = (Conditional);

// EXTERNAL MODULE: ./components/Form.tsx
var Form = __webpack_require__(3682);
// EXTERNAL MODULE: ./config/colors.ts
var colors = __webpack_require__(3442);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./components/list/DeploymentList.tsx




function DeploymentList(props) {
    const { deployment  } = props;
    function renderList(type) {
        const background = colors/* Colors */.w[type];
        const link = deployment[type];
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: "mr-2 flex items-center rounded-sm px-2 py-1 text-xs font-medium text-white",
            href: link,
            style: {
                background
            },
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineLink, {
                    className: "mr-1",
                    size: 15
                }),
                type
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex",
        children: external_react_default().Children.toArray(Object.keys(deployment).map(renderList))
    });
}
/* harmony default export */ const list_DeploymentList = (DeploymentList);

// EXTERNAL MODULE: ./components/list/StackList.tsx
var StackList = __webpack_require__(4447);
// EXTERNAL MODULE: ./components/SEO.tsx
var SEO = __webpack_require__(9829);
// EXTERNAL MODULE: ./config/index.ts
var config = __webpack_require__(8014);
// EXTERNAL MODULE: ./config/projects.ts
var projects = __webpack_require__(7260);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-indiana-drag-scroll"
const external_react_indiana_drag_scroll_namespaceObject = require("react-indiana-drag-scroll");
var external_react_indiana_drag_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_indiana_drag_scroll_namespaceObject);
;// CONCATENATED MODULE: ./pages/projects/[slug].tsx











const { projects: _slug_projects  } = config/* default */.Z;
async function getStaticPaths() {
    return {
        paths: _slug_projects.map(({ slug  })=>({
                params: {
                    slug
                }
            })
        ),
        fallback: false
    };
}
const getStaticProps = async ({ params  })=>{
    const project1 = _slug_projects.find((project)=>project.slug === params.slug
    );
    return {
        props: {
            project: project1
        }
    };
};
function Project({ project  }) {
    const { title: title1 , description: description1 , shortDescription , banner , dimensions , stack , deployment: deployment1 , screenshots , subProjects ,  } = project;
    const [height, width] = dimensions !== null && dimensions !== void 0 ? dimensions : projects/* defaultDimensions */.o;
    const renderScreenShotList = (0,external_react_.useCallback)((screenshot)=>{
        const style = {
            height,
            width
        };
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mr-2 flex-shrink-0 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark",
            style: style,
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                loading: "eager",
                src: screenshot,
                height: height,
                width: width,
                objectFit: "cover",
                alt: ""
            })
        });
    }, [
        height,
        width
    ]);
    const renderSubProjectList = (0,external_react_.useCallback)(({ title , deployment , description  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Form.H3, {
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Conditional, {
                    condition: !!deployment,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(list_DeploymentList, {
                        deployment: deployment
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-2 mb-4 font-light",
                    children: description
                })
            ]
        })
    , []);
    const hasDeployments = !!deployment1;
    const hasScreenshots = !!screenshots.length;
    const hasSubProjects = !!subProjects.length;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* PageSEO */.TQ, {
                title: title1,
                description: shortDescription || description1,
                imageUrl: banner
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Form.H1, {
                className: "lg:text-5x mb-4 text-3xl font-bold dark:text-white",
                children: title1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-4 font-light",
                style: {
                    whiteSpace: "pre-line"
                },
                children: description1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Form.H2, {
                children: "Stack"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StackList/* default */.Z, {
                stack: stack
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Conditional, {
                condition: hasDeployments,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Form.H2, {
                        children: "Deployments"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(list_DeploymentList, {
                        deployment: deployment1
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Conditional, {
                condition: hasScreenshots,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Form.H2, {
                        className: "my-4",
                        children: "Screenshots"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_indiana_drag_scroll_default()), {
                        className: "list mt-4 mb-1 flex overflow-auto",
                        hideScrollbars: false,
                        children: external_react_default().Children.toArray(screenshots.map(renderScreenShotList))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Conditional, {
                condition: hasSubProjects,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Form.H2, {
                        className: "mt-4",
                        children: "More Products"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-1 mb-4 font-light",
                        children: "Some additional products"
                    }),
                    external_react_default().Children.toArray(subProjects.map(renderSubProjectList))
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675,576,829,437,442,139,14], () => (__webpack_exec__(4823)));
module.exports = __webpack_exports__;

})();