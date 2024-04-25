/*
Apprach to read date from file inspired by
https://amitd.co/blog/load-json-via-file-input-in-react
https://stackoverflow.com/a/61707546
 */
export function readJsonFile (file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.onload = event => {
            if (event.target) {
                resolve(JSON.parse(event.target.result))
            }
        }

        fileReader.onerror = error => reject(error)
        fileReader.readAsText(file)
    })
}

export function generateJsonFile (text) {
    var blob = new Blob([text], {type: 'application/json'});
    return blob;
}
