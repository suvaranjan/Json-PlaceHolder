type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
  

export const getPosts = async () => {
    await wait(2000);
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => data as Post[]);
};

export const getSinglePost = async (id : string) => {
    await wait(2000); 
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => data as Post);
};

export const getPostComments = async (id : string) => {
    await wait(2000); 
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then((data) => data as Comment[]);
};

const wait = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
