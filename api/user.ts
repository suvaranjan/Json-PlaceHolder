type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
  

export const getUser = async (id : number) => {
    await wait(1000);
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => data as User );
};

export const getUsers = async () => {
    await wait(1000);
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) => data as User[] );
};

export const getUserPosts = async (userId : number) => {
    await wait(2000); 
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => data as Post[]);
};


const wait = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
