import { SectionTitle } from 'components/SectionTitle';
import { LinkToSection } from 'components/Index/LinkToSection';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import {
	containerClasses,
	fancyLinkClasses,
	linkClasses,
	sectionBodyClasses
} from 'components/styles';

export default function Home() {
	return (
		<div>
			<main className="bg-slate-950">
				<div className="min-h-screen flex flex-col justify-center relative">
					<div className={`${containerClasses} z-10`}>
						<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
							<svg
								className="absolute top-0 bottom-1/4 right-[-10rem] m-auto opacity-75 h-full"
								viewBox="0 0 1030 692"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
							>
								<g clipPath="url(#clip0_1_2)">
									<g filter="url(#filter0_f_1_2)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M565.961 140.952C591.238 143.377 611.103 153.895 626.589 165.972C639.812 176.285 642.38 188.967 644.079 201.878C645.998 216.455 649.43 231.277 636.841 243.855C620.328 260.354 598.271 278.626 565.961 279.929C532.882 281.263 508.699 263.552 484.725 249.988C459.901 235.943 428.597 222.207 428.01 201.878C427.417 181.389 454.158 164.342 481.895 152.092C505.825 141.523 536.494 138.125 565.961 140.952Z"
											fill="#0369A1"
										/>
									</g>
									<g filter="url(#filter1_f_1_2)">
										<path
											d="M853.75 241.796L625.224 144.393C620.241 142.269 604.579 135.671 597.46 144.393C591.764 151.371 604.104 158.931 610.986 161.839C685.975 196.406 837.376 265.929 843.071 267.479C850.191 269.418 863.717 271.356 871.548 260.695C877.813 252.166 862.293 244.542 853.75 241.796Z"
											fill="#D946EF"
										/>
									</g>
									<g filter="url(#filter2_f_1_2)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M749.539 295.201C773.46 300.354 779.762 334.033 796.795 353.562C813.441 372.648 843.56 380.086 846.663 406.556C849.874 433.948 829.553 457.29 811.099 475.593C793.917 492.635 772.431 501.247 749.539 502.887C724.726 504.664 694.662 507.18 679.579 485.013C664.844 463.357 683.954 433.797 683.994 406.556C684.034 379.411 666.476 351.015 679.811 328.36C694.269 303.796 723.766 289.649 749.539 295.201Z"
											fill="#1D4ED8"
											fillOpacity="0.75"
										/>
									</g>
									<g filter="url(#filter3_f_1_2)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M599.838 240.664C622.091 242.884 644.355 240.073 663.377 252.275C688.638 268.48 718.614 287.533 720.847 318.29C723.131 349.753 699.488 378.338 673.742 395.073C652.025 409.189 625.453 397.264 599.838 396.946C574.805 396.635 544.029 412.956 527.68 393.259C511.276 373.497 535.372 344.372 534.551 318.29C533.669 290.249 505.033 259.378 522.801 238.252C540.374 217.357 573.253 238.012 599.838 240.664Z"
											fill="#6D28D9"
											fillOpacity="0.4"
										/>
									</g>
								</g>
								<defs>
									<filter
										id="filter0_f_1_2"
										x="228"
										y="-60"
										width="618"
										height="540"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_2" />
									</filter>
									<filter
										id="filter1_f_1_2"
										x="496"
										y="40"
										width="477"
										height="329"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_2" />
									</filter>
									<filter
										id="filter2_f_1_2"
										x="554"
										y="174"
										width="413"
										height="450"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_2" />
									</filter>
									<filter
										id="filter3_f_1_2"
										x="397"
										y="109"
										width="444"
										height="414"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1_2" />
									</filter>
									<clipPath id="clip0_1_2">
										<rect width="1030" height="692" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>
						
						<SectionTitle big accentText="Hi there! I'm">
							anAI
						</SectionTitle>
						<div className="h-4 sm:h-0"></div>
						<div className={sectionBodyClasses}>
							<LinkToSection title="About Me" href="about">
								I help brands, code, and do some other stuff.
							</LinkToSection>
							<LinkToSection title="School" href="school">
								I studied Computer Science and Engineering at RTMNU.
							</LinkToSection>
							<LinkToSection title="Work Experience" href="experience">
								Currently working as a Junior Performance Marketing Executive. Previously, I worked at GeeksforGeeks.
							</LinkToSection>
							<LinkToSection title="Projects" href="projects">
								I'm currently working on campaign performance project and "innit" our IDE web platform.
							</LinkToSection>
							<LinkToSection title="Achievements" href="achievements">
								From running modest ad experiments to managing ₹1+ million in performance campaigns, it’s been a journey of learning, jugaad, and results.
							</LinkToSection>
						</div>
						<div className="h-6 md:h-8 xl:h-16"></div>
						<div className="font-mono uppercase text-slate-400 text-sm sm:text-base">
							<a className={fancyLinkClasses} href="mailto:work@omjajulwar.dev" target="_blank">
								Email
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://github.com/AnAi05"
								target="_blank"
							>
								Github
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://www.linkedin.com/in/anai-5/"
								target="_blank"
							>
								LinkedIn
							</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="https://www.instagram.com/agnyan.ai/"
								target="_blank"
							>
								Instagram
							</a>{' '}
							·{' '}
							<a
							className={fancyLinkClasses}
							href="https://www.facebook.com/om.jajulwar/"
							target="_blank"
						>
							Facebook
						</a>{' '}
						·{' '}
						<a
							className={fancyLinkClasses}
							href="https://x.com/fakira_ai"
							target="_blank"
						>
							X
						</a>{' '}
							·{' '}
							<a
								className={fancyLinkClasses}
								href="./resume.pdf"
								target="_blank"
							>
								Resume
							</a>
						</div>
					</div>
				</div>

				<div className={containerClasses} id="about">
					<SectionTitle big accentText="01">
						About Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>
							Namaste! Born and raised in Nagpur, India,
							with a curious mind that always wanted to
							know how things work—whether it was a piece
							of code or the reason behind someone clicking
							on an ad. That curiosity led to a degree in
							Computer Science and Engineering, and somewhere
							along the way, a deep interest in data and marketing
							began to take shape.
						</p>

						<p>
							Numbers have never just been numbers. They tell
							stories—of people, behavior, and decisions. There's
							something fascinating about finding patterns hidden
							in chaos and turning them into insights that actually
							make a difference. Whether it’s improving a campaign or
							solving a tricky problem, there’s real joy in using data
							to drive smart, meaningful change.
						</p>
						<p>
							Outside the screen and spreadsheets, time is often spent
							volunteering or getting lost in a good book—always learning, always exploring.
						</p>
						<p>
							Unleashing the Potential of Bits and Bytes!
						</p>
					</div>
				</div>

				<div className={containerClasses} id="school">
					<SectionTitle big accentText="02">
						Education
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>Pursued Computer Science at RTMNU, where I discovered how logic, curiosity, and caffeine could build the future.</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">Technical Grad Classes:</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>Advanced Algorithms</li>
							<li>Distributed Systems</li>
							<li>Computer Vision</li>
							<li>Machine Learning</li>
						</ul>
						<div className="h-4"></div>
						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Technical Undergrad Classes:
						</h2>
						<ul className="list-disc ml-8 marker:text-slate-500 lg:space-y-0.5">
							<li>Probability and Random Variables</li>
							<li>Fundamentals of Statistics</li>
							<li>Operating Systems Engineering</li>
							<li>Natural Language Processing</li>
							<li>Introduction to Python</li>
							<li>Computation Structures</li>
						</ul>
					</div>
				</div>

				<div className={containerClasses} id="experience">
					<SectionTitle big accentText="03">
						Work Experience
					</SectionTitle>
					<div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
						<p>
							To view my full work experience, please{' '}
							<a href="https://www.linkedin.com/in/anai-5/" className={fancyLinkClasses}>
								visit my Linkedin page
							</a>
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							The Hype Capital &mdash; Jan 2025 - Present
						</h2>
						<p>
							I manage client accounts and keep our social media buzzing with fresh,
							engaging content. From sparking conversations with followers to
							brainstorming creative campaigns with the team, I ensure every post
							not only entertains but performs — tracking results, optimizing for
							impact, and running data-driven performance marketing strategies to maximize ROI.
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							First Quadrant Labs &mdash; Aug 2024 - Oct 2024
						</h2>
						<p>
							As a Data Science Intern, used tech stacks like Python and
							TensorFlow to analyze data and create models that improved
							efficiency by 15%. I made clear visual reports to find
							patterns, boosting accuracy by 20%. Also helped launch
							and monitor AI models, reducing errors in real-time use.
						</p>

						<div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Geeks for Geeks &mdash; Aug 2023  - Oct 2023
						</h2>
						<p>
							As a Front-End Intern, worked with tools like HTML, JavaScript,
							React, and MongoDB to manage and optimize student enrollment
							databases, ensuring accurate and efficient operations. Analyzed
							enrollment data to forecast future course demand, contributing
							to more effective resource planning. Collaborated closely with
							marketing and content teams to align data insights with business 
							objectives, leading to improved teamwork and more informed decision-making.
						</p>

						{/* <div className="h-6 lg:h-10"></div>

						<h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">
							Codeium &mdash; Summer 2023
						</h2>
						<p>
							<a href="https://codeium.com/" className={linkClasses}>
								Codeium
							</a>{' '}
							is a company that builds AI-powered developer tools such as autocomplete. I led the
							initiative to quantize our large language model, achieving a ~2.3x speed increase for
							our company's product in just 11 weeks.
						</p> */}
					</div>
				</div>

				<div className={containerClasses} id="projects">
					<SectionTitle big accentText="04">
						Projects
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I'm always working on something new. Below are a few of my favorite projects!</p>
					</div>
					<div className="h-8 lg:h-12"></div>
					<ProjectsList />
				</div>

				<div className={containerClasses} id="achievements">
					<SectionTitle big accentText="05">
						Achievements
					</SectionTitle>
					<Achievements />
				</div>

				<div className={containerClasses} id="contact">
					<SectionTitle big accentText="06">
						Contact Me
					</SectionTitle>
					<div className={sectionBodyClasses}>
						<p>I really enjoy meeting new people! Please feel free to reach out.</p>
					</div>
					<div className="font-mono text-slate-400 sm:text-lg md:text-xl mt-4 md:mt-6">
						<a className={linkClasses} href="mailto:work@omjajulwar.dev" target="_blank">
							Email
						</a>{' '}
						·{' '}
						<a className={linkClasses} href="https://github.com/AnAi05" target="_blank">
							Github
						</a>{' '}
						·{' '}
						<a
							className={linkClasses}
							href="https://www.linkedin.com/in/anai-5/"
							target="_blank"
						>
							Linkedin
						</a>{' '}
						·{' '}
						<a
							className={linkClasses}
							href="https://www.instagram.com/agnyan.ai/"
							target="_blank"
						>
							Instagram
						</a>{' '}
						·{' '}

						<a
							className={linkClasses}
							href="https://www.facebook.com/om.jajulwar/"
							target="_blank"
						>
							Facebook
						</a>{' '}
						·{' '}

						<a
							className={linkClasses}
							href="https://x.com/fakira_ai"
							target="_blank"
						>
							X
						</a>{' '}
						·{' '}
							<a
						className={linkClasses}
							href="./resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>

					</div>
				</div>

				<div className="h-8 md:h-12 lg:h-16"></div>

				<div className={`${containerClasses} pb-6 md:pb-12 lg:pb-24`}>
					<div className="font-mono text-slate-400 text-xs md:text-sm lg:text-base">
						Copyright {new Date().getFullYear()} anAI.
						<br />
						This site is built with{' '}
						<a className={linkClasses} href="https://nextjs.org/" target="_blank">
							Next.js
						</a>{' '}
						and{' '}
						<a className={linkClasses} href="https://tailwindcss.com/" target="_blank">
							Tailwind CSS
						</a>
						. View the source code on{' '}
						<a
							className={linkClasses}
							href="https://github.com/AnAi05"
							target="_blank"
						>
							Github
						</a>
						.
					</div>
				</div>
			</main>
		</div>
	);
}
