'use strict';

define('afri-ember/tests/acceptance/products-test', ['exports', 'ember', 'qunit', 'afri-ember/tests/helpers/start-app'], function (exports, _ember, _qunit, _afriEmberTestsHelpersStartApp) {

  var application;
  var originalConfirm;
  var confirmCalledWith;

  (0, _qunit.module)('Acceptance: Product', {
    beforeEach: function beforeEach() {
      application = (0, _afriEmberTestsHelpersStartApp['default'])();
      originalConfirm = window.confirm;
      window.confirm = function () {
        confirmCalledWith = [].slice.call(arguments);
        return true;
      };
    },
    afterEach: function afterEach() {
      _ember['default'].run(application, 'destroy');
      window.confirm = originalConfirm;
      confirmCalledWith = null;
    }
  });

  (0, _qunit.test)('visiting /products without data', function (assert) {
    visit('/products');

    andThen(function () {
      assert.equal(currentPath(), 'products.index');
      assert.equal(find('#blankslate').text().trim(), 'No Products found');
    });
  });

  (0, _qunit.test)('visiting /products with data', function (assert) {
    server.create('product');
    visit('/products');

    andThen(function () {
      assert.equal(currentPath(), 'products.index');
      assert.equal(find('#blankslate').length, 0);
      assert.equal(find('table tbody tr').length, 1);
    });
  });

  (0, _qunit.test)('create a new product', function (assert) {
    visit('/products');
    click('a:contains(New Product)');

    andThen(function () {
      assert.equal(currentPath(), 'products.new');

      fillIn('label:contains(Title) input', 'MyString');
      fillIn('label:contains(Price) input', 'MyString');
      fillIn('label:contains(Size) input', 'MyString');
      fillIn('label:contains(Image) input', 'MyString');

      click('input:submit');
    });

    andThen(function () {
      assert.equal(find('#blankslate').length, 0);
      assert.equal(find('table tbody tr').length, 1);
    });
  });

  (0, _qunit.test)('update an existing product', function (assert) {
    server.create('product');
    visit('/products');
    click('a:contains(Edit)');

    andThen(function () {
      assert.equal(currentPath(), 'products.edit');

      fillIn('label:contains(Title) input', 'MyString');
      fillIn('label:contains(Price) input', 'MyString');
      fillIn('label:contains(Size) input', 'MyString');
      fillIn('label:contains(Image) input', 'MyString');

      click('input:submit');
    });

    andThen(function () {
      assert.equal(find('#blankslate').length, 0);
      assert.equal(find('table tbody tr').length, 1);
    });
  });

  (0, _qunit.test)('show an existing product', function (assert) {
    server.create('product');
    visit('/products');
    click('a:contains(Show)');

    andThen(function () {
      assert.equal(currentPath(), 'products.show');

      assert.equal(find('p strong:contains(Title:)').next().text(), 'MyString');
      assert.equal(find('p strong:contains(Price:)').next().text(), 'MyString');
      assert.equal(find('p strong:contains(Size:)').next().text(), 'MyString');
      assert.equal(find('p strong:contains(Image:)').next().text(), 'MyString');
    });
  });

  (0, _qunit.test)('delete a product', function (assert) {
    server.create('product');
    visit('/products');
    click('a:contains(Remove)');

    andThen(function () {
      assert.equal(currentPath(), 'products.index');
      assert.deepEqual(confirmCalledWith, ['Are you sure?']);
      assert.equal(find('#blankslate').length, 1);
    });
  });
});
define('afri-ember/tests/acceptance/products-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/products-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/products-test.js should pass jshint.\nacceptance/products-test.js: line 35, col 3, \'server\' is not defined.\nacceptance/products-test.js: line 67, col 3, \'server\' is not defined.\nacceptance/products-test.js: line 89, col 3, \'server\' is not defined.\nacceptance/products-test.js: line 104, col 3, \'server\' is not defined.\n\n4 errors');
  });
});
define('afri-ember/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 4, col 8, \'DataAdapterMixin\' is defined but never used.\n\n1 error');
  });
});
define('afri-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('afri-ember/tests/authenticators/drf-token-authenticator.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authenticators/drf-token-authenticator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'authenticators/drf-token-authenticator.js should pass jshint.\nauthenticators/drf-token-authenticator.js: line 33, col 24, \'error\' is defined but never used.\nauthenticators/drf-token-authenticator.js: line 33, col 16, \'status\' is defined but never used.\n\n2 errors');
  });
});
define('afri-ember/tests/authorizers/drf-token-authorizer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authorizers/drf-token-authorizer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/drf-token-authorizer.js should pass jshint.');
  });
});
define('afri-ember/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('afri-ember/tests/controllers/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass jshint.');
  });
});
define('afri-ember/tests/controllers/register.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/register.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass jshint.\ncontrollers/register.js: line 13, col 13, Duplicate key \'isDisabled\'.\ncontrollers/register.js: line 14, col 13, Duplicate key \'isDisabled\'.\ncontrollers/register.js: line 15, col 13, Duplicate key \'isDisabled\'.\ncontrollers/register.js: line 39, col 16, \'response\' is defined but never used.\ncontrollers/register.js: line 41, col 24, \'error\' is defined but never used.\ncontrollers/register.js: line 41, col 16, \'status\' is defined but never used.\n\n6 errors');
  });
});
define('afri-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('afri-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('afri-ember/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('afri-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'afri-ember/tests/helpers/start-app', 'afri-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _afriEmberTestsHelpersStartApp, _afriEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _afriEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _afriEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('afri-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('afri-ember/tests/helpers/resolver', ['exports', 'afri-ember/resolver', 'afri-ember/config/environment'], function (exports, _afriEmberResolver, _afriEmberConfigEnvironment) {

  var resolver = _afriEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _afriEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _afriEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('afri-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('afri-ember/tests/helpers/start-app', ['exports', 'ember', 'afri-ember/app', 'afri-ember/config/environment'], function (exports, _ember, _afriEmberApp, _afriEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _afriEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _afriEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('afri-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('afri-ember/tests/mixins/products/save-model-mixin.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/products/save-model-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/products/save-model-mixin.js should pass jshint.');
  });
});
define('afri-ember/tests/models/product.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/product.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass jshint.');
  });
});
define('afri-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('afri-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/checkout.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/checkout.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/checkout.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/products/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/products/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/products/edit.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/products/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/products/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/products/index.js should pass jshint.\nroutes/products/index.js: line 3, col 8, \'AuthenticatedRouteMixin\' is defined but never used.\n\n1 error');
  });
});
define('afri-ember/tests/routes/products/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/products/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/products/new.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/productsdealer/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/productsdealer/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/productsdealer/edit.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/productsdealer/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/productsdealer/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/productsdealer/index.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/productsdealer/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/productsdealer/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/productsdealer/new.js should pass jshint.');
  });
});
define('afri-ember/tests/routes/register.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/register.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/register.js should pass jshint.');
  });
});
define('afri-ember/tests/test-helper', ['exports', 'afri-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _afriEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_afriEmberTestsHelpersResolver['default']);
});
define('afri-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('afri-ember/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('afri-ember/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/controllers/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('afri-ember/tests/unit/controllers/login-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/controllers/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:register', 'Unit | Controller | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('afri-ember/tests/unit/controllers/register-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/register-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('afri-ember/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('afri-ember/tests/unit/routes/login-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.');
  });
});
define('afri-ember/tests/unit/routes/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('afri-ember/tests/unit/routes/register-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/register-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('afri-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
