import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { LocationDataFragmentDoc, type LocationDataFragment } from "@/gql/graphql";

/**
 * Location component
 * 
 */
export const Location_component : CmsComponent<LocationDataFragment> = ({ data, editProps }) => {
    const componentName = 'Location component'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
Location_component.displayName = "Location component (_component/Location)"
Location_component.getDataFragment = () => ['LocationData', LocationDataFragmentDoc]

export default Location_component