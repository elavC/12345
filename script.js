let data = [
    {id:1, modelo:'iPhone 11', cor: 'Branco', armazenamento:'128GB', imei:"3563214568562", estoque:'Es1', custo: 1900, recebimento:'12-01-2024', status:'Pago'},
]

function readAll() {
    var tbData = document.querySelector('.table_data');
    var elements = '';
    data.map(d => (
        elements +=` <tr>
            <td>${d.modelo}</td>
            <td>${d.cor}</td>
            <td>${d.armazenamento}</td>
            <td>${d.imei}</td>
            <td>${d.estoque}</td>
            <td>${d.custo}</td>
            <td>${d.recebimento}</td>
            <td>${d.status}</td>
            <td>
                <button onclick={edit(${d.id})}>Editar</button>
                <button onclick={delet(${d.id})}>Excluir</button>
            </td>
        </tr>`
    ))
    tbData.innerHTML = elements;
}

function createForm() {
    document.querySelector('.create_form').style.display = 'block';
    document.querySelector('.add_btn').style.display = 'none';
}

function add() {
    var modelo = document.querySelector('.modelo').value;
    var cor = document.querySelector('.cor').value;
    var armazenamento = document.querySelector('.armazenamento').value;
    var imei = document.querySelector('.imei').value;
    var estoque = document.querySelector('.estoque').value;
    var custo = document.querySelector('.custo').value;
    var recebimento = document.querySelector('.recebimento').value;
    var status = document.querySelector('.status').value;

    var newObj = {id: 3, modelo, cor, armazenamento, imei, estoque, custo, recebimento, status};
    data.push(newObj);

    document.querySelector('.create_form').style.display = 'none';
    document.querySelector('.add_btn').style.display = 'block';

    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = 'block';
    document.querySelector('.add_btn').style.display = 'none';

    var updateObj = data.find(f => f.id === id);
    document.querySelector('.update_id').value = updateObj.id;
    document.querySelector('.u_modelo').value = updateObj.modelo;
    document.querySelector('.u_cor').value = updateObj.cor;
    document.querySelector('.u_armazenamento').value = updateObj.armazenamento;
    document.querySelector('.u_imei').value = updateObj.imei;
    document.querySelector('.u_estoque').value = updateObj.estoque;
    document.querySelector('.u_custo').value = updateObj.custo;
    document.querySelector('.u_recebimento').value = updateObj.recebimento;
    document.querySelector('.u_status').value = updateObj.status;
}

function update() {
    var id = parseInt(document.querySelector('.update_id').value);
    var modelo = document.querySelector('.u_modelo').value;
    var cor = document.querySelector('.u_cor').value;
    var armazenamento = document.querySelector('.u_armazenamento').value;
    var imei = document.querySelector('.u_imei').value;
    var estoque = document.querySelector('.u_estoque').value;
    var custo = document.querySelector('.u_custo').value;
    var recebimento = document.querySelector('.u_recebimento').value;
    var status =  document.querySelector('.u_status').value;
    var updateObj = {id, modelo, cor, armazenamento, imei, estoque, custo, recebimento, status};

    var index = data.findIndex(f => f.id === id);
    data[index] = updateObj; 

    document.querySelector(".update_form").style.display = 'none';
    document.querySelector('.add_btn').style.display = 'block';

    readAll();
}

function delet(id) {
    var newdata = data.filter(f => f.id !== id);
    data = newdata;
    readAll();
}