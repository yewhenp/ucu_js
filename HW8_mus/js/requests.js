async function fetchDepartments() {
    try {
        const responce = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
        const data = await responce.json();
        return data;
    } catch(err) {
        console.log('Error in fetching departments: ', err.message);
    }
}

async function fetchObjectsFromDepartments(departmentId) {
    try {
        const responce = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=' + departmentId);
        const data = await responce.json();
        return data;
    } catch(err) {
        console.log('Error in fetching object from department: ', err.message);
    }
}

async function fetchObjectData(objectId) {
    try {
        const responce = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectId);
        const data = await responce.json();
        return data;
    } catch(err) {
        console.log('Error in fetching object: ', err.message);
    }
}

async function fetchTenFirstObjects(objectList) {
    let promiceList = [];
    for (let i = 0; i < 10; i++) {
        promiceList.push(fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectList[i]));
    }
    return Promise.all(promiceList).then((values) => {
        results = [];
        for(let i = 0; i < values.length; i++) {
            results.push(values[i].json());
        }
        return Promise.all(results).then((vals) => {
            return vals;
        });
    })
}