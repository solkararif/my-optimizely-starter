import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { LandingSectionDisplayTemplateProps } from "../displayTemplates";

export const LandingSectionDisplayTemplate : CmsLayoutComponent<LandingSectionDisplayTemplateProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:_component vb:_component:LandingSectionDisplayTemplate">{ children }</div>);
}

export default LandingSectionDisplayTemplate;