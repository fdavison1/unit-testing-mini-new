import { add } from '../utils/functions'

//add function
describe('add function', ()=> {
    
    test ('add integers', () => {
        expect(add(1, 2)).toBe(3)
    })
    
    test ('add string and number?', () => {
        expect(add('1', 2)).toBe(3)
    })
    
    test('NaN if passed non-numbers', ()=> {
        expect(add('fred', 2)).toBe(NaN)
    })
})