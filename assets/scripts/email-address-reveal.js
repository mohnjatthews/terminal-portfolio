function toggleEmail() {
    var o = "john@mohnjatthews.com";
    document.getElementById("email-address-reveal").innerHTML != '<a href="mailto:' + o + '">' + o + "</a>" ? document.getElementById("email-address-reveal").innerHTML = '<a href="mailto:' + o + '">' + o + "</a>" : document.getElementById("email-address-reveal").innerHTML = "&nbsp;"
}
function changeColorScheme(o) {
    var e;
    switch (o) {
        case "basic":
            console.log("here!"), e = ".console-user,body{color:#000}body{background-color:#fff}.console-os{color:grey}.console-pwd{color:#000}";
            break;
        case "man":
            e = "body{color:#6195e8;background-color:#ff0}.console-user{color:red}.console-os{color:#00f}.console-pwd{color:#fff}";
            break;
        default:
            e = "body{color:#36ed39;background-color:#1c1c1c}.console-user{color:#2c82b7}.console-os{color:#209b23}.console-pwd{color:#d1bc1d}"
    }
    console.log("there!"), document.getElementById("color-scheme-css").innerHTML = e
}