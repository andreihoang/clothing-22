import CATEGORIES_ACTION_TYPES from "./categories.type"

export const setCategories = (categoriesArray) => {
    return {
        type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
        payload: categoriesArray,
    }
}