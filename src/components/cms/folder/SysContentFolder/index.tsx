import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { SysContentFolderDataFragmentDoc, type SysContentFolderDataFragment } from "@/gql/graphql";

/**
 * 
 * Used as content folder
 */
export const SysContentFolder_folder : CmsComponent<SysContentFolderDataFragment> = ({ data, editProps }) => {
    const componentName = ''
    const componentInfo = 'Used as content folder'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
SysContentFolder_folder.displayName = " (_folder/SysContentFolder)"
SysContentFolder_folder.getDataFragment = () => ['SysContentFolderData', SysContentFolderDataFragmentDoc]

export default SysContentFolder_folder