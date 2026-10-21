import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { GenericMediaDataFragmentDoc, type GenericMediaDataFragment } from "@/gql/graphql";

/**
 * Generic media
 * Used for generic media without any dedicated content type.
 */
export const GenericMedia_media : CmsComponent<GenericMediaDataFragment> = ({ data, editProps }) => {
    const componentName = 'Generic media'
    const componentInfo = 'Used for generic media without any dedicated content type.'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
GenericMedia_media.displayName = "Generic media (_media/GenericMedia)"
GenericMedia_media.getDataFragment = () => ['GenericMediaData', GenericMediaDataFragmentDoc]

export default GenericMedia_media