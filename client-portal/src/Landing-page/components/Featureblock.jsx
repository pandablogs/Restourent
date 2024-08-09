import React from 'react'
import img101 from '../../assets/menu-assets/collection/849A9768-2-1.avif'

const Featureblock = () => {
    return (
        <div className='my-20 flex justify-center lg:h-[64vh]'>
            <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden lg:w-4/5">
                <div className="md:w-1/2 overflow-hidden">
                    <img
                        src={img101}
                        alt="Silken Tofu"
                        className="w-full h-full object-cover hover:scale-105 duration-500 ease-in-out"
                    />
                </div>
                <div className="md:w-1/2 flex p-6 pt-10">
                    <div className="md:text-left">
                        <p className="text-sm uppercase text-gray-500 mb-2">Collection</p>
                        <h2 className="text-2xl md:text-4xl font-bold text-black">Simple Silken Tofu Recipes</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featureblock
