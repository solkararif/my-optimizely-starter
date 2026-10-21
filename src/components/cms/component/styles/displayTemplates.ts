//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type LandingSectionDisplayTemplateStyles from "./LandingSectionDisplayTemplate/LandingSectionDisplayTemplate.opti-style.json"
import type SquareDisplayTemplateStyles from "./SquareDisplayTemplate/SquareDisplayTemplate.opti-style.json"

export type LandingSectionDisplayTemplateProps = LayoutProps<typeof LandingSectionDisplayTemplateStyles>
export type LandingSectionDisplayTemplateComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: LandingSectionDisplayTemplateProps | undefined
} & JSX.IntrinsicElements['div']
export type LandingSectionDisplayTemplateComponent<DT extends Record<string, any> = Record<string, any>> = (props: LandingSectionDisplayTemplateComponentProps<DT>) => ReactNode

export type SquareDisplayTemplateProps = LayoutProps<typeof SquareDisplayTemplateStyles>
export type SquareDisplayTemplateComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: SquareDisplayTemplateProps | undefined
} & JSX.IntrinsicElements['div']
export type SquareDisplayTemplateComponent<DT extends Record<string, any> = Record<string, any>> = (props: SquareDisplayTemplateComponentProps<DT>) => ReactNode


export type ComponentLayoutProps = LandingSectionDisplayTemplateProps | SquareDisplayTemplateProps
export type ComponentComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ComponentLayoutProps = ComponentLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type ComponentComponent<DT extends Record<string, any> = Record<string, any>, LP extends ComponentLayoutProps = ComponentLayoutProps> = (props: ComponentComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: ComponentLayoutProps | null) : props is LandingSectionDisplayTemplateProps
{
    return props?.template == "LandingSectionDisplayTemplate"
}

export function isLandingSectionDisplayTemplateProps(props?: ComponentLayoutProps | null) : props is LandingSectionDisplayTemplateProps
{
    return props?.template == "LandingSectionDisplayTemplate"
}

export function isSquareDisplayTemplateProps(props?: ComponentLayoutProps | null) : props is SquareDisplayTemplateProps
{
    return props?.template == "SquareDisplayTemplate"
}