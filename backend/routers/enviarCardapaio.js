module.exports = (api) => {
    const bodyParser = require('body-parser')
    api.use(bodyParser)
    api.post("/enviar", (res, data) => {
        try {
            const { img, title, message } = res.body
            if (!img && !title && !message) {
                data.send({ message: "Os campo é obrigatório e não pode ficar vazio.", status: 400 }).status(400)
            }
            data.send({ message: "Os dados foram recebidos com sucesso.", status: 200 }).status(200)
        } catch (error) {
            data.send({ message: "servidor nao encontrou ou deu um erro, tente novamente mais tarde.", status: 404 }).status(404)
        }
    });
}