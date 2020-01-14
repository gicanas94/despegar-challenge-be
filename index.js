import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { restaurants, menus } from './data';
import { LISTENING_PORT } from './constants';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Todos los restaurants (setTimeout para hacer de cuenta que la api está en otro lado)
app.get('/restaurants', (req, res) => (
  setTimeout(() => res.json(restaurants), 1000)
));

// Menu especícico de un restaurant (setTimeout para hacer de cuenta que la api está en otro lado)
app.get('/menu/:restaurantId', (req, res) => (
  setTimeout(() => res.json(menus.filter(
    menu => menu.restaurantId === Number(req.params.restaurantId))
  )[0], 1000)
));

app.listen(LISTENING_PORT, () => (
  console.log(`despegar-back listening to port ${LISTENING_PORT}...`)
));
