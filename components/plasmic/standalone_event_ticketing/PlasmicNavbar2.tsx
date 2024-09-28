// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: MtmcKR1GuwbKEBJfYkVdj
// Component: PlAJ5tJMUQMz

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

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Button from "../../Button"; // plasmic-import: 7c1YDuGGoKuq/component
import LanguageSwitcher from "../../LanguageSwitcher"; // plasmic-import: DKpzFq_s80_Q/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { LocaleValue, useLocale } from "./PlasmicGlobalVariant__Locale"; // plasmic-import: IjXfRSRLVt5J/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: MtmcKR1GuwbKEBJfYkVdj/projectcss
import sty from "./PlasmicNavbar2.module.css"; // plasmic-import: PlAJ5tJMUQMz/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: V9lHh1c0c7g6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _VJXnu9sySb9/icon

createPlasmicElementProxy;

export type PlasmicNavbar2__VariantMembers = {};
export type PlasmicNavbar2__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar2__VariantsArgs;
export const PlasmicNavbar2__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar2__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar2__ArgsType;
export const PlasmicNavbar2__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar2__OverridesType = {
  root?: Flex__<typeof NavigationBar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  languageSwitcher?: Flex__<typeof LanguageSwitcher>;
};

export interface DefaultNavbar2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar2__RenderFunc(props: {
  variants: PlasmicNavbar2__VariantsArgs;
  args: PlasmicNavbar2__ArgsType;
  overrides: PlasmicNavbar2__OverridesType;
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

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
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
    locale: useLocale()
  });

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__njQSk)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"300px"}
            loading={"lazy"}
            src={(() => {
              try {
                return (
                  "https://events-db-directus.6sizjj.easypanel.host/assets/" +
                  $queries.currentDomain.data.response.data[0].Logo
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
            width={``}
          />
        </PlasmicLink__>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootglobal_locale_es]: hasVariant(globalVariants, "locale", "es")
        }
      )}
      closeButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___9ZcjQ)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <Button
            className={classNames("__wab_instance", sty.button__rHXj, {
              [sty.buttonglobal_locale_es__rHXjzPCq4]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
            color={"clear"}
            onClick={async event => {
              const $steps = {};

              $steps["goToLogin"] = true
                ? (() => {
                    const actionArgs = { destination: `/login` };
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
                $steps["goToLogin"] != null &&
                typeof $steps["goToLogin"] === "object" &&
                typeof $steps["goToLogin"].then === "function"
              ) {
                $steps["goToLogin"] = await $steps["goToLogin"];
              }
            }}
            startIcon={
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__daYbo)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nQFuP
              )}
            >
              {"View events"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button___3JjHr, {
              [sty.buttonglobal_locale_es___3JjHRzPCq4]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
            color={"clear"}
            onClick={async event => {
              const $steps = {};

              $steps["goToLogin"] = true
                ? (() => {
                    const actionArgs = { destination: `/login` };
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
                $steps["goToLogin"] != null &&
                typeof $steps["goToLogin"] === "object" &&
                typeof $steps["goToLogin"].then === "function"
              ) {
                $steps["goToLogin"] = await $steps["goToLogin"];
              }
            }}
            startIcon={
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__dmgvI)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__guNNj
              )}
            >
              {"Host events"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__dceHi, {
              [sty.buttonglobal_locale_es__dceHizPCq4]: hasVariant(
                globalVariants,
                "locale",
                "es"
              )
            })}
            color={"blue"}
            onClick={async event => {
              const $steps = {};

              $steps["goToLogin"] = true
                ? (() => {
                    const actionArgs = { destination: `/login` };
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
                $steps["goToLogin"] != null &&
                typeof $steps["goToLogin"] === "object" &&
                typeof $steps["goToLogin"].then === "function"
              ) {
                $steps["goToLogin"] = await $steps["goToLogin"];
              }
            }}
            startIcon={
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__ja2Dd)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__y9MB
              )}
            >
              {"Login"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__hkcE)}
            color={"softSand"}
            startIcon={
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg__xm1Th)}
                role={"img"}
              />
            }
          >
            {"Sign up"}
          </Button>
          <LanguageSwitcher
            data-plasmic-name={"languageSwitcher"}
            data-plasmic-override={overrides.languageSwitcher}
            className={classNames("__wab_instance", sty.languageSwitcher)}
          />
        </React.Fragment>
      }
      openButton={
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__tq4Fq)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "languageSwitcher"],
  link: ["link"],
  languageSwitcher: ["languageSwitcher"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  link: "a";
  languageSwitcher: typeof LanguageSwitcher;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar2__VariantsArgs;
    args?: PlasmicNavbar2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar2__ArgsType,
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
          internalArgPropNames: PlasmicNavbar2__ArgProps,
          internalVariantPropNames: PlasmicNavbar2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar2";
  } else {
    func.displayName = `PlasmicNavbar2.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar2 = Object.assign(
  // Top-level PlasmicNavbar2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    languageSwitcher: makeNodeComponent("languageSwitcher"),

    // Metadata about props expected for PlasmicNavbar2
    internalVariantProps: PlasmicNavbar2__VariantProps,
    internalArgProps: PlasmicNavbar2__ArgProps
  }
);

export default PlasmicNavbar2;
/* prettier-ignore-end */
