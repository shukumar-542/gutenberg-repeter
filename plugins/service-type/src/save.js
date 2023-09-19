/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
import topLeft from './topLeftImg.png'
import topRight from './topRightImg.png'
import serviceIcon from './serviceIcon.png'
export default function save() {
	return (
		// <p { ...useBlockProps.save() }>
		// 	{ 'Service Type – hello from the saved content!' }
		// </p>

		<>
			<section { ...useBlockProps.save() } className="major-service pos-relative">
				<div className="overlay"></div>

				<div className="service-illustration-wrapper">
					{/* {content.topLeftImage && <Image width="456" height="484" src={topLeftImage} className="service-illustration1" alt="service-illustration" />}
                        {content.topRightImage && <Image width="422" height="425" src={topRightImage} className="service-illustration2" alt="service-illustration" />} */}
					<img src={topLeft} className="service-illustration1" alt="service-illustration" />
					<img src={topRight} className="service-illustration2" alt="service-illustration" />
				</div>

				<div className="cr-container">
					<div className="cr-row">
						<div className="cr-col">
							<div className="section-title">
								<h2 className="circular-700 color-fff">
									Other Major Services
								</h2>
								<p className="sub-title">
									-Shopify & WooCommerce Development
									Shopify and WooCommerce are the two most popular tools used for eCommerce sites. We will customize them and enhance the performance for your online store.
								</p>
							</div>


							<div className="major-service-wrapper">


								<div className="single-service service-1 " >
									
										<span className="service-icon">
											{/* <Image width="102" height="102" src={serviceIcon} alt="service" /> */}
											<img src={serviceIcon} alt="icon" />
										</span>
									
									<h5 className="circular-700">WordPress Development</h5>
									<p> WordPress Development </p>
								</div>
								<div className="single-service service-1 " >
									
										<span className="service-icon">
											{/* <Image width="102" height="102" src={serviceIcon} alt="service" /> */}
											<img src={serviceIcon} alt="icon" />
										</span>
									
									<h5 className="circular-700">WordPress Development</h5>
									<p> WordPress Development </p>
								</div>
								<div className="single-service service-1 " >
									
										<span className="service-icon">
											{/* <Image width="102" height="102" src={serviceIcon} alt="service" /> */}
											<img src={serviceIcon} alt="icon" />
										</span>
									
									<h5 className="circular-700">WordPress Development</h5>
									<p> WordPress Development </p>
								</div>
								<div className="single-service service-1 " >
									
										<span className="service-icon">
											{/* <Image width="102" height="102" src={serviceIcon} alt="service" /> */}
											<img src={serviceIcon} alt="icon" />
										</span>
									
									<h5 className="circular-700">WordPress Development</h5>
									<p> WordPress Development </p>
								</div>
								<div className="single-service service-1 " >
									
										<span className="service-icon">
											{/* <Image width="102" height="102" src={serviceIcon} alt="service" /> */}
											<img src={serviceIcon} alt="icon" />
										</span>
									
									<h5 className="circular-700">WordPress Development</h5>
									<p> WordPress Development </p>
								</div>

							</div>
							<div className="major-service-btn">

								<a className="cr-btn-default lets-talk-btn svg-btn-effect crx">
									<svg>
										<rect x="2" y="2" rx="30" fill="none" width="98%" height="56"></rect>
									</svg>
									<span>button Text</span>
								</a>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
