
describe("Word Chain Game", () => {

    let Chain = require("../Chain");

    let dictionary = ['CORD',"CARD"];
    let chain = new Chain( dictionary );

    it("throws an exception if both words are the same", () => {
        let first = "COLD";
        let final = "COLD";
        expect( () => { chain.make(first, final) } ).toThrowError("Words must be different");
    });

    it("throws an exception if the words are different lengths", () => {
        let first = "COLD";
        let final = "CORDS";
        expect( () => { chain.make(first, final) } ).toThrowError("Words must be same length");
    });

    it("finds the middle word in the chain of 3", () => {
        let first = "COLD";
        let final = "CARD";
        let output = chain.make( first, final );
        expect( output ).toEqual( ["COLD","CORD","CARD"] );
    });

    it("finds the middle words in the chain of 4", () => {
        let first = "COLD";
        let final = "WARD";
        let output = chain.make( first, final );
        console.log(output);
        expect( output ).toEqual( ["COLD","CORD","CARD","WARD"] );
    });
});


// describe("Word Chain Game", () => {
//     it("finds word chain", () => {
//         var first = "COLD";
//         var final = "WARM";
//         var chain = app.chain( first, final );
//         expect( chain ).toBe( ["COLD","CORD","CARD","WARD","WARM"] );
//     });
// });