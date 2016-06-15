<a name="v1.5.10"></a>
# v1.5.10 (2016-06-15)

<a name="v1.5.10-bug-fixes"></a>


## Bug Fixes {#v1.5.10}

- **$animate:** don't break on anchored animations without duration
  ([3f8efe73](https://github.com/angular/angular.js/commit/3f8efe73fc2bb6fb029952290129f7a788aae772),
   [#14641](https://github.com/angular/angular.js/issues/14641), [#14645](https://github.com/angular/angular.js/issues/14645))
- **$brower:** set the url even if the browser transforms it
  ([51cfb61e](https://github.com/angular/angular.js/commit/51cfb61e46c18a4aac27340120a276dda1112637),
   [#14427](https://github.com/angular/angular.js/issues/14427), [#14499](https://github.com/angular/angular.js/issues/14499))
- **$compile:**
  - secure `link[href]` as a `RESOURCE_URL`s in `$sce`.
  ([04cad41d](https://github.com/angular/angular.js/commit/04cad41d26ebaf44b5ee0c29a152d61f235f3efa),
   [#14687](https://github.com/angular/angular.js/issues/14687))
  - don't add leading white-space in attributes for a specific merge case
  ([305ba1a3](https://github.com/angular/angular.js/commit/305ba1a3fb3529cb3fdf04c12ac03fbb4f634456))
  - don't trim white-space in attributes
  ([97bbf86a](https://github.com/angular/angular.js/commit/97bbf86a1979d099802f0d631c17c54b87563b40),
   [#5513](https://github.com/angular/angular.js/issues/5513), [#14539](https://github.com/angular/angular.js/issues/14539), [#5597](https://github.com/angular/angular.js/issues/5597))
  - don't add merged attributes twice to $attrs
  ([3ba29c46](https://github.com/angular/angular.js/commit/3ba29c464da9d73de0ea7c7716dc1ecc60bc5287),
   [#8159](https://github.com/angular/angular.js/issues/8159), [#14737](https://github.com/angular/angular.js/issues/14737))
  - cope with `$onChanges` hooks throwing
  ([de544807](https://github.com/angular/angular.js/commit/de544807c23076b4d4eacd8f77682a9028980656),
   [#14444](https://github.com/angular/angular.js/issues/14444), [#14463](https://github.com/angular/angular.js/issues/14463))
  - properly bind context to linking functions for directives with `templateUrl`
  ([24705824](https://github.com/angular/angular.js/commit/24705824d3ed12a13001efce881b4caf444ac921))
  - always use the DDO as `this` in pre-/post-linking functions
  ([7d0fe197](https://github.com/angular/angular.js/commit/7d0fe19734c38c3d5e2fe2581e48bd345495e4d2),
   [#9306](https://github.com/angular/angular.js/issues/9306))
  - don't run unnecessary update to one-way bindings
  ([f1f892d6](https://github.com/angular/angular.js/commit/f1f892d6c0daa8f9ae7b9e4594cee9fe92414d94),
   [#14546](https://github.com/angular/angular.js/issues/14546), [#14580](https://github.com/angular/angular.js/issues/14580))
  - removing unnecessary white space in element-transclusion comments
  ([aaa069a6](https://github.com/angular/angular.js/commit/aaa069a65a229b4bccfad37cd588326411387615),
   [#14549](https://github.com/angular/angular.js/issues/14549), [#14550](https://github.com/angular/angular.js/issues/14550))
  - properly handle setting `srcset` to undefined
  ([2310e109](https://github.com/angular/angular.js/commit/2310e1090a2c45f95a02cabd65e0899739b9f221),
   [#14470](https://github.com/angular/angular.js/issues/14470), [#14493](https://github.com/angular/angular.js/issues/14493))
  - do not use `noop()` as controller for multiple components
  ([9264cef0](https://github.com/angular/angular.js/commit/9264cef03f4761a73f4fd8f4e32b150a337da1d2),
   [#14391](https://github.com/angular/angular.js/issues/14391), [#14402](https://github.com/angular/angular.js/issues/14402))
  - still trigger `$onChanges` even if the inner value already matches the new value
  ([4a0bd6ce](https://github.com/angular/angular.js/commit/4a0bd6ce69f104bc0e430b9ce0b3816052ede85c),
   [#14406](https://github.com/angular/angular.js/issues/14406))
  - handle boolean attributes in `@` bindings
  ([1cb8d529](https://github.com/angular/angular.js/commit/1cb8d529a652f3de68085f6f4e1355b8e51e7bab),
   [#14070](https://github.com/angular/angular.js/issues/14070))
  - move check for interpolation of on-event attributes to compile time
  ([b89c2181](https://github.com/angular/angular.js/commit/b89c2181a9a165e06c027390164e08635ec449f4),
   [#13267](https://github.com/angular/angular.js/issues/13267))
  - don't throw if controller is named
  ([d2795457](https://github.com/angular/angular.js/commit/d27954575f8b35db1e9d8b2a047f97eaab0881f3))
  - ensure that `$onChanges` hook is called correctly
  ([b54634d3](https://github.com/angular/angular.js/commit/b54634d37b69bd3f7f563d0718873fe9f50eb2d1),
   [#14355](https://github.com/angular/angular.js/issues/14355), [#14359](https://github.com/angular/angular.js/issues/14359))
  - workaround a GC bug in Chrome < 50
  ([e34ef23a](https://github.com/angular/angular.js/commit/e34ef23ab868b36d18ee845f78536f0987edf56a),
   [#14041](https://github.com/angular/angular.js/issues/14041), [#14286](https://github.com/angular/angular.js/issues/14286))
- **$http:** pass event object to `eventHandlers`/`uploadEventHandlers`
  ([ddac3b33](https://github.com/angular/angular.js/commit/ddac3b3348e0d5cddba81cf1ad6848a23685d8a6),
   [#14436](https://github.com/angular/angular.js/issues/14436))
- **$injector:**
  - add workaround for class stringification in Chrome v50/51
  ([afcedff3](https://github.com/angular/angular.js/commit/afcedff34c8a44dda0d558d9d6337962f5f03d7b),
   [#14531](https://github.com/angular/angular.js/issues/14531))
  - add workaround for fat-arrow stringification in Chrome v50/51
  ([8dc1f8e0](https://github.com/angular/angular.js/commit/8dc1f8e00e4b1cac11346fc080c465d0b2852a7f),
   [#14487](https://github.com/angular/angular.js/issues/14487), [#14495](https://github.com/angular/angular.js/issues/14495))
  - ensure functions with overridden `toString()` are annotated properly
  ([a0b5e1a8](https://github.com/angular/angular.js/commit/a0b5e1a85893f65a45f6c776b5a8a2ef96be9580),
   [#14361](https://github.com/angular/angular.js/issues/14361))
- **$parse:**
  - allow arguments to contain filter chains
  ([362d11b5](https://github.com/angular/angular.js/commit/362d11b5195d52615f23334b5bd3338b4e80281a),
   [#4175](https://github.com/angular/angular.js/issues/4175), [#4168](https://github.com/angular/angular.js/issues/4168), [#14720](https://github.com/angular/angular.js/issues/14720))
  - call once stable bind-once expressions with filter
  ([3b5751dc](https://github.com/angular/angular.js/commit/3b5751dce8d6c699dc76e47cfa544c30b38b9771))
  - Handle sign of `-undefined` consistently
  ([c1eaf348](https://github.com/angular/angular.js/commit/c1eaf3480b9a88e5309ff4931a720f3f62bd7606))
- **$route:** don't process route change controllers and templates for `redirectTo` routes
  ([7f4b356c](https://github.com/angular/angular.js/commit/7f4b356c2bebb87f0c26b57a20415b004b20bcd1),
   [#3332](https://github.com/angular/angular.js/issues/3332), [#14658](https://github.com/angular/angular.js/issues/14658))
- **$routeProvider:** do not deep-copy route definition objects
  ([53ab8bcd](https://github.com/angular/angular.js/commit/53ab8bcde1ee8fa88d06dd3b5ed4986cb141c129),
   [#14478](https://github.com/angular/angular.js/issues/14478), [#14699](https://github.com/angular/angular.js/issues/14699), [#14750](https://github.com/angular/angular.js/issues/14750))
- **$sniffer:** fix history sniffing in Chrome Packaged Apps
  ([9f5526f8](https://github.com/angular/angular.js/commit/9f5526f861f2f60f0d0f9fddfc484a9cd9d9b594),
   [#11932](https://github.com/angular/angular.js/issues/11932), [#13945](https://github.com/angular/angular.js/issues/13945))
- **$templateRequest:** trust empty templates in `$templateCache` as well
  ([8576baf7](https://github.com/angular/angular.js/commit/8576baf7510d292f00f430cbaca134fe7d014565),
   [#14479](https://github.com/angular/angular.js/issues/14479), [#14496](https://github.com/angular/angular.js/issues/14496))
- **$timeout:** make $flush handle new $timeouts added in $timeout callbacks
  ([d23c1453](https://github.com/angular/angular.js/commit/d23c1453cd3ec80006fedc4fa90bcb095d01dc9f),
   [#5420](https://github.com/angular/angular.js/issues/5420), [#14686](https://github.com/angular/angular.js/issues/14686))
- **filters:** always call `splice()` with 2 arguments or more
  ([25a7aefc](https://github.com/angular/angular.js/commit/25a7aefc1217dc56ee09d4a4f33ae4d17ea2183c),
   [#14467](https://github.com/angular/angular.js/issues/14467), [#14489](https://github.com/angular/angular.js/issues/14489))
- **formatNumber:** handle small numbers correctly when `gSize` !== `lgSize`
  ([4202d8a5](https://github.com/angular/angular.js/commit/4202d8a5de82aed7c2459b3693a26dda07e457d3),
   [#14289](https://github.com/angular/angular.js/issues/14289), [#14290](https://github.com/angular/angular.js/issues/14290))
- **input[email]:** improve email address validation
  ([f3f5cf72](https://github.com/angular/angular.js/commit/f3f5cf72ee6ed263c61286a92662a547ad143eba),
   [#14719](https://github.com/angular/angular.js/issues/14719))
- **loader:** module.decorator order of operations is now irrelevant
  ([6a2ebdba](https://github.com/angular/angular.js/commit/6a2ebdba5df27e789e3cb10f11eedf90f7b9b97e),
   [#12382](https://github.com/angular/angular.js/issues/12382), [#14348](https://github.com/angular/angular.js/issues/14348))
- **ng-bind-html:** watch the unwrapped value using `$sce.valueOf()` (instead of `toString()`)
  ([707664a3](https://github.com/angular/angular.js/commit/707664a3c448732443bf54027dacda39babdd0c4),
   [#14526](https://github.com/angular/angular.js/issues/14526), [#14527](https://github.com/angular/angular.js/issues/14527))
- **ngAnimate:**
  - properly handle empty jqLite collections
  ([5b053b18](https://github.com/angular/angular.js/commit/5b053b18d07dddad28a91636389c22f5cedeab89),
   [#14558](https://github.com/angular/angular.js/issues/14558), [#14559](https://github.com/angular/angular.js/issues/14559))
  - remove event listeners only after all listeners have been called
  ([f8e6a4bc](https://github.com/angular/angular.js/commit/f8e6a4bcba33e70c0d09cfedd17be628af33c206),
   [#14321](https://github.com/angular/angular.js/issues/14321))
  - fire callbacks when document is hidden
  ([2b327f01](https://github.com/angular/angular.js/commit/2b327f01be16c5eae3fbee99b09dbf58f5b8ae36),
   [#14120](https://github.com/angular/angular.js/issues/14120))
  - fire callbacks in the correct order for certain skipped animations
  ([eb2126a3](https://github.com/angular/angular.js/commit/eb2126a388b8866ce1d9d7e3f6e7caa3ca97648b))
  - run structural animations with cancelled out class changes
  ([cc1de81f](https://github.com/angular/angular.js/commit/cc1de81f5e2867e9ee6db9ecb2a4fd9d19fa2588),
   [#14249](https://github.com/angular/angular.js/issues/14249))
- **ngAnimate.$animate:** remove animation callbacks when the element is removed
  ([e166621c](https://github.com/angular/angular.js/commit/e166621c9d05691ed686d9115abbd159f8ece1b9))
- **ngAria:** don't add roles to native control elements
  ([9978de11](https://github.com/angular/angular.js/commit/9978de11b7295fec1a2f4cb8fbeb9b62b54cb711),
   [#14145](https://github.com/angular/angular.js/issues/14145))
- **ngClass:** fix watching of an array expression containing an object
  ([74eb4684](https://github.com/angular/angular.js/commit/74eb4684dce1d75c77e74fff4b98724a13438610),
   [#14405](https://github.com/angular/angular.js/issues/14405))
- **ngMessages:**
  - create new scope for ngMessage, clean it up correctly
  ([3360b44b](https://github.com/angular/angular.js/commit/3360b44be6ca67ddd0a9acbe55527cf573e2ce60),
   [#14307](https://github.com/angular/angular.js/issues/14307))
  - don't crash when nested messages are removed
  ([cbd048d8](https://github.com/angular/angular.js/commit/cbd048d893cc82e5cfed0c799563b1d42b3ad721),
   [#14183](https://github.com/angular/angular.js/issues/14183), [#14242](https://github.com/angular/angular.js/issues/14242))
- **ngMessagesInclude:** do not compile template if scope is destroyed
  ([ab247d62](https://github.com/angular/angular.js/commit/ab247d620345f513138a3149b8ef0653e5cd8328),
   [#12695](https://github.com/angular/angular.js/issues/12695), [#14640](https://github.com/angular/angular.js/issues/14640))
- **ngMock:**
  - match HTTP request regardless of the order of query params
  ([1581827a](https://github.com/angular/angular.js/commit/1581827a512e99c38d313196bc7bf8f6818b0cf5),
   [#12762](https://github.com/angular/angular.js/issues/12762))
  - fix collecting stack trace in `inject()` on IE10+, PhantomJS
  ([92c3b753](https://github.com/angular/angular.js/commit/92c3b753d487e144db0c2828191cc2c11bd70746),
   [#13591](https://github.com/angular/angular.js/issues/13591), [#13592](https://github.com/angular/angular.js/issues/13592), [#13593](https://github.com/angular/angular.js/issues/13593))
- **ngMock#$controller:** properly assign bindings to all types of controllers (e.g. class-based)
  ([96266b9d](https://github.com/angular/angular.js/commit/96266b9d9e8e5e1c8cefcab8ad1050396999c58f),
   [#14437](https://github.com/angular/angular.js/issues/14437), [#14439](https://github.com/angular/angular.js/issues/14439))
- **ngMock/$httpBackend:** fail if a url is provided but is `undefined`
  ([7551b897](https://github.com/angular/angular.js/commit/7551b8975a91ee286cc2cf4af5e78f924533575e),
   [#8442](https://github.com/angular/angular.js/issues/8442), [#8462](https://github.com/angular/angular.js/issues/8462), [#10934](https://github.com/angular/angular.js/issues/10934), [#12777](https://github.com/angular/angular.js/issues/12777))
- **ngMockE2E:** allow $httpBackend.passThrough() to work when ngMock is loaded
  ([ff0395f1](https://github.com/angular/angular.js/commit/ff0395f11149bc20f9349953c8ee907147355818),
   [#1434](https://github.com/angular/angular.js/issues/1434), [#13124](https://github.com/angular/angular.js/issues/13124))
- **ngMocks:** pass eventHandlers to $httpBackend if passThrough is active
  ([253cb8d4](https://github.com/angular/angular.js/commit/253cb8d4e912a59d1cedd247c92f2d8dace3ec3a),
   [#14471](https://github.com/angular/angular.js/issues/14471))
- **ngOptions:** set select value when model matches disabled option
  ([3b05c484](https://github.com/angular/angular.js/commit/3b05c484af074f0c7c050b0f9824099d627e178f),
   [#12756](https://github.com/angular/angular.js/issues/12756))
- **ngSanitize:** call attribute setter in linky for all links
  ([8e55b784](https://github.com/angular/angular.js/commit/8e55b784dea74a4a0d1847e063f705379c213c00),
   [#14707](https://github.com/angular/angular.js/issues/14707))
- **ngTransclude:** only compile fallback content if necessary
  ([2adaff08](https://github.com/angular/angular.js/commit/2adaff083f309bd324c466edd781f3edbf0aff89),
   [#14768](https://github.com/angular/angular.js/issues/14768), [#14765](https://github.com/angular/angular.js/issues/14765), [#14775](https://github.com/angular/angular.js/issues/14775))
- **select:** remove workaround for Chrome bug
  ([87eff27e](https://github.com/angular/angular.js/commit/87eff27e971414fb163e2b5a7cfe78cb097a1951))
- **travis:** Don't run e2e tests with jQuery twice
  ([038d990b](https://github.com/angular/angular.js/commit/038d990bc15a2b6694f801716ffaa5722d49e112))


## Features {#v1.5.10}

- **$compile:**
  - support omitting required controller name if same as the local name
  ([0780666e](https://github.com/angular/angular.js/commit/0780666e41938e28984a4496231008ae6066c41e),
   [#14513](https://github.com/angular/angular.js/issues/14513))
  - put custom annotations on DDO
  ([4b2bc60e](https://github.com/angular/angular.js/commit/4b2bc60e43138d457678338d6c78c5caf5d3423c),
   [#14369](https://github.com/angular/angular.js/issues/14369), [#14279](https://github.com/angular/angular.js/issues/14279), [#14284](https://github.com/angular/angular.js/issues/14284))
  - add `isFirstChange()` method to onChanges object
  ([a6a4b235](https://github.com/angular/angular.js/commit/a6a4b235178b1a6e9374e9733bd8aa94fe9322dd),
   [#14318](https://github.com/angular/angular.js/issues/14318), [#14323](https://github.com/angular/angular.js/issues/14323))
  - add more lifecycle hooks to directive controllers
  ([874c0fdc](https://github.com/angular/angular.js/commit/874c0fdcdd031aedae56a56a51eca8c2ca6e5a57),
   [#14127](https://github.com/angular/angular.js/issues/14127), [#14030](https://github.com/angular/angular.js/issues/14030), [#14020](https://github.com/angular/angular.js/issues/14020), [#13991](https://github.com/angular/angular.js/issues/13991), [#14302](https://github.com/angular/angular.js/issues/14302))
- **$componentController:** provide isolated scope if none is passed (#14425)
  ([2840aec8](https://github.com/angular/angular.js/commit/2840aec8f18cd082afcd78f4d3970309b7d3c874),
   [#14425](https://github.com/angular/angular.js/issues/14425))
- **$http:**
  - support handling additional XHR events
  ([d4978222](https://github.com/angular/angular.js/commit/d49782226689a135b7f6a86ee35bcded59c22b33),
   [#14367](https://github.com/angular/angular.js/issues/14367), [#11547](https://github.com/angular/angular.js/issues/11547), [#1934](https://github.com/angular/angular.js/issues/1934))
  - support handling additional XHR events
  ([50cdedef](https://github.com/angular/angular.js/commit/50cdedef36c733303bb0e277d42fa15b63f934d9),
   [#11547](https://github.com/angular/angular.js/issues/11547), [#1934](https://github.com/angular/angular.js/issues/1934))
- **$location:** default hashPrefix to '!'
  ([aa077e81](https://github.com/angular/angular.js/commit/aa077e81129c740041438688dff2e8d20c3d7b52),
   [#13812](https://github.com/angular/angular.js/issues/13812), [#14202](https://github.com/angular/angular.js/issues/14202))
- **$parse:**
  - Add support for ES6 object initializers
  ([b5a0c8d2](https://github.com/angular/angular.js/commit/b5a0c8d2ea6d595fac18805e25c8a4797b07c7f1))
  - Add the ability to define the identifier characters
  ([ad298947](https://github.com/angular/angular.js/commit/ad298947a031aad95b145c6fefde028d6aac481f))
- **$q:** report promises with non rejection callback
  ([c9dffde1](https://github.com/angular/angular.js/commit/c9dffde1cb167660120753181cb6d01dc1d1b3d0))
- **$route:** implement `resolveRedirectTo`
  ([e9865654](https://github.com/angular/angular.js/commit/e9865654b39c71be71034c38581a8c7bd16bc716),
   [#5150](https://github.com/angular/angular.js/issues/5150), [#14695](https://github.com/angular/angular.js/issues/14695))
- **i18n:** generates test for comparing locale data of Angular and node-cldr
  ([102713fb](https://github.com/angular/angular.js/commit/102713fb3467f334c811076d8725883c1f348486))
- **input[radio]:** allow ng-trim to work for input[type=radio]
  ([47724baf](https://github.com/angular/angular.js/commit/47724baffe050269385b3481e9a9cf4ab3944b4b))
- **limitTo:** add support for array-like objects
  ([f467dc3d](https://github.com/angular/angular.js/commit/f467dc3dd5fe0a046f91488bd92d1098855aaf1b),
   [#14657](https://github.com/angular/angular.js/issues/14657), [#14694](https://github.com/angular/angular.js/issues/14694))
- **ngAnimate:** let $animate.off() remove all listeners for an element
  ([ea4120bf](https://github.com/angular/angular.js/commit/ea4120bf3524c270cebbf3e4dd0ba31552de6f1f))
- **ngAria:** add support for aria-readonly based on ngReadonly
  ([ae0a7160](https://github.com/angular/angular.js/commit/ae0a716000ba6435916c17be85029a9db1d181a0),
   [#14140](https://github.com/angular/angular.js/issues/14140), [#14077](https://github.com/angular/angular.js/issues/14077))
- **ngMessagesInclude:** don't break on empty (or whitespace-only) templates
  ([f3377da6](https://github.com/angular/angular.js/commit/f3377da6a748007c11fde090890ee58fae4cefa5),
   [#12941](https://github.com/angular/angular.js/issues/12941), [#14726](https://github.com/angular/angular.js/issues/14726))
- **ngParseExt:** New ngParseExt module
  ([bd0915c4](https://github.com/angular/angular.js/commit/bd0915c4007dcc5b0cae6968598731117c510ffa))
- **orderBy:** add support for custom comparators
  ([48c8b230](https://github.com/angular/angular.js/commit/48c8b230cb234be07497fcf33e1aaee7a883ba0a),
   [#13238](https://github.com/angular/angular.js/issues/13238), [#14455](https://github.com/angular/angular.js/issues/14455), [#5123](https://github.com/angular/angular.js/issues/5123), [#8112](https://github.com/angular/angular.js/issues/8112), [#10368](https://github.com/angular/angular.js/issues/10368), [#14468](https://github.com/angular/angular.js/issues/14468))


## Performance Improvements {#v1.5.10}

- **$animate:** listen for document visibility changes
  ([d71dc2f5](https://github.com/angular/angular.js/commit/d71dc2f5afec230711351e9f160873a41eb60597),
   [#14066](https://github.com/angular/angular.js/issues/14066))
- **$compile:**
  - use createMap() for directive bindings to allow fast forEach
  ([fe1127a3](https://github.com/angular/angular.js/commit/fe1127a322be4c64f3bbe882c3b358b468ce207c),
   [#12529](https://github.com/angular/angular.js/issues/12529))
  - use strict comparison for controller === '@'
  ([bbd3db14](https://github.com/angular/angular.js/commit/bbd3db14f857aab996ad129f2f15ca6348e9fd9f))
- **$parse:** Inline constants
  ([bd7d5f63](https://github.com/angular/angular.js/commit/bd7d5f6345439aa2d1da708ffee20b4c565131d4))
- **$rootScope:** make queues more efficient
  ([cb2f8c0d](https://github.com/angular/angular.js/commit/cb2f8c0d75bde9ac91f4129e871ff4a8301871f3),
   [#14545](https://github.com/angular/angular.js/issues/14545))
- **injector:** cache the results of the native class detection check
  ([5ceb5dbf](https://github.com/angular/angular.js/commit/5ceb5dbfa6d9b6d15232a1f5c767b2f431325948))
- **ngClass:** improve even-odd checking
  ([4ae4cc9d](https://github.com/angular/angular.js/commit/4ae4cc9d469f0327c6576d8bd8ac7f402ddffa2d))
- **ngOptions:** use documentFragment to populate select
  ([97b3e003](https://github.com/angular/angular.js/commit/97b3e003bc60f979fddecd16bc50304b5bef7e53),
   [#13607](https://github.com/angular/angular.js/issues/13607), [#13239](https://github.com/angular/angular.js/issues/13239), [#12076](https://github.com/angular/angular.js/issues/12076))


## Breaking Changes {#v1.5.10}

- **$compile:**
  - due to [97bbf86a](https://github.com/angular/angular.js/commit/97bbf86a1979d099802f0d631c17c54b87563b40),
 

White-space in attributes is no longer trimmed automatically. This includes leading and trailing
white-space, and attributes that are purely white-space.

To migrate, attributes that require trimming must now be trimmed manually.

A common cases where stray white-space can cause problems is when
attribute values are compared, for example in an $observer:

Before:
```
$attrs.$observe('myAttr', function(newVal) {
  if (newVal === 'false') ...
});
```

To migrate, the attribute value should be trimmed manually:
```
$attrs.$observe('myAttr', function(newVal) {
  if (newVal.trim() === 'false') ...
});
```

Note that `$parse` trims expressions automatically, so attributes with expressions (e.g. directive
bindings) are unlikely to be affected by stray white-space.

  - due to [b89c2181](https://github.com/angular/angular.js/commit/b89c2181a9a165e06c027390164e08635ec449f4),
 

Using interpolation in any on* event attributes (e.g. `<button onclick="{{myVar}}">`) will now throw
the "nodomevents" error at compile time.
Previously the nodomevents was thrown at link time. The new behavior makes it consistent with
the "selmulti" error.
The breaking change should be rare, as it relates to incorrect API use that should not make it to
production apps in the first place.

- **$route:** due to [e9865654](https://github.com/angular/angular.js/commit/e9865654b39c71be71034c38581a8c7bd16bc716),
 

Previously, if `redirectTo` was a function that threw an Error, execution was aborted without firing
a `$routeChangeError` event.
Now, if a `redirectTo` function throws an Error, a `$routeChangeError` event will be fired.

- **loader:** due to [6a2ebdba](https://github.com/angular/angular.js/commit/6a2ebdba5df27e789e3cb10f11eedf90f7b9b97e),
 

`module.decorator` declarations are now processed as part of the `module.config`
queue and may result in providers being decorated in a different order if
`module.config` blocks are also used to decorate providers via
`$provide.decorator`.

For example, consider the following declaration order in which 'theFactory' is
decorated by both a `module.decorator` and a `$provide.decorator`:

```js
angular
  .module('theApp', [])
  .factory('theFactory', theFactoryFn)
  .config(function($provide) {
    $provide.decorator('theFactory', provideDecoratorFn);
  })
  .decorator('theFactory', moduleDecoratorFn);
```

Prior to this fix, 'theFactory' provider would be decorated in the following
order:
  1. moduleDecoratorFn
  2. provideDecoratorFn

The result of this fix changes the order in which 'theFactory' is decorated
because now `module.decorator` declarations are processed in the same order as
`module.config` declarations:
  1. provideDecoratorFn
  2. moduleDecoratorFn

- **ngAria:** due to [9978de11](https://github.com/angular/angular.js/commit/9978de11b7295fec1a2f4cb8fbeb9b62b54cb711),
 

ngAria will no longer add the "role" attribute to native control elements
(textarea, button, select, summary, details, a, and input). Previously, "role" was not added to
input, but all others in the list.

This should not affect accessibility, because native inputs are accessible by default, but it might
affect applications that relied on the "role" attribute being present (e.g. for styling or as
directive attributes).


