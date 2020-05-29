function getParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

let site = getParam("redirect");

switch (site) {
    case "discord":
        window.location.href = "https://discord.com/invite/BjEJFwh";
        break;
    case "npm":
        window.location.href = "https://www.npmjs.com/~leydihavuc";
        break;
    case "github":
        window.location.href = "https://github.com/barbarbar338";
        break;
}
