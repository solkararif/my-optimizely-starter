import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import {
  ExperienceDataFragmentDoc,
  BlankExperienceDataFragmentDoc,
  type BlankExperienceDataFragment,
  PageSeoSettingsDataFragmentDoc,
} from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql";

type SeoData = {
  MetaTitle?: string | null;
  MetaDescription?: string | null;
};

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
export const BlankExperience_experience: CmsComponent<BlankExperienceDataFragment> = ({ data, ctx }) => {
  const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition;

  // Read SEO from the current page data only
  const seo = getFragmentData(PageSeoSettingsDataFragmentDoc, data?.BlankExperienceSeoSettings) as SeoData | null;

  return (
    <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
      {composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} />}
    </CmsEditable>
  );
};

BlankExperience_experience.displayName = "Blank Experience (_experience/BlankExperience)";
BlankExperience_experience.getDataFragment = () => ["BlankExperienceData", BlankExperienceDataFragmentDoc];

BlankExperience_experience.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client);

  // Fetch page SEO using the current contentLink/locale.
  // Use the generated SDK method that matches your GraphQL schema.
  // Example pattern:
  // const seo = await sdk.GetPageSeoSettings({ contentLink, locale });

  // If your CMS SDK already exposes the current page data in the same request,
  // you can pull the SEO fields from there instead.
  const seo = (await sdk.GetPageSeoSettings({
    contentLink,
    locale,
  })) as SeoData | null;

  return {
    title: seo?.MetaTitle ?? undefined,
    description: seo?.MetaDescription ?? undefined,
  };
};

export default BlankExperience_experience;
