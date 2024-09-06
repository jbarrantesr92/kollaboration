// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: MtmcKR1GuwbKEBJfYkVdj
// Component: m986b-5AcW5P

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar2 from "../../Navbar2"; // plasmic-import: PlAJ5tJMUQMz/component
import NavbarEs from "../../NavbarEs"; // plasmic-import: C-pCayljyy4r/component
import TextInput from "../../TextInput"; // plasmic-import: KfDAmu4lid5o/component
import Button from "../../Button"; // plasmic-import: 7c1YDuGGoKuq/component
import Footer2 from "../../Footer2"; // plasmic-import: afuzx2tfyuUz/component
import FooterEspanol from "../../FooterEspanol"; // plasmic-import: HJtSqCLuEANf/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { LocaleValue, useLocale } from "./PlasmicGlobalVariant__Locale"; // plasmic-import: IjXfRSRLVt5J/globalVariant
import { useScreenVariants as useScreenVariantswiZsHgbT5CnT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wiZSHgbT5cnT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: MtmcKR1GuwbKEBJfYkVdj/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: m986b-5AcW5P/css

import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: mFdXj3H03u7X/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: V9lHh1c0c7g6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _VJXnu9sySb9/icon
import MapPinSvgIcon from "./icons/PlasmicIcon__MapPinSvg"; // plasmic-import: TYZZ5eUar4tN/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  navbar2?: Flex__<typeof Navbar2>;
  navbarEs?: Flex__<typeof NavbarEs>;
  header?: Flex__<"section">;
  searchEventEs?: Flex__<typeof TextInput>;
  searchEvent3?: Flex__<typeof TextInput>;
  section?: Flex__<"section">;
  img?: Flex__<typeof PlasmicImg__>;
  footer2?: Flex__<typeof Footer2>;
  footerEspanol?: Flex__<typeof FooterEspanol>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "searchEventEs.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "searchEvent",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "searchEvent3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    events: usePlasmicDataOp(() => {
      return {
        sourceId: "2jPYjgtJgbD3LaNLTLfSHG",
        opId: "8bc3a76d-b404-4394-a0d2-43f8c04e2789",
        userArgs: {
          path: [$queries.currentDomain.data.response.data[0].id]
        },
        cacheKey: `plasmic.$.8bc3a76d-b404-4394-a0d2-43f8c04e2789.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    currentDomain: usePlasmicDataOp(() => {
      return {
        sourceId: "2jPYjgtJgbD3LaNLTLfSHG",
        opId: "b8bbf243-1ef6-4abe-b26a-9d92a0fc0278",
        userArgs: {
          path: [window.location.hostname]
        },
        cacheKey: `plasmic.$.b8bbf243-1ef6-4abe-b26a-9d92a0fc0278.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    locale: useLocale(),
    screen: useScreenVariantswiZsHgbT5CnT()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root,
            {
              [sty.rootglobal_locale_es]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            }
          )}
        >
          <Navbar2
            data-plasmic-name={"navbar2"}
            data-plasmic-override={overrides.navbar2}
            className={classNames("__wab_instance", sty.navbar2, {
              [sty.navbar2global_locale_es]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
          />

          <NavbarEs
            data-plasmic-name={"navbarEs"}
            data-plasmic-override={overrides.navbarEs}
            className={classNames("__wab_instance", sty.navbarEs, {
              [sty.navbarEsglobal_locale_es]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
          />

          <section
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__bew6P)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__giptL,
                  {
                    [sty.textglobal_locale_es__giptLzPCq4]: hasVariant(
                      globalVariants,
                      "locale",
                      "es"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Encuentra tu pr\u00f3ximo evento"}
                  </span>
                </React.Fragment>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gghTk,
                  {
                    [sty.textglobal_locale_es__gghTKzPCq4]: hasVariant(
                      globalVariants,
                      "locale",
                      "es"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Find your next event"}
                  </span>
                </React.Fragment>
              </div>
              <TextInput
                data-plasmic-name={"searchEventEs"}
                data-plasmic-override={overrides.searchEventEs}
                className={classNames("__wab_instance", sty.searchEventEs, {
                  [sty.searchEventEsglobal_locale_es]: hasVariant(
                    globalVariants,
                    "locale",
                    "es"
                  )
                })}
                endIcon={
                  <Button
                    className={classNames("__wab_instance", sty.button___7Zo3)}
                    color={"blue"}
                    onClick={async event => {
                      const $steps = {};

                      $steps["updateSearchEvent"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["searchEvent"]
                              },
                              operation: 0,
                              value: $state.searchEventEs.value
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;

                              $stateSet(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateSearchEvent"] != null &&
                        typeof $steps["updateSearchEvent"] === "object" &&
                        typeof $steps["updateSearchEvent"].then === "function"
                      ) {
                        $steps["updateSearchEvent"] = await $steps[
                          "updateSearchEvent"
                        ];
                      }
                    }}
                    startIcon={
                      <CheckSvgIcon
                        className={classNames(projectcss.all, sty.svg__jvVn)}
                        role={"img"}
                      />
                    }
                  >
                    {"Buscar"}
                  </Button>
                }
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["searchEventEs", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={"Busca eventos, festivales y m\u00e1s"}
                startIcon={
                  <SearchSvgIcon
                    className={classNames(projectcss.all, sty.svg__oMplt)}
                    role={"img"}
                  />
                }
                value={
                  generateStateValueProp($state, ["searchEventEs", "value"]) ??
                  ""
                }
              />

              <TextInput
                data-plasmic-name={"searchEvent3"}
                data-plasmic-override={overrides.searchEvent3}
                className={classNames("__wab_instance", sty.searchEvent3, {
                  [sty.searchEvent3global_locale_es]: hasVariant(
                    globalVariants,
                    "locale",
                    "es"
                  )
                })}
                endIcon={
                  <Button
                    className={classNames("__wab_instance", sty.button__uotlT)}
                    color={"blue"}
                    onClick={async event => {
                      const $steps = {};

                      $steps["updateSearchEvent"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["searchEvent"]
                              },
                              operation: 0,
                              value: $state.searchEvent3.value
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;

                              $stateSet(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateSearchEvent"] != null &&
                        typeof $steps["updateSearchEvent"] === "object" &&
                        typeof $steps["updateSearchEvent"].then === "function"
                      ) {
                        $steps["updateSearchEvent"] = await $steps[
                          "updateSearchEvent"
                        ];
                      }
                    }}
                    startIcon={
                      <CheckSvgIcon
                        className={classNames(projectcss.all, sty.svg___2I4S)}
                        role={"img"}
                      />
                    }
                  >
                    {"Search"}
                  </Button>
                }
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["searchEvent3", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={"Search for events, festivals, and more"}
                startIcon={
                  <SearchSvgIcon
                    className={classNames(projectcss.all, sty.svg__s1VYo)}
                    role={"img"}
                  />
                }
                value={
                  generateStateValueProp($state, ["searchEvent3", "value"]) ??
                  ""
                }
              />
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pUHkK)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nBcYp)}
              >
                <MapPinSvgIcon
                  className={classNames(projectcss.all, sty.svg__r9XAe)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3Tsfx
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Near San Francisco, CA"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bzcdn
                  )}
                >
                  {"Within 100 miles"}
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox___8NeRb)}>
                <MapPinSvgIcon
                  className={classNames(projectcss.all, sty.svg__hgMyd)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qBdu9
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Any date"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zhTpa
                  )}
                >
                  {"Any date"}
                </div>
              </div>
            </Stack__>
          </section>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__w1XeO)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tTxiv
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Events"}
                  </span>
                </React.Fragment>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__f0DmX)}>
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.events.data.response.data;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox___6CwJ)}
                      key={currentIndex}
                      onClick={async event => {
                        const $steps = {};

                        $steps["goToEvent"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: `/event/${(() => {
                                  try {
                                    return currentItem.id;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}`
                              };
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToEvent"] != null &&
                          typeof $steps["goToEvent"] === "object" &&
                          typeof $steps["goToEvent"].then === "function"
                        ) {
                          $steps["goToEvent"] = await $steps["goToEvent"];
                        }
                      }}
                    >
                      <PlasmicImg__
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(sty.img)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        height={"240"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return (
                              "https://events-db-directus.6sizjj.easypanel.host/assets/" +
                              currentItem.Hero
                            );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        width={"240"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eTqPm
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.EventName;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gs1Tz
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.EventDate;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    </Stack__>
                  );
                })}
              </div>
            </Stack__>
          </section>
          <Footer2
            data-plasmic-name={"footer2"}
            data-plasmic-override={overrides.footer2}
            className={classNames("__wab_instance", sty.footer2, {
              [sty.footer2global_locale_es]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
          />

          <FooterEspanol
            data-plasmic-name={"footerEspanol"}
            data-plasmic-override={overrides.footerEspanol}
            className={classNames("__wab_instance", sty.footerEspanol, {
              [sty.footerEspanolglobal_locale_es]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar2",
    "navbarEs",
    "header",
    "searchEventEs",
    "searchEvent3",
    "section",
    "img",
    "footer2",
    "footerEspanol"
  ],
  navbar2: ["navbar2"],
  navbarEs: ["navbarEs"],
  header: ["header", "searchEventEs", "searchEvent3"],
  searchEventEs: ["searchEventEs"],
  searchEvent3: ["searchEvent3"],
  section: ["section", "img"],
  img: ["img"],
  footer2: ["footer2"],
  footerEspanol: ["footerEspanol"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar2: typeof Navbar2;
  navbarEs: typeof NavbarEs;
  header: "section";
  searchEventEs: typeof TextInput;
  searchEvent3: typeof TextInput;
  section: "section";
  img: typeof PlasmicImg__;
  footer2: typeof Footer2;
  footerEspanol: typeof FooterEspanol;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar2: makeNodeComponent("navbar2"),
    navbarEs: makeNodeComponent("navbarEs"),
    header: makeNodeComponent("header"),
    searchEventEs: makeNodeComponent("searchEventEs"),
    searchEvent3: makeNodeComponent("searchEvent3"),
    section: makeNodeComponent("section"),
    img: makeNodeComponent("img"),
    footer2: makeNodeComponent("footer2"),
    footerEspanol: makeNodeComponent("footerEspanol"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */