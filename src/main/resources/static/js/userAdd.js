FulfillUserTable()
async function FulfillUserTable() {
    let table = $('#userTable tbody');
    let currentId = table.text().trim()
    table.empty()

    fetch(`api/users/${currentId}`)
        .then(user => user.json())
        .then(user => {
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

    // await userFetchService.findAllUsers()
    //     .then(res => res.json())
    //     .then(users => {
    //         users.forEach(user => {
    //             let tableFilling = `$(
    //                     <tr>
    //                         <td>${user.id}</td>
    //                         <td>${user.name}</td>
    //                         <td>${user.surname}</td>
    //                         <td>${user.age}</td>
    //                         <td>${user.login}</td>
    //                         <td>${user.rolesString}</td>
    //                         <td>
    //                             <button type="button" class="btn btn-info" data-action="edit"
    //                             data-userid="${user.id}" data-bs-target="#someDefaultModal">
    //                             Edit
    //                             </button>
    //                         </td>
    //
    //                         <td>
    //                             <button type="button" class="btn btn-danger" data-action="delete"
    //                             data-userid="${user.id}" data-toggle="modal" data-target="#someDefaultModal">
    //                             Delete
    //                             </button>
    //                         </td>
    //                    </tr>
    //             )`;
    //             table.append(tableFilling);
    //         })
    //     })
    //
    // $("#tableWithAllUsers").find('button').on('click', (event) => {
    //     let defaultModal = $('#someDefaultModal');
    //     let targetButton = $(event.target);
    //     let buttonUserId = targetButton.attr('data-userid');
    //     let buttonAction = targetButton.attr('data-action');
    //
    //     defaultModal.attr('data-userid', buttonUserId);
    //     defaultModal.attr('data-action', buttonAction);
    //     defaultModal.modal('show');
    // })
}