import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { TileColumnDisplayTemplateProps } from "../displayTemplates";

export const TileColumnDisplayTemplate : CmsLayoutComponent<TileColumnDisplayTemplateProps> = ({ layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:TileColumnDisplayTemplate">{ children }</div>);
}

export default TileColumnDisplayTemplate;