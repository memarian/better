import { TweetModule } from '@modules/tweet/tweet.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SwaggerModule } from '@nestjs/swagger';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb://admin:password@localhost:27017/better_db', // TODO: put in config and validation
        authSource: 'admin',
      }),
    }),
    // RedisModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'single',
    //     host: 'redis',
    //     url: 'redis://localhost:6379',
    //     options: {
    //       password: 'redis_password',
    //       port: 6379,
    //     },
    //   }),
    // }),
    LoggerModule.forRootAsync({
      useFactory: () => {
        return {
          pinoHttp: {
            level: 'debug',
            customProps: (req, res) => ({
              context: 'HTTP',
            }),
            transport: {
              target: 'pino-pretty',
              options: {
                singleLine: true,
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
              },
            },
          },
        };
      },
    }),

    // BullModule.forRootAsync({
    //   useFactory: () => {
    //     return {
    //       connection: {
    //         host: 'redis', // TODO: read from environment && validation
    //         port: 6379,
    //         password: 'redis_password',
    //       },
    //     };
    //   },
    // }),
    // BullModule.registerQueue({
    //   name: 'PERMISSION_QUEUE',
    // }),
    SwaggerModule,
    TweetModule,
  ],
  // providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
