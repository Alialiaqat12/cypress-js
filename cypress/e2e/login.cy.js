import LoginPage from '../pages/loginpage'

/*describe('Login Tests', () => {

  const testData = [
    {
      user: 'tomsmith',
      pass: 'SuperSecretPassword!',
      message: 'You logged into a secure area!'
    },
    {
      user: 'wronguser',
      pass: 'SuperSecretPassword!',
      message: 'Your username is invalid!'
    },
    {
      user: 'tomsmith',
      pass: 'wrongpassword',
      message: 'Your password is invalid!'
    }
  ]

  testData.forEach((data) => {
    it(`Login test for ${data.user}`, () => {
      LoginPage.visit()
      LoginPage.login(data.user, data.pass)
      cy.contains(data.message).should('be.visible')
    })
  })

})*/


/*describe('Login Tests', () => {

  let data

  before(() => {
    cy.fixture('loginData').then((loginData) => {
      data = loginData
    })
  })

  it('Valid Login', () => {
    LoginPage.visit()
    LoginPage.login(data.validUser.username, data.validUser.password)
    cy.contains('You logged into a secure area!').should('be.visible')
  })

  it('Invalid Login', () => {
    LoginPage.visit()
    LoginPage.login(data.invalidUser.username, data.invalidUser.password)
    cy.contains('Your username is invalid!').should('be.visible')
  })

})*/
describe('Login Tests', () => {

  it('Valid Login', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.contains('You logged into a secure area!').should('be.visible')
  })

})