import {Sdo, storeInstance, state} from '@aofl/store';

const NAMESPACE = 'page-template';

class PageTemplateSdo extends Sdo {
  static namespace = NAMESPACE;

  @state()
  showMobileNav = false;

  @state()
  routes = [
    // {
    //   label: 'Writing',
    //   link: '/writing/',
    //   group: 'writing'
    // },
    {
      label: 'About',
      link: '/about/',
    },
    {
      label: 'Contact',
      link: '/contact/'
    }
  ];
}

const pageTemplateSdo = new PageTemplateSdo();

storeInstance.addState(pageTemplateSdo);

export {
  pageTemplateSdo
};

