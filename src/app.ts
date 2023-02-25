import express, { Express, NextFunction, Request, Response } from 'express';
import { urlencoded, json } from 'body-parser';

import AppRouter from './router';

// express 애플리케이션 생성
class App {
  private readonly httpServer: Express | undefined;

  constructor() {
    this.httpServer = express();

    // body-parser 미들웨어 등록
    this.httpServer.use(urlencoded({ extended: true }));
    this.httpServer.use(json());

    // 라우터 등록
    AppRouter(this.httpServer);

    // 에러 핸들링 미들웨어 등록
    this.httpServer.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ message: '서버 에러' });
    });
  }

  // 애플리케이션 실행 메소드
  public Start = async (port: number) => {
    const result: number = await new Promise((resolve, reject) => {
      if (!this.httpServer) {
        reject(new Error('Not found app server'));
        return;
      }

      this.httpServer
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: object) => reject(err));
    });
    return result;
  };
}

export default App;
