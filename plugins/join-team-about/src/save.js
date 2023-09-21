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

// import leftImg from "./leftImg.png"
// import rightImg from "./rightImg.png"
export default function save({ attributes }) {
	return (
		
		<section {...useBlockProps.save()} className="cr-join-team pos-relative section-padding">
			<div className="team-illustration-wrapper">
				<img src={attributes.imageLeft} className="team-illustration team-illustration1" alt="" />
				<img src={attributes.imageRight} className="team-illustration team-illustration2" alt="" />
			</div>

			<div className="cr-container">
				<div className="cr-row">
					<div className="cr-col">
						<div className="join-content">
							<RichText.Content
							value={attributes.heading}
							tagName='h1'
							/>
							{/* <h2 className="circular-700">Join our team!</h2> */}
							<div className="description">
								<RichText.Content
								tagName='p'
								value={attributes.description}
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
