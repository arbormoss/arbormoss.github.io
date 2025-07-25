window.addEventListener("load", () => {
    const router = new Navigo('/');

    router.on({
        '/index.html': () => {
            show("home")
        },
        '/': () => {
            show("home")
        },
        '/create': () => {
            show("create")
        }, 
        '/sheet': () => {
            show("sheet")
        }, 
    });

    router.notFound(() => {
        router.navigate("/");
    });
});

function show(loc) {
    $("#pagecontent").load("assets/" + loc + ".html"); 
}