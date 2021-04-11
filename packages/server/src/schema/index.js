import { SchemaComposer } from 'graphql-compose';
import '../utils/db'; // eslint-disable-line no-unused-vars

import { CompanyQuery, CompanyMutation } from './company'

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...CompanyQuery
});

schemaComposer.Mutation.addFields({
    ...CompanyMutation
});

export default schemaComposer.buildSchema();