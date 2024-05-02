import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((response) => {
        console.log(response);
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError('Data is not structured as expected');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  
  
  
  


  return (
    
   <div className='mt-24'>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-10 border-b p-5">Featured Products</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
   
   {Array.isArray(products) && products.length > 0 ? (
     products.map((product) => (
       <div key={product.id} className="card items-center w-80 p-5 bg-base-100 shadow-xl  ">
         
     <Link to={`/product/${product.id}`} >
     <div>
      <figure>
         <img
           src={product.attributes.image}
           className=":md-h-auto h-[200px] w-96  rounded-xl object-cover"
           alt="food image"
         />
       </figure>
       <div className="card-body items-center">
         <h2 className="card-title">{product.attributes.title}</h2>
         <h2 className="line-clamp-3 text-md">${product.attributes.price}</h2>
        
       
       </div>
      </div>
     </Link>
     </div>
     ))
   ) : (
     <div>Hech qanday mahsulot topilmadi</div>
   )}
 </div>
   </div>
  );
}

export default FeaturedProducts;
