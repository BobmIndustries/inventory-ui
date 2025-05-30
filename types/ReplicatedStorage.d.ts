interface ReplicatedStorage extends Instance {
	inventory: Script & {
		include: Folder & {
			RuntimeLib: ModuleScript;
			Promise: ModuleScript;
			node_modules: Folder & {
				["@rbxts"]: Folder & {
					remo: Folder & {
						src: ModuleScript & {
							getSender: ModuleScript;
							Promise: ModuleScript;
							builder: ModuleScript;
							constants: ModuleScript;
							utils: Folder & {
								compose: ModuleScript;
								testRemote: ModuleScript;
								mockRemotes: ModuleScript;
								unwrap: ModuleScript;
								instances: ModuleScript;
							};
							types: ModuleScript;
							server: ModuleScript & {
								createRemote: ModuleScript;
								createAsyncRemote: ModuleScript;
							};
							container: Configuration;
							client: ModuleScript & {
								createRemote: ModuleScript;
								createAsyncRemote: ModuleScript;
							};
							middleware: Folder & {
								loggerMiddleware: ModuleScript;
								throttleMiddleware: ModuleScript;
							};
							createRemotes: ModuleScript;
						};
					};
					["pretty-react-hooks"]: Folder & {
						out: ModuleScript & {
							["use-latest"]: ModuleScript & {
								["use-latest"]: ModuleScript;
							};
							utils: Folder & {
								binding: ModuleScript;
								hoarcekat: ModuleScript;
								["shallow-equal"]: ModuleScript;
								math: ModuleScript;
								testez: ModuleScript;
							};
							["use-binding-state"]: ModuleScript & {
								["use-binding-state"]: ModuleScript;
							};
							["use-unmount-effect"]: ModuleScript & {
								["use-unmount-effect"]: ModuleScript;
							};
							["use-update-effect"]: ModuleScript & {
								["use-update-effect"]: ModuleScript;
							};
							["use-previous"]: ModuleScript & {
								["use-previous"]: ModuleScript;
							};
							["use-interval"]: ModuleScript & {
								["use-interval"]: ModuleScript;
							};
							["use-debounce-callback"]: ModuleScript & {
								["use-debounce-callback"]: ModuleScript;
							};
							["use-spring"]: ModuleScript & {
								["use-spring"]: ModuleScript;
							};
							["use-motion"]: ModuleScript & {
								["use-motion"]: ModuleScript;
							};
							["use-defer-state"]: ModuleScript & {
								["use-defer-state"]: ModuleScript;
							};
							["use-tagged"]: ModuleScript & {
								["use-tagged"]: ModuleScript;
							};
							["use-key-press"]: ModuleScript & {
								["use-key-press"]: ModuleScript;
							};
							["use-timeout"]: ModuleScript & {
								["use-timeout"]: ModuleScript;
							};
							["use-composed-ref"]: ModuleScript & {
								["use-composed-ref"]: ModuleScript;
							};
							["use-async-callback"]: ModuleScript & {
								["use-async-callback"]: ModuleScript;
							};
							["use-throttle-state"]: ModuleScript & {
								["use-throttle-state"]: ModuleScript;
							};
							["use-defer-callback"]: ModuleScript & {
								["use-defer-callback"]: ModuleScript;
							};
							["use-latest-callback"]: ModuleScript & {
								["use-latest-callback"]: ModuleScript;
							};
							["use-event-listener"]: ModuleScript & {
								["use-event-listener"]: ModuleScript;
							};
							["use-throttle-callback"]: ModuleScript & {
								["use-throttle-callback"]: ModuleScript;
							};
							["use-update"]: ModuleScript & {
								["use-update"]: ModuleScript;
							};
							["use-async-effect"]: ModuleScript & {
								["use-async-effect"]: ModuleScript;
							};
							["use-binding-listener"]: ModuleScript & {
								["use-binding-listener"]: ModuleScript;
							};
							["use-async"]: ModuleScript & {
								["use-async"]: ModuleScript;
							};
							["use-viewport"]: ModuleScript & {
								["use-viewport"]: ModuleScript;
							};
							["use-debounce-effect"]: ModuleScript & {
								["use-debounce-effect"]: ModuleScript;
							};
							["use-throttle-effect"]: ModuleScript & {
								["use-throttle-effect"]: ModuleScript;
							};
							["use-defer-effect"]: ModuleScript & {
								["use-defer-effect"]: ModuleScript;
							};
							["use-debounce-state"]: ModuleScript & {
								["use-debounce-state"]: ModuleScript;
							};
							["use-timer"]: ModuleScript & {
								["use-timer"]: ModuleScript;
							};
							["use-lifetime"]: ModuleScript & {
								["use-lifetime"]: ModuleScript;
							};
							["use-camera"]: ModuleScript & {
								["use-camera"]: ModuleScript;
							};
							["use-mount-effect"]: ModuleScript & {
								["use-mount-effect"]: ModuleScript;
							};
							["use-mouse"]: ModuleScript & {
								["use-mouse"]: ModuleScript;
							};
						};
					};
					["react-roblox"]: ModuleScript;
					["validate-tree"]: ModuleScript;
					["set-timeout"]: Folder & {
						out: ModuleScript & {
							["set-countdown"]: ModuleScript;
							["set-interval"]: ModuleScript;
							["debounce.spec"]: ModuleScript;
							["set-timeout"]: ModuleScript;
							throttle: ModuleScript;
							["set-timeout.spec"]: ModuleScript;
							["throttle.spec"]: ModuleScript;
							["set-interval.spec"]: ModuleScript;
							["set-countdown.spec"]: ModuleScript;
							debounce: ModuleScript;
						};
					};
					["compiler-types"]: Folder & {
						types: Folder;
					};
					reflex: Folder & {
						src: ModuleScript & {
							createProducer: ModuleScript;
							broadcast: ModuleScript & {
								createBroadcastReceiver: ModuleScript;
								createBroadcaster: ModuleScript;
								hydrate: ModuleScript;
							};
							Promise: ModuleScript;
							createSelector: ModuleScript;
							utils: Folder & {
								shallowEqual: ModuleScript;
								testSelector: ModuleScript;
								createSelectArrayDiffs: ModuleScript;
								setInterval: ModuleScript;
							};
							combineProducers: ModuleScript;
							middleware: Folder & {
								loggerMiddleware: ModuleScript;
							};
							applyMiddleware: ModuleScript;
							types: ModuleScript;
						};
					};
					ripple: Folder & {
						src: ModuleScript & {
							config: ModuleScript;
							solvers: Folder & {
								tween: ModuleScript;
								spring: ModuleScript;
								linear: ModuleScript;
								immediate: ModuleScript;
							};
							utils: Folder & {
								assign: ModuleScript;
								spy: ModuleScript;
								snapshot: ModuleScript;
								intermediate: ModuleScript;
								merge: ModuleScript;
							};
							createMotion: ModuleScript;
							types: ModuleScript;
						};
					};
					types: Folder & {
						include: Folder & {
							generated: Folder;
						};
					};
					t: Folder & {
						lib: Folder & {
							ts: ModuleScript;
						};
					};
					signal: ModuleScript;
					react: ModuleScript & {
						tags: ModuleScript;
					};
					["react-reflex"]: ModuleScript & {
						React: ModuleScript;
						hooks: Folder & {
							useSelector: ModuleScript;
							useSelectorCreator: ModuleScript;
							useProducer: ModuleScript;
						};
						components: Folder & {
							ReflexContext: ModuleScript;
							ReflexProvider: ModuleScript;
						};
						Reflex: ModuleScript;
					};
					services: ModuleScript;
					ReactLua: Folder & {
						node_modules: Folder & {
							["@jsdotlua"]: Folder & {
								number: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										MAX_SAFE_INTEGER: ModuleScript;
										isSafeInteger: ModuleScript;
										toExponential: ModuleScript;
										isNaN: ModuleScript;
										isInteger: ModuleScript;
										isFinite: ModuleScript;
										MIN_SAFE_INTEGER: ModuleScript;
									};
								};
								console: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										makeConsoleImpl: ModuleScript;
									};
								};
								["react-roblox"]: ModuleScript & {
									client: Folder & {
										roblox: Folder & {
											RobloxComponentProps: ModuleScript;
											SingleEventManager: ModuleScript;
											getDefaultInstanceProperty: ModuleScript;
										};
										ReactRobloxHostConfig: ModuleScript;
										ReactRobloxRoot: ModuleScript;
										ReactRoblox: ModuleScript;
										ReactRobloxComponentTree: ModuleScript;
										["ReactRobloxHostTypes.roblox"]: ModuleScript;
										ReactRobloxComponent: ModuleScript;
									};
									["ReactReconciler.roblox"]: ModuleScript;
								};
								["react-devtools-shared"]: ModuleScript & {
									hook: ModuleScript;
									bridge: ModuleScript;
									constants: ModuleScript;
									utils: ModuleScript;
									devtools: ModuleScript & {
										views: Folder & {
											Components: Folder & {
												types: ModuleScript;
											};
											Profiler: Folder & {
												InteractionsChartBuilder: ModuleScript;
												utils: ModuleScript;
												CommitTreeBuilder: ModuleScript;
												RankedChartBuilder: ModuleScript;
												FlamegraphChartBuilder: ModuleScript;
												types: ModuleScript;
											};
										};
										utils: ModuleScript;
										cache: ModuleScript;
										types: ModuleScript;
										ProfilingCache: ModuleScript;
										store: ModuleScript;
										ProfilerStore: ModuleScript;
									};
									events: ModuleScript;
									hydration: ModuleScript;
									["clipboardjs.mock"]: ModuleScript;
									storage: ModuleScript;
									backend: ModuleScript & {
										console: ModuleScript;
										utils: ModuleScript;
										ReactSymbols: ModuleScript;
										renderer: ModuleScript;
										agent: ModuleScript;
										NativeStyleEditor: Folder & {
											types: ModuleScript;
										};
										types: ModuleScript;
									};
									types: ModuleScript;
								};
								["instance-of"]: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										["instanceof"]: ModuleScript;
									};
								};
								["react-cache"]: ModuleScript & {
									ReactCacheOld: ModuleScript;
									LRU: ModuleScript;
								};
								["luau-polyfill"]: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										Promise: ModuleScript;
										["extends"]: ModuleScript;
										AssertionError: ModuleScript & {
											["AssertionError.global"]: ModuleScript;
										};
										Error: ModuleScript & {
											["Error.global"]: ModuleScript;
										};
										encodeURIComponent: ModuleScript;
									};
								};
								math: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										clz32: ModuleScript;
									};
								};
								timers: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										makeIntervalImpl: ModuleScript;
										makeTimerImpl: ModuleScript;
									};
								};
								["react-test-renderer"]: ModuleScript & {
									ReactTestRenderer: ModuleScript;
									roblox: Folder & {
										RobloxComponentProps: ModuleScript;
									};
									ReactTestHostConfig: ModuleScript;
								};
								promise: Folder & {
									lib: ModuleScript;
									["package"]: ModuleScript;
								};
								string: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										endsWith: ModuleScript;
										indexOf: ModuleScript;
										lastIndexOf: ModuleScript;
										trimStart: ModuleScript;
										trim: ModuleScript;
										findOr: ModuleScript;
										substr: ModuleScript;
										slice: ModuleScript;
										startsWith: ModuleScript;
										charCodeAt: ModuleScript;
										trimEnd: ModuleScript;
										includes: ModuleScript;
										split: ModuleScript;
									};
								};
								shared: ModuleScript & {
									["UninitializedState.roblox"]: ModuleScript;
									console: ModuleScript;
									ReactComponentStackFrame: ModuleScript;
									invariant: ModuleScript;
									ReactTypes: ModuleScript;
									objectIs: ModuleScript;
									ReactInstanceMap: ModuleScript;
									["Type.roblox"]: ModuleScript;
									["ConsolePatchingDev.roblox"]: ModuleScript;
									["ErrorHandling.roblox"]: ModuleScript;
									shallowEqual: ModuleScript;
									ReactElementType: ModuleScript;
									isValidElementType: ModuleScript;
									invokeGuardedCallbackImpl: ModuleScript;
									getComponentName: ModuleScript;
									formatProdErrorMessage: ModuleScript;
									ReactFeatureFlags: ModuleScript;
									PropMarkers: Folder & {
										Change: ModuleScript;
										Event: ModuleScript;
										Tag: ModuleScript;
									};
									consoleWithStackDev: ModuleScript;
									ReactErrorUtils: ModuleScript;
									["enqueueTask.roblox"]: ModuleScript;
									checkPropTypes: ModuleScript;
									ReactSharedInternals: ModuleScript & {
										ReactDebugCurrentFrame: ModuleScript;
										ReactCurrentOwner: ModuleScript;
										ReactCurrentDispatcher: ModuleScript;
										IsSomeRendererActing: ModuleScript;
										ReactCurrentBatchConfig: ModuleScript;
									};
									ReactVersion: ModuleScript;
									ReactSymbols: ModuleScript;
									["flowtypes.roblox"]: ModuleScript;
									["Symbol.roblox"]: ModuleScript;
									ExecutionEnvironment: ModuleScript;
									ReactFiberHostConfig: ModuleScript & {
										WithNoTestSelectors: ModuleScript;
										WithNoHydration: ModuleScript;
										WithNoPersistence: ModuleScript;
									};
								};
								scheduler: ModuleScript & {
									SchedulerPriorities: ModuleScript;
									TracingSubscriptions: ModuleScript;
									SchedulerMinHeap: ModuleScript;
									Scheduler: ModuleScript;
									Tracing: ModuleScript;
									forks: Folder & {
										["SchedulerHostConfig.mock"]: ModuleScript;
										["SchedulerHostConfig.default"]: ModuleScript;
									};
									unstable_mock: ModuleScript;
									SchedulerProfiling: ModuleScript;
									SchedulerHostConfig: ModuleScript;
									SchedulerFeatureFlags: ModuleScript;
								};
								["roact-compat"]: ModuleScript & {
									warnOnce: ModuleScript;
									Portal: ModuleScript;
									setGlobalConfig: ModuleScript;
									oneChild: ModuleScript;
									createFragment: ModuleScript;
									RoactTree: ModuleScript;
								};
								["react-shallow-renderer"]: ModuleScript;
								collections: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										Map: ModuleScript & {
											Map: ModuleScript;
											coerceToTable: ModuleScript;
											coerceToMap: ModuleScript;
										};
										Object: ModuleScript & {
											values: ModuleScript;
											assign: ModuleScript;
											is: ModuleScript;
											seal: ModuleScript;
											entries: ModuleScript;
											preventExtensions: ModuleScript;
											isFrozen: ModuleScript;
											keys: ModuleScript;
											freeze: ModuleScript;
											None: ModuleScript;
										};
										Set: ModuleScript;
										Array: ModuleScript & {
											flat: ModuleScript;
											indexOf: ModuleScript;
											every: ModuleScript;
											slice: ModuleScript;
											sort: ModuleScript;
											shift: ModuleScript;
											map: ModuleScript;
											isArray: ModuleScript;
											findIndex: ModuleScript;
											unshift: ModuleScript;
											splice: ModuleScript;
											filter: ModuleScript;
											find: ModuleScript;
											forEach: ModuleScript;
											reverse: ModuleScript;
											includes: ModuleScript;
											concat: ModuleScript;
											from: ModuleScript & {
												fromString: ModuleScript;
												fromArray: ModuleScript;
												fromSet: ModuleScript;
												fromMap: ModuleScript;
											};
											join: ModuleScript;
											flatMap: ModuleScript;
											reduce: ModuleScript;
											some: ModuleScript;
										};
										inspect: ModuleScript;
										WeakMap: ModuleScript;
									};
								};
								["react-devtools-extensions"]: ModuleScript & {
									backend: ModuleScript;
								};
								["react-reconciler"]: ModuleScript & {
									ReactRootTags: ModuleScript;
									["ReactFiberDevToolsHook.new"]: ModuleScript;
									["ReactFiberWorkLoop.new"]: ModuleScript;
									ReactTestSelectors: ModuleScript;
									["ReactFiberHotReloading.new"]: ModuleScript;
									ReactCapturedValue: ModuleScript;
									["ReactFiberUnwindWork.new"]: ModuleScript;
									["ReactFiberNewContext.new"]: ModuleScript;
									["ReactProfilerTimer.new"]: ModuleScript;
									ReactInternalTypes: ModuleScript;
									["ReactFiber.new"]: ModuleScript;
									["ReactFiberCommitWork.new"]: ModuleScript;
									ReactFiberTransition: ModuleScript;
									forks: Folder & {
										["ReactFiberHostConfig.test"]: ModuleScript;
									};
									["ReactStrictModeWarnings.new"]: ModuleScript;
									ReactPortal: ModuleScript;
									SchedulingProfiler: ModuleScript;
									["SchedulerWithReactIntegration.new"]: ModuleScript;
									ReactWorkTags: ModuleScript;
									ReactFiberHostConfig: ModuleScript;
									ReactTypeOfMode: ModuleScript;
									ReactFiberOffscreenComponent: ModuleScript;
									["ReactUpdateQueue.new"]: ModuleScript;
									ReactFiberLane: ModuleScript;
									["ReactFiberClassComponent.new"]: ModuleScript;
									ReactHookEffectTags: ModuleScript;
									ReactFiberWorkInProgress: ModuleScript;
									ReactFiberTreeReflection: ModuleScript;
									["ReactChildFiber.new"]: ModuleScript;
									MaxInts: ModuleScript;
									["ReactFiberLazyComponent.new"]: ModuleScript;
									ReactFiberErrorDialog: ModuleScript;
									["ReactFiberBeginWork.new"]: ModuleScript;
									ReactFiberFlags: ModuleScript;
									DebugTracing: ModuleScript;
									ReactFiberErrorLogger: ModuleScript;
									["ReactFiberHooks.new"]: ModuleScript;
									["ReactFiberSchedulerPriorities.roblox"]: ModuleScript;
									["ReactFiberHydrationContext.new"]: ModuleScript;
									ReactFiberReconciler: ModuleScript;
									["ReactFiberContext.new"]: ModuleScript;
									["ReactFiberSuspenseContext.new"]: ModuleScript;
									["ReactFiberStack.new"]: ModuleScript;
									["ReactFiberHostContext.new"]: ModuleScript;
									["ReactMutableSource.new"]: ModuleScript;
									ReactCurrentFiber: ModuleScript;
									ReactFiberComponentStack: ModuleScript;
									["ReactFiberSuspenseComponent.new"]: ModuleScript;
									["ReactFiberCompleteWork.new"]: ModuleScript;
									["ReactFiberReconciler.new"]: ModuleScript;
									["ReactFiberRoot.new"]: ModuleScript;
									["ReactFiberThrow.new"]: ModuleScript;
								};
								["react-is"]: ModuleScript;
								react: ModuleScript & {
									["None.roblox"]: ModuleScript;
									ReactLazy: ModuleScript;
									ReactElementValidator: ModuleScript;
									["createSignal.roblox"]: ModuleScript;
									ReactElement: ModuleScript;
									ReactMutableSource: ModuleScript;
									ReactContext: ModuleScript;
									ReactBaseClasses: ModuleScript;
									ReactNoopUpdateQueue: ModuleScript;
									ReactMemo: ModuleScript;
									ReactCreateRef: ModuleScript;
									ReactForwardRef: ModuleScript;
									React: ModuleScript;
									["ReactBinding.roblox"]: ModuleScript;
									ReactHooks: ModuleScript;
									ReactChildren: ModuleScript;
								};
								["es7-types"]: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript;
								};
								boolean: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										toJSBoolean: ModuleScript;
									};
								};
								ReactDebugTools: ModuleScript & {
									ReactDebugTools: ModuleScript;
									ReactDebugHooks: ModuleScript;
								};
							};
							commander: Folder & {
								["package-support"]: ModuleScript;
								["package"]: ModuleScript;
								lib: Folder;
								typings: Folder;
							};
							[".luau-aliases"]: Folder & {
								["@jsdotlua"]: Folder & {
									number: ModuleScript;
									console: ModuleScript;
									["react-roblox"]: ModuleScript;
									["react-is"]: ModuleScript;
									["instance-of"]: ModuleScript;
									["react-cache"]: ModuleScript;
									["es7-types"]: ModuleScript;
									math: ModuleScript;
									["react-debug-tools"]: ModuleScript;
									["react-test-renderer"]: ModuleScript;
									promise: ModuleScript;
									timers: ModuleScript;
									string: ModuleScript;
									shared: ModuleScript;
									scheduler: ModuleScript;
									["roact-compat"]: ModuleScript;
									["react-reconciler"]: ModuleScript;
									["react-devtools-extensions"]: ModuleScript;
									["react-shallow-renderer"]: ModuleScript;
									collections: ModuleScript;
									react: ModuleScript;
									["react-devtools-shared"]: ModuleScript;
									boolean: ModuleScript;
									["luau-polyfill"]: ModuleScript;
								};
								["symbol-luau"]: ModuleScript;
							};
							["symbol-luau"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									["Registry.global"]: ModuleScript;
									Symbol: ModuleScript;
								};
								LICENSE: StringValue;
							};
							npmluau: Folder & {
								["package"]: ModuleScript;
								src: Folder;
								["luau-types-re-export"]: Folder & {
									pkg: Folder & {
										["package"]: ModuleScript;
									};
								};
								LICENSE: StringValue;
							};
							walkdir: Folder & {
								["package"]: ModuleScript;
								test: Folder & {
									dir: Folder & {
										["nested-symlink"]: Folder;
										symlinks: Folder & {
											dir1: Folder;
											dir2: Folder;
										};
										foo: Folder & {
											a: Folder & {
												b: Folder & {
													c: Folder;
												};
											};
										};
									};
									comparison: Folder & {
										["package"]: ModuleScript;
									};
								};
							};
							[".bin"]: Folder;
						};
						ReactShallowRenderer: ModuleScript;
						ReactRoblox: ModuleScript;
						ReactDevtoolsShared: ModuleScript;
						ReactIs: ModuleScript;
						Shared: ModuleScript;
						ReactReconciler: ModuleScript;
						RoactCompat: ModuleScript;
						Scheduler: ModuleScript;
						ReactTestRenderer: ModuleScript;
						React: ModuleScript;
						ReactDevtoolsExtensions: ModuleScript;
						ReactDebugTools: ModuleScript;
						ReactCache: ModuleScript;
					};
				};
			};
		};
		app: Script & {
			hooks: Folder & {
				["use-px"]: ModuleScript;
				["use-rem"]: ModuleScript;
			};
			providers: Folder & {
				["rem-provider"]: ModuleScript;
			};
			ui: Folder & {
				inventory: ModuleScript;
				item: ModuleScript;
				["open-button"]: ModuleScript;
				slots: ModuleScript;
				frame: ModuleScript;
			};
		};
		network: ModuleScript;
		producer: ModuleScript;
		["tree-definitions"]: ModuleScript;
		slices: Folder & {
			inventory: ModuleScript;
			visible: ModuleScript;
		};
	};
	BaseXPRequirement: IntValue;
	BigWin: RemoteEvent;
	ExpCalculator: ModuleScript;
	PurchaseUGC: RemoteEvent;
	ContestControl: RemoteEvent;
	Version: StringValue;
	Model: Model & {
		["claw-machine"]: Script & {
			react: Script & {
				hooks: Folder & {
					["use-arrow-keys"]: ModuleScript;
					["use-viewport-scale"]: ModuleScript;
				};
				slices: Folder & {
					enabled: ModuleScript;
					machine: ModuleScript;
				};
				components: Folder & {
					controls: ModuleScript;
					frame: ModuleScript;
					joystick: ModuleScript;
					["drop-button"]: ModuleScript;
				};
				producer: ModuleScript;
			};
			include: Folder & {
				RuntimeLib: ModuleScript;
				Promise: ModuleScript;
				node_modules: Folder & {
					["@rbxts"]: Folder & {
						remo: Folder & {
							src: ModuleScript & {
								getSender: ModuleScript;
								Promise: ModuleScript;
								builder: ModuleScript;
								constants: ModuleScript;
								utils: Folder & {
									compose: ModuleScript;
									testRemote: ModuleScript;
									mockRemotes: ModuleScript;
									unwrap: ModuleScript;
									instances: ModuleScript;
								};
								types: ModuleScript;
								server: ModuleScript & {
									createRemote: ModuleScript;
									createAsyncRemote: ModuleScript;
								};
								container: Configuration;
								client: ModuleScript & {
									createRemote: ModuleScript;
									createAsyncRemote: ModuleScript;
								};
								middleware: Folder & {
									loggerMiddleware: ModuleScript;
									throttleMiddleware: ModuleScript;
								};
								createRemotes: ModuleScript;
							};
						};
						["react-roblox"]: ModuleScript;
						reflex: Folder & {
							src: ModuleScript & {
								createProducer: ModuleScript;
								broadcast: ModuleScript & {
									createBroadcastReceiver: ModuleScript;
									createBroadcaster: ModuleScript;
									hydrate: ModuleScript;
								};
								Promise: ModuleScript;
								createSelector: ModuleScript;
								utils: Folder & {
									shallowEqual: ModuleScript;
									testSelector: ModuleScript;
									createSelectArrayDiffs: ModuleScript;
									setInterval: ModuleScript;
								};
								combineProducers: ModuleScript;
								middleware: Folder & {
									loggerMiddleware: ModuleScript;
								};
								applyMiddleware: ModuleScript;
								types: ModuleScript;
							};
						};
						component: Folder & {
							out: ModuleScript & {
								Decorators: ModuleScript & {
									Component: ModuleScript;
								};
								Manager: ModuleScript;
								TagComponent: ModuleScript;
							};
						};
						["react-reflex"]: ModuleScript & {
							React: ModuleScript;
							hooks: Folder & {
								useSelector: ModuleScript;
								useSelectorCreator: ModuleScript;
								useProducer: ModuleScript;
							};
							components: Folder & {
								ReflexContext: ModuleScript;
								ReflexProvider: ModuleScript;
							};
							Reflex: ModuleScript;
						};
						types: Folder & {
							include: Folder & {
								generated: Folder;
							};
						};
						["attributes-validate"]: Folder & {
							node_modules: Folder & {
								["@rbxts"]: Folder & {
									t: Folder & {
										lib: Folder & {
											ts: ModuleScript;
										};
									};
								};
							};
							out: ModuleScript;
						};
						["pretty-react-hooks"]: Folder & {
							out: ModuleScript & {
								["use-latest"]: ModuleScript & {
									["use-latest"]: ModuleScript;
								};
								utils: Folder & {
									binding: ModuleScript;
									hoarcekat: ModuleScript;
									["shallow-equal"]: ModuleScript;
									math: ModuleScript;
									motor: ModuleScript;
									testez: ModuleScript;
								};
								["use-binding-state"]: ModuleScript & {
									["use-binding-state"]: ModuleScript;
								};
								["use-unmount-effect"]: ModuleScript & {
									["use-unmount-effect"]: ModuleScript;
								};
								["use-update-effect"]: ModuleScript & {
									["use-update-effect"]: ModuleScript;
								};
								["use-previous"]: ModuleScript & {
									["use-previous"]: ModuleScript;
								};
								["use-interval"]: ModuleScript & {
									["use-interval"]: ModuleScript;
								};
								["use-debounce-callback"]: ModuleScript & {
									["use-debounce-callback"]: ModuleScript;
								};
								["use-defer-state"]: ModuleScript & {
									["use-defer-state"]: ModuleScript;
								};
								["use-key-press"]: ModuleScript & {
									["use-key-press"]: ModuleScript;
								};
								["use-timeout"]: ModuleScript & {
									["use-timeout"]: ModuleScript;
								};
								["use-composed-ref"]: ModuleScript & {
									["use-composed-ref"]: ModuleScript;
								};
								["use-async-callback"]: ModuleScript & {
									["use-async-callback"]: ModuleScript;
								};
								["use-throttle-state"]: ModuleScript & {
									["use-throttle-state"]: ModuleScript;
								};
								["use-defer-callback"]: ModuleScript & {
									["use-defer-callback"]: ModuleScript;
								};
								["use-latest-callback"]: ModuleScript & {
									["use-latest-callback"]: ModuleScript;
								};
								["use-motor"]: ModuleScript & {
									["use-motor"]: ModuleScript;
								};
								["use-throttle-callback"]: ModuleScript & {
									["use-throttle-callback"]: ModuleScript;
								};
								["use-update"]: ModuleScript & {
									["use-update"]: ModuleScript;
								};
								["use-async-effect"]: ModuleScript & {
									["use-async-effect"]: ModuleScript;
								};
								["use-debounce-effect"]: ModuleScript & {
									["use-debounce-effect"]: ModuleScript;
								};
								["use-binding-listener"]: ModuleScript & {
									["use-binding-listener"]: ModuleScript;
								};
								["use-async"]: ModuleScript & {
									["use-async"]: ModuleScript;
								};
								["use-viewport"]: ModuleScript & {
									["use-viewport"]: ModuleScript;
								};
								["use-throttle-effect"]: ModuleScript & {
									["use-throttle-effect"]: ModuleScript;
								};
								["use-timer"]: ModuleScript & {
									["use-timer"]: ModuleScript;
								};
								["use-defer-effect"]: ModuleScript & {
									["use-defer-effect"]: ModuleScript;
								};
								["use-debounce-state"]: ModuleScript & {
									["use-debounce-state"]: ModuleScript;
								};
								["use-event-listener"]: ModuleScript & {
									["use-event-listener"]: ModuleScript;
								};
								["use-lifetime"]: ModuleScript & {
									["use-lifetime"]: ModuleScript;
								};
								["use-camera"]: ModuleScript & {
									["use-camera"]: ModuleScript;
								};
								["use-mount-effect"]: ModuleScript & {
									["use-mount-effect"]: ModuleScript;
								};
								["use-mouse"]: ModuleScript & {
									["use-mouse"]: ModuleScript;
								};
							};
						};
						["validate-tree"]: ModuleScript;
						beacon: Folder & {
							out: ModuleScript;
						};
						["set-timeout"]: Folder & {
							out: ModuleScript & {
								["set-countdown"]: ModuleScript;
								["set-interval"]: ModuleScript;
								["debounce.spec"]: ModuleScript;
								["set-timeout"]: ModuleScript;
								throttle: ModuleScript;
								["set-timeout.spec"]: ModuleScript;
								["throttle.spec"]: ModuleScript;
								["set-interval.spec"]: ModuleScript;
								["set-countdown.spec"]: ModuleScript;
								debounce: ModuleScript;
							};
						};
						["compiler-types"]: Folder & {
							types: Folder;
						};
						trove: Folder & {
							out: ModuleScript;
						};
						t: Folder & {
							lib: Folder & {
								ts: ModuleScript;
							};
						};
						services: ModuleScript;
						["experimental-reflect"]: Folder & {
							out: ModuleScript;
						};
						clack: Folder & {
							out: ModuleScript & {
								touch: ModuleScript;
								prefer: ModuleScript;
								keyboard: ModuleScript;
								gamepad: ModuleScript;
								mouse: ModuleScript;
								types: ModuleScript;
							};
						};
						react: ModuleScript & {
							tags: ModuleScript;
						};
						ReactLua: Folder & {
							node_modules: Folder & {
								["@jsdotlua"]: Folder & {
									number: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											MAX_SAFE_INTEGER: ModuleScript;
											isSafeInteger: ModuleScript;
											toExponential: ModuleScript;
											isNaN: ModuleScript;
											isInteger: ModuleScript;
											isFinite: ModuleScript;
											MIN_SAFE_INTEGER: ModuleScript;
										};
									};
									console: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											makeConsoleImpl: ModuleScript;
										};
									};
									["react-roblox"]: ModuleScript & {
										client: Folder & {
											roblox: Folder & {
												RobloxComponentProps: ModuleScript;
												SingleEventManager: ModuleScript;
												getDefaultInstanceProperty: ModuleScript;
											};
											ReactRobloxHostConfig: ModuleScript;
											ReactRobloxRoot: ModuleScript;
											ReactRoblox: ModuleScript;
											ReactRobloxComponentTree: ModuleScript;
											["ReactRobloxHostTypes.roblox"]: ModuleScript;
											ReactRobloxComponent: ModuleScript;
										};
										["ReactReconciler.roblox"]: ModuleScript;
									};
									["react-devtools-shared"]: ModuleScript & {
										hook: ModuleScript;
										bridge: ModuleScript;
										constants: ModuleScript;
										utils: ModuleScript;
										devtools: ModuleScript & {
											views: Folder & {
												Components: Folder & {
													types: ModuleScript;
												};
												Profiler: Folder & {
													InteractionsChartBuilder: ModuleScript;
													utils: ModuleScript;
													CommitTreeBuilder: ModuleScript;
													RankedChartBuilder: ModuleScript;
													FlamegraphChartBuilder: ModuleScript;
													types: ModuleScript;
												};
											};
											utils: ModuleScript;
											cache: ModuleScript;
											types: ModuleScript;
											ProfilingCache: ModuleScript;
											store: ModuleScript;
											ProfilerStore: ModuleScript;
										};
										events: ModuleScript;
										hydration: ModuleScript;
										["clipboardjs.mock"]: ModuleScript;
										storage: ModuleScript;
										backend: ModuleScript & {
											console: ModuleScript;
											utils: ModuleScript;
											ReactSymbols: ModuleScript;
											renderer: ModuleScript;
											agent: ModuleScript;
											NativeStyleEditor: Folder & {
												types: ModuleScript;
											};
											types: ModuleScript;
										};
										types: ModuleScript;
									};
									["instance-of"]: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											["instanceof"]: ModuleScript;
										};
									};
									["react-cache"]: ModuleScript & {
										ReactCacheOld: ModuleScript;
										LRU: ModuleScript;
									};
									["luau-polyfill"]: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											Promise: ModuleScript;
											["extends"]: ModuleScript;
											AssertionError: ModuleScript & {
												["AssertionError.global"]: ModuleScript;
											};
											Error: ModuleScript & {
												["Error.global"]: ModuleScript;
											};
											encodeURIComponent: ModuleScript;
										};
									};
									math: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											clz32: ModuleScript;
										};
									};
									timers: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											makeIntervalImpl: ModuleScript;
											makeTimerImpl: ModuleScript;
										};
									};
									["react-test-renderer"]: ModuleScript & {
										ReactTestRenderer: ModuleScript;
										roblox: Folder & {
											RobloxComponentProps: ModuleScript;
										};
										ReactTestHostConfig: ModuleScript;
									};
									promise: Folder & {
										lib: ModuleScript;
										["package"]: ModuleScript;
									};
									string: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											endsWith: ModuleScript;
											indexOf: ModuleScript;
											lastIndexOf: ModuleScript;
											trimStart: ModuleScript;
											trim: ModuleScript;
											findOr: ModuleScript;
											substr: ModuleScript;
											slice: ModuleScript;
											startsWith: ModuleScript;
											charCodeAt: ModuleScript;
											trimEnd: ModuleScript;
											includes: ModuleScript;
											split: ModuleScript;
										};
									};
									shared: ModuleScript & {
										["UninitializedState.roblox"]: ModuleScript;
										console: ModuleScript;
										ReactComponentStackFrame: ModuleScript;
										invariant: ModuleScript;
										ReactTypes: ModuleScript;
										objectIs: ModuleScript;
										ReactInstanceMap: ModuleScript;
										["Type.roblox"]: ModuleScript;
										["ConsolePatchingDev.roblox"]: ModuleScript;
										["ErrorHandling.roblox"]: ModuleScript;
										shallowEqual: ModuleScript;
										ReactElementType: ModuleScript;
										isValidElementType: ModuleScript;
										invokeGuardedCallbackImpl: ModuleScript;
										getComponentName: ModuleScript;
										formatProdErrorMessage: ModuleScript;
										ReactFeatureFlags: ModuleScript;
										PropMarkers: Folder & {
											Change: ModuleScript;
											Event: ModuleScript;
											Tag: ModuleScript;
										};
										consoleWithStackDev: ModuleScript;
										ReactErrorUtils: ModuleScript;
										["enqueueTask.roblox"]: ModuleScript;
										checkPropTypes: ModuleScript;
										ReactSharedInternals: ModuleScript & {
											ReactDebugCurrentFrame: ModuleScript;
											ReactCurrentOwner: ModuleScript;
											ReactCurrentDispatcher: ModuleScript;
											IsSomeRendererActing: ModuleScript;
											ReactCurrentBatchConfig: ModuleScript;
										};
										ReactVersion: ModuleScript;
										ReactSymbols: ModuleScript;
										["flowtypes.roblox"]: ModuleScript;
										["Symbol.roblox"]: ModuleScript;
										ExecutionEnvironment: ModuleScript;
										ReactFiberHostConfig: ModuleScript & {
											WithNoTestSelectors: ModuleScript;
											WithNoHydration: ModuleScript;
											WithNoPersistence: ModuleScript;
										};
									};
									scheduler: ModuleScript & {
										SchedulerPriorities: ModuleScript;
										TracingSubscriptions: ModuleScript;
										SchedulerMinHeap: ModuleScript;
										Scheduler: ModuleScript;
										Tracing: ModuleScript;
										forks: Folder & {
											["SchedulerHostConfig.mock"]: ModuleScript;
											["SchedulerHostConfig.default"]: ModuleScript;
										};
										unstable_mock: ModuleScript;
										SchedulerProfiling: ModuleScript;
										SchedulerHostConfig: ModuleScript;
										SchedulerFeatureFlags: ModuleScript;
									};
									["roact-compat"]: ModuleScript & {
										warnOnce: ModuleScript;
										Portal: ModuleScript;
										setGlobalConfig: ModuleScript;
										oneChild: ModuleScript;
										createFragment: ModuleScript;
										RoactTree: ModuleScript;
									};
									["react-shallow-renderer"]: ModuleScript;
									collections: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											Map: ModuleScript & {
												Map: ModuleScript;
												coerceToTable: ModuleScript;
												coerceToMap: ModuleScript;
											};
											Object: ModuleScript & {
												values: ModuleScript;
												assign: ModuleScript;
												is: ModuleScript;
												seal: ModuleScript;
												entries: ModuleScript;
												preventExtensions: ModuleScript;
												isFrozen: ModuleScript;
												keys: ModuleScript;
												freeze: ModuleScript;
												None: ModuleScript;
											};
											Set: ModuleScript;
											Array: ModuleScript & {
												flat: ModuleScript;
												indexOf: ModuleScript;
												every: ModuleScript;
												slice: ModuleScript;
												sort: ModuleScript;
												shift: ModuleScript;
												map: ModuleScript;
												isArray: ModuleScript;
												findIndex: ModuleScript;
												unshift: ModuleScript;
												splice: ModuleScript;
												filter: ModuleScript;
												find: ModuleScript;
												forEach: ModuleScript;
												reverse: ModuleScript;
												includes: ModuleScript;
												concat: ModuleScript;
												from: ModuleScript & {
													fromString: ModuleScript;
													fromArray: ModuleScript;
													fromSet: ModuleScript;
													fromMap: ModuleScript;
												};
												join: ModuleScript;
												flatMap: ModuleScript;
												reduce: ModuleScript;
												some: ModuleScript;
											};
											inspect: ModuleScript;
											WeakMap: ModuleScript;
										};
									};
									["react-devtools-extensions"]: ModuleScript & {
										backend: ModuleScript;
									};
									["react-reconciler"]: ModuleScript & {
										ReactRootTags: ModuleScript;
										["ReactFiberDevToolsHook.new"]: ModuleScript;
										["ReactFiberWorkLoop.new"]: ModuleScript;
										ReactTestSelectors: ModuleScript;
										["ReactFiberHotReloading.new"]: ModuleScript;
										ReactCapturedValue: ModuleScript;
										["ReactFiberUnwindWork.new"]: ModuleScript;
										["ReactFiberNewContext.new"]: ModuleScript;
										["ReactProfilerTimer.new"]: ModuleScript;
										ReactInternalTypes: ModuleScript;
										["ReactFiber.new"]: ModuleScript;
										["ReactFiberCommitWork.new"]: ModuleScript;
										ReactFiberTransition: ModuleScript;
										forks: Folder & {
											["ReactFiberHostConfig.test"]: ModuleScript;
										};
										["ReactStrictModeWarnings.new"]: ModuleScript;
										ReactPortal: ModuleScript;
										SchedulingProfiler: ModuleScript;
										["SchedulerWithReactIntegration.new"]: ModuleScript;
										ReactWorkTags: ModuleScript;
										ReactFiberHostConfig: ModuleScript;
										ReactTypeOfMode: ModuleScript;
										ReactFiberOffscreenComponent: ModuleScript;
										["ReactUpdateQueue.new"]: ModuleScript;
										ReactFiberLane: ModuleScript;
										["ReactFiberClassComponent.new"]: ModuleScript;
										ReactHookEffectTags: ModuleScript;
										ReactFiberWorkInProgress: ModuleScript;
										ReactFiberTreeReflection: ModuleScript;
										["ReactChildFiber.new"]: ModuleScript;
										MaxInts: ModuleScript;
										["ReactFiberLazyComponent.new"]: ModuleScript;
										ReactFiberErrorDialog: ModuleScript;
										["ReactFiberBeginWork.new"]: ModuleScript;
										ReactFiberFlags: ModuleScript;
										DebugTracing: ModuleScript;
										ReactFiberErrorLogger: ModuleScript;
										["ReactFiberHooks.new"]: ModuleScript;
										["ReactFiberSchedulerPriorities.roblox"]: ModuleScript;
										["ReactFiberHydrationContext.new"]: ModuleScript;
										ReactFiberReconciler: ModuleScript;
										["ReactFiberContext.new"]: ModuleScript;
										["ReactFiberSuspenseContext.new"]: ModuleScript;
										["ReactFiberStack.new"]: ModuleScript;
										["ReactFiberHostContext.new"]: ModuleScript;
										["ReactMutableSource.new"]: ModuleScript;
										ReactCurrentFiber: ModuleScript;
										ReactFiberComponentStack: ModuleScript;
										["ReactFiberSuspenseComponent.new"]: ModuleScript;
										["ReactFiberCompleteWork.new"]: ModuleScript;
										["ReactFiberReconciler.new"]: ModuleScript;
										["ReactFiberRoot.new"]: ModuleScript;
										["ReactFiberThrow.new"]: ModuleScript;
									};
									["react-is"]: ModuleScript;
									react: ModuleScript & {
										["None.roblox"]: ModuleScript;
										ReactLazy: ModuleScript;
										ReactElementValidator: ModuleScript;
										["createSignal.roblox"]: ModuleScript;
										ReactElement: ModuleScript;
										ReactMutableSource: ModuleScript;
										ReactContext: ModuleScript;
										ReactBaseClasses: ModuleScript;
										ReactNoopUpdateQueue: ModuleScript;
										ReactMemo: ModuleScript;
										ReactCreateRef: ModuleScript;
										ReactForwardRef: ModuleScript;
										React: ModuleScript;
										["ReactBinding.roblox"]: ModuleScript;
										ReactHooks: ModuleScript;
										ReactChildren: ModuleScript;
									};
									["es7-types"]: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript;
									};
									boolean: Folder & {
										["package"]: ModuleScript;
										src: ModuleScript & {
											toJSBoolean: ModuleScript;
										};
									};
									ReactDebugTools: ModuleScript & {
										ReactDebugTools: ModuleScript;
										ReactDebugHooks: ModuleScript;
									};
								};
								commander: Folder & {
									["package-support"]: ModuleScript;
									["package"]: ModuleScript;
									lib: Folder;
									typings: Folder;
								};
								[".luau-aliases"]: Folder & {
									["@jsdotlua"]: Folder & {
										number: ModuleScript;
										console: ModuleScript;
										["react-roblox"]: ModuleScript;
										["react-is"]: ModuleScript;
										["instance-of"]: ModuleScript;
										["react-cache"]: ModuleScript;
										["es7-types"]: ModuleScript;
										math: ModuleScript;
										["react-debug-tools"]: ModuleScript;
										["react-test-renderer"]: ModuleScript;
										promise: ModuleScript;
										timers: ModuleScript;
										string: ModuleScript;
										shared: ModuleScript;
										scheduler: ModuleScript;
										["roact-compat"]: ModuleScript;
										["react-reconciler"]: ModuleScript;
										["react-devtools-extensions"]: ModuleScript;
										["react-shallow-renderer"]: ModuleScript;
										collections: ModuleScript;
										react: ModuleScript;
										["react-devtools-shared"]: ModuleScript;
										boolean: ModuleScript;
										["luau-polyfill"]: ModuleScript;
									};
									["symbol-luau"]: ModuleScript;
								};
								["symbol-luau"]: Folder & {
									["package"]: ModuleScript;
									src: ModuleScript & {
										["Registry.global"]: ModuleScript;
										Symbol: ModuleScript;
									};
									LICENSE: StringValue;
								};
								npmluau: Folder & {
									["package"]: ModuleScript;
									src: Folder;
									["luau-types-re-export"]: Folder & {
										pkg: Folder & {
											["package"]: ModuleScript;
										};
									};
									LICENSE: StringValue;
								};
								walkdir: Folder & {
									["package"]: ModuleScript;
									test: Folder & {
										dir: Folder & {
											["nested-symlink"]: Folder;
											symlinks: Folder & {
												dir1: Folder;
												dir2: Folder;
											};
											foo: Folder & {
												a: Folder & {
													b: Folder & {
														c: Folder;
													};
												};
											};
										};
										comparison: Folder & {
											["package"]: ModuleScript;
										};
									};
								};
								[".bin"]: Folder;
							};
							ReactShallowRenderer: ModuleScript;
							ReactRoblox: ModuleScript;
							ReactDevtoolsShared: ModuleScript;
							ReactIs: ModuleScript;
							Shared: ModuleScript;
							ReactReconciler: ModuleScript;
							RoactCompat: ModuleScript;
							Scheduler: ModuleScript;
							ReactTestRenderer: ModuleScript;
							React: ModuleScript;
							ReactDevtoolsExtensions: ModuleScript;
							ReactDebugTools: ModuleScript;
							ReactCache: ModuleScript;
						};
						janitor: Folder & {
							src: ModuleScript;
						};
						flipper: Folder & {
							typings: Folder;
							src: ModuleScript & {
								isMotor: ModuleScript;
								Spring: ModuleScript;
								GroupMotor: ModuleScript;
								Signal: ModuleScript;
								SingleMotor: ModuleScript;
								Instant: ModuleScript;
								Linear: ModuleScript;
								BaseMotor: ModuleScript;
							};
						};
					};
				};
			};
			network: ModuleScript;
			["tree-definitions"]: ModuleScript;
		};
	};
	ClawPrizes: Folder & {
		Gura: Tool & {
			Handle: Part & {
				LeftUpperLeg_WeldConstraint: WeldConstraint;
				LeftLowerArm_WeldConstraint: WeldConstraint;
				RightUpperLeg_WeldConstraint: WeldConstraint;
				RightUpperArm_WeldConstraint: WeldConstraint;
				LeftHand_WeldConstraint: WeldConstraint;
				RightLowerArm_WeldConstraint: WeldConstraint;
				RightHand_WeldConstraint: WeldConstraint;
				Rig: Model & {
					LeftLowerArm: MeshPart;
					LeftFoot: MeshPart;
					RightHand: MeshPart;
					RightLowerLeg: MeshPart;
					LeftUpperLeg: MeshPart;
					LeftLowerLeg: MeshPart;
					RightUpperArm: MeshPart;
					Head: MeshPart & {
						HatAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						FaceFrontAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						NeckRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						HairAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						SurfaceAppearance: SurfaceAppearance;
						Mesh: SpecialMesh & {
							HatAttachment: Vector3Value;
							OriginalSize: Vector3Value;
							NeckRigAttachment: Vector3Value;
							HairAttachment: Vector3Value;
							FaceFrontAttachment: Vector3Value;
							FaceCenterAttachment: Vector3Value;
							AvatarPartScaleType: StringValue;
						};
						FaceCenterAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					UpperTorso: MeshPart & {
						RightCollarAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						BodyBackAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						NeckRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftCollarAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						Waist: Motor6D;
						UpperTorsoWrapTarget: WrapTarget;
						OriginalSize: Vector3Value;
						AvatarPartScaleType: StringValue;
						RightShoulderRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						BodyFrontAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						WaistRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						LeftShoulderRigAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
						NeckAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					["Bored Anime head"]: Accessory & {
						Handle: Part & {
							OriginalSize: Vector3Value;
							TouchInterest: TouchTransmitter;
							AccessoryWeld: Weld;
							FaceCenterAttachment: Attachment;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
					};
					["Shark Tail"]: Accessory & {
						Handle: Part & {
							OriginalSize: Vector3Value;
							TouchInterest: TouchTransmitter;
							AccessoryWeld: Weld;
							WaistBackAttachment: Attachment;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
					};
					LeftUpperArm: MeshPart;
					RightLowerArm: MeshPart;
					LeftHand: MeshPart;
					["Accessory (Gawn Gura Hat/hair (3.0))"]: Accessory & {
						Handle: Part & {
							OriginalSize: Vector3Value;
							TouchInterest: TouchTransmitter;
							HairAttachment: Attachment;
							AccessoryWeld: Weld;
							SpecialMesh: SpecialMesh;
							AvatarPartScaleType: StringValue;
						};
						ThumbnailConfiguration: Configuration & {
							ThumbnailCameraValue: CFrameValue;
							ThumbnailCameraTarget: ObjectValue;
						};
					};
					Humanoid: Humanoid;
					LowerTorso: MeshPart & {
						WaistBackAttachment: Attachment & {
							OriginalPosition: Vector3Value;
						};
					};
					RightUpperLeg: MeshPart;
					RightFoot: MeshPart;
				};
				LeftUpperArm_WeldConstraint: WeldConstraint;
				RightLowerLeg_WeldConstraint: WeldConstraint;
				UpperTorso_WeldConstraint: WeldConstraint;
				LeftLowerLeg_WeldConstraint: WeldConstraint;
				LowerTorso_WeldConstraint: WeldConstraint;
				RightFoot_WeldConstraint: WeldConstraint;
				Head_WeldConstraint: WeldConstraint;
				LeftFoot_WeldConstraint: WeldConstraint;
			};
		};
	};
	items: Folder & {
		["Kemono Fox"]: Tool & {
			Handle: MeshPart & {
				PrizeName: StringValue;
			};
		};
		["OIrange Spiky Ball"]: Tool & {
			Handle: MeshPart & {
				PrizeName: StringValue;
			};
		};
		["Gura Plushie"]: Tool & {
			Handle: MeshPart & {
				PrizeName: StringValue;
			};
		};
		Tool: Tool;
	};
}
