class Person {
    #firstName;
    #lastName;
    // hidden properties defined by parameter arguments to class contructor (lazy way to handle defaults)
    constructor(firstName, lastName) {
        this.#firstName = firstName || "unknown";
        this.#lastName = lastName || "unknown";
        this.getFullName = () => this.#firstName + " " + this.#lastName;
        }
    get FirstName() {return this.#firstName;}
    set FirstName(value) {this.#firstName = value;}
    get LastName() {return this.#lastName;}
    set LastName(value) {this.#lastName = value;}
}

class Programmer extends Person {
    #knownLanguage;
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.#knownLanguage = new Set(["JavaScript"]);
        this.addLanguage = (language) => this.#knownLanguage.add(language);
        this.deleteLanguage = (language) => this.#knownLanguage.delete(language);
        this.hasLanguage = (language) => this.#knownLanguage.has(language);
        }
    get KnownLanguage() {return this.#knownLanguage;}
    set KnownLanguage(knownLanguage) {this.#knownLanguage = knownLanguage;}
    showLanguages() {
        let knownLanguages = "";
        for (let knownLanguage of this.#knownLanguage) {
            knownLanguages +=  " " + knownLanguage;
        }
        const fullName = this.getFullName();
        console.log(`${fullName} speaks${knownLanguages}`);
    }
}

// ourProgrammer is immutable (const), their characteristics however are mutable
const ourProgrammer = new Programmer("One", "Person");
ourProgrammer.showLanguages();
ourProgrammer.FirstName = "A";
ourProgrammer.LastName = "Polyglot";
ourProgrammer.KnownLanguage = new Set(["C#", "JavaScript", "Scala"]);
ourProgrammer.addLanguage("Go");
ourProgrammer.deleteLanguage("C#");
ourProgrammer.showLanguages();