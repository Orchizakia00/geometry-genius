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
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
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

    // calculate area
    const area = width * length;
    console.log(area);

    // show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}