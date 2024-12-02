function helper() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    }).then(done);
}

function done() {
    console.log('Hi there');
}

async function main() {
    await helper();
    console.log('After the promise');
}

main();