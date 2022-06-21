$(document).ready(function () {


    var elements = document.getElementsByClassName("dappInfo");
    Array.prototype.forEach.call(elements, function (el) {
        console.log(el);
        console.log(localStorage.getItem('hideStatus'));
        if (localStorage.getItem ('hideStatus') !== null) {
            el.style.display = 'none';
            console.log(localStorage.getItem('hidestatus'));
        } else {
            $("#infoHideButton").click(function () {
                localStorage.setItem('hideStatus', 'hidden');
                el.style.display = 'none';
            });
        }
    });


});

//Change text of Marketplaces button
function changeTextMarketplaces() {
    var btn = document.getElementById("btnMarketplaces");
    if (btn.value === "Show All") {
        btn.value = "Show Less";
        btn.innerHTML = "Show Less";
    } else {
        btn.value = "Show All";
        btn.innerHTML = "Show All";
    }
}

//Change text of Exchanges button
function changeTextExchanges() {
    var btn = document.getElementById("btnExchanges");
    if (btn.value === "Show All") {
        btn.value = "Show Less";
        btn.innerHTML = "Show Less";
    } else {
        btn.value = "Show All";
        btn.innerHTML = "Show All";
    }
}

//Change text of DeFi button
function changeTextDefi() {
    var btn = document.getElementById("btnDefi");
    if (btn.value === "Show All") {
        btn.value = "Show Less";
        btn.innerHTML = "Show Less";
    } else {
        btn.value = "Show All";
        btn.innerHTML = "Show All";
    }
}

//Change text of Games button
function changeTextGames() {
    var btn = document.getElementById("btnGames");
    if (btn.value === "Show All") {
        btn.value = "Show Less";
        btn.innerHTML = "Show Less";
    } else {
        btn.value = "Show All";
        btn.innerHTML = "Show All";
    }
}

//Change text of Games button
function changeTextCollectibles() {
    var btn = document.getElementById("btnCollectibles");
    if (btn.value === "Show All") {
        btn.value = "Show Less";
        btn.innerHTML = "Show Less";
    } else {
        btn.value = "Show All";
        btn.innerHTML = "Show All";
    }
}


//Change text of Digital identity button
function changeTextDigiId() {
    var btn = document.getElementById("btnDigiId");
    if (btn.value === "Show All") {
        btn.value = "Show Less";
        btn.innerHTML = "Show Less";
    } else {
        btn.value = "Show All";
        btn.innerHTML = "Show All";
    }
}


//NFT Marketplaces visibility
function changeVisibilityMarketplaces() {
    var elements = document.getElementsByClassName("hiddenMarketplaces");
    Array.prototype.forEach.call(elements, function (el) {
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

}
function changeVisibilityExchanges() {
    var elements = document.getElementsByClassName("hiddenExchanges");
    Array.prototype.forEach.call(elements, function (el) {
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

}

function changeVisibilityDefi() {
    var elements = document.getElementsByClassName("hiddenDefi");
    Array.prototype.forEach.call(elements, function (el) {
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

}

function changeVisibilityGames() {
    var elements = document.getElementsByClassName("hiddenGames");
    Array.prototype.forEach.call(elements, function (el) {
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

}

function changeVisibilityCollectibles() {
    var elements = document.getElementsByClassName("hiddenCollectibles");
    Array.prototype.forEach.call(elements, function (el) {
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

}

function changeVisibilityDigiId() {
    var elements = document.getElementsByClassName("hiddenDigiIds");
    Array.prototype.forEach.call(elements, function (el) {
        if (el.style.display === "none") {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });

}

function redirect(link) {
    window.location.href = link;
}



