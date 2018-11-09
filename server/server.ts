import * as Express  from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const PORT = process.env.PORT || 8081;

const app = Express();
app.use(Express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/hello', (req, res) => {
  const { greeting } = req.body;
  const hello = greeting.startsWith('Hello World') ? greeting : 'Hello World';
  const helloNew: string = `${hello}!`;
  return res.status(200).send(helloNew);
});

app.listen(PORT, (err: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  } else {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${PORT}`);
  }
});
export default app;
