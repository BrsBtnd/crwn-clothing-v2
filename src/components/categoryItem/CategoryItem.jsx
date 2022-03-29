import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {

  const { imageUrl, title } = category;

  return (
    <div className="category-item-container" >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <img /> */}
      <div className="category-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div> 
  );
};

export default CategoryItem;
