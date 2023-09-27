fulfillUserTable()

async function fulfillUserTable() {
    let table = $('#userTable tbody');
    table.empty()

    let h5 = $('#formHead h5');
    h5.empty()

    fetch(`api/user/users/currentUser`)
        .then(user => user.json())
        .then(user => {
            let headFilling = `
                <strong>${user.login}</strong> with roles: ${user.rolesString}
            `;
            h5.append(headFilling)

            let tableFilling = `$(
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.login}</td>
                    <td>${user.rolesString}</td>
                </tr>
            )`;
            table.append(tableFilling)
        })
}