import styles from './template.css';
import template from './template';
import {AoflElement, customElement} from '@aofl/element';

/**
 * @summary NavBar
 * @extends {AoflElement}
 */
@customElement('nav-bar')
class NavBar extends AoflElement {
  /**
   * Creates an instance of NavBar.
   */
  constructor() {
    super();
  }
  /**
   * @readonly
   */
  static is = 'nav-bar';
  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

export default NavBar;
