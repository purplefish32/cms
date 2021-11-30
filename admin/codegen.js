module.exports = {
  schema: [
    {
      'http://dev.home.lan:8080/v1/graphql': {
        headers: {
          "x-hasura-admin-secret": "myhasurasecret" // TODO
        }
      },
    },
  ],
  documents: './**/*.graphql',
  overwrite: true,
  generates: {
    './generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        field: true,
        inputValue: true,
        object: true,
        maybeValue: 'T',
        apolloReactHooksImportFrom: '@apollo/client',
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          transformUnderscore: true,
        },
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
    './types.ts': {
      plugins: ['typescript', 'typescript-operations', 'named-operations-object']
    }
  },
};
