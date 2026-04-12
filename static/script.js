function updateSuburban() {
    let city = document.getElementById("city").value;
    let sub = document.getElementById("suburban");
    sub.innerHTML = "";

    if(cityMapping[city]) {
        Object.keys(cityMapping[city]).forEach(s => {
            let opt = new Option(s, s);
            sub.add(opt);
        });
    }
}

function updateLocality() {
    let city = document.getElementById("city").value;
    let sub = document.getElementById("suburban").value;
    let loc = document.getElementById("locality");
    loc.innerHTML = "";

    cityMapping[city][sub].forEach(l => {
        loc.add(new Option(l, l));
    });
}

function handlePropertyType() {
    let type = document.getElementById("property_type").value;

    let studio = document.getElementById("studio_div");
    let pent = document.getElementById("penthouse_div");

    studio.style.display = "none";
    pent.style.display = "none";

    document.getElementById("is_studio").value = "0";
    document.getElementById("is_PentaHouse").value = "0";

    if(["Apartment","Independent House","Independent Floor"].includes(type)) {
        studio.style.display = "block";
    }

    if(type === "Apartment") {
        pent.style.display = "block";
    }
}

function predict() {
    let data = {
        city: city.value,
        sub_urban: suburban.value,
        locality: locality.value,
        Property_type: property_type.value,
        bhk: parseInt(bhk.value),
        area_sqft: parseInt(area_sqft.value),
        Property_building_status: document.getElementById("status").value,
        is_furnished: furnished.value,
        trust_score: parseFloat(trust_score.value),
        is_RERA_registered: 1,
        is_ready_to_move: 1,
        is_studio: parseInt(is_studio.value),
        is_PentaHouse: parseInt(is_PentaHouse.value)
    };

    fetch("/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        document.getElementById("result").innerText = "₹ " + res.prediction;
    });
}