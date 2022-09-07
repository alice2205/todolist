function sortArr(arr) {
    for (let j = 0; j < arr.length; j++) {
        let max = -Infinity;
        let index = null;

        for(let i = 0; i<arr.length - j; i++) {
            if(arr[i]>max) {
                max=arr[i]
                index = i
            }
        }
        let buff = arr[arr.length - 1 - j]
        arr[arr.length - 1 - j] = max
        arr[index] = buff
    }
}

function verification(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]>arr[i+1]) {
            return console.log('verification failed')
        }
    }
    console.log('verification passed')
}

function main() {
    let n = 10;
    const array = Array(n).fill(null).map(()=> Math.floor(Math.random() * 10000))

    let time = performance.now();

    sortArr(array)

    time = performance.now() - time;

    console.log('Время выполнения = ', time);

    verification(array)
}

main();

