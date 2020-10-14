// timer to automatically cycle through x images
var images = ["Lois0.JPG", "Lois1.JPG", "Lois2.JPG", "Lois3.JPG", "Lois4.JPG", "Lois5.JPG","Lois6.JPG"];



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
            <img src="./GrimmeDevTesting/images/${images[counter]}" alt="${images[counter]}" style ="width: 40%"/>            
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
    }, 1000);
}

$(document).ready(timer);