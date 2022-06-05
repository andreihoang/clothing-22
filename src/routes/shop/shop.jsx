import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';

import './shop.scss'
const Shop = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            console.log(categoriesArray)
            dispatch(setCategories(categoriesArray));
        };
        getCategoriesMap();
       
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
  }

  export default Shop;