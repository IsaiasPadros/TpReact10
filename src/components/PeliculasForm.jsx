import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./PeliculasForm.css";

const PeliculasForm = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && descripcion && genero) {
      const nuevaPelicula = {
        nombre,
        descripcion,
        genero,
      };
      setPeliculas([...peliculas, nuevaPelicula]);
      setNombre("");
      setDescripcion("");
      setGenero("");
    }
  };

  return (
    <div className="peliculas-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="genero">
          <Form.Label>Género</Form.Label>
          <Form.Control
            as="select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="">Selecciona un género</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {peliculas.map((pelicula, index) => (
        <Card key={index} className="mt-3">
          <Card.Body>
            <Card.Title>{pelicula.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Género: {pelicula.genero}
            </Card.Subtitle>
            <Card.Text>{pelicula.descripcion}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PeliculasForm;
