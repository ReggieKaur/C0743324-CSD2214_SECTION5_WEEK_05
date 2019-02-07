function myFunction(a, b) {
   
    return a + b;  

}

function arrays() {
    var pens;
    pens = ["red", "green", "blue", "orange"];
    markers = pens;
    console.log(markers);
    var i;
    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }
    alert("Length of array is : " + markers.length);

}
