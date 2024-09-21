type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

export const getTodos = async () => {
    await wait(1000);
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => response.json())
        .then((data) => data as Todo[] );
};

const wait = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};
