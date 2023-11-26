 class SalarySlave extends Person{
    constructor(name,company,seniority){
        super(name);
        this.company=company;
        this.seniority = seniority;
    }

    saySenority(){
        console.log(`i have worked for the company for ${this.seniority} years`);
    }

    growOlder(){
        this.age++;
        this.seniority++;
        console.log(`one year has passed, i'm now ${this.age} and i have worked for ${this.seniority} years `)
    }
}



