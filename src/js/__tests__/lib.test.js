import {cashBack} from "../lib.js";

test( 'calculate cash', () => {
    const usial = 200;
    const high = 5000;
    const special = 10000;
    const result = cashBack(usial, high, special);
    const expected = 3252;
    expect(result).toBe(expected);

} );