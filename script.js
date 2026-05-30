const financeForm = document.getElementById("financeForm");
const transactionContainer = document.getElementById("transactionContainer");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const filterButtons = document.querySelectorAll(".filter-btn");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let currentFilter = "All";

function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

function updateStats() {
    let income = 0;
    let expense = 0;
    transactions.forEach(transaction => {
        if (transaction.type === "income") {
            income += Number(transaction.amount);
        } else {
            expense += Number(transaction.amount);
        }
    });

    document.getElementById("income").textContent = `₹${income}`;
    document.getElementById("expense").textContent = `₹${expense}`;
    document.getElementById("balance").textContent = `₹${income - expense}`;
}

function renderTransactions() {
    transactionContainer.innerHTML = "";
    const searchValue = searchInput.value.toLowerCase();
    const filteredTransactions = transactions.filter(transaction => {
        const title = transaction.title || "";
        const matchesSearch = title.toLowerCase().includes(searchValue);
        const matchesFilter = currentFilter === "All" || transaction.type === currentFilter;

        return matchesSearch && matchesFilter;
    });

    if (filteredTransactions.length === 0) {
        transactionContainer.innerHTML = "<h2>No Transactions Found</h2>";
        updateStats();
        return;
    }

    filteredTransactions.forEach(transaction => {
        const card = document.createElement("div");
        card.classList.add("transaction-card");
        card.innerHTML = `
      <h3>${transaction.title}</h3>
      <p>
        <strong>Amount:</strong>
        ₹${transaction.amount}
      </p>
      <p>
        <strong>Type:</strong>
        ${transaction.type}
      </p>
      <p>
        <strong>Category:</strong>
        ${transaction.category}
      </p>
      <button class="delete-btn">
        Delete
      </button>
    `;

        const deleteBtn = card.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            transactions = transactions.filter(item => item !== transaction);
            saveTransactions();
            renderTransactions();
        });

        transactionContainer.appendChild(card);

    });

    updateStats();

}

financeForm.addEventListener("submit", event => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const newTransaction = {
        title,
        amount,
        type,
        category
    };

    transactions.push(newTransaction);
    saveTransactions();
    renderTransactions();
    financeForm.reset();
});

searchInput.addEventListener(
    "input",
    renderTransactions
);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        currentFilter = button.dataset.filter;

        renderTransactions();

    });
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
renderTransactions();