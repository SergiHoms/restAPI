export let renderLogin = () => {
    
    let login = {
        email: "tu_moreno@rtmail.com",
        password: "mellapepe"
    }

    fetch('http://127.0.0.1:8080/api/auth/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        sessionStorage.setItem('accessToken', data.accessToken);
    }).catch(error => {
        console.log(error);
    });
}