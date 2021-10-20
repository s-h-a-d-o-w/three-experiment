/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { photos } from './mocks/photos';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json(photos));
  })
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
