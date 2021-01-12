//script
class app{
    constructor(){
        this.bind();
    }

    bind(){
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });

        debugger;
        document.querySelector('.sub-button').addEventListener('click', () => {
            this.handleClick(-1);
        });
    }

    handleClick(val){
        const counterEL = document.querySelector('.counter');
        const value = parseInt(counterEL.innerText);
        counterEL.innerText = value + val;
    }

}
new app();

//console

// console.log('Black text');
// console.warn('Yellow text with alert');
// console.error('Red Error text');

// console.trace();

//console.group('My group');
//console.log('Info insede group');
//console.log('More Info insede group'');
//console.groupEnd('My group');

/*
console.time('Log time');,
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);
*/

//console.assert(1 ===0, 'Ops');
//console.table(['Celso Henrique', 'Digital Innovation One']);
//console.log('%c styled log', 'color:blue;', font-size: 40px);