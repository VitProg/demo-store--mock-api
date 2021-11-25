import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { swaggerDaskCss } from './swagger/swagger-dark.css'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Demo Store API')
    .setVersion('0.1 alpha')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document, {
    customCss: swaggerDaskCss,
  });

  await app.listen(3000);
}
bootstrap();
