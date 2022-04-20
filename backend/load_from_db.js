function get_user_strings_from_db(file_name) {
    const string_array = [];
    const users_as_java_script_objects = [];
    try {
        // read contents of the file
        const data = fs.readFileSync(file_name, 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);

        // print all lines
        lines.forEach((line) => {
            if (line.length > 7) {


                if (line.endsWith("}")) {

                    string_array.push(line);
                    console.log(line);
                } else {
                    console.log("Does Not End with }")
                }
            } else {
                console.log("JSON too Shot");
            }

        });

    } catch (err) {
        console.error(err);
    }
    return string_array;
}

function get_js_objects_from_db(file_name) {
    for (let i = 0; i < string_array.length; i++) {
        console.log(string_array[i]);
        users_as_java_script_objects.push(JSON.parse(string_array[i]));
    }
}

module.exports = { get_js_objects_from_db, get_user_strings_from_db };