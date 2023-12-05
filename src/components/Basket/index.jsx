import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, decCount, getAllProducts, incCount } from "../../features/basket/basketSlice";

const Basket = () => {
    const dispatch = useDispatch()
    const {basket, isLoading, initial} = useSelector((state) => state.basket)
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

      const handleAddToBasket = (product) => {
        dispatch(addToBasket(product));
      };

      const increaseCount = (id) => {
        dispatch(incCount(id))
      }
      const decreasCount = (id) => {
        dispatch(decCount(id))
      }
  return (
    <div className="basket-container">
      <div className="basket-produts">
      {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="basket">
            {initial.map((initial) => (
              <li key={initial.id}>
                {initial.title} - ${initial.price}
                <button onClick={() => handleAddToBasket(initial)}>Add To Basket</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
      {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="basket">
            {basket.map((basket) => (
                <>
                <li key={basket.id}>
                {basket.title} - ${basket.price}
              </li>
              <li>
                <button onClick={() => increaseCount(basket.id)}>+</button>
                <span>{basket.count}</span>
                <button onClick={() => decreasCount(basket.id)}>-</button>
              </li>
                </>
              
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Basket;
