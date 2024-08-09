import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import invertedComa from '../../assets/menu-assets/banner/bg-image.png'

const Testimonials = () => {

    const REVIEWS = [
        {
            id: 6,
            name: 'Alice',
            role: 'Data Scientist',
            avatar: 'https://i.pravatar.cc/150?img=23',
            review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
        },
        {
            id: 0,
            name: 'Bob',
            role: 'Architect',
            avatar: 'https://i.pravatar.cc/150?img=13',
            review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
        },
        {
            id: 2,
            name: 'Charlie',
            role: 'DevOps Engineer',
            avatar: 'https://i.pravatar.cc/150?img=8',
            review: `Results speak louder than words. I've never seen progress like this. The workflows are challenging but oh-so-rewarding. Kudos!`,
        },
        {
            id: 3,
            name: 'Diana',
            role: 'Product Manager',
            avatar: 'https://i.pravatar.cc/150?img=41',
            review: `It's very easy to customize and categorize lists for new projects/task categories.`,
        },
        {
            id: 13,
            name: 'Ethan',
            role: 'Software Engineer',
            avatar: 'https://i.pravatar.cc/150?img=57',
            review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
        },
        {
            id: 4,
            name: 'Fiona',
            role: 'Marketing Specialist',
            avatar: 'https://i.pravatar.cc/150?img=42',
            review: `Plan, create, and explore seamlessly. This service made my creative dreams a reality. Smooth navigation, and the recommendations were spot on.`,
        },
        {
            id: 10,
            name: 'George',
            role: 'Software Developer',
            avatar: 'https://i.pravatar.cc/150?img=21',
            review: `A game-changer for organization. Tasks, calendars, notes – everything neatly synced. My life has never been this streamlined. Pure genius!`,
        },
        {
            id: 11,
            name: 'Hannah',
            role: 'Graphic Designer',
            avatar: 'https://i.pravatar.cc/150?img=18',
            review: `Drowning in a sea of creativity. The content here is a visual feast. An endless source of inspiration for my artistic endeavors.`,
        },
        {
            id: 5,
            name: 'Ian',
            role: 'CTO',
            avatar: 'https://i.pravatar.cc/150?img=33',
            review: `Discovering new beats is addictive with this service. The curated playlists are spot-on, and the personalized recommendations are eerily accurate. A music lover's paradise!`,
        },
    ];

    return (
        <>
            <Swiper
                // pagination={{
                //     dynamicBullets: true,
                //     clickable: true,
                // }}
                cssMode={true}
                centeredSlides={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: false

                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    1440: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    1780: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                }}
                className="mySwiper"
            >
                {REVIEWS.map(({ name, role, review, avatar }, index) =>
                    <SwiperSlide className='py-28' key={index}>
                        <div className="sm:mx-60">
                            <div className="sm:flex">
                                <div className=" sm:w-[25%] relative">
                                    <img src={avatar} alt="" className='w-15 h-15 rounded-[2rem] p-6' />
                                    <img src={invertedComa} className='absolute -top-12 left-0 -z-10 w-[74px] h-[132px]' alt="" />
                                </div>
                                <div className=" sm:w-[75%]">
                                    <div className="p-6">
                                        <h1 className=' text-3xl mb-2 font-bold'>{name}</h1>
                                        <p className='mb-1 text-xl font-semibold'>{role}</p>
                                        <p className=' text-lg font-medium'>{review}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}

            </Swiper>
        </>
    )
}

export default Testimonials