class CustomError extends Error{
    constructor({message, data}){
    super(message);
    this.data = data;
    }
}

try {
    const name = 'alex';
    //const myError = new Error('Nome diferente');
    const myError = new CustomError({
        message: 'Nome diferente',
        data: {
            type: 'Server error'
        }
    });

    if (name == 'alex'){console.log(name);}
    else{throw myError;}
    
    
    
} catch(err){console.log('Error: ', err)
if(err.data.type === 'Server error'){console.log('if');}
else {console.log('else');}
} finally{console.log('Keep going');
}

