let pattern = "https://geolocation.drift-labs.workers.dev/*";

function redirect(requestDetails) {
    return {
        redirectUrl: "https://raw.githubusercontent.com/skynetcap/drift-extension/main/country"
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern]},
    ["blocking"]
);
