import React, { useContext } from 'react'
import myContext from '../../../../context/myContext'

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context;
    return (
        <div>
            <div className='flex justify-center items-center h-screen my-[20vw] md:my-[8vw] font-semibold'>
                <div className=' bg-teal-dark px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={products.title}
                            onChange={(e) => setProducts({ ...products, title: e.target.value })}
                            name='title'
                            className=' bg-gray-800 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.price}
                            onChange={(e) => setProducts({ ...products, price: e.target.value })}
                            name='price'
                            className=' bg-gray-800 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.imageUrl}
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
                            name='imageurl'
                            className=' bg-gray-800 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={products.category}
                            onChange={(e) => setProducts({ ...products, category: e.target.value })}
                            name='category'
                            className=' bg-gray-800 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <input type='number'
                            value={products.quantity}
                            onChange={(e) => setProducts({ ...products, quantity: e.target.value })}
                            name='quantity'
                            className=' bg-gray-800 mb-4 px-2 py-2 lg:w-[8vw] w-[48vw] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Quantity'
                        />
                    </div>
                    <div>
                    <select
                        value={products.size}
                        onChange={(e) => setProducts({ ...products, size: e.target.value })}
                        name='Size'
                        className='bg-gray-800 mb-4 px-2 py-2 w-full 
                        lg:w-[20em] rounded-lg text-white outline-none'>
                        <option value='' disabled hidden>Size</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>
                    </select>
                    <div>
                    <select
                        value={products.fabric} // Use a separate state for fabric
                        onChange={(e) => setProducts({ ...products, fabric: e.target.value })}
                        name='fabric'
                        className='bg-gray-800 mb-4 px-2 py-2 w-full 
                        lg:w-[20em] rounded-lg text-white outline-none'>
                        <option value='' disabled hidden>Fabric</option>
                        <option value='Silk'>Silk</option>
                        <option value='Cotton'>Cotton</option>
                        <option value='Linen'>Linen</option>
                        <option value='Rayon'>Rayon</option>
                        </select>
                    </div>


                    </div>
                    <div>
                        <textarea cols="30" rows="10" name='title'
                         value={products.description}
                         onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-gray-800 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product desc'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddProduct