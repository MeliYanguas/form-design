function escribirNombre(){
        const nombre = document.getElementById('nombre').value.trim()
        
        if(nombre.length > 0 ){
            const item = document.createElement('li');
            item.textContent = nombre;
            document.body.appendChild(item);  
        }
  
    }

