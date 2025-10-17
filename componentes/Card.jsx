import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;

  img {
    border-radius: 8px;
    margin-bottom: 1rem;
    max-width: 300px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h3 {
    margin-top: 1rem;
  }

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 191, 255, 0.3);
  }
`;

const BotonVolver = styled(Link)`
  display: block;
  margin: 1.5rem auto 0 auto;
  padding: 0.5rem 1rem;
  background-color: #431d02c7;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, #A0522D 0%, #8B4513 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(139, 69, 19, 0.4);
  }
`;

export const Tarjeta = ({ ...data }) => (
  <Card>
    <img src={data.imagen} alt={data.nombre} />
    <h2>🎨 {data.nombre}</h2>
    <p>📍 {data.ubicacion}</p>
    <p>🎂 {data.edad}</p>
    <h3>Habilidades</h3>
    <ul>{data.habilidades.map((h, i) => <li key={i}>{h}</li>)}</ul>
    <h3>Películas favoritas</h3>
    <ul>{data.peliculas.map((p, i) => <li key={i}>{p}</li>)}</ul>
    <h3>Música favorita</h3>
    <ul>{data.musica.map((m, i) => <li key={i}>{m}</li>)}</ul>
    <BotonVolver to="/nosotros">Volver a Nosotros</BotonVolver>
  </Card>
);