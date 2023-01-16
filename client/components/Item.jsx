import {
  nameFormatter,
  moneyFormatter,
  dateFormatter
} from '../providers/functions.js';

function formatData(data) {
  var { name, price, units, lastUpdated, store } = data;

  name = nameFormatter(name);
  price = moneyFormatter(price);
  lastUpdated = dateFormatter(lastUpdated);

  return { name, price, units, lastUpdated, store };
}

export default function Item({ data }) {
  const { name, price, units, lastUpdated, store } = formatData(data);

  return (
    <div className='item-container'>
      <span
        id='name'
        className='item-element-container item-element-primaryColor'
      >
        {name}
      </span>
      <div
        id='price'
        className='item-element-container item-element-rightAlign'
      >
        <span className='item-element-primaryColor'>{price}</span>
        <span className='item-element-shadeColor'>/</span>
        <span className='item-element-primaryColor'>{units}</span>
      </div>
      <span
        id='updatedDate'
        className='item-element-container item-element-shadeColor'
      >
        {lastUpdated}
      </span>
      <span
        id='store'
        className='item-element-container item-element-rightAlign item-element-shadeColor'
      >
        {store}
      </span>
    </div>
  );
}
