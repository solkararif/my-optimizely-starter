import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { TileRowDisplayTemplateProps } from "../displayTemplates";

export const TileRowDisplayTemplate : CmsLayoutComponent<TileRowDisplayTemplateProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:TileRowDisplayTemplate">{ children }</div>);
}

export default TileRowDisplayTemplate;