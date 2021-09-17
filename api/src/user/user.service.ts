import { HasuraDeleteEvent, HasuraInsertEvent, HasuraUpdateEvent, TrackedHasuraEventHandler } from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch'
import { InjectMeiliSearch } from 'nestjs-meilisearch';


interface User {
  id: number;
  display_name: string;
}

@Injectable()
export class UserService {

  public constructor(
    @InjectMeiliSearch() private readonly meiliSearch: MeiliSearch
  ) {}

  @TrackedHasuraEventHandler({
    triggerName: 'user-created',
    tableName: 'user',
    definition: { type: 'insert' },
  })
  
  async handleUserCreated(evt: HasuraInsertEvent<User>) {
    console.log('A new user was created!');
    console.log('User info:', evt.event.data.new);

    const index = this.meiliSearch.index('users')

    const documents = [
        { 
            id: evt.event.data.new.id, 
            display_name: evt.event.data.new.display_name, 
        },
    ]

    // If the index 'users' does not exist, MeiliSearch creates it when you first add the documents.
    let response = await index.addDocuments(documents);
    console.log('response', response);

  }

  @TrackedHasuraEventHandler({
    triggerName: 'user-updated',
    tableName: 'user',
    definition: { type: 'update', columns: ['display_name'] },
  })

  async handleUserUpdated(evt: HasuraUpdateEvent<User>) {
    console.log('handleUserUpdated was called, due to user.display_name changing and Hasura sending us a webhook!');
    console.log('display_name was changed from', evt.event.data.old.display_name, 'to', evt.event.data.new.display_name);

    const index = this.meiliSearch.index('users')

    const documents = [
        { 
            id: evt.event.data.new.id, 
            display_name: evt.event.data.new.display_name, 
        },
    ]

    // If the index 'users' does not exist, MeiliSearch creates it when you first add the documents.
    let response = await index.addDocuments(documents);
    console.log('response', response);

  }

  @TrackedHasuraEventHandler({
    triggerName: 'user-deleted',
    tableName: 'user',
    definition: { type: 'delete' },
  })

  async handleUserDeleted(evt: HasuraDeleteEvent<User>) {
    console.log('handleUserDeleted was called');

    const index = this.meiliSearch.index('users')

    let response = await index.deleteDocument(evt.event.data.old.id);
    console.log('response', response);
  }
}