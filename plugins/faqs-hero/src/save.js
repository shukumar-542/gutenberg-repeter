/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const { heroHeading,faqBanner } = attributes;
	// console.log(faqBanner);

	const heroBg = {
		
            backgroundColor: "transparent",
            backgroundImage: `url("${faqBanner}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",

          
	}
	return (
	
		<>
		<section {...useBlockProps.save()} style={heroBg} className="inner-page-banner faqs-banner pos-relative">
				<div className="overlay"></div>

				<div className="cr-container">
					<div className="cr-row">
						<div className="cr-col">
							<div className="banner-content align-center-center text-center">
								<h1 className="circular-700 color-fff crx crx-animated">
									{heroHeading}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	);
}
