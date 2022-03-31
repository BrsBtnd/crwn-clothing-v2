import { createAction } from "../../utils/reducer/Reducer";
import { CATEGORIES_ACTION_TYPES } from './CategoryTypes';

export const setCategories = (categoriesArray) => 
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);