const { GraphQLServer } = require('graphql-yoga')

let links = [
    {
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    },
    {
        id: 'link-1',
        url: 'www.yahoo.com',
        description: 'Fullstack tutorial for GraphQL'
    },
    {
        id: 'link-2',
        url: 'www.google.com',
        description: 'Fullstack tutorial for GraphQL'
    }
]

let idCount = links.length;

// 2
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
        // link: (ID) => links(id = ID)
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link);
            return link;
        },
        // updateLink: (parent, args) => {
        //     let linkUpdated = ;
        //     linkUpdated.description = args.description,
        //     linkUpdated.url = args.url
        //     return linkUpdated;
        // },
    },
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))