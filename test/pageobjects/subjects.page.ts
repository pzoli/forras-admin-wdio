import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubjectsPage extends Page {

    public get inputSubject () {
        return $('[id$=newSubjTitle]');
    }

    public get inputSubjectFilter () {
        return $('#subjForm\\:subjTable\\:titleCol\\:filter');
    }

    public get btnSubmit () {
        return $('[id$=addSubjectBtn]');
    }

    public get checkBoxAll() {
        return $('.ui-chkbox-all')
    }

    public get firstRowSubjectNameCol() {
        return $('#subjForm\\:subjTable_data > tr > td:nth-child(2)')
    }

    public get btnDelete () {
        return $('[id$=deleteSubjBtn]');
    }

    public async subjectTableRow(row:number) {
        return $(`[id^=subjForm\\:subjTable\\:${row}`)
    }

    public async filterSubject(subject:string) {
       await this.inputSubjectFilter.setValue(subject)
    }

    public async addSubject(subject:string) {
        await this.inputSubject.setValue(subject)
        await this.btnSubmit.click()
    }

    public async deleteSubject() {
        await this.checkBoxAll.click()
        await this.btnDelete.click()
    }

    public open () {
        return super.open('admin/subjects.xhtml');
    }
}

export default new SubjectsPage();
