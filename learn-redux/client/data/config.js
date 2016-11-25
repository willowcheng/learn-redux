import Raven from 'raven-js';

const sentry_key = '47eb9fdc941d42a1812e37c02b1a3349';
const sentry_app = '117563';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
