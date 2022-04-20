const axios = require('axios');



//const axios = require('axios');
var debug = true;
async function getUser(cat, rank, array) {
    var route = "http://localhost:5000/cmp"
    var target = route + "/" + cat + "/" + rank;
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
            //return data;
            //   console.log(data);
            array[rank] = data; //JSON.parse(data);
            return data;
            //this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
        })

}

async function get_compatible_users_by_category(cat, number) {
    var ar = [];
    var cur;
    var from_new = new Array(number);


    for (let i = 0; i < number; i++) {
        const a = await getUser(cat, i, from_new);
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log(a);
        //        console.log(from_new[i]);
    }
    for (let i = 0; i < 25; i++) {
        console.log("*");
    }
    for (let i = 0; i < number; i++) {
        //console.log(from_new[i]);
        //ar.push(cur);
        //console.log(cur);
    }

    return from_new;
}
async function get_user_compatibility_rankings(number_requested) {
    // number_requested = 3;
    var general = await get_compatible_users_by_category("general", number_requested);
    for (let i = 0; i < 25; i++) {
        console.log("*");
    }
    for (let i = 0; i < 3; i++) {
        console.log("in general");
        console.log(general[i]);
    }
    var available = await get_compatible_users_by_category("ava", number_requested);
    for (let i = 0; i < 3; i++) {
        console.log("in available");
        console.log(available[i]);
    }

    var compatibility = await get_compatible_users_by_category("compatibility", number_requested);
    for (let i = 0; i < 3; i++) {
        console.log("in compatible");
        console.log(compatibility[i]);
    }

    // pick your format


    //      CHOOSE THE FORMAT YOU WANT HERE --  JUST REMOVE THE RIGHT COMMENTS

    //  const final_filled_string_arr = { general, available, compatibility };
    //  return final_filled_string_arr;


    var users_by_cat_and_rank;
    users_by_cat_and_rank.general = general;
    users_by_cat_and_rank.available = available;
    users_by_cat_and_rank.compatibility = compatibility;
    return users_by_cat_and_rank;



    /*
    const final_filled_js_objs_arr={JSON.parse(general), JSON.parse(available), JSON.parse(compatibility)};
    return  final_filled_js_objs_arr
     */


    /*
    var final_filled_js_obs_list;
    final_filled_js_obs_list.general = JSON.parse(general);
    final_filled_js_obs_list.available = JSON.parse(available);
    final_filled_js_obs_list.compatibility = JSON.parse(compatibility);
    return final_filled_js_obs_list
        */



}
//get_user_compatibility_rankings(3);
module.exports = { get_user_compatibility_rankings };