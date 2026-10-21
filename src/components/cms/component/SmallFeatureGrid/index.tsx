import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { SmallFeatureGridDataFragmentDoc, type SmallFeatureGridDataFragment } from "@/gql/graphql";

/**
 * Small feature grid
 * 
 */
export const SmallFeatureGrid_component : CmsComponent<SmallFeatureGridDataFragment> = ({ data, editProps }) => {
    const componentName = 'Small feature grid'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
SmallFeatureGrid_component.displayName = "Small feature grid (_component/SmallFeatureGrid)"
SmallFeatureGrid_component.getDataFragment = () => ['SmallFeatureGridData', SmallFeatureGridDataFragmentDoc]

export default SmallFeatureGrid_component