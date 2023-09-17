/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';

import { PanelBody, PanelRow,TextControl } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { heroHeading, faqBanner } = attributes;
	const onChangeHeroContent = (newHeading) => {
		setAttributes({ heroHeading: newHeading })
	}
	const handleImage = (name, img) => {
		setAttributes({ [name]: img.url })
	}

	const heroBg = {

		backgroundColor: "transparent",
		backgroundImage: `url("${faqBanner}")`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "cover",

	}
	const handleHeading = (newHeading) =>{
		setAttributes({heroHeading : newHeading})
	}

	// console.log(heroBg);

	return (
		// <p { ...useBlockProps() }>
		// 	{ __( 'Faqs Hero – hello from the editor!', 'faqs-hero' ) }
		// </p>

		<>

			<InspectorControls >
				{/* Background image for hero section */}
				<PanelBody title={__("Background Image Setting")} initialOpen={true}>
					<PanelBody>
						<PanelRow>
							<fieldset>
								<TextControl
									value={heroHeading}
									onChange={handleHeading}
									label={__("Heading Of Hero Section")}
								/>
							</fieldset>
						</PanelRow>
					</PanelBody>
					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("background Image")}
								type="image"
								value={faqBanner}
								onSelect={(img) => handleImage('faqBanner', img)}
								render={({ open }) => (
									<div>
										<img
											src={faqBanner}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>


			<section {...useBlockProps()} style={heroBg} className="inner-page-banner faqs-banner pos-relative">
				<div className="overlay"></div>

				<div className="cr-container">
					<div className="cr-row">
						<div className="cr-col">
							<div className="banner-content align-center-center text-center">
								<h1 className="circular-700 color-fff crx crx-animated">
									{/* {parse( content?.title )} */}
									{/* Frequently Asked Questions */}
									{heroHeading}
									{/* <RichText
										tagName='h1'
										onChange={onChangeHeroContent}
										value={heroHeading}
										placeholder={__("Text Heading")}
									/> */}
								</h1>
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	);
}
