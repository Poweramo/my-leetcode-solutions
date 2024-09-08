/**
 * @param {string} path
 * @return {string}
 */

function simplifyPath(path) {
    const directories = path.split("/");
    const pathStack = [];
    const oneDotRegex = /(?<!.)\.(?!.)/i;
    const twoDotsRegex = /(?<!.)((?<!\.)\.{2,2}(?!\.))(?!.)/i;

    for (let i = 0; i < directories.length; i++) {
        let directory = directories[i];
        if (directory === "") continue;

        if (directory.match(twoDotsRegex)) {
            pathStack.pop();
            directory = directory.replace("..", "");
            continue;
        }

        if (directory.match(oneDotRegex)) continue;
        pathStack.push(directory);
    }

    return "/" + pathStack.join("/");
}