import { HasuraDeleteEvent, HasuraInsertEvent, HasuraUpdateEvent, TrackedHasuraEventHandler } from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';
import { MeiliSearch } from 'meilisearch'
import { InjectMeiliSearch } from 'nestjs-meilisearch';


interface Term {
  id: number;
  name: string;
}

@Injectable()
export class TermService {

  public constructor(
    @InjectMeiliSearch() private readonly meiliSearch: MeiliSearch
  ) {}

  @TrackedHasuraEventHandler({
    triggerName: 'term-created',
    tableName: 'term',
    definition: { type: 'insert' },
  })
  
  async handleTermCreated(evt: HasuraInsertEvent<Term>) {
    console.log('A new term was created!');
    console.log('Term info:', evt.event.data.new);

    const index = this.meiliSearch.index('terms')

    const documents = [
        { 
            id: evt.event.data.new.id, 
            name: evt.event.data.new.name, 
        },
    ]

    // If the index 'terms' does not exist, MeiliSearch creates it when you first add the documents.
    let response = await index.addDocuments(documents);
    console.log('response', response);

  }

  @TrackedHasuraEventHandler({
    triggerName: 'term-updated',
    tableName: 'term',
    definition: { type: 'update', columns: ['name'] },
  })

  async handleTermUpdated(evt: HasuraUpdateEvent<Term>) {
    console.log('handleTermUpdated was called, due to term.name changing and Hasura sending us a webhook!');
    console.log('name was changed from', evt.event.data.old.name, 'to', evt.event.data.new.name);

    const index = this.meiliSearch.index('terms')

    const documents = [
        { 
            id: evt.event.data.new.id, 
            name: evt.event.data.new.name, 
        },
    ]

    // If the index 'terms' does not exist, MeiliSearch creates it when you first add the documents.
    let response = await index.addDocuments(documents);
    console.log('response', response);

  }

  @TrackedHasuraEventHandler({
    triggerName: 'term-deleted',
    tableName: 'term',
    definition: { type: 'delete' },
  })

  async handleTermDeleted(evt: HasuraDeleteEvent<Term>) {
    console.log('handleTermDeleted was called');

    const index = this.meiliSearch.index('terms')

    let response = await index.deleteDocument(evt.event.data.old.id);
    console.log('response', response);
  }
}