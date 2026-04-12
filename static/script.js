function updateSuburban() {
    const city = document.getElementById("city").value;
    const sub  = document.getElementById("suburban");
    const loc  = document.getElementById("locality");

    sub.innerHTML = '<option value="">Select Sub-Urban</option>';
    loc.innerHTML = '<option value="">Select Locality</option>';

    if (cityMapping[city]) {
        Object.keys(cityMapping[city]).forEach(s => {
            sub.add(new Option(s, s));
        });
    }
}

function updateLocality() {
    const city = document.getElementById("city").value;
    const sub  = document.getElementById("suburban").value;
    const loc  = document.getElementById("locality");

    loc.innerHTML = '<option value="">Select Locality</option>';

    if (cityMapping[city] && cityMapping[city][sub]) {
        cityMapping[city][sub].forEach(l => loc.add(new Option(l, l)));
    }
}

function handlePropertyType() {
    const type    = document.getElementById("property_type").value;
    const studio  = document.getElementById("studio_div");
    const pent    = document.getElementById("penthouse_div");

    studio.classList.add("hidden");
    pent.classList.add("hidden");

    document.getElementById("is_studio").value     = "0";
    document.getElementById("is_PentaHouse").value = "0";

    // Reset toggle buttons
    resetToggle("is_studio");
    resetToggle("is_PentaHouse");

    if (["Apartment", "Independent House", "Independent Floor"].includes(type)) {
        studio.classList.remove("hidden");
    }
    if (type === "Apartment") {
        pent.classList.remove("hidden");
    }
}

function resetToggle(hiddenId) {
    const hiddenInput = document.getElementById(hiddenId);
    if (!hiddenInput) return;
    hiddenInput.value = "0";
    const group = hiddenInput.closest(".toggle-field") || hiddenInput.closest(".flag-item");
    if (group) {
        const btns = group.querySelectorAll(".toggle-btn");
        btns.forEach((b, i) => {
            b.classList.toggle("active", i === 0);
        });
    }
}

function setToggle(btn, hiddenId, val) {
    document.getElementById(hiddenId).value = val;
    const group = btn.closest(".toggle-group");
    group.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function formatPrice(val) {
    // Model predicts in Lakhs (₹)
    if (val >= 100) return "₹ " + (val / 100).toFixed(2) + " Cr";
    return "₹ " + val.toFixed(2) + " L";
}

function clearErrors() {
    document.querySelectorAll(".field-error").forEach(el => el.classList.remove("field-error"));
    document.getElementById("result_card").classList.add("hidden");
    document.getElementById("error_card").classList.add("hidden");
}

function markError(id) {
    const el = document.getElementById(id);
    if (el) el.closest(".field").classList.add("field-error");
}

function predict() {
    clearErrors();

    const city     = document.getElementById("city").value;
    const suburban = document.getElementById("suburban").value;
    const locality = document.getElementById("locality").value;
    const propType = document.getElementById("property_type").value;
    const bhk      = document.getElementById("bhk").value;
    const area     = document.getElementById("area_sqft").value;

    // Validate all required fields and mark any that are empty
    const required = [
        { id: "city",          val: city },
        { id: "suburban",      val: suburban },
        { id: "locality",      val: locality },
        { id: "property_type", val: propType },
        { id: "bhk",           val: bhk },
        { id: "area_sqft",     val: area },
    ];

    let hasError = false;
    required.forEach(({ id, val }) => {
        if (!val || val.trim() === "") {
            markError(id);
            hasError = true;
        }
    });

    if (parseInt(bhk) < 1 && bhk) { markError("bhk"); hasError = true; }
    if (parseInt(area) < 1 && area) { markError("area_sqft"); hasError = true; }

    if (hasError) {
        showError("Please fill in all highlighted fields before predicting.");
        return;
    }

    const data = {
        city:                    city,
        sub_urban:               suburban,
        locality:                locality,
        Property_type:           propType,
        bhk:                     parseInt(bhk),
        area_sqft:               parseInt(area),
        Property_building_status: document.getElementById("status").value,
        is_furnished:            document.getElementById("furnished").value,
        trust_score:             parseFloat(document.getElementById("trust_score").value),
        is_RERA_registered:      parseInt(document.getElementById("is_RERA_registered").value),
        is_ready_to_move:        parseInt(document.getElementById("is_ready_to_move").value),
        is_studio:               parseInt(document.getElementById("is_studio").value),
        is_PentaHouse:           parseInt(document.getElementById("is_PentaHouse").value)
    };

    // Loading state
    const btn     = document.getElementById("predict_btn");
    const btnText = document.getElementById("btn_text");
    const loader  = document.getElementById("btn_loader");
    btn.disabled  = true;
    btnText.classList.add("hidden");
    loader.classList.remove("hidden");

    fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
    })
    .then(res => {
        document.getElementById("result_price").innerText = formatPrice(res.prediction);
        document.getElementById("result_card").classList.remove("hidden");
        document.getElementById("result_card").scrollIntoView({ behavior: "smooth", block: "nearest" });
    })
    .catch(() => {
        showError("Could not fetch prediction. Please try again.");
    })
    .finally(() => {
        btn.disabled = false;
        btnText.classList.remove("hidden");
        loader.classList.add("hidden");
    });
}

function showError(msg) {
    document.getElementById("error_msg").innerText = msg;
    document.getElementById("error_card").classList.remove("hidden");
}
