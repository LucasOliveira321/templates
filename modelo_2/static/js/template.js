const navbar = document.getElementById("sidebar");

function insertNavbar(){

    // SAUDAÇÃO
    const salutation = document.getElementById("user");
    salutation.innerText = `Bem vindo, ${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}!`;

    // UL
    const ul = document.createElement("ul");
    
    // HOME
    const homeLi = document.createElement("li");
    const homeLink = document.createElement("a");
    const homeIcon = document.createElement("span");
    const homeIconImg = document.createElement("i");
    const homeText = document.createElement("span");

    homeLi.classList.add("item-menu");
    homeLi.classList.add("ativo");
    homeLink.href = "../templates/home.html";
    homeIcon.classList.add("icone");
    homeIconImg.classList.add("bi");
    homeIconImg.classList.add("bi-house-door");
    homeText.classList.add("txt-link");
    homeText.innerText = "Home";

    homeIcon.appendChild(homeIconImg);
    homeLink.appendChild(homeIcon);
    homeLink.appendChild(homeText);

    homeLi.appendChild(homeLink);

    // STOCK
    const stockLi = document.createElement("li");
    const stockLink = document.createElement("a");
    const stockIcon = document.createElement("span");
    const stockIconImg = document.createElement("i");
    const stockText = document.createElement("span");

    stockLi.classList.add("item-menu");
    stockLink.href = "../templates/stock_menu.html";
    stockIcon.classList.add("icone");
    stockIconImg.classList.add("bi");
    stockIconImg.classList.add("bi-box");
    // stockIconImg.classList.add("bi-database-check");
    stockText.classList.add("txt-link");
    stockText.innerText = "Estoque";

    stockIcon.appendChild(stockIconImg);
    stockLink.appendChild(stockIcon);
    stockLink.appendChild(stockText);

    stockLi.appendChild(stockLink);

    // REGISTER
    const registerLi = document.createElement("li");
    const registerLink = document.createElement("a");
    const registerIcon = document.createElement("span");
    const registerIconImg = document.createElement("i");
    const registerText = document.createElement("span");

    registerLi.classList.add("item-menu");
    registerLink.href = "../templates/register_menu.html";
    registerIcon.classList.add("icone");
    registerIconImg.classList.add("bi");
    registerIconImg.classList.add("bi-person-lines-fill");
    registerText.classList.add("txt-link");
    registerText.innerText = "Cadastrar";

    registerIcon.appendChild(registerIconImg);
    registerLink.appendChild(registerIcon);
    registerLink.appendChild(registerText);

    registerLi.appendChild(registerLink);

     // DASHBOARD
     const dashLi = document.createElement("li");
     const dashLink = document.createElement("a");
     const dashIcon = document.createElement("span");
     const dashIconImg = document.createElement("i");
     const dashText = document.createElement("span");
 
     dashLi.classList.add("item-menu");
     dashLink.href = "../templates/dashboard.html";
     dashIcon.classList.add("icone");
     dashIconImg.classList.add("bi");
     dashIconImg.classList.add("bi-bar-chart-line");
     dashText.classList.add("txt-link");
     dashText.innerText = "Dashboard";
 
     dashIcon.appendChild(dashIconImg);
     dashLink.appendChild(dashIcon);
     dashLink.appendChild(dashText);
 
     dashLi.appendChild(dashLink);
 
    // RECEIPT
    const receiptLi = document.createElement("li");
    const receiptLink = document.createElement("a");
    const receiptIcon = document.createElement("span");
    const receiptIconImg = document.createElement("i");
    const receiptText = document.createElement("span");

    receiptLi.classList.add("item-menu");
    receiptLink.href = "../templates/receipt_menu.html";
    receiptIcon.classList.add("icone");
    receiptIconImg.classList.add("bi");
    receiptIconImg.classList.add("bi-truck");
    receiptText.classList.add("txt-link");
    receiptText.innerText = "Recebimento";

    receiptIcon.appendChild(receiptIconImg);
    receiptLink.appendChild(receiptIcon);
    receiptLink.appendChild(receiptText);

    receiptLi.appendChild(receiptLink);

    // CONSULT
    const consultLi = document.createElement("li");
    const consultLink = document.createElement("a");
    const consultIcon = document.createElement("span");
    const consultIconImg = document.createElement("i");
    const consultText = document.createElement("span");

    consultLi.classList.add("item-menu");
    consultLink.href = "../templates/consult_menu.html";
    consultIcon.classList.add("icone");
    consultIconImg.classList.add("bi");
    consultIconImg.classList.add("bi-binoculars");
    consultText.classList.add("txt-link");
    consultText.innerText = "Consultas";

    consultIcon.appendChild(consultIconImg);
    consultLink.appendChild(consultIcon);
    consultLink.appendChild(consultText);

    consultLi.appendChild(consultLink);

    // LOGOUT
    const logoutLi = document.createElement("li");
    const logoutLink = document.createElement("a");
    const logoutIcon = document.createElement("span");
    const logoutIconImg = document.createElement("i");
    const logoutText = document.createElement("span");

    logoutLi.classList.add("item-menu");
    logoutLink.href = "../templates/login.html";
    logoutIcon.classList.add("icone");
    logoutIconImg.classList.add("bi");
    logoutIconImg.classList.add("bi-box-arrow-right");
    logoutText.classList.add("txt-link");
    logoutText.innerText = "Logout";

    logoutIcon.appendChild(logoutIconImg);
    logoutLink.appendChild(logoutIcon);
    logoutLink.appendChild(logoutText);

    logoutLi.appendChild(logoutLink);
    
    
    // AGRUPANDO
    ul.appendChild(homeLi);
    ul.appendChild(receiptLi);
    ul.appendChild(stockLi);
    ul.appendChild(dashLi);
    ul.appendChild(registerLi);
    ul.appendChild(consultLi);
    ul.appendChild(logoutLi);

    navbar.appendChild(ul);
}
insertNavbar();