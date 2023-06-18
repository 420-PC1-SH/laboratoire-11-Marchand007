const processor = require('./processor.js');

describe("transmission processor", function ()
{

    test("takes a string returns an object", function ()
    {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });
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
    expect(typeof result.id).toEqual("Number");
});