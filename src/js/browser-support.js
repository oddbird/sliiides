class BrowserSupport extends HTMLElement {
  static register(tagName) {
    if ('customElements' in window) {
      customElements.define(tagName || 'browser-support', BrowserSupport);
    }
  }

  static observedAttributes = ['data-feature'];

  static #browsers = ['chrome', 'edge', 'firefox', 'safari'];

  static #browserIcon = (name) => `
    ${BrowserSupport.BROWSER_ICONS[name]}
    <visually-hidden>${name}</visually-hidden>
  `;

  static #browserSupportIcon = (status) => `
    ${BrowserSupport.SUPPORT_ICONS[status]}
    <visually-hidden>${status}</visually-hidden>
  `;

  static #browserItem = (name, status = 'unknown') => `
    <d-i id="${name}">
      <dt>${BrowserSupport.#browserIcon(name)}</dt>
      <dd>${BrowserSupport.#browserSupportIcon(status)}</dd>
    </d-i>
  `;

  static #appendShadowTemplate = (node) => {
    const template = document.createElement('template');
    template.innerHTML = `
      <slot name="title"><h2 part="title">(no feature detected)</h2></slot>
      <dl part="browser-list">
        ${BrowserSupport.#browsers
          .map((browser) => BrowserSupport.#browserItem(browser))
          .join('')}
      </dl>
      <div part="status">
        ${BrowserSupport.BASELINE_ICONS.no_data}
        <strong>unknown</strong> support
      </div>
      <progress part="progress" max="30"></progress>
    `;
    const shadowRoot = node.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  };
  static #adoptShadowStyles = (node) => {
    const shadowStyle = new CSSStyleSheet();
    shadowStyle.replaceSync(`
      * { box-sizing: border-box; }
      :host {
        --status-no-data: #595959;
        --status-limited: #b06405;
        --status-newly: #1a73e8;
        --status-widely: #158939;
        --status-outline: #d9d9d9;

        @supports (color: light-dark(red, blue)) {
          --scheme-support: ;
          --status-no-data: light-dark(#595959, #9f9f9f);
          --status-limited: light-dark(#b06405, #eb8704);
          --status-newly: light-dark(#1a73e8, #61a1fe);
          --status-widely: light-dark(#158939, #4cb462);
          --status-outline: light-dark(#d9d9d9, #484848);
        }

        --status-color: var(--status-no-data);

        background: Canvas;
        color: CanvasText;
        color-scheme: var(--scheme-support, light);
        container: inline-size;
        border:
          var(--browser-support-border, medium solid)
          var(--status-color);
        border-radius: var(--browser-support-radius, 0.5em);
        display: grid;
        gap: 0.5lh;
        margin-block: 1lh;
        padding: 0.5lh min(1em, 24px, 5cqi);
      }

      :host([data-status=limited]) {
        --status-color: var(--status-limited);
      }
      :host([data-status=newly]) {
        --status-color: var(--status-newly);
      }
      :host([data-status=widely]) {
        --status-color: var(--status-widely);
      }

      [data-status=available] {
        --status-color: var(--status-widely);
      }

      [data-status=unavailable] {
        --status-color: var(--status-limited);
      }

      svg {
        fill: var(--status-color);
        block-size: 1em;
        vertical-align: middle;
      }

      path.back {
        fill: var(--status-outline);
      }

      [part=title],
      ::slotted([slot=title]),
      [part=browser-list] {
        margin: unset;
      }

      [part=browser-list] svg {
        aspect-ratio: 1;
        inline-size: clamp(1lh, 1em + 2cqi, 2lh);
        block-size: auto;
      }

      dl {
        --status-color: var(--status-no-data);
        display: flex;
        flex-flow: wrap;
        gap: min(2cqi, 1em);
      }

      d-i { flex: none; }

      dt, dd {
        display: inline-block;
        margin: unset;
      }

      dd {
        fill: var(--status-color);
        translate: -30%;
      }

      progress:not([value]) {
        display: none;
      }

      progress[value] {
        --status-progress: var(--status-newly);
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background: var(--status-outline);
        block-size: 1em;
        border: unset;
        border-radius: 2px;
        inline-size: 100%;
      }

      progress[data-rank=low] {
        --status-progress: var(--status-limited);
      }
      progress[data-rank=high] {
        --status-progress: var(--status-widely);
      }

      progress[value]::-webkit-progress-bar {
        background: var(--status-outline);
      }
      progress[value]::-moz-progress-bar {
        background: var(--status-progress);
      }
      progress[value]::-webkit-progress-value {
        background: var(--status-progress);
      }

      visually-hidden:not(:focus-within) {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }
    `);
    node.shadowRoot.adoptedStyleSheets = [shadowStyle];
  };

  static BASELINE_ICONS = {
    limited: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 20" width="36" height="20" data-svg="limited">
        <path d="M10 0L16 6L14 8L8 2L10 0Z"/>
        <path d="M22 12L20 14L26 20L28 18L22 12Z"/>
        <path d="M26 0L28 2L10 20L8 18L26 0Z"/>
        <path class="back" d="M8 2L10 4L4 10L10 16L8 18L0 10L8 2Z"/>
        <path class="back" d="M28 2L36 10L28 18L26 16L32 10L26 4L28 2Z"/>
      </svg>`,
    widely: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 20" width="36" height="20" data-svg="widely">
        <path d="M18 8L20 10L18 12L16 10L18 8Z"/>
        <path d="M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z"/>
        <path class="back" d="M28 2L26 4L32 10L26 16L22 12L20 14L26 20L36 10L28 2Z"/>
        <path class="back" d="M10 0L2 8L4 10L10 4L14 8L16 6L10 0Z"/>
      </svg>`,
    newly: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 20" width="36" height="20" data-svg="newly">
        <path class="back" d="m10 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm16 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4-4 2 2-2 2-2-2 2-2ZM6 4l2 2-2 2-2-2 2-2Z"/>
        <path d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>
      </svg>`,
    no_data: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 20" width="36" height="20" data-svg="no-data">
        <path d="M18 8L20 10L18 12L16 10L18 8Z"/>
        <path d="M28 2L26 4L32 10L26 16L22 12L20 14L26 20L36 10L28 2Z"/>
        <path d="M10 0L2 8L4 10L10 4L14 8L16 6L10 0Z"/>
        <path d="M26 0L28 2L10 20L0 10L2 8L10 16L26 0Z"/>
      </svg>`,
  };
  static SUPPORT_ICONS = {
    available: `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21">
        <path d="M1.253 3.31a8.843 8.843 0 0 1 5.47-1.882c4.882 0 8.838 3.927 8.838 8.772 0 4.845-3.956 8.772-8.837 8.772a8.842 8.842 0 0 1-5.47-1.882c-.237.335-.49.657-.758.966a10.074 10.074 0 0 0 6.228 2.14c5.562 0 10.07-4.475 10.07-9.996 0-5.52-4.508-9.996-10.07-9.996-2.352 0-4.514.8-6.228 2.14.268.309.521.631.757.966Z"/>
        <path d="M11.348 8.125 6.34 13.056l-3.006-2.954 1.002-.985 1.999 1.965 4.012-3.942 1.002.985Z"/>
      </svg>`,
    unavailable: `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21">
        <path d="M1.254 3.31a8.843 8.843 0 0 1 5.47-1.882c4.881 0 8.838 3.927 8.838 8.772 0 4.845-3.957 8.772-8.838 8.772a8.842 8.842 0 0 1-5.47-1.882c-.236.335-.49.657-.757.966a10.074 10.074 0 0 0 6.227 2.14c5.562 0 10.071-4.475 10.071-9.996 0-5.52-4.509-9.996-10.07-9.996-2.352 0-4.515.8-6.228 2.14.268.309.52.631.757.966Z"/>
        <path d="m10.321 8.126-1.987 1.972 1.987 1.972-.993.986-1.987-1.972-1.987 1.972-.993-.986 1.986-1.972-1.986-1.972.993-.986 1.987 1.972L9.328 7.14l.993.986Z"/>
      </svg>`,
    unknown: `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21">
        <path d="M7.18169 12.2783H5.98706C5.99134 11.8703 6.02774 11.5367 6.09625 11.2775C6.16904 11.014 6.28679 10.7738 6.4495 10.5571C6.61221 10.3404 6.82844 10.0939 7.0982 9.8176C7.29516 9.61785 7.475 9.43085 7.63771 9.2566C7.8047 9.0781 7.93958 8.88685 8.04235 8.68285C8.14511 8.4746 8.19649 8.22598 8.19649 7.93698C8.19649 7.64373 8.14297 7.39085 8.03592 7.17835C7.93316 6.96585 7.77901 6.80223 7.57348 6.68748C7.37224 6.57273 7.12175 6.51535 6.82202 6.51535C6.57367 6.51535 6.33817 6.55998 6.11552 6.64923C5.89286 6.73848 5.71302 6.8766 5.576 7.0636C5.43898 7.24635 5.36833 7.48648 5.36405 7.78398H4.17584C4.18441 7.30373 4.3043 6.89148 4.53552 6.54723C4.77102 6.20298 5.08787 5.93948 5.48609 5.75673C5.8843 5.57398 6.32961 5.4826 6.82202 5.4826C7.36581 5.4826 7.82825 5.58035 8.20934 5.77585C8.5947 5.97135 8.88801 6.25185 9.08926 6.61735C9.2905 6.9786 9.39113 7.40785 9.39113 7.9051C9.39113 8.2876 9.31191 8.64035 9.15348 8.96335C8.99934 9.2821 8.80023 9.58173 8.55617 9.86222C8.3121 10.1427 8.05305 10.4105 7.77901 10.6655C7.54351 10.8822 7.38508 11.1266 7.30373 11.3986C7.22237 11.6706 7.18169 11.9639 7.18169 12.2783ZM5.93568 14.2992C5.93568 14.108 5.99562 13.9465 6.11552 13.8147C6.23541 13.683 6.40882 13.6171 6.63576 13.6171C6.86698 13.6171 7.04253 13.683 7.16243 13.8147C7.28232 13.9465 7.34226 14.108 7.34226 14.2992C7.34226 14.482 7.28232 14.6392 7.16243 14.771C7.04253 14.9027 6.86698 14.9686 6.63576 14.9686C6.40882 14.9686 6.23541 14.9027 6.11552 14.771C5.99562 14.6392 5.93568 14.482 5.93568 14.2992Z"/>
        <path d="M1.25317 3.31021C2.75786 2.13162 4.65827 1.4281 6.72373 1.4281C11.6047 1.4281 15.5615 5.35546 15.5615 10.2001C15.5615 15.0447 11.6047 18.9721 6.72373 18.9721C4.65827 18.9721 2.75786 18.2686 1.25317 17.09C1.01715 17.425 0.764387 17.7475 0.496094 18.0563C2.20987 19.3966 4.37247 20.1961 6.72373 20.1961C12.2857 20.1961 16.7946 15.7207 16.7946 10.2001C16.7946 4.67946 12.2857 0.204102 6.72373 0.204102C4.37247 0.204102 2.20987 1.00363 0.496094 2.34391C0.764386 2.65272 1.01715 2.97522 1.25317 3.31021Z"/>
      </svg>`,
  };
  static BROWSER_ICONS = {
    chrome: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M9.82726 21.7633C5.34912 20.7712 2 16.7767 2 12C2 10.1779 2.48734 8.46958 3.33878 6.99834L7.62189 14.4169C8.47396 15.9571 10.1152 17 12 17C12.2023 17 12.4018 16.988 12.5978 16.9646L9.82726 21.7633ZM12 22L16.2868 14.5751C16.7396 13.8229 17 12.9419 17 12C17 10.8744 16.6281 9.83566 16.0004 9H21.5422C21.8396 9.94704 22 10.9548 22 12C22 17.5228 17.5228 22 12 22ZM14.5721 13.545C14.0473 14.4168 13.0917 15 12 15C10.8897 15 9.92024 14.3968 9.40149 13.5002L9.37313 13.4501C9.13535 13.0203 9 12.526 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 12.5465 14.8539 13.0589 14.5985 13.5002L14.5721 13.545ZM4.6322 5.23859C6.46008 3.24783 9.08432 2 12 2C15.7014 2 18.9331 4.01099 20.6622 7H12C9.93635 7 8.1647 8.25019 7.40112 10.0345L4.6322 5.23859Z"></path>
      </svg>
    `,
    edge: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M13.817 21.8353C13.7106 21.8384 13.6049 21.84 13.5 21.84 12.4265 21.84 11.1264 21.2191 10.0806 20.0816 9.04473 18.9549 8.30005 17.363 8.30005 15.5 8.30005 14.0815 8.81836 12.9347 9.50108 12.0942 9.55796 14.5796 11.8588 17.7 16.5 17.7 18.1779 17.7 19.2172 17.2476 19.7794 17.0029 19.9878 16.9122 20.1306 16.85 20.2161 16.85 20.4 16.85 20.5 16.95 20.5 17.15 20.5 17.3366 20.3987 17.4712 20.0742 17.9023L20.0007 18C18.5223 19.9682 16.3345 21.3732 13.817 21.8353ZM10.7016 21.9165C5.79216 21.2799 2 17.0828 2 12 2 10.7202 2.74053 9.67125 3.89749 8.91922 5.05841 8.16463 6.58675 7.75 8 7.75 10.2764 7.75 11.6347 8.51511 12.4284 9.39698 12.4785 9.45269 12.5265 9.50903 12.5725 9.56586 12.3887 9.52278 12.197 9.5 12 9.5L11.996 9.5C11.5608 9.50069 11.1518 9.61255 10.7956 9.80869 10.7171 9.84506 10.6385 9.88421 10.5603 9.92588 10.0565 10.1942 9.52919 10.587 9.04942 11.0938 8.08779 12.1096 7.30005 13.6034 7.30005 15.5 7.30005 17.637 8.15534 19.4651 9.34445 20.7584 9.75828 21.2085 10.2178 21.5991 10.7016 21.9165ZM13.8515 13.5956C14.1178 13.3151 14.5 12.9123 14.5 12 14.5 11.1394 14.1625 9.82898 13.1716 8.72802 12.1653 7.60989 10.5236 6.75 8 6.75 6.41325 6.75 4.69159 7.21037 3.35251 8.08078 3.07269 8.26266 2.80734 8.46421 2.5626 8.68489 3.93023 4.7914 7.63913 2 12 2 17.5228 2 22 6 22 10.5 22 13.3 19.8 15.35 17 15.35 15 15.35 13.6 14.7 13.6 14 13.6 13.8607 13.7092 13.7456 13.8515 13.5956Z"></path>
      </svg>
    `,
    firefox: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 10.5365 2.31538 9.14635 2.88033 7.89353C3.34744 6.95503 4.11409 6.01955 4.73082 5.7004C4.07759 6.98266 3.75823 8.24073 3.69049 9.08266C4.14533 7.58266 5.00622 6.32621 6.21106 5.43911C8.27719 3.92016 11.059 3.85202 12.1671 4.81976C10.1107 5.52581 7.87073 8.36653 8.36428 11.6952C8.44419 12.2447 8.60906 12.7785 8.85299 13.2774C8.46912 12.2661 8.43525 10.8435 9.05461 9.91935C9.74654 8.88911 10.7332 8.67137 11.2607 8.78266C11.0526 8.73911 10.5929 9.61936 10.5252 9.77419C10.3523 10.1679 10.2664 10.5943 10.2736 11.0242C10.2888 11.9223 10.6594 12.7778 11.3042 13.4032C13.2256 15.2754 16.3268 14.5387 17.7155 12.4016C18.6687 10.9306 18.7848 8.43427 17.5607 6.4504C17.2554 5.96696 16.8913 5.52325 16.4768 5.12944C14.6262 3.36387 11.9979 2.56054 9.49503 2.92549C8.38907 3.10214 7.44765 3.42052 6.67077 3.88065C7.75554 2.79776 9.9123 2 12.001 2Z"></path>
      </svg>
    `,
    safari: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M16.7012 6.80069L10.5868 10.5858L6.80166 16.7002L6.69768 16.5962L5.28346 18.0104L5.99057 18.7175L7.40478 17.3033L7.3008 17.1993L13.4152 13.4142L17.2003 7.29982L17.3043 7.40381L18.7185 5.98959L18.0114 5.28249L16.5972 6.6967L16.7012 6.80069ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM11.501 3V5H12.501V3H11.501ZM11.501 19V21H12.501V19H11.501ZM8.09489 3.87643L8.86025 5.72418L9.78413 5.3415L9.01877 3.49374L8.09489 3.87643ZM14.2178 18.6585L14.9832 20.5063L15.9071 20.1236L15.1417 18.2758L14.2178 18.6585ZM14.9832 3.49374L14.2178 5.3415L15.1417 5.72418L15.9071 3.87643L14.9832 3.49374ZM8.86025 18.2758L8.09489 20.1236L9.01877 20.5063L9.78413 18.6585L8.86025 18.2758ZM21.001 11.5H19.001V12.5H21.001V11.5ZM5.00098 11.5H3.00098V12.5H5.00098V11.5ZM20.4593 15.1155L18.6238 14.3212L18.2267 15.2389L20.0622 16.0332L20.4593 15.1155ZM5.77527 8.76109L3.93976 7.96679L3.54261 8.88455L5.37812 9.67884L5.77527 8.76109ZM20.1245 8.09391L18.2768 8.85928L18.6595 9.78316L20.5072 9.01779L20.1245 8.09391ZM5.34248 14.2168L3.49472 14.9822L3.8774 15.9061L5.72516 15.1407L5.34248 14.2168ZM18.7185 18.0104L17.3043 16.5962L16.5972 17.3033L18.0114 18.7175L18.7185 18.0104ZM7.40478 6.6967L5.99057 5.28249L5.28346 5.98959L6.69768 7.40381L7.40478 6.6967ZM11.3132 11.3122L14.9241 9.07686L12.6888 12.6878L11.3132 11.3122Z"></path>
      </svg>
    `,
  };

  static EXPLORE = `https://web-platform-dx.github.io/web-features-explorer/features/`;
  static API = `https://api.webstatus.dev/v1/features/`;

  explore;
  #featureLink;
  #featureId;
  #featureData;
  #ui;

  set title(value) {
    this.#ui.title.innerHTML = value;
  }

  set featureId(value) {
    if (value !== this.dataset.feature) {
      this.dataset.feature = value;
    }

    this.#featureId = value;
    this.#fetchData();

    this.explore = this.featureLink
      ? this.featureLink.href
      : `${BrowserSupport.EXPLORE}${value}/`;

    this.title = value;
  }

  get featureId() {
    return this.#featureId;
  }

  set featureData(data) {
    if (!data) return;

    this.#featureData = data;
    this.#render();
  }

  get featureData() {
    return this.#featureData;
  }

  set baseline(value) {
    this.dataset.status = value.status;

    if (value.status === 'limited') {
      this.#ui.status.innerHTML = `
        ${BrowserSupport.BASELINE_ICONS[value.status]}
        <a href="${BrowserSupport.EXPLORE}${this.featureId}" part="link">
          <strong>${value.status}</strong> support
        </a>
      `;
      return;
    }

    const date = new Date(value.low_date);
    const dateTime = `
      <time datetime="${date.toISOString()}">${date.toLocaleDateString(
      undefined,
      {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
      },
    )}</time>
    `;

    this.#ui.status.innerHTML = `
      ${BrowserSupport.BASELINE_ICONS[value.status]}
      ${dateTime} –
      <a href="${BrowserSupport.EXPLORE}${this.featureId}" part="link">
        <strong>${value.status}</strong> supported
      </a>
    `;

    if (value.status === 'newly') {
      const progress = this.#monthsSince(date);
      this.#ui.progress.innerHTML = `${progress} months`;
      this.#ui.progress.value = progress;

      if (progress <= 12) {
        this.#ui.progress.dataset.rank = 'low';
      } else if (progress > 24) {
        this.#ui.progress.dataset.rank = 'high';
      }
    }
  }

  get status() {
    return this.featureData.baseline.status;
  }

  constructor() {
    super();
    this.dataset.status = 'setup';

    BrowserSupport.#appendShadowTemplate(this);
    BrowserSupport.#adoptShadowStyles(this);

    this.#ui = {
      title: this.shadowRoot.querySelector('[part=title]'),
      status: this.shadowRoot.querySelector('[part=status]'),
      progress: this.shadowRoot.querySelector('[part=progress]'),
    };

    BrowserSupport.#browsers.forEach((browser) => {
      const browserEl = this.shadowRoot.getElementById(browser);
      this.#ui[browser] = browserEl.querySelector('dd');
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'data-feature':
        if (this.featureId === newValue) return;
        this.featureId = newValue;
        break;
    }
  }

  connectedCallback() {
    this.#getFeature();
  }

  disconnectedCallback() {}

  #render() {
    this.title = this.featureData.name;
    this.baseline = this.featureData.baseline;

    BrowserSupport.#browsers.forEach((browser) => {
      const data = this.featureData.browser_implementations[browser];
      const status = data?.status || 'unavailable';
      const output = this.#ui[browser];
      output.parentElement.dataset.status = status;
      output.innerHTML = BrowserSupport.#browserSupportIcon(status);
    });
  }

  async #fetchData() {
    this.dataset.status = 'fetching';

    const response = await fetch(`${BrowserSupport.API}${this.featureId}`);

    if (!response.ok) {
      this.dataset.status = 'no-data';
      throw new Error(`Response statuses: ${response.status}`);
    }

    this.featureData = await response.json();
  }

  #monthsSince(date) {
    const d1 = date;
    const d2 = new Date();
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  #getFeature = () => {
    if (!this.dataset.feature) {
      this.dataset.feature = this.#getFeatureFromLink();
    }
  };

  #getFeatureFromLink = () => {
    this.featureLink = this.querySelector(
      `a[href^='${BrowserSupport.EXPLORE}']`,
    );

    if (!this.featureLink) return;

    return this.featureLink.href
      .replace(BrowserSupport.EXPLORE, '')
      .split('/')
      .at(0);
  };
}

BrowserSupport.register();
