let cart = document.querySelectorAll('.dugme-naslov');

let proizvod = [
    {
        name: "Spring morning",
        tag: "1",
        price: 5600,
        inCart: 0
    },

    {
        name: "Day at the garden",
        tag: "2",
        price: 7200,
        inCart: 0
    },

    {
        name: "Cheeky",
        tag: "3",
        price: 7200,
        inCart: 0
    },

    {
        name: "Spring break",
        tag: "4",
        price: 5600,
        inCart: 0
    },

    {
        name: "No days off",
        tag: "5",
        price: 10500,
        inCart: 0
    },

    {
        name: "Here comes the sun",
        tag: "6",
        price: 3400,
        inCart: 0
    },

    {
        name: "Full bloom",
        tag: "7",
        price: 4600,
        inCart: 0
    },

    {
        name: "Daydream",
        tag: "8",
        price: 8700,
        inCart: 0
    },

    {
        name: "Breakfast in bad",
        tag: "9",
        price: 11200,
        inCart: 0
    },

    {
        name: "Burning embers",
        tag: "10",
        price: 13700,
        inCart: 0
    },

    {
        name: "Starry eye",
        tag: "11",
        price: 11200,
        inCart: 0
    },

    {
        name: "The sun is on our side",
        tag: "15",
        price: 10200,
        inCart: 0
    },

    {
        name: "Going dutch",
        tag: "16",
        price: 10800,
        inCart: 0
    },

    {
        name: "Canary's song",
        tag: "17",
        price: 4600,
        inCart: 0
    },

    {
        name: "London fog",
        tag: "18",
        price: 11400,
        inCart: 0
    },

    {
        name: "Golden fields",
        tag: "19",
        price: 8400,
        inCart: 0
    },

    {
        name: "Send nudes",
        tag: "20",
        price: 10200,
        inCart: 0
    },

    {
        name: "Last dance",
        tag: "23",
        price: 9600,
        inCart: 0
    },

    {
        name: "Romantic feelings",
        tag: "24",
        price: 12300,
        inCart: 0
    },

    {
        name: "Dancing in the moonlight",
        tag: "26",
        price: 9800,
        inCart: 0
    },

    {
        name: "Feet in the sand",
        tag: "27",
        price: 9800,
        inCart: 0
    },

    {
        name: "Dark roast ",
        tag: "28",
        price: 4620,
        inCart: 0
    },

    {
        name: "Apres ski",
        tag: "29",
        price: 5400,
        inCart: 0
    },

    {
        name: "Divergent",
        tag: "30",
        price: 10400,
        inCart: 0
    },

    {
        name: "Mountain weekend",
        tag: "31",
        price: 11400,
        inCart: 0
    },

    {
        name: "Subscription: monthly flower bomb",
        tag: "39",
        price: 6000,
        inCart: 0
    },

    {
        name: "Subscription: home office designer's choice {weekly}",
        tag: "40",
        price: 3600,
        inCart: 0
    },

    {
        name: "Subscription: home office designer's choice {bi-weekly}",
        tag: "42",
        price: 3600,
        inCart: 0
    },

    {
        name: "Flowers, always",
        tag: "37",
        price: 4900,
        inCart: 0
    },

    {
        name: "Subscription: date night biweekly",
        tag: "subscriptiondatenightbiweekly",
        price: 35,
        inCart: 0
    },

    {
        name: "Ya filthy animal",
        tag: "yafilthyanimal",
        price: 36,
        inCart: 0
    },

    {
        name: "Subscription: date night monthly",
        tag: "38",
        price: 7400,
        inCart: 0
    },

    {
        name: "Ove in 2021: [a perfect petal x apart•y exclusive]",
        tag: "46",
        price: 7200,
        inCart: 0
    },

    {
        name: "Eden",
        tag: "22",
        price: 2900,
        inCart: 0
    },

    {
        name: "Pathos plant",
        tag: "32",
        price: 3300,
        inCart: 0
    },
    
    {
        name: "Snake plant",
        tag: "33",
        price: 3800,
        inCart: 0
    },
    
    {
        name: "Pathos",
        tag: "34",
        price: 4000,
        inCart: 0
    },
    
    {
        name: "Left coast dreaming",
        tag: "41",
        price: 9500,
        inCart: 0
    },
    
    {
        name: "Woodstock: floral crown",
        tag: "45",
        price: 5700,
        inCart: 0
    },
    
    {
        name: "Oui, oui!",
        tag: "12",
        price: 8000,
        inCart: 0
    },
    
    {
        name: "Afternoon in the garden (designer box)",
        tag: "13",
        price: 9500,
        inCart: 0
    },

    {
        name: "You are my person",
        tag: "14",
        price: 8700,
        inCart: 0
    },
    
    {
        name: "Sunday morning",
        tag: "21",
        price: 10800,
        inCart: 0
    },
    
    {
        name: "Spaah day",
        tag: "44",
        price: 9300,
        inCart: 0
    },
    
    {
        name: "Burning love",
        tag: "25",
        price: 7200,
        inCart: 0
    },
    
    {
        name: "Oversize 1",
        tag: "os1",
        price: 15800,
        inCart: 0
    },
    
    {
        name: "Oversize 2",
        tag: "os2",
        price: 15300,
        inCart: 0
    },
    
    {
        name: "Oversize 3",
        tag: "os3",
        price: 16800,
        inCart: 0
    },
    
    {
        name: "Oversize 4",
        tag: "os4",
        price: 15800,
        inCart: 0
    },
    
    {
        name: "Oversize 5",
        tag: "os5",
        price: 15300,
        inCart: 0
    },

    {
        name: "Oversize 6",
        tag: "os6",
        price: 13800,
        inCart: 0
    } 
];

for (let i = 0; i < cart.length; i++){
    cart[i].addEventListener('click', () => {
        //saljemo koji proizvod brojimo
        brojanje(proizvod[i]);
        ukupnacena(proizvod[i]);
    })
}


function brojanje(proizvod) {
    let brojproizvod = localStorage.getItem('brojanje');
    
    //  Pretvaramo broj proizvoda iz stringa u broj
    brojproizvod = parseInt(brojproizvod);

    //svaki put povecati broj proizvoda
    if (brojproizvod) {
        localStorage.setItem('brojanje', brojproizvod + 1);
        document.querySelector('.cart .spn1').textContent =  brojproizvod + 1;

    }
    else {
        localStorage.setItem('brojanje', 1);
        document.querySelector('.cart .spn1').textContent = 1;
    }

}

function ukupnacena(proizvod) {
    let cenakorpe = localStorage.getItem('ukupnacena');

    if (cenakorpe != null) {
        cenakorpe = parseInt(cenakorpe);
        localStorage.setItem("ukupnacena", cenakorpe + proizvod.price);
        document.querySelector('.cart .spn2').textContent =  cenakorpe + proizvod.price;

    }
    else {
        localStorage.setItem("ukupnacena", proizvod.price);
        document.querySelector('.cart .spn2').textContent = proizvod.price;

    }
}

function ucitajbrojukorpi() {
    //koristimo ovu fju kako bi broj koji je u local store uvek bio vidljiv 
    //cak i onda kada refresujemo stranicu
    let brojproizvod = localStorage.getItem('brojanje');

    if (brojproizvod) {
        document.querySelector('.cart .spn1').textContent = brojproizvod;
    }

}


function cena() {
    let cenakorpe = localStorage.getItem('ukupnacena');

    if (cenakorpe) {
        document.querySelector('.cart .spn2').textContent = cenakorpe;
    }
}





cena();
ucitajbrojukorpi();
