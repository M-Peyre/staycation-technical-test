import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Activer CORS globalement
  app.enableCors({
    origin: '*', // 🔹 Autoriser toutes les origines (à éviter en production)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

  const args = process.argv.slice(2);
  const mocked = args.find((arg) => arg.startsWith('--mocked='));
  if (mocked) {
    const value = mocked.split('=')[1] === 'true';
    console.log(`Custom param: ${value}`);
    const configService = app.get(ConfigService);
    configService.setMocked(value);
  }
}
bootstrap();
