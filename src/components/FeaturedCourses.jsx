import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";

const courses = [
  {
    id: 1,
    title: "Multimedia",
    description:
      "Learn the advanced methods of taking pictures and build a portfolio that showcases your professional photography skills.",
    image: "path/to/image1.jpg",
    author: "John Doe",
    price: "$99.99"
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Master the art of web development and create stunning websites and web applications.",
    image: "path/to/image2.jpg",
    author: "Jane Smith",
    price: "$129.99"
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Master the art of web development and create stunning websites and web applications.",
    image: "path/to/image2.jpg",
    author: "Jane Smith",
    price: "$129.99"
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Master the art of web development and create stunning websites and web applications.",
    image: "path/to/image2.jpg",
    author: "Jane Smith",
    price: "$129.99"
  }
  // Add more courses as needed
];

const FeaturedCourses = () => {
  return (
    <div className="features">
      <h2>Featured Courses</h2>

      <Carousel>
        {courses.map((course, index) => (
          <div style={{ display: "flex" }}>
            <Carousel.Item key={course.id}>
              <Card style={{ width: "23rem" }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Card.Text>Author: {course.author}</Card.Text>
                  <Card.Text>Price: {course.price}</Card.Text>
                  <Button to="/">View course</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCourses;
