import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { BlankSectionDataFragmentDoc, type BlankSectionDataFragment } from "@/gql/graphql";

/**
 * Blank Section
 * A section without a predefined layout.
 */
export const BlankSection_section : CmsComponent<BlankSectionDataFragment> = ({ data, editProps }) => {
    const componentName = 'Blank Section'
    const componentInfo = 'A section without a predefined layout.'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
BlankSection_section.displayName = "Blank Section (_section/BlankSection)"
BlankSection_section.getDataFragment = () => ['BlankSectionData', BlankSectionDataFragmentDoc]

export default BlankSection_section