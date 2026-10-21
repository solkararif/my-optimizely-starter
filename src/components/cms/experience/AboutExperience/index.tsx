import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, AboutExperienceDataFragmentDoc, type AboutExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * About Experience
 * 
 */
export const AboutExperience_experience : CmsComponent<AboutExperienceDataFragment> = ({ data, ctx }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
        { composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} /> }
    </CmsEditable>
}
AboutExperience_experience.displayName = "About Experience (_experience/AboutExperience)"
AboutExperience_experience.getDataFragment = () => ['AboutExperienceData', AboutExperienceDataFragmentDoc]
AboutExperience_experience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default AboutExperience_experience