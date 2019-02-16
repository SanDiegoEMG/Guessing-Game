$(document).ready(function () {


    // Ok, this was a super good (read as: frustrating!) exercise. I struggled through a lot and still ended up with a partially operating half program. AFter doing the review today, I am so excited to apply all the connections that I made in the struggle!!!!

    //universal variables called throughout this program
    var alphChars = "abcdefghijklmnopqurstuvwxyz";
    var winScore = 0;
    var lossScore = 0;
    var guessCountdown = 9;
    var userGuess = "";
    var compGuess = "";
    var arr = [];

    //jQuery sending info to an html element by id (text & html same except html will interpret any tags put on these lines)
    $("#winscore").text(winScore);
    $("#lossscore").text(lossScore);
    $("#guessnum").html(guessCountdown);
    $("#yourguesses").html(userGuess)

    //hides button after pressed   
    $(document).ready(function () {

        $("button").click(function () {
            $(this).hide();
        })

        //generates letter from computer when button is clicked
        $("#starter").on("click", function () {
            compGuess = (alphChars.substr(Math.floor(Math.random() * 26), 1))
            console.log("Computer chose: " + compGuess);
        })
        //added this at the end AFTER thinking about it as I was falling asleep after having worked on it for 5.5 hours!
        function reset() {
            $("#yourguesses").text("");
            guessCountdown = 10;
        }
        // I know I need this but it wasn't implemented bc my whole program structure was wonky
        // $("button").click(function () {
        //     $(this).show();
        // })

        //capture letter that user pushes and record it on screen
        document.onkeyup = function (event) {
            userGuess = event.key;
            $("#yourguesses").text(userGuess + " ");
            $("#guessnum").text(guessCountdown);
            guessCountdown--;
            arr.push(userGuess);
            console.log(arr);

            //conditional to make certain changes if choice matches, others if the array of letters chosen hits 10 - needs to reset after one of those conditions is met

            // Now I understand how I should have combined conditional loops and functions / calling functions differently. Looking forward to struggling through the next homework!!!
            if (guessCountdown - 1 === 0) {
                lossScore++;
                reset();
                alert("Mental powers lacking ... +1 loss");
            }

            else if (userGuess === compGuess) {
                winScore++;
                reset();
                alert("Congrats, you matched my letter!");

            }
        }
    })
})
