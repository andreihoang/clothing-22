import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import './category.scss';
import ProductCard from '../../components/product-card/product-card';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment >
            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
            <div className='category-container'>

                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
            
        </Fragment>
    )
}

export default Category;