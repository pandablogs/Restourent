import React from 'react';
import { useParams } from 'react-router-dom';
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

import AddToCart from './addtocart';
import Header from './Header';
import Footer from './Footer';

const FoodDetail = () => {
    const { id } = useParams();

    const slidesData1 = [
        {
            id: 1,
            imgSrc: img1,
            title: 'Gnocchi With Smashed Peas, Lemon & Parmesan',
            link: '#',
            price: 12.99,
            type: 'non-veg'
        },
        {
            id: 2,
            imgSrc: img2,
            title: 'Another Recipe Title',
            link: '#',
            price: 10.99,
            type: 'veg'
        },
        {
            id: 3,
            imgSrc: img3,
            title: 'Another Recipe Title',
            link: '#',
            price: 11.99,
            type: 'veg'
        },
        {
            id: 4,
            imgSrc: img4,
            title: 'Another Recipe Title',
            link: '#',
            price: 9.99,
            type: 'non-veg'
        },
        {
            id: 5,
            imgSrc: img5,
            title: 'Another Recipe Title',
            link: '#',
            price: 14.99,
            type: 'veg'
        },
        {
            id: 6,
            imgSrc: img6,
            title: 'Another Recipe Title',
            link: '#',
            price: 13.99,
            type: 'veg'
        },
        {
            id: 7,
            imgSrc: img7,
            title: 'Another Recipe Title',
            link: '#',
            price: 15.99,
            type: 'non-veg'
        },
        {
            id: 8,
            imgSrc: img8,
            title: 'Another Recipe Title',
            link: '#',
            price: 8.99,
            type: 'veg'
        },
        {
            id: 9,
            imgSrc: img9,
            title: 'Another Recipe Title',
            link: '#',
            price: 7.99,
            type: 'non-veg'
        },
        {
            id: 10,
            imgSrc: img10,
            title: 'Another Recipe Title',
            link: '#',
            price: 6.99,
            type: 'veg'
        },
        {
            id: 11,
            imgSrc: img11,
            title: 'Another Recipe Title',
            link: '#',
            price: 16.99,
            type: 'non-veg'
        },
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

    const foodItem = slidesData1.find((item) => item.id === parseInt(id));

    if (!foodItem) {
        return <div>Food item not found</div>;
    }

    return (
        <>
            <Header />

            <main className="bg-white relative overflow-hidden">
                <div className="bg-white flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-16 flex-col sm:flex-row">

                        <div className="sm:w-1/3 lg:w-2/5 relative lg:mt-8 sm:mt-0 mb-8">
                            <img src={foodItem.imgSrc} className="max-w-xs md:max-w-sm m-auto border-black border-solid border-2 drop-shadow-lg" alt={foodItem.title} />
                        </div>
                        <div className="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 mb-12"></span>
                            <h1 className="font-bebas-neue uppercase text-2xl sm:text-2xl font-black flex flex-col leading-none text-gray-800">
                                {foodItem.title}
                                <span className={`text-xl sm:text-xl ${foodItem.type === 'veg' ? 'text-green-600' : 'text-red-600'}`}>
                                    {foodItem.type}
                                </span>
                            </h1>
                            <div className="mt-4">
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black hover:bg-black hover:text-white text-md">
                                    Read more
                                </a>
                                <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam magnam fugiat sapiente voluptatibus quae in, vitae tempora alias consequatur accusantium architecto dicta omnis cupiditate necessitatibus beatae? Eius debitis soluta tempora.</p>
                            </div>
                            <div className="flex mt-2">
                                <div className='price lg:text-2xl sm:text-base font-bold text-2xl text-gray-700'>
                                    ${foodItem.price}
                                </div>
                                <div className="mx-3">
                                    <AddToCart slide={foodItem} tailwindCSS="border-black border-2" iconColor="black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    );
};

export default FoodDetail;
