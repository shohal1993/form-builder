// form-builder.js

class FormBuilder {
    constructor() {
        this.forms = [];
    }

    createForm(title) {
        const form = {
            title: title,
            fields: [],
            conditionalLogic: {},
        };
        this.forms.push(form);
        this.saveToLocalStorage();
    }

    addField(formIndex, field) {
        this.forms[formIndex].fields.push(field);
        this.saveToLocalStorage();
    }

    addConditionalLogic(formIndex, fieldIndex, logic) {
        const form = this.forms[formIndex];
        if (!form.conditionalLogic[fieldIndex]) {
            form.conditionalLogic[fieldIndex] = [];
        }
        form.conditionalLogic[fieldIndex].push(logic);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('formBuilderData', JSON.stringify(this.forms));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('formBuilderData');
        if (data) {
            this.forms = JSON.parse(data);
        }
    }

    applyTheme(theme) {
        document.body.className = theme;
    }
}

const formBuilder = new FormBuilder();

// Initialize form builder
formBuilder.loadFromLocalStorage();