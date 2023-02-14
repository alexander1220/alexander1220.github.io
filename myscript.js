var link = document.getElementById("githubfetcher").innerHTML;

fetch('https://raw.githubusercontent.com/alexander1220/alexander1220/main/README.md').then(function (response) {
    return response.text();
}).then(function (html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    link = doc.body.innerHTML;
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});