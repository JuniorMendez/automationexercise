class ProductPage
{

getviewProduct()
{
    return cy.get('[href="/product_details/28"]')
}

getQuantity()
{
    return cy.get('#quantity')
}

getBtnAdd()
{
    return cy.contains('Add to cart')
}

getConfirmationModal()
{
    return cy.get('.modal-title')
}

getBtnContinueShopping()
{
    return cy.get('.modal-footer > .btn')
}

getViewCart()
{
    return cy.get('.shop-menu > .nav > :nth-child(3) > a')
}

getProceed() 
{
    return cy.get('.col-sm-6 > .btn')
}

getlinkLogin()
{
    return cy.get('.modal-body > :nth-child(2) > a > u')
}

}
export default ProductPage;
