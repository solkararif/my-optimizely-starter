import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { TestimonialElementDataFragmentDoc, type TestimonialElementDataFragment } from "@/gql/graphql";

/**
 * Testimonial
 * A customer testimonial
 */
export const TestimonialElement_component : CmsComponent<TestimonialElementDataFragment> = ({ data, editProps }) => {
    const componentName = 'Testimonial'
    const componentInfo = 'A customer testimonial'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
TestimonialElement_component.displayName = "Testimonial (_component/TestimonialElement)"
TestimonialElement_component.getDataFragment = () => ['TestimonialElementData', TestimonialElementDataFragmentDoc]

export default TestimonialElement_component