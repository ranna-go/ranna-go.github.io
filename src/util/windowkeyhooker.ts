export type Handler = (e: KeyboardEvent) => void;

export default class WindowKeyHookBuilder {
  private handlers: { [key: string]: Handler } = {};

  constructor() {}

  public on(keys: string, handler: Handler) {
    this.handlers[keys.toLowerCase()] = handler;
    return this;
  }

  public build() {
    return (e: KeyboardEvent) => {
      const key = (
        (e.altKey ? 'alt+' : '') +
        (e.shiftKey ? 'shift+' : '') +
        e.key
      ).toLowerCase();
      console.log(key);
      const handler = this.handlers[key];
      if (!!handler) {
        e.preventDefault();
        handler(e);
      }
    };
  }
}
