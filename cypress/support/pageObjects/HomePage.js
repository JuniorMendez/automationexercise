class HomePage
{

getSignupLogin()

{
    return cy.get('[href="/login"]')
    
}

getNameUser()
{
    return cy.get('[data-qa="signup-name"]')

}
getEmail()
{
  return  cy.get('[data-qa="signup-email"]')
}

getBtnSignupEmail()
{
   return cy.get('[data-qa="signup-button"]')
}
getPassword()
{
    return  cy.get('[data-qa="password"]')
}

getFirstName()
{
    return  cy.get('[data-qa="first_name"]')
}

getLastName()
{
    return  cy.get('[data-qa="last_name"]')
}

getAddress()
{
    return  cy.get('[data-qa="address"]')
}

getState()
{
    return  cy.get('[data-qa="state"]')
}

getCity()
{
    return  cy.get('[data-qa="city"]')
}

getZipCode()
{
    return  cy.get('[data-qa="zipcode"]')
}

getMobileNumber()
{
    return  cy.get('[data-qa="mobile_number"]')
}

getBtnCreateAccount()
{
    return  cy.get('[data-qa="create-account"]')
}

getSuccessText()
{
    return cy.get('b')
}

getContinueBtn()
{
    return cy.get('[data-qa="continue-button"]')
}

getCartLink()

{
    return cy.get('.shop-menu > .nav > :nth-child(3) > a')
}

getProceedCheckout()

{
    return cy.get('.col-sm-6 > .btn')

}

getComment()

{
    return cy.get('.form-control')

}

getplaceOrderBtn()

{
    return cy.get(':nth-child(7) > .btn')

}

getNameOncard()

{
    return cy.get('[data-qa="name-on-card"]')

}

getCarNumber()

{
    return cy.get('[data-qa="card-number"]')
    
}

getCVC()

{
    return cy.get('[data-qa="cvc"]')

}

getExpiryMonth()

{
    return cy.get('[data-qa="expiry-month"]')

}

getgetExpiryYear()

{
    return cy.get('[data-qa="expiry-year"]')

}

getPayBtn()

{
    return cy.get('[data-qa="pay-button"]')

}

getOrderPlacedText()
{
    return cy.get('[data-qa="order-placed"] > b')

}

getContBtn()
{
    return cy.get('[data-qa="continue-button"]')

}

getLogoutLink()
{
    return cy.get('.shop-menu > .nav > :nth-child(4) > a')

}


getLoginEmail()
{
    return cy.get('[data-qa="login-email"]')

}

getLoginPassword()
{
    return cy.get('[data-qa="login-password"]')

}

getLoginBtn()
{
    return cy.get('[data-qa="login-button"]')

}

getContactUs()

{
    return cy.get('[href="/contact_us"]')
    
}


getContactName()
{
    return cy.get('[data-qa="name"]')

}

getContactEmail()
{
    return cy.get('[data-qa="email"]')

}

getContactSubject()
{
    return cy.get('[data-qa="subject"]')

}

getContactMessage()
{
    return cy.get('[data-qa="message"]')

}

getbtnSummit()
{
    return cy.get('[data-qa="submit-button"]')

}


getStatus()
{
    return cy.get('.status')

}


getLogoutSession()

{
    return cy.get('.nav > :nth-child(4) > a')
    
}


}

export default HomePage;
