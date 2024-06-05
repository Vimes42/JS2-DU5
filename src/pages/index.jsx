import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { City } from './components/city/city'



document.querySelector('#root').innerHTML = render(
  <City  /> 
);
