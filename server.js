/* // CommonJs
const fastify = require('fastify')({
    logger: true
}) */

// ESM
import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
  })

const PORT = 5005

fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando - gui!')
})

fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})