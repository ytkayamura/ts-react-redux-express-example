import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as ResIF from '../common/response-if';

const PORT: number = Number(process.env.PORT) || 8081;

const app: express.Express = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/hello', (req: express.Request, res: express.Response) => {
  const { greeting } = req.body;
  const hello: string = greeting.startsWith('Hello World') ? greeting : 'Hello World';
  const resp: ResIF.HelloWorld = { hello: `${hello}!` };
  return res.status(200).send(resp);
});

app.listen(PORT, (err: Error): void => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  } else {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${PORT}`);
  }
});
export default app;
