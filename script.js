document.addEventListener("DOMContentLoaded", function () {

    // Dynamic Home Page Content
    const dynamicText = document.getElementById("dynamic-text");

    if(dynamicText){

        const messages = [

            "Professional Security Consultancy Services",
            "Advanced AI-Powered Security Solutions",
            "Trusted Training and Risk Management Experts",
            "Protecting People, Property and Assets"

        ];

        let index = 0;

        setInterval(function(){

            dynamicText.textContent = messages[index];

            index++;

            if(index >= messages.length){
                index = 0;
            }

        }, 3000);

    }

});