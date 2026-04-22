let score = 0;
let auto_click = 0;
let click_strength = 1;

function clicked(){
    score+=click_strength;
    document.getElementById("num").innerText = score.toString();
}

function buy(item, price){
    if (price > score){
        alert("You don't have enough points for that item.")
    } else{
        switch(item){
            case "auto_clicker":
                auto_click++;
                score -= price*auto_click;
                document.getElementById("p/s").innerText = auto_click.toString();
                document.getElementById("autoPrice").innerText = (price*(auto_click++)).toString();
                if (!window.autoClickStarted){
                    startAutoClicker()
                }
                break;
            case "strength":
                score -= price*click_strength;
                click_strength++;
                document.getElementById("cs").innerText = click_strength.toString();
                document.getElementById("strengthPrice").innerText = (price*click_strength).toString();
                break;
        }
        document.getElementById("num").innerText = score;
    }
}

function startAutoClicker() {
    if (!window.autoClickStarted) {
        setInterval(() => {
            score+=auto_click;
            document.getElementById("num").innerText = score;
        }, 1000);
        window.autoClickStarted = true;
    }
}
