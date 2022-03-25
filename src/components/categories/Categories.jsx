import CategoryItem from "../categoryItem/CategoryItem";

import './Categories.scss';

const Categories = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id}/>        
      ))}
    </div>
  )
}

export default Categories;