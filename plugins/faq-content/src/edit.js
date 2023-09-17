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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import Collapse from '@kunukn/react-collapse';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		// <p { ...useBlockProps() }>
		// 	{ __( 'Faq Content – hello from the editor!', 'faq-content' ) }
		// </p>
		<section {...useBlockProps()} className="faqs-policy-content pos-relative">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="faqs-content-wrapper">
                    
                      <div
                        
                      >
                        <button
                          className="btn"
                          
                        >
                          <span>title</span>
                          <svg className={''} viewBox="6 0 12 24">
                            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                          </svg>
                        </button>
                        <Collapse
                          className="collapse"
                         
                        >
                          <div className="content-body">
                            description section
                          </div>
                        </Collapse>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </section>
	);
}
