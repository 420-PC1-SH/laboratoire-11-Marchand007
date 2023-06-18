const processor = require('./processor.js');

describe("transmission processor", function ()
{

    test("takes a string returns an object", function ()
    {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("returns -1 if '::' not found", function ()
    {
        let result = processor("9701<489584872710>");
        expect(result).toEqual(-1);
    });

    test("returns id in object", function ()
    {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    //requis 4 (L’id propriété doit être de type « Number »)
    test("id must be type << Number >>", function ()
    {
        let result = processor("9701::<489584872710>");
        expect(typeof result.id).toEqual("number");
    });

    //requis 5 (Requis : L’objet retourné devrait contenir une « rawData » comme propriété)
    test("return rawData in ojbect", function ()
    {
        let result = processor("9701::<489584872710>");
        expect(result.rawData).not.toEqual(undefined);
    });

    //requis 6 (Requis : Retourne -1 pour « rawData » si la portion de « rawData » de la transmission ne commence pas par < et finit par >)
    test("return -1 if rawData not begin with < and finish with >", function ()
    {
        let result1 = processor("9701::489584872710");
        expect(result1).toEqual(-1);
        let result2 = processor("9701::489584872710>");
        expect(result2).toEqual(-1);
        let result3 = processor("9701::<489584872710");
        expect(result3).toEqual(-1);
    });
});