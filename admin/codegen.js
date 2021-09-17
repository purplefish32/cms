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
          field: true,
          inputValue: true,
          object: true,
          maybeValue: 'T',
          namingConvention: {
            typeNames: 'pascal-case#pascalCase',
            transformUnderscore: true,
          },
        },
      },
      './graphql.schema.json': {
        plugins: ['introspection'],
      },
    },
  };
  