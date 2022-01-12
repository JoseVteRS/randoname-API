require('dotenv').config();
const Fastify = require("fastify")

const randomName = require('./useCases/randomName');

const PORT = process.env.PORT || 3000;

// Declare route

async function build() {
    const fastify = Fastify();
    await fastify.register(require('middie'), {
        hook: 'onRequest'
    })

    fastify.use(require('cors')())
    fastify.use(require('morgan')(`:method :url port=${PORT} :status :res[content-length] - :response-time ms`));

    // Routes
    fastify.get('/api/v1/name', (req, res) => {
        const value = randomName.randomName();
        return { value, PORT }
    })


    return fastify;
}


build()
    .then(fastify => fastify.listen(PORT, (err) => {
        if (err) {
            fastify.log.error(error)
            process.exit(1);
        }
        console.log(`Server is running in port: ${PORT}`)
    }))
    .catch(console.log)
