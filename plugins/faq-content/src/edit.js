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
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useState } from '@wordpress/element';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 * 
 */

import Collapse from '@kunukn/react-collapse';
export default function Edit({ attributes, setAttributes }) {
  const { contentHeading, contentDescription } = attributes
  // const accordion = document.getElementsByClassName('content-box')
  // console.log(accordion);
  // for(let i=0; i<accordion.length; i++){
  //   accordion[i].addEventListener('click',function(){
  //     this.classList.toggle('active')
  //   })
  // }

  const [isClicked, setIsClicked] = useState(false);
  const onchangeHeading = (newHeading) => {
    setAttributes({ contentHeading: newHeading });
  };

  const onchangeDescription = (newDes) => {
    setAttributes({ contentDescription: newDes });
  };
  const handleClassName = ()=>{
    setIsClicked(!isClicked)
  }

  return (
    // <p { ...useBlockProps() }>
    // 	{ __( 'Faq Content – hello from the editor!', 'faq-content' ) }
    // </p>

    <>
      <section
        {...useBlockProps()}
        className="faqs-policy-content pos-relative"
      >
        <div class='accordion'>
          <div class={`content-box ${isClicked  ? 'active' : ''}`}>
            <div class='label'  onClick={handleClassName}>
            {/* List One */}
              <RichText
                value={contentHeading}
                tagName="h1"
                id="content-heading"
                onChange={onchangeHeading}
                placeholder={__("Write your text...")}
              />
            </div>
            <div class='content'>
              {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit ipsa dolore doloremque illo
                    facere delectus officiis quos animi cupiditate ipsam.</p> */}
              <RichText
                value={contentDescription}
                tagName="h4"
                onChange={onchangeDescription}
                placeholder={__('Write your text...')}
              />
            </div>
          </div>
          {/* <div class='content-box'>
            <div class='label'>List Two</div>
            <div class='content'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Odit ipsa dolore doloremque illo
                facere delectus officiis quos animi cupiditate ipsam.</p>
            </div>
          </div> */}
        </div>
      </section>



    </>
  );
}
