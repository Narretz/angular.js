'use strict';

describe('ngRef', function() {

  describe('given a component', function() {

    var myComponentController, $rootScope, $compile;

    beforeEach(module(function($compileProvider) {
      $compileProvider.component('myComponent', {
        template: 'foo',
        controller: function() {
          myComponentController = this;
        }
      });
    }));

    beforeEach(module(function($exceptionHandlerProvider) {
      $exceptionHandlerProvider.mode('log');
    }));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
    }));

    afterEach(inject(function($exceptionHandler) {
      if ($exceptionHandler.errors.length) {
        dump(jasmine.getEnv().currentSpec.getFullName());
        dump('$exceptionHandler has errors');
        dump($exceptionHandler.errors);
        expect($exceptionHandler.errors).toBe([]);
      }
    }));

    it('should bind in the current scope the controller of a component', function() {
      $rootScope.$ctrl = 'undamaged';

      $compile('<my-component ng-ref="myComponent"></my-component>')($rootScope);
      expect($rootScope.$ctrl).toBe('undamaged');
      expect($rootScope.myComponent).toBe(myComponentController);
    });

    it('should work with non:normalized entity name', function() {
      $compile('<my:component ng-ref="myComponent1"></my:component>')($rootScope);
      expect($rootScope.myComponent1).toBe(myComponentController);
    });

    it('should work with data-non-normalized entity name', function() {
      $compile('<data-my-component ng-ref="myComponent2"></data-my-component>')($rootScope);
      expect($rootScope.myComponent2).toBe(myComponentController);
    });

    it('should work with x-non-normalized entity name', function() {
      $compile('<x-my-component ng-ref="myComponent3"></x-my-component>')($rootScope);
      expect($rootScope.myComponent3).toBe(myComponentController);
    });

    it('should work with data-non-normalized attribute name', function() {
      $compile('<my-component data-ng-ref="myComponent1"></my-component>')($rootScope);
      expect($rootScope.myComponent1).toBe(myComponentController);
    });

    it('should work with x-non-normalized attribute name', function() {
      $compile('<my-component x-ng-ref="myComponent2"></my-component>')($rootScope);
      expect($rootScope.myComponent2).toBe(myComponentController);
    });

    it('should not leak to parent scopes', function() {
      var template =
        '<div ng-if="true">' +
          '<my-component ng-ref="myComponent"></my-component>' +
        '</div>';
      $compile(template)($rootScope);
      expect($rootScope.myComponent).toBe(undefined);
    });

    it('should nullify the variable once the component is destroyed', function() {
      var template = '<div><my-component ng-ref="myComponent"></my-component></div>';

      var element = $compile(template)($rootScope);
      expect($rootScope.myComponent).toBe(myComponentController);

      var componentElement = element.children();
      var isolateScope = componentElement.isolateScope();
      componentElement.remove();
      isolateScope.$destroy();
      expect($rootScope.myComponent).toBe(null);
    });

    it('should be compatible with entering/leaving components', inject(function($animate) {
      var template = '<my-component ng-ref="myComponent"></my-component>';
      $rootScope.$ctrl = {};
      var parent = $compile('<div></div>')($rootScope);

      var leaving = $compile(template)($rootScope);
      var leavingController = myComponentController;

      $animate.enter(leaving, parent);
      expect($rootScope.myComponent).toBe(leavingController);

      var entering = $compile(template)($rootScope);
      var enteringController = myComponentController;

      $animate.enter(entering, parent);
      $animate.leave(leaving, parent);
      expect($rootScope.myComponent).toBe(enteringController);
    }));

    it('should allow bind to a parent controller', function() {
      $rootScope.$ctrl = {};

      $compile('<my-component ng-ref="$ctrl.myComponent"></my-component>')($rootScope);
      expect($rootScope.$ctrl.myComponent).toBe(myComponentController);
    });

    it('should bind the element instead of the controller of a component if ngRefElement is set', function() {
      $rootScope.$ctrl = 'undamaged';

      var el = $compile('<my-component ng-ref="myEl" ng-ref-element></my-component>')($rootScope);
      expect($rootScope.$ctrl).toBe('undamaged');
      expect($rootScope.myEl).toEqual(el);
      expect($rootScope.myEl[0].textContent).toBe('foo');
    });

  });

  it('should bind the jqlite wrapped DOM element if there is no component', inject(function($compile, $rootScope) {
    var el = $compile('<span ng-ref="mySpan">my text</span>')($rootScope);

    expect($rootScope.mySpan).toEqual(el);
    expect($rootScope.mySpan[0].textContent).toBe('my text');
  }));

  it('should nullify the dom element value if it is destroyed', inject(function($compile, $rootScope) {
    var element = $compile('<div><span ng-ref="mySpan">my text</span></div>')($rootScope);
    element.children().remove();
    expect($rootScope.mySpan).toBe(null);
  }));

  it('should bind the controller of an element directive', function() {
    var myDirectiveController;

    module(function($compileProvider) {
      $compileProvider.directive('myDirective', function() {
        return {
          controller: function() {
            myDirectiveController = this;
          }
        };
      });
    });

    inject(function($compile, $rootScope) {
      $compile('<my-directive ng-ref="myDirective"></my-directive>')($rootScope);

      expect($rootScope.myDirective).toBe(myDirectiveController);
    });
  });


  it('should bind the element instead an element-directive controller if ngRefElement is set', function() {
    var myDirectiveController;

    module(function($compileProvider) {
      $compileProvider.directive('myDirective', function() {
        return {
          restrict: 'E',
          template: 'my text',
          controller: function() {
            myDirectiveController = this;
          }
        };
      });
    });

    inject(function($compile, $rootScope) {
      var el = $compile('<my-directive ng-ref="myEl" ng-ref-element></my-directive>')($rootScope);

      expect($rootScope.myEl).toEqual(el);
      expect($rootScope.myEl[0].textContent).toBe('my text');
    });
  });


  it('should bind the jqlite element if the controller is on an attribute-directive', function() {
    var myDirectiveController;

    module(function($compileProvider) {
      $compileProvider.directive('myDirective', function() {
        return {
          restrict: 'A',
          template: 'my text',
          controller: function() {
            myDirectiveController = this;
          }
        };
      });
    });

    inject(function($compile, $rootScope) {
      var el = $compile('<div my-directive ng-ref="myEl"></div>')($rootScope);

      expect(myDirectiveController).toBeDefined();
      expect($rootScope.myEl).toEqual(el);
      expect($rootScope.myEl[0].textContent).toBe('my text');
    });
  });


  it('should bind the jqlite element if the controller is on an class-directive', function() {
    var myDirectiveController;

    module(function($compileProvider) {
      $compileProvider.directive('myDirective', function() {
        return {
          restrict: 'C',
          template: 'my text',
          controller: function() {
            myDirectiveController = this;
          }
        };
      });
    });

    inject(function($compile, $rootScope) {
      var el = $compile('<div class="my-directive" ng-ref="myEl"></div>')($rootScope);

      expect(myDirectiveController).toBeDefined();
      expect($rootScope.myEl).toEqual(el);
      expect($rootScope.myEl[0].textContent).toBe('my text');
    });
  });

  describe('transclusion', function() {

    it('should work with simple transclusion', function() {
      module(function($compileProvider) {
        $compileProvider
          .component('myComponent', {
            transclude: true,
            template: '<ng-transclude></ng-transclude>',
            controller: function() {
              this.text = 'SUCCESS';
            }
          });
      });

      inject(function($compile, $rootScope) {
        var template = '<my-component ng-ref="myComponent">{{myComponent.text}}</my-component>';
        var element = $compile(template)($rootScope);
        $rootScope.$apply();
        expect(element.text()).toBe('SUCCESS');
        dealoc(element);
      });
    });

    it('should be compatible with element transclude components', function() {
      module(function($compileProvider) {
        $compileProvider
          .component('myComponent', {
            transclude: 'element',
            controller: function($animate, $element, $transclude) {
              this.text = 'SUCCESS';
              $transclude(function(clone, newScope) {
                $animate.enter(clone, $element.parent(), $element);
              });
            }
          });
      });

      inject(function($compile, $rootScope) {
        var template =
          '<div>' +
            '<my-component ng-ref="myComponent">' +
              '{{myComponent.text}}' +
            '</my-component>' +
          '</div>';
        var element = $compile(template)($rootScope);
        $rootScope.$apply();
        expect(element.text()).toBe('SUCCESS');
        dealoc(element);
      });
    });

    it('should be compatible with ngIf and transclusion on same element', function() {
      module(function($compileProvider) {
        $compileProvider.component('myComponent', {
          template: '<ng-transclude></ng-transclude>',
          transclude: true,
          controller: function($scope) {
            this.text = 'SUCCESS';
          }
        });
      });

      inject(function($compile, $rootScope) {
        var template =
          '<div>' +
            '<my-component ng-if="present" ng-ref="myComponent" >' +
                '{{myComponent.text}}' +
            '</my-component>' +
          '</div>';
        var element = $compile(template)($rootScope);

        $rootScope.$apply('present = false');
        expect(element.text()).toBe('');
        $rootScope.$apply('present = true');
        expect(element.text()).toBe('SUCCESS');
        $rootScope.$apply('present = false');
        expect(element.text()).toBe('');
        $rootScope.$apply('present = true');
        expect(element.text()).toBe('SUCCESS');
        dealoc(element);
      });
    });

    it('should be compatible with element transclude & destroy components', function() {
      var myComponentController;
      module(function($compileProvider) {
        $compileProvider
          .component('myTranscludingComponent', {
            transclude: 'element',
            controller: function($animate, $element, $transclude) {
              myComponentController = this;

              var currentClone, currentScope;
              this.transclude = function(text) {
                this.text = text;
                $transclude(function(clone, newScope) {
                  currentClone = clone;
                  currentScope = newScope;
                  $animate.enter(clone, $element.parent(), $element);
                });
              };
              this.destroy = function() {
                currentClone.remove();
                currentScope.$destroy();
              };
            }
          });
      });

      inject(function($compile, $rootScope) {
        var template =
          '<div>' +
            '<my-transcluding-component ng-ref="myComponent">' +
              '{{myComponent.text}}' +
            '</my-transcluding-component>' +
          '</div>';
        var element = $compile(template)($rootScope);
        $rootScope.$apply();
        expect(element.text()).toBe('');

        myComponentController.transclude('transcludedOk');
        $rootScope.$apply();
        expect(element.text()).toBe('transcludedOk');

        myComponentController.destroy();
        $rootScope.$apply();
        expect(element.text()).toBe('');
      });
    });

    it('should be compatible with element transclude directives', function() {
      module(function($compileProvider) {
        $compileProvider
          .directive('myDirective', function() {
            return {
              transclude: 'element',
              controller: function($animate, $element, $transclude) {
                this.text = 'SUCCESS';
                $transclude(function(clone, newScope) {
                  $animate.enter(clone, $element.parent(), $element);
                });
              }
            };
          });
      });

      inject(function($compile, $rootScope) {
        var template =
          '<div>' +
            '<my-directive ng-ref="myDirective">' +
              '{{myDirective.text}}' +
            '</my-directive>' +
          '</div>';
        var element = $compile(template)($rootScope);
        $rootScope.$apply();
        expect(element.text()).toBe('SUCCESS');
        dealoc(element);
      });
    });

  });

  it('should work with components with templates via $http', function() {
    module(function($compileProvider) {
      $compileProvider.component('httpComponent', {
        templateUrl: 'template.html',
        controller: function() {
          this.me = true;
        }
      });
    });

    inject(function($compile, $httpBackend, $rootScope) {
      var template = '<div><http-component ng-ref="controller"></http-component></div>';
      var element = $compile(template)($rootScope);
      $httpBackend.expect('GET', 'template.html').respond('ok');
      $rootScope.$apply();
      expect($rootScope.controller).toBeUndefined();
      $httpBackend.flush();
      expect($rootScope.controller.me).toBe(true);
      dealoc(element);
    });
  });

});
