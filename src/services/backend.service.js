

export default function (url, timeout = 2000) {
    return Promise.race([
        
        new Promise((sx, reject) =>
            setTimeout(() => sx(fetch(url)), timeout)
          
        )
    ]);
}