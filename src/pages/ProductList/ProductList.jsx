// // ProductList.js
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase'; // Import the initialized firebase instance
// import { collection, query, where, getDocs } from 'firebase/firestore';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollectionRef = collection(db, 'products');
//       const q = query(productsCollectionRef, where('name', '>=', searchTerm));

//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products: ', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
//       <input
//         type="text"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - Price: ₹{product.price.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;




// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase'; // Import the initialized firebase instance
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import './ProductList.css'; // Import your CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollectionRef = collection(db, 'products');
//       const q = query(productsCollectionRef, where('name', '>=', searchTerm));

//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products: ', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="product-list-container">
//       <h2 className="product-list-title">Product List</h2>
//       <input
//         type="text"
//         className="product-list-input"
//         placeholder="Search products"
//         style={{textTransform:"capitalize"}}
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - Price: ₹{product.price.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase'; // Import the initialized firebase instance
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import './ProductList.css'; // Import your CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollectionRef = collection(db, 'products');
//       const q = query(productsCollectionRef, where('name', '>=', searchTerm));

//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products: ', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="product-list-container">
//       <h2 className="product-list-title">Product List</h2>
//       <input
//         type="text"
//         className="product-list-input"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id}>
//             <div className="product-info">
//               <div className="product-name">{product.name}</div>
//               <div className="product-description">{product.description}</div>
//               <div className="product-price">Price: ₹{product.price.toFixed(2)}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase'; // Import the initialized firebase instance
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import './ProductList.css'; // Import your CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollectionRef = collection(db, 'products');
//       const q = query(productsCollectionRef, where('name', '>=', searchTerm));

//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//           expanded: false // Add expanded state to each product initially set to false
//         }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products: ', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleDescription = (productId) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           expanded: !product.expanded // Toggle expanded state
//         };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   return (
//     <div className="product-list-container">
//       <h2 className="product-list-title">Product List</h2>
//       <input
//         type="text"
//         className="product-list-input"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id} onClick={() => toggleDescription(product.id)}>
//             <div className="product-info">
//               <div className="product-name">{product.name}</div>
//               {product.expanded && (
//                 <div className="product-description">{product.description}</div>
//               )}
//               <div className="product-price">Price: ₹{product.price.toFixed(2)}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';
// import { db, storage } from '../firebase'; // Import the initialized firebase instance with Firestore and Storage
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { getDownloadURL, ref } from 'firebase/storage';
// import './ProductList.css'; // Import your CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollectionRef = collection(db, 'products');
//       const q = query(productsCollectionRef, where('name', '>=', searchTerm));

//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = await Promise.all(querySnapshot.docs.map(async (doc) => {
//           const imageUrl = await getImageUrl(doc.id); // Fetch image URL
//           return {
//             id: doc.id,
//             imageUrl,
//             ...doc.data(),
//             expanded: false // Add expanded state to each product initially set to false
//           };
//         }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products: ', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleDescription = (productId) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           expanded: !product.expanded // Toggle expanded state
//         };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   const getImageUrl = async (productId) => {
//     try {
//       const storageRef = ref(storage, `images/${productId}.jpg`); // Assuming images are stored with .jpg extension
//       const url = await getDownloadURL(storageRef);
//       return url;
//     } catch (error) {
//       console.error('Error getting image URL: ', error);
//       return ''; // Return empty string or default image URL if image not found
//     }
//   };

//   return (
//     <div className="product-list-container">
//       <h2 className="product-list-title">Product List</h2>
//       <input
//         type="text"
//         className="product-list-input"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id} onClick={() => toggleDescription(product.id)}>
//             <div className="product-info">
//               <div className="product-image">
//                 <img src={product.imageUrl} alt={product.name} />
//               </div>
//               <div className="product-details">
//                 <div className="product-name">{product.name}</div>
//                 {product.expanded && (
//                   <div className="product-description">{product.description}</div>
//                 )}
//                 <div className="product-price">Price: ₹{product.price.toFixed(2)}</div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


// import React, { useState, useEffect } from 'react';
// import { db, storage } from '../firebase'; // Import the initialized firebase instance with Firestore and Storage
// import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
// import { getDownloadURL, ref, deleteObject } from 'firebase/storage';
// import './ProductList.css'; // Import your CSS file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollectionRef = collection(db, 'products');
//       const q = query(productsCollectionRef, where('name', '>=', searchTerm));

//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = await Promise.all(querySnapshot.docs.map(async (doc) => {
//           const imageUrl = await getImageUrl(doc.id); // Fetch image URL
//           return {
//             id: doc.id,
//             imageUrl,
//             ...doc.data(),
//             expanded: false // Add expanded state to each product initially set to false
//           };
//         }));
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products: ', error);
//       }
//     };

//     fetchProducts();
//   }, [searchTerm]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleDescription = (productId) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           expanded: !product.expanded // Toggle expanded state
//         };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   const getImageUrl = async (productId) => {
//     try {
//       const storageRef = ref(storage, `images/${productId}.jpg`); // Assuming images are stored with .jpg extension
//       const url = await getDownloadURL(storageRef);
//       return url;
//     } catch (error) {
//       console.error('Error getting image URL: ', error);
//       return ''; // Return empty string or default image URL if image not found
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       // Delete the product document from Firestore
//       await deleteDoc(doc(db, 'products', productId));

//       // Delete the product image from Firebase Storage
//       const storageRef = ref(storage, `images/${productId}.jpg`);
//       await deleteObject(storageRef);

//       // Remove the deleted product from the state
//       setProducts(products.filter(product => product.id !== productId));
//     } catch (error) {
//       console.error('Error deleting product: ', error);
//     }
//   };

//   return (
//     <div className="product-list-container">
//       <h2 className="product-list-title">Product List</h2>
//       <input
//         type="text"
//         className="product-list-input"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id}>
//             <div className="product-info" onClick={() => toggleDescription(product.id)}>
//               <div className="product-image">
//                 <img src={product.imageUrl} alt={product.name} />
//               </div>
//               <div className="product-details">
//                 <div className="product-name">{product.name}</div>
//                 {product.expanded && (
//                   <div className="product-description">{product.description}</div>
//                 )}
//                 <div className="product-price">Price: ₹{product.price.toFixed(2)}</div>
//               </div>
//             </div>
//             <button className="delete-button" onClick={() => deleteProduct(product.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebase'; // Import the initialized firebase instance with Firestore and Storage
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { getDownloadURL, ref, deleteObject } from 'firebase/storage';
import './ProductList.css'; // Import your CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollectionRef = collection(db, 'products');
      const q = query(productsCollectionRef, where('name', '>=', searchTerm));

      try {
        const querySnapshot = await getDocs(q);
        const fetchedProducts = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const imageUrl = await getImageUrl(doc.id); // Fetch image URL
          return {
            id: doc.id,
            imageUrl,
            ...doc.data(),
            expanded: false // Add expanded state to each product initially set to false
          };
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDescription = (productId) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          expanded: !product.expanded // Toggle expanded state
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const getImageUrl = async (productId) => {
    try {
      const storageRef = ref(storage, `images/${productId}.jpg`); // Assuming images are stored with .jpg extension
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error('Error getting image URL: ', error);
      return ''; // Return empty string or default image URL if image not found
    }
  };

  const deleteProduct = async (productId, event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent element

    try {
      // Delete the product document from Firestore
      await deleteDoc(doc(db, 'products', productId));
      alert("Product deleted successfully")
      window.location.reload();

      // Delete the product image from Firebase Storage
      const storageRef = ref(storage, `images/${productId}.jpg`);
      await deleteObject(storageRef);

      // Remove the deleted product from the state
      setProducts(products.filter(product => product.id !== productId));
      
    } catch (error) {
      console.error('Error deleting product: ', error);
    }
  };

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>
      <input
        type="text"
        className="product-list-input"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-info" onClick={() => toggleDescription(product.id)}>
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                {product.expanded && (
                  <div className="product-description">{product.description}</div>
                )}
                <div className="product-price">Price: ₹{product.price.toFixed(2)}</div>
              </div>
            </div>
            <button className="delete-button" onClick={(event) => deleteProduct(product.id, event)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
