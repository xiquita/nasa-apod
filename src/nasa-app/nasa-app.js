
// 8tOzEhctDQNaqx5dEFXUARcDVOwwW39haM4S4A62
// https://api.nasa.gov/planetary/apod?api_key=8tOzEhctDQNaqx5dEFXUARcDVOwwW39haM4S4A62

/**
 * @returns {Promise<Object>} explanation information
 */
const fetchExplanation = async() => {
    
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=8tOzEhctDQNaqx5dEFXUARcDVOwwW39haM4S4A62');
    console.log(res);
    const data = await res.json();
    
    return data;
    
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const NasaApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Nasa App';
    element.innerHTML = 'Loading...'; // Para que el usuario vea que hace algo
    document.querySelector('#app-subtitle').innerHTML = 'APOD Imagen del Día';

    const date = document.createElement('h5');
    const explanation = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    
    
    const verImagenButton = document.createElement('button');
    verImagenButton.innerText = 'Ver Imagen';
    

    const renderExplanation = ( data ) => {
        date.innerHTML = data.date
        explanation.innerHTML = data.explanation;
        authoLabel.innerHTML = data.title;
        element.replaceChildren( date, explanation, authoLabel, verImagenButton );
    }

    // Añadir Listener
    verImagenButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const img = document.createElement('img');
        const imgtitle = document.createElement('h4');
        const data = await fetchExplanation();
        
        
        img.src = data.url;
        imgtitle.innerHTML = data.title;
        
        element.replaceChildren(img, imgtitle);
    })
    
    fetchExplanation()
        //  .then ( (data) => renderExplanation());
        .then (renderExplanation)
        .catch((error) => {
            element.innerHTML = 'Error al obtener los datos.';
            console.error(error);
          });
      
        element.replaceChildren(explanation, authoLabel, verImagenButton);
    
}