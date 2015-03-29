/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  L.Icon.Default.imagePath = "/assets/images";

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/leaf-base', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-base'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-control', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-control'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-draw', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-draw'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-feature-group', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-feature-group'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-geojson', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-geojson'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-ilayer-bounds', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-ilayer-bounds'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-ilayer-latlng', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-ilayer-latlng'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-ilayer', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-ilayer'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-image-overlay', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-image-overlay'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-layer-group', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-layer-group'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-map', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-map'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-marker', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-marker'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-path', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-path'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-polyline', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-polyline'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-popup', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-popup'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-rectangle', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-rectangle'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-tile-mapbox', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-tile-mapbox'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/components/leaf-tile', ['exports', 'ember', 'ember-cli-leaflet/components/leaf-tile'], function (exports, Ember, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    queryParams: ["latlng", "zoom"],
    latlng: "53.2, 6.58",
    zoom: 12
  });

});
define('dummy/controllers/position', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    center: Ember['default'].computed("model", function () {
      return this.get("model").getCenter();
    }),
    bBoxString: Ember['default'].computed("model", function () {
      return this.get("model").toBBoxString();
    }),

    seconds: 0,
    secondsDidChange: Ember['default'].observer("seconds", function () {
      Ember['default'].run.later(this, function () {
        this.incrementProperty("seconds");
      }, 1000);
    }).on("init"),

    showPopup: false,
    modelDidChange: Ember['default'].observer("model", function () {
      this.set("showPopup", false);
    }),

    actions: {
      markerClick: function markerClick(markerComponent, event) {
        this.toggleProperty("showPopup");
        return false;
      }
    }
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-base.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-base.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-base.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-control.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-control.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-control.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-draw.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-draw.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-draw.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-feature-group.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-feature-group.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-feature-group.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-geojson.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-geojson.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-geojson.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-ilayer-bounds.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-ilayer-bounds.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-ilayer-bounds.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-ilayer-latlng.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-ilayer-latlng.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-ilayer-latlng.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-ilayer.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-ilayer.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-ilayer.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-image-overlay.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-image-overlay.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-image-overlay.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-layer-group.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-layer-group.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-layer-group.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-map.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-map.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-map.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-marker.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-marker.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-marker.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-path.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-path.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-path.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-polyline.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-polyline.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-polyline.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-popup.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-popup.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-popup.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-rectangle.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-rectangle.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-rectangle.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-tile-mapbox.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-tile-mapbox.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-tile-mapbox.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/components/leaf-tile.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/components");
  test("modules/ember-cli-leaflet/components/leaf-tile.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/components/leaf-tile.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/helpers/arr.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/helpers");
  test("modules/ember-cli-leaflet/helpers/arr.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/helpers/arr.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/helpers/latlng.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/helpers");
  test("modules/ember-cli-leaflet/helpers/latlng.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/helpers/latlng.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/helpers/neg.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/helpers");
  test("modules/ember-cli-leaflet/helpers/neg.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/helpers/neg.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/initializers/my-helpers.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/initializers");
  test("modules/ember-cli-leaflet/initializers/my-helpers.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/initializers/my-helpers.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/mixins/leaf-layer-group-promise.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/mixins");
  test("modules/ember-cli-leaflet/mixins/leaf-layer-group-promise.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/mixins/leaf-layer-group-promise.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/mixins/leaf-map-promise.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/mixins");
  test("modules/ember-cli-leaflet/mixins/leaf-map-promise.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/mixins/leaf-map-promise.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/mixins/leaf-marker-promise.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/mixins");
  test("modules/ember-cli-leaflet/mixins/leaf-marker-promise.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/mixins/leaf-marker-promise.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/mixins/leaf-style.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/mixins");
  test("modules/ember-cli-leaflet/mixins/leaf-style.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/mixins/leaf-style.js should pass jshint.");
  });

});
define('dummy/ember-cli-leaflet/tests/modules/ember-cli-leaflet/utils/rect.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-cli-leaflet/utils");
  test("modules/ember-cli-leaflet/utils/rect.js should pass jshint", function () {
    ok(true, "modules/ember-cli-leaflet/utils/rect.js should pass jshint.");
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("position", { path: ":hash" });
  });

  exports['default'] = Router;

});
define('dummy/routes/application', ['exports', 'ember', 'dummy/utils/geohash'], function (exports, Ember, geohash) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    queryParams: {
      latlng: { replace: true },
      zoom: { replace: true }
    },
    actions: {
      mapClick: function mapClick(component, event) {
        var hash = geohash['default'].encode(event.latlng.lat, event.latlng.lng, 9);
        this.transitionTo("position", hash);
        return false;
      },
      mapMoveend: function mapMoveend(component, event) {
        var map = event.target;
        var center = map.getCenter();
        this.controller.setProperties({
          latlng: [center.lat, center.lng].join(","),
          zoom: map.getZoom()
        });
        return false;
      }
    }
  });

});
define('dummy/routes/position', ['exports', 'ember', 'dummy/utils/geohash'], function (exports, Ember, geohash) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      var bbox = geohash['default'].decode_bbox(params.hash);

      return window.L.latLngBounds([{
        lat: bbox[0],
        lng: bbox[1]
      }, {
        lat: bbox[2],
        lng: bbox[3]
      }]);
    },

    serialize: function serialize(model) {
      var center = model.getCenter();
      return {
        hash: geohash['default'].encode(center.lat, center.lng, 9)
      };
    }
  });

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h2");
            dom.setAttribute(el1,"id","title");
            var el2 = dom.createTextNode("Center: ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("@");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            var morph0 = dom.createMorphAt(element0,0,1);
            var morph1 = dom.createMorphAt(element0,1,-1);
            content(env, morph0, context, "latlng");
            content(env, morph1, context, "zoom");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block, get = hooks.get, inline = hooks.inline, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
          var morph2 = dom.createMorphAt(fragment,2,3,contextualElement);
          block(env, morph0, context, "leaf-control", [], {}, child0, null);
          inline(env, morph1, context, "leaf-tile-mapbox", [], {"startLatlng": get(env, context, "latlng"), "startZoom": get(env, context, "zoom")});
          content(env, morph2, context, "outlet");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createElement("div");
        dom.setAttribute(el0,"class","force-fullscreen");
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,-1);
        block(env, morph0, context, "leaf-map", [], {"mapEvents": "click moveend", "mapClick": "mapClick", "mapMoveend": "mapMoveend"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/position', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  Now showing \"position\" route, inside the application template\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("pre");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),-1,-1);
          content(env, morph0, context, "bBoxString");
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    Auto updating property ");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
            content(env, morph0, context, "seconds");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,1]); }
          var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
          block(env, morph0, context, "leaf-popup", [], {"latlng": get(env, context, "center")}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        if (this.cachedFragment) { dom.repairClonedNode(fragment,[0,4]); }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,1,2,contextualElement);
        var morph2 = dom.createMorphAt(fragment,2,3,contextualElement);
        var morph3 = dom.createMorphAt(fragment,3,4,contextualElement);
        block(env, morph0, context, "leaf-control", [], {"position": "topright"}, child0, null);
        inline(env, morph1, context, "leaf-rectangle", [], {"bounds": get(env, context, "model"), "color": "red"});
        inline(env, morph2, context, "leaf-marker", [], {"layerEvents": "click", "layerClick": "markerClick", "location": get(env, context, "center")});
        block(env, morph3, context, "if", [get(env, context, "showPopup")], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(false, 'app.js should pass jshint.\napp.js: line 8, col 1, \'L\' is not defined.\n\n1 error'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/position.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/position.js should pass jshint', function() { 
    ok(true, 'controllers/position.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('dummy/tests/routes/position.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/position.js should pass jshint', function() { 
    ok(true, 'routes/position.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/utils/geohash.jshint', function () {

  'use strict';

  module('JSHint - utils');
  test('utils/geohash.js should pass jshint', function() { 
    ok(false, 'utils/geohash.js should pass jshint.\nutils/geohash.js: line 300, col 5, Bad line breaking before \'+\'.\nutils/geohash.js: line 302, col 5, Bad line breaking before \'+\'.\n\n2 errors'); 
  });

});
define('dummy/utils/geohash', ['exports'], function (exports) {

  'use strict';

  // https://raw.githubusercontent.com/sunng87/node-geohash/master/main.js
  /**
   * Copyright (c) 2011, Sun Ning.
   *
   * Permission is hereby granted, free of charge, to any person
   * obtaining a copy of this software and associated documentation
   * files (the "Software"), to deal in the Software without
   * restriction, including without limitation the rights to use, copy,
   * modify, merge, publish, distribute, sublicense, and/or sell copies
   * of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
   * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
   * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */

  var BASE32_CODES = "0123456789bcdefghjkmnpqrstuvwxyz";
  var BASE32_CODES_DICT = {};
  for (var i = 0; i < BASE32_CODES.length; i++) {
    BASE32_CODES_DICT[BASE32_CODES.charAt(i)] = i;
  }

  var ENCODE_AUTO = "auto";
  /**
   * Significant Figure Hash Length
   *
   * This is a quick and dirty lookup to figure out how long our hash
   * should be in order to guarantee a certain amount of trailing
   * significant figures. This was calculated by determining the error:
   * 45/2^(n-1) where n is the number of bits for a latitude or
   * longitude. Key is # of desired sig figs, value is minimum length of
   * the geohash.
   * @type Array
   */
  //     Desired sig figs:  0  1  2  3  4   5   6   7   8   9  10
  var SIGFIG_HASH_LENGTH = [0, 5, 7, 8, 11, 12, 13, 15, 16, 17, 18];
  /**
   * Encode
   *
   * Create a Geohash out of a latitude and longitude that is
   * `numberOfChars` long.
   *
   * @param {Number|String} latitude
   * @param {Number|String} longitude
   * @param {Number} numberOfChars
   * @returns {String}
   */
  var encode = function encode(latitude, longitude, numberOfChars) {
    if (numberOfChars === ENCODE_AUTO) {
      if (typeof latitude === "number" || typeof longitude === "number") {
        throw new Error("string notation required for auto precision.");
      }
      var decSigFigsLat = latitude.split(".")[1].length;
      var decSigFigsLong = longitude.split(".")[1].length;
      var numberOfSigFigs = Math.max(decSigFigsLat, decSigFigsLong);
      numberOfChars = SIGFIG_HASH_LENGTH[numberOfSigFigs];
    } else if (numberOfChars === undefined) {
      numberOfChars = 9;
    }

    var chars = [],
        bits = 0,
        bitsTotal = 0,
        hash_value = 0,
        maxLat = 90,
        minLat = -90,
        maxLon = 180,
        minLon = -180,
        mid;
    while (chars.length < numberOfChars) {
      if (bitsTotal % 2 === 0) {
        mid = (maxLon + minLon) / 2;
        if (longitude > mid) {
          hash_value = (hash_value << 1) + 1;
          minLon = mid;
        } else {
          hash_value = (hash_value << 1) + 0;
          maxLon = mid;
        }
      } else {
        mid = (maxLat + minLat) / 2;
        if (latitude > mid) {
          hash_value = (hash_value << 1) + 1;
          minLat = mid;
        } else {
          hash_value = (hash_value << 1) + 0;
          maxLat = mid;
        }
      }

      bits++;
      bitsTotal++;
      if (bits === 5) {
        var code = BASE32_CODES[hash_value];
        chars.push(code);
        bits = 0;
        hash_value = 0;
      }
    }
    return chars.join("");
  };

  /**
   * Encode Integer
   *
   * Create a Geohash out of a latitude and longitude that is of 'bitDepth'.
   *
   * @param {Number} latitude
   * @param {Number} longitude
   * @param {Number} bitDepth
   * @returns {Number}
   */
  var encode_int = function encode_int(latitude, longitude, bitDepth) {

    bitDepth = bitDepth || 52;

    var bitsTotal = 0,
        maxLat = 90,
        minLat = -90,
        maxLon = 180,
        minLon = -180,
        mid,
        combinedBits = 0;

    while (bitsTotal < bitDepth) {
      combinedBits *= 2;
      if (bitsTotal % 2 === 0) {
        mid = (maxLon + minLon) / 2;
        if (longitude > mid) {
          combinedBits += 1;
          minLon = mid;
        } else {
          maxLon = mid;
        }
      } else {
        mid = (maxLat + minLat) / 2;
        if (latitude > mid) {
          combinedBits += 1;
          minLat = mid;
        } else {
          maxLat = mid;
        }
      }
      bitsTotal++;
    }
    return combinedBits;
  };

  /**
   * Decode Bounding Box
   *
   * Decode hashString into a bound box matches it. Data returned in a four-element array: [minlat, minlon, maxlat, maxlon]
   * @param {String} hash_string
   * @returns {Array}
   */
  var decode_bbox = function decode_bbox(hash_string) {
    var isLon = true,
        maxLat = 90,
        minLat = -90,
        maxLon = 180,
        minLon = -180,
        mid;

    var hashValue = 0;
    for (var i = 0, l = hash_string.length; i < l; i++) {
      var code = hash_string[i].toLowerCase();
      hashValue = BASE32_CODES_DICT[code];

      for (var bits = 4; bits >= 0; bits--) {
        var bit = hashValue >> bits & 1;
        if (isLon) {
          mid = (maxLon + minLon) / 2;
          if (bit === 1) {
            minLon = mid;
          } else {
            maxLon = mid;
          }
        } else {
          mid = (maxLat + minLat) / 2;
          if (bit === 1) {
            minLat = mid;
          } else {
            maxLat = mid;
          }
        }
        isLon = !isLon;
      }
    }
    return [minLat, minLon, maxLat, maxLon];
  };

  /**
   * Decode Bounding Box Integer
   *
   * Decode hash number into a bound box matches it. Data returned in a four-element array: [minlat, minlon, maxlat, maxlon]
   * @param {Number} hashInt
   * @param {Number} bitDepth
   * @returns {Array}
   */
  var decode_bbox_int = function decode_bbox_int(hashInt, bitDepth) {

    bitDepth = bitDepth || 52;

    var maxLat = 90,
        minLat = -90,
        maxLon = 180,
        minLon = -180;

    var latBit = 0,
        lonBit = 0;
    var step = bitDepth / 2;

    for (var i = 0; i < step; i++) {

      lonBit = get_bit(hashInt, (step - i) * 2 - 1);
      latBit = get_bit(hashInt, (step - i) * 2 - 2);

      if (latBit === 0) {
        maxLat = (maxLat + minLat) / 2;
      } else {
        minLat = (maxLat + minLat) / 2;
      }

      if (lonBit === 0) {
        maxLon = (maxLon + minLon) / 2;
      } else {
        minLon = (maxLon + minLon) / 2;
      }
    }
    return [minLat, minLon, maxLat, maxLon];
  };

  function get_bit(bits, position) {
    return bits / Math.pow(2, position) & 1;
  }

  /**
   * Decode
   *
   * Decode a hash string into pair of latitude and longitude. A javascript object is returned with keys `latitude`,
   * `longitude` and `error`.
   * @param {String} hashString
   * @returns {Object}
   */
  var decode = function decode(hashString) {
    var bbox = decode_bbox(hashString);
    var lat = (bbox[0] + bbox[2]) / 2;
    var lon = (bbox[1] + bbox[3]) / 2;
    var latErr = bbox[2] - lat;
    var lonErr = bbox[3] - lon;
    return { latitude: lat, longitude: lon,
      error: { latitude: latErr, longitude: lonErr } };
  };

  /**
   * Decode Integer
   *
   * Decode a hash number into pair of latitude and longitude. A javascript object is returned with keys `latitude`,
   * `longitude` and `error`.
   * @param {Number} hash_int
   * @param {Number} bitDepth
   * @returns {Object}
   */
  var decode_int = function decode_int(hash_int, bitDepth) {
    var bbox = decode_bbox_int(hash_int, bitDepth);
    var lat = (bbox[0] + bbox[2]) / 2;
    var lon = (bbox[1] + bbox[3]) / 2;
    var latErr = bbox[2] - lat;
    var lonErr = bbox[3] - lon;
    return { latitude: lat, longitude: lon,
      error: { latitude: latErr, longitude: lonErr } };
  };

  /**
   * Neighbor
   *
   * Find neighbor of a geohash string in certain direction. Direction is a two-element array, i.e. [1,0] means north, [-1,-1] means southwest.
   * direction [lat, lon], i.e.
   * [1,0] - north
   * [1,1] - northeast
   * ...
   * @param {String} hashString
   * @param {Array} Direction as a 2D normalized vector.
   * @returns {String}
   */
  var neighbor = function neighbor(hashString, direction) {
    var lonLat = decode(hashString);
    var neighborLat = lonLat.latitude + direction[0] * lonLat.error.latitude * 2;
    var neighborLon = lonLat.longitude + direction[1] * lonLat.error.longitude * 2;
    return encode(neighborLat, neighborLon, hashString.length);
  };

  /**
   * Neighbor Integer
   *
   * Find neighbor of a geohash integer in certain direction. Direction is a two-element array, i.e. [1,0] means north, [-1,-1] means southwest.
   * direction [lat, lon], i.e.
   * [1,0] - north
   * [1,1] - northeast
   * ...
   * @param {String} hash_string
   * @returns {Array}
  */
  var neighbor_int = function neighbor_int(hash_int, direction, bitDepth) {
    bitDepth = bitDepth || 52;
    var lonlat = decode_int(hash_int, bitDepth);
    var neighbor_lat = lonlat.latitude + direction[0] * lonlat.error.latitude * 2;
    var neighbor_lon = lonlat.longitude + direction[1] * lonlat.error.longitude * 2;
    return encode_int(neighbor_lat, neighbor_lon, bitDepth);
  };

  /**
   * Neighbors
   *
   * Returns all neighbors' hashstrings clockwise from north around to northwest
   * 7 0 1
   * 6 x 2
   * 5 4 3
   * @param {String} hash_string
   * @returns {encoded neighborHashList|Array}
   */
  var neighbors = function neighbors(hash_string) {

    var hashstringLength = hash_string.length;

    var lonlat = decode(hash_string);
    var lat = lonlat.latitude;
    var lon = lonlat.longitude;
    var latErr = lonlat.error.latitude * 2;
    var lonErr = lonlat.error.longitude * 2;

    var neighbor_lat, neighbor_lon;

    var neighborHashList = [encodeNeighbor(1, 0), encodeNeighbor(1, 1), encodeNeighbor(0, 1), encodeNeighbor(-1, 1), encodeNeighbor(-1, 0), encodeNeighbor(-1, -1), encodeNeighbor(0, -1), encodeNeighbor(1, -1)];

    function encodeNeighbor(neighborLatDir, neighborLonDir) {
      neighbor_lat = lat + neighborLatDir * latErr;
      neighbor_lon = lon + neighborLonDir * lonErr;
      return encode(neighbor_lat, neighbor_lon, hashstringLength);
    }

    return neighborHashList;
  };

  /**
   * Neighbors Integer
   *
   * Returns all neighbors' hash integers clockwise from north around to northwest
   * 7 0 1
   * 6 x 2
   * 5 4 3
   * @param {Number} hash_int
   * @param {Number} bitDepth
   * @returns {encode_int'd neighborHashIntList|Array}
   */
  var neighbors_int = function neighbors_int(hash_int, bitDepth) {

    bitDepth = bitDepth || 52;

    var lonlat = decode_int(hash_int, bitDepth);
    var lat = lonlat.latitude;
    var lon = lonlat.longitude;
    var latErr = lonlat.error.latitude * 2;
    var lonErr = lonlat.error.longitude * 2;

    var neighbor_lat, neighbor_lon;

    var neighborHashIntList = [encodeNeighbor_int(1, 0), encodeNeighbor_int(1, 1), encodeNeighbor_int(0, 1), encodeNeighbor_int(-1, 1), encodeNeighbor_int(-1, 0), encodeNeighbor_int(-1, -1), encodeNeighbor_int(0, -1), encodeNeighbor_int(1, -1)];

    function encodeNeighbor_int(neighborLatDir, neighborLonDir) {
      neighbor_lat = lat + neighborLatDir * latErr;
      neighbor_lon = lon + neighborLonDir * lonErr;
      return encode_int(neighbor_lat, neighbor_lon, bitDepth);
    }

    return neighborHashIntList;
  };

  /**
   * Bounding Boxes
   *
   * Return all the hashString between minLat, minLon, maxLat, maxLon in numberOfChars
   * @param {Number} minLat
   * @param {Number} minLon
   * @param {Number} maxLat
   * @param {Number} maxLon
   * @param {Number} numberOfChars
   * @returns {bboxes.hashList|Array}
   */
  var bboxes = function bboxes(minLat, minLon, maxLat, maxLon, numberOfChars) {
    numberOfChars = numberOfChars || 9;

    var hashSouthWest = encode(minLat, minLon, numberOfChars);
    var hashNorthEast = encode(maxLat, maxLon, numberOfChars);

    var latLon = decode(hashSouthWest);

    var perLat = latLon.error.latitude * 2;
    var perLon = latLon.error.longitude * 2;

    var boxSouthWest = decode_bbox(hashSouthWest);
    var boxNorthEast = decode_bbox(hashNorthEast);

    var latStep = Math.round((boxNorthEast[0] - boxSouthWest[0]) / perLat);
    var lonStep = Math.round((boxNorthEast[1] - boxSouthWest[1]) / perLon);

    var hashList = [];

    for (var lat = 0; lat <= latStep; lat++) {
      for (var lon = 0; lon <= lonStep; lon++) {
        hashList.push(neighbor(hashSouthWest, [lat, lon]));
      }
    }

    return hashList;
  };

  /**
   * Bounding Boxes Integer
   *
   * Return all the hash integers between minLat, minLon, maxLat, maxLon in bitDepth
   * @param {Number} minLat
   * @param {Number} minLon
   * @param {Number} maxLat
   * @param {Number} maxLon
   * @param {Number} bitDepth
   * @returns {bboxes_int.hashList|Array}
   */
  var bboxes_int = function bboxes_int(minLat, minLon, maxLat, maxLon, bitDepth) {
    bitDepth = bitDepth || 52;

    var hashSouthWest = encode_int(minLat, minLon, bitDepth);
    var hashNorthEast = encode_int(maxLat, maxLon, bitDepth);

    var latlon = decode_int(hashSouthWest, bitDepth);

    var perLat = latlon.error.latitude * 2;
    var perLon = latlon.error.longitude * 2;

    var boxSouthWest = decode_bbox_int(hashSouthWest, bitDepth);
    var boxNorthEast = decode_bbox_int(hashNorthEast, bitDepth);

    var latStep = Math.round((boxNorthEast[0] - boxSouthWest[0]) / perLat);
    var lonStep = Math.round((boxNorthEast[1] - boxSouthWest[1]) / perLon);

    var hashList = [];

    for (var lat = 0; lat <= latStep; lat++) {
      for (var lon = 0; lon <= lonStep; lon++) {
        hashList.push(neighbor_int(hashSouthWest, [lat, lon], bitDepth));
      }
    }

    return hashList;
  };

  var geohash = {
    ENCODE_AUTO: ENCODE_AUTO,
    encode: encode,
    encode_uint64: encode_int, // keeping for backwards compatibility, will deprecate
    encode_int: encode_int,
    decode: decode,
    decode_int: decode_int,
    decode_uint64: decode_int, // keeping for backwards compatibility, will deprecate
    decode_bbox: decode_bbox,
    decode_bbox_uint64: decode_bbox_int, // keeping for backwards compatibility, will deprecate
    decode_bbox_int: decode_bbox_int,
    neighbor: neighbor,
    neighbor_int: neighbor_int,
    neighbors: neighbors,
    neighbors_int: neighbors_int,
    bboxes: bboxes,
    bboxes_int: bboxes_int
  };

  exports['default'] = geohash;

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-cli-leaflet","version":"0.0.0.160c331d"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map