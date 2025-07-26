window.addEventListener("load", () => {
    const router = new Navigo('/');

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
    }
);

// make page conetent match loc.html
function show(loc) {
    $("#pagecontent").load("assets/" + loc + ".html");
}