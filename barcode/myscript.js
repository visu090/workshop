// data
var data_JSON;

// To load contents of a file
function XHR(file, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 ){
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', file, true);
    xhr.send();
}

// The initial method called on page load
function init() {
 XHR('data.json', function(response) {
  // Parse JSON string into object
    data_JSON = JSON.parse(response);
 });
}

function getItemWithBarCode(event) {

    event.preventDefault();
	var barcode = document.getElementById("barcode").value
    document.getElementById("barcode").value = ''
    for (index in data_JSON) {
        if (barcode == data_JSON[index].id) {
            // found the item
            var details = "id: " + data_JSON[index].id
            details += "<br>"
            details += data_JSON[index].item
            details += "<br>"
            details += data_JSON[index].description
            details += "<br>"
            details += "Rs. " + data_JSON[index].price

            document.getElementById("itemDetails").innerHTML = details
            console.log("id: " + data_JSON[index].id)
            console.log("item: " + data_JSON[index].description)
            console.log("price: " + data_JSON[index].price)
            return;
        }
    }
    // did not find any element
    document.getElementById("itemDetails").innerHTML = "Not Found"
	console.log(barcode);
}
// response = readline();
// print(response);
// init();

// Steps to load properly
// lauch chrome using: option
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-acss-from-files

// contains the necessary steps:
// https://threejs.org/docs/#manual/introduction/How-to-run-thing-locally

// for beaty search bar
// https://codepen.io/huange/pen/rbqsD
