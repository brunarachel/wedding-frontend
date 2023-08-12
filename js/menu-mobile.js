class MenuMobile extends HTMLElement {
    constructor() {
        super()
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = this.menu()
        shadow.appendChild(this.styles())
    }

    menu() {
        const menu = `
            <div class="mobile menu-mobile">
                <a href="../index.html" class="logo">B&G</a>
                <nav class="nav">
                    <input type="checkbox" id="checkbox" class="checkbox"/>
                    <label for="checkbox" class="label-menu">Menu<span class="hamburger"></span></label>
                    <ul class="menu">
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../pages/mensagens-noivos.html">Mensagens aos noivos</a></li>
                    <li><a href="../pages/dicas.html">DressCode</a></li>
                    <li><a href="../pages/padrinhos-madrinhas.html">Padrinhos e Madrinhas</a></li>
                    <li><a href="../pages/localizacao.html">Dicas de Hospedagem</a></li>
                    <li><a href="../pages/cerimonia.html">Cerimônia</a></li>
                    <li><a href="../pages/festa.html">Festa</a></li>
                    <li><a href="../pages/loja.html">Lista de Presentes</a></li>
                    <li><a href="../pages/confirmar-presenca.html">Confirmar Presença</a></li>
                    </ul>
                </nav>
            </div>
        `
    return menu
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            font-family: 'Quicksand', sans-serif;
        }
        .web {
            display: none;
        }
        .mobile {
            display: unset;
        }
        a {
            color: #8d5e32;
            font-size: 20px;
            line-height: 70px;
            font-weight: 700;
            text-decoration: none;
        }
        .menu-mobile {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #FFF;
            padding:1rem;
        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .menu {
            display:block;
            position: absolute;
            gap: 0.5rem;
            list-style: none;
            top: 4.6875rem;
            background: #FFF;
            left: 0;
            text-align: center;
            width: 100%;
            height: 0;
            visibility: hidden;
            overflow-y: hidden;
            z-index: 1000;
            transition: 0.5s;
        }
        menu a {
            display:block;
            padding: 1rem 0;
            margin-inline: 1rem;
            border-bottom: 0.0625rem solid rgb(0, 0, 0, 0.16);
            border-radius: 0;
        }
        menu a:hover {
            background: hsl(0, 0%, 90%);
        }
        .label-menu {
            font-weight: 700;
        }
        .label-menu, .checkbox {
            display:none;
        }    
        .checkbox:checked ~ .menu {
            height: calc(100vh - 4.6875rem);
            visibility: visible;
            overflow-y: auto;
        }
        .label-menu {
            display:flex;
            align-items: center;
            gap:0.5rem;
            color: #8d5e32;
            padding-block: 1rem;
            cursor: pointer;
        }
        .hamburger {
            border-top: 0.125rem solid;
            width: 1.25rem;
        }
        .hamburger::before, .hamburger::after {
            content: " ";
            display:block;
            width: 1.25rem;
            height: 0.125rem;
            background: currentColor;
            margin-top: 0.3125rem;
            position: relative;
            transition: 0.3s;
        }
        .checkbox:checked ~ .label-menu .hamburger {
            border-top-color: transparent;
        }
        .checkbox:checked ~ .label-menu .hamburger::before {
            transform: rotate(135deg);
        }
        .checkbox:checked ~ .label-menu .hamburger::after {
            transform: rotate(-135deg);
            top: -0.4375rem;
        }
        @media(min-width: 1200px) {
            .menu-mobile {
                display: none;
            }
        }
        `
        return style
    }
}

customElements.define('header-menu-mobile', MenuMobile)