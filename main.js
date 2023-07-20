import './style.css';
// import AlienLogo from './alien.svg';
import NasaLogo from './nasa_logo.svg';
import { NasaApp } from './src/nasa-app/nasa-app';


document.querySelector('#app').innerHTML = `
  <div>
    <div class="nav">
    <a href="https://api.nasa.gov/" target="_blank">
      <img src="${NasaLogo}" class="logo vanilla" alt="Nasa logo" />
    </a>
    <h1 id="app-title"></h1>
    
    <h2 id="app-subtitle"></h2>
    </div>
    
    <div class="card">
      
    </div>
  
      
 
    
  </div>
`;

const element = document.querySelector('.card');

NasaApp( element );

