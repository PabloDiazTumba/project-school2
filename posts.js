function fetchData() {
    
    const showData = document.getElementById("Showdata");

    const url = 'http://localhost:5000/posts';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Database connection failed');
            }

            return response.text();
        })
        .then(data => {

            console.log(data);
            let jsonPars = JSON.parse(data);
            console.log(jsonPars);
            let string = ``;

            for (var i = 0; i < jsonPars.length; i++){
                string += `
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Content</th>
                    <th scope="col">Date</th>
                    <tbody>
                        <tr>
                        <td scope="row">${jsonPars[i].title}</td>
                        <td>${jsonPars[i].author}</td>
                        <td>${jsonPars[i].content}</td>
                        <td>${jsonPars[i].date}</td>
                        </tr>
                    </tbody>
                </tr> 
                `;}

                showData.innerHTML += string;
        })
        .catch(error => {

            console.log(error);
        })
}

fetchData();