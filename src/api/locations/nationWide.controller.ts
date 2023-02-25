import type { Request, Response } from 'express';

export const create = (req: Request, res: Response<{ ok: boolean; body: string }>) => {
  console.log(req);
  console.log(res);

  try {
    // do something asynchronous
  } catch (err) {
    // handle error
    console.error(err);
  }

  res.status(200).json({ ok: true, body: 'create' });
};

export const list = (req: Request, res: Response<{ ok: boolean; body: string }>) => {
  console.log(req);
  console.log(res);

  try {
    // do something asynchronous
  } catch (err) {
    // handle error
    console.error(err);
  }

  res.status(200).json({ ok: true, body: 'list' });
};
