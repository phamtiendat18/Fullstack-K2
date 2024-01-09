class F8 {
  constructor() {}

  static component(name, options) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
          this.options = options;
          this.data = options.data ? options.data() : {};
          this.attachShadow({ mode: "open" });
          this.render();
        }

        render() {
          const shadow = this.shadowRoot;
          const templateKey = Object.keys(this.options).find(
            (key) => typeof options[key] === "string"
          );
          if (templateKey) {
            const template = options[templateKey];
            const templateEl = document.createElement("template");
            templateEl.innerHTML = template;
            const templateNode = templateEl.content.cloneNode(true);
            shadow.appendChild(templateNode);
            this.updateTemplateVariables(template);
            this.setupButtonListeners();
          }
        }

        updateTemplateVariables(template) {
          const shadow = this.shadowRoot;
          Object.keys(this.data).forEach((key) => {
            window[key] = this.data[key];
          });
          const results = template.match(/{{.+?}}/g);
          var variableArr = [];
          results?.forEach((result) => {
            const variableResult = result.match(/{{(.+?)}}/)[1].trim();
            variableArr.push(variableResult);
          });
          var replaceTemplate = template;
          variableArr.forEach((value) => {
            template = template.replace(`{{ ${value} }}`, `${window[value]}`);
          });
          this.innerHTML = template;
          // template = replaceTemplate;
        }

        setupButtonListeners() {
          const shadow = this.shadowRoot;
          const buttons = shadow.querySelectorAll("button");
          buttons.forEach((button) => {
            const match = button.outerHTML.match(/v-on:(\w+)="(\w+.*?)"/);
            if (match && match[1] && match[2]) {
              const btnEvent = match[1];
              const btnEventAttribute = match[2];
              button.addEventListener(btnEvent, () => {
                const countValue = eval(`this.data.${btnEventAttribute}`);
                this.updateCount(countValue);
              });
            }
          });
        }
        updateCount(countValue) {
          const h2 = this.shadowRoot.querySelector("h3");
          h2.textContent = `Đã đếm: ${countValue} lần`;
        }
      }
    );
  }
}
