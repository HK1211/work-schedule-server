import dotenv from 'dotenv';
import App from './app';

dotenv.config(); // .env 파일을 읽어들임
const port = parseInt(process.env.PORT || '3000', 10);

const server = new App()
  .Start(port)
  .then((_port: number) => console.log(`Server running on port ${_port.toString()}`))
  .catch((error: Error) => {
    console.log(error);
    process.exit(1);
  });

export default server;
