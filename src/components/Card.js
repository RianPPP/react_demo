import "../index";
import { Card, Button, Col, Row } from "react-bootstrap";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";


function CardComponent({ addToCart }) {  // Nhận hàm addToCart
  // const navigate = useNavigate();

  // const handleShowMore = () => {
  //   navigate('/full-menu');
  // };

  const pizzas = [
    { img: menu1, title: "Margarita Pizza", price: "$19.99", onSale: true },
    { img: menu2, title: "Mushroom Pizza", price: "$19.99", onSale: false },
    { img: menu3, title: "Hawaiian Pizza", price: "$19.99", onSale: true },
    { img: menu4, title: "Pesto Pizza", price: "$19.99", onSale: false },
    // { img: menu5, title: "BBQ Chicken Pizza", price: "$21.99", onSale: true },
    // { img: menu6, title: "Veggie Pizza", price: "$17.99", onSale: false },
    // { img: menu7, title: "Pepperoni Pizza", price: "$20.99", onSale: true },
    // { img: menu8, title: "Four Cheese Pizza", price: "$22.99", onSale: false },
  ];

  return (
    <div className="container p-5">
      <h1 className="text-left p-3">Our Menu</h1>

      <div className="row">
        {pizzas.map((pizza, index) => (
          <div key={index} className="col-md-3 mb-3">
            <Card>
              <div style={{ position: 'relative' }}>
                <Card.Img variant="top" src={pizza.img} />
                {pizza.onSale && <span className="card-sale-tag">SALE</span>}
              </div>
              <Card.Body>
                <Card.Title>{pizza.title}</Card.Title>
                <Card.Text>Price: {pizza.price}</Card.Text>
                <Button
                  variant="dark"
                  className="w-100 text-center"
                  onClick={() => addToCart(pizza)}  // Thêm sản phẩm vào giỏ hàng khi nhấn nút "Buy"
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-3">
        <Button variant="dark" onClick={handleShowMore}>
          Show More
        </Button>
      </div> */}
    </div>
  );
}

export default CardComponent;