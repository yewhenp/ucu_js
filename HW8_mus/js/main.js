async function initialize() {
    await buildSelector();
    await generateField();
    document.getElementById('mySelect').addEventListener('change', generateField);
}

initialize();