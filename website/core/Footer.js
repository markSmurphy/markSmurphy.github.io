/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Articles</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
          </div>
{/*           <div>
            <h5>NPM Packages</h5>
            <a
              href="https://www.npmjs.com/package/akamai-staging"
              target="_blank"
              rel="noreferrer noopener">
              akamai-staging
            </a>
            <h6><code>A command line utility to locate an Akamai Staging network IP address for one or more domains</code></h6>
            <a
              href="https://www.npmjs.com/package/akamai-error-lookup"
              target="_blank"
              rel="noreferrer noopener">
              akamai-error-lookup
            </a>
            <h6><code>Retrieves diagnostic details of Akamai error reference numbers via Akamai's API</code></h6>
          </div> */}
          <div>
            <h5>Links</h5>
            <a href="https://www.linkedin.com/in/markmurphy3/">LinkedIn</a>
            <a href="https://www.npmjs.com/~mark.murphy">npmjs</a>
            <a href="https://github.com/markSmurphy">GitHub</a>
          </div>
        </section>

        <a
          href="https://github.com/markSmurphy"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/transparent-inverted-white-logo.png`}
            alt="Github Profile"
            //width="327"
            //height="147"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
