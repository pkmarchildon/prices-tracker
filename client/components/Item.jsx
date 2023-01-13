export default function Item({ item }) {
  return (
    <div className='item-container'>
      <span
        id='name'
        className='item-element-container item-element-primaryColor'
      >
        Poitrines de poulet (sans peau, sans os)
      </span>
      <div
        id='price'
        className='item-element-container item-element-rightAlign'
      >
        <span className='item-element-primaryColor'>12.90$</span>
        <span className='item-element-shadeColor'>/</span>
        <span className='item-element-primaryColor'>kg</span>
      </div>
      <span
        id='updatedDate'
        className='item-element-container item-element-shadeColor'
      >
        7 janvier 2023
      </span>
      <span
        id='store'
        className='item-element-container item-element-rightAlign item-element-shadeColor'
      >
        IGA
      </span>
    </div>
  );
}
