import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <h2>Dragon News</h2>
      <Card className="p-3">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="px-0">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="my-4">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft className="me-2" />
              All News in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="mt-5 mx-0">
        <EditorsInsights></EditorsInsights>
      </div>
    </div>
  );
};

export default News;
