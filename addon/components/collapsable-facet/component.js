import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  collapsed: false,
  initOpen: false,
  facet: {},

  actions: {
    toggleCollapse() {
      this.toggleProperty('collapsed');
    },
    toggleFacet(term) {
      this.get('toggleFacet')(this.get('facet'), term);
      this.notifyPropertyChange('facet');
    }
  },
  didReceiveAttrs() {
    let open = (this.get('initOpen') || this.get('facet.atleastOneSelected'));
    this.set('open', open);
  }
});