export function trimUrl(url: string) {
    try {
        const parsedURL = new URL(url);

        if (parsedURL.host) return parsedURL.host; else return url;
    } catch(err) {
        const typedErr = err as Error;

        if (typedErr.message = "Invalid URL") return url; else throw typedErr;
    }
}