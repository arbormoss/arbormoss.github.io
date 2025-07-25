window.addEventListener("load", () => {
    const router = new Navigo('/');

    router.on({
        '/index.html': () => {
            show("<div>home</div>")
        },
        '/': () => {
            show("<div>home</div>")
        },
        '/create': () => {
            show("<div>create</div>")
        }, 
        '/sheet': () => {
            show("<div>sheet</div>")
        }, 
    });

    router.notFound(() => {
        router.navigate("/");
    });
});

function show(loc) {
    document.getElementById("app").innerHTML = window.location.origin +  loc;
}