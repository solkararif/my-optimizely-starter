import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const AboutUsDataFragmentDoc = gql`
    fragment AboutUsData on AboutUs {
  heading
  body {
    json
    html
  }
  image {
    ...ReferenceData
  }
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
  topics
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const BannerDataFragmentDoc = gql`
    fragment BannerData on Banner {
  title
  subtitle
  submit {
    ...LinkItemData
  }
}
    `;
export const BlogCardDataFragmentDoc = gql`
    fragment BlogCardData on BlogCard {
  title
  subtitle
  author
  date
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  ButtonText
  ButtonUrl {
    ...LinkData
  }
  ButtonClass
  ButtonType
  ButtonVariant
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  Text
  Link {
    ...LinkData
  }
}
    `;
export const CallToActionDataFragmentDoc = gql`
    fragment CallToActionData on CallToAction {
  label
  link
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const CarouselBlockDataFragmentDoc = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentListItem
  }
}
    `;
export const ContentRecsElementDataFragmentDoc = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const ContinueReadingComponentDataFragmentDoc = gql`
    fragment ContinueReadingComponentData on ContinueReadingComponent {
  topline
  shared
  heading
  content {
    ...IContentListItem
  }
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const HeroDataFragmentDoc = gql`
    fragment HeroData on Hero {
  heading
  summary
  background {
    ...ReferenceData
  }
  theme
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  ButtonText
  ButtonUrl {
    ...LinkData
  }
  ButtonClass
  ButtonType
  ButtonVariant
}
    `;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  HeroImage {
    ...ReferenceData
  }
  Icon
  Eyebrow
  Heading
  SubHeading
  Description {
    json
    html
  }
  HeroColor
  HeroButton {
    ...ButtonBlockPropertyData
  }
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
  }
}
    `;
export const LandingSectionDataFragmentDoc = gql`
    fragment LandingSectionData on LandingSection {
  heading
  subtitle
  sections {
    ...IContentListItem
  }
}
    `;
export const LayoutSettingsBlockDataFragmentDoc = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...IContentListItem
  }
  contactInfoHeading
  serviceButtons {
    ...IContentListItem
  }
  contactInfo {
    json
    html
  }
  footerMenus {
    ...IContentListItem
  }
  copyright
  legalLinks {
    __typename
  }
  appIdentifiers
}
    `;
export const LocationDataFragmentDoc = gql`
    fragment LocationData on Location {
  name
  city
  address
  phone
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentListItem
  }
}
    `;
export const MenuNavigationBlockDataFragmentDoc = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  MenuNavigationHeading
  NavigationLinks {
    __typename
  }
}
    `;
export const OdpEmbedBlockDataFragmentDoc = gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const OfficeLocationsDataFragmentDoc = gql`
    fragment OfficeLocationsData on OfficeLocations {
  title
  subtitle
  offices {
    ...IContentListItem
  }
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
    html
  }
}
    `;
export const QuoteBlockDataFragmentDoc = gql`
    fragment QuoteBlockData on QuoteBlock {
  QuoteText
  QuoteColor
  QuoteProfilePicture {
    ...ReferenceData
  }
  QuoteProfileName
  QuoteProfileLocation
  QuoteActive
}
    `;
export const RichTextElementDataFragmentDoc = gql`
    fragment RichTextElementData on RichTextElement {
  text {
    json
    html
  }
}
    `;
export const SmallFeatureDataFragmentDoc = gql`
    fragment SmallFeatureData on SmallFeature {
  heading
  image {
    ...ReferenceData
  }
  body {
    json
    html
  }
}
    `;
export const SmallFeatureGridDataFragmentDoc = gql`
    fragment SmallFeatureGridData on SmallFeatureGrid {
  smallFeatures {
    ...IContentListItem
  }
}
    `;
export const TestimonialElementDataFragmentDoc = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
  referenceTitle
  referenceText {
    json
    html
  }
}
    `;
export const TextBlockDataFragmentDoc = gql`
    fragment TextBlockData on TextBlock {
  TextBlockOverline
  TextBlockHeading
  TextBlockHeadingSize
  TextBlockDescription {
    json
    html
  }
  TextBlockWidth
  TextCenter
  TextClassName
}
    `;
export const TileDataFragmentDoc = gql`
    fragment TileData on Tile {
  title
  description
}
    `;
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  video {
    ...ReferenceData
  }
  title
  placeholder {
    ...ReferenceData
  }
}
    `;
export const VideoFeatureDataFragmentDoc = gql`
    fragment VideoFeatureData on VideoFeature {
  heading
  body {
    json
    html
  }
  thumbnail_image {
    ...ReferenceData
  }
  thumbnail_caption
  video_link
}
    `;
export const MonthlySpecialDataFragmentDoc = gql`
    fragment MonthlySpecialData on MonthlySpecial {
  title
  subtitle
  blog {
    ...BlockData
    ...AboutUsData
    ...ArticleListElementData
    ...BannerData
    ...BlogCardData
    ...ButtonBlockData
    ...CTAElementData
    ...CallToActionData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroData
    ...HeroBlockData
    ...ImageElementData
    ...LandingSectionData
    ...LayoutSettingsBlockData
    ...LocationData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MonthlySpecialData
    ...OdpEmbedBlockData
    ...OfficeLocationsData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SmallFeatureData
    ...SmallFeatureGridData
    ...TestimonialElementData
    ...TextBlockData
    ...TileData
    ...VideoElementData
    ...VideoFeatureData
  }
}
    `;
export const AboutExperienceDataFragmentDoc = gql`
    fragment AboutExperienceData on AboutExperience {
  title
  subtitle
  section {
    ...BlockData
    ...AboutUsData
    ...ArticleListElementData
    ...BannerData
    ...BlogCardData
    ...ButtonBlockData
    ...CTAElementData
    ...CallToActionData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroData
    ...HeroBlockData
    ...ImageElementData
    ...LandingSectionData
    ...LayoutSettingsBlockData
    ...LocationData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MonthlySpecialData
    ...OdpEmbedBlockData
    ...OfficeLocationsData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SmallFeatureData
    ...SmallFeatureGridData
    ...TestimonialElementData
    ...TextBlockData
    ...TileData
    ...VideoElementData
    ...VideoFeatureData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    `;
export const BlogExperienceDataFragmentDoc = gql`
    fragment BlogExperienceData on BlogExperience {
  title
  subtitle
  articles {
    ...IContentListItem
  }
}
    `;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  seo_data {
    ...PageSeoSettingsPropertyData
  }
}
    `;
export const HeroPropertyDataFragmentDoc = gql`
    fragment HeroPropertyData on HeroProperty {
  heading
  summary
  background {
    ...ReferenceData
  }
  theme
}
    `;
export const LandingExperienceDataFragmentDoc = gql`
    fragment LandingExperienceData on LandingExperience {
  hero {
    ...HeroPropertyData
  }
}
    `;
export const SysContentFolderDataFragmentDoc = gql`
    fragment SysContentFolderData on SysContentFolder {
  empty: _metadata {
    key
  }
}
    `;
export const ImageMediaDataFragmentDoc = gql`
    fragment ImageMediaData on ImageMedia {
  AltText
}
    `;
export const GenericMediaDataFragmentDoc = gql`
    fragment GenericMediaData on GenericMedia {
  empty: _metadata {
    key
  }
}
    `;
export const ArticleDataFragmentDoc = gql`
    fragment ArticleData on Article {
  heading
  subtitle
  body {
    json
    html
  }
}
    `;
export const BlogPostPageDataFragmentDoc = gql`
    fragment BlogPostPageData on BlogPostPage {
  Heading
  ArticleSubHeading
  Topic
  BlogPostBody {
    json
    html
  }
  ArticleAuthor
  BlogPostPromoImage {
    ...ReferenceData
  }
  continueReading {
    ...IContentListItem
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    `;
export const FAQDataFragmentDoc = gql`
    fragment FAQData on FAQ {
  heading
  body {
    json
    html
  }
}
    `;
export const LandingDataFragmentDoc = gql`
    fragment LandingData on Landing {
  hero {
    ...HeroPropertyData
  }
  sections {
    ...IContentListItem
  }
}
    `;
export const LandingPageDataFragmentDoc = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...IContentListItem
  }
  MainContentArea {
    ...IContentListItem
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    `;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  empty: _metadata {
    key
  }
}
    `;
export const VideoMediaDataFragmentDoc = gql`
    fragment VideoMediaData on VideoMedia {
  empty: _metadata {
    key
  }
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...AboutUsData
    ...ArticleListElementData
    ...BannerData
    ...BlogCardData
    ...ButtonBlockData
    ...CTAElementData
    ...CallToActionData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroData
    ...HeroBlockData
    ...ImageElementData
    ...LandingSectionData
    ...LayoutSettingsBlockData
    ...LocationData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MonthlySpecialData
    ...OdpEmbedBlockData
    ...OfficeLocationsData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SmallFeatureData
    ...SmallFeatureGridData
    ...TestimonialElementData
    ...TextBlockData
    ...TileData
    ...VideoElementData
    ...VideoFeatureData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                  ... on ICompositionStructureNode {
                    nodes {
                      ...CompositionNodeData
                      ...CompositionComponentNodeData
                    }
                  }
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...BlockData
      ...PageData
      ...AboutUsData
      ...ArticleListElementData
      ...BannerData
      ...BlogCardData
      ...ButtonBlockData
      ...CTAElementData
      ...CallToActionData
      ...CarouselBlockData
      ...ContentRecsElementData
      ...ContinueReadingComponentData
      ...HeadingElementData
      ...HeroData
      ...HeroBlockData
      ...ImageElementData
      ...LandingSectionData
      ...LayoutSettingsBlockData
      ...LocationData
      ...MegaMenuGroupBlockData
      ...MenuNavigationBlockData
      ...MonthlySpecialData
      ...OdpEmbedBlockData
      ...OfficeLocationsData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...SmallFeatureData
      ...SmallFeatureGridData
      ...TestimonialElementData
      ...TextBlockData
      ...TileData
      ...VideoElementData
      ...VideoFeatureData
      ...AboutExperienceData
      ...BlankExperienceData
      ...BlogExperienceData
      ...BlogSectionExperienceData
      ...LandingExperienceData
      ...ArticleData
      ...BlogPostPageData
      ...FAQData
      ...LandingData
      ...LandingPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlockDataFragmentDoc}
${PageDataFragmentDoc}
${AboutUsDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BannerDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlogCardDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CallToActionDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingSectionDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LocationDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MonthlySpecialDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${OfficeLocationsDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SmallFeatureDataFragmentDoc}
${SmallFeatureGridDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TileDataFragmentDoc}
${VideoElementDataFragmentDoc}
${VideoFeatureDataFragmentDoc}
${AboutExperienceDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${BlogExperienceDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${LandingExperienceDataFragmentDoc}
${HeroPropertyDataFragmentDoc}
${ArticleDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${FAQDataFragmentDoc}
${LandingDataFragmentDoc}
${LandingPageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...AboutExperienceData
      ...BlankExperienceData
      ...BlogExperienceData
      ...BlogSectionExperienceData
      ...LandingExperienceData
      ...ArticleData
      ...BlogPostPageData
      ...FAQData
      ...LandingData
      ...LandingPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${AboutExperienceDataFragmentDoc}
${BlockDataFragmentDoc}
${AboutUsDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BannerDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlogCardDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CallToActionDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LandingSectionDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LocationDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${MonthlySpecialDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${OfficeLocationsDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SmallFeatureDataFragmentDoc}
${SmallFeatureGridDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${TileDataFragmentDoc}
${VideoElementDataFragmentDoc}
${VideoFeatureDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${BlogExperienceDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${LandingExperienceDataFragmentDoc}
${HeroPropertyDataFragmentDoc}
${ArticleDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${FAQDataFragmentDoc}
${LandingDataFragmentDoc}
${LandingPageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;