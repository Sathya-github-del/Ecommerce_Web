import { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
    // State to manage the active image index in the second hero section
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image URLs for the hero section
    const heroImages = [
        'https://img.freepik.com/free-vector/flat-design-electronics-store-facebook-post_23-2151098084.jpg?t=st=1731412346~exp=1731415946~hmac=93e61c1c0833163e3dbf754c1c55b86b023502f5316f46379db3d8596ca92618&w=740',
        'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1731412399~exp=1731415999~hmac=60e2eec1eb659f77172c61741b4a11a3a9ea03d56c7cfb848d0d60717880be53&w=740',
        'https://img.freepik.com/free-vector/realistic-cyber-monday-horizontal-sale-banner_23-2149099067.jpg?t=st=1731412448~exp=1731416048~hmac=8114f5004d2ebf84289e9873ee34fdbb86324bdb6c651b36b37e82b7dc56db97&w=740',
        'https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5172.jpg?t=st=1731412471~exp=1731416071~hmac=e0cef849aabed16ff5561b9056fb3ef8437bcec72f09031453df661dafc06563&w=740',
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 7000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            {/* Navigation Bar */}
            <nav className="navbar">


            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 style={{ color: 'black' }}>Ecom</h1>
                    <p style={{ color: 'black' }}>Your one-stop shop for everything you need!</p>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured">
                <h2>Featured Products</h2>
                <hr />
                {/* Second Hero Section */}
                <section className="hero-swiper">
                    <div className="hero-swiper-content">
                        <h2>Exclusive Offers</h2>
                        <p>Check out our exclusive offers on the best products!</p>
                        <div className="swiper-images">
                            <img src={heroImages[currentImageIndex]} alt="Hero Swiper" />
                        </div>
                    </div>
                </section>
                <div className="products">
                    <table>
                        <tr>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/black-friday-big-sale-social-media-story-design-template_47987-25413.jpg?t=st=1731413063~exp=1731416663~hmac=0cad0eba8bf20aa43227877e9d357d56a123070fb36f3f0e62397ac29491177b&w=460" alt="Product 1" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/motorbike-competition-square-flyer-template_23-2149913843.jpg?t=st=1731413142~exp=1731416742~hmac=f51358bcbb3eecddf3431bcac0d4a67595ba91d5c6b10243871708990ba5e625&w=460" alt="Product 2" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-vector/electronics-store-poster-template_23-2151173117.jpg?t=st=1731413170~exp=1731416770~hmac=99af3779efabd781e21c58c195fef950429470d9b2961f56ba688617abe84fad&w=460" alt="Product 3" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-vector/electronic-sale-poster_1302-5850.jpg?t=st=1731413202~exp=1731416802~hmac=8e45e4733ec22ac64acc316dc34ed9d7ae9fcaa86b9b1781cb36d093e12606cf&w=460" alt="Product 4" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/fashion-post-square-template_23-2148578505.jpg?t=st=1731413267~exp=1731416867~hmac=c4601e12985050c66e049f3011d59e21e6dba8119b0aad49c6596291bd71b83e&w=460" alt="Product 5" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/fashion-post-square-template_23-2148578505.jpg?t=st=1731413267~exp=1731416867~hmac=c4601e12985050c66e049f3011d59e21e6dba8119b0aad49c6596291bd71b83e&w=460" alt="Product 5" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/fashion-post-square-template_23-2148578505.jpg?t=st=1731413267~exp=1731416867~hmac=c4601e12985050c66e049f3011d59e21e6dba8119b0aad49c6596291bd71b83e&w=460" alt="Product 5" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                            <td>
                                <div className="product">
                                    <img src="https://img.freepik.com/free-psd/transport-template-design_23-2150311665.jpg?t=st=1731413308~exp=1731416908~hmac=0da56ece0c428910f02217009cb6dc015c2be465f77ea32e60d2f06e82f73b50&w=460" alt="Product 6" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </section >

        </div >
    );
};

export default HomePage;
