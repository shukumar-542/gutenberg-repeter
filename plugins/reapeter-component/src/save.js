/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 * 
 */

import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	Button,
} from "@wordpress/components";
export default function save({ attributes }) {
	const { teams } = attributes;
	console.log(teams);
	return (
		// <p { ...useBlockProps.save() }>
		// 	{ 'Reapeter Component – hello from the saved content!dd' }
		// </p>
		<div {...useBlockProps.save()}>
			{teams.length && teams.map((member, index) => (
				<div key={index}>
					<p>{member.name}</p>
					<p>{member.position}</p>
					<p>{member.facebook}</p>
					<p>{member.github}</p>
					<p>{member.twitter}</p>
				
				</div>
			))}
		</div>
	);
}
