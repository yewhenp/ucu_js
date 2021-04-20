let addToList = (objectData, objectListFinal) => {
    if (objectData['primaryImage']) {
        objectListFinal.push({
            objectName: objectData['title'],
            period: objectData['objectDate'],
            image: objectData['primaryImage']
        })
    } else if (objectData['primaryImageSmall']) {
        objectListFinal.push({
            objectName: objectData['title'],
            period: objectData['objectDate'],
            image: objectData['primaryImageSmall']
        })
    } else if (objectData['additionalImages'].length !== 0) {
        objectListFinal.push({
            objectName: objectData['title'],
            period: objectData['objectDate'],
            image: objectData['additionalImages'][0]
        })
    }
}

async function processData(departmentId) {
    let objectIdList = await fetchObjectsFromDepartments(departmentId);
    objectIdList = objectIdList['objectIDs'];
    let objectList = await fetchTenFirstObjects(objectIdList);
    let objectListFinal = [];
    for (let i = 0; i < 10; i++) {
        addToList(objectList[i], objectListFinal);
    }
    let ind = 0;
    while (objectListFinal.length < 10) {
        const objectData = await fetchObjectData(objectIdList[ind]);
        addToList(objectData, objectListFinal);
        ind++;
    }
    return objectListFinal;
}
