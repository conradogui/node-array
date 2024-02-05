import fastify from 'fastify';

const PORT = 5005;

const startServer = async () => {
  const server = fastify({ logger: false });

  server.get('/', async (request, reply) => {
    return 'Servidor rodando muito bem';
  });

  try {
    const address = await server.listen(PORT);
    console.log(`Servidor está rodando em: ${address}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();