export let renderForm = () => {

    let form = document.getElementById('form');
    let sendFormButton = document.getElementById('send-form-button');

    sendFormButton.addEventListener('click', event => {

        event.preventDefault();

        let formData = new FormData(form);
        let formDataJson = Object.fromEntries(formData.entries());
        console.log(JSON.stringify(formDataJson));

        fetch('http://127.0.0.1:8080/api/admin/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify(formDataJson)
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    });
};