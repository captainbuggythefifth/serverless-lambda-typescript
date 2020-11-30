import { APIGatewayProxyHandler } from 'aws-lambda';
import { echo } from '@queries/exampleQuery';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: echo('Module aliasing is really the best'),
      input: event,
    }, null, 2),
  };
}
