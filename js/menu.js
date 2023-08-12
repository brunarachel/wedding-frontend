class Menu extends HTMLElement {
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
        <header class="web">
            <a href="../index.html" class="logo">B&G</a>
            <div class="menu">
                <nav class="dp-menu">
                    <ul>
                        <li><a href="#">Páginas</a>
                            <ul>
                                <li><a href="../pages/mensagens-noivos.html">Mensagens aos noivos</a></li>
                                <li><a href="../pages/dicas.html">DressCode</a></li>
                                <li><a href="../pages/padrinhos-madrinhas.html">Padrinhos e Madrinhas</a></li>
                            </ul>
                        </li>
                        <li><a href="../pages/localizacao.html">Localização</a>
                            <ul>
                                <li><a href="../pages/localizacao.html">Dicas de Hospedagem</a></li>
                                <li><a href="../pages/cerimonia.html">Cerimônia</a></li>
                                <li><a href="../pages/festa.html">Festa</a></li>
                            </ul>
                        </li>
                        <li><a href="../pages/loja.html">Presentes</a>
                            <ul>
                                <li><a href="../pages/loja.html">Lista de Presentes</a></li>
                            </ul>
                        </li>
                        <li><a href="../pages/confirmar-presenca.html">Confirmação de Presença</a>
                            <ul>
                                <li><a href="../pages/confirmar-presenca.html">Confirmar Presença</a></li>
                            </ul> 
                        </li> 
                    </ul>
                </nav>
            </div>
        </header>    
    `
    return menu
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
            *{
                margin: 0; padding: 0;
                box-sizing: border-box;
                text-decoration: none;
                font-family: 'Quicksand', sans-serif;
            }
            header{
                position: fixed;
                top: 0; left: 0; right: 0;
                background: #fff;
                box-shadow: 0 5px 10px rgba(0,0,0,.1);
                padding: 0px 7%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 1000;
            }
            header .logo{
                font-weight: bolder;
                font-size: 25px;
                color:#8d5e32;
                letter-spacing: 3px;
                text-decoration: none
             }
             .dp-menu ul{
                 list-style: none;
                 padding: 0;
             }
             .dp-menu ul li{
                 position: relative;
                 float: left;
             }
            .dp-menu ul li a{
                font-weight: bolder;
                font-size: 20px;
                padding: 20px;
                color: #8d5e32;
                display: block;
                text-decoration: none;
            }
            .dp-menu ul li a:hover{
                background: #a8803f;
                color:white
            }
            .dp-menu ul li ul{
                position: absolute;
                left: 0;
                width: 200px;
                background: #fff;
                display: none;
            }
            .dp-menu ul li ul li{
                width: 100%;
                border-top: 1px solid rgba(0,0,0,.1);
            }
            .dp-menu ul li ul li ul{
                left: 200px;
                top:0;
            }
            .dp-menu ul li:hover > ul{
                display: initial;
            }
            .web {
                display: none;
            }
            .mobile {
                display: unset;
            }
            @media(min-width: 1200px) {
                .web {
                    display: flex;
                }
                .mobile {
                    display: none;
                }
            }
        `
        return style
    }
}

customElements.define('header-menu', Menu)