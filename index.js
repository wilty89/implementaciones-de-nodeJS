const app = require("./src/app");
const port = process.env.PORT || 5000;

try {
  async function init() {
    await app;
  }
  init();

} catch (error) {
  console.error(error)
}
app.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log("Ejecutandose en el puerto ", port);
});
