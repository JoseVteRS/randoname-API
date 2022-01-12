const randomName = require('../useCases/randomName');

describe('RandomName', ()=> {
    it('should return a random name', () => {
        const generateRandomName = randomName.randomName();

        expect(typeof generateRandomName).toBe('string');
        expect(generateRandomName.length === 5).toEqual(true);
        expect(generateRandomName).not.toBe(null);
    })
})