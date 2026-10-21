import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { HeroDataFragmentDoc, type HeroDataFragment } from "@/gql/graphql";

/**
 * Hero
 * 
 */
export const Hero_component : CmsComponent<HeroDataFragment> = ({ data, editProps }) => {
    const componentName = 'Hero'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
Hero_component.displayName = "Hero (_component/Hero)"
Hero_component.getDataFragment = () => ['HeroData', HeroDataFragmentDoc]

export default Hero_component