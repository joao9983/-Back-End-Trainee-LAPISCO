let fs = require('fs')

fs.readFile('aqrv1.txt', function(err, data){
    if(err){
        console.log('deu ruim')
    } else{
            console.log(data);
            fs.writeFile('novo.txt', data,(err) => {
                if (err) throw err;
                console.log('deu bom');
              } );
    }


})





