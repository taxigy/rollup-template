import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

const root = document.body.appendChild(document.createElement('main'));
const App = () => (
  <p className={styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi
    vel iste quo quia, iusto odio. Adipisci debitis maxime aperiam totam autem,
    necessitatibus quia vel deleniti, soluta nostrum expedita doloribus.
  </p>
);

ReactDOM.render(<App />, root);
