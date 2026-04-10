const checkboxes = Array.from(
    document.querySelectorAll("input[type='checkbox']"),
);

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", () => {
        const billionaireBoulevard = JSON.parse(
            localStorage.getItem("billionaireBoulevard"),
        );
        billionaireBoulevard[i] = checkboxes[i].checked;
        localStorage.setItem(
            "billionaireBoulevard",
            JSON.stringify(billionaireBoulevard),
        );
    });
}

if (!localStorage.getItem("billionaireBoulevard")) {
    const billionaireBoulevard = {};
    for (let i = 0; i < checkboxes.length; i++) {
        billionaireBoulevard[i] = false;
    }
    localStorage.setItem(
        "billionaireBoulevard",
        JSON.stringify(billionaireBoulevard),
    );
}

const billionaireBoulevard = JSON.parse(
    localStorage.getItem("billionaireBoulevard"),
);
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = billionaireBoulevard[i];
}
