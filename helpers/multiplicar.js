const fs = require('fs');
//cuando se use el async, este no lleva resolve ni reject y debe usarse el try catch para manejo de errores
const crearArchivo = async(base=5,listar=false,hasta)=>{
    try{
        
       
        let salida='';
    
        for (let index = 1; index <= hasta; index++) {
            
            salida += `${base} X ${index} = ${base*index} \n`;
        }
        if (listar) {
            console.log("=========================================".red);
            console.log(`            Tabla del ${base}`);
            console.log("=========================================".inverse);
            console.log(salida.rainbow);
        }
    
        
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida)
        return `tabla-${base}.txt`;
    
    }catch(Exception){
        throw Exception;
    }
}

module.exports={
    crearArchivo
}

//asi importo una funcion hacia otro js