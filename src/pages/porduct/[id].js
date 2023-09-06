import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/router";

import ProductDetails from '@/content/ProductDetails'

function ProductHeader({ products }) {



    const [item, setItem] = useState(false);

    const toggleMenu = () => setItem(!item);



    return (
        <div>

            <ProductDetails products={products} />


        </div>
    );
}

export default ProductHeader;


export async function getServerSideProps({ params }) {


    const { id } = params;


    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const products = await response.json();

    return {
        props: {
            products,
        },
    };


}