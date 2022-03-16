import { BsCart4 } from 'react-icons/bs';
import { Link } from "react-router-dom";

function CartWidget() {
  return (
      <>
    <Link className="BsCart" to=""><BsCart4 size="2em" color="black" /></Link>
    </>
  )
}

export default CartWidget