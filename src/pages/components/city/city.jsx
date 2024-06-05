import './city.css';
import { cities } from '../../../cz-cities';

const CityItem = ({name, population, area, district, photo }) => (
        <div className="city">
           
           <h2>Město: {name}</h2>
           <img src={photo} alt={name} />
           <p>Počet obyvatel: {population}</p>
           <p>Rozloha: {area} km2 </p>
           <p>{district} </p>
         </div>
);

export const City = () => (
    <>
    <h1>Seznam měst</h1>
    <div className="citiesList">
      {cities.map((city) => (<CityItem key={name} name={city.name} photo={city.photo} population={city.population} area={city.area} district={city.district} />)
      )}
    </div>
    </>
         );
  
    