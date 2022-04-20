const axios = require('axios');
debug = true;
async function getUser(cat, rank) {
    route = "http://localhost:5000/cmp"
    target = route + "/" + cat + "/" + rank;
    //back
    console.log(target);
    var data = "";
    const d = await axios.get(target)
        .then((response) => {
            //alert("in response");
            let a = '';
            //a = a + response.data;
            //console.log(response.data);
            data = response.data;

            //    alert(response);
            //alert("axios response");
            return data;
            //this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
        })
    console.log(data);
}

async function get_compatible_users_by_category(cat, number) {
    var ar = [];
    var cur;
    for (let i = 0; i < number; i++) {
        cur = await getUser("com1", 1);
        ar.push(cur);
        //console.log(cur);

    }
    //console.log("aa" + ar);
}
get_compatible_users_by_category("cat", 3);