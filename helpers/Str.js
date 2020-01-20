exports.Str = {
    camel: (string) => {
        let str = this.Str.title(string);

        return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
    },
    slug: (string, separator = "-") => {
        return string.toLowerCase().replace(" ", separator);
    },
    title: (string) => {
        let splitStr = string.toLowerCase().split(" ");

        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = this.Str.ucUpper(splitStr[i]);
        }

        return splitStr.join(" ")
    },
    ucUpper: (string) => {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }
};