// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: MtmcKR1GuwbKEBJfYkVdj
// Component: wouEDZxT7rVz

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

import Button from "../../Button"; // plasmic-import: 7c1YDuGGoKuq/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: MtmcKR1GuwbKEBJfYkVdj/projectcss
import sty from "./PlasmicQrCodeActions.module.css"; // plasmic-import: wouEDZxT7rVz/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: V9lHh1c0c7g6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _VJXnu9sySb9/icon

createPlasmicElementProxy;

export type PlasmicQrCodeActions__VariantMembers = {};
export type PlasmicQrCodeActions__VariantsArgs = {};
type VariantPropType = keyof PlasmicQrCodeActions__VariantsArgs;
export const PlasmicQrCodeActions__VariantProps = new Array<VariantPropType>();

export type PlasmicQrCodeActions__ArgsType = {
  handleValidate?: () => void;
  handleCancel?: () => void;
};
type ArgPropType = keyof PlasmicQrCodeActions__ArgsType;
export const PlasmicQrCodeActions__ArgProps = new Array<ArgPropType>(
  "handleValidate",
  "handleCancel"
);

export type PlasmicQrCodeActions__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultQrCodeActionsProps {
  handleValidate?: () => void;
  handleCancel?: () => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQrCodeActions__RenderFunc(props: {
  variants: PlasmicQrCodeActions__VariantsArgs;
  args: PlasmicQrCodeActions__ArgsType;
  overrides: PlasmicQrCodeActions__OverridesType;
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

  return (
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___5XgxQ)}>
        <Button
          className={classNames("__wab_instance", sty.button__pcZhF)}
          color={"green"}
          onClick={async event => {
            const $steps = {};

            $steps["runHandleValidate"] = true
              ? (() => {
                  const actionArgs = { eventRef: $props["handleValidate"] };
                  return (({ eventRef, args }) => {
                    return eventRef?.(...(args ?? []));
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runHandleValidate"] != null &&
              typeof $steps["runHandleValidate"] === "object" &&
              typeof $steps["runHandleValidate"].then === "function"
            ) {
              $steps["runHandleValidate"] = await $steps["runHandleValidate"];
            }
          }}
          startIcon={
            <CheckSvgIcon
              className={classNames(projectcss.all, sty.svg__jzl11)}
              role={"img"}
            />
          }
        >
          {"Validate"}
        </Button>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___8ERc6)}>
        <Button
          className={classNames("__wab_instance", sty.button__clb8R)}
          color={"softRed"}
          onClick={async event => {
            const $steps = {};

            $steps["runHandleCancel"] = true
              ? (() => {
                  const actionArgs = { eventRef: $props["handleCancel"] };
                  return (({ eventRef, args }) => {
                    return eventRef?.(...(args ?? []));
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runHandleCancel"] != null &&
              typeof $steps["runHandleCancel"] === "object" &&
              typeof $steps["runHandleCancel"].then === "function"
            ) {
              $steps["runHandleCancel"] = await $steps["runHandleCancel"];
            }
          }}
          startIcon={
            <CheckSvgIcon
              className={classNames(projectcss.all, sty.svg__ny1J)}
              role={"img"}
            />
          }
        >
          {"Cancel"}
        </Button>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQrCodeActions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQrCodeActions__VariantsArgs;
    args?: PlasmicQrCodeActions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQrCodeActions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQrCodeActions__ArgsType,
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
          internalArgPropNames: PlasmicQrCodeActions__ArgProps,
          internalVariantPropNames: PlasmicQrCodeActions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQrCodeActions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQrCodeActions";
  } else {
    func.displayName = `PlasmicQrCodeActions.${nodeName}`;
  }
  return func;
}

export const PlasmicQrCodeActions = Object.assign(
  // Top-level PlasmicQrCodeActions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicQrCodeActions
    internalVariantProps: PlasmicQrCodeActions__VariantProps,
    internalArgProps: PlasmicQrCodeActions__ArgProps
  }
);

export default PlasmicQrCodeActions;
/* prettier-ignore-end */
