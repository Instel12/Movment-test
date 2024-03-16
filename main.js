//assets

console.log(' Movment Test ')

console.log('+--')
console.log('-+-')
console.log('--+')
console.log('---')

console.clear()

//code

//vars

var xpos = 2;
var ypos = 2;

//render 

render()

function render() {
    console.clear()

    console.log(' Movment Test ')

    if (ypos == '1') {
        if (xpos == '1') {
            console.log('+--')
        }
        if (xpos == '2') {
            console.log('-+-')
        }
        if (xpos == '3') {
            console.log('--+')
        }
    }else{
        console.log('---')
    }
    
    if (ypos == '2') {
        if (xpos == '1') {
            console.log('+--')
        }
        if (xpos == '2') {
            console.log('-+-')
        }
        if (xpos == '3') {
            console.log('--+')
        }
    }else{
        console.log('---')
    }
    
    if (ypos == '3') {
        if (xpos == '1') {
            console.log('+--')
        }
        if (xpos == '2') {
            console.log('-+-')
        }
        if (xpos == '3') {
            console.log('--+')
        }
    }else{
        console.log('---')
    }
}

//controls

function u() {
    ypos = ypos-1;
    render()
}

function d() {
    ypos = ypos+1;
    render()
}

function l() {
    xpos = xpos-1;
    render()
}

function r() {
    xpos = xpos+1;
    render()
}

function t() {
    console.log(ypos)
    render()
}