import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { BannerDataFragmentDoc, type BannerDataFragment } from "@/gql/graphql";

/**
 * Banner
 * 
 */
export const Banner_component : CmsComponent<BannerDataFragment> = ({ data, editProps }) => {
    const componentName = 'Banner'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
Banner_component.displayName = "Banner (_component/Banner)"
Banner_component.getDataFragment = () => ['BannerData', BannerDataFragmentDoc]

export default Banner_component