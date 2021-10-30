import { HasuraModule } from '@golevelup/nestjs-hasura';
import { Module } from '@nestjs/common';
import { MeiliSearchModule } from 'nestjs-meilisearch';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermService } from './term/term.service';
import { UserService } from './user/user.service';
const path = require('path');

@Module({
  imports: [
    HasuraModule.forRoot(HasuraModule, {
      webhookConfig: {
        /**
         * The value of the secret Header. The Hasura module will ensure that incoming webhook payloads contain this
         * value in order to validate that it is a trusted request
         */
        secretFactory: 'secret',
        /** The name of the Header that Hasura will send along with all event payloads */
        secretHeader: 'secret-header',
      },
      // managedMetaDataConfig: {
      //   metadataVersion: 'v3',
      //   dirPath: path.join(process.cwd(), 'hasura/metadata'),
      //   secretHeaderEnvName: 'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
      //   nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
      //   defaultEventRetryConfig: {
      //     intervalInSeconds: 15,
      //     numRetries: 3,
      //     timeoutInSeconds: 100,
      //     toleranceSeconds: 21600,
      //   },
      // },
    }),
    MeiliSearchModule.forRoot({
      host: 'http://meilisearch:7700',
      // apiKey: 'masterKey',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService, TermService],
})
export class AppModule {}
