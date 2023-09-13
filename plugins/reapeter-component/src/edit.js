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
		// console.log(index,key,value);
		const newItem = [...teams]
		newItem[index][key] = value;
		setAttributes({ teams: newItem })

	}
	const addSocialLink =(index,updateLink)=>{
		// console.log(index,updateLink);
		const newUpdate  = [...teams]
		newUpdate[index].socialLinks.push(updateLink)
		setAttributes({ newUpdate})


	}
	const addMember = () => {
		const newMember = [...teams];
		newMember.push({ name: "", position: "" })
		setAttributes({ teams: newMember })
	}

	const addNewSocial = (index,link) => {
		// console.log(index, link);
		const updateTeam = [...teams]
		updateTeam[index].socialLinks.push(link)
		setAttributes({updateTeam})
		// const updatedTeams = [...teams];
		// updatedTeams[index].socialLinks.push(link);
		// setAttributes(updatedTeams);
	};
	return (
		// <p { ...useBlockProps() }>
		// 	{ __( 	
		// 		'Reapeter Component – hello from the editor!',
		// 		'reapeter-component'
		// 	) }
		// </p>
		<>
			<InspectorControls>
				<PanelBody title="team member" initialOpen={false}>
					{
						teams.map((item, index) => (
							<>
								<div key={index}>
									<PanelRow>
										<TextControl
											label="name"
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
								</div>
								<div>
									social Links

									{
										item?.socialLinks?.map((link, linkIndex) => (
											<PanelRow key={linkIndex}>
												<TextControl
													value={link}
													onChange={(value) => {
														const updateLink = [...item.socialLinks]
														updateLink[linkIndex] = value
														addSocialLink(index, updateLink)
													}}
												/>
											</PanelRow>
										))
									}
									<PanelRow>
										<Button onClick={()=>addNewSocial(index, "")}>
											Add Social Link
										</Button>
									</PanelRow>

								</div >
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
						</div>
					})
				}
			</div>



		</>
	);
}
