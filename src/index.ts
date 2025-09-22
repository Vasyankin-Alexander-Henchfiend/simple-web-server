import 'dotenv/config';
import express, { Request, Response } from 'express';
// Слушаем 3001 порт
const { PORT = 3001 } = process.env;

const app = express();

app.get('/', (req: Request, res: Response) => {})

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
}) 