const yamlModelUri = monaco.Uri.parse('a://b/foo.yaml');
const jsonModelUri = monaco.Uri.parse('a://b/foo.json');

const diagnosticsOptions = {
  enableSchemaRequest: true,
  hover: true,
  completion: true,
  validate: true,
  format: true,
  schemas: [
    {
      // Id of the first schema
      uri: 'http://myserver/foo-schema.json',
      // Associate with our model
      fileMatch: ['*'],
      schema: {
        type: 'object',
        properties: {
          p1: {
            enum: ['v1', 'v2'],
          },
          p2: {
            // Reference the second schema
            $ref: 'http://myserver/bar-schema.json',
          },
        },
      },
    },
    {
      // Id of the first schema
      uri: 'http://myserver/bar-schema.json',
      schema: {
        type: 'object',
        properties: {
          q1: {
            enum: ['x1', 'x2'],
          },
        },
      },
    },
  ],
};

monacoYaml.setDiagnosticsOptions(diagnosticsOptions);
monaco.languages.json.jsonDefaults.setDiagnosticsOptions(diagnosticsOptions);

const yaml = 'p1: \np2: \n';
const json = '{\n  "p1": "",\n  "p2": ""\n}';

monaco.editor.create(document.getElementById('yaml-editor'), {
  automaticLayout: true,
  model: monaco.editor.createModel(yaml, 'yaml', yamlModelUri),
});
monaco.editor.create(document.getElementById('json-editor'), {
  automaticLayout: true,
  model: monaco.editor.createModel(json, 'json', jsonModelUri),
});