let record = [];
const viewUser = () => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    let tbl = "";
    all.map((user) => {
        return (
            tbl += `
            <div class = "col-3">
                <div class="card m-3">
                    <div class="card-body">
                        <h5 class="card-title">${user.title}</h5>
                        <p class="card-text">${user.text}</p>
                        <div class = "icon">
                            <a href=""><i class="fa-regular fa-trash-can" onclick="deleteUser(${user.id})"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    })
    document.getElementById('record').innerHTML = tbl;
}
viewUser();


const saveUser = () => {
    let title = document.getElementById('title').value;
    let text = document.getElementById('text').value;
    let id = document.getElementById('editid').value;
    let obj = {
        id: Math.floor(Math.random() * 1000),
        title, text
    }

    if (localStorage.getItem('user') === null || localStorage.getItem("user") === undefined) {
        record.push(obj)
        localStorage.setItem('user', JSON.stringify(record))
    } else {
        let old = JSON.parse(localStorage.getItem("user"));
        old.push(obj);
        localStorage.setItem("user", JSON.stringify(old))
    }
    alert("User register")

    document.getElementById('title').value = ""
    document.getElementById('text').value = ""
    viewUser();
}


const deleteUser = (id) => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];

    let deleteData = all.filter((item) => {
        return item.id != id;
    })
    localStorage.setItem("user", JSON.stringify(deleteData));
    alert("User delete");
    viewUser();
}
