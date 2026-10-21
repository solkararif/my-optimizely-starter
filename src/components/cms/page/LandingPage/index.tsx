import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { LandingPageDataFragmentDoc, type LandingPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Landing Page
 * A page entirely built out of blocks.
 */
export const LandingPage_page : CmsComponent<LandingPageDataFragment> = ({ data }) => {
    const componentName = 'Landing Page'
    const componentInfo = 'A page entirely built out of blocks.'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
LandingPage_page.displayName = "Landing Page (_page/LandingPage)"
LandingPage_page.getDataFragment = () => ['LandingPageData', LandingPageDataFragmentDoc]
LandingPage_page.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default LandingPage_page