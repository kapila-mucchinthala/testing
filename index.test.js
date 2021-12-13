const convertDigitalStorages = require('./index');

test('converts 1byte to kb',()=>{
    expect(convertDigitalStorages(1)).toBe(0.001);
});

test('converts 40kb to mb',()=>{
    expect(convertDigitalStorages(40)).toBe(0.04);
});

