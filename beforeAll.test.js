// Comment the following line out and line 9 in to check behavior inside a describe block
beforeAll(async () => new Promise((resolve, reject) => {}));

test('test case', async () => {
    console.log('out of describe block--before');
});

describe('beforeAll hooks inside a describe block', () => {
    // beforeAll(async () => new Promise((resolve, reject) => {}));
    it('should not run here either', () => {
        console.log('in describe block--should not run');
    });

    it('another test that should fail as well', () => {
        console.log('second test inside describe');
    });
});

test('out of describe block', () => {
    console.log('outside of describe block--after');
});
