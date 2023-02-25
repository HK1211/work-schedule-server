// express와 라우팅에 필요한 객체를 불러옵니다.
import type { Express, Request, Response } from 'express';
import { Router } from 'express';

// cors 미들웨어를 불러옵니다.
import cors from 'cors';

// api 라우팅을 위한 라우터 객체를 불러옵니다.
import api from './api';

// express 애플리케이션에 라우팅을 설정하는 함수입니다.
const AppRouter = (server: Express) => {
  // express 라우터 객체를 생성합니다.
  const router = Router();

  // 라우터 객체의 첫 번째 미들웨어로 cors 미들웨어를 추가합니다.
  server.use(cors());

  // GET 요청을 처리하는 라우트 핸들러를 추가합니다.
  router.get('/', (req: Request, res: Response) => {
    res.json({
      message: `hello ccgolftour homepage`,
    });
  });

  // api 라우트를 /api 경로 하위 라우트로 설정합니다.
  router.use('/api', api);

  // express 애플리케이션에 라우터 객체를 추가합니다.
  server.use('/', router);
};

// AppRouter 함수를 외부에서 사용할 수 있도록 내보냅니다.
export default AppRouter;
