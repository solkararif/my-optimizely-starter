import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { MegaMenuGroupBlockDataFragmentDoc, type MegaMenuGroupBlockDataFragment } from "@/gql/graphql";

/**
 * Header menu item
 * A menu item for the Header Menu
 */
export const MegaMenuGroupBlock_component : CmsComponent<MegaMenuGroupBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Header menu item'
    const componentInfo = 'A menu item for the Header Menu'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
MegaMenuGroupBlock_component.displayName = "Header menu item (_component/MegaMenuGroupBlock)"
MegaMenuGroupBlock_component.getDataFragment = () => ['MegaMenuGroupBlockData', MegaMenuGroupBlockDataFragmentDoc]

export default MegaMenuGroupBlock_component