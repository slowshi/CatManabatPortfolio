import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary Contact
 * @extends {AoflElement}
 */
@customElement('contact-element')
class Contact extends AoflElement {
  /**
   * Creates an instance of Contact.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'contact-element';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default Contact;
