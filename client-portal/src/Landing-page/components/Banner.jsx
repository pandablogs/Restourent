import React from 'react'
import deliveryImg from '../../assets/menu-assets/banner/deliveroo-bag.webp'

const Banner = () => {
    return (
        <div className="odd:bg-white even:bg-zinc-100">
            <div className="bg-zinc-100 p-6 lg:p-0">
                <div className="">
                    <div className="relative flex items-center overflow-hidden rounded-2xl bg-white px-6 py-6 lg:h-80 lg:rounded-none lg:bg-zinc-100 lg:px-12 lg:py-12 xl:h-96">
                        <div className="flex flex-col">
                            <div className="w-3/5 space-y-4 xs:w-2/3 sm:w-1/2 md:w-2/3 lg:w-full lg:space-y-4">
                                <div className="space-y-1 2xl:space-y-2">
                                    <h2 className="font-spatial font-medium text-2xl leading-6 lg:text-3xl xl:text-4xl 2xl:text-4xl">
                                        Can’t decide what to eat?
                                    </h2>
                                    <div className="text-sm lg:text-lg 2xl:text-2xl">
                                        Discover exclusive new recipes designed to suit your mood,
                                        with&nbsp;Deliveroo.
                                    </div>
                                </div>
                                <div>
                                    <button className="button bg-black rounded-full px-6 py-2 text-white font-semibold">
                                        <div className="whitespace-nowrap text-sm">Get started</div>
                                    </button>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="flex items-center space-x-1">
                                    <div>
                                        <span className='box-border inline-block overflow-hidden w-16 h-20 opacity-100 border-0 m-0 p-0 relative' style={{ background: "none" }}>
                                            <img className='absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full'
                                                alt="Deliveroo illustration" src={deliveryImg} />
                                        </span>
                                    </div>
                                    <div className="relative -top-[4px] max-w-72 text-balance font-spatial text-[15px] font-medium leading-[1]">
                                        We're making ours with groceries from
                                        <span className="relative top-[3px] inline-block w-[58px]">

                                            <svg
                                                viewBox="0 0 68 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="block h-full w-full">
                                                <path
                                                    d="M47.1388 7.63814C45.4856 7.63814 44.275 8.83513 44.275 10.6238C44.275 12.4125 45.4765 13.6095 47.3375 13.6095C48.1506 13.6095 48.9546 13.3882 49.6276 12.9546L49.0675 11.6898C48.539 11.9654 47.9563 12.1325 47.3601 12.1325C46.5877 12.1325 46.0502 11.8344 45.8198 11.2788H49.9393C49.9844 11.0665 50.007 10.8587 50.007 10.6013C50.007 8.8261 48.7829 7.63814 47.1433 7.63814H47.1388ZM45.7295 10.1044C45.8966 9.44944 46.389 9.0926 47.1388 9.0926C47.8886 9.0926 48.3945 9.44944 48.5481 10.1044H45.7295ZM64.2625 7.63814C62.6003 7.63814 61.3671 8.84868 61.3671 10.6238C61.3671 12.399 62.6003 13.6095 64.2625 13.6095C65.9247 13.6095 67.1578 12.399 67.1578 10.6238C67.1578 8.84868 65.9247 7.63814 64.2625 7.63814ZM64.2625 12.0693C63.4133 12.0693 62.7854 11.5046 62.7854 10.6238C62.7854 9.74304 63.4133 9.18294 64.2625 9.18294C65.1117 9.18294 65.7395 9.73852 65.7395 10.6238C65.7395 11.5092 65.1207 12.0693 64.2625 12.0693ZM42.2785 7.76462H43.8775L42.3463 13.4921H39.9885L38.4572 7.76462H40.0336L41.1583 12.4035L42.2831 7.76462H42.2785ZM36.2123 7.76462H37.6758V13.4921H36.2123V7.76462ZM57.7762 7.64266C56.1139 7.64266 54.8808 8.8532 54.8808 10.6284C54.8808 12.4035 56.1139 13.6141 57.7762 13.6141C59.4384 13.6141 60.6715 12.4035 60.6715 10.6284C60.6715 8.8532 59.4384 7.64266 57.7762 7.64266ZM57.7762 12.0738C56.927 12.0738 56.2991 11.5092 56.2991 10.6284C56.2991 9.74755 56.927 9.18745 57.7762 9.18745C58.6253 9.18745 59.2532 9.74304 59.2532 10.6284C59.2532 11.5137 58.6344 12.0738 57.7762 12.0738ZM55.0028 7.92271L54.3072 9.48557C54.0542 9.30941 53.7787 9.22811 53.4805 9.22811C52.9972 9.22811 52.6223 9.46299 52.4236 9.83789V13.4876H50.9601V8.8803L50.7162 7.7601H52.2248L52.3784 8.48281C52.7307 7.92723 53.2818 7.62911 53.9413 7.62911C54.3026 7.62911 54.6775 7.71945 54.9982 7.91819L55.0028 7.92271ZM29.6447 7.62911C27.9915 7.62911 26.7809 8.8261 26.7809 10.6148C26.7809 12.4035 27.9824 13.6005 29.8434 13.6005C30.6565 13.6005 31.4605 13.3792 32.1335 12.9455L31.5734 11.6808C31.0449 11.9563 30.4622 12.1235 29.866 12.1235C29.0936 12.1235 28.5561 11.8253 28.3257 11.2698H32.4452C32.4903 11.0575 32.5129 10.8497 32.5129 10.5922C32.5129 8.81706 31.2888 7.62911 29.6492 7.62911H29.6447ZM28.2083 10.1089C28.3754 9.45395 28.8678 9.09711 29.6176 9.09711C30.3674 9.09711 30.8733 9.45395 31.0268 10.1089H28.2083ZM37.8655 6.04818C37.8655 6.58118 37.468 6.97867 36.9531 6.97867C36.4381 6.97867 36.0271 6.58118 36.0271 6.04818C36.0271 5.51518 36.4246 5.11769 36.9531 5.11769C37.4816 5.11769 37.8655 5.51518 37.8655 6.04818ZM25.8053 5.2261H24.3418V8.45571C23.8991 7.94529 23.2939 7.64718 22.5802 7.64718C21.1167 7.64718 19.9829 8.85772 19.9829 10.6329C19.9829 12.408 21.1167 13.6186 22.5802 13.6186C23.3074 13.6186 23.9353 13.3069 24.3734 12.7739L24.527 13.4966H26.0582L25.8053 12.3087V5.2261ZM22.8738 12.0738C22.0246 12.0738 21.3967 11.5092 21.3967 10.6284C21.3967 9.74755 22.0246 9.18745 22.8738 9.18745C23.723 9.18745 24.3508 9.74304 24.3508 10.6284C24.3508 11.5137 23.732 12.0738 22.8738 12.0738ZM33.4344 5.2261H34.8979V13.4966H33.4344V5.21706V5.2261ZM10.9445 7.94981L9.51267 1.26023L5.02735 2.20878L6.45922 8.89837L0 10.2535L1.14279 15.597L12.5119 18L15.1137 12.1912L16.3513 0.478795L11.7892 0L10.9491 7.93626L10.9445 7.94981ZM8.18921 11.5272C7.95433 11.7395 7.64266 11.7215 7.31744 11.613C6.9877 11.5046 6.84316 11.1117 6.96512 10.6329C7.05546 10.276 7.4936 10.2263 7.71041 10.2218C7.79172 10.2218 7.87302 10.2354 7.94981 10.2715C8.10339 10.3393 8.36537 10.4883 8.41957 10.7142C8.49636 11.0394 8.41957 11.3149 8.18921 11.5272ZM11.4821 11.8976C11.3104 12.1912 10.8632 12.2319 10.4251 12.0151C10.127 11.8705 10.1315 11.5046 10.1631 11.2788C10.1812 11.1568 10.2309 11.0394 10.3077 10.9445C10.4115 10.809 10.5922 10.6374 10.7955 10.6329C11.1297 10.6238 11.4143 10.7729 11.5769 11.0394C11.7395 11.3059 11.6582 11.604 11.4866 11.8976H11.4821Z"
                                                    fill="#00CCBD"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 transition ease-out w-72 -translate-y-[20%] translate-x-[60%] xs:w-80 xs:translate-x-[55%] sm:w-96 sm:translate-x-[33.333%] md:w-112 md:translate-x-[10%] lg:w-[47.5vw] lg:translate-x-[10%] xl:w-[55vw] xl:translate-x-[20%] 2xl:w-[60vw] 2xl:translate-x-[15%] 3xl:w-[60vw] 3xl:translate-x-0">
                            <div className="-rotate-45">
                                <div className="direction-rtl grid grid-cols-4 grid-rows-3 gap-2 lg:gap-4 opacity-100 transform-none">
                                    <div className="relative invisible col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Turmeric Braised Chicken Couscous Broth"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Turmeric-Braised-Chicken-Couscous-Broth.jpg" />
                                        </span>0
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Sweet Potato Salad"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Sweet-Potato-Salad.webp" />
                                        </span>1
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="849 A0016 2"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/849A0016-2.jpg" />
                                        </span>2
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl invisible opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Tonkatsu"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/tonkatsu.webp" />
                                        </span>3
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Herby Chickpea Coconut Curry"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Herby-Chickpea-Coconut-Curry.jpg" />
                                        </span>4
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Tomato Curry"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Tomato-Curry.jpg" />
                                        </span>5
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="220 A9508"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/220A9508.jpg" />
                                        </span>6
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Sizzle Butter Meal Plan"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Sizzle-Butter-Meal-Plan.jpg" />
                                        </span>7
                                    </div>
                                    <div className="relative invisible col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Juicy Prawn Noodles Meal Plan"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Juicy-Prawn-Noodles-–-Meal-Plan.jpg" />
                                        </span>8
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="Strawberry Cheese Cake Crackers"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/Strawberry-Cheese-Cake-Crackers.jpg" />
                                        </span>9
                                    </div>
                                    <div className="relative col-span-1 aspect-3by4 overflow-hidden rounded-md lg:rounded-2xl opacity-100 transform-none">
                                        <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 absolute inset-0 w-0 h-0 min-w-full min-h-full max-w-full max-h-full' style={{ background: "none" }} >
                                            <img className='h-full object-cover' alt="849 A5345"
                                                src="https://www.mob.co.uk/cdn-cgi/image/width=1728,quality=75,format=auto/https://files.mob-cdn.co.uk/recipes/849A5345.jpg" />
                                        </span>10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner