module.exports = (api) => {
    api.get("/editarProduto", (res, data) => {
      try {

      } catch (error) {
        data.send({ message:"servidor nao encontrou ou deu um erro, tente novamente mais tarde.",  status: 404,  }).status(404);
      }
    });
}