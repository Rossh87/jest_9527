// Comment the following line out and comment line 9 in to see behavior inside a describe block
beforeEach(async () => new Promise((resolve, reject) => {}));

test('test case', async () => {
    console.log('out of describe block--before');
});

describe('beforeEach hooks inside a describe block', () => {
    // beforeEach(async () => new Promise((resolve, reject) => {}));

    it('should not run', () => {
        console.log('test inside');
    });

    it('another test that should fail as well', () => {
        console.log('second test inside describe');
    });
});

test('out of describe block', () => {
    console.log('outside of describe block--after');
});
