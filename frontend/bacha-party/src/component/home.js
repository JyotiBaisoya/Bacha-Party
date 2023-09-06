import React from "react";
import "../css/home.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from "react";

function Home() {
    const [girlsProduct, setGirlsProduct] = useState([])
    const [boysProduct, setBoysProduct] = useState([])


    function handleGirlsSpecial(){
        window.location.href="/girls-special"
    }

    function handleBoysSpecial (){
        window.location.href="/boys-special"
    
    }
        
    
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    };

    useEffect(() => {
        fetch("https://nanhe-munhe-2.onrender.com/api/products")
            .then(res => res.json())
            .then(data => {
             //   console.log(data)
                const girlsFilteredData = data.filter(product => product.category == "girls")
                const boysFilteredData = data.filter(product => product.category == "boys")
              //  console.log(girlsFilteredData)
                setGirlsProduct(girlsFilteredData)
                setBoysProduct(boysFilteredData)

            })

    }, [])

    const limitedGirlsProducts = girlsProduct.slice(0, 4)
    const limitedBoysProducts = boysProduct.slice(0, 4)
 //   console.log(limitedGirlsProducts)
    return (
        <div className="home">
            <div className="slider">
                <Slider {...slickSettings} >

                    <div className="slider-1">
                        <img src={process.env.PUBLIC_URL + "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_btc_27august231692948631092.webp"} alt="slider-1" />
                    </div>
                    <div className="slider-2">
                        <img src={process.env.PUBLIC_URL + "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p04_omg_deal_ffd_aug_desktop1693023128961.webp"} alt="slider-2" />
                    </div>
                    <div className="slider-3">
                        <img src={process.env.PUBLIC_URL + "https://cdn.fcglcdn.com/brainbees/banners/desktop_baby's_complete_travel_solution_25082023_(1)1692942848673.gif"} alt="slider-3" />
                    </div>
                    <div className="slider-4">
                        <img src={process.env.PUBLIC_URL + "https://cdn.fcglcdn.com/brainbees/banners/hp_rakhi_festive_finesse_2508231692896914503.webp"} alt="slider-4" />
                    </div>
                    <div className="slider-5">
                        <img src={process.env.PUBLIC_URL + "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p12_footwear_aug_desktop1692193123539.webp"} alt="slider-5" />
                    </div>
                    <div className="slider-6">
                        <img src={process.env.PUBLIC_URL + "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_super_hit_fashion_brands_ffd_aug_desktop1692953847118.webp"} alt="slider-6" />
                    </div>
                </Slider>
            </div>
            <section className="girls-special">
                <h2>Girls Special</h2>
                <div className="special">
                {limitedGirlsProducts.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name.substring(0,30)}...</h3>
                    
                    </div>
                ))}
              
                </div>
                <button className="show-more" onClick={handleGirlsSpecial}>Show More</button>
            </section>
            <section className="boys-special">
                <h2>Boys Special</h2>
                <div className="special">
                {limitedBoysProducts.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name.substring(0,30)}...</h3>
                    
                    </div>
                ))}
               
                </div>
                <button className="show-more" onClick={handleBoysSpecial}>Show More</button>
            </section>

        </div>
    )
}

export default Home