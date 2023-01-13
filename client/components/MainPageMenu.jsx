/* Components */
import CategoryTile from './CategoryTile';

export default function MainPageMenu() {
  return (
    <div className='mainPage-container'>
      <div className='mainPage-tilesContainer'>
        <span className='mainPage-tilesContainer-oddRows'>
          <CategoryTile
            imagePath='/images/categories/white/icon_meat_white.png'
            category='meat'
          />

          <CategoryTile
            imagePath='/images/categories/white/icon_vegetables_white.png'
            category='vegetables'
          />

          <CategoryTile
            imagePath='/images/categories/white/icon_fruits_white.png'
            category='fruits'
          />
        </span>
        <span className='mainPage-tilesContainer-evenRows'>
          <CategoryTile
            imagePath='/images/categories/white/icon_condiments_white.png'
            category='condiments'
          />

          <CategoryTile
            imagePath='/images/categories/white/icon_products_white.png'
            category='products'
          />
        </span>
      </div>
    </div>
  );
}
