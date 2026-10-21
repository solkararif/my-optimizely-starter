import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ButtonBlockDataFragmentDoc, type ButtonBlockDataFragment } from "@/gql/graphql";

/**
 * Button
 * Represents an instance of a button
 */
export const ButtonBlock_component : CmsComponent<ButtonBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Button'
    const componentInfo = 'Represents an instance of a button'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ButtonBlock_component.displayName = "Button (_component/ButtonBlock)"
ButtonBlock_component.getDataFragment = () => ['ButtonBlockData', ButtonBlockDataFragmentDoc]

export default ButtonBlock_component