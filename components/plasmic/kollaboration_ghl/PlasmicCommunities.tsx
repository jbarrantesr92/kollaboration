// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6nkmFbRpkCCeYJxNDNvxHP
// Component: 6N2DeyyR5ROR

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

import TextInput from "../../TextInput"; // plasmic-import: 8UuapZzmVgHc/component
import Button from "../../Button"; // plasmic-import: f5aFEOq_jrMk/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6nkmFbRpkCCeYJxNDNvxHP/projectcss
import sty from "./PlasmicCommunities.module.css"; // plasmic-import: 6N2DeyyR5ROR/css

import CompassSvgIcon from "./icons/PlasmicIcon__CompassSvg"; // plasmic-import: Fmf9646b-oNB/icon
import Plus1SvgIcon from "./icons/PlasmicIcon__Plus1Svg"; // plasmic-import: jeMNj42KSlt-/icon
import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: s_pbgKf5r6YF/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: dV_M4gggqVX-/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: -J2lXRM8ra-O/icon

createPlasmicElementProxy;

export type PlasmicCommunities__VariantMembers = {};
export type PlasmicCommunities__VariantsArgs = {};
type VariantPropType = keyof PlasmicCommunities__VariantsArgs;
export const PlasmicCommunities__VariantProps = new Array<VariantPropType>();

export type PlasmicCommunities__ArgsType = {};
type ArgPropType = keyof PlasmicCommunities__ArgsType;
export const PlasmicCommunities__ArgProps = new Array<ArgPropType>();

export type PlasmicCommunities__OverridesType = {
  root?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
};

export interface DefaultCommunitiesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCommunities__RenderFunc(props: {
  variants: PlasmicCommunities__VariantsArgs;
  args: PlasmicCommunities__ArgsType;
  overrides: PlasmicCommunities__OverridesType;
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
        path: "textInput.value",
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
    communities: usePlasmicDataOp(() => {
      return {
        sourceId: "hcB8E47YRDpisPZ3DSKShe",
        opId: "e22a9cac-ccca-49e8-8c4f-b916aaa9590d",
        userArgs: {},
        cacheKey: `plasmic.$.e22a9cac-ccca-49e8-8c4f-b916aaa9590d.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "hcB8E47YRDpisPZ3DSKShe",
        opId: "0120f156-6bc1-487c-9579-48fd9dba3bc5",
        userArgs: {},
        cacheKey: `plasmic.$.0120f156-6bc1-487c-9579-48fd9dba3bc5.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__dXWd9)}>
            <div className={classNames(projectcss.all, sty.freeBox__kFiS)}>
              <div className={classNames(projectcss.all, sty.freeBox___0YBgX)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___5FHsd)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToCommunities"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: `/view-communities`
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
                      $steps["goToCommunities"] != null &&
                      typeof $steps["goToCommunities"] === "object" &&
                      typeof $steps["goToCommunities"].then === "function"
                    ) {
                      $steps["goToCommunities"] = await $steps[
                        "goToCommunities"
                      ];
                    }
                  }}
                >
                  <CompassSvgIcon
                    className={classNames(projectcss.all, sty.svg__a9Wd0)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gbKup
                    )}
                  >
                    {"Explore"}
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lSg2)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToCreateCommunity"] = true
                      ? (() => {
                          const actionArgs = { destination: `/` };
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
                      $steps["goToCreateCommunity"] != null &&
                      typeof $steps["goToCreateCommunity"] === "object" &&
                      typeof $steps["goToCreateCommunity"].then === "function"
                    ) {
                      $steps["goToCreateCommunity"] = await $steps[
                        "goToCreateCommunity"
                      ];
                    }
                  }}
                >
                  <Plus1SvgIcon
                    className={classNames(projectcss.all, sty.svg__f2F4A)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mj661
                    )}
                  >
                    {"Create"}
                  </div>
                </Stack__>
              </div>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ui3OK)}
            >
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["textInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                value={
                  generateStateValueProp($state, ["textInput", "value"]) ?? ""
                }
              />

              <Button
                className={classNames("__wab_instance", sty.button__zhIiR)}
                color={"blue"}
                shape={"rounded"}
                size={"compact"}
              >
                {"Search"}
              </Button>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__yd2Hb)}>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.communities.data.response.data;
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
                  <div
                    className={classNames(projectcss.all, sty.freeBox__cXw2O)}
                    key={currentIndex}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToCommunityDetails"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: `/community-detail/${(() => {
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
                        $steps["goToCommunityDetails"] != null &&
                        typeof $steps["goToCommunityDetails"] === "object" &&
                        typeof $steps["goToCommunityDetails"].then ===
                          "function"
                      ) {
                        $steps["goToCommunityDetails"] = await $steps[
                          "goToCommunityDetails"
                        ];
                      }
                    }}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__eqcTw)}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img___2OkZd)}
                        displayHeight={"100%"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return (() => {
                              const img_id =
                                $queries.query.data.response.data.filter(
                                  community =>
                                    community.Communities_id == currentItem.id
                                )[0].directus_files_id;
                              return (
                                "https://kollaberation-directus.xc9xgr.easypanel.host/assets/" +
                                img_id
                              );
                            })();
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
                      />
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8WFy4
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__cp2M5
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__z7Q3
                          )}
                        >
                          <PlasmicImg__
                            alt={""}
                            className={classNames(sty.img__pZvn)}
                            displayHeight={"auto"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"100%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"40px"}
                            loading={"lazy"}
                            src={(() => {
                              try {
                                return (
                                  "https://kollaberation-directus.xc9xgr.easypanel.host/assets/" +
                                  currentItem.ProfileLogo
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
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mjNnL
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.Title;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8L4TA
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return (() => {
                                  const maxLength = 100;
                                  let shortDescription =
                                    currentItem.ShortDescription;
                                  if (shortDescription.length > maxLength) {
                                    shortDescription =
                                      shortDescription.slice(0, maxLength) +
                                      "...";
                                  }
                                  return shortDescription;
                                })();
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
                            sty.freeBox__vbwtf
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___7MfIh
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.Private
                                    ? "Private"
                                    : "Public";
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
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
                              sty.text__opbVt
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (() => {
                                    function formatNumber(value) {
                                      if (value >= 1000000) {
                                        return (
                                          (value / 1000000).toFixed(1) + "M"
                                        );
                                        return (value / 1000).toFixed(1) + "K";
                                      }
                                      return value.toString();
                                    }
                                    const members = currentItem.Members
                                      ? formatNumber(currentItem.Members)
                                      : "0";
                                    const formattedString = `${members} Members`;
                                    return formattedString;
                                  })();
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
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
                              sty.text__fa3C
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (() => {
                                    const formattedPrice =
                                      new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                      }).format(currentItem.Price);
                                    const formattedString = `${formattedPrice}/Month`;
                                    return formattedString;
                                  })();
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__mKzeW
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__vesY5
                          )}
                          color={"softSand"}
                          link={`/community-detail/${(() => {
                            try {
                              return currentItem.id;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}`}
                          shape={"rounded"}
                        >
                          {"View"}
                        </Button>
                      </div>
                    </Stack__>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput"],
  textInput: ["textInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCommunities__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCommunities__VariantsArgs;
    args?: PlasmicCommunities__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCommunities__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCommunities__ArgsType,
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
          internalArgPropNames: PlasmicCommunities__ArgProps,
          internalVariantPropNames: PlasmicCommunities__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCommunities__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommunities";
  } else {
    func.displayName = `PlasmicCommunities.${nodeName}`;
  }
  return func;
}

export const PlasmicCommunities = Object.assign(
  // Top-level PlasmicCommunities renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicCommunities
    internalVariantProps: PlasmicCommunities__VariantProps,
    internalArgProps: PlasmicCommunities__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCommunities;
/* prettier-ignore-end */
