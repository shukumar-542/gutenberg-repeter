import { __ } from '@wordpress/i18n';
import {
	useBlockProps, RichText, AlignmentControl, BlockControls,
	InspectorControls,
	PanelColorSettings,
	MediaUpload,

} from '@wordpress/block-editor';
import { Button } from "@wordpress/components"
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
	const { backgroundColor, textColor } = attributes;
	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent })
	}

	const onChangeAlign = (newAlign) => {
		setAttributes({ align: newAlign === undefined ? 'none' : newAlign, })
	}
	const onChangeTexColor = (newColor) => {
		setAttributes({ textColor: newColor })
	}
	const onChangeBackgroundColor = (newBgColor) => {
		setAttributes({ backgroundColor: newBgColor })
	}
	const onFileSelect = ({ img }) => {
		console.log('working', img);

		setAttributes({imgURL : img})
	}

	return (
		// <p { ...useBlockProps() }>
		// 	{ __( 'Team – hello from the editor!', 'team' ) }
		// </p>

		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('color setting', 'teamColor')}
					initialOpen={false}
					colorSettings={[
						{
							value: textColor,
							onChange: onChangeTexColor,
							label: __('text color', 'teamColor')
						}, {
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('background color', "teamBackgroundColor")
						}
					]}
				/>
			</InspectorControls>
			<BlockControls>
				<AlignmentControl
					value={attributes.align}
					onChange={onChangeAlign}
				/>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				tagName='p'
				onChange={onChangeContent}
				value={attributes.content}
				placeholder={__('write your text')}
				style={{ textAlign: attributes.align, color: textColor, backgroundColor: backgroundColor }}
			/>
			

				{
					(attributes.imgURL) ? (
						<img src={attributes.imgURL}/>
					) :  <MediaUpload
					onSelect={onFileSelect}
					value={1}
					render={({ open }) =>
						<Button onClick={open}>Open Gallery</Button>
					}
				/>
				}
			

		</>
	);
}
