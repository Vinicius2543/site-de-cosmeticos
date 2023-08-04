const toggleBtn = document.getElementById("toggle");
        const menu = document.getElementById("menu");

        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        const products = [
            {
                name: 'Base Líquida Matte',
                price: 39.90,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Paleta de Sombras Neutras',
                price: 45.50,
                image: 'https://source.unsplash.com/700x500/?eyeshadow'
            },
            {
                name: 'Batom Cremoso',
                price: 19.90,
                image: 'https://source.unsplash.com/700x500/?lipstick'
            },
            {
                name: 'Pó Compacto Anti-Brilho',
                price: 29.90,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Máscara de Cílios Alongadora',
                price: 24.50,
                image: 'https://source.unsplash.com/700x500/?mascara'
            },
            {
                name: 'Blush em Pó',
                price: 18.00,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Kit de Pincéis Profissionais',
                price: 79.90,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Corretivo Líquido',
                price: 22.90,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Batom Líquido Matte',
                price: 27.50,
                image: 'https://source.unsplash.com/700x500/?lipstick'
            },
            {
                name: 'Hidratante Facial',
                price: 34.90,
                image: 'https://source.unsplash.com/700x500/?skincare'
            },
            {
                name: 'Pó Bronzeador',
                price: 25.00,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Delineador Líquido',
                price: 19.90,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Creme para Mãos Hidratante',
                price: 15.50,
                image: 'https://source.unsplash.com/700x500/?cosmetics'
            },
            {
                name: 'Sombra em Creme',
                price: 21.00,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Perfume Floral Elegante',
                price: 89.90,
                image: 'https://source.unsplash.com/700x500/?perfume'
            },
            {
                name: 'Gloss Labial Brilhante',
                price: 16.50,
                image: 'https://source.unsplash.com/700x500/?lipstick'
            },
            {
                name: 'Creme Noturno Anti-Idade',
                price: 54.90,
                image: 'https://source.unsplash.com/700x500/?skincare'
            },
            {
                name: 'Pó Iluminador',
                price: 28.00,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Kit de Esponjas para Maquiagem',
                price: 19.90,
                image: 'https://source.unsplash.com/700x500/?makeup'
            },
            {
                name: 'Removedor de Maquiagem Suave',
                price: 12.50,
                image: 'https://source.unsplash.com/700x500/?skincare'
            }
        ];

        // Função para gerar os produtos dinamicamente
        function generateProducts() {
            const productsContainer = document.getElementById('products-container');

            products.forEach(product => {
                const productHTML = `
                <div class="col-md-4 mb-4">
                <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est sed turpis eleifend iaculis.</p>
                <p class="card-text"><strong>R$ ${product.price.toFixed(2)}</strong></p>
                <a href="#" class="btn btn-primary">Comprar Agora</a>
              </div>
            </div>
          </div>
        `;

                productsContainer.innerHTML += productHTML;
            });
        }

        // Chamada da função para gerar os produtos
        generateProducts();