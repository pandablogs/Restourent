import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const subscribe = () => {
        // Add your subscribe logic here
    };

    return (
        <div className="Layout__footer">
            <div className="Footer relative h-fit text-zinc-50">
                <div className="Footer__content relative z-10 bg-zinc-950 py-12 xl:py-24">
                    <div className="px-6 lg:px-12">
                        <div className="grid grid-cols-12 gap-x-8">
                            <div className="col-span-12 lg:col-span-7">
                                <div className="flex h-full flex-col">
                                    <div className="flex items-center">
                                        <div className="w-12 text-zinc-50">
                                            <svg viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46.8881 8.34882C44.7881 2.04691 39.2424 -0.0416562 36.3522 3.76127C33.4036 7.6412 34.1378 16.4321 32.8425 17.0801C31.9412 17.5309 30.5891 13.6293 28.5024 0.672442L23.5243 0L23.5224 0.0136519C23.5161 0.0127768 23.5097 0.0119016 23.5034 0.0110265C21.2689 16.5839 20.4794 21.2542 20.2914 21.2402C19.9649 21.2159 22.6586 7.15708 19.4 2.70202C17.6859 0.358624 14.422 0.794259 12.5014 3.71734C9.37571 8.47431 10.0344 18.9478 9.56001 19.0601C9.1203 19.1644 10.0152 9.82235 7.42675 7.00744C5.74781 5.18159 2.64782 6.09959 1.04175 9.47143C-1.25785 14.2996 0.9423 21.142 1.11199 21.6512C3.21198 27.9531 8.75768 30.0417 11.6479 26.2387C14.5965 22.3588 13.8623 13.5679 15.1576 12.9199C16.0589 12.4691 17.4109 16.3707 19.4977 29.3276L24.4758 30L24.4777 29.9863C24.484 29.9872 24.4904 29.9881 24.4967 29.989C26.731 13.4163 27.5205 8.74595 27.7085 8.75995C28.035 8.78428 25.3413 22.8431 28.5999 27.2982C30.314 29.6416 33.5777 29.2059 35.4985 26.2828C38.6242 21.5259 37.9655 11.0524 38.4399 10.9401C38.8796 10.8357 37.9847 20.1778 40.5732 22.9927C42.2521 24.8186 45.3521 23.9006 46.9582 20.5287C49.2579 15.7004 47.0576 8.85779 46.8881 8.34882Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="ml-5 max-w-3xl flex-1 border-l border-zinc-50/50 pl-5 sm:ml-6 sm:pl-6">
                                            <span className="font-body text-lg font-medium leading-[1.25] sm:text-xl 2xl:text-2xl 2xl:leading-none">
                                                We are on a mission to bring a love of cooking to everyone
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-auto max-w-lg pt-12">
                                        <div className="Newsletter space-y-3">
                                            <div className="Newsletter__form">
                                                <form className="Form relative space-y-2">
                                                    <div>
                                                        <label>
                                                            <span className="hidden">Email address</span>
                                                            <input name="email" placeholder="Enter your email address" type="email" className="h-12 w-full rounded-full bg-zinc-50 px-5 font-body text-sm text-zinc-900" value="" />
                                                        </label>
                                                        <button type="submit" className="Newsletter__button absolute inset-y-0.5 right-0.5 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 transition ease-out hover:bg-zinc-800" aria-label="Submit email address">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="Newsletter__privacy flex cursor-pointer items-center space-x-3">
                                                <button className="Newsletter__consent group flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-zinc-50 bg-zinc-950 transition ease-out hover:bg-zinc-50" type="button" aria-label="Newsletter opt-in"></button>
                                                <label className="Newsletter__statement cursor-pointer font-body text-sm text-current">
                                                    I consent to being contacted by email. Your email address is safe with us. Read our <a className="underline decoration-zinc-50/50 decoration-from-font underline-offset-2" href="/privacy-policy">Privacy Policy</a>.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 flex flex-col lg:col-span-5">
                                <div className="space-y-6 max-lg:pt-12 lg:space-y-12">
                                    <div>
                                        <div className="SocialLinks">
                                            <div className="SocialLinks__content flex space-x-4">
                                                <a className="SocialLinks__link flex h-7 w-7 items-center justify-center" href="https://www.facebook.com/mobkitchen" aria-label="Go to Facebook profile" target="_blank" rel="noopener noreferrer">
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                        <title>Facebook</title>
                                                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                                    </svg>
                                                </a>
                                                <a className="SocialLinks__link flex h-7 w-7 items-center justify-center" href="https://www.instagram.com/mobkitchen" aria-label="Go to Instagram profile" target="_blank" rel="noopener noreferrer">
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                        <title>Instagram</title>
                                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                                                    </svg>
                                                </a>
                                                <a className="SocialLinks__link flex h-7 w-7 items-center justify-center" href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" aria-label="Go to YouTube profile" target="_blank" rel="noopener noreferrer">
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                        <title>YouTube</title>
                                                        <path d="M23.571 7.674s-.232-1.662-.932-2.362c-.853-.854-1.702-.854-2.116-.954-3.464-.26-8.66-.26-8.66-.26h-.013s-5.196 0-8.66.26c-.414.1-1.263.1-2.116.954-.7.7-.932 2.362-.932 2.362S0 9.67 0 11.785v.43c0 2.114.444 4.11.444 4.11s.232 1.662.932 2.362c.853.854 1.815.854 2.266.975 1.628.123 8.027.18 8.027.18s5.196-.005 8.66-.265c.414-.1 1.263-.1 2.116-.954.7-.7.932-2.362.932-2.362s.444-2.008.444-4.11v-.43c0-2.115-.444-4.11-.444-4.11ZM9.455 15.3V8.705l6.818 3.795-6.818 2.8Z" />
                                                    </svg>
                                                </a>
                                                <a className="SocialLinks__link flex h-7 w-7 items-center justify-center" href="https://www.linkedin.com/company/YOUR_COMPANY_ID" aria-label="Go to LinkedIn profile" target="_blank" rel="noopener noreferrer">
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                        <title>LinkedIn</title>
                                                        <path d="M21.103 0H2.897C1.298 0 0 1.298 0 2.897v18.206C0 22.702 1.298 24 2.897 24h18.206C22.702 24 24 22.702 24 21.103V2.897C24 1.298 22.702 0 21.103 0zM7.256 19.2H4.512v-9.69h2.744v9.69zM5.884 8.74H5.861c-.912 0-1.483-.629-1.483-1.426 0-.822.583-1.426 1.487-1.426h.023c.912 0 1.482.604 1.482 1.426 0 .797-.57 1.426-1.486 1.426Zm13.06 10.46h-2.744v-5.422c0-1.292-.464-2.178-1.626-2.178-1.035 0-1.65.698-1.918 1.377-.1.248-.124.59-.124.938v5.284h-2.744v-9.69h2.67v1.468h.035c.37-.7 1.272-1.805 2.639-1.805 1.92 0 3.366 1.256 3.366 3.946v6.08Z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul class="flex flex-wrap">
                                            <li class="w-1/2">
                                                <a class="font-body text-sm" href="/about">
                                                    About Us
                                                </a>
                                            </li>
                                            <li class="w-1/2">
                                                <Link to={'/contact-us'} class="font-body text-sm" href="/contact-us">
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li class="w-1/2">
                                                <a class="font-body text-sm" href="/cookies">
                                                    Privacy &amp; Cookies
                                                </a>
                                            </li>
                                            <li class="w-1/2">
                                                <a class="font-body text-sm" href="/faqs">
                                                    FAQs
                                                </a>
                                            </li>
                                            {/* <li class="w-1/2">
                                                <a class="font-body text-sm" href="/careers">
                                                    Careers
                                                </a>
                                            </li> */}
                                            <li class="w-1/2">
                                                <a class="font-body text-sm" href="/privacy-settings">
                                                    Privacy Settings
                                                </a>
                                            </li>
                                            {/* <li class="w-1/2">
                                                <a class="text-sm" href="/login">
                                                    Sign In
                                                </a>
                                            </li> */}
                                            <li class="w-1/2">
                                                <a class="text-sm" href="/premium">
                                                    Start Free Trial
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
