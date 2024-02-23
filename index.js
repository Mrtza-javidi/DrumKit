

// Getting drum button mouse clicked 

let btns = document.querySelectorAll(".drum");

    for (let i = 0; i < btns.length; i++) {
                
        btns[i].addEventListener("click", function () {

            let buttonInnerHtml = this.innerHTML;

            makeSound(buttonInnerHtml);

            buttonAnimation(buttonInnerHtml);

            // switch (ButtonInnerHtml) {
            //     case "w":
            //         let tom1 = new Audio("./sounds/tom-1.mp3");
            //         tom1.play();
            //     break;

            //     case "a":
            //         let tom2 = new Audio("./sounds/tom-2.mp3");
            //         tom2.play();
            //     break;
                
            //     case "s":
            //         let tom3 = new Audio("./sounds/tom-3.mp3");
            //         tom3.play();
            //     break;
                
            //     case "d":
            //         let tom4 = new Audio("./sounds/tom-4.mp3");
            //         tom4.play();
            //     break;
                
            //     case "j":
            //         let snare = new Audio("./sounds/snare.mp3");
            //         snare.play();
            //     break;
                
            //     case "k":
            //         let crash = new Audio("./sounds/crash.mp3");
            //         crash.play();
            //     break;
                
            //     case "l":
            //         let kick = new Audio("./sounds/kick-bass.mp3");
            //         kick.play();
            //     break;
            
            //     default:
            // }    
            
        });
    };


    // Getting keyboard key

    document.addEventListener("keypress", function (Event) { // we can write "e" or "evt" rather than 'Event' while all do the same

        makeSound(Event.key);

        buttonAnimation(Event.key);

        // switch (clickedKey) {
        //     case "w":
        //         let tom1 = new Audio("./sounds/tom-1.mp3");
        //         tom1.play();
        //     break;

        //     case "a":
        //         let tom2 = new Audio("./sounds/tom-2.mp3");
        //         tom2.play();
        //     break;
            
        //     case "s":
        //         let tom3 = new Audio("./sounds/tom-3.mp3");
        //         tom3.play();
        //     break;
            
        //     case "d":
        //         let tom4 = new Audio("./sounds/tom-4.mp3");
        //         tom4.play();
        //     break;
            
        //     case "j":
        //         let snare = new Audio("./sounds/snare.mp3");
        //         snare.play();
        //     break;
            
        //     case "k":
        //         let crash = new Audio("./sounds/crash.mp3");
        //         crash.play();
        //     break;
            
        //     case "l":
        //         let kick = new Audio("./sounds/kick-bass.mp3");
        //         kick.play();
        //     break;
        
        //     default:
        // }    
        
    });


    // Writing the same (switch) statement for two times as above is not professional and optimized. The best way when repeating an statement
    // for multiple times is to define a "function", write the statement in it and use it for hundreds of times. Look at the following solution: 👇

    // Statement function for drum click and keypress

    function makeSound(key) { // The parameter of the function (what is inside parantheses), can be whatever name we want like "mamad".

        switch (key) { // Here we call the function parameter name that includes both "buttonInerHTML" and "Event.key" to execute and examine the statement for both case
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
            break;
            
            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
            break;
            
            case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
            break;
            
            case "j":
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
            break;
            
            case "k":
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();
            break;
            
            case "l":
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
            break;
        
            default:
        }
        
    };

    // Button clicked animation

    function buttonAnimation(currentButton) {

        let activeButton = document.querySelector("." + currentButton);

        activeButton.classList.add("pressed");
        
        setTimeout( function (){ // Executes a function, after waiting a specified number of milliseconds.
            
            activeButton.classList.remove("pressed");

        }, 50);
    }
