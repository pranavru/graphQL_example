const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

// const resolvers = {
//     Query: {
//         info: () => `This is the API of a Hackernews Clone`,
//         feed: (root, args, context, info) => {
//             return context.prisma.links()
//         },
//         // ind_link: (root, args, context, info) => {
//         //     return context.prisma.links()
//         // }
//     },
//     Mutation: {
//         post: (root, args, context) => {
//             return context.prisma.createLink({
//                 url: args.url,
//                 description: args.description,
//             })
//         },
//         // update: (root, args, context) => {
//         //     return context.prisma.updateLink({
//         //         url: args.url,
//         //         description: args.description,
//         //     }, { id: args.id })
//         // },
//     }
// }

const resolvers = {
    Query,
    Mutation,
    User,
    Link
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))