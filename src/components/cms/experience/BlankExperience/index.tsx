import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, BlankExperienceDataFragmentDoc, type BlankExperienceDataFragment, PageSeoSettingsDataFragmentDoc, PageSeoSettingsDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"
import { metadata } from "@/app/layout";

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
let seoData: any;
export const BlankExperience_experience : CmsComponent<BlankExperienceDataFragment> = ({ data, ctx }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    console.log(
  "BlankExperienceSeoSettings",
  JSON.stringify(data?.BlankExperienceSeoSettings, null, 2)
);
    seoData = data.BlankExperienceSeoSettings;
    console.log("SEO Details" + seoData);
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
        { composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} /> }
    </CmsEditable>
}
BlankExperience_experience.displayName = "Blank Experience (_experience/BlankExperience)"
BlankExperience_experience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperience_experience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
   
    // Add your metadata logic here
    
    return {
        title :  seoData?.MetaTitle,
        description : seoData?.MetaDescription
    }
}

export default BlankExperience_experience