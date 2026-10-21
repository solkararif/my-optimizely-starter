/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment AboutUsData on AboutUs {\n  heading\n  body {\n    json\n    html\n  }\n  image {\n    ...ReferenceData\n  }\n}": typeof types.AboutUsDataFragmentDoc,
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": typeof types.ArticleListElementDataFragmentDoc,
    "fragment BannerData on Banner {\n  title\n  subtitle\n  submit {\n    ...LinkItemData\n  }\n}": typeof types.BannerDataFragmentDoc,
    "fragment BlogCardData on BlogCard {\n  title\n  subtitle\n  author\n  date\n}": typeof types.BlogCardDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": typeof types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": typeof types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}": typeof types.CTAElementDataFragmentDoc,
    "fragment CallToActionData on CallToAction {\n  label\n  link\n}": typeof types.CallToActionDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}": typeof types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": typeof types.ContentRecsElementDataFragmentDoc,
    "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentListItem\n  }\n}": typeof types.ContinueReadingComponentDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": typeof types.HeadingElementDataFragmentDoc,
    "fragment HeroData on Hero {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}": typeof types.HeroDataFragmentDoc,
    "fragment HeroPropertyData on HeroProperty {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}": typeof types.HeroPropertyDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": typeof types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": typeof types.ImageElementDataFragmentDoc,
    "fragment LandingSectionData on LandingSection {\n  heading\n  subtitle\n  sections {\n    ...IContentListItem\n  }\n}": typeof types.LandingSectionDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    __typename\n  }\n  appIdentifiers\n}": typeof types.LayoutSettingsBlockDataFragmentDoc,
    "fragment LocationData on Location {\n  name\n  city\n  address\n  phone\n}": typeof types.LocationDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}": typeof types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    __typename\n  }\n}": typeof types.MenuNavigationBlockDataFragmentDoc,
    "fragment MonthlySpecialData on MonthlySpecial {\n  title\n  subtitle\n  blog {\n    ...BlockData\n  }\n}": typeof types.MonthlySpecialDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": typeof types.OdpEmbedBlockDataFragmentDoc,
    "fragment OfficeLocationsData on OfficeLocations {\n  title\n  subtitle\n  offices {\n    ...IContentListItem\n  }\n}": typeof types.OfficeLocationsDataFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}": typeof types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}": typeof types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": typeof types.RichTextElementDataFragmentDoc,
    "fragment SmallFeatureData on SmallFeature {\n  heading\n  image {\n    ...ReferenceData\n  }\n  body {\n    json\n    html\n  }\n}": typeof types.SmallFeatureDataFragmentDoc,
    "fragment SmallFeatureGridData on SmallFeatureGrid {\n  smallFeatures {\n    ...IContentListItem\n  }\n}": typeof types.SmallFeatureGridDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}": typeof types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}": typeof types.TextBlockDataFragmentDoc,
    "fragment TileData on Tile {\n  title\n  description\n}": typeof types.TileDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}": typeof types.VideoElementDataFragmentDoc,
    "fragment VideoFeatureData on VideoFeature {\n  heading\n  body {\n    json\n    html\n  }\n  thumbnail_image {\n    ...ReferenceData\n  }\n  thumbnail_caption\n  video_link\n}": typeof types.VideoFeatureDataFragmentDoc,
    "fragment AboutExperienceData on AboutExperience {\n  title\n  subtitle\n  section {\n    ...BlockData\n  }\n}": typeof types.AboutExperienceDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment BlogExperienceData on BlogExperience {\n  title\n  subtitle\n  articles {\n    ...IContentListItem\n  }\n}": typeof types.BlogExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlogSectionExperienceDataFragmentDoc,
    "fragment LandingExperienceData on LandingExperience {\n  hero {\n    ...HeroPropertyData\n  }\n}": typeof types.LandingExperienceDataFragmentDoc,
    "fragment SysContentFolderData on SysContentFolder {\n  empty: _metadata {\n    key\n  }\n}": typeof types.SysContentFolderDataFragmentDoc,
    "fragment ImageMediaData on ImageMedia {\n  AltText\n}": typeof types.ImageMediaDataFragmentDoc,
    "fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}": typeof types.GenericMediaDataFragmentDoc,
    "fragment ArticleData on Article {\n  heading\n  subtitle\n  body {\n    json\n    html\n  }\n}": typeof types.ArticleDataFragmentDoc,
    "fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlogPostPageDataFragmentDoc,
    "fragment FAQData on FAQ {\n  heading\n  body {\n    json\n    html\n  }\n}": typeof types.FAQDataFragmentDoc,
    "fragment LandingData on Landing {\n  hero {\n    ...HeroPropertyData\n  }\n  sections {\n    ...IContentListItem\n  }\n}": typeof types.LandingDataFragmentDoc,
    "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...IContentListItem\n  }\n  MainContentArea {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.LandingPageDataFragmentDoc,
    "fragment BlankSectionData on BlankSection {\n  empty: _metadata {\n    key\n  }\n}": typeof types.BlankSectionDataFragmentDoc,
    "fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}": typeof types.VideoMediaDataFragmentDoc,
    "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": typeof types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": typeof types.getContentByIdDocument,
};
const documents: Documents = {
    "fragment AboutUsData on AboutUs {\n  heading\n  body {\n    json\n    html\n  }\n  image {\n    ...ReferenceData\n  }\n}": types.AboutUsDataFragmentDoc,
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": types.ArticleListElementDataFragmentDoc,
    "fragment BannerData on Banner {\n  title\n  subtitle\n  submit {\n    ...LinkItemData\n  }\n}": types.BannerDataFragmentDoc,
    "fragment BlogCardData on BlogCard {\n  title\n  subtitle\n  author\n  date\n}": types.BlogCardDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}": types.CTAElementDataFragmentDoc,
    "fragment CallToActionData on CallToAction {\n  label\n  link\n}": types.CallToActionDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}": types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": types.ContentRecsElementDataFragmentDoc,
    "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentListItem\n  }\n}": types.ContinueReadingComponentDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment HeroData on Hero {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}": types.HeroDataFragmentDoc,
    "fragment HeroPropertyData on HeroProperty {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}": types.HeroPropertyDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": types.ImageElementDataFragmentDoc,
    "fragment LandingSectionData on LandingSection {\n  heading\n  subtitle\n  sections {\n    ...IContentListItem\n  }\n}": types.LandingSectionDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    __typename\n  }\n  appIdentifiers\n}": types.LayoutSettingsBlockDataFragmentDoc,
    "fragment LocationData on Location {\n  name\n  city\n  address\n  phone\n}": types.LocationDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    __typename\n  }\n}": types.MenuNavigationBlockDataFragmentDoc,
    "fragment MonthlySpecialData on MonthlySpecial {\n  title\n  subtitle\n  blog {\n    ...BlockData\n  }\n}": types.MonthlySpecialDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": types.OdpEmbedBlockDataFragmentDoc,
    "fragment OfficeLocationsData on OfficeLocations {\n  title\n  subtitle\n  offices {\n    ...IContentListItem\n  }\n}": types.OfficeLocationsDataFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}": types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": types.RichTextElementDataFragmentDoc,
    "fragment SmallFeatureData on SmallFeature {\n  heading\n  image {\n    ...ReferenceData\n  }\n  body {\n    json\n    html\n  }\n}": types.SmallFeatureDataFragmentDoc,
    "fragment SmallFeatureGridData on SmallFeatureGrid {\n  smallFeatures {\n    ...IContentListItem\n  }\n}": types.SmallFeatureGridDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}": types.TextBlockDataFragmentDoc,
    "fragment TileData on Tile {\n  title\n  description\n}": types.TileDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}": types.VideoElementDataFragmentDoc,
    "fragment VideoFeatureData on VideoFeature {\n  heading\n  body {\n    json\n    html\n  }\n  thumbnail_image {\n    ...ReferenceData\n  }\n  thumbnail_caption\n  video_link\n}": types.VideoFeatureDataFragmentDoc,
    "fragment AboutExperienceData on AboutExperience {\n  title\n  subtitle\n  section {\n    ...BlockData\n  }\n}": types.AboutExperienceDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.BlankExperienceDataFragmentDoc,
    "fragment BlogExperienceData on BlogExperience {\n  title\n  subtitle\n  articles {\n    ...IContentListItem\n  }\n}": types.BlogExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.BlogSectionExperienceDataFragmentDoc,
    "fragment LandingExperienceData on LandingExperience {\n  hero {\n    ...HeroPropertyData\n  }\n}": types.LandingExperienceDataFragmentDoc,
    "fragment SysContentFolderData on SysContentFolder {\n  empty: _metadata {\n    key\n  }\n}": types.SysContentFolderDataFragmentDoc,
    "fragment ImageMediaData on ImageMedia {\n  AltText\n}": types.ImageMediaDataFragmentDoc,
    "fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}": types.GenericMediaDataFragmentDoc,
    "fragment ArticleData on Article {\n  heading\n  subtitle\n  body {\n    json\n    html\n  }\n}": types.ArticleDataFragmentDoc,
    "fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.BlogPostPageDataFragmentDoc,
    "fragment FAQData on FAQ {\n  heading\n  body {\n    json\n    html\n  }\n}": types.FAQDataFragmentDoc,
    "fragment LandingData on Landing {\n  hero {\n    ...HeroPropertyData\n  }\n  sections {\n    ...IContentListItem\n  }\n}": types.LandingDataFragmentDoc,
    "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...IContentListItem\n  }\n  MainContentArea {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.LandingPageDataFragmentDoc,
    "fragment BlankSectionData on BlankSection {\n  empty: _metadata {\n    key\n  }\n}": types.BlankSectionDataFragmentDoc,
    "fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}": types.VideoMediaDataFragmentDoc,
    "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment AboutUsData on AboutUs {\n  heading\n  body {\n    json\n    html\n  }\n  image {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment AboutUsData on AboutUs {\n  heading\n  body {\n    json\n    html\n  }\n  image {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BannerData on Banner {\n  title\n  subtitle\n  submit {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment BannerData on Banner {\n  title\n  subtitle\n  submit {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogCardData on BlogCard {\n  title\n  subtitle\n  author\n  date\n}"): (typeof documents)["fragment BlogCardData on BlogCard {\n  title\n  subtitle\n  author\n  date\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CallToActionData on CallToAction {\n  label\n  link\n}"): (typeof documents)["fragment CallToActionData on CallToAction {\n  label\n  link\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"): (typeof documents)["fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n  headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroData on Hero {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}"): (typeof documents)["fragment HeroData on Hero {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroPropertyData on HeroProperty {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}"): (typeof documents)["fragment HeroPropertyData on HeroProperty {\n  heading\n  summary\n  background {\n    ...ReferenceData\n  }\n  theme\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"): (typeof documents)["fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingSectionData on LandingSection {\n  heading\n  subtitle\n  sections {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment LandingSectionData on LandingSection {\n  heading\n  subtitle\n  sections {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    __typename\n  }\n  appIdentifiers\n}"): (typeof documents)["fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    __typename\n  }\n  appIdentifiers\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LocationData on Location {\n  name\n  city\n  address\n  phone\n}"): (typeof documents)["fragment LocationData on Location {\n  name\n  city\n  address\n  phone\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    __typename\n  }\n}"): (typeof documents)["fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MonthlySpecialData on MonthlySpecial {\n  title\n  subtitle\n  blog {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment MonthlySpecialData on MonthlySpecial {\n  title\n  subtitle\n  blog {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"): (typeof documents)["fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OfficeLocationsData on OfficeLocations {\n  title\n  subtitle\n  offices {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment OfficeLocationsData on OfficeLocations {\n  title\n  subtitle\n  offices {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}"): (typeof documents)["fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SmallFeatureData on SmallFeature {\n  heading\n  image {\n    ...ReferenceData\n  }\n  body {\n    json\n    html\n  }\n}"): (typeof documents)["fragment SmallFeatureData on SmallFeature {\n  heading\n  image {\n    ...ReferenceData\n  }\n  body {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SmallFeatureGridData on SmallFeatureGrid {\n  smallFeatures {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment SmallFeatureGridData on SmallFeatureGrid {\n  smallFeatures {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}"): (typeof documents)["fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}"): (typeof documents)["fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TileData on Tile {\n  title\n  description\n}"): (typeof documents)["fragment TileData on Tile {\n  title\n  description\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoFeatureData on VideoFeature {\n  heading\n  body {\n    json\n    html\n  }\n  thumbnail_image {\n    ...ReferenceData\n  }\n  thumbnail_caption\n  video_link\n}"): (typeof documents)["fragment VideoFeatureData on VideoFeature {\n  heading\n  body {\n    json\n    html\n  }\n  thumbnail_image {\n    ...ReferenceData\n  }\n  thumbnail_caption\n  video_link\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment AboutExperienceData on AboutExperience {\n  title\n  subtitle\n  section {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment AboutExperienceData on AboutExperience {\n  title\n  subtitle\n  section {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogExperienceData on BlogExperience {\n  title\n  subtitle\n  articles {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment BlogExperienceData on BlogExperience {\n  title\n  subtitle\n  articles {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingExperienceData on LandingExperience {\n  hero {\n    ...HeroPropertyData\n  }\n}"): (typeof documents)["fragment LandingExperienceData on LandingExperience {\n  hero {\n    ...HeroPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SysContentFolderData on SysContentFolder {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment SysContentFolderData on SysContentFolder {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageMediaData on ImageMedia {\n  AltText\n}"): (typeof documents)["fragment ImageMediaData on ImageMedia {\n  AltText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleData on Article {\n  heading\n  subtitle\n  body {\n    json\n    html\n  }\n}"): (typeof documents)["fragment ArticleData on Article {\n  heading\n  subtitle\n  body {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FAQData on FAQ {\n  heading\n  body {\n    json\n    html\n  }\n}"): (typeof documents)["fragment FAQData on FAQ {\n  heading\n  body {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingData on Landing {\n  hero {\n    ...HeroPropertyData\n  }\n  sections {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment LandingData on Landing {\n  hero {\n    ...HeroPropertyData\n  }\n  sections {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...IContentListItem\n  }\n  MainContentArea {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...IContentListItem\n  }\n  MainContentArea {\n    ...IContentListItem\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankSectionData on BlankSection {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment BlankSectionData on BlankSection {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;