const menu = document.getElementById("menu");
menu.style.backgroundColor = "#2E5276";
function insert_modal(){

    // SAUDAÇÃO 
    const salutation = document.getElementById("user");
    salutation.innerText = `Bem vindo, ${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}!`;

    const div_dialog = document.createElement("div");
    div_dialog.classList.add("modal-dialog");
    div_dialog.classList.add("modal-fullscreen");

    const div_content = document.createElement("div");
    div_content.classList.add("modal-content");
    div_content.style.width = "300px";

    const div_header = document.createElement("div");
    div_header.classList.add("modal-header");

    // TITLE
    const title = document.createElement("h1");
    title.classList.add("modal-title");
    title.classList.add("fs-5");
    title.innerText = "Menu";

    div_header.appendChild(title);

    // CLOSE X
    const button_x_close = document.createElement("button");
    button_x_close.type = "button";
    button_x_close.classList.add("btn-close");
    button_x_close.setAttribute("data-bs-dismiss", "modal");
    button_x_close.ariaLabel = "Close";

    div_header.appendChild(button_x_close);

    // BODY
    const div_body = document.createElement("div");
    div_body.classList.add("modal-body");

    // OPTIONS
    const ul_options = document.createElement("ul");
    ul_options.classList.add("list-group");
    ul_options.classList.add("list-group-flush");

    // HOME
    const li_home = document.createElement("li");
    li_home.classList.add("list-group-item");

    const a_home = document.createElement("a");
    a_home.style.color = "black";
    a_home.style.textDecoration = "none";
    a_home.href = "../templates/home.html";
    a_home.innerText = "Home";

    const home_icon = document.createElement("span");
    const home__icon_img = document.createElement("i");
    home_icon.classList.add("icone");
    home__icon_img.classList.add("bi");
    home__icon_img.classList.add("bi-house-door");
    home__icon_img.classList.add("m-2");
    home_icon.appendChild(home__icon_img);

    li_home.appendChild(home_icon);
    li_home.appendChild(a_home);
    ul_options.appendChild(li_home);

    // RECEIPT
    const li_receipt = document.createElement("li");
    li_receipt.classList.add("list-group-item");

    const a_receipt = document.createElement("a");
    a_receipt.style.color = "black";
    a_receipt.style.textDecoration = "none";
    a_receipt.href = "../templates/receipt_menu.html";
    a_receipt.innerText = "Recebimento";

    const receipt_icon = document.createElement("span");
    const receipt__icon_img = document.createElement("i");
    receipt_icon.classList.add("icone");
    receipt__icon_img.classList.add("bi");
    receipt__icon_img.classList.add("bi-truck");
    receipt__icon_img.classList.add("m-2");
    receipt_icon.appendChild(receipt__icon_img);

    li_receipt.appendChild(receipt_icon);
    li_receipt.appendChild(a_receipt);
    ul_options.appendChild(li_receipt);

    // STOCK
    const li_stock = document.createElement("li");
    li_stock.classList.add("list-group-item");

    const a_stock = document.createElement("a");
    a_stock.style.color = "black";
    a_stock.style.textDecoration = "none";
    a_stock.href = "../templates/stock_menu.html";
    a_stock.innerText = "Estoque";

    const stock_icon = document.createElement("span");
    const stock_icon_img = document.createElement("i");
    stock_icon.classList.add("icone");
    stock_icon_img.classList.add("bi");
    stock_icon_img.classList.add("bi-box");
    stock_icon_img.classList.add("m-2");
    stock_icon.appendChild(stock_icon_img);

    li_stock.appendChild(stock_icon);
    li_stock.appendChild(a_stock);
    ul_options.appendChild(li_stock);

    // DASHBOARD
    const li_dash = document.createElement("li");
    li_dash.classList.add("list-group-item");

    const a_dash = document.createElement("a");
    a_dash.style.color = "black";
    a_dash.style.textDecoration = "none";
    a_dash.href = "../templates/dashboard.html";
    a_dash.innerText = "Dashboard";

    const dash_icon = document.createElement("span");
    const dash_icon_img = document.createElement("i");
    dash_icon.classList.add("icone");
    dash_icon_img.classList.add("bi");
    dash_icon_img.classList.add("bi-bar-chart-line");
    dash_icon_img.classList.add("m-2");
    dash_icon.appendChild(dash_icon_img);

    li_dash.appendChild(dash_icon);
    li_dash.appendChild(a_dash);
    ul_options.appendChild(li_dash);

    // REGISTER
    const li_register = document.createElement("li");
    li_register.classList.add("list-group-item");

    const a_register = document.createElement("a");
    a_register.style.color = "black";
    a_register.style.textDecoration = "none";
    a_register.href = "../templates/register_menu.html";
    a_register.innerText = "Cadastrar";

    const register_icon = document.createElement("span");
    const register_icon_img = document.createElement("i");
    register_icon.classList.add("icone");
    register_icon_img.classList.add("bi");
    register_icon_img.classList.add("bi-person-lines-fill");
    register_icon_img.classList.add("m-2");
    register_icon.appendChild(register_icon_img);

    li_register.appendChild(register_icon);
    li_register.appendChild(a_register);
    ul_options.appendChild(li_register);

    // CONSULT
    const li_consult = document.createElement("li");
    li_consult.classList.add("list-group-item");

    const a_consult = document.createElement("a");
    a_consult.style.color = "black";
    a_consult.style.textDecoration = "none";
    a_consult.href = "../templates/consult_menu.html";
    a_consult.innerText = "Consultar";

    const consult_icon = document.createElement("span");
    const consult_icon_img = document.createElement("i");
    consult_icon.classList.add("icone");
    consult_icon_img.classList.add("bi");
    consult_icon_img.classList.add("bi-binoculars");
    consult_icon_img.classList.add("m-2");
    consult_icon.appendChild(consult_icon_img);

    li_consult.appendChild(consult_icon);
    li_consult.appendChild(a_consult);
    ul_options.appendChild(li_consult);

    // FOOTER
    const div_footer = document.createElement("div");
    div_footer.classList.add("modal-footer");

    const a_logout = document.createElement("a");
    a_logout.classList.add("btn");
    a_logout.classList.add("btn-secondary");
    a_logout.href = "../templates/login.html";
    a_logout.innerText = "Logout";

    div_footer.appendChild(a_logout);

    // GROUP ALL
    div_body.appendChild(ul_options);

    div_content.appendChild(div_header);    
    div_content.appendChild(div_body);
    div_content.appendChild(div_footer);
    
    div_dialog.appendChild(div_content);

    menu.appendChild(div_dialog);

}
insert_modal();