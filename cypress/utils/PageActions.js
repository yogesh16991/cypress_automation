

export class PageActions {

    enterTextInto(ele, text) {
        cy.get(ele).type(text);
    }

    clickButton(ele) {
        cy.get(ele).click();
    }

    assertElementExist(ele){
        cy.get(ele).should('exist');
    }

    assertElementText(ele,arr){
        cy.get(ele).should($message => {
            expect($message.text()).to.be.oneOf(arr);
        })
    }

    openPageUrl(url){
        cy.visit(url);
    }

    clickButtonWithTimeout(ele, delay){
        cy.get(ele, { timeout: delay }).click();
    }
}
