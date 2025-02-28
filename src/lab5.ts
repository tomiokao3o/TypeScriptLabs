function getCurrentDate(): void {
    console.log(Date.now());
}

window.addEventListener('load', () => {
    setTimeout(getCurrentDate, 10000);
});




function createLogger(message: string): () => void {
    return function() {
        console.log(message);
    };
}

const logHello = createLogger("Hello, world!");
const logGoodbye = createLogger("Goodbye, world!");

logHello();
logGoodbye();