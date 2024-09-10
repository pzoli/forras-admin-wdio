import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import subjectsPage from '../pageobjects/subjects.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        let username : string = process.env.username?process.env.username:''
        let passwd : string = process.env.passwd?process.env.passwd:''
        await LoginPage.login(username, passwd)
        await expect(SecurePage.kliensTable).toBeExisting()
        await expect(SecurePage.kliensTable).toHaveText(
            expect.stringContaining('kliens lista'))
        await expect(SecurePage.kliensTable).toMatchSnapshot('kliensTable')
    })
})
describe('Manage subject', () => {
    it('Add, filter, delete subject', async() => {
        await subjectsPage.open()
        await subjectsPage.addSubject("test-subj")
        await subjectsPage.filterSubject("test-subj")
        await browser.pause(500)

        await browser.saveScreenshot('./screenshot.png')

        await expect(subjectsPage.firstRowSubjectNameCol).toHaveText(
            expect.stringContaining('test-subj')
        )
        await expect(await subjectsPage.subjectTableRow(0)).toBeExisting()
        await subjectsPage.deleteSubject()
    })

    it('should logout', async () => {
        await LoginPage.logout()
    })
})

