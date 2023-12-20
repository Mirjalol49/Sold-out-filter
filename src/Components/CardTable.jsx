/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line react/prop-types
import "./CardTable.css";
function CartTable({ items }) {
  return (
    <ul className="list-wrapper">
      {items.map(({ id, imgSrc, title, price }) => (
        <li className="item" key={id}>
          <img className="bookImg" src={imgSrc} alt={title} />
          <h3 className="title">{title}</h3>
          <p className="price">£{price} GBP</p>
        </li>
      ))}
    </ul>
  );
}
export default CartTable;
