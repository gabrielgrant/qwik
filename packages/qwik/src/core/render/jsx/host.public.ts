import { jsx } from '../jsx/jsx-runtime';
import type { HTMLAttributes } from './types/jsx-generated';
import type { FunctionComponent } from './types/jsx-node';

/**
 * @public
 */
export interface HostAttributes extends HTMLAttributes<HTMLElement> {
  [key: string]: any;
}

/**
 * Place at the root of the component View to allow binding of attributes on the Host element.
 *
 * ```
 * <Host someAttr={someExpr} someAttrStatic="value">
 *   View content implementation.
 * </Host>
 * ```
 *
 * Qwik requires that components have [docs/HOST_ELEMENTS.ts] so that it is possible to have
 * asynchronous loading point. Host element is not owned by the component. At times it is
 * desirable for the component to render additional attributes on the host element. `<Host>`
 * servers that purpose.
 *
 * @public
 */
export const Host: FunctionComponent<HostAttributes> = ((props: any) => props.children) as any;

/**
 * @alpha
 */
export const SkipRerender: FunctionComponent<{}> = ((props: any) => props.children) as any;

/**
 * @alpha
 */
export const SSRComment: FunctionComponent<{ data: string }> = (() => null) as any;

/**
 * @alpha
 */
export const SSRStreamBlock: FunctionComponent<{ children?: any }> = (props) => {
  return [
    jsx(SSRComment, { data: 'qkssr-pu' }),
    props.children,
    jsx(SSRComment, { data: 'qkssr-po' }),
  ] as any;
};
