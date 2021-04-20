async function buildSelector() {
    let mySelect = document.getElementById('mySelect');
    let departments = await fetchDepartments();
    departments = departments['departments'];
    for(let i = 0; i < await departments.length; i++) {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(departments[i]['displayName']));
        opt.value = departments[i]['departmentId']; 
        mySelect.add(opt); 
    }
}

async function generateField() {
    let oldValues = document.getElementsByClassName('main-item');
    while(oldValues.length > 0){
        oldValues[0].parentNode.removeChild(oldValues[0]);
    }

    const mySelect = document.getElementById('mySelect');
    const data = await processData(mySelect.value);

    let container = document.getElementById('content');
    for(let i = 0; i < data.length; i++) {
        let element = document.createElement('div');
        element.classList.add('main-item');

        let image = document.createElement('img');
        image.setAttribute('src', data[i]['image']);

        let heading = document.createElement('p');
        let period = document.createElement('p');
        heading.classList.add('heading');

        let headingText = document.createTextNode(data[i]['objectName']);
        let periodText = document.createTextNode(data[i]['period']);

        heading.appendChild(headingText);
        period.appendChild(periodText);

        element.appendChild(image);
        element.appendChild(heading);
        element.appendChild(period);

        container.appendChild(element);
    }
}