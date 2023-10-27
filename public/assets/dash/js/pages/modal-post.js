document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.querySelector("#formEntradas");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const titulo = form.titulo.value;
      const categoria = form.categoria.value;
      const data = form.data.value;
      const valor = form.valor.value;
      const descricao = form.descricao.value;
  
      const formData = { titulo, categoria, data, valor, descricao }
  
      try {
        const response = await axios.post('http://localhost:3001/api/registros/entradas', formData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
  
    });
  
  });