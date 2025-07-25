window.addEventListener("load", () => {
    const router = new Navigo('/');

    router.on({
        '/index.html': () => {
            $("body").load("assets/home.html");
        },
        '/': () => {
            $("body").load("assets/home.html");
        },
        '/create': () => {
            $("body").load("assets/create.html");
        }, 
        '/sheet': () => {
            $("body").load("assets/sheet.html");
        }, 
    });

    router.notFound(() => {
        router.navigate("/");
    });
});