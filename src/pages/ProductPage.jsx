import './ProductPage.css';

/* eslint-disable react/prop-types */
const ProductPage = ({ addToCart }) => {

    const products = [
        {
            id: 1,
            name: 'Samsung Galaxy S24 Ultra',
            images: ["https://th.bing.com/th/id/OIP.2VdRUK_LZBshu022ynEBVgHaHa?w=144&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 70000.00,
            description: 'The Samsung Galaxy S24 Ultra is a flagship smartphone with cutting-edge technology, featuring a 6.8-inch AMOLED display, powerful Snapdragon chipset, and a 108 MP camera for stunning photos and videos.'
        },
        {
            id: 2,
            name: 'Xiaomi Redmi Note 4',
            images: ["https://th.bing.com/th/id/OIP.OENR3ivCMB5nwWspKdZDzQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7"],
            price: 130000.00,
            description: 'Xiaomi Redmi Note 4 offers a perfect balance of performance and value. With a 5.5-inch display, a Snapdragon 625 processor, and a solid 13 MP rear camera, it’s a reliable choice for everyday tasks.'
        },
        {
            id: 3,
            name: 'Infinix Note 40i',
            images: ["https://th.bing.com/th/id/OIP.s_A7ajMK2xdduG4ZJx404AAAAA?w=176&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 15000.00,
            description: 'The Infinix Note 40i is an affordable entry-level smartphone with a 6.6-inch display, MediaTek chipset, and a 48 MP rear camera, perfect for everyday use and casual photography.'
        },
        {
            id: 4,
            name: 'Asus Rog F15',
            images: ["https://th.bing.com/th/id/OIP.kL8vwfnBBguf4-Q7423yYwHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7"],
            price: 56000.00,
            description: 'The Asus Rog F15 is a high-performance gaming laptop with an Intel Core i7 processor, a 15.6-inch Full HD display, and an Nvidia GeForce GTX 1660 Ti GPU for smooth gaming and multitasking.'
        },
        {
            id: 2,
            name: 'Hp Elitebook 840 G2',
            images: ["https://th.bing.com/th/id/OIP.YsK3yNqgqZfMP5QOwIG9-AAAAA?w=236&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 74999.00,
            description: 'A high-performance laptop with 8th Gen Intel Core i5 processor, 8GB RAM, and 256GB SSD.',
        },
        {
            id: 2,
            name: 'Dell Inspiron 5000 series',
            images: ["https://th.bing.com/th/id/OIP.V2giVWQ93fE71S9zdMqURgHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7"],
            price: 34999.00,
            description: 'A budget-friendly laptop with 11th Gen Intel Core i3 processor, 4GB RAM, and 1TB HDD.',
        },
        {
            id: 3,
            name: 'Power Supply Extender',
            images: ["https://th.bing.com/th/id/OIP.ROU1qPChYiXaroJ-vr9BrgHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 499.00,
            description: 'A high-quality power supply extender for extending the power supply of your devices.',
        },
        {
            id: 3,
            name: 'MSI Motherboard',
            images: ["https://th.bing.com/th/id/OIP.aPu_-cKywrUUujmcOSZq3wHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 6500.00,
            description: 'A high-performance motherboard with advanced features and reliable performance.',
        },
        {
            id: 3,
            name: 'Intel core i9-13th Gen',
            images: ["https://th.bing.com/th/id/OIP.RRcHA4qCzRC3TDFkwUwOlwHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 36899.00,
            description: 'A powerful processor with 13th Gen technology, delivering exceptional performance and efficiency.',
        },
        {
            id: 4,
            name: 'Zebronic 3.5mm to 3.5mm Audio Cable',
            images: ["https://th.bing.com/th/id/OIP.M2qi7N0NdeBTywaNatTukQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7"],
            price: 299.00,
            description: 'A high-quality audio cable for connecting devices and enjoying clear sound.',
        },
        {
            id: 4,
            name: 'Ipad Pro 2022',
            images: ["https://th.bing.com/th/id/OIP.xC-iC0CTggU328uIFN29NwHaEK?w=268&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 45899.00,
            description: 'A powerful and feature-rich tablet with advanced display and performance.',
        },
        {
            id: 4,
            name: 'Apple Airpods',
            images: ["https://th.bing.com/th/id/OIP.XCXrwpYd95U-WNJvmTBp1wHaE8?w=264&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 15999.00,
            description: 'Wireless earbuds with advanced noise cancellation and seamless connectivity.',
        },
        {
            id: 5,
            name: ' HP Pavilion Gaming 15',
            images: ["https://th.bing.com/th/id/OIP.uo7XDnKCifFTcyeDfQvbMAHaGS?w=215&h=182&c=7&r=0&o=5&pid=1.7"],
            price: 55000.00,
            description: 'A powerful gaming laptop with advanced graphics and performance.',
        },
        {
            id: 5,
            name: 'One plus Nord CE lite 5g',
            images: ["https://th.bing.com/th/id/OIP.srdb8weh42kA_CShNQ1lkwHaHa?w=146&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 25599.00,
            description: 'A feature-rich smartphone with advanced camera and performance.',
        },
        {
            id: 5,
            name: 'NVIDIA RTX 3060Ti',
            images: ["https://th.bing.com/th/id/OIP.j5Xmnw3ggbnA3kdmOK6qbAAAAA?w=286&h=180&c=7&r=0&o=5&pid=1.7"],
            price: 40650.00,
            description: 'A high-performance graphics card with advanced features and performance.',
        },
    ];

    const handleAddToCart = (product) => {
        addToCart(product);  // Adds the selected product to the cart
    };

    return (
        <div className="products-all">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    {product.images.map((image, index) => (
                        <div key={index} className="product-image">
                            <img src={image} alt={`₹{product.name} image ₹{index + 1}`} />
                        </div>
                    ))}
                    <p>Price: ₹{product.price}</p>
                    <p>{product.description}</p>
                    <div className="add-to-cart">
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;




