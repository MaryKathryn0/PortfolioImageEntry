// timer to automatically cycle through x images
var images = ["0A0Q1pD", "0rGZQud", "0VWuvmu", "1CuFckW", "1pDN9Gx", "2BpaHvh"];

var counter = 0;
var max = images.length;




function timer() {
    var interval = setInterval(function() {
        console.log(counter);
        if (counter != max) {
            // clear previous image
            $(".imageDiv").empty();
            // display new image
            var element = (`
            <img src="./Unsolved/images/${images[counter]}" alt="${images[counter]}"/>            
            `);
            // var element = $("<img>");
            // element.attr("src", `./Unsolved/images/${images[counter]}`);
            // element.attr("alt", `${images[counter]}`);
            console.log(element);
            console.log(images[counter]);
            $(".imageDiv").append(element);
            counter++;
        }
        // if image index is at max, stop timer
        else {
            clearInterval(interval);
        }
    }, 3000);
}

$(document).ready(timer);