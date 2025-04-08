import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'

import { Link } from'react-router-dom'

import { useDispatch } from'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book}) => {
    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className=" rounded-lg transition-shadow duration-300">
            <div
                className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
            >
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt=""
                            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                       {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-5">{book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}</p>
                    <p className="font-medium mb-5">
                        ${book?.newPrice} <span className="line-through font-normal ml-2">$ {book?.oldPrice}</span>
                    </p>
                    <button 
                    onClick={() => handleAddToCart(book)}
                    className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                        <FiShoppingCart className="" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookCard



// import React, { useEffect } from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
// import { getImgUrl } from '../../utils/getImgUrl';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/features/cart/cartSlice';

// const BookCard = ({ book }) => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         console.log("📚 Received Book Data in BookCard:", book);
//     }, [book]);

//     if (!book || Object.keys(book).length === 0) {
//         return <p className="text-gray-500">No book data available</p>;
//     }

//     const handleAddToCart = () => {
//         dispatch(addToCart(book));
//     };

//     return (
//         <div className="rounded-lg shadow-md p-4 bg-white transition-shadow duration-300">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
//                 {/* Book Image */}
//                 <div className="sm:h-72 sm:flex-shrink-0 border rounded-md overflow-hidden">
//                     <Link to={`/books/${book._id}`}>
//                         <img
//                             src={getImgUrl(book?.coverImage)}
//                             alt={book?.title || "Book cover"}
//                             className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-200"
//                         />
//                     </Link>
//                 </div>

//                 {/* Book Details */}
//                 <div className="flex flex-col justify-between">
//                     <Link to={`/books/${book._id}`}>
//                         <h3 className="text-xl font-semibold hover:text-blue-600 mb-2">
//                             {book?.title || "No Title"}
//                         </h3>
//                     </Link>
//                     <p className="text-gray-600 mb-3">
//                         {book?.description
//                             ? book.description.length > 80
//                                 ? `${book.description.slice(0, 80)}...`
//                                 : book.description
//                             : "No description available"}
//                     </p>
//                     <p className="font-medium mb-3">
//                         ${book?.newPrice || "0.00"} 
//                         {book?.oldPrice && (
//                             <span className="line-through font-normal ml-2">
//                                 ${book.oldPrice}
//                             </span>
//                         )}
//                     </p>

//                     {/* Add to Cart Button */}
//                     <button
//                         onClick={handleAddToCart}
//                         className="btn-primary px-6 flex items-center gap-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//                     >
//                         <FiShoppingCart />
//                         <span>Add to Cart</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookCard;
