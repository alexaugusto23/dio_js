fetch('/data.json').then(responseStream => {
    responseStream.json().then(data => {
        console.log(responseStream);
    }); 
});

fetch('http://localhost:8081/data.json')
    .then(responseStream => responseStream.json())  
    .then(data => {console.log(data);
}).catch(err => {
    console.log('Erro:', err);
});