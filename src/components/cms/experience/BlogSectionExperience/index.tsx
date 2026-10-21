import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, BlogSectionExperienceDataFragmentDoc, type BlogSectionExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Blog/News Section
 * Add a blog/news section to your site
 */
export const BlogSectionExperience_experience : CmsComponent<BlogSectionExperienceDataFragment> = ({ data, ctx }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
        { composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} /> }
    </CmsEditable>
}
BlogSectionExperience_experience.displayName = "Blog/News Section (_experience/BlogSectionExperience)"
BlogSectionExperience_experience.getDataFragment = () => ['BlogSectionExperienceData', BlogSectionExperienceDataFragmentDoc]
BlogSectionExperience_experience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default BlogSectionExperience_experience