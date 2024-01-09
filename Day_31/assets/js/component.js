var component = {
  create: function (name, handler) {
    function BaseComponent() {
      return Reflect.construct(HTMLElement, [], BaseComponent);
    }
    BaseComponent.prototype = Object.create(HTMLElement.prototype);
    // Lifecycle -> Vòng đời
    BaseComponent.prototype.constructor = BaseComponent;
    BaseComponent.prototype.connectedCallback = handler;
    customElements.define(name, BaseComponent);
  },
};
