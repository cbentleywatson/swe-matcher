const axios = require('axios');
debug = true;
function(cat, rank) {
    route = "http://localhost:5000"
    target = route + "/" + cat + "/" + rank;
    axios.get(target)
        .then((response) => {
            //alert("in response");
            return response.data;
            //alert(response.data);
            //    alert(response);
            //alert("axios response");

            //this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
        })
        .catch((error) => {
            alert("Error! " + error);
            //alert("request " + request);
            console.log(error);

            return "";
        })
}