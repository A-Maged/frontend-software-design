export async function fakeAsync<T>(milliseconds: number = 1000, data: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, milliseconds);
    });
}
