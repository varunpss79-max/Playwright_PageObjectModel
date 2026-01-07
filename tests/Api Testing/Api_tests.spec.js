import { test, expect } from '@playwright/test';


test ('Api DELETE Request', async ({request}) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/5');
    expect(response.status()).toBe(200);
   
})

test ('API PUT Request', async({request}) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data: {
            "title": "vanu",
            "body": "you are the lazy person in the world"
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('vanu');
    console.log(await response.json());
})

// test ('Api GET Request', async ({request}) => {

//     const response = await request.get('https://jsonplaceholder.typicode.com/posts');
//     expect(response.status()).toBe(200);
//     const text = await response.text();
//     expect(text).toContain('Ervin Howell');
//     console.log(await response.json());
// })

test ('API POST Request', async({request}) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts',{
        data: {
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
    });
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('nesciunt quas odio');
    console.log(await response.json());
})

test ('Api GET Request', async ({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Ervin Howell');
    console.log(await response.json());
})

