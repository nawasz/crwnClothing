import './cart-item.styles.scss'


const CartItem  = ({id,imageUrl,name,quantity,price}) =>{
    

       return(
        <div key={id} className="cart-item-container">
              <img src={imageUrl} alt={`${name}`} className="cart-item-img" />
              <div className="cart-item-data"> 
                     <h4>{name}</h4>
                     <span>{quantity} x ${price}</span>
              </div>
            
        </div>
       )
}

export default CartItem;