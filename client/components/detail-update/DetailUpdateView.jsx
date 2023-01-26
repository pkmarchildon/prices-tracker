/* Components */
import Item from '../Item';
import DetailedInfoCard from './DetailedInfoCard';

export default function DetailUpdateView({
  itemData,
  handleUpdateItem,
  closeDetailView
}) {
  return (
    <div className='productsPage-info-container'>
      <Item
        key={`${itemData.name}-update`}
        data={itemData}
        handleClickItem={handleUpdateItem}
      />

      <DetailedInfoCard
        history={itemData.history}
        closeAction={closeDetailView}
        handleClickItem={handleUpdateItem}
      />
    </div>
  );
}
