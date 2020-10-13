// timer to automatically cycle through x images
var images = ["0A0Q1pD.jpg", "0rGZQud.jpg", "0VWuvmu.jpg", "1CuFckW.jpg", "1pDN9Gx.jpg", "2BpaHvh.jpg"];



var counter = 0;
var max = images.length;




function timer() {
    var interval = setInterval(function () {
        console.log(counter);
        if (counter != max) {
            // clear previous image
            $("#image-div").empty();
            // display new image
            var element = (`
            <img src="./GrimmeDevTesting/images/${images[counter]}" alt="${images[counter]}"/>            
            `);
            // var element = $("<img>");
            // element.attr("src", `./Unsolved/images/${images[counter]}`);
            // element.attr("alt", `${images[counter]}`);
            console.log(element);
            console.log(images[counter]);
            $("#image-div").append(element);
            counter++;
        }
        // if image index is at max, stop timer
        else {
            clearInterval(interval);
        }
    }, 3000);
}

$(document).ready(timer);