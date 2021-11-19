import {createContext, useState} from "react";

const AppContext = createContext();
const AppContextProvider = ({children}) => {

    const products = [{
        "id": 1,
        "quantity" : 1,
        "product_name": "Turkey - Breast, Double",
        "image_url": "http://dummyimage.com/200x200.jpg/dddddd/000000",
        "description": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
        "price": 987
      }, {
        "id": 2,
        "product_name": "Bread - Burger",
        "image_url": "http://dummyimage.com/200x200.png/dddddd/000000",
        "description": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
        "price": 763
      }, {
        "id": 3,

        "product_name": "Beans - Kidney White",
        "image_url": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
        "description": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
        "price": 231
      }]

      const [product, setProduct] = useState(products);
      const [cart, setCart] = useState([]);

      const handleCart = (data) => {
          setCart([...cart, data]);
      }

    return (
        <AppContext.Provider value = {{product, cart, handleCart}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};