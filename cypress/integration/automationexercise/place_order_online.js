/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';

// This function will help us generate a random email
const generateRandomEmail = () => {
  const timestamp = new Date().getTime();
  return `test-${timestamp}@example.com`;
};

describe('Process order online', () => {
  let testData;
  const productPage = new ProductPage();
  const homePage = new HomePage();

  beforeEach(function () {
    cy.visit(Cypress.env('url'));
    cy.fixture('get_data').then((data) => {
      testData = data;
    
    }); 
  });

  it('Add product to cart', function () {
   
    // Scroll and select the product
    cy.scrollTo(0, 4500);
    productPage.getviewProduct().click();

    // Verify URL contains /product_details
    cy.url().should('include', testData.productURL);

    // Set product quantity and add to cart
    productPage.getQuantity().clear().type(testData.quantity);
    productPage.getBtnAdd().click();

    // Validate that the Added text is present
    productPage.getConfirmationModal().should('have.text', testData.addedText);
    productPage.getBtnContinueShopping().click();

    // View cart and proceed to login
    productPage.getViewCart().click();
    productPage.getProceed().click();
    productPage.getlinkLogin().click();
  });

  it('Process payment', function () {

    // Navigate to signup/login page
    homePage.getSignupLogin().click();

    // Generate a random email
    const userEmail = generateRandomEmail();
    Cypress.env('userEmail', userEmail);

    // Fill signup form
    homePage.getNameUser().type(Cypress.env('user_name'));
    homePage.getEmail().type(userEmail);
    homePage.getBtnSignupEmail().click();

    // Verify URL contains signup
    cy.url().should('include', testData.signupURL);

    // Fill account creation form
    homePage.getPassword().type(Cypress.env('password'));
    homePage.getFirstName().type(testData.FName);
    homePage.getLastName().type(testData.LName);
    homePage.getAddress().type(testData.Address);
    homePage.getState().type(testData.State);
    homePage.getCity().type(testData.City);
    homePage.getZipCode().type(testData.ZipCode);
    homePage.getMobileNumber().type(testData.MobileNumber);
    homePage.getBtnCreateAccount().click();

    // Verify account creation and navigate to cart
    homePage.getSuccessText().should('have.text', testData.accountCreated);
    homePage.getContinueBtn().click();
    homePage.getCartLink().click();

    // Process order payment
    homePage.getProceedCheckout().click();
    homePage.getComment().type(testData.TestComment, { force: true });
    homePage.getplaceOrderBtn().click();
    homePage.getNameOncard().type(testData.FName);
    homePage.getCarNumber().type(testData.CarNumber);
    homePage.getCVC().type(testData.CVC);
    homePage.getExpiryMonth().type(testData.Month);
    homePage.getgetExpiryYear().type(testData.Year);
    homePage.getPayBtn().click();
    homePage.getOrderPlacedText().should('have.text', testData.SuccessfulPayment);

    // Navigate to Logout
    homePage.getContBtn().click();
    homePage.getLogoutLink().click();
  });

  it('Contact request', function () {

    // Navigate to Login
    cy.visit(Cypress.env('urlLogin'));
    const storedUserEmail = Cypress.env('userEmail');
    homePage.getLoginEmail().type(storedUserEmail);
    homePage.getLoginEmail().type(Cypress.env('password'));
    homePage.getLoginPassword().click();

    // Navigate to contact us
    homePage.getContactUs().click();

    // Fill contact form
    homePage.getContactName().type(testData.FName);
    homePage.getContactEmail().type(storedUserEmail);
    homePage.getContactSubject().type(testData.TestComment);
    homePage.getContactMessage().type(testData.TestComment);
    homePage.getbtnSummit().click();
    homePage.getStatus().should('have.text', testData.SubmittedText);

    // Logout
    homePage.getLogoutSession().click();
  });
});
