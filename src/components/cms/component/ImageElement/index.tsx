import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ImageElementDataFragmentDoc, type ImageElementDataFragment } from "@/gql/graphql";
import { ImageElementLayoutProps } from "./displayTemplates";

/**
 * Image
 * 
 */
export const ImageElement_component : CmsComponent<ImageElementDataFragment, ImageElementLayoutProps> = ({ data, layoutProps, editProps }) => {
    const componentName = 'Image'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ImageElement_component.displayName = "Image (_component/ImageElement)"
ImageElement_component.getDataFragment = () => ['ImageElementData', ImageElementDataFragmentDoc]

export default ImageElement_component