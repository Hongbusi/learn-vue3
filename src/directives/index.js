import registerFocus from './focus';
import registerFormatTime from './format-time';

export default function registerDirectives(app) {
  registerFocus(app);
  registerFormatTime(app);
}
