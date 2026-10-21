import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { SquareDisplayTemplateProps } from "../displayTemplates";

export const SquareDisplayTemplate : CmsLayoutComponent<SquareDisplayTemplateProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:_component vb:_component:SquareDisplayTemplate">{ children }</div>);
}

export default SquareDisplayTemplate;