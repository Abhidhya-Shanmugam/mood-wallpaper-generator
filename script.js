function changeMood(mood){

    const body = document.body;
    const moodTitle = document.getElementById("moodTitle");
    const quote = document.getElementById("quote");

    if(mood === "happy"){

        body.style.background =
        "linear-gradient(135deg,#f6d365,#fda085)";

        moodTitle.innerHTML = "😊 Happy Mood";

        quote.innerHTML =
        "Happiness is not by chance, but by choice.";

    }

    else if(mood === "calm"){

        body.style.background =
        "linear-gradient(135deg,#89f7fe,#66a6ff)";

        moodTitle.innerHTML = "🌊 Calm Mood";

        quote.innerHTML =
        "Peace begins with a deep breath.";

    }

    else if(mood === "focus"){

        body.style.background =
        "linear-gradient(135deg,#232526,#414345)";

        moodTitle.innerHTML = "🎯 Focus Mood";

        quote.innerHTML =
        "Small progress is still progress.";

    }

    else if(mood === "lonely"){

        body.style.background =
        "linear-gradient(135deg,#434343,#000000)";

        moodTitle.innerHTML = "🌙 Lonely Mood";

        quote.innerHTML =
        "Stars shine brightest in the darkest nights.";

    }

}