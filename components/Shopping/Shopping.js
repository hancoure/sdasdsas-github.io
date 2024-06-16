class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    handleCheckout() {
        alert('Proceeding to checkout');
        // Здесь можно добавить логику для обработки оформления заказа
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"> ✪ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} BYN</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name"> Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} BYN</td>
                    </tr>
                </table>
                <div class="shopping__buttons">
                    <button class="shopping__checkout" onclick="shoppingPage.handleCheckout();">Оформить</button>
                </div>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();