window.addEventListener("load", () => {
    const router = new Navigo('/', false);

    router.on("/", (match) => {
            show("home")
        })
        .on("/index.html", (match) => {
            show("home")
        })
        .on("/sheet", (match) => {
            show("sheet")
        })
        .on("/create", (match) => {
            show("create")
        })
        .on("/(.*)", () => {
            router.navigate("/");
        })
        .resolve();

    show("home");
});

function show(loc) {
    $("#pagecontent").load("assets/" + loc + ".html"); 
}