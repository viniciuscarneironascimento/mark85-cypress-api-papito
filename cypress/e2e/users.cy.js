describe('POST / users', () => {
  
  it.skip('register a new users (modo 1)', () => {
    cy.request({
      url: 'http://localhost:3333/users',
      method: 'POST',
      body: {
        name: 'Vinicius Nascimento3',
        email: 'teste3@teste.com',
        password: 'pwd123'
      },
      failOnStatusCode: false
    }).then(response =>{
      expect(response.status).to.eql(200)
    })
  })

  it('register a new users (modo 2)', () => {
    const user = {
      name: 'Vinicius Nascimento6',
      email: 'teste6@teste.com',
      password: 'pwd123'
    }

    //realiza a exclusão no banco para limpara a massa de teste
    cy.task('deleteUser', user.email)
     
    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response =>{
      expect(response.status).to.eql(200)
      cy.log(JSON.stringify(response.body))
    })
  });

  it.skip('register a new users (modo 3)', () => {
    const user = {
      name: 'Vinicius Nascimento6',
      email: 'teste6@teste.com',
      password: 'pwd123'
    }

    //realiza a exclusão no banco para limpara a massa de teste
    cy.task('deleteUser', user.email)
    
    //Com uso do plugin-api substitui "cy.request" por "cy.api"
    cy.api({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response =>{
      expect(response.status).to.eql(200)
      cy.log(JSON.stringify(response.body))
    })
  });


});