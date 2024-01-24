const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article title 2',
            shortDescription: 'Short description of the article 2...',
            content: 'Main content of the article 2',
            publishedDate: new Date('2022-02-04'),
            author: 'Jane Smith'
        },
        {
            id: '3',
            title: 'Article title 3',
            shortDescription: 'Short description of the article 3...',
            content: 'Main content of the article 3',
            publishedDate: new Date('2022-02-05'),
            author: 'Alice Johnson'
        },
    ]
};


export default initialState;