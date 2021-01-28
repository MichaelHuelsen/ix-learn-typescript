import fetch from "node-fetch";

interface MyApiResult<T> {
    data: T;
}

interface MyUser {
    id: number;
    email: string;
}

function isApiResult(obj: any): obj is MyApiResult<unknown> {
    return "data" in obj;
}

function isUser(obj: any): obj is MyUser {
    return obj && typeof obj.id === "number" && typeof obj.email === "string";
}

function assertUserApiResult(obj: any): asserts obj is MyApiResult<MyUser> {
    if (!isApiResult(obj) && isUser(obj.data)) {
        throw new Error("not a valid API result");
    }
}


// fetch data from API using async function
async function fetchUserAsync(id: number): Promise<MyApiResult<MyUser>> {
    // make use of string template literals using string interpolation
    const fetchUrl: string = `https://reqres.in/api/users/${id}`;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    // the await expression causes async code to wait until promise is settled (fulfilled or rejected)
    // when resumed, the value of the await expression is that of the fulfilled promise
    const response = await fetch(fetchUrl);
    const json: unknown = await response.json();
    assertUserApiResult(json);
    return json;
}

// fetch data from API using promise chain
function fetchUserPromiseChain(id: number): Promise<MyApiResult<MyUser>> {
    const fetchUrl: string = `https://reqres.in/api/users/${id}`;
    return fetch(fetchUrl)
        .then(response => response.json())
        .then(json => {
            assertUserApiResult(json);
            return json;
        })
}

// main code
function main() {
    let i: number = 1;
    let max: number = 6;
    while (i < max) {
        fetchUserAsync(i).then(result => console.log("from async function " + result.data.id + " " + result.data.email));
        i++;
    }

    i = 1;
    while (i < max) {
        fetchUserPromiseChain(i).then(result => console.log("from promise chain " + result.data.id + " " + result.data.email));
        i++;
    }

}

main();