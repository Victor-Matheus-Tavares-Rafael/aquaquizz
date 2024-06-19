document.addEventListener('DOMContentLoaded', () => {
    loadData();
    document.getElementById('admin-form').addEventListener('submit', addData);
});

function addData(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const newData = { id: Date.now(), date: new Date().toLocaleString(), name, email };

    let dataList = JSON.parse(localStorage.getItem('adminDataList')) || [];
    dataList.push(newData);

    localStorage.setItem('adminDataList', JSON.stringify(dataList));
    displayData(dataList);

    clearForm();
}

function loadData() {
    let dataList = JSON.parse(localStorage.getItem('adminDataList')) || [];
    displayData(dataList);
}

function displayData(dataList) {
    const dataListContainer = document.getElementById('data-list');
    dataListContainer.innerHTML = '';

    dataList.forEach((data, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${data.date} - ${data.name} - ${data.email} 
                        <button onclick="deleteData(${index})">Excluir</button>`;
        dataListContainer.appendChild(li);
    });
}

function deleteData(index) {
    let dataList = JSON.parse(localStorage.getItem('adminDataList')) || [];
    dataList.splice(index, 1);

    localStorage.setItem('adminDataList', JSON.stringify(dataList));
    displayData(dataList);
}

function clearAll() {
    localStorage.removeItem('adminDataList');
    displayData([]);
}

function searchData() {
    const searchValue = document.getElementById('search-modal').value.toLowerCase();
    let dataList = JSON.parse(localStorage.getItem('adminDataList')) || [];

    const filteredDataList = dataList.filter(data => data.name.toLowerCase().includes(searchValue) || data.email.toLowerCase().includes(searchValue));
    displayData(filteredDataList);
}

function clearForm() {
    document.getElementById('admin-form').reset();
}

function openModal() {
    document.getElementById('data-modal').style.display = 'block';
    loadData();
}

function closeModal() {
    document.getElementById('data-modal').style.display = 'none';
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('data-modal')) {
        document.getElementById('data-modal').style.display = 'none';
    }
}
