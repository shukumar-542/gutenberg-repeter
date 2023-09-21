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
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';

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
import { Button } from "@wordpress/components"
import leftImg from "./leftImg.png"
import rightImg from "./rightImg.png"
export default function Edit({ attributes, setAttributes }) {
	const { heading, description, imageRight, imageLeft } = attributes;
	console.log(imageRight);
	const handleHeading = (newHeading) => {
		setAttributes({ heading: newHeading })
	}
	const handleDescription = (newDesc) => {
		setAttributes({ description: newDesc })
	}

	const handleLeftImage = (img) => {
		setAttributes({ imageLeft: img.url })

	}
	const handleRightImage = (img) => {
		setAttributes({ imageRight: img.url })
		// console.log(img.url);

	}
	return (
		// <p {...useBlockProps()}>
		// 	{__('Join Team About – hello from the editor!', 'join-team-about')}
		// </p>
		<section {...useBlockProps()} className="cr-join-team pos-relative section-padding">
			<div className="team-illustration-wrapper">
				{
					(attributes.imageLeft) ? (
						<img src={imageLeft}  className="team-illustration team-illustration1" />
					) : <MediaUpload
						className="team-illustration team-illustration1"
						onSelect={handleLeftImage}
						value={1}
						render={({ open }) => <Button onClick={open}>Open Gallery</Button>
						}
					/>
				}
				{
					attributes.imageRight ? <img src={imageRight} className="team-illustration team-illustration2" alt="" /> :
						<MediaUpload
							className="team-illustration team-illustration2"
							onSelect={handleRightImage}
							value={1}
							render={({ open }) => <Button onClick={open}>Open Gallery</Button>}
						/>
				}
				{/* <img src={leftImg} className="team-illustration team-illustration1" alt="" /> */}
				{/* <img src={rightImg} className="team-illustration team-illustration2" alt="" /> */}
				{/* {content.leftImage && <Image layout="raw" width="370" height="742" src={leftImage} className="team-illustration team-illustration1" alt="team-illustration" />}
			{content.rightImage && <Image layout="raw" width="700" height="748" src={rightImage} className="team-illustration team-illustration2" alt="team-illustration" />} */}
			</div>

			<div className="cr-container">
				<div className="cr-row">
					<div className="cr-col">
						<div className="join-content">
							<RichText
								className="circular-700"
								value={attributes.heading}
								tagName='h1'
								onChange={handleHeading}
								placeholder={__('Enter Your Text')}
							/>
							<div className="description">
								<RichText
									value={attributes.description}
									tagName='p'
									onChange={handleDescription}
									placeholder={__('Enter Your Text')}
								/>
							</div>


							<a className="cr-btn-default join-us-btn svg-btn-effect" >
								<svg>
									<rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
								</svg>
								<span>Contact Us</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
