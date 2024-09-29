import "../Style/StyleIndex.css";
import React, { useState } from "react";

import { Card, Button, Container, Row, Col, Form, Pagination } from "react-bootstrap";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";

function FullMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const pizzasPerPage = 8;

  const allPizzas = [
    { img: menu1, title: "Margarita Pizza", price: "$19.99", category: "Vegetarian" },
    { img: menu2, title: "Mushroom Pizza", price: "$19.99", category: "Vegetarian" },
    { img: menu3, title: "Hawaiian Pizza", price: "$19.99", category: "Meat" },
    { img: menu4, title: "Pesto Pizza", price: "$19.99", category: "Vegetarian" },
 
    // 8 loại pizza mới
    { img: menu1, title: "Supreme Pizza", price: "$23.99", category: "Meat" },
    { img: menu2, title: "Buffalo Chicken Pizza", price: "$21.99", category: "Meat" },
    { img: menu3, title: "Spinach and Feta Pizza", price: "$20.99", category: "Vegetarian" },
    { img: menu4, title: "Meat Lovers Pizza", price: "$24.99", category: "Meat" },
  ];

  const filteredPizzas = allPizzas.filter(pizza =>
    pizza.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || pizza.category === category)
  );

  const indexOfLastPizza = currentPage * pizzasPerPage;
  const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;
  const currentPizzas = filteredPizzas.slice(indexOfFirstPizza, indexOfLastPizza);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="py-5 mt-5">
      <h1 className="text-center mb-5">Our Full Menu</h1>
      
      {/* Search and Filter */}
      <Form className="mb-4">
        <Row>
          <Col md={8}>
            <Form.Control 
              type="text" 
              placeholder="Search pizzas..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Meat">Meat</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      {/* Pizza Grid */}
      <Row>
        {currentPizzas.map((pizza, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={pizza.img} />
              <Card.Body>
                <Card.Title>{pizza.title}</Card.Title>
                <Card.Text>Price: {pizza.price}</Card.Text>
                <Card.Text>Category: {pizza.category}</Card.Text>
                <Button variant="dark" className="w-100">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
<Pagination className="justify-content-center mt-4">
  <Pagination.Prev
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
    className="bg-dark text-white"
  >
    Previous
  </Pagination.Prev>
  
  {[...Array(Math.ceil(filteredPizzas.length / pizzasPerPage))].map((_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => paginate(index + 1)}
      className="bg-dark text-white"
    >
      {index + 1}
    </Pagination.Item>
  ))}
  
  <Pagination.Next
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === Math.ceil(filteredPizzas.length / pizzasPerPage)}
    className="bg-dark text-white"
  >
    Next
  </Pagination.Next>
</Pagination>
    </Container>
  );
}

export default FullMenu;