
import { createSelector } from "reselect";

// object categories didn't update
const selectCategoryReducer = (state) => state.categories;

// cache state and return here
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories 
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log("selector fired")
        return categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc
}, {})});
    