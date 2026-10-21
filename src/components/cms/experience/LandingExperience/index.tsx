import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, LandingExperienceDataFragmentDoc, type LandingExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Landing Experience
 * 
 */
export const LandingExperience_experience : CmsComponent<LandingExperienceDataFragment> = ({ data, ctx }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
        { composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} /> }
    </CmsEditable>
}
LandingExperience_experience.displayName = "Landing Experience (_experience/LandingExperience)"
LandingExperience_experience.getDataFragment = () => ['LandingExperienceData', LandingExperienceDataFragmentDoc]
LandingExperience_experience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default LandingExperience_experience