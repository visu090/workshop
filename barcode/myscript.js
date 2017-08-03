// List of items
var items;

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
        items = JSON.parse(response);
        });
}

// To find the item with the barcode in the array of items
// return
// position in the array if found
// otherwise return -1
function findIndexOfItemWithBarcode(barcode) {
    
    for (index in items) {
        console.log(items[index].id)
        if (barcode == items[index].id) {
            // found the item
            return index
        }
    }
    return -1
}

function updateDetailsOfItemAtIndex(index) {
    
    var details = "id: " + items[index].id
    details += "<br>"
    details += items[index].item
    details += "<br>"
    details += items[index].description
    details += "<br>"
    details += "Rs. " + items[index].price
    
    document.getElementById("itemDetails").innerHTML = details
//    console.log("id: " + items[index].id)
//    console.log("item: " + items[index].description)
//    console.log("price: " + items[index].price)
}

function getItemWithBarCode(event) {
    
    event.preventDefault()
    
    // read the barcode id
    var barcode = document.getElementById("barcode").value
    document.getElementById("barcode").value = ''
    
    var index = findIndexOfItemWithBarcode(barcode)
    if (index != -1) {
        // found the item
        // update details
        updateDetailsOfItemAtIndex(index)
        return
    } else {
        // did not find any element
        document.getElementById("itemDetails").innerHTML = "Not Found"
    }
    console.log(barcode)
}

// Steps to load properly
// lauch chrome using: option
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-acss-from-files

// contains the necessary steps:
// https://threejs.org/docs/#manual/introduction/How-to-run-thing-locally

// for beaty search bar
// https://codepen.io/huange/pen/rbqsD
