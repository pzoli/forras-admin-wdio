import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#j_username');
    }

    public get inputPassword () {
        return $('#j_password');
    }

    public get btnSubmit () {
        return $('#submit');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async logout() {
        return super.open('logout.xhtml')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('user/clients.xhtml');
    }
}

export default new LoginPage();
