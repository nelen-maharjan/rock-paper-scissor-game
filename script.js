const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//Loop through each option image element
optionImages.forEach((image,index) =>{
    image.addEventListener("click", (e) =>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        //Loop through each option image again
        optionImages.forEach((image2,index2) =>{
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        //Setting a timeout to delay the result calculation
        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
        //set the user image to the clicked option image
        userResult.src = imageSrc;

        //generating a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);

        //creating an array of CPU image option
        let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];

        //assigning a letter value to the CPU option (R for rock, P for paper, S for scissors)
        let cpuValue = ["R", "P", "S"][randomNumber];
        //assigning a letter value to the clicked option (based on index)
        let userValue = ["R", "P", "S"][index];

        //creating an object with all possible outcomes
        let outcomes ={
            RR: "Draw",
            RP: "CPU",
            RS: "User",
            PP: "Draw",
            PS: "CPU",
            PR: "User",
            SS: "Draw",
            SR: "CPU",
            SP: "User"
        };

        //looking up the outcome value based on user and Cpu options
        let outComeValue = outcomes[userValue + cpuValue];

        //displaying the result 
        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Wins!!`;
        },2000);
        
        
        
    });
});