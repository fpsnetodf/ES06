

const sandwich = {
    bread: 'white',
    cheese: 'cheddar', 
    
    prepare: function(){
        return `I want a sandwich whith ${this.bread} bread and ${this.cheese}`
    }, 
    make: function(){
        window.setTimeout(() => {
            console.log(this.prepare(), 500)
        })
    }
}

const btn = document.getElementById('btn')
// console.log(btn)
btn.addEventListener('click', () => sandwich.make())