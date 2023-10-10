const http = require('http');

for (let i = 0; i < 100; i++) {
    const element = i;
    setTimeout(() => {
        const request = http.request(`http://localhost:3000/test/${i}`);
        request.end();
    }, element);

}
