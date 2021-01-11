//script
class app{
    constructor(){
        this.bind();
    }

    bind(){
        document.querySelector('.add-button').addEventListener('click', () => {
            this.handleClick(1);
        });

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