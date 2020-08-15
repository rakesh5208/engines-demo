import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-cells/user-name', 'Integration | Component | table cells/user name', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{table-cells/user-name}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#table-cells/user-name}}
      template block text
    {{/table-cells/user-name}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
