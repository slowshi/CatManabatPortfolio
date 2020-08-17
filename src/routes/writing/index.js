/**
 * @route /writing/
 * @title Cat Matabat | Writing
 * @prerender false
 */
import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary Writing
 * @extends {AoflElement}
 */
@customElement('writing-element')
class Writing extends AoflElement {
  /**
   * Creates an instance of Writing.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'writing-element';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default Writing;
