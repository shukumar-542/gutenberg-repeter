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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {


	const { teams } = attributes;
	// console.log(teams);
	// teams.map((member)=> (member.social.default.map((soc)=>console.log(soc))))
	const updateMember = (index, key, value) => {
		const newItem = [...teams]
		// console.log(newItem);
		newItem[index][key] = value;
		setAttributes({ teams: newItem })

	}
	
	
	const addMember = () => {
		const newMember = [...teams];
		newMember.push({ name: "", position: "", facebook :"", github : "",twitter :"" })
		setAttributes({ teams: newMember })
	}

	
	return (

		<>
			<InspectorControls>
				<PanelBody title="team member" initialOpen={false}>
					{
						teams.map((item, index) => (
							<>
								<div key={index}>
									<PanelRow>
										<TextControl
											label="namess"
											value={item.name}
											onChange={(value) => updateMember(index, "name", value)}
										/>
									</PanelRow>
									<PanelRow>
										<TextControl
											label="position"
											value={item.position}
											onChange={(value) => updateMember(index, "position", value)}
										/>
									</PanelRow>

								<PanelRow>
									<TextControl
										label="facebook"
										value={item.facebook}
										onChange={(value) => updateMember(index, "facebook", value)}
									/>
								</PanelRow>
								<PanelRow>
									<TextControl
										label="github"
										value={item.github}
										onChange={(value) => updateMember(index, "github", value)}
									/>
								</PanelRow>
								<PanelRow>
									<TextControl
										label="twitter"
										value={item.twitter}
										onChange={(value) => updateMember(index, "twitter", value)}
									/>
								</PanelRow>
								</div>




							</>
						))
					}
					<PanelRow>
						<Button onClick={addMember}>Add Member</Button>
					</PanelRow>
				</PanelBody>
			</InspectorControls >

			<div {...useBlockProps()}>
				{
					teams.map((member) => {
						return <div>
							<p>{member.name}</p>
							<p>{member.position}</p>
							<p>{member.facebook}</p>
							<p>{member.github}</p>
							<p>{member.twitter}</p>
						</div>
					})
				}
			</div>



		</>
	);
}
