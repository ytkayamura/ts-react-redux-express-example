import * as Express from 'express';
const app = Express();

const PORT = process.env.PORT || 8081;
app.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello world!');
});

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening on port ${PORT}`);
});
export default app;
