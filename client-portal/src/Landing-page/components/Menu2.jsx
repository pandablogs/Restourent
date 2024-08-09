import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './component.scss'
import { useNavigate } from 'react-router-dom';
import AddToCart from './addtocart';
import img1 from '../../assets/menu-assets/starter/The-Ultimate-Lasagne-Recipe.avif'
import img2 from '../../assets/menu-assets/starter/Burst-Tomato-Bacon-Spaghetti.avif'
import img3 from '../../assets/menu-assets/starter/Butter-Halloumi-Curry.avif'
import img4 from '../../assets/menu-assets/starter/Gnocchi-With-Smashed-Peas.avif'
import img5 from '../../assets/menu-assets/starter/Harissa-Cod-Chickpeas.avif'
import img6 from '../../assets/menu-assets/starter/Pan-Fried-Soup-Dumplings.avif'
import img7 from '../../assets/menu-assets/starter/Pasta-Primavera.avif'
import img8 from '../../assets/menu-assets/starter/Quick-Creamy-Butter-Bean-Bowl.avif'
import img9 from '../../assets/menu-assets/starter/Sausage-Gochujang-Rigatoni.avif'
import img10 from '../../assets/menu-assets/starter/Spiced-Chicken-Skewers-With-Yoghurt-Flatbreads.avif'
import img11 from '../../assets/menu-assets/starter/The-Ultimate-Halloumi-Butternut-Squash-Tahini-Salad.avif'

import img101 from '../../assets/menu-assets/collection/849A9768-2-1.avif'
import img102 from '../../assets/menu-assets/collection/Air-Fryer-Recipes.avif'
import img103 from '../../assets/menu-assets/collection/Batch-Cooking-Recipes.avif'
import img104 from '../../assets/menu-assets/collection/Best-Chopped-Salad-Recipes.avif'
import img105 from '../../assets/menu-assets/collection/Best-Ever-Salad-Recipes.avif'
import img106 from '../../assets/menu-assets/collection/Chicken-Recipes.avif'
import img107 from '../../assets/menu-assets/collection/Easy-Weeknight-Dinner-Recipes-And-Ideas.avif'
import img108 from '../../assets/menu-assets/collection/Gochujang-Cauliflower-Hummus-Bowl.avif'
import img109 from '../../assets/menu-assets/collection/Healthy-Lunch-Recipes.avif'
import img110 from '../../assets/menu-assets/collection/Healthy-Recipes.avif'
import img111 from '../../assets/menu-assets/collection/Mobs-Most-Irresistible-Salmon-Recipes.avif'
import img0 from '../../assets/menu-assets/chefs/Lemon-Spaghetti.avif'


import vegIcon from '../../assets/menu-assets/icons/veg.png'
import nonVegIcon from '../../assets/menu-assets/icons/non-veg.png'


// import img201 from '../../assets/menu-assets/meal/220A1751-1.avif'
// import img202 from '../../assets/menu-assets/meal/Baked-Paprika-Cod-With-Peas-Spicy-Chorizo-Dressing.avif'
// import img203 from '../../assets/menu-assets/meal/Batch-Coconut-Dal.avif'
// import img204 from '../../assets/menu-assets/meal/Burst-Tomato-Bacon-Spaghetti.avif'
// import img205 from '../../assets/menu-assets/meal/Chargrilled-Chicken-With-Spiced-Rice.avif'
// import img206 from '../../assets/menu-assets/meal/Chilled-Coconut-Brothy-Noodles.avif'
// import img207 from '../../assets/menu-assets/meal/Roast-Asparagus-Chorizo-Salad.avif'
// import img208 from '../../assets/menu-assets/meal/Silky-Pepper-Pasta.avif'
// import img209 from '../../assets/menu-assets/meal/Spaghetti-With-‘Nduja-Runner-Beans-Lemon.avif'
// import img210 from '../../assets/menu-assets/meal/Turmeric-Braised-Chicken-Chickpeas_2024-05-21-104854_lmry.avif'
// import img211 from '../../assets/menu-assets/meal/Zingy-Green-Pasta.avif'


const Menu = ({ activeTab }) => {
    const navigate = useNavigate();
    useEffect(() => {
        handleShuffle()
    }, [activeTab])


    const [images, setImages] = useState([
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img101, img102, img103, img104, img105, img106, img107, img108, img109, img110, img111, img0
    ])

    const handleShuffle = () => {
        let shuffledData = shuffleArray(images)
        setImages(shuffledData)
    }

    const shuffleArray = (array) => {
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const slidesData1 = [
        {
            id: 101,
            imgSrc: img101,
            title: 'Gnocchi With Smashed Peas, Lemon & Parmesan',
            link: '#',
            price: 12.99,
            type: 'non-veg'
        },
        {
            id: 102,
            imgSrc: img102,
            title: 'Another Recipe Title',
            link: '#',
            price: 10.99,
            type: 'veg'
        },
        {
            id: 103,
            imgSrc: img103,
            title: 'Another Recipe Title',
            link: '#',
            price: 11.99,
            type: 'veg'
        },
        {
            id: 104,
            imgSrc: img104,
            title: 'Another Recipe Title',
            link: '#',
            price: 9.99,
            type: 'non-veg'
        },
        {
            id: 105,
            imgSrc: img105,
            title: 'Another Recipe Title',
            link: '#',
            price: 14.99,
            type: 'non-veg'
        },
        {
            id: 106,
            imgSrc: img106,
            title: 'Another Recipe Title',
            link: '#',
            price: 13.99,
            type: 'veg'
        },
        {
            id: 107,
            imgSrc: img107,
            title: 'Another Recipe Title',
            link: '#',
            price: 15.99,
            type: 'non-veg'
        },
        {
            id: 108,
            imgSrc: img108,
            title: 'Another Recipe Title',
            link: '#',
            price: 8.99,
            type: 'veg'
        },
        {
            id: 109,
            imgSrc: img109,
            title: 'Another Recipe Title',
            link: '#',
            price: 7.99,
            type: 'non-veg'
        },
        {
            id: 110,
            imgSrc: img110,
            title: 'Another Recipe Title',
            link: '#',
            price: 6.99,
            type: 'veg'
        },
        {
            id: 111,
            imgSrc: img111,
            title: 'Another Recipe Title',
            link: '#',
            price: 16.99,
            type: 'veg'
        }
    ];

    return (
        <div className='mt-4 xl:pl-12 text-black'>
            <Swiper
                slidesPerView='auto'
                spaceBetween={65}
                centeredSlides={false}
                mousewheel={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        centeredSlides: true
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: false

                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                    1780: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                        centeredSlides: false
                    },
                }}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {slidesData1.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="lg:w-80 w-[22.5rem]" >
                            <div className="EntryThumbnailCompact space-y-3">
                                <div className="relative ml-10 md:ml-8 sm:ml-0">
                                    <div onClick={() => navigate(`/food/${slide.id}`)}>
                                        <a
                                            className="group relative block aspect-square overflow-hidden rounded-xl bg-zinc-500 select-none w-80 xl:w-72"
                                            draggable="false"

                                        >
                                            <span className='box-border block overflow-hidden opacity-100 border-0 m-0 p-0 relative inset-0'
                                                style={{ width: 'initial', height: 'initial', background: 'none' }}>
                                                <img src={slide.type == 'veg' ? vegIcon : nonVegIcon} className='absolute top-2 left-2 w-6 z-10 bg-white border-white border-1 rounded' />
                                                <img src={slide.imgSrc} alt={slide.title} className='w-full xl:w-full hover:scale-105 duration-150 ease-out' />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="pt-3 flex justify-between">
                                        <div className="" onClick={() => navigate(`/food/${slide.id}`)}>
                                            <div className="min-h-4 select-none font-body text-xs text-zinc-400">${slide.price}</div>

                                            <a className="line-clamp-2 select-none text-sm font-normal xl:font-medium w-40" >
                                                {slide.title}
                                            </a>
                                        </div>
                                        <div>
                                            <AddToCart slide={slide} tailwindCSS={"border-black border-2"} iconColor={"black"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Menu;
