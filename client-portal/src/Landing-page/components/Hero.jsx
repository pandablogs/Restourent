import React, { useState } from 'react'
import Menu from './Menu'
import Banner from './Banner'
import Featureblock from './Featureblock'
import Footer from './Footer'
import Menu2 from './Menu2'
import Featureblock2 from './Featureblock2'
import FAQs from './FAQs'
import Testimonials from './Testimonials'

const Hero = () => {
    const [activeTab, setActiveTab] = useState('New recipes')

    const tabs = ['New recipes', 'Trending', 'Speedy', 'Healthy', 'Pasta,always']

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
    return (
        <div className="Layout__content relative z-20 mt-0">
            <main className="Layout__main min-h-dvh-ex-header relative z-10 flex h-full flex-col bg-white">
                <div className="bg-zinc-900 pb-6 pt-4 lg:pb-8 lg:pt-5 2xl:pb-10 2xl:pt-6">
                    <div dir="ltr">
                        <div className="flex w-full pb-4 lg:pb-6">
                            <div className="flex-1 overflow-hidden">
                                <div role="tablist" className="outline-none">
                                    <div className="relative">
                                        <div dir="ltr" className="w-full overflow-hidden relative"                                        >
                                            <div className="h-full tabs w-full snap-x snap-mandatory lg:snap-none overflow-x-scroll overflow-y-hidden">
                                                <div className='min-w-full table' >
                                                    <div className="snap-start">
                                                        <div className="flex space-x-3 px-9 lg:px-12">
                                                            {tabs && tabs.map((tab) => (
                                                                <div className="w-fit select-none" key={tab}>
                                                                    <div className="relative">
                                                                        <button
                                                                            className={`h-10 group relative flex items-center space-x-2 rounded-full border font-body text-sm font-medium leading-none transition ease-out px-3.5 lg:px-5 ${activeTab === tab ? 'border-zinc-50 bg-zinc-50 text-zinc-950' : 'border-zinc-700 bg-zinc-950 text-zinc-50 hover:bg-zinc-900'}`}
                                                                            type="button" id={tab} onClick={() => handleTabClick(tab)}>
                                                                            <div className="pointer-events-none select-none whitespace-nowrap font-body text-sm">
                                                                                {tab}
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="w-fit select-none">
                                                                <div className="relative">
                                                                    <button className="h-10 group relative flex items-center space-x-2 rounded-full border font-body text-sm font-medium leading-none transition ease-out border-zinc-700 bg-zinc-950 text-zinc-50 hover:bg-zinc-900 px-3.5 lg:px-5">
                                                                        <div className="">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="group-[.active]:stroke-zinc-950 group-[.inactive]:!stroke-zinc-50 h-3.5 w-3.5">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                                                                </path>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="pointer-events-none select-none whitespace-nowrap font-body text-sm">
                                                                            Your saved recipes
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="w-fit select-none">
                                                                <div className="relative">
                                                                    <button className="h-10 group relative flex items-center space-x-2 rounded-full border font-body text-sm font-medium leading-none transition ease-out border-zinc-700 bg-zinc-950 text-zinc-50 hover:bg-zinc-900 px-3.5 lg:px-5">
                                                                        <div className="">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                                                className="group-[.active]:stroke-zinc-950 group-[.inactive]:!stroke-zinc-50 h-3.5 w-3.5">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                                                                </path>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="pointer-events-none select-none whitespace-nowrap font-body text-sm">
                                                                            On your planner
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-zinc-900">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-18 border-l border-zinc-500 pl-4 pr-4 lg:w-28 lg:pl-6 lg:pr-12">
                                <button className="w-component hover:bg-zinc-800 transition ease-out h-component flex items-center justify-center rounded-full bg-zinc-700 text-zinc-50 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5">
                                        </path>
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <Menu activeTab={activeTab} />
                </div>

                <Banner />
                <div className="">
                    <div class="odd:bg-white even:bg-zinc-100">
                        <div class="Rail py-6 lg:py-8 xl:py-12">
                            <div>
                                <div class="RailCarousel space-y-4 lg:space-y-6 2xl:space-y-8">
                                    <div class="px-6 lg:px-12">
                                        <h2 class="heading-sm--spatial font-bold">What to cook tonight</h2>
                                    </div>
                                    <Menu2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Featureblock />
                <div class="odd:bg-white even:bg-zinc-100">
                    <div class="Rail py-6 lg:py-8 xl:py-12">
                        <div>
                            <div class="RailCarousel space-y-4 lg:space-y-6 2xl:space-y-8">
                                <div class="px-6 lg:px-12">
                                    <h2 class="heading-sm--spatial font-bold">Our best healthy recipes</h2>
                                </div>
                                <Menu2 />
                            </div>
                        </div>
                    </div>
                </div>
                <Featureblock2 />
                <div class="odd:bg-black even:bg-zinc-100">
                    <div class="Rail py-6 lg:py-8 xl:py-12">
                        <div>
                            <div class="RailCarousel space-y-4 lg:space-y-6 2xl:space-y-8">
                                <div class="px-6 lg:px-12">
                                    <h2 class="heading-sm--spatial text-white font-bold">Meal plans for you</h2>
                                </div>
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
                <FAQs />
                <div className="testimonial bg-zinc-100">
                    <div className=" container m-auto py-28 ">
                        <Testimonials />
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Hero