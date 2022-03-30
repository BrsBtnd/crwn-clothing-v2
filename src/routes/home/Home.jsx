import { Outlet } from 'react-router-dom';

import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div>
      <Categories />
      <Outlet />
    </div>
  );
};

export default Home;
