import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { LandingDataFragmentDoc, type LandingDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Landing page
 * 
 */
export const Landing_page : CmsComponent<LandingDataFragment> = ({ data }) => {
    const componentName = 'Landing page'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
Landing_page.displayName = "Landing page (_page/Landing)"
Landing_page.getDataFragment = () => ['LandingData', LandingDataFragmentDoc]
Landing_page.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default Landing_page