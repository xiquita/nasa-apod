// // Hq2Ti4xrBHMsRL4fEo5m8UQASypjvmVBKpnKdupT
// /**
//  * @returns {Promise<Object>} explanation information
//  */
// const fetchExplanation = async() => {
    
//     const res = await fetch('https://epic.gsfc.nasa.gov/api/natural?api_key=Hq2Ti4xrBHMsRL4fEo5m8UQASypjvmVBKpnKdupT');
//     // console.log(res);
//     const data = await res.json();

//     console.log(data[0]); // identifier
//     console.log(data[1]); // caption
//     console.log(data[2]); // image
    
//     return data;
    
// }

// /**
//  * 
//  * @param {HTMLDivElement} element 
//  */
// export const NasaApp2 = async( element ) => {
//     document.querySelector('#app-title').innerHTML = 'Nasa App';
//     element.innerHTML = 'Loading...'; // Para que el usuario vea que hace algo
//     document.querySelector('#app-subtitle').innerHTML = 'APOD';

//     const identifier = document.createElement('h3');
//     const caption = document.createElement('h4');
//     // const authoLabel = document.createElement('h3');
    
    
//     const verImagenButton = document.createElement('button');
//     verImagenButton.innerText = 'Ver Imagen';
    

//     const renderExplanation = ( data ) => {
//         identifier.innerHTML = data.identifier
//         caption.innerHTML = data.caption;
//         // authoLabel.innerHTML = data.copyright;
//         element.replaceChildren( identifier, caption, verImagenButton );
//     }

//     // Añadir Listener
//     verImagenButton.addEventListener('click', async() => {
//         element.innerHTML = 'Loading...';
//         const img = document.createElement('img');
//         const imgtitle = document.createElement('h4');
//         const data = await fetchExplanation();
        
        
//         img.src = data.image;
//         imgtitle.innerHTML = data.identifier;
        
//         element.replaceChildren(img, imgtitle);
//     })
    
//     fetchExplanation()
//         //  .then ( (data) => renderExplanation());
//         .then (renderExplanation)
//         .catch((error) => {
//             element.innerHTML = 'Error al obtener los datos.';
//             console.error(error);
//           });
      
//         element.replaceChildren(identifier, caption, verImagenButton);
    
// }
