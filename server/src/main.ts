import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { TransformInterceptor } from './interceptors/transform.interceptor'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableCors()
  app.setGlobalPrefix('/api')
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000)
}
bootstrap()
