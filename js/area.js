function calculateTriangleArea (){
    // get triangle base
    const baseField = document.getElementById('triangle-base');
    const baseVAlueText = baseField.value;
    const base = parseFloat(baseVAlueText);
    console.log(base);

    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightVAlueText = heightField.value;
    const height = parseFloat(heightVAlueText);
    console.log(height);

    // calculate area
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea (){
    // get rectangle base
    const widthField = document.getElementById('rectangle-width');
    const widthVAlueText = widthField.value;
    const width = parseFloat(widthVAlueText);
    console.log(width);

    // get rectangle height
    const lengthField = document.getElementById('rectangle-length');
    const lengthVAlueText = lengthField.value;
    const length = parseFloat(lengthVAlueText);
    console.log(length);

    // validate input
    if(isNaN(width)|| isNaN(length)){
        alert('Please enter a number.');
        return;
    }

    // calculate area
    const area = width * length;
    console.log(area);

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}


// reusable function
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');

    const height = getInputValue('parallelogram-height');

    if(isNaN(base)|| isNaN(height)){
        alert('Please enter a number.');
        return;
    }

    // calculate area
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area);

}

function calculateEllipseArea(){
    const aRadius = getInputValue ('ellipse-a');
    const bRadius = getInputValue ('ellipse-b');
    const area = 3.14 * aRadius * bRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

// reuseable get input field value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set value
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');
    
    const count = calculationEntry.childElementCount;
    
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1} ${areaType} ${area} cm<sup>2</sup>`;
    calculationEntry.appendChild(p);
}