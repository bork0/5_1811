function testThrow(exception) {
    try {
        throw exception;
    } catch (exception) {
    console.log('Caught: ' + exception);
    }
};



// task #2


let width = parseInt(prompt('Enter width'));
let height = parseInt(prompt('Enter heigth'));

function calcRectangleArea(width, height) {
    if (isNaN(width)||width==='' && isNaN(height) || height==='') {
        throw new Error("You entered a wrong height and width value");
    } else if (isNaN(width) || width === ''){
        throw new Error("You entered a wrong width value");
    } else if (isNaN(height) || height === '') {
        throw new Error("You entered a wrong height value");
    } else {
        alert('Area is ' + width*height);
    }
}

try {
    calcRectangleArea(width,height);
} catch (exc) {
    alert(exc.message);
}

// task #3;

let age = prompt('Enter age');
function checkAge(age) {
    if (age === '') {
        throw new Error('The field is empty! Please enter your age');
    } else if (isNaN(age)) {
        throw new Error('Age must be a number');
    } else if (age<= 14) {
        throw new Error('You must be at least 15 years old');
    } else {
        alert('Permission granted');
    }
}

try {
    checkAge(age);
} catch(err) {
    alert(err.message);
}

// task #4;

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

let month = parseInt(prompt('Enter month number'));

function showMonthName(month) {
    switch(month) {
        case 1: console.log('January');
        break;
        case 2: console.log('February');
        break;
        case 3: console.log('March');
        break;
        case 4: console.log('April');
        break;
        case 5: console.log('May');
        break;
        case 6: console.log('June');
        break;
        case 7: console.log('July');
        break;
        case 8: console.log('August');
        break;
        case 9: console.log('September');
        break;
        case 10: console.log('October');
        break;
        case 11: console.log('November');
        break;
        case 12: console.log('December');
        break;
        default: throw new MonthException('Incorrect month number');
    }
}

try {
    showMonthName(month);
} catch(MonthException){
    console.log(MonthException.name + ' : ' + MonthException.message);
}