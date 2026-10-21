import { CmsEditable, type CmsLayoutComponent } from '@remkoj/optimizely-cms-react/rsc'

export const VisualBuilderNode : CmsLayoutComponent = ({ editProps, layoutProps, children }) =>
{
    let className = `vb:${layoutProps?.layoutType}`
    if (layoutProps && layoutProps.layoutType == "section")
        return <CmsEditable as="div" className={ className } {...editProps}>{ children }</CmsEditable>
    return <div className={ className }>{ children }</div>
}

export default VisualBuilderNode