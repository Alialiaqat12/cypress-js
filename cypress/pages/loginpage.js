/*class LoginPage {

  username = '#username'
  password = '#password'
  loginBtn = 'button[type="submit"]'

  visit() {
  cy.visit('https://the-internet.herokuapp.com/login')
    }

  login(user, pass) {
    cy.get(this.username).type(user)
    cy.get(this.password).type(pass)
    cy.get(this.loginBtn).click()
  }
}

export default new LoginPage()*/
class LoginPage {

  username = '#username'
  password = '#password'
  loginBtn = 'button[type="submit"]'

  visit() {
    cy.visit('/login')
  }

  login(username, password) {
    cy.get(this.username).type(username)
    cy.get(this.password).type(password)
    cy.get(this.loginBtn).click()
  }
}

export default new LoginPage()