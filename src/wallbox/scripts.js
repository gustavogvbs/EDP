!(function (n) {
	n.fn.extend({
		leanModal: function (e) {
			var o = n("<div id='lean_overlay'></div>");
			return (
				n("body").append(o),
				(e = n.extend({ top: 0, overlay: 0.7, closeButton: null }, e)),
				this.each(function () {
					var l = e;
					n(this).click(function (e) {
						var o = n(this).attr("href");
						n("#lean_overlay").click(function () {
							a(o);
						}),
							n(l.closeButton).click(function () {
								a(o);
							}),
							n(o).outerHeight(),
							n(o).outerWidth();
						n("#lean_overlay").css({ display: "block", opacity: 0 }),
							n("#lean_overlay").fadeTo(200, l.overlay),
							n("html").addClass("no-overflow"),
							n(o).addClass("openModal"),
							e.preventDefault();
					});
				})
			);
			function a(e) {
				n("#lean_overlay").fadeOut(200),
					n("html").removeClass("no-overflow"),
					n(e).removeClass("openModal");
			}
		},
	});
})(jQuery);
!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define(e)
		: ((t = t || self).SimpleBar = e());
})(this, function () {
	"use strict";
	var t =
		"undefined" != typeof globalThis
			? globalThis
			: "undefined" != typeof window
			? window
			: "undefined" != typeof global
			? global
			: "undefined" != typeof self
			? self
			: {};
	function N(t, e) {
		return t((e = { exports: {} }), e.exports), e.exports;
	}
	function I(t) {
		return t && t.Math == Math && t;
	}
	function g(t) {
		try {
			return !!t();
		} catch (t) {
			return !0;
		}
	}
	function D(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e,
		};
	}
	function i(t) {
		return ct.call(t).slice(8, -1);
	}
	function P(t) {
		return ut(s(t));
	}
	function V(t, e) {
		if (!m(t)) return t;
		var r, i;
		if (e && "function" == typeof (r = t.toString) && !m((i = r.call(t))))
			return i;
		if ("function" == typeof (r = t.valueOf) && !m((i = r.call(t)))) return i;
		if (e || "function" != typeof (r = t.toString) || m((i = r.call(t))))
			throw TypeError("Can't convert object to primitive value");
		return i;
	}
	function F(t) {
		return dt ? ft.createElement(t) : {};
	}
	function B(e, r) {
		try {
			_(b, e, r);
		} catch (t) {
			b[e] = r;
		}
		return r;
	}
	function H(t) {
		return _t[t] || (_t[t] = Ot(t));
	}
	function q(t) {
		return "function" == typeof t ? t : void 0;
	}
	function $(t, e) {
		return arguments.length < 2
			? q(At[t]) || q(b[t])
			: (At[t] && At[t][e]) || (b[t] && b[t][e]);
	}
	function w(t) {
		return 0 < t ? Tt(Mt(t), 9007199254740991) : 0;
	}
	function X(a) {
		return function (t, e, r) {
			var i,
				n = P(t),
				o = w(n.length),
				s = ((t = o), (r = Mt(r)) < 0 ? jt(r + t, 0) : Rt(r, t));
			if (a && e != e) {
				for (; s < o; ) if ((i = n[s++]) != i) return !0;
			} else for (; s < o; s++) if ((a || s in n) && n[s] === e) return a || s || 0;
			return !a && -1;
		};
	}
	function Y(t, e) {
		var r,
			i = P(t),
			n = 0,
			o = [];
		for (r in i) !x(St, r) && x(i, r) && o.push(r);
		for (; e.length > n; ) !x(i, (r = e[n++])) || ~Wt(o, r) || o.push(r);
		return o;
	}
	function G(t, e) {
		return (
			(t = Ft[Vt(t)]) == Ht ||
			(t != Bt && ("function" == typeof e ? g(e) : !!e))
		);
	}
	function y(t, e) {
		var r,
			i,
			n,
			o,
			s = t.target,
			a = t.global,
			c = t.stat;
		if ((r = a ? b : c ? b[s] || B(s, {}) : (b[s] || {}).prototype))
			for (i in e) {
				if (
					((n = e[i]),
					(o = t.noTargetGet ? (o = $t(r, i)) && o.value : r[i]),
					!qt(a ? i : s + (c ? "." : "#") + i, t.forced) && void 0 !== o)
				) {
					if (typeof n == typeof o) continue;
					v = p = d = f = h = void 0;
					for (
						var l = n, u = o, h = Dt(u), f = E.f, d = gt.f, p = 0;
						p < h.length;
						p++
					) {
						var v = h[p];
						x(l, v) || f(l, v, d(u, v));
					}
				}
				(t.sham || (o && o.sham)) && _(n, "sham", !0), S(r, i, n, t);
			}
	}
	function U(i, n, t) {
		if ((Xt(i), void 0 === n)) return i;
		switch (t) {
			case 0:
				return function () {
					return i.call(n);
				};
			case 1:
				return function (t) {
					return i.call(n, t);
				};
			case 2:
				return function (t, e) {
					return i.call(n, t, e);
				};
			case 3:
				return function (t, e, r) {
					return i.call(n, t, e, r);
				};
		}
		return function () {
			return i.apply(n, arguments);
		};
	}
	function Q(t) {
		return Object(s(t));
	}
	function l(t) {
		return Qt[t] || (Qt[t] = (Gt && Ut[t]) || (Gt ? Ut : Ot)("Symbol." + t));
	}
	function K(t, e) {
		var r;
		return new (
			void 0 ===
			(r =
				Yt(t) &&
				(("function" == typeof (r = t.constructor) &&
					(r === Array || Yt(r.prototype))) ||
					(m(r) && null === (r = r[Kt])))
					? void 0
					: r)
				? Array
				: r
		)(0 === e ? 0 : e);
	}
	function e(f) {
		var d = 1 == f,
			p = 2 == f,
			v = 3 == f,
			g = 4 == f,
			y = 6 == f,
			b = 5 == f || y;
		return function (t, e, r, i) {
			for (
				var n,
					o,
					s = Q(t),
					a = ut(s),
					c = U(e, r, 3),
					l = w(a.length),
					u = 0,
					e = i || K,
					h = d ? e(t, l) : p ? e(t, 0) : void 0;
				u < l;
				u++
			)
				if ((b || u in a) && ((o = c((n = a[u]), u, s)), f))
					if (d) h[u] = o;
					else if (o)
						switch (f) {
							case 3:
								return !0;
							case 5:
								return n;
							case 6:
								return u;
							case 2:
								Jt.call(h, n);
						}
					else if (g) return !1;
			return y ? -1 : v || g ? g : h;
		};
	}
	function J(t, e) {
		var r = [][t];
		return (
			!r ||
			!g(function () {
				r.call(
					null,
					e ||
						function () {
							throw 1;
						},
					1
				);
			})
		);
	}
	var r,
		Z,
		tt,
		et,
		rt,
		it,
		nt,
		n,
		ot,
		o = "object",
		b =
			I(typeof globalThis == o && globalThis) ||
			I(typeof window == o && window) ||
			I(typeof self == o && self) ||
			I(typeof t == o && t) ||
			Function("return this")(),
		f = !g(function () {
			return (
				7 !=
				Object.defineProperty({}, "a", {
					get: function () {
						return 7;
					},
				}).a
			);
		}),
		o = {}.propertyIsEnumerable,
		st = Object.getOwnPropertyDescriptor,
		at = {
			f:
				st && !o.call({ 1: 2 }, 1)
					? function (t) {
							t = st(this, t);
							return !!t && t.enumerable;
					  }
					: o,
		},
		ct = {}.toString,
		lt = "".split,
		ut = g(function () {
			return !Object("z").propertyIsEnumerable(0);
		})
			? function (t) {
					return "String" == i(t) ? lt.call(t, "") : Object(t);
			  }
			: Object,
		s = function (t) {
			if (null == t) throw TypeError("Can't call method on " + t);
			return t;
		},
		m = function (t) {
			return "object" == typeof t ? null !== t : "function" == typeof t;
		},
		ht = {}.hasOwnProperty,
		x = function (t, e) {
			return ht.call(t, e);
		},
		ft = b.document,
		dt = m(ft) && m(ft.createElement),
		pt =
			!f &&
			!g(function () {
				return (
					7 !=
					Object.defineProperty(F("div"), "a", {
						get: function () {
							return 7;
						},
					}).a
				);
			}),
		vt = Object.getOwnPropertyDescriptor,
		gt = {
			f: f
				? vt
				: function (t, e) {
						if (((t = P(t)), (e = V(e, !0)), pt))
							try {
								return vt(t, e);
							} catch (t) {}
						if (x(t, e)) return D(!at.f.call(t, e), t[e]);
				  },
		},
		O = function (t) {
			if (m(t)) return t;
			throw TypeError(String(t) + " is not an object");
		},
		yt = Object.defineProperty,
		E = {
			f: f
				? yt
				: function (t, e, r) {
						if ((O(t), (e = V(e, !0)), O(r), pt))
							try {
								return yt(t, e, r);
							} catch (t) {}
						if ("get" in r || "set" in r)
							throw TypeError("Accessors not supported");
						return "value" in r && (t[e] = r.value), t;
				  },
		},
		_ = f
			? function (t, e, r) {
					return E.f(t, e, D(1, r));
			  }
			: function (t, e, r) {
					return (t[e] = r), t;
			  },
		bt = N(function (t) {
			var r = b["__core-js_shared__"] || B("__core-js_shared__", {});
			(t.exports = function (t, e) {
				return r[t] || (r[t] = void 0 !== e ? e : {});
			})("versions", []).push({
				version: "3.2.1",
				mode: "global",
				copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
			});
		}),
		mt = bt("native-function-to-string", Function.toString),
		o = b.WeakMap,
		xt = "function" == typeof o && /native code/.test(mt.call(o)),
		Et = 0,
		wt = Math.random(),
		Ot = function (t) {
			return (
				"Symbol(" +
				String(void 0 === t ? "" : t) +
				")_" +
				(++Et + wt).toString(36)
			);
		},
		_t = bt("keys"),
		St = {},
		o = b.WeakMap,
		u =
			((nt = xt
				? ((r = new o()),
				  (Z = r.get),
				  (tt = r.has),
				  (et = r.set),
				  (rt = function (t, e) {
						return et.call(r, t, e), e;
				  }),
				  (it = function (t) {
						return Z.call(r, t) || {};
				  }),
				  function (t) {
						return tt.call(r, t);
				  })
				: ((n = H("state")),
				  (St[n] = !0),
				  (rt = function (t, e) {
						return _(t, n, e), e;
				  }),
				  (it = function (t) {
						return x(t, n) ? t[n] : {};
				  }),
				  function (t) {
						return x(t, n);
				  })),
			{
				set: rt,
				get: it,
				has: nt,
				enforce: function (t) {
					return nt(t) ? it(t) : rt(t, {});
				},
				getterFor: function (e) {
					return function (t) {
						if (m(t) && (t = it(t)).type === e) return t;
						throw TypeError("Incompatible receiver, " + e + " required");
					};
				},
			}),
		S = N(function (t) {
			var e = u.get,
				s = u.enforce,
				a = String(mt).split("toString");
			bt("inspectSource", function (t) {
				return mt.call(t);
			}),
				(t.exports = function (t, e, r, i) {
					var n = !!i && !!i.unsafe,
						o = !!i && !!i.enumerable,
						i = !!i && !!i.noTargetGet;
					"function" == typeof r &&
						("string" != typeof e || x(r, "name") || _(r, "name", e),
						(s(r).source = a.join("string" == typeof e ? e : ""))),
						t !== b
							? (n ? !i && t[e] && (o = !0) : delete t[e],
							  o ? (t[e] = r) : _(t, e, r))
							: o
							? (t[e] = r)
							: B(e, r);
				})(Function.prototype, "toString", function () {
					return ("function" == typeof this && e(this).source) || mt.call(this);
				});
		}),
		At = b,
		kt = Math.ceil,
		Lt = Math.floor,
		Mt = function (t) {
			return isNaN((t = +t)) ? 0 : (0 < t ? Lt : kt)(t);
		},
		Tt = Math.min,
		jt = Math.max,
		Rt = Math.min,
		Wt = (X(!0), X(!1)),
		zt = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf",
		],
		Ct = zt.concat("length", "prototype"),
		Nt = {
			f:
				Object.getOwnPropertyNames ||
				function (t) {
					return Y(t, Ct);
				},
		},
		It = { f: Object.getOwnPropertySymbols },
		Dt =
			$("Reflect", "ownKeys") ||
			function (t) {
				var e = Nt.f(O(t)),
					r = It.f;
				return r ? e.concat(r(t)) : e;
			},
		Pt = /#|\.prototype\./,
		Vt = (G.normalize = function (t) {
			return String(t).replace(Pt, ".").toLowerCase();
		}),
		Ft = (G.data = {}),
		Bt = (G.NATIVE = "N"),
		Ht = (G.POLYFILL = "P"),
		qt = G,
		$t = gt.f,
		Xt = function (t) {
			if ("function" != typeof t)
				throw TypeError(String(t) + " is not a function");
			return t;
		},
		Yt =
			Array.isArray ||
			function (t) {
				return "Array" == i(t);
			},
		Gt =
			!!Object.getOwnPropertySymbols &&
			!g(function () {
				return !String(Symbol());
			}),
		Ut = b.Symbol,
		Qt = bt("wks"),
		Kt = l("species"),
		Jt = [].push,
		o = {
			forEach: e(0),
			map: e(1),
			filter: e(2),
			some: e(3),
			every: e(4),
			find: e(5),
			findIndex: e(6),
		},
		Zt = o.forEach,
		te = J("forEach")
			? function (t) {
					return Zt(this, t, 1 < arguments.length ? arguments[1] : void 0);
			  }
			: [].forEach,
		ee =
			(y(
				{ target: "Array", proto: !0, forced: [].forEach != te },
				{ forEach: te }
			),
			{
				CSSRuleList: 0,
				CSSStyleDeclaration: 0,
				CSSValueList: 0,
				ClientRectList: 0,
				DOMRectList: 0,
				DOMStringList: 0,
				DOMTokenList: 1,
				DataTransferItemList: 0,
				FileList: 0,
				HTMLAllCollection: 0,
				HTMLCollection: 0,
				HTMLFormElement: 0,
				HTMLSelectElement: 0,
				MediaList: 0,
				MimeTypeArray: 0,
				NamedNodeMap: 0,
				NodeList: 1,
				PaintRequestList: 0,
				Plugin: 0,
				PluginArray: 0,
				SVGLengthList: 0,
				SVGNumberList: 0,
				SVGPathSegList: 0,
				SVGPointList: 0,
				SVGStringList: 0,
				SVGTransformList: 0,
				SourceBufferList: 0,
				StyleSheetList: 0,
				TextTrackCueList: 0,
				TextTrackList: 0,
				TouchList: 0,
			});
	for (ot in ee) {
		var a = b[ot],
			a = a && a.prototype;
		if (a && a.forEach !== te)
			try {
				_(a, "forEach", te);
			} catch (t) {
				a.forEach = te;
			}
	}
	function re() {}
	var ie = !(
			"undefined" == typeof window ||
			!window.document ||
			!window.document.createElement
		),
		ne = l("species"),
		oe = o.filter,
		se =
			(y(
				{
					target: "Array",
					proto: !0,
					forced: !!g(function () {
						var t = [];
						return (
							((t.constructor = {})[ne] = function () {
								return { foo: 1 };
							}),
							1 !== t.filter(Boolean).foo
						);
					}),
				},
				{
					filter: function (t) {
						return oe(this, t, 1 < arguments.length ? arguments[1] : void 0);
					},
				}
			),
			Object.keys ||
				function (t) {
					return Y(t, zt);
				}),
		ae = f
			? Object.defineProperties
			: function (t, e) {
					O(t);
					for (var r, i = se(e), n = i.length, o = 0; o < n; )
						E.f(t, (r = i[o++]), e[r]);
					return t;
			  },
		ce = $("document", "documentElement"),
		le = H("IE_PROTO"),
		ue = function () {
			var t = F("iframe"),
				e = zt.length;
			for (
				t.style.display = "none",
					ce.appendChild(t),
					t.src = String("javascript:"),
					(t = t.contentWindow.document).open(),
					t.write("<script>document.F=Object</script>"),
					t.close(),
					ue = t.F;
				e--;

			)
				delete ue.prototype[zt[e]];
			return ue();
		},
		he =
			Object.create ||
			function (t, e) {
				var r;
				return (
					null !== t
						? ((re.prototype = O(t)),
						  (r = new re()),
						  (re.prototype = null),
						  (r[le] = t))
						: (r = ue()),
					void 0 === e ? r : ae(r, e)
				);
			},
		fe = ((St[le] = !0), l("unscopables")),
		de = Array.prototype;
	null == de[fe] && _(de, fe, he(null));
	function pe(t) {
		de[fe][t] = !0;
	}
	function ve(t, e, r) {
		t &&
			!x((t = r ? t : t.prototype), Te) &&
			Me(t, Te, { configurable: !0, value: e });
	}
	function ge() {
		return this;
	}
	function ye() {
		return this;
	}
	function be(t, e, r, i, n, o, s) {
		function a(t) {
			if (t === n && p) return p;
			if (!ze && t in f) return f[t];
			switch (t) {
				case "keys":
				case "values":
				case "entries":
					return function () {
						return new r(this, t);
					};
			}
			return function () {
				return new r(this);
			};
		}
		(c = e + " Iterator"),
			((v = r).prototype = he(je, { next: D(1, i) })),
			ve(v, c, !1),
			(_e[c] = ge);
		var c,
			l,
			u,
			i = e + " Iterator",
			h = !1,
			f = t.prototype,
			d = f[Ce] || f["@@iterator"] || (n && f[n]),
			p = (!ze && d) || a(n),
			v = ("Array" == e && f.entries) || d;
		if (
			(v &&
				((c = ke(v.call(new t()))),
				We !== Object.prototype &&
					c.next &&
					(ke(c) !== We &&
						(Re ? Re(c, We) : "function" != typeof c[Ce] && _(c, Ce, ye)),
					ve(c, i, !0))),
			"values" == n &&
				d &&
				"values" !== d.name &&
				((h = !0),
				(p = function () {
					return d.call(this);
				})),
			f[Ce] !== p && _(f, Ce, p),
			(_e[e] = p),
			n)
		)
			if (
				((l = {
					values: a("values"),
					keys: o ? p : a("keys"),
					entries: a("entries"),
				}),
				s)
			)
				for (u in l) (!ze && !h && u in f) || S(f, u, l[u]);
			else y({ target: e, proto: !0, forced: ze || h }, l);
		return l;
	}
	function me(t) {
		var e;
		return void 0 === t
			? "Undefined"
			: null === t
			? "Null"
			: "string" ==
			  typeof (e = (function (t, e) {
					try {
						return t[e];
					} catch (t) {}
			  })((t = Object(t)), Ve))
			? e
			: Fe
			? i(t)
			: "Object" == (e = i(t)) && "function" == typeof t.callee
			? "Arguments"
			: e;
	}
	function xe(e) {
		return function (t) {
			t = String(s(t));
			return (
				1 & e && (t = t.replace(Be, "")), (t = 2 & e ? t.replace(He, "") : t)
			);
		};
	}
	function Ee(n) {
		return function (t, e) {
			var r,
				t = String(s(t)),
				e = Mt(e),
				i = t.length;
			return e < 0 || i <= e
				? n
					? ""
					: void 0
				: (r = t.charCodeAt(e)) < 55296 ||
				  56319 < r ||
				  e + 1 === i ||
				  (i = t.charCodeAt(e + 1)) < 56320 ||
				  57343 < i
				? n
					? t.charAt(e)
					: r
				: n
				? t.slice(e, e + 2)
				: i - 56320 + ((r - 55296) << 10) + 65536;
		};
	}
	function we(t, e, r) {
		for (var i in e) S(t, i, e[i], r);
	}
	function Oe(t, e, r) {
		if (!(t instanceof e))
			throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
	}
	var _e = {},
		c = !g(function () {
			function t() {}
			return (
				(t.prototype.constructor = null),
				Object.getPrototypeOf(new t()) !== t.prototype
			);
		}),
		Se = H("IE_PROTO"),
		Ae = Object.prototype,
		ke = c
			? Object.getPrototypeOf
			: function (t) {
					return (
						(t = Q(t)),
						x(t, Se)
							? t[Se]
							: "function" == typeof t.constructor && t instanceof t.constructor
							? t.constructor.prototype
							: t instanceof Object
							? Ae
							: null
					);
			  },
		c = l("iterator"),
		Le = !1,
		h =
			([].keys &&
				("next" in (h = [].keys())
					? (h = ke(ke(h))) !== Object.prototype && (d = h)
					: (Le = !0)),
			x((d = null == d ? {} : d), c) ||
				_(d, c, function () {
					return this;
				}),
			{ IteratorPrototype: d, BUGGY_SAFARI_ITERATORS: Le }),
		Me = E.f,
		Te = l("toStringTag"),
		je = h.IteratorPrototype,
		Re =
			Object.setPrototypeOf ||
			("__proto__" in {}
				? (function () {
						var i,
							n = !1,
							t = {};
						try {
							(i = Object.getOwnPropertyDescriptor(
								Object.prototype,
								"__proto__"
							).set).call(t, []),
								(n = t instanceof Array);
						} catch (i) {}
						return function (t, e) {
							O(t);
							var r = e;
							if (m(r) || null === r)
								return n ? i.call(t, e) : (t.__proto__ = e), t;
							throw TypeError("Can't set " + String(r) + " as a prototype");
						};
				  })()
				: void 0),
		We = h.IteratorPrototype,
		ze = h.BUGGY_SAFARI_ITERATORS,
		Ce = l("iterator"),
		Ne = u.set,
		Ie = u.getterFor("Array Iterator"),
		De = be(
			Array,
			"Array",
			function (t, e) {
				Ne(this, { type: "Array Iterator", target: P(t), index: 0, kind: e });
			},
			function () {
				var t = Ie(this),
					e = t.target,
					r = t.kind,
					i = t.index++;
				return !e || i >= e.length
					? { value: (t.target = void 0), done: !0 }
					: "keys" == r
					? { value: i, done: !1 }
					: "values" == r
					? { value: e[i], done: !1 }
					: { value: [i, e[i]], done: !1 };
			},
			"values"
		),
		Pe =
			((_e.Arguments = _e.Array),
			pe("keys"),
			pe("values"),
			pe("entries"),
			Object.assign),
		c =
			!Pe ||
			g(function () {
				var t = {},
					e = {},
					r = Symbol();
				return (
					(t[r] = 7),
					"abcdefghijklmnopqrst".split("").forEach(function (t) {
						e[t] = t;
					}),
					7 != Pe({}, t)[r] || "abcdefghijklmnopqrst" != se(Pe({}, e)).join("")
				);
			})
				? function (t, e) {
						for (
							var r = Q(t), i = arguments.length, n = 1, o = It.f, s = at.f;
							n < i;

						)
							for (
								var a,
									c = ut(arguments[n++]),
									l = o ? se(c).concat(o(c)) : se(c),
									u = l.length,
									h = 0;
								h < u;

							)
								(a = l[h++]), (f && !s.call(c, a)) || (r[a] = c[a]);
						return r;
				  }
				: Pe,
		Ve =
			(y(
				{ target: "Object", stat: !0, forced: Object.assign !== c },
				{ assign: c }
			),
			l("toStringTag")),
		Fe =
			"Arguments" ==
			i(
				(function () {
					return arguments;
				})()
			),
		d = {},
		Le =
			((d[l("toStringTag")] = "z"),
			"[object z]" !== String(d)
				? function () {
						return "[object " + me(this) + "]";
				  }
				: d.toString),
		h = Object.prototype,
		c =
			(Le !== h.toString && S(h, "toString", Le, { unsafe: !0 }),
			"\t\n\v\f\r  áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"),
		d = "[" + c + "]",
		Be = RegExp("^" + d + d + "*"),
		He = RegExp(d + d + "*$"),
		qe = (xe(1), xe(2), xe(3)),
		$e = b.parseInt,
		Xe = /^[+-]?0[Xx]/,
		h =
			8 !== $e(c + "08") || 22 !== $e(c + "0x16")
				? function (t, e) {
						t = qe(String(t));
						return $e(t, e >>> 0 || (Xe.test(t) ? 16 : 10));
				  }
				: $e,
		Le =
			(y({ global: !0, forced: parseInt != h }, { parseInt: h }),
			{ codeAt: Ee(!1), charAt: Ee(!0) }),
		Ye = Le.charAt,
		Ge = u.set,
		Ue = u.getterFor("String Iterator"),
		Qe =
			(be(
				String,
				"String",
				function (t) {
					Ge(this, { type: "String Iterator", string: String(t), index: 0 });
				},
				function () {
					var t = Ue(this),
						e = t.string,
						r = t.index;
					return r >= e.length
						? { value: void 0, done: !0 }
						: ((e = Ye(e, r)), (t.index += e.length), { value: e, done: !1 });
				}
			),
			!g(function () {
				return Object.isExtensible(Object.preventExtensions({}));
			})),
		A = N(function (t) {
			function r(t) {
				e(t, i, { value: { objectID: "O" + ++n, weakData: {} } });
			}
			var e = E.f,
				i = Ot("meta"),
				n = 0,
				o =
					Object.isExtensible ||
					function () {
						return !0;
					},
				s = (t.exports = {
					REQUIRED: !1,
					fastKey: function (t, e) {
						if (!m(t))
							return "symbol" == typeof t
								? t
								: ("string" == typeof t ? "S" : "P") + t;
						if (!x(t, i)) {
							if (!o(t)) return "F";
							if (!e) return "E";
							r(t);
						}
						return t[i].objectID;
					},
					getWeakData: function (t, e) {
						if (!x(t, i)) {
							if (!o(t)) return !0;
							if (!e) return !1;
							r(t);
						}
						return t[i].weakData;
					},
					onFreeze: function (t) {
						return Qe && s.REQUIRED && o(t) && !x(t, i) && r(t), t;
					},
				});
			St[i] = !0;
		}),
		Ke = (A.REQUIRED, A.fastKey, A.getWeakData, A.onFreeze, l("iterator")),
		Je = Array.prototype,
		Ze = l("iterator"),
		tr = N(function (t) {
			function h(t, e) {
				(this.stopped = t), (this.result = e);
			}
			(t.exports = function (t, e, r, i, n) {
				var o,
					s,
					a,
					c,
					l,
					u = U(e, r, i ? 2 : 1);
				if (n) o = t;
				else {
					if (
						"function" !=
						typeof (e = (function () {
							if (null != t) return t[Ze] || t["@@iterator"] || _e[me(t)];
						})())
					)
						throw TypeError("Target is not iterable");
					if (void 0 !== (r = e) && (_e.Array === r || Je[Ke] === r)) {
						for (s = 0, a = w(t.length); s < a; s++)
							if (
								(c = i ? u(O((l = t[s]))[0], l[1]) : u(t[s])) &&
								c instanceof h
							)
								return c;
						return new h(!1);
					}
					o = e.call(t);
				}
				for (; !(l = o.next()).done; )
					if (
						(c = (function (t, e, r, i) {
							try {
								return i ? e(O(r)[0], r[1]) : e(r);
							} catch (e) {
								i = t.return;
								throw (void 0 !== i && O(i.call(t)), e);
							}
						})(o, u, l.value, i)) &&
						c instanceof h
					)
						return c;
				return new h(!1);
			}).stop = function (t) {
				return new h(!0, t);
			};
		}),
		er = l("iterator"),
		rr = !1;
	try {
		var ir = 0,
			p = {
				next: function () {
					return { done: !!ir++ };
				},
				return: function () {
					rr = !0;
				},
			};
		(p[er] = function () {
			return this;
		}),
			Array.from(p, function () {
				throw 2;
			});
	} catch (t) {}
	function nr(n, t, e, o, i) {
		function r(t) {
			var r = f[t];
			S(
				f,
				t,
				"add" == t
					? function (t) {
							return r.call(this, 0 === t ? 0 : t), this;
					  }
					: "delete" == t
					? function (t) {
							return !(i && !m(t)) && r.call(this, 0 === t ? 0 : t);
					  }
					: "get" == t
					? function (t) {
							return i && !m(t) ? void 0 : r.call(this, 0 === t ? 0 : t);
					  }
					: "has" == t
					? function (t) {
							return !(i && !m(t)) && r.call(this, 0 === t ? 0 : t);
					  }
					: function (t, e) {
							return r.call(this, 0 === t ? 0 : t, e), this;
					  }
			);
		}
		var s,
			a,
			c,
			l,
			u,
			h = b[n],
			f = h && h.prototype,
			d = h,
			p = o ? "set" : "add",
			v = {};
		return (
			qt(
				n,
				"function" != typeof h ||
					!(
						i ||
						(f.forEach &&
							!g(function () {
								new h().entries().next();
							}))
					)
			)
				? ((d = e.getConstructor(t, n, o, p)), (A.REQUIRED = !0))
				: qt(n, !0) &&
				  ((a = (s = new d())[p](i ? {} : -0, 1) != s),
				  (c = g(function () {
						s.has(1);
				  })),
				  (l = (function () {
						if (!rr) return !1;
						var t = !1;
						try {
							var e = {};
							(e[er] = function () {
								return {
									next: function () {
										return { done: (t = !0) };
									},
								};
							}),
								new h(e);
						} catch (t) {}
						return t;
				  })()),
				  (u =
						!i &&
						g(function () {
							for (var t = new h(), e = 5; e--; ) t[p](e, e);
							return !t.has(-0);
						})),
				  l ||
						(((d = t(function (t, e) {
							Oe(t, d, n);
							(r = new h()),
								(i = d),
								Re &&
									"function" == typeof (t = t.constructor) &&
									t !== i &&
									m((t = t.prototype)) &&
									t !== i.prototype &&
									Re(r, t);
							var r,
								i = r;
							return null != e && tr(e, i[p], i, o), i;
						})).prototype = f).constructor = d),
				  (c || u) && (r("delete"), r("has"), o && r("get")),
				  (u || a) && r(p),
				  i && f.clear && delete f.clear),
			(v[n] = d),
			y({ global: !0, forced: d != h }, v),
			ve(d, n),
			i || e.setStrong(d, n, o),
			d
		);
	}
	function or(t) {
		return t.frozen || (t.frozen = new sr());
	}
	function sr() {
		this.entries = [];
	}
	function ar(t, e) {
		return fr(t.entries, function (t) {
			return t[0] === e;
		});
	}
	var cr,
		lr = A.getWeakData,
		ur = u.set,
		hr = u.getterFor,
		fr = o.find,
		dr = o.findIndex,
		pr = 0,
		vr =
			((sr.prototype = {
				get: function (t) {
					t = ar(this, t);
					if (t) return t[1];
				},
				has: function (t) {
					return !!ar(this, t);
				},
				set: function (t, e) {
					var r = ar(this, t);
					r ? (r[1] = e) : this.entries.push([t, e]);
				},
				delete: function (e) {
					var t = dr(this.entries, function (t) {
						return t[0] === e;
					});
					return ~t && this.entries.splice(t, 1), !!~t;
				},
			}),
			{
				getConstructor: function (t, r, i, n) {
					function o(t, e, r) {
						var i = a(t),
							n = lr(O(e), !0);
						return !0 === n ? or(i).set(e, r) : (n[i.id] = r), t;
					}
					var s = t(function (t, e) {
							Oe(t, s, r),
								ur(t, { type: r, id: pr++, frozen: void 0 }),
								null != e && tr(e, t[n], t, i);
						}),
						a = hr(r);
					return (
						we(s.prototype, {
							delete: function (t) {
								var e = a(this);
								if (!m(t)) return !1;
								var r = lr(t);
								return !0 === r
									? or(e).delete(t)
									: r && x(r, e.id) && delete r[e.id];
							},
							has: function (t) {
								var e = a(this);
								if (!m(t)) return !1;
								var r = lr(t);
								return !0 === r ? or(e).has(t) : r && x(r, e.id);
							},
						}),
						we(
							s.prototype,
							i
								? {
										get: function (t) {
											var e,
												r = a(this);
											if (m(t))
												return !0 === (e = lr(t))
													? or(r).get(t)
													: e
													? e[r.id]
													: void 0;
										},
										set: function (t, e) {
											return o(this, t, e);
										},
								  }
								: {
										add: function (t) {
											return o(this, t, !0);
										},
								  }
						),
						s
					);
				},
			}),
		gr =
			(N(function (t) {
				function e(t) {
					return function () {
						return t(this, arguments.length ? arguments[0] : void 0);
					};
				}
				var i,
					r,
					n,
					o,
					s,
					a = u.enforce,
					c = !b.ActiveXObject && "ActiveXObject" in b,
					l = Object.isExtensible,
					t = (t.exports = nr("WeakMap", e, vr, !0, !0));
				xt &&
					c &&
					((i = vr.getConstructor(e, "WeakMap", !0)),
					(A.REQUIRED = !0),
					(c = t.prototype),
					(r = c.delete),
					(n = c.has),
					(o = c.get),
					(s = c.set),
					we(c, {
						delete: function (t) {
							var e;
							return m(t) && !l(t)
								? ((e = a(this)).frozen || (e.frozen = new i()),
								  r.call(this, t) || e.frozen.delete(t))
								: r.call(this, t);
						},
						has: function (t) {
							var e;
							return m(t) && !l(t)
								? ((e = a(this)).frozen || (e.frozen = new i()),
								  n.call(this, t) || e.frozen.has(t))
								: n.call(this, t);
						},
						get: function (t) {
							var e;
							return m(t) && !l(t)
								? ((e = a(this)).frozen || (e.frozen = new i()),
								  n.call(this, t) ? o.call(this, t) : e.frozen.get(t))
								: o.call(this, t);
						},
						set: function (t, e) {
							var r;
							return (
								m(t) && !l(t)
									? ((r = a(this)).frozen || (r.frozen = new i()),
									  n.call(this, t) ? s.call(this, t, e) : r.frozen.set(t, e))
									: s.call(this, t, e),
								this
							);
						},
					}));
			}),
			l("iterator")),
		yr = l("toStringTag"),
		br = De.values;
	for (cr in ee) {
		var mr = b[cr],
			v = mr && mr.prototype;
		if (v) {
			if (v[gr] !== br)
				try {
					_(v, gr, br);
				} catch (t) {
					v[gr] = br;
				}
			if ((v[yr] || _(v, yr, cr), ee[cr]))
				for (var xr in De)
					if (v[xr] !== De[xr])
						try {
							_(v, xr, De[xr]);
						} catch (t) {
							v[xr] = De[xr];
						}
		}
	}
	function Er() {
		return Tr.Date.now();
	}
	var wr = "Expected a function",
		Or = NaN,
		_r = "[object Symbol]",
		Sr = /^\s+|\s+$/g,
		Ar = /^[-+]0x[0-9a-f]+$/i,
		kr = /^0b[01]+$/i,
		Lr = /^0o[0-7]+$/i,
		Mr = parseInt,
		d = "object" == typeof t && t && t.Object === Object && t,
		c = "object" == typeof self && self && self.Object === Object && self,
		Tr = d || c || Function("return this")(),
		jr = Object.prototype.toString,
		Rr = Math.max,
		Wr = Math.min;
	function zr(i, r, t) {
		var n,
			o,
			s,
			a,
			c,
			l,
			u = 0,
			h = !1,
			f = !1,
			e = !0;
		if ("function" != typeof i) throw new TypeError(wr);
		function d(t) {
			var e = n,
				r = o;
			return (n = o = void 0), (u = t), (a = i.apply(r, e));
		}
		function p(t) {
			var e = t - l;
			return void 0 === l || r <= e || e < 0 || (f && s <= t - u);
		}
		function v() {
			var t,
				e = Er();
			if (p(e)) return g(e);
			c = setTimeout(v, ((t = r - (e - l)), f ? Wr(t, s - (e - u)) : t));
		}
		function g(t) {
			return (c = void 0), e && n ? d(t) : ((n = o = void 0), a);
		}
		function y() {
			var t = Er(),
				e = p(t);
			if (((n = arguments), (o = this), (l = t), e)) {
				if (void 0 === c)
					return (u = t = l), (c = setTimeout(v, r)), h ? d(t) : a;
				if (f) return (c = setTimeout(v, r)), d(l);
			}
			return void 0 === c && (c = setTimeout(v, r)), a;
		}
		return (
			(r = Nr(r) || 0),
			Cr(t) &&
				((h = !!t.leading),
				(s = (f = "maxWait" in t) ? Rr(Nr(t.maxWait) || 0, r) : s),
				(e = "trailing" in t ? !!t.trailing : e)),
			(y.cancel = function () {
				void 0 !== c && clearTimeout(c), (n = l = o = c = void (u = 0));
			}),
			(y.flush = function () {
				return void 0 === c ? a : g(Er());
			}),
			y
		);
	}
	function Cr(t) {
		var e = typeof t;
		return t && ("object" == e || "function" == e);
	}
	function Nr(t) {
		if ("number" == typeof t) return t;
		if (
			"symbol" == typeof (e = t) ||
			(e && "object" == typeof e && jr.call(e) == _r)
		)
			return Or;
		if (
			"string" !=
			typeof (t = Cr(t)
				? Cr((e = "function" == typeof t.valueOf ? t.valueOf() : t))
					? e + ""
					: e
				: t)
		)
			return 0 === t ? t : +t;
		t = t.replace(Sr, "");
		var e = kr.test(t);
		return e || Lr.test(t) ? Mr(t.slice(2), e ? 2 : 8) : Ar.test(t) ? Or : +t;
	}
	function Ir(t, e, r) {
		var i = !0,
			n = !0;
		if ("function" != typeof t) throw new TypeError(wr);
		return (
			Cr(r) &&
				((i = "leading" in r ? !!r.leading : i),
				(n = "trailing" in r ? !!r.trailing : n)),
			zr(t, e, { leading: i, maxWait: e, trailing: n })
		);
	}
	var Dr = "Expected a function",
		Pr = NaN,
		Vr = "[object Symbol]",
		Fr = /^\s+|\s+$/g,
		Br = /^[-+]0x[0-9a-f]+$/i,
		Hr = /^0b[01]+$/i,
		qr = /^0o[0-7]+$/i,
		$r = parseInt,
		h = "object" == typeof t && t && t.Object === Object && t,
		p = "object" == typeof self && self && self.Object === Object && self,
		Xr = h || p || Function("return this")(),
		Yr = Object.prototype.toString,
		Gr = Math.max,
		Ur = Math.min,
		Qr = function () {
			return Xr.Date.now();
		};
	function Kr(t) {
		var e = typeof t;
		return t && ("object" == e || "function" == e);
	}
	function Jr(t) {
		if ("number" == typeof t) return t;
		if (
			"symbol" == typeof (e = t) ||
			(e && "object" == typeof e && Yr.call(e) == Vr)
		)
			return Pr;
		if (
			"string" !=
			typeof (t = Kr(t)
				? Kr((e = "function" == typeof t.valueOf ? t.valueOf() : t))
					? e + ""
					: e
				: t)
		)
			return 0 === t ? t : +t;
		t = t.replace(Fr, "");
		var e = Hr.test(t);
		return e || qr.test(t) ? $r(t.slice(2), e ? 2 : 8) : Br.test(t) ? Pr : +t;
	}
	function Zr(i, r, t) {
		var n,
			o,
			s,
			a,
			c,
			l,
			u = 0,
			h = !1,
			f = !1,
			e = !0;
		if ("function" != typeof i) throw new TypeError(Dr);
		function d(t) {
			var e = n,
				r = o;
			return (n = o = void 0), (u = t), (a = i.apply(r, e));
		}
		function p(t) {
			var e = t - l;
			return void 0 === l || r <= e || e < 0 || (f && s <= t - u);
		}
		function v() {
			var t,
				e = Qr();
			if (p(e)) return g(e);
			c = setTimeout(v, ((t = r - (e - l)), f ? Ur(t, s - (e - u)) : t));
		}
		function g(t) {
			return (c = void 0), e && n ? d(t) : ((n = o = void 0), a);
		}
		function y() {
			var t = Qr(),
				e = p(t);
			if (((n = arguments), (o = this), (l = t), e)) {
				if (void 0 === c)
					return (u = t = l), (c = setTimeout(v, r)), h ? d(t) : a;
				if (f) return (c = setTimeout(v, r)), d(l);
			}
			return void 0 === c && (c = setTimeout(v, r)), a;
		}
		return (
			(r = Jr(r) || 0),
			Kr(t) &&
				((h = !!t.leading),
				(s = (f = "maxWait" in t) ? Gr(Jr(t.maxWait) || 0, r) : s),
				(e = "trailing" in t ? !!t.trailing : e)),
			(y.cancel = function () {
				void 0 !== c && clearTimeout(c), (n = l = o = c = void (u = 0));
			}),
			(y.flush = function () {
				return void 0 === c ? a : g(Qr());
			}),
			y
		);
	}
	var ti = "__lodash_hash_undefined__",
		ei = "[object Function]",
		ri = "[object GeneratorFunction]",
		ii = /^\[object .+?Constructor\]$/,
		o = "object" == typeof t && t && t.Object === Object && t,
		d = "object" == typeof self && self && self.Object === Object && self,
		c = o || d || Function("return this")(),
		h = Array.prototype,
		p = Function.prototype,
		o = Object.prototype,
		d = c["__core-js_shared__"],
		ni = (R = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ""))
			? "Symbol(src)_1." + R
			: "",
		oi = p.toString,
		si = o.hasOwnProperty,
		ai = o.toString,
		ci = RegExp(
			"^" +
				oi
					.call(si)
					.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						"$1.*?"
					) +
				"$"
		),
		li = h.splice,
		ui = vi(c, "Map"),
		hi = vi(Object, "create");
	function k(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r; ) {
			var i = t[e];
			this.set(i[0], i[1]);
		}
	}
	function fi(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r; ) {
			var i = t[e];
			this.set(i[0], i[1]);
		}
	}
	function L(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r; ) {
			var i = t[e];
			this.set(i[0], i[1]);
		}
	}
	function di(t, e) {
		for (var r, i = t.length; i--; )
			if ((r = t[i][0]) === e || (r != r && e != e)) return i;
		return -1;
	}
	function pi(t, e) {
		var r,
			t = t.__data__;
		return (
			"string" == (r = typeof e) ||
			"number" == r ||
			"symbol" == r ||
			"boolean" == r
				? "__proto__" !== e
				: null === e
		)
			? t["string" == typeof e ? "string" : "hash"]
			: t.map;
	}
	function vi(t, e) {
		var r,
			t = null == t ? void 0 : t[e];
		return !yi((e = t)) ||
			(ni && ni in e) ||
			!(
				(r = yi(e) ? ai.call(e) : "") == ei ||
				r == ri ||
				(function (t) {
					var e = !1;
					if (null != t && "function" != typeof t.toString)
						try {
							e = !!(t + "");
						} catch (t) {}
					return e;
				})(e)
					? ci
					: ii
			).test(
				(function (t) {
					if (null != t) {
						try {
							return oi.call(t);
						} catch (t) {}
						try {
							return t + "";
						} catch (t) {}
					}
					return "";
				})(e)
			)
			? void 0
			: t;
	}
	function gi(i, n) {
		if ("function" != typeof i || (n && "function" != typeof n))
			throw new TypeError("Expected a function");
		function o() {
			var t = arguments,
				e = n ? n.apply(this, t) : t[0],
				r = o.cache;
			return r.has(e)
				? r.get(e)
				: ((t = i.apply(this, t)), (o.cache = r.set(e, t)), t);
		}
		return (o.cache = new (gi.Cache || L)()), o;
	}
	function yi(t) {
		var e = typeof t;
		return t && ("object" == e || "function" == e);
	}
	(k.prototype.clear = function () {
		this.__data__ = hi ? hi(null) : {};
	}),
		(k.prototype.delete = function (t) {
			return this.has(t) && delete this.__data__[t];
		}),
		(k.prototype.get = function (t) {
			var e,
				r = this.__data__;
			return hi
				? (e = r[t]) === ti
					? void 0
					: e
				: si.call(r, t)
				? r[t]
				: void 0;
		}),
		(k.prototype.has = function (t) {
			var e = this.__data__;
			return hi ? void 0 !== e[t] : si.call(e, t);
		}),
		(k.prototype.set = function (t, e) {
			return (this.__data__[t] = hi && void 0 === e ? ti : e), this;
		}),
		(fi.prototype.clear = function () {
			this.__data__ = [];
		}),
		(fi.prototype.delete = function (t) {
			var e = this.__data__,
				t = di(e, t);
			return !(t < 0 || (t == e.length - 1 ? e.pop() : li.call(e, t, 1), 0));
		}),
		(fi.prototype.get = function (t) {
			var e = this.__data__,
				t = di(e, t);
			return t < 0 ? void 0 : e[t][1];
		}),
		(fi.prototype.has = function (t) {
			return -1 < di(this.__data__, t);
		}),
		(fi.prototype.set = function (t, e) {
			var r = this.__data__,
				i = di(r, t);
			return i < 0 ? r.push([t, e]) : (r[i][1] = e), this;
		}),
		(L.prototype.clear = function () {
			this.__data__ = { hash: new k(), map: new (ui || fi)(), string: new k() };
		}),
		(L.prototype.delete = function (t) {
			return pi(this, t).delete(t);
		}),
		(L.prototype.get = function (t) {
			return pi(this, t).get(t);
		}),
		(L.prototype.has = function (t) {
			return pi(this, t).has(t);
		}),
		(L.prototype.set = function (t, e) {
			return pi(this, t).set(t, e), this;
		}),
		(gi.Cache = L);
	var bi = gi,
		mi =
			"undefined" != typeof Map
				? Map
				: (Object.defineProperty(M.prototype, "size", {
						get: function () {
							return this.__entries__.length;
						},
						enumerable: !0,
						configurable: !0,
				  }),
				  (M.prototype.get = function (t) {
						(t = Oi(this.__entries__, t)), (t = this.__entries__[t]);
						return t && t[1];
				  }),
				  (M.prototype.set = function (t, e) {
						var r = Oi(this.__entries__, t);
						~r ? (this.__entries__[r][1] = e) : this.__entries__.push([t, e]);
				  }),
				  (M.prototype.delete = function (t) {
						var e = this.__entries__,
							t = Oi(e, t);
						~t && e.splice(t, 1);
				  }),
				  (M.prototype.has = function (t) {
						return !!~Oi(this.__entries__, t);
				  }),
				  (M.prototype.clear = function () {
						this.__entries__.splice(0);
				  }),
				  (M.prototype.forEach = function (t, e) {
						void 0 === e && (e = null);
						for (var r = 0, i = this.__entries__; r < i.length; r++) {
							var n = i[r];
							t.call(e, n[1], n[0]);
						}
				  }),
				  M),
		xi =
			"undefined" != typeof window &&
			"undefined" != typeof document &&
			window.document === document,
		Ei =
			"undefined" != typeof global && global.Math === Math
				? global
				: "undefined" != typeof self && self.Math === Math
				? self
				: "undefined" != typeof window && window.Math === Math
				? window
				: Function("return this")(),
		wi =
			"function" == typeof requestAnimationFrame
				? requestAnimationFrame.bind(Ei)
				: function (t) {
						return setTimeout(function () {
							return t(Date.now());
						}, 1e3 / 60);
				  };
	function Oi(t, r) {
		var i = -1;
		return (
			t.some(function (t, e) {
				return t[0] === r && ((i = e), !0);
			}),
			i
		);
	}
	function M() {
		this.__entries__ = [];
	}
	function _i(t, e) {
		for (var r = 0, i = Object.keys(e); r < i.length; r++) {
			var n = i[r];
			Object.defineProperty(t, n, {
				value: e[n],
				enumerable: !1,
				writable: !1,
				configurable: !0,
			});
		}
	}
	var Si = [
			"top",
			"right",
			"bottom",
			"left",
			"width",
			"height",
			"size",
			"weight",
		],
		Ai = "undefined" != typeof MutationObserver,
		ki =
			((T.prototype.addObserver = function (t) {
				~this.observers_.indexOf(t) || this.observers_.push(t),
					this.connected_ || this.connect_();
			}),
			(T.prototype.removeObserver = function (t) {
				var e = this.observers_,
					t = e.indexOf(t);
				~t && e.splice(t, 1),
					!e.length && this.connected_ && this.disconnect_();
			}),
			(T.prototype.refresh = function () {
				this.updateObservers_() && this.refresh();
			}),
			(T.prototype.updateObservers_ = function () {
				var t = this.observers_.filter(function (t) {
					return t.gatherActive(), t.hasActive();
				});
				return (
					t.forEach(function (t) {
						return t.broadcastActive();
					}),
					0 < t.length
				);
			}),
			(T.prototype.connect_ = function () {
				xi &&
					!this.connected_ &&
					(document.addEventListener("transitionend", this.onTransitionEnd_),
					window.addEventListener("resize", this.refresh),
					Ai
						? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
						  this.mutationsObserver_.observe(document, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0,
						  }))
						: (document.addEventListener("DOMSubtreeModified", this.refresh),
						  (this.mutationEventsAdded_ = !0)),
					(this.connected_ = !0));
			}),
			(T.prototype.disconnect_ = function () {
				xi &&
					this.connected_ &&
					(document.removeEventListener("transitionend", this.onTransitionEnd_),
					window.removeEventListener("resize", this.refresh),
					this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
					this.mutationEventsAdded_ &&
						document.removeEventListener("DOMSubtreeModified", this.refresh),
					(this.mutationsObserver_ = null),
					(this.mutationEventsAdded_ = !1),
					(this.connected_ = !1));
			}),
			(T.prototype.onTransitionEnd_ = function (t) {
				var t = t.propertyName,
					e = void 0 === t ? "" : t;
				Si.some(function (t) {
					return !!~e.indexOf(t);
				}) && this.refresh();
			}),
			(T.getInstance = function () {
				return this.instance_ || (this.instance_ = new T()), this.instance_;
			}),
			(T.instance_ = null),
			T),
		Li = function (t) {
			return (t && t.ownerDocument && t.ownerDocument.defaultView) || Ei;
		},
		Mi = zi(0, 0, 0, 0);
	function T() {
		function t() {
			o && ((o = !1), i()), s && r();
		}
		function e() {
			wi(t);
		}
		function r() {
			var t = Date.now();
			if (o) {
				if (t - a < 2) return;
				s = !0;
			} else (s = !(o = !0)), setTimeout(e, n);
			a = t;
		}
		var i, n, o, s, a;
		(this.connected_ = !1),
			(this.mutationEventsAdded_ = !1),
			(this.mutationsObserver_ = null),
			(this.observers_ = []),
			(this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
			(this.refresh =
				((i = this.refresh.bind(this)), (s = o = !(n = 20)), (a = 0), r));
	}
	function Ti(t) {
		return parseFloat(t) || 0;
	}
	function ji(r) {
		for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
		return t.reduce(function (t, e) {
			return t + Ti(r["border-" + e + "-width"]);
		}, 0);
	}
	var Ri =
		"undefined" != typeof SVGGraphicsElement
			? function (t) {
					return t instanceof Li(t).SVGGraphicsElement;
			  }
			: function (t) {
					return (
						t instanceof Li(t).SVGElement && "function" == typeof t.getBBox
					);
			  };
	function Wi(t) {
		{
			if (xi) {
				if (Ri(t)) return zi(0, 0, (c = t.getBBox()).width, c.height);
				var t = (c = t).clientWidth,
					e = c.clientHeight;
				if (!t && !e) return Mi;
				var r = Li(c).getComputedStyle(c),
					i = (function (t) {
						for (
							var e = {}, r = 0, i = ["top", "right", "bottom", "left"];
							r < i.length;
							r++
						) {
							var n = i[r],
								o = t["padding-" + n];
							e[n] = Ti(o);
						}
						return e;
					})(r),
					n = i.left + i.right,
					o = i.top + i.bottom,
					s = Ti(r.width),
					a = Ti(r.height);
				return (
					"border-box" === r.boxSizing &&
						(Math.round(s + n) !== t && (s -= ji(r, "left", "right") + n),
						Math.round(a + o) !== e && (a -= ji(r, "top", "bottom") + o)),
					c !== Li(c).document.documentElement &&
						((r = Math.round(s + n) - t),
						(c = Math.round(a + o) - e),
						1 !== Math.abs(r) && (s -= r),
						1 !== Math.abs(c) && (a -= c)),
					zi(i.left, i.top, s, a)
				);
			}
			return Mi;
		}
		var c;
	}
	function zi(t, e, r, i) {
		return { x: t, y: e, width: r, height: i };
	}
	function Ci(t, e) {
		var r = e.x,
			i = e.y,
			n = e.width,
			e = e.height,
			o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
			o = Object.create(o.prototype);
		_i(o, {
			x: r,
			y: i,
			width: n,
			height: e,
			top: i,
			right: r + n,
			bottom: e + i,
			left: r,
		}),
			_i(this, { target: t, contentRect: o });
	}
	function Ni(t) {
		if (!(this instanceof Ni))
			throw new TypeError("Cannot call a class as a function.");
		if (!arguments.length)
			throw new TypeError("1 argument required, but only 0 present.");
		var e = ki.getInstance(),
			t = new Di(t, e, this);
		Pi.set(this, t);
	}
	(Vi.prototype.isActive = function () {
		var t = Wi(this.target);
		return (
			(this.contentRect_ = t).width !== this.broadcastWidth ||
			t.height !== this.broadcastHeight
		);
	}),
		(Vi.prototype.broadcastRect = function () {
			var t = this.contentRect_;
			return (
				(this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
			);
		});
	var Ii = Vi,
		Di =
			((j.prototype.observe = function (t) {
				if (!arguments.length)
					throw new TypeError("1 argument required, but only 0 present.");
				if ("undefined" != typeof Element && Element instanceof Object) {
					if (!(t instanceof Li(t).Element))
						throw new TypeError('parameter 1 is not of type "Element".');
					var e = this.observations_;
					e.has(t) ||
						(e.set(t, new Ii(t)),
						this.controller_.addObserver(this),
						this.controller_.refresh());
				}
			}),
			(j.prototype.unobserve = function (t) {
				if (!arguments.length)
					throw new TypeError("1 argument required, but only 0 present.");
				if ("undefined" != typeof Element && Element instanceof Object) {
					if (!(t instanceof Li(t).Element))
						throw new TypeError('parameter 1 is not of type "Element".');
					var e = this.observations_;
					e.has(t) &&
						(e.delete(t), e.size || this.controller_.removeObserver(this));
				}
			}),
			(j.prototype.disconnect = function () {
				this.clearActive(),
					this.observations_.clear(),
					this.controller_.removeObserver(this);
			}),
			(j.prototype.gatherActive = function () {
				var e = this;
				this.clearActive(),
					this.observations_.forEach(function (t) {
						t.isActive() && e.activeObservations_.push(t);
					});
			}),
			(j.prototype.broadcastActive = function () {
				var t, e;
				this.hasActive() &&
					((t = this.callbackCtx_),
					(e = this.activeObservations_.map(function (t) {
						return new Ci(t.target, t.broadcastRect());
					})),
					this.callback_.call(t, e, t),
					this.clearActive());
			}),
			(j.prototype.clearActive = function () {
				this.activeObservations_.splice(0);
			}),
			(j.prototype.hasActive = function () {
				return 0 < this.activeObservations_.length;
			}),
			j),
		Pi = new ("undefined" != typeof WeakMap ? WeakMap : mi)();
	function j(t, e, r) {
		if (
			((this.activeObservations_ = []),
			(this.observations_ = new mi()),
			"function" != typeof t)
		)
			throw new TypeError(
				"The callback provided as parameter 1 is not a function."
			);
		(this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r);
	}
	function Vi(t) {
		(this.broadcastWidth = 0),
			(this.broadcastHeight = 0),
			(this.contentRect_ = zi(0, 0, 0, 0)),
			(this.target = t);
	}
	["observe", "unobserve", "disconnect"].forEach(function (e) {
		Ni.prototype[e] = function () {
			var t;
			return (t = Pi.get(this))[e].apply(t, arguments);
		};
	});
	var Fi = void 0 !== Ei.ResizeObserver ? Ei.ResizeObserver : Ni,
		Bi = null,
		Hi = null;
	function qi() {
		if (null === Bi) {
			if ("undefined" == typeof document) return (Bi = 0);
			var t = document.body,
				e = document.createElement("div"),
				r =
					(e.classList.add("simplebar-hide-scrollbar"),
					t.appendChild(e),
					e.getBoundingClientRect().right);
			t.removeChild(e), (Bi = r);
		}
		return Bi;
	}
	ie &&
		window.addEventListener("resize", function () {
			Hi !== window.devicePixelRatio &&
				((Hi = window.devicePixelRatio), (Bi = null));
		});
	function $i(l) {
		return function (t, e, r, i) {
			Xt(e);
			var n = Q(t),
				o = ut(n),
				s = w(n.length),
				a = l ? s - 1 : 0,
				c = l ? -1 : 1;
			if (r < 2)
				for (;;) {
					if (a in o) {
						(i = o[a]), (a += c);
						break;
					}
					if (((a += c), l ? a < 0 : s <= a))
						throw TypeError("Reduce of empty array with no initial value");
				}
			for (; l ? 0 <= a : a < s; a += c) a in o && (i = e(i, o[a], a, n));
			return i;
		};
	}
	var Xi = [$i(!1), $i(!0)][0],
		R =
			(y(
				{ target: "Array", proto: !0, forced: J("reduce") },
				{
					reduce: function (t) {
						return Xi(
							this,
							t,
							arguments.length,
							1 < arguments.length ? arguments[1] : void 0
						);
					},
				}
			),
			E.f),
		p = Function.prototype,
		Yi = p.toString,
		Gi = /^\s*function ([^ (]*)/;
	!f ||
		"name" in p ||
		R(p, "name", {
			configurable: !0,
			get: function () {
				try {
					return Yi.call(this).match(Gi)[1];
				} catch (t) {
					return "";
				}
			},
		});
	function Ui(r, t, e, i) {
		var o,
			n,
			s = l(r),
			a = !g(function () {
				var t = {};
				return (
					(t[s] = function () {
						return 7;
					}),
					7 != ""[r](t)
				);
			}),
			c =
				a &&
				!g(function () {
					var t = !1,
						e = /a/;
					return (
						(e.exec = function () {
							return (t = !0), null;
						}),
						"split" === r &&
							((e.constructor = {}),
							(e.constructor[on] = function () {
								return e;
							})),
						e[s](""),
						!t
					);
				});
		(a && c && ("replace" !== r || sn) && ("split" !== r || an)) ||
			((o = /./[s]),
			(e = (c = e(s, ""[r], function (t, e, r, i, n) {
				return e.exec === nn
					? a && !n
						? { done: !0, value: o.call(e, r, i) }
						: { done: !0, value: t.call(r, e, i) }
					: { done: !1 };
			}))[0]),
			(n = c[1]),
			S(String.prototype, r, e),
			S(
				RegExp.prototype,
				s,
				2 == t
					? function (t, e) {
							return n.call(t, this, e);
					  }
					: function (t) {
							return n.call(t, this);
					  }
			),
			i && _(RegExp.prototype[s], "sham", !0));
	}
	function Qi(t, e, r) {
		return e + (r ? cn(t, e).length : 1);
	}
	function Ki(t, e) {
		var r = t.exec;
		if ("function" == typeof r) {
			r = r.call(t, e);
			if ("object" != typeof r)
				throw TypeError(
					"RegExp exec method returned something other than an Object or null"
				);
			return r;
		}
		if ("RegExp" !== i(t))
			throw TypeError("RegExp#exec called on incompatible receiver");
		return nn.call(t, e);
	}
	function Ji(t) {
		return Array.prototype.reduce.call(
			t,
			function (t, e) {
				var r = e.name.match(/data-simplebar-(.+)/);
				if (r) {
					var i = r[1].replace(/\W+(.)/g, function (t, e) {
						return e.toUpperCase();
					});
					switch (e.value) {
						case "true":
							t[i] = !0;
							break;
						case "false":
							t[i] = !1;
							break;
						case void 0:
							t[i] = !0;
							break;
						default:
							t[i] = e.value;
					}
				}
				return t;
			},
			{}
		);
	}
	var Zi = RegExp.prototype.exec,
		tn = String.prototype.replace,
		o = Zi,
		en =
			((h = /b*/g),
			Zi.call((c = /a/), "a"),
			Zi.call(h, "a"),
			0 !== c.lastIndex || 0 !== h.lastIndex),
		rn = void 0 !== /()??/.exec("")[1],
		nn = (o =
			en || rn
				? function (t) {
						var e,
							r,
							i,
							n,
							o = this;
						return (
							rn &&
								(r = new RegExp(
									"^" + o.source + "$(?!\\s)",
									function () {
										var t = O(this),
											e = "";
										return (
											t.global && (e += "g"),
											t.ignoreCase && (e += "i"),
											t.multiline && (e += "m"),
											t.dotAll && (e += "s"),
											t.unicode && (e += "u"),
											t.sticky && (e += "y"),
											e
										);
									}.call(o)
								)),
							en && (e = o.lastIndex),
							(i = Zi.call(o, t)),
							en && i && (o.lastIndex = o.global ? i.index + i[0].length : e),
							rn &&
								i &&
								1 < i.length &&
								tn.call(i[0], r, function () {
									for (n = 1; n < arguments.length - 2; n++)
										void 0 === arguments[n] && (i[n] = void 0);
								}),
							i
						);
				  }
				: o),
		on =
			(y(
				{ target: "RegExp", proto: !0, forced: /./.exec !== nn },
				{ exec: nn }
			),
			l("species")),
		sn = !g(function () {
			var t = /./;
			return (
				(t.exec = function () {
					var t = [];
					return (t.groups = { a: "7" }), t;
				}),
				"7" !== "".replace(t, "$<a>")
			);
		}),
		an = !g(function () {
			var t = /(?:)/,
				e = t.exec,
				t =
					((t.exec = function () {
						return e.apply(this, arguments);
					}),
					"ab".split(t));
			return 2 !== t.length || "a" !== t[0] || "b" !== t[1];
		}),
		cn = Le.charAt,
		ln =
			(Ui("match", 1, function (i, c, l) {
				return [
					function (t) {
						var e = s(this),
							r = null == t ? void 0 : t[i];
						return void 0 !== r ? r.call(t, e) : new RegExp(t)[i](String(e));
					},
					function (t) {
						var e = l(c, t, this);
						if (e.done) return e.value;
						var r = O(t),
							i = String(this);
						if (!r.global) return Ki(r, i);
						for (
							var n = r.unicode, o = [], s = (r.lastIndex = 0);
							null !== (a = Ki(r, i));

						) {
							var a = String(a[0]);
							"" === (o[s] = a) && (r.lastIndex = Qi(i, w(r.lastIndex), n)),
								s++;
						}
						return 0 === s ? null : o;
					},
				];
			}),
			Math.max),
		un = Math.min,
		hn = Math.floor,
		fn = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		dn = /\$([$&'`]|\d\d?)/g;
	Ui("replace", 2, function (n, x, E) {
		return [
			function (t, e) {
				var r = s(this),
					i = null == t ? void 0 : t[n];
				return void 0 !== i ? i.call(t, r, e) : x.call(String(r), t, e);
			},
			function (t, e) {
				var r = E(x, t, this, e);
				if (r.done) return r.value;
				var i,
					n = O(t),
					o = String(this),
					s = "function" == typeof e,
					a = (s || (e = String(e)), n.global);
				a && ((i = n.unicode), (n.lastIndex = 0));
				for (var c = []; ; ) {
					var l = Ki(n, o);
					if (null === l) break;
					if ((c.push(l), !a)) break;
					"" === String(l[0]) && (n.lastIndex = Qi(o, w(n.lastIndex), i));
				}
				for (var u, h = "", f = 0, d = 0; d < c.length; d++) {
					for (
						var l = c[d],
							p = String(l[0]),
							v = ln(un(Mt(l.index), o.length), 0),
							g = [],
							y = 1;
						y < l.length;
						y++
					)
						g.push(void 0 === (u = l[y]) ? u : String(u));
					var b = l.groups,
						m = s
							? ((m = [p].concat(g, v, o)),
							  void 0 !== b && m.push(b),
							  String(e.apply(void 0, m)))
							: (function (o, s, a, c, l, t) {
									var u = a + o.length,
										h = c.length,
										e = dn;
									return (
										void 0 !== l && ((l = Q(l)), (e = fn)),
										x.call(t, e, function (t, e) {
											var r;
											switch (e.charAt(0)) {
												case "$":
													return "$";
												case "&":
													return o;
												case "`":
													return s.slice(0, a);
												case "'":
													return s.slice(u);
												case "<":
													r = l[e.slice(1, -1)];
													break;
												default:
													var i,
														n = +e;
													if (0 == n) return t;
													if (h < n)
														return 0 !== (i = hn(n / 10)) && i <= h
															? void 0 === c[i - 1]
																? e.charAt(1)
																: c[i - 1] + e.charAt(1)
															: t;
													r = c[n - 1];
											}
											return void 0 === r ? "" : r;
										})
									);
							  })(p, o, v, g, b, e);
					f <= v && ((h += o.slice(f, v) + m), (f = v + p.length));
				}
				return h + o.slice(f);
			},
		];
	});
	function W(t) {
		return t && t.ownerDocument && t.ownerDocument.defaultView
			? t.ownerDocument.defaultView
			: window;
	}
	function pn(t) {
		return t && t.ownerDocument ? t.ownerDocument : document;
	}
	(C.getRtlHelpers = function () {
		var t = document.createElement("div"),
			t =
				((t.innerHTML =
					'<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>'),
				t.firstElementChild),
			e = (document.body.appendChild(t), t.firstElementChild),
			r = ((t.scrollLeft = 0), C.getOffset(t)),
			i = C.getOffset(e),
			t = ((t.scrollLeft = 999), C.getOffset(e));
		return {
			isRtlScrollingInverted: r.left !== i.left && i.left - t.left != 0,
			isRtlScrollbarInverted: r.left !== i.left,
		};
	}),
		(C.getOffset = function (t) {
			var e = t.getBoundingClientRect(),
				r = pn(t),
				t = W(t);
			return {
				top: e.top + (t.pageYOffset || r.documentElement.scrollTop),
				left: e.left + (t.pageXOffset || r.documentElement.scrollLeft),
			};
		}),
		((R = C.prototype).init = function () {
			C.instances.set(this.el, this),
				ie &&
					(this.initDOM(),
					(this.scrollbarWidth = this.getScrollbarWidth()),
					this.recalculate(),
					this.initListeners());
		}),
		(R.initDOM = function () {
			var t,
				e,
				r = this;
			if (
				Array.prototype.filter.call(this.el.children, function (t) {
					return t.classList.contains(r.classNames.wrapper);
				}).length
			)
				(this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper)),
					(this.contentWrapperEl =
						this.options.scrollableNode ||
						this.el.querySelector("." + this.classNames.contentWrapper)),
					(this.contentEl =
						this.options.contentNode ||
						this.el.querySelector("." + this.classNames.contentEl)),
					(this.offsetEl = this.el.querySelector("." + this.classNames.offset)),
					(this.maskEl = this.el.querySelector("." + this.classNames.mask)),
					(this.placeholderEl = this.findChild(
						this.wrapperEl,
						"." + this.classNames.placeholder
					)),
					(this.heightAutoObserverWrapperEl = this.el.querySelector(
						"." + this.classNames.heightAutoObserverWrapperEl
					)),
					(this.heightAutoObserverEl = this.el.querySelector(
						"." + this.classNames.heightAutoObserverEl
					)),
					(this.axis.x.track.el = this.findChild(
						this.el,
						"." + this.classNames.track + "." + this.classNames.horizontal
					)),
					(this.axis.y.track.el = this.findChild(
						this.el,
						"." + this.classNames.track + "." + this.classNames.vertical
					));
			else {
				for (
					this.wrapperEl = document.createElement("div"),
						this.contentWrapperEl = document.createElement("div"),
						this.offsetEl = document.createElement("div"),
						this.maskEl = document.createElement("div"),
						this.contentEl = document.createElement("div"),
						this.placeholderEl = document.createElement("div"),
						this.heightAutoObserverWrapperEl = document.createElement("div"),
						this.heightAutoObserverEl = document.createElement("div"),
						this.wrapperEl.classList.add(this.classNames.wrapper),
						this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
						this.offsetEl.classList.add(this.classNames.offset),
						this.maskEl.classList.add(this.classNames.mask),
						this.contentEl.classList.add(this.classNames.contentEl),
						this.placeholderEl.classList.add(this.classNames.placeholder),
						this.heightAutoObserverWrapperEl.classList.add(
							this.classNames.heightAutoObserverWrapperEl
						),
						this.heightAutoObserverEl.classList.add(
							this.classNames.heightAutoObserverEl
						);
					this.el.firstChild;

				)
					this.contentEl.appendChild(this.el.firstChild);
				this.contentWrapperEl.appendChild(this.contentEl),
					this.offsetEl.appendChild(this.contentWrapperEl),
					this.maskEl.appendChild(this.offsetEl),
					this.heightAutoObserverWrapperEl.appendChild(
						this.heightAutoObserverEl
					),
					this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
					this.wrapperEl.appendChild(this.maskEl),
					this.wrapperEl.appendChild(this.placeholderEl),
					this.el.appendChild(this.wrapperEl);
			}
			(this.axis.x.track.el && this.axis.y.track.el) ||
				((t = document.createElement("div")),
				(e = document.createElement("div")),
				t.classList.add(this.classNames.track),
				e.classList.add(this.classNames.scrollbar),
				t.appendChild(e),
				(this.axis.x.track.el = t.cloneNode(!0)),
				this.axis.x.track.el.classList.add(this.classNames.horizontal),
				(this.axis.y.track.el = t.cloneNode(!0)),
				this.axis.y.track.el.classList.add(this.classNames.vertical),
				this.el.appendChild(this.axis.x.track.el),
				this.el.appendChild(this.axis.y.track.el)),
				(this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
					"." + this.classNames.scrollbar
				)),
				(this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
					"." + this.classNames.scrollbar
				)),
				this.options.autoHide ||
					(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
					this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
				this.el.setAttribute("data-simplebar", "init");
		}),
		(R.initListeners = function () {
			var e = this,
				t = W(this.el),
				r =
					(this.options.autoHide &&
						this.el.addEventListener("mouseenter", this.onMouseEnter),
					["mousedown", "click", "dblclick"].forEach(function (t) {
						e.el.addEventListener(t, e.onPointerEvent, !0);
					}),
					["touchstart", "touchend", "touchmove"].forEach(function (t) {
						e.el.addEventListener(t, e.onPointerEvent, {
							capture: !0,
							passive: !0,
						});
					}),
					this.el.addEventListener("mousemove", this.onMouseMove),
					this.el.addEventListener("mouseleave", this.onMouseLeave),
					this.contentWrapperEl.addEventListener("scroll", this.onScroll),
					t.addEventListener("resize", this.onWindowResize),
					!1),
				i = t.ResizeObserver || Fi;
			(this.resizeObserver = new i(function () {
				r && e.recalculate();
			})),
				this.resizeObserver.observe(this.el),
				this.resizeObserver.observe(this.contentEl),
				t.requestAnimationFrame(function () {
					r = !0;
				}),
				(this.mutationObserver = new t.MutationObserver(this.recalculate)),
				this.mutationObserver.observe(this.contentEl, {
					childList: !0,
					subtree: !0,
					characterData: !0,
				});
		}),
		(R.recalculate = function () {
			var t = W(this.el),
				t =
					((this.elStyles = t.getComputedStyle(this.el)),
					(this.isRtl = "rtl" === this.elStyles.direction),
					this.contentEl.offsetWidth),
				e = this.heightAutoObserverEl.offsetHeight <= 1,
				r = this.heightAutoObserverEl.offsetWidth <= 1 || 0 < t,
				i = this.contentWrapperEl.offsetWidth,
				n = this.elStyles.overflowX,
				o = this.elStyles.overflowY,
				s =
					((this.contentEl.style.padding =
						this.elStyles.paddingTop +
						" " +
						this.elStyles.paddingRight +
						" " +
						this.elStyles.paddingBottom +
						" " +
						this.elStyles.paddingLeft),
					(this.wrapperEl.style.margin =
						"-" +
						this.elStyles.paddingTop +
						" -" +
						this.elStyles.paddingRight +
						" -" +
						this.elStyles.paddingBottom +
						" -" +
						this.elStyles.paddingLeft),
					this.contentEl.scrollHeight),
				a = this.contentEl.scrollWidth,
				e =
					((this.contentWrapperEl.style.height = e ? "auto" : "100%"),
					(this.placeholderEl.style.width = r ? (t || a) + "px" : "auto"),
					(this.placeholderEl.style.height = s + "px"),
					this.contentWrapperEl.offsetHeight),
				r =
					((this.axis.x.isOverflowing = 0 !== t && t < a),
					(this.axis.y.isOverflowing = e < s),
					(this.axis.x.isOverflowing =
						"hidden" !== n && this.axis.x.isOverflowing),
					(this.axis.y.isOverflowing =
						"hidden" !== o && this.axis.y.isOverflowing),
					(this.axis.x.forceVisible =
						"x" === this.options.forceVisible ||
						!0 === this.options.forceVisible),
					(this.axis.y.forceVisible =
						"y" === this.options.forceVisible ||
						!0 === this.options.forceVisible),
					this.hideNativeScrollbar(),
					this.axis.x.isOverflowing ? this.scrollbarWidth : 0),
				t = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
			(this.axis.x.isOverflowing = this.axis.x.isOverflowing && i - t < a),
				(this.axis.y.isOverflowing = this.axis.y.isOverflowing && e - r < s),
				(this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
				(this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
				(this.axis.x.scrollbar.el.style.width =
					this.axis.x.scrollbar.size + "px"),
				(this.axis.y.scrollbar.el.style.height =
					this.axis.y.scrollbar.size + "px"),
				this.positionScrollbar("x"),
				this.positionScrollbar("y"),
				this.toggleTrackVisibility("x"),
				this.toggleTrackVisibility("y");
		}),
		(R.getScrollbarSize = function (t) {
			if (!this.axis[(t = void 0 === t ? "y" : t)].isOverflowing) return 0;
			var e = this.contentEl[this.axis[t].scrollSizeAttr],
				t = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
				e = Math.max(~~((t / e) * t), this.options.scrollbarMinSize);
			return (e = this.options.scrollbarMaxSize
				? Math.min(e, this.options.scrollbarMaxSize)
				: e);
		}),
		(R.positionScrollbar = function (t) {
			var e, r, i, n, o;
			this.axis[(t = void 0 === t ? "y" : t)].isOverflowing &&
				((o = this.contentWrapperEl[this.axis[t].scrollSizeAttr]),
				(e = this.axis[t].track.el[this.axis[t].offsetSizeAttr]),
				(r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10)),
				(i = this.axis[t].scrollbar),
				(n = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]),
				(n =
					(n =
						"x" === t && this.isRtl && C.getRtlHelpers().isRtlScrollingInverted
							? -n
							: n) /
					(o - r)),
				(o = ~~((e - i.size) * n)),
				(o =
					"x" === t && this.isRtl && C.getRtlHelpers().isRtlScrollbarInverted
						? o + (e - i.size)
						: o),
				(i.el.style.transform =
					"x" === t
						? "translate3d(" + o + "px, 0, 0)"
						: "translate3d(0, " + o + "px, 0)"));
		}),
		(R.toggleTrackVisibility = function (t) {
			var e = this.axis[(t = void 0 === t ? "y" : t)].track.el,
				r = this.axis[t].scrollbar.el;
			this.axis[t].isOverflowing || this.axis[t].forceVisible
				? ((e.style.visibility = "visible"),
				  (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll"))
				: ((e.style.visibility = "hidden"),
				  (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden")),
				this.axis[t].isOverflowing
					? (r.style.display = "block")
					: (r.style.display = "none");
		}),
		(R.hideNativeScrollbar = function () {
			(this.offsetEl.style[this.isRtl ? "left" : "right"] =
				this.axis.y.isOverflowing || this.axis.y.forceVisible
					? "-" + this.scrollbarWidth + "px"
					: 0),
				(this.offsetEl.style.bottom =
					this.axis.x.isOverflowing || this.axis.x.forceVisible
						? "-" + this.scrollbarWidth + "px"
						: 0);
		}),
		(R.onMouseMoveForAxis = function (t) {
			(this.axis[(t = void 0 === t ? "y" : t)].track.rect =
				this.axis[t].track.el.getBoundingClientRect()),
				(this.axis[t].scrollbar.rect =
					this.axis[t].scrollbar.el.getBoundingClientRect()),
				this.isWithinBounds(this.axis[t].scrollbar.rect)
					? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
					: this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
				this.isWithinBounds(this.axis[t].track.rect)
					? (this.showScrollbar(t),
					  this.axis[t].track.el.classList.add(this.classNames.hover))
					: this.axis[t].track.el.classList.remove(this.classNames.hover);
		}),
		(R.onMouseLeaveForAxis = function (t) {
			this.axis[(t = void 0 === t ? "y" : t)].track.el.classList.remove(
				this.classNames.hover
			),
				this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
		}),
		(R.showScrollbar = function (t) {
			var e = this.axis[(t = void 0 === t ? "y" : t)].scrollbar.el;
			this.axis[t].isVisible ||
				(e.classList.add(this.classNames.visible),
				(this.axis[t].isVisible = !0)),
				this.options.autoHide && this.hideScrollbars();
		}),
		(R.onDragStart = function (t, e) {
			void 0 === e && (e = "y");
			var r = pn(this.el),
				i = W(this.el),
				n = this.axis[e].scrollbar,
				t = "y" === e ? t.pageY : t.pageX;
			(this.axis[e].dragOffset = t - n.rect[this.axis[e].offsetAttr]),
				(this.draggedAxis = e),
				this.el.classList.add(this.classNames.dragging),
				r.addEventListener("mousemove", this.drag, !0),
				r.addEventListener("mouseup", this.onEndDrag, !0),
				null === this.removePreventClickId
					? (r.addEventListener("click", this.preventClick, !0),
					  r.addEventListener("dblclick", this.preventClick, !0))
					: (i.clearTimeout(this.removePreventClickId),
					  (this.removePreventClickId = null));
		}),
		(R.onTrackClick = function (t, r) {
			var i,
				e,
				n,
				o,
				s,
				a,
				c = this;
			void 0 === r && (r = "y"),
				this.options.clickOnTrack &&
					((i = W(this.el)),
					(this.axis[r].scrollbar.rect =
						this.axis[r].scrollbar.el.getBoundingClientRect()),
					(e = this.axis[r].scrollbar.rect[this.axis[r].offsetAttr]),
					(n = parseInt(this.elStyles[this.axis[r].sizeAttr], 10)),
					(o = this.contentWrapperEl[this.axis[r].scrollOffsetAttr]),
					(s = ("y" === r ? this.mouseY - e : this.mouseX - e) < 0 ? -1 : 1),
					(a = -1 == s ? o - n : o + n),
					(function t() {
						var e;
						-1 == s
							? a < o &&
							  ((o -= 40),
							  c.contentWrapperEl.scrollTo(
									(((e = {})[c.axis[r].offsetAttr] = o), e)
							  ),
							  i.requestAnimationFrame(t))
							: o < a &&
							  ((o += 40),
							  c.contentWrapperEl.scrollTo(
									(((e = {})[c.axis[r].offsetAttr] = o), e)
							  ),
							  i.requestAnimationFrame(t));
					})());
		}),
		(R.getContentElement = function () {
			return this.contentEl;
		}),
		(R.getScrollElement = function () {
			return this.contentWrapperEl;
		}),
		(R.getScrollbarWidth = function () {
			try {
				return "none" ===
					getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
						.display ||
					"scrollbarWidth" in document.documentElement.style ||
					"-ms-overflow-style" in document.documentElement.style
					? 0
					: qi();
			} catch (t) {
				return qi();
			}
		}),
		(R.removeListeners = function () {
			var e = this,
				t = W(this.el);
			this.options.autoHide &&
				this.el.removeEventListener("mouseenter", this.onMouseEnter),
				["mousedown", "click", "dblclick"].forEach(function (t) {
					e.el.removeEventListener(t, e.onPointerEvent, !0);
				}),
				["touchstart", "touchend", "touchmove"].forEach(function (t) {
					e.el.removeEventListener(t, e.onPointerEvent, {
						capture: !0,
						passive: !0,
					});
				}),
				this.el.removeEventListener("mousemove", this.onMouseMove),
				this.el.removeEventListener("mouseleave", this.onMouseLeave),
				this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
				t.removeEventListener("resize", this.onWindowResize),
				this.mutationObserver.disconnect(),
				this.resizeObserver.disconnect(),
				this.recalculate.cancel(),
				this.onMouseMove.cancel(),
				this.hideScrollbars.cancel(),
				this.onWindowResize.cancel();
		}),
		(R.unMount = function () {
			this.removeListeners(), C.instances.delete(this.el);
		}),
		(R.isWithinBounds = function (t) {
			return (
				this.mouseX >= t.left &&
				this.mouseX <= t.left + t.width &&
				this.mouseY >= t.top &&
				this.mouseY <= t.top + t.height
			);
		}),
		(R.findChild = function (t, e) {
			var r =
				t.matches ||
				t.webkitMatchesSelector ||
				t.mozMatchesSelector ||
				t.msMatchesSelector;
			return Array.prototype.filter.call(t.children, function (t) {
				return r.call(t, e);
			})[0];
		});
	var z = C;
	function C(t, e) {
		var s = this;
		(this.onScroll = function () {
			var t = W(s.el);
			s.scrollXTicking ||
				(t.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
				s.scrollYTicking ||
					(t.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0));
		}),
			(this.scrollX = function () {
				s.axis.x.isOverflowing &&
					(s.showScrollbar("x"), s.positionScrollbar("x")),
					(s.scrollXTicking = !1);
			}),
			(this.scrollY = function () {
				s.axis.y.isOverflowing &&
					(s.showScrollbar("y"), s.positionScrollbar("y")),
					(s.scrollYTicking = !1);
			}),
			(this.onMouseEnter = function () {
				s.showScrollbar("x"), s.showScrollbar("y");
			}),
			(this.onMouseMove = function (t) {
				(s.mouseX = t.clientX),
					(s.mouseY = t.clientY),
					(s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
						s.onMouseMoveForAxis("x"),
					(s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
						s.onMouseMoveForAxis("y");
			}),
			(this.onMouseLeave = function () {
				s.onMouseMove.cancel(),
					(s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
						s.onMouseLeaveForAxis("x"),
					(s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
						s.onMouseLeaveForAxis("y"),
					(s.mouseX = -1),
					(s.mouseY = -1);
			}),
			(this.onWindowResize = function () {
				(s.scrollbarWidth = s.getScrollbarWidth()), s.hideNativeScrollbar();
			}),
			(this.hideScrollbars = function () {
				(s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
					(s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect()),
					s.isWithinBounds(s.axis.y.track.rect) ||
						(s.axis.y.scrollbar.el.classList.remove(s.classNames.visible),
						(s.axis.y.isVisible = !1)),
					s.isWithinBounds(s.axis.x.track.rect) ||
						(s.axis.x.scrollbar.el.classList.remove(s.classNames.visible),
						(s.axis.x.isVisible = !1));
			}),
			(this.onPointerEvent = function (t) {
				var e, r;
				(s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
					(s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect()),
					(s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
						(e = s.isWithinBounds(s.axis.x.track.rect)),
					(s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
						(r = s.isWithinBounds(s.axis.y.track.rect)),
					(e || r) &&
						(t.preventDefault(),
						t.stopPropagation(),
						"mousedown" === t.type &&
							(e &&
								((s.axis.x.scrollbar.rect =
									s.axis.x.scrollbar.el.getBoundingClientRect()),
								s.isWithinBounds(s.axis.x.scrollbar.rect)
									? s.onDragStart(t, "x")
									: s.onTrackClick(t, "x")),
							r &&
								((s.axis.y.scrollbar.rect =
									s.axis.y.scrollbar.el.getBoundingClientRect()),
								s.isWithinBounds(s.axis.y.scrollbar.rect)
									? s.onDragStart(t, "y")
									: s.onTrackClick(t, "y"))));
			}),
			(this.drag = function (t) {
				var e = s.axis[s.draggedAxis].track,
					r = e.rect[s.axis[s.draggedAxis].sizeAttr],
					i = s.axis[s.draggedAxis].scrollbar,
					n = s.contentWrapperEl[s.axis[s.draggedAxis].scrollSizeAttr],
					o = parseInt(s.elStyles[s.axis[s.draggedAxis].sizeAttr], 10),
					t =
						(t.preventDefault(),
						t.stopPropagation(),
						((("y" === s.draggedAxis ? t.pageY : t.pageX) -
							e.rect[s.axis[s.draggedAxis].offsetAttr] -
							s.axis[s.draggedAxis].dragOffset) /
							(r - i.size)) *
							(n - o));
				"x" === s.draggedAxis &&
					((t =
						s.isRtl && C.getRtlHelpers().isRtlScrollbarInverted
							? t - (r + i.size)
							: t),
					(t = s.isRtl && C.getRtlHelpers().isRtlScrollingInverted ? -t : t)),
					(s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = t);
			}),
			(this.onEndDrag = function (t) {
				var e = pn(s.el),
					r = W(s.el);
				t.preventDefault(),
					t.stopPropagation(),
					s.el.classList.remove(s.classNames.dragging),
					e.removeEventListener("mousemove", s.drag, !0),
					e.removeEventListener("mouseup", s.onEndDrag, !0),
					(s.removePreventClickId = r.setTimeout(function () {
						e.removeEventListener("click", s.preventClick, !0),
							e.removeEventListener("dblclick", s.preventClick, !0),
							(s.removePreventClickId = null);
					}));
			}),
			(this.preventClick = function (t) {
				t.preventDefault(), t.stopPropagation();
			}),
			(this.el = t),
			(this.minScrollbarWidth = 20),
			(this.options = Object.assign({}, C.defaultOptions, {}, e)),
			(this.classNames = Object.assign(
				{},
				C.defaultOptions.classNames,
				{},
				this.options.classNames
			)),
			(this.axis = {
				x: {
					scrollOffsetAttr: "scrollLeft",
					sizeAttr: "width",
					scrollSizeAttr: "scrollWidth",
					offsetSizeAttr: "offsetWidth",
					offsetAttr: "left",
					overflowAttr: "overflowX",
					dragOffset: 0,
					isOverflowing: !0,
					isVisible: !1,
					forceVisible: !1,
					track: {},
					scrollbar: {},
				},
				y: {
					scrollOffsetAttr: "scrollTop",
					sizeAttr: "height",
					scrollSizeAttr: "scrollHeight",
					offsetSizeAttr: "offsetHeight",
					offsetAttr: "top",
					overflowAttr: "overflowY",
					dragOffset: 0,
					isOverflowing: !0,
					isVisible: !1,
					forceVisible: !1,
					track: {},
					scrollbar: {},
				},
			}),
			(this.removePreventClickId = null),
			C.instances.has(this.el) ||
				((this.recalculate = Ir(this.recalculate.bind(this), 64)),
				(this.onMouseMove = Ir(this.onMouseMove.bind(this), 64)),
				(this.hideScrollbars = Zr(
					this.hideScrollbars.bind(this),
					this.options.timeout
				)),
				(this.onWindowResize = Zr(this.onWindowResize.bind(this), 64, {
					leading: !0,
				})),
				(C.getRtlHelpers = bi(C.getRtlHelpers)),
				this.init());
	}
	return (
		(z.defaultOptions = {
			autoHide: !0,
			forceVisible: !1,
			clickOnTrack: !0,
			classNames: {
				contentEl: "simplebar-content",
				contentWrapper: "simplebar-content-wrapper",
				offset: "simplebar-offset",
				mask: "simplebar-mask",
				wrapper: "simplebar-wrapper",
				placeholder: "simplebar-placeholder",
				scrollbar: "simplebar-scrollbar",
				track: "simplebar-track",
				heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
				heightAutoObserverEl: "simplebar-height-auto-observer",
				visible: "simplebar-visible",
				horizontal: "simplebar-horizontal",
				vertical: "simplebar-vertical",
				hover: "simplebar-hover",
				dragging: "simplebar-dragging",
			},
			scrollbarMinSize: 25,
			scrollbarMaxSize: 0,
			timeout: 1e3,
		}),
		(z.instances = new WeakMap()),
		(z.initDOMLoadedElements = function () {
			document.removeEventListener(
				"DOMContentLoaded",
				this.initDOMLoadedElements
			),
				window.removeEventListener("load", this.initDOMLoadedElements),
				Array.prototype.forEach.call(
					document.querySelectorAll("[data-simplebar]"),
					function (t) {
						"init" === t.getAttribute("data-simplebar") ||
							z.instances.has(t) ||
							new z(t, Ji(t.attributes));
					}
				);
		}),
		(z.removeObserver = function () {
			this.globalObserver.disconnect();
		}),
		(z.initHtmlApi = function () {
			(this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
				"undefined" != typeof MutationObserver &&
					((this.globalObserver = new MutationObserver(z.handleMutations)),
					this.globalObserver.observe(document, {
						childList: !0,
						subtree: !0,
					})),
				"complete" === document.readyState ||
				("loading" !== document.readyState &&
					!document.documentElement.doScroll)
					? window.setTimeout(this.initDOMLoadedElements)
					: (document.addEventListener(
							"DOMContentLoaded",
							this.initDOMLoadedElements
					  ),
					  window.addEventListener("load", this.initDOMLoadedElements));
		}),
		(z.handleMutations = function (t) {
			t.forEach(function (t) {
				Array.prototype.forEach.call(t.addedNodes, function (t) {
					1 === t.nodeType &&
						(t.hasAttribute("data-simplebar")
							? z.instances.has(t) || new z(t, Ji(t.attributes))
							: Array.prototype.forEach.call(
									t.querySelectorAll("[data-simplebar]"),
									function (t) {
										"init" === t.getAttribute("data-simplebar") ||
											z.instances.has(t) ||
											new z(t, Ji(t.attributes));
									}
							  ));
				}),
					Array.prototype.forEach.call(t.removedNodes, function (t) {
						1 === t.nodeType &&
							(t.hasAttribute('[data-simplebar="init"]')
								? z.instances.has(t) && z.instances.get(t).unMount()
								: Array.prototype.forEach.call(
										t.querySelectorAll('[data-simplebar="init"]'),
										function (t) {
											z.instances.has(t) && z.instances.get(t).unMount();
										}
								  ));
					});
			});
		}),
		(z.getOptions = Ji),
		ie && z.initHtmlApi(),
		z
	);
});
!(function (e, t) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define(t)
		: ((e = e || self).Swiper = t());
})(this, function () {
	"use strict";
	function D(e) {
		return (
			null !== e &&
			"object" == typeof e &&
			"constructor" in e &&
			e.constructor === Object
		);
	}
	function s(t, i) {
		void 0 === t && (t = {}),
			void 0 === i && (i = {}),
			Object.keys(i).forEach(function (e) {
				void 0 === t[e]
					? (t[e] = i[e])
					: D(i[e]) && D(t[e]) && 0 < Object.keys(i[e]).length && s(t[e], i[e]);
			});
	}
	function l(e) {
		for (var t = 0; t < e.length; t += 1) this[t] = e[t];
		return (this.length = e.length), this;
	}
	var f = "undefined" != typeof document ? document : {},
		e = {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: { blur: function () {}, nodeName: "" },
			querySelector: function () {
				return null;
			},
			querySelectorAll: function () {
				return [];
			},
			getElementById: function () {
				return null;
			},
			createEvent: function () {
				return { initEvent: function () {} };
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return [];
					},
				};
			},
			createElementNS: function () {
				return {};
			},
			importNode: function () {
				return null;
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: "",
			},
		},
		K = (s(f, e), "undefined" != typeof window ? window : {});
	s(K, {
		document: e,
		navigator: { userAgent: "" },
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: "",
		},
		history: {
			replaceState: function () {},
			pushState: function () {},
			go: function () {},
			back: function () {},
		},
		CustomEvent: function () {
			return this;
		},
		addEventListener: function () {},
		removeEventListener: function () {},
		getComputedStyle: function () {
			return {
				getPropertyValue: function () {
					return "";
				},
			};
		},
		Image: function () {},
		Date: function () {},
		screen: {},
		setTimeout: function () {},
		clearTimeout: function () {},
		matchMedia: function () {
			return {};
		},
	});
	function E(e, t) {
		var i = [],
			s = 0;
		if (e && !t && e instanceof l) return e;
		if (e)
			if ("string" == typeof e) {
				var a,
					n,
					r = e.trim();
				if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
					var o = "div";
					for (
						0 === r.indexOf("<li") && (o = "ul"),
							0 === r.indexOf("<tr") && (o = "tbody"),
							(0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (o = "tr"),
							0 === r.indexOf("<tbody") && (o = "table"),
							0 === r.indexOf("<option") && (o = "select"),
							(n = f.createElement(o)).innerHTML = r,
							s = 0;
						s < n.childNodes.length;
						s += 1
					)
						i.push(n.childNodes[s]);
				} else
					for (
						a =
							t || "#" !== e[0] || e.match(/[ .<>:~]/)
								? (t || f).querySelectorAll(e.trim())
								: [f.getElementById(e.trim().split("#")[1])],
							s = 0;
						s < a.length;
						s += 1
					)
						a[s] && i.push(a[s]);
			} else if (e.nodeType || e === K || e === f) i.push(e);
			else if (0 < e.length && e[0].nodeType)
				for (s = 0; s < e.length; s += 1) i.push(e[s]);
		return new l(i);
	}
	function n(e) {
		for (var t = [], i = 0; i < e.length; i += 1)
			-1 === t.indexOf(e[i]) && t.push(e[i]);
		return t;
	}
	(E.fn = l.prototype), (E.Class = l), (E.Dom7 = l);
	function t(e) {
		var t = this;
		(t.params = e = void 0 === e ? {} : e),
			(t.eventsListeners = {}),
			t.params &&
				t.params.on &&
				Object.keys(t.params.on).forEach(function (e) {
					t.on(e, t.params.on[e]);
				});
	}
	var i,
		a,
		A,
		r,
		G = {
			addClass: function (e) {
				if (void 0 === e) return this;
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1)
						void 0 !== this[s] &&
							void 0 !== this[s].classList &&
							this[s].classList.add(t[i]);
				return this;
			},
			removeClass: function (e) {
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1)
						void 0 !== this[s] &&
							void 0 !== this[s].classList &&
							this[s].classList.remove(t[i]);
				return this;
			},
			hasClass: function (e) {
				return !!this[0] && this[0].classList.contains(e);
			},
			toggleClass: function (e) {
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1)
						void 0 !== this[s] &&
							void 0 !== this[s].classList &&
							this[s].classList.toggle(t[i]);
				return this;
			},
			attr: function (e, t) {
				var i = arguments;
				if (1 === arguments.length && "string" == typeof e)
					return this[0] ? this[0].getAttribute(e) : void 0;
				for (var s = 0; s < this.length; s += 1)
					if (2 === i.length) this[s].setAttribute(e, t);
					else
						for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
				return this;
			},
			removeAttr: function (e) {
				for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
				return this;
			},
			data: function (e, t) {
				var i;
				if (void 0 !== t) {
					for (var s = 0; s < this.length; s += 1)
						(i = this[s]).dom7ElementDataStorage ||
							(i.dom7ElementDataStorage = {}),
							(i.dom7ElementDataStorage[e] = t);
					return this;
				}
				if ((i = this[0]))
					return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage
						? i.dom7ElementDataStorage[e]
						: i.getAttribute("data-" + e) || void 0;
			},
			transform: function (e) {
				for (var t = 0; t < this.length; t += 1) {
					var i = this[t].style;
					(i.webkitTransform = e), (i.transform = e);
				}
				return this;
			},
			transition: function (e) {
				"string" != typeof e && (e += "ms");
				for (var t = 0; t < this.length; t += 1) {
					var i = this[t].style;
					(i.webkitTransitionDuration = e), (i.transitionDuration = e);
				}
				return this;
			},
			on: function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var i = e[0],
					n = e[1],
					r = e[2],
					s = e[3];
				function a(e) {
					var t = e.target;
					if (t) {
						var i = e.target.dom7EventData || [];
						if ((i.indexOf(e) < 0 && i.unshift(e), E(t).is(n))) r.apply(t, i);
						else
							for (var s = E(t).parents(), a = 0; a < s.length; a += 1)
								E(s[a]).is(n) && r.apply(s[a], i);
					}
				}
				function o(e) {
					var t = (e && e.target && e.target.dom7EventData) || [];
					t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
				}
				"function" == typeof e[1] &&
					((i = e[0]), (r = e[1]), (s = e[2]), (n = void 0));
				for (
					var l, s = s || !1, d = i.split(" "), h = 0;
					h < this.length;
					h += 1
				) {
					var p = this[h];
					if (n)
						for (l = 0; l < d.length; l += 1) {
							var c = d[l];
							p.dom7LiveListeners || (p.dom7LiveListeners = {}),
								p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []),
								p.dom7LiveListeners[c].push({ listener: r, proxyListener: a }),
								p.addEventListener(c, a, s);
						}
					else
						for (l = 0; l < d.length; l += 1) {
							var u = d[l];
							p.dom7Listeners || (p.dom7Listeners = {}),
								p.dom7Listeners[u] || (p.dom7Listeners[u] = []),
								p.dom7Listeners[u].push({ listener: r, proxyListener: o }),
								p.addEventListener(u, o, s);
						}
				}
				return this;
			},
			off: function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var i = e[0],
					s = e[1],
					a = e[2],
					n = e[3];
				"function" == typeof e[1] &&
					((i = e[0]), (a = e[1]), (n = e[2]), (s = void 0));
				for (var n = n || !1, r = i.split(" "), o = 0; o < r.length; o += 1)
					for (var l = r[o], d = 0; d < this.length; d += 1) {
						var h = this[d],
							p = void 0;
						if (
							(!s && h.dom7Listeners
								? (p = h.dom7Listeners[l])
								: s && h.dom7LiveListeners && (p = h.dom7LiveListeners[l]),
							p && p.length)
						)
							for (var c = p.length - 1; 0 <= c; --c) {
								var u = p[c];
								((a && u.listener === a) ||
									(a &&
										u.listener &&
										u.listener.dom7proxy &&
										u.listener.dom7proxy === a) ||
									!a) &&
									(h.removeEventListener(l, u.proxyListener, n),
									p.splice(c, 1));
							}
					}
				return this;
			},
			trigger: function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				for (var i = e[0].split(" "), s = e[1], a = 0; a < i.length; a += 1)
					for (var n = i[a], r = 0; r < this.length; r += 1) {
						var o = this[r],
							l = void 0;
						try {
							l = new K.CustomEvent(n, {
								detail: s,
								bubbles: !0,
								cancelable: !0,
							});
						} catch (e) {
							(l = f.createEvent("Event")).initEvent(n, !0, !0), (l.detail = s);
						}
						(o.dom7EventData = e.filter(function (e, t) {
							return 0 < t;
						})),
							o.dispatchEvent(l),
							(o.dom7EventData = []),
							delete o.dom7EventData;
					}
				return this;
			},
			transitionEnd: function (t) {
				var i,
					s = ["webkitTransitionEnd", "transitionend"],
					a = this;
				function n(e) {
					if (e.target === this)
						for (t.call(this, e), i = 0; i < s.length; i += 1) a.off(s[i], n);
				}
				if (t) for (i = 0; i < s.length; i += 1) a.on(s[i], n);
				return this;
			},
			outerWidth: function (e) {
				return 0 < this.length
					? e
						? ((e = this.styles()),
						  this[0].offsetWidth +
								parseFloat(e.getPropertyValue("margin-right")) +
								parseFloat(e.getPropertyValue("margin-left")))
						: this[0].offsetWidth
					: null;
			},
			outerHeight: function (e) {
				return 0 < this.length
					? e
						? ((e = this.styles()),
						  this[0].offsetHeight +
								parseFloat(e.getPropertyValue("margin-top")) +
								parseFloat(e.getPropertyValue("margin-bottom")))
						: this[0].offsetHeight
					: null;
			},
			offset: function () {
				var e, t, i, s, a;
				return 0 < this.length
					? ((e = (a = this[0]).getBoundingClientRect()),
					  (i = f.body),
					  (t = a.clientTop || i.clientTop || 0),
					  (i = a.clientLeft || i.clientLeft || 0),
					  (s = a === K ? K.scrollY : a.scrollTop),
					  (a = a === K ? K.scrollX : a.scrollLeft),
					  { top: e.top + s - t, left: e.left + a - i })
					: null;
			},
			css: function (e, t) {
				var i;
				if (1 === arguments.length) {
					if ("string" != typeof e) {
						for (i = 0; i < this.length; i += 1)
							for (var s in e) this[i].style[s] = e[s];
						return this;
					}
					if (this[0])
						return K.getComputedStyle(this[0], null).getPropertyValue(e);
				}
				if (2 !== arguments.length || "string" != typeof e) return this;
				for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
				return this;
			},
			each: function (e) {
				if (!e) return this;
				for (var t = 0; t < this.length; t += 1)
					if (!1 === e.call(this[t], t, this[t])) return this;
				return this;
			},
			html: function (e) {
				if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
				for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
				return this;
			},
			text: function (e) {
				if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
				for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
				return this;
			},
			is: function (e) {
				var t,
					i,
					s = this[0];
				if (!s || void 0 === e) return !1;
				if ("string" == typeof e) {
					if (s.matches) return s.matches(e);
					if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
					if (s.msMatchesSelector) return s.msMatchesSelector(e);
					for (t = E(e), i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
					return !1;
				}
				if (e === f) return s === f;
				if (e === K) return s === K;
				if (e.nodeType || e instanceof l) {
					for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
						if (t[i] === s) return !0;
					return !1;
				}
				return !1;
			},
			index: function () {
				var e,
					t = this[0];
				if (t) {
					for (e = 0; null !== (t = t.previousSibling); )
						1 === t.nodeType && (e += 1);
					return e;
				}
			},
			eq: function (e) {
				if (void 0 === e) return this;
				var t = this.length;
				return new l(
					t - 1 < e
						? []
						: e < 0
						? (t = t + e) < 0
							? []
							: [this[t]]
						: [this[e]]
				);
			},
			append: function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				for (var i = 0; i < e.length; i += 1)
					for (var s = e[i], a = 0; a < this.length; a += 1)
						if ("string" == typeof s) {
							var n = f.createElement("div");
							for (n.innerHTML = s; n.firstChild; )
								this[a].appendChild(n.firstChild);
						} else if (s instanceof l)
							for (var r = 0; r < s.length; r += 1) this[a].appendChild(s[r]);
						else this[a].appendChild(s);
				return this;
			},
			prepend: function (e) {
				for (var t, i = 0; i < this.length; i += 1)
					if ("string" == typeof e) {
						var s = f.createElement("div");
						for (s.innerHTML = e, t = s.childNodes.length - 1; 0 <= t; --t)
							this[i].insertBefore(s.childNodes[t], this[i].childNodes[0]);
					} else if (e instanceof l)
						for (t = 0; t < e.length; t += 1)
							this[i].insertBefore(e[t], this[i].childNodes[0]);
					else this[i].insertBefore(e, this[i].childNodes[0]);
				return this;
			},
			next: function (e) {
				return 0 < this.length
					? e
						? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e)
							? new l([this[0].nextElementSibling])
							: new l([])
						: this[0].nextElementSibling
						? new l([this[0].nextElementSibling])
						: new l([])
					: new l([]);
			},
			nextAll: function (e) {
				var t = [],
					i = this[0];
				if (!i) return new l([]);
				for (; i.nextElementSibling; ) {
					var s = i.nextElementSibling;
					(e && !E(s).is(e)) || t.push(s), (i = s);
				}
				return new l(t);
			},
			prev: function (e) {
				var t;
				return 0 < this.length
					? ((t = this[0]),
					  e
							? t.previousElementSibling && E(t.previousElementSibling).is(e)
								? new l([t.previousElementSibling])
								: new l([])
							: t.previousElementSibling
							? new l([t.previousElementSibling])
							: new l([]))
					: new l([]);
			},
			prevAll: function (e) {
				var t = [],
					i = this[0];
				if (!i) return new l([]);
				for (; i.previousElementSibling; ) {
					var s = i.previousElementSibling;
					(e && !E(s).is(e)) || t.push(s), (i = s);
				}
				return new l(t);
			},
			parent: function (e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					null === this[i].parentNode ||
						(e && !E(this[i].parentNode).is(e)) ||
						t.push(this[i].parentNode);
				return E(n(t));
			},
			parents: function (e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					for (var s = this[i].parentNode; s; )
						(e && !E(s).is(e)) || t.push(s), (s = s.parentNode);
				return E(n(t));
			},
			closest: function (e) {
				var t = this;
				return void 0 === e
					? new l([])
					: (t = t.is(e) ? t : t.parents(e).eq(0));
			},
			find: function (e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
						t.push(s[a]);
				return new l(t);
			},
			children: function (e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
						e
							? 1 === s[a].nodeType && E(s[a]).is(e) && t.push(s[a])
							: 1 === s[a].nodeType && t.push(s[a]);
				return new l(n(t));
			},
			filter: function (e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					e.call(this[i], i, this[i]) && t.push(this[i]);
				return new l(t);
			},
			remove: function () {
				for (var e = 0; e < this.length; e += 1)
					this[e].parentNode && this[e].parentNode.removeChild(this[e]);
				return this;
			},
			add: function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				for (var i = 0; i < e.length; i += 1)
					for (var s = E(e[i]), a = 0; a < s.length; a += 1)
						(this[this.length] = s[a]), (this.length += 1);
				return this;
			},
			styles: function () {
				return this[0] ? K.getComputedStyle(this[0], null) : {};
			},
		},
		U =
			(Object.keys(G).forEach(function (e) {
				E.fn[e] = E.fn[e] || G[e];
			}),
			{
				deleteProps: function (e) {
					var t = e;
					Object.keys(t).forEach(function (e) {
						try {
							t[e] = null;
						} catch (e) {}
						try {
							delete t[e];
						} catch (e) {}
					});
				},
				nextTick: function (e, t) {
					return void 0 === t && (t = 0), setTimeout(e, t);
				},
				now: function () {
					return Date.now();
				},
				getTranslate: function (e, t) {
					void 0 === t && (t = "x");
					var i,
						s,
						a,
						e = K.getComputedStyle(e, null);
					return (
						K.WebKitCSSMatrix
							? (6 < (s = e.transform || e.webkitTransform).split(",").length &&
									(s = s
										.split(", ")
										.map(function (e) {
											return e.replace(",", ".");
										})
										.join(", ")),
							  (a = new K.WebKitCSSMatrix("none" === s ? "" : s)))
							: (i = (a =
									e.MozTransform ||
									e.OTransform ||
									e.MsTransform ||
									e.msTransform ||
									e.transform ||
									e
										.getPropertyValue("transform")
										.replace("translate(", "matrix(1, 0, 0, 1,"))
									.toString()
									.split(",")),
						"x" === t &&
							(s = K.WebKitCSSMatrix
								? a.m41
								: 16 === i.length
								? parseFloat(i[12])
								: parseFloat(i[4])),
						(s =
							"y" === t
								? K.WebKitCSSMatrix
									? a.m42
									: 16 === i.length
									? parseFloat(i[13])
									: parseFloat(i[5])
								: s) || 0
					);
				},
				parseUrlQuery: function (e) {
					var t,
						i,
						s,
						a,
						n = {},
						e = e || K.location.href;
					if ("string" == typeof e && e.length)
						for (
							a = (i = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "")
								.split("&")
								.filter(function (e) {
									return "" !== e;
								})).length,
								t = 0;
							t < a;
							t += 1
						)
							(s = i[t].replace(/#\S+/g, "").split("=")),
								(n[decodeURIComponent(s[0])] =
									void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
					return n;
				},
				isObject: function (e) {
					return (
						"object" == typeof e &&
						null !== e &&
						e.constructor &&
						e.constructor === Object
					);
				},
				extend: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
						var a = e[s];
						if (null != a)
							for (
								var n = Object.keys(Object(a)), r = 0, o = n.length;
								r < o;
								r += 1
							) {
								var l = n[r],
									d = Object.getOwnPropertyDescriptor(a, l);
								void 0 !== d &&
									d.enumerable &&
									(U.isObject(i[l]) && U.isObject(a[l])
										? U.extend(i[l], a[l])
										: !U.isObject(i[l]) && U.isObject(a[l])
										? ((i[l] = {}), U.extend(i[l], a[l]))
										: (i[l] = a[l]));
							}
					}
					return i;
				},
			}),
		x = {
			touch: !!(
				"ontouchstart" in K ||
				(K.DocumentTouch && f instanceof K.DocumentTouch)
			),
			pointerEvents:
				!!K.PointerEvent &&
				"maxTouchPoints" in K.navigator &&
				0 <= K.navigator.maxTouchPoints,
			observer: "MutationObserver" in K || "WebkitMutationObserver" in K,
			passiveListener: (function () {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function () {
							e = !0;
						},
					});
					K.addEventListener("testPassiveListener", null, t);
				} catch (e) {}
				return e;
			})(),
			gestures: "ongesturestart" in K,
		},
		e = { components: { configurable: !0 } },
		e =
			((t.prototype.on = function (e, t, i) {
				var s = this;
				if ("function" != typeof t) return s;
				var a = i ? "unshift" : "push";
				return (
					e.split(" ").forEach(function (e) {
						s.eventsListeners[e] || (s.eventsListeners[e] = []),
							s.eventsListeners[e][a](t);
					}),
					s
				);
			}),
			(t.prototype.once = function (i, s, e) {
				var a = this;
				return "function" != typeof s ? a : ((n.f7proxy = s), a.on(i, n, e));
				function n() {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					a.off(i, n), n.f7proxy && delete n.f7proxy, s.apply(a, e);
				}
			}),
			(t.prototype.off = function (e, s) {
				var a = this;
				return (
					a.eventsListeners &&
						e.split(" ").forEach(function (i) {
							void 0 === s
								? (a.eventsListeners[i] = [])
								: a.eventsListeners[i] &&
								  a.eventsListeners[i].length &&
								  a.eventsListeners[i].forEach(function (e, t) {
										(e === s || (e.f7proxy && e.f7proxy === s)) &&
											a.eventsListeners[i].splice(t, 1);
								  });
						}),
					a
				);
			}),
			(t.prototype.emit = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var i,
					s,
					a = this;
				if (!a.eventsListeners) return a;
				var n =
					"string" == typeof e[0] || Array.isArray(e[0])
						? ((i = e[0]), (s = e.slice(1, e.length)), a)
						: ((i = e[0].events), (s = e[0].data), e[0].context || a);
				return (
					(Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
						var t;
						a.eventsListeners &&
							a.eventsListeners[e] &&
							((t = []),
							a.eventsListeners[e].forEach(function (e) {
								t.push(e);
							}),
							t.forEach(function (e) {
								e.apply(n, s);
							}));
					}),
					a
				);
			}),
			(t.prototype.useModulesParams = function (t) {
				var i = this;
				i.modules &&
					Object.keys(i.modules).forEach(function (e) {
						e = i.modules[e];
						e.params && U.extend(t, e.params);
					});
			}),
			(t.prototype.useModules = function (t) {
				void 0 === t && (t = {});
				var s = this;
				s.modules &&
					Object.keys(s.modules).forEach(function (e) {
						var i = s.modules[e],
							e = t[e] || {};
						i.instance &&
							Object.keys(i.instance).forEach(function (e) {
								var t = i.instance[e];
								s[e] = "function" == typeof t ? t.bind(s) : t;
							}),
							i.on &&
								s.on &&
								Object.keys(i.on).forEach(function (e) {
									s.on(e, i.on[e]);
								}),
							i.create && i.create.bind(s)(e);
					});
			}),
			(e.components.set = function (e) {
				this.use && this.use(e);
			}),
			(t.installModule = function (t) {
				for (var e = [], i = arguments.length - 1; 0 < i--; )
					e[i] = arguments[i + 1];
				var s = this,
					a =
						(s.prototype.modules || (s.prototype.modules = {}),
						t.name || Object.keys(s.prototype.modules).length + "_" + U.now());
				return (
					(s.prototype.modules[a] = t).proto &&
						Object.keys(t.proto).forEach(function (e) {
							s.prototype[e] = t.proto[e];
						}),
					t.static &&
						Object.keys(t.static).forEach(function (e) {
							s[e] = t.static[e];
						}),
					t.install && t.install.apply(s, e),
					s
				);
			}),
			(t.use = function (e) {
				for (var t = [], i = arguments.length - 1; 0 < i--; )
					t[i] = arguments[i + 1];
				var s = this;
				return Array.isArray(e)
					? (e.forEach(function (e) {
							return s.installModule(e);
					  }),
					  s)
					: s.installModule.apply(s, [e].concat(t));
			}),
			Object.defineProperties(t, e),
			{
				updateSize: function () {
					var e = this.$el,
						t =
							void 0 !== this.params.width
								? this.params.width
								: e[0].clientWidth,
						i =
							void 0 !== this.params.height
								? this.params.height
								: e[0].clientHeight;
					(0 === t && this.isHorizontal()) ||
						(0 === i && this.isVertical()) ||
						((t =
							t -
							parseInt(e.css("padding-left"), 10) -
							parseInt(e.css("padding-right"), 10)),
						(i =
							i -
							parseInt(e.css("padding-top"), 10) -
							parseInt(e.css("padding-bottom"), 10)),
						U.extend(this, {
							width: t,
							height: i,
							size: this.isHorizontal() ? t : i,
						}));
				},
				updateSlides: function () {
					var t = this.params,
						e = this.$wrapperEl,
						i = this.size,
						s = this.rtlTranslate,
						G = this.wrongRTL,
						a = this.virtual && t.virtual.enabled,
						H = (a ? this.virtual : this).slides.length,
						n = e.children("." + this.params.slideClass),
						r = (a ? this.virtual.slides : n).length,
						o = [],
						l = [],
						d = [];
					function h(e) {
						return !t.cssMode || e !== n.length - 1;
					}
					var p,
						c = t.slidesOffsetBefore,
						u =
							("function" == typeof c && (c = t.slidesOffsetBefore.call(this)),
							t.slidesOffsetAfter),
						a =
							("function" == typeof u && (u = t.slidesOffsetAfter.call(this)),
							this.snapGrid.length),
						B = this.snapGrid.length,
						m = t.spaceBetween,
						v = -c,
						f = 0,
						g = 0;
					if (void 0 !== i) {
						"string" == typeof m &&
							0 <= m.indexOf("%") &&
							(m = (parseFloat(m.replace("%", "")) / 100) * i),
							(this.virtualSize = -m),
							s
								? n.css({ marginLeft: "", marginTop: "" })
								: n.css({ marginRight: "", marginBottom: "" }),
							1 < t.slidesPerColumn &&
								((p =
									Math.floor(r / t.slidesPerColumn) ===
									r / this.params.slidesPerColumn
										? r
										: Math.ceil(r / t.slidesPerColumn) * t.slidesPerColumn),
								"auto" !== t.slidesPerView &&
									"row" === t.slidesPerColumnFill &&
									(p = Math.max(p, t.slidesPerView * t.slidesPerColumn)));
						for (
							var b,
								N,
								w,
								V,
								y = t.slidesPerColumn,
								X = p / y,
								Y = Math.floor(r / t.slidesPerColumn),
								x = 0;
							x < r;
							x += 1
						) {
							z = 0;
							var E,
								T,
								S,
								C,
								M,
								P,
								z,
								k,
								$,
								L,
								F,
								W,
								R,
								I = n.eq(x);
							1 < t.slidesPerColumn &&
								((P = M = C = void 0),
								"row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup
									? ((S = Math.floor(
											x / (t.slidesPerGroup * t.slidesPerColumn)
									  )),
									  (E = x - t.slidesPerColumn * t.slidesPerGroup * S),
									  (T =
											0 === S
												? t.slidesPerGroup
												: Math.min(
														Math.ceil((r - S * y * t.slidesPerGroup) / y),
														t.slidesPerGroup
												  )),
									  (C =
											(M =
												E -
												(P = Math.floor(E / T)) * T +
												S * t.slidesPerGroup) +
											(P * p) / y),
									  I.css({
											"-webkit-box-ordinal-group": C,
											"-moz-box-ordinal-group": C,
											"-ms-flex-order": C,
											"-webkit-order": C,
											order: C,
									  }))
									: "column" === t.slidesPerColumnFill
									? ((P = x - (M = Math.floor(x / y)) * y),
									  (Y < M || (M === Y && P === y - 1)) &&
											(P += 1) >= y &&
											((P = 0), (M += 1)))
									: (M = x - (P = Math.floor(x / X)) * X),
								I.css(
									"margin-" + (this.isHorizontal() ? "top" : "left"),
									0 !== P && t.spaceBetween && t.spaceBetween + "px"
								)),
								"none" !== I.css("display") &&
									("auto" === t.slidesPerView
										? ((E = K.getComputedStyle(I[0], null)),
										  (T = I[0].style.transform),
										  (S = I[0].style.webkitTransform),
										  T && (I[0].style.transform = "none"),
										  S && (I[0].style.webkitTransform = "none"),
										  (z = t.roundLengths
												? this.isHorizontal()
													? I.outerWidth(!0)
													: I.outerHeight(!0)
												: this.isHorizontal()
												? ((C = parseFloat(E.getPropertyValue("width"))),
												  (M = parseFloat(E.getPropertyValue("padding-left"))),
												  (P = parseFloat(E.getPropertyValue("padding-right"))),
												  ($ = parseFloat(E.getPropertyValue("margin-left"))),
												  (L = parseFloat(E.getPropertyValue("margin-right"))),
												  (k = E.getPropertyValue("box-sizing")) &&
												  "border-box" === k
														? C + $ + L
														: C + M + P + $ + L)
												: ((k = parseFloat(E.getPropertyValue("height"))),
												  ($ = parseFloat(E.getPropertyValue("padding-top"))),
												  (L = parseFloat(
														E.getPropertyValue("padding-bottom")
												  )),
												  (F = parseFloat(E.getPropertyValue("margin-top"))),
												  (W = parseFloat(E.getPropertyValue("margin-bottom"))),
												  (R = E.getPropertyValue("box-sizing")) &&
												  "border-box" === R
														? k + F + W
														: k + $ + L + F + W)),
										  T && (I[0].style.transform = T),
										  S && (I[0].style.webkitTransform = S),
										  t.roundLengths && (z = Math.floor(z)))
										: ((z = (i - (t.slidesPerView - 1) * m) / t.slidesPerView),
										  t.roundLengths && (z = Math.floor(z)),
										  n[x] &&
												(this.isHorizontal()
													? (n[x].style.width = z + "px")
													: (n[x].style.height = z + "px"))),
									n[x] && (n[x].swiperSlideSize = z),
									d.push(z),
									t.centeredSlides
										? ((v = v + z / 2 + f / 2 + m),
										  0 === f && 0 !== x && (v = v - i / 2 - m),
										  0 === x && (v = v - i / 2 - m),
										  Math.abs(v) < 0.001 && (v = 0),
										  t.roundLengths && (v = Math.floor(v)),
										  g % t.slidesPerGroup == 0 && o.push(v),
										  l.push(v))
										: (t.roundLengths && (v = Math.floor(v)),
										  (g - Math.min(this.params.slidesPerGroupSkip, g)) %
												this.params.slidesPerGroup ==
												0 && o.push(v),
										  l.push(v),
										  (v = v + z + m)),
									(this.virtualSize += z + m),
									(f = z),
									(g += 1));
						}
						if (
							((this.virtualSize = Math.max(this.virtualSize, i) + u),
							s &&
								G &&
								("slide" === t.effect || "coverflow" === t.effect) &&
								e.css({ width: this.virtualSize + t.spaceBetween + "px" }),
							t.setWrapperSize &&
								(this.isHorizontal()
									? e.css({ width: this.virtualSize + t.spaceBetween + "px" })
									: e.css({
											height: this.virtualSize + t.spaceBetween + "px",
									  })),
							1 < t.slidesPerColumn &&
								((this.virtualSize = (z + t.spaceBetween) * p),
								(this.virtualSize =
									Math.ceil(this.virtualSize / t.slidesPerColumn) -
									t.spaceBetween),
								this.isHorizontal()
									? e.css({ width: this.virtualSize + t.spaceBetween + "px" })
									: e.css({ height: this.virtualSize + t.spaceBetween + "px" }),
								t.centeredSlides))
						) {
							for (var O = [], D = 0; D < o.length; D += 1) {
								var q = o[D];
								t.roundLengths && (q = Math.floor(q)),
									o[D] < this.virtualSize + o[0] && O.push(q);
							}
							o = O;
						}
						if (!t.centeredSlides) {
							O = [];
							for (var A = 0; A < o.length; A += 1) {
								var j = o[A];
								t.roundLengths && (j = Math.floor(j)),
									o[A] <= this.virtualSize - i && O.push(j);
							}
							(o = O),
								1 <
									Math.floor(this.virtualSize - i) -
										Math.floor(o[o.length - 1]) && o.push(this.virtualSize - i);
						}
						0 === o.length && (o = [0]),
							0 !== t.spaceBetween &&
								(this.isHorizontal()
									? s
										? n.filter(h).css({ marginLeft: m + "px" })
										: n.filter(h).css({ marginRight: m + "px" })
									: n.filter(h).css({ marginBottom: m + "px" })),
							t.centeredSlides &&
								t.centeredSlidesBounds &&
								((b = 0),
								d.forEach(function (e) {
									b += e + (t.spaceBetween || 0);
								}),
								(N = (b -= t.spaceBetween) - i),
								(o = o.map(function (e) {
									return e < 0 ? -c : N < e ? N + u : e;
								}))),
							t.centerInsufficientSlides &&
								((w = 0),
								d.forEach(function (e) {
									w += e + (t.spaceBetween || 0);
								}),
								(w -= t.spaceBetween) < i &&
									((V = (i - w) / 2),
									o.forEach(function (e, t) {
										o[t] = e - V;
									}),
									l.forEach(function (e, t) {
										l[t] = e + V;
									}))),
							U.extend(this, {
								slides: n,
								snapGrid: o,
								slidesGrid: l,
								slidesSizesGrid: d,
							}),
							r !== H && this.emit("slidesLengthChange"),
							o.length !== a &&
								(this.params.watchOverflow && this.checkOverflow(),
								this.emit("snapGridLengthChange")),
							l.length !== B && this.emit("slidesGridLengthChange"),
							(t.watchSlidesProgress || t.watchSlidesVisibility) &&
								this.updateSlidesOffset();
					}
				},
				updateAutoHeight: function (e) {
					var t,
						i,
						s = [],
						a = 0;
					if (
						("number" == typeof e
							? this.setTransition(e)
							: !0 === e && this.setTransition(this.params.speed),
						"auto" !== this.params.slidesPerView &&
							1 < this.params.slidesPerView)
					)
						if (this.params.centeredSlides)
							this.visibleSlides.each(function (e, t) {
								s.push(t);
							});
						else
							for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
								var n = this.activeIndex + t;
								if (n > this.slides.length) break;
								s.push(this.slides.eq(n)[0]);
							}
					else s.push(this.slides.eq(this.activeIndex)[0]);
					for (t = 0; t < s.length; t += 1)
						void 0 !== s[t] && (a = a < (i = s[t].offsetHeight) ? i : a);
					a && this.$wrapperEl.css("height", a + "px");
				},
				updateSlidesOffset: function () {
					for (var e = this.slides, t = 0; t < e.length; t += 1)
						e[t].swiperSlideOffset = this.isHorizontal()
							? e[t].offsetLeft
							: e[t].offsetTop;
				},
				updateSlidesProgress: function (e) {
					void 0 === e && (e = (this && this.translate) || 0);
					var t = this.params,
						i = this.slides,
						s = this.rtlTranslate;
					if (0 !== i.length) {
						void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
						var a = s ? e : -e;
						i.removeClass(t.slideVisibleClass),
							(this.visibleSlidesIndexes = []),
							(this.visibleSlides = []);
						for (var n = 0; n < i.length; n += 1) {
							var r,
								o,
								l = i[n],
								d =
									(a +
										(t.centeredSlides ? this.minTranslate() : 0) -
										l.swiperSlideOffset) /
									(l.swiperSlideSize + t.spaceBetween);
							(t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) &&
								((o =
									(r = -(a - l.swiperSlideOffset)) + this.slidesSizesGrid[n]),
								((0 <= r && r < this.size - 1) ||
									(1 < o && o <= this.size) ||
									(r <= 0 && o >= this.size)) &&
									(this.visibleSlides.push(l),
									this.visibleSlidesIndexes.push(n),
									i.eq(n).addClass(t.slideVisibleClass))),
								(l.progress = s ? -d : d);
						}
						this.visibleSlides = E(this.visibleSlides);
					}
				},
				updateProgress: function (e) {
					void 0 === e &&
						((t = this.rtlTranslate ? -1 : 1),
						(e = (this && this.translate && this.translate * t) || 0));
					var t = this.params,
						i = this.maxTranslate() - this.minTranslate(),
						s = this.progress,
						a = this.isBeginning,
						n = a,
						r = (o = this.isEnd),
						o =
							0 == i
								? (a = !(s = 0))
								: ((a = (s = (e - this.minTranslate()) / i) <= 0), 1 <= s);
					U.extend(this, { progress: s, isBeginning: a, isEnd: o }),
						(t.watchSlidesProgress ||
							t.watchSlidesVisibility ||
							(t.centeredSlides && t.autoHeight)) &&
							this.updateSlidesProgress(e),
						a && !n && this.emit("reachBeginning toEdge"),
						o && !r && this.emit("reachEnd toEdge"),
						((n && !a) || (r && !o)) && this.emit("fromEdge"),
						this.emit("progress", s);
				},
				updateSlidesClasses: function () {
					var e = this.slides,
						t = this.params,
						i = this.$wrapperEl,
						s = this.activeIndex,
						a = this.realIndex,
						n = this.virtual && t.virtual.enabled,
						s =
							(e.removeClass(
								t.slideActiveClass +
									" " +
									t.slideNextClass +
									" " +
									t.slidePrevClass +
									" " +
									t.slideDuplicateActiveClass +
									" " +
									t.slideDuplicateNextClass +
									" " +
									t.slideDuplicatePrevClass
							),
							(n = n
								? this.$wrapperEl.find(
										"." + t.slideClass + '[data-swiper-slide-index="' + s + '"]'
								  )
								: e.eq(s)).addClass(t.slideActiveClass),
							t.loop &&
								(n.hasClass(t.slideDuplicateClass)
									? i.children(
											"." +
												t.slideClass +
												":not(." +
												t.slideDuplicateClass +
												')[data-swiper-slide-index="' +
												a +
												'"]'
									  )
									: i.children(
											"." +
												t.slideClass +
												"." +
												t.slideDuplicateClass +
												'[data-swiper-slide-index="' +
												a +
												'"]'
									  )
								).addClass(t.slideDuplicateActiveClass),
							n
								.nextAll("." + t.slideClass)
								.eq(0)
								.addClass(t.slideNextClass)),
						a =
							(t.loop &&
								0 === s.length &&
								(s = e.eq(0)).addClass(t.slideNextClass),
							n
								.prevAll("." + t.slideClass)
								.eq(0)
								.addClass(t.slidePrevClass));
					t.loop && 0 === a.length && (a = e.eq(-1)).addClass(t.slidePrevClass),
						t.loop &&
							((s.hasClass(t.slideDuplicateClass)
								? i.children(
										"." +
											t.slideClass +
											":not(." +
											t.slideDuplicateClass +
											')[data-swiper-slide-index="' +
											s.attr("data-swiper-slide-index") +
											'"]'
								  )
								: i.children(
										"." +
											t.slideClass +
											"." +
											t.slideDuplicateClass +
											'[data-swiper-slide-index="' +
											s.attr("data-swiper-slide-index") +
											'"]'
								  )
							).addClass(t.slideDuplicateNextClass),
							(a.hasClass(t.slideDuplicateClass)
								? i.children(
										"." +
											t.slideClass +
											":not(." +
											t.slideDuplicateClass +
											')[data-swiper-slide-index="' +
											a.attr("data-swiper-slide-index") +
											'"]'
								  )
								: i.children(
										"." +
											t.slideClass +
											"." +
											t.slideDuplicateClass +
											'[data-swiper-slide-index="' +
											a.attr("data-swiper-slide-index") +
											'"]'
								  )
							).addClass(t.slideDuplicatePrevClass));
				},
				updateActiveIndex: function (e) {
					var t = this.rtlTranslate ? this.translate : -this.translate,
						i = this.slidesGrid,
						s = this.snapGrid,
						a = this.params,
						n = this.activeIndex,
						r = this.realIndex,
						o = this.snapIndex,
						l = e;
					if (void 0 === l) {
						for (var d = 0; d < i.length; d += 1)
							void 0 !== i[d + 1]
								? t >= i[d] && t < i[d + 1] - (i[d + 1] - i[d]) / 2
									? (l = d)
									: t >= i[d] && t < i[d + 1] && (l = d + 1)
								: t >= i[d] && (l = d);
						a.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0);
					}
					(e =
						0 <= s.indexOf(t)
							? s.indexOf(t)
							: (e = Math.min(a.slidesPerGroupSkip, l)) +
							  Math.floor((l - e) / a.slidesPerGroup)) >= s.length &&
						(e = s.length - 1),
						l !== n
							? ((a = parseInt(
									this.slides.eq(l).attr("data-swiper-slide-index") || l,
									10
							  )),
							  U.extend(this, {
									snapIndex: e,
									realIndex: a,
									previousIndex: n,
									activeIndex: l,
							  }),
							  this.emit("activeIndexChange"),
							  this.emit("snapIndexChange"),
							  r !== a && this.emit("realIndexChange"),
							  (this.initialized || this.params.runCallbacksOnInit) &&
									this.emit("slideChange"))
							: e !== o && ((this.snapIndex = e), this.emit("snapIndexChange"));
				},
				updateClickedSlide: function (e) {
					var t = this.params,
						i = E(e.target).closest("." + t.slideClass)[0],
						s = !1;
					if (i)
						for (var a = 0; a < this.slides.length; a += 1)
							this.slides[a] === i && (s = !0);
					if (!i || !s)
						return (
							(this.clickedSlide = void 0), void (this.clickedIndex = void 0)
						);
					(this.clickedSlide = i),
						this.virtual && this.params.virtual.enabled
							? (this.clickedIndex = parseInt(
									E(i).attr("data-swiper-slide-index"),
									10
							  ))
							: (this.clickedIndex = E(i).index()),
						t.slideToClickedSlide &&
							void 0 !== this.clickedIndex &&
							this.clickedIndex !== this.activeIndex &&
							this.slideToClickedSlide();
				},
			}),
		H = {
			getTranslate: function (e) {
				void 0 === e && (e = this.isHorizontal() ? "x" : "y");
				var t = this.params,
					i = this.rtlTranslate,
					s = this.translate,
					a = this.$wrapperEl;
				if (t.virtualTranslate) return i ? -s : s;
				if (t.cssMode) return s;
				t = U.getTranslate(a[0], e);
				return (t = i ? -t : t) || 0;
			},
			setTranslate: function (e, t) {
				var i = this.rtlTranslate,
					s = this.params,
					a = this.$wrapperEl,
					n = this.wrapperEl,
					r = this.progress,
					o = 0,
					l = 0,
					i =
						(this.isHorizontal() ? (o = i ? -e : e) : (l = e),
						s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
						s.cssMode
							? (n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
									this.isHorizontal() ? -o : -l)
							: s.virtualTranslate ||
							  a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
						(this.previousTranslate = this.translate),
						(this.translate = this.isHorizontal() ? o : l),
						this.maxTranslate() - this.minTranslate());
				(0 == i ? 0 : (e - this.minTranslate()) / i) !== r &&
					this.updateProgress(e),
					this.emit("setTranslate", this.translate, t);
			},
			minTranslate: function () {
				return -this.snapGrid[0];
			},
			maxTranslate: function () {
				return -this.snapGrid[this.snapGrid.length - 1];
			},
			translateTo: function (e, t, i, s, a) {
				void 0 === e && (e = 0),
					void 0 === t && (t = this.params.speed),
					void 0 === i && (i = !0),
					void 0 === s && (s = !0);
				var n = this,
					r = n.params,
					o = n.wrapperEl;
				if (n.animating && r.preventInteractionOnTransition) return !1;
				var l = n.minTranslate(),
					d = n.maxTranslate();
				return (
					n.updateProgress((l = s && l < e ? l : s && e < d ? d : e)),
					r.cssMode
						? ((s = n.isHorizontal()),
						  0 !== t && o.scrollTo
								? o.scrollTo(
										(((d = {})[s ? "left" : "top"] = -l),
										(d.behavior = "smooth"),
										d)
								  )
								: (o[s ? "scrollLeft" : "scrollTop"] = -l))
						: 0 === t
						? (n.setTransition(0),
						  n.setTranslate(l),
						  i &&
								(n.emit("beforeTransitionStart", t, a),
								n.emit("transitionEnd")))
						: (n.setTransition(t),
						  n.setTranslate(l),
						  i &&
								(n.emit("beforeTransitionStart", t, a),
								n.emit("transitionStart")),
						  n.animating ||
								((n.animating = !0),
								n.onTranslateToWrapperTransitionEnd ||
									(n.onTranslateToWrapperTransitionEnd = function (e) {
										n &&
											!n.destroyed &&
											e.target === this &&
											(n.$wrapperEl[0].removeEventListener(
												"transitionend",
												n.onTranslateToWrapperTransitionEnd
											),
											n.$wrapperEl[0].removeEventListener(
												"webkitTransitionEnd",
												n.onTranslateToWrapperTransitionEnd
											),
											(n.onTranslateToWrapperTransitionEnd = null),
											delete n.onTranslateToWrapperTransitionEnd,
											i && n.emit("transitionEnd"));
									}),
								n.$wrapperEl[0].addEventListener(
									"transitionend",
									n.onTranslateToWrapperTransitionEnd
								),
								n.$wrapperEl[0].addEventListener(
									"webkitTransitionEnd",
									n.onTranslateToWrapperTransitionEnd
								))),
					!0
				);
			},
		},
		B = {
			slideTo: function (e, t, i, s) {
				void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
				var a = this,
					n = (e = void 0 === e ? 0 : e),
					e = (n < 0 && (n = 0), a.params),
					r = a.snapGrid,
					o = a.slidesGrid,
					l = a.previousIndex,
					d = a.activeIndex,
					h = a.rtlTranslate,
					p = a.wrapperEl;
				if (a.animating && e.preventInteractionOnTransition) return !1;
				var c = Math.min(a.params.slidesPerGroupSkip, n),
					c = c + Math.floor((n - c) / a.params.slidesPerGroup);
				c >= r.length && (c = r.length - 1),
					(d || e.initialSlide || 0) === (l || 0) &&
						i &&
						a.emit("beforeSlideChangeStart");
				var u,
					m = -r[c];
				if ((a.updateProgress(m), e.normalizeSlideIndex))
					for (var v = 0; v < o.length; v += 1)
						-Math.floor(100 * m) >= Math.floor(100 * o[v]) && (n = v);
				if (a.initialized && n !== d) {
					if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
						return !1;
					if (
						!a.allowSlidePrev &&
						m > a.translate &&
						m > a.maxTranslate() &&
						(d || 0) !== n
					)
						return !1;
				}
				return (
					(u = d < n ? "next" : n < d ? "prev" : "reset"),
					(h && -m === a.translate) || (!h && m === a.translate)
						? (a.updateActiveIndex(n),
						  e.autoHeight && a.updateAutoHeight(),
						  a.updateSlidesClasses(),
						  "slide" !== e.effect && a.setTranslate(m),
						  "reset" != u && (a.transitionStart(i, u), a.transitionEnd(i, u)),
						  !1)
						: (e.cssMode
								? ((l = a.isHorizontal()),
								  (r = -m),
								  h && (r = p.scrollWidth - p.offsetWidth - r),
								  0 !== t && p.scrollTo
										? p.scrollTo(
												(((c = {})[l ? "left" : "top"] = r),
												(c.behavior = "smooth"),
												c)
										  )
										: (p[l ? "scrollLeft" : "scrollTop"] = r))
								: 0 === t
								? (a.setTransition(0),
								  a.setTranslate(m),
								  a.updateActiveIndex(n),
								  a.updateSlidesClasses(),
								  a.emit("beforeTransitionStart", t, s),
								  a.transitionStart(i, u),
								  a.transitionEnd(i, u))
								: (a.setTransition(t),
								  a.setTranslate(m),
								  a.updateActiveIndex(n),
								  a.updateSlidesClasses(),
								  a.emit("beforeTransitionStart", t, s),
								  a.transitionStart(i, u),
								  a.animating ||
										((a.animating = !0),
										a.onSlideToWrapperTransitionEnd ||
											(a.onSlideToWrapperTransitionEnd = function (e) {
												a &&
													!a.destroyed &&
													e.target === this &&
													(a.$wrapperEl[0].removeEventListener(
														"transitionend",
														a.onSlideToWrapperTransitionEnd
													),
													a.$wrapperEl[0].removeEventListener(
														"webkitTransitionEnd",
														a.onSlideToWrapperTransitionEnd
													),
													(a.onSlideToWrapperTransitionEnd = null),
													delete a.onSlideToWrapperTransitionEnd,
													a.transitionEnd(i, u));
											}),
										a.$wrapperEl[0].addEventListener(
											"transitionend",
											a.onSlideToWrapperTransitionEnd
										),
										a.$wrapperEl[0].addEventListener(
											"webkitTransitionEnd",
											a.onSlideToWrapperTransitionEnd
										))),
						  !0)
				);
			},
			slideToLoop: function (e, t, i, s) {
				void 0 === t && (t = this.params.speed);
				e = void 0 === e ? 0 : e;
				return (
					this.params.loop && (e += this.loopedSlides),
					this.slideTo(e, t, (i = void 0 === i ? !0 : i), s)
				);
			},
			slideNext: function (e, t, i) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var s = this.params,
					a = this.animating,
					n = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
				if (s.loop) {
					if (a) return !1;
					this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
				}
				return this.slideTo(this.activeIndex + n, e, t, i);
			},
			slidePrev: function (e, t, i) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var s = this.params,
					a = this.animating,
					n = this.snapGrid,
					r = this.slidesGrid,
					o = this.rtlTranslate;
				if (s.loop) {
					if (a) return !1;
					this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
				}
				function l(e) {
					return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
				}
				var d,
					h = l(o ? this.translate : -this.translate),
					a = n.map(l),
					p = (r.map(l), n[a.indexOf(h)], n[a.indexOf(h) - 1]);
				return (
					void 0 === p &&
						s.cssMode &&
						n.forEach(function (e) {
							!p && e <= h && (p = e);
						}),
					void 0 !== p && (d = r.indexOf(p)) < 0 && (d = this.activeIndex - 1),
					this.slideTo(d, e, t, i)
				);
			},
			slideReset: function (e, t, i) {
				return (
					void 0 === e && (e = this.params.speed),
					this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), i)
				);
			},
			slideToClosest: function (e, t, i, s) {
				void 0 === e && (e = this.params.speed),
					void 0 === t && (t = !0),
					void 0 === s && (s = 0.5);
				var a,
					n = this.activeIndex,
					r = Math.min(this.params.slidesPerGroupSkip, n),
					r = r + Math.floor((n - r) / this.params.slidesPerGroup),
					o = this.rtlTranslate ? this.translate : -this.translate;
				return (
					o >= this.snapGrid[r]
						? o - (a = this.snapGrid[r]) > (this.snapGrid[r + 1] - a) * s &&
						  (n += this.params.slidesPerGroup)
						: o - (a = this.snapGrid[r - 1]) <= (this.snapGrid[r] - a) * s &&
						  (n -= this.params.slidesPerGroup),
					(n = Math.max(n, 0)),
					(n = Math.min(n, this.slidesGrid.length - 1)),
					this.slideTo(n, e, t, i)
				);
			},
			slideToClickedSlide: function () {
				var e,
					t = this,
					i = t.params,
					s = t.$wrapperEl,
					a =
						"auto" === i.slidesPerView
							? t.slidesPerViewDynamic()
							: i.slidesPerView,
					n = t.clickedIndex;
				i.loop
					? t.animating ||
					  ((e = parseInt(
							E(t.clickedSlide).attr("data-swiper-slide-index"),
							10
					  )),
					  i.centeredSlides
							? n < t.loopedSlides - a / 2 ||
							  n > t.slides.length - t.loopedSlides + a / 2
								? (t.loopFix(),
								  (n = s
										.children(
											"." +
												i.slideClass +
												'[data-swiper-slide-index="' +
												e +
												'"]:not(.' +
												i.slideDuplicateClass +
												")"
										)
										.eq(0)
										.index()),
								  U.nextTick(function () {
										t.slideTo(n);
								  }))
								: t.slideTo(n)
							: n > t.slides.length - a
							? (t.loopFix(),
							  (n = s
									.children(
										"." +
											i.slideClass +
											'[data-swiper-slide-index="' +
											e +
											'"]:not(.' +
											i.slideDuplicateClass +
											")"
									)
									.eq(0)
									.index()),
							  U.nextTick(function () {
									t.slideTo(n);
							  }))
							: t.slideTo(n))
					: t.slideTo(n);
			},
		},
		N = {
			loopCreate: function () {
				var s = this,
					e = s.params,
					t = s.$wrapperEl,
					a =
						(t
							.children("." + e.slideClass + "." + e.slideDuplicateClass)
							.remove(),
						t.children("." + e.slideClass));
				if (e.loopFillGroupWithBlank) {
					var i = e.slidesPerGroup - (a.length % e.slidesPerGroup);
					if (i !== e.slidesPerGroup) {
						for (var n = 0; n < i; n += 1) {
							var r = E(f.createElement("div")).addClass(
								e.slideClass + " " + e.slideBlankClass
							);
							t.append(r);
						}
						a = t.children("." + e.slideClass);
					}
				}
				"auto" !== e.slidesPerView ||
					e.loopedSlides ||
					(e.loopedSlides = a.length),
					(s.loopedSlides = Math.ceil(
						parseFloat(e.loopedSlides || e.slidesPerView, 10)
					)),
					(s.loopedSlides += e.loopAdditionalSlides),
					s.loopedSlides > a.length && (s.loopedSlides = a.length);
				var o = [],
					l = [];
				a.each(function (e, t) {
					var i = E(t);
					e < s.loopedSlides && l.push(t),
						e < a.length && e >= a.length - s.loopedSlides && o.push(t),
						i.attr("data-swiper-slide-index", e);
				});
				for (var d = 0; d < l.length; d += 1)
					t.append(E(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
				for (var h = o.length - 1; 0 <= h; --h)
					t.prepend(E(o[h].cloneNode(!0)).addClass(e.slideDuplicateClass));
			},
			loopFix: function () {
				this.emit("beforeLoopFix");
				var e,
					t = this.activeIndex,
					i = this.slides,
					s = this.loopedSlides,
					a = this.allowSlidePrev,
					n = this.allowSlideNext,
					r = this.snapGrid,
					o = this.rtlTranslate,
					r =
						((this.allowSlidePrev = !0),
						(this.allowSlideNext = !0),
						-r[t] - this.getTranslate());
				t < s
					? ((e = i.length - 3 * s + t),
					  this.slideTo((e += s), 0, !1, !0) &&
							0 != r &&
							this.setTranslate((o ? -this.translate : this.translate) - r))
					: t >= i.length - s &&
					  ((e = -i.length + t + s),
					  this.slideTo((e += s), 0, !1, !0) &&
							0 != r &&
							this.setTranslate((o ? -this.translate : this.translate) - r)),
					(this.allowSlidePrev = a),
					(this.allowSlideNext = n),
					this.emit("loopFix");
			},
			loopDestroy: function () {
				var e = this.$wrapperEl,
					t = this.params,
					i = this.slides;
				e
					.children(
						"." +
							t.slideClass +
							"." +
							t.slideDuplicateClass +
							",." +
							t.slideClass +
							"." +
							t.slideBlankClass
					)
					.remove(),
					i.removeAttr("data-swiper-slide-index");
			},
		},
		V = {
			setGrabCursor: function (e) {
				var t;
				x.touch ||
					!this.params.simulateTouch ||
					(this.params.watchOverflow && this.isLocked) ||
					this.params.cssMode ||
					(((t = this.el).style.cursor = "move"),
					(t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
					(t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
					(t.style.cursor = e ? "grabbing" : "grab"));
			},
			unsetGrabCursor: function () {
				x.touch ||
					(this.params.watchOverflow && this.isLocked) ||
					this.params.cssMode ||
					(this.el.style.cursor = "");
			},
		},
		X = {
			appendSlide: function (e) {
				var t = this.$wrapperEl,
					i = this.params;
				if (
					(i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
				)
					for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
				else t.append(e);
				i.loop && this.loopCreate(),
					(i.observer && x.observer) || this.update();
			},
			prependSlide: function (e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex,
					a = (t.loop && this.loopDestroy(), s + 1);
				if ("object" == typeof e && "length" in e) {
					for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
					a = s + e.length;
				} else i.prepend(e);
				t.loop && this.loopCreate(),
					(t.observer && x.observer) || this.update(),
					this.slideTo(a, 0, !1);
			},
			addSlide: function (e, t) {
				var i = this.$wrapperEl,
					s = this.params,
					a = this.activeIndex,
					n =
						(s.loop &&
							((a -= this.loopedSlides),
							this.loopDestroy(),
							(this.slides = i.children("." + s.slideClass))),
						this.slides.length);
				if (e <= 0) this.prependSlide(t);
				else if (n <= e) this.appendSlide(t);
				else {
					for (var r = e < a ? a + 1 : a, o = [], l = n - 1; e <= l; --l) {
						var d = this.slides.eq(l);
						d.remove(), o.unshift(d);
					}
					if ("object" == typeof t && "length" in t) {
						for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
						r = e < a ? a + t.length : a;
					} else i.append(t);
					for (var p = 0; p < o.length; p += 1) i.append(o[p]);
					s.loop && this.loopCreate(),
						(s.observer && x.observer) || this.update(),
						s.loop
							? this.slideTo(r + this.loopedSlides, 0, !1)
							: this.slideTo(r, 0, !1);
				}
			},
			removeSlide: function (e) {
				var t = this.params,
					i = this.$wrapperEl,
					s = this.activeIndex;
				t.loop &&
					((s -= this.loopedSlides),
					this.loopDestroy(),
					(this.slides = i.children("." + t.slideClass)));
				var a,
					n = s;
				if ("object" == typeof e && "length" in e) {
					for (var r = 0; r < e.length; r += 1)
						(a = e[r]),
							this.slides[a] && this.slides.eq(a).remove(),
							a < n && --n;
					n = Math.max(n, 0);
				} else
					this.slides[(a = e)] && this.slides.eq(a).remove(),
						a < n && --n,
						(n = Math.max(n, 0));
				t.loop && this.loopCreate(),
					(t.observer && x.observer) || this.update(),
					t.loop
						? this.slideTo(n + this.loopedSlides, 0, !1)
						: this.slideTo(n, 0, !1);
			},
			removeAllSlides: function () {
				for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
				this.removeSlide(e);
			},
		},
		o =
			((r = K.navigator.platform),
			(O = K.navigator.userAgent),
			(i = {
				ios: !1,
				android: !1,
				androidChrome: !1,
				desktop: !1,
				iphone: !1,
				ipod: !1,
				ipad: !1,
				edge: !1,
				ie: !1,
				firefox: !1,
				macos: !1,
				windows: !1,
				cordova: !(!K.cordova && !K.phonegap),
				phonegap: !(!K.cordova && !K.phonegap),
				electron: !1,
			}),
			(p = K.screen.width),
			(u = K.screen.height),
			(m = O.match(/(Android);?[\s\/]+([\d.]+)?/)),
			(w = O.match(/(iPad).*OS\s([\d_]+)/)),
			(y = O.match(/(iPod)(.*OS\s([\d_]+))?/)),
			(g = !w && O.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
			(_ = 0 <= O.indexOf("MSIE ") || 0 <= O.indexOf("Trident/")),
			(d = 0 <= O.indexOf("Edge/")),
			(Z = 0 <= O.indexOf("Gecko/") && 0 <= O.indexOf("Firefox/")),
			(a = "Win32" === r),
			(A = 0 <= O.toLowerCase().indexOf("electron")),
			(r = "MacIntel" === r),
			!w &&
				r &&
				x.touch &&
				((1024 === p && 1366 === u) ||
					(834 === p && 1194 === u) ||
					(834 === p && 1112 === u) ||
					(768 === p && 1024 === u)) &&
				((w = O.match(/(Version)\/([\d.]+)/)), (r = !1)),
			(i.ie = _),
			(i.edge = d),
			(i.firefox = Z),
			m &&
				!a &&
				((i.os = "android"),
				(i.osVersion = m[2]),
				(i.android = !0),
				(i.androidChrome = 0 <= O.toLowerCase().indexOf("chrome"))),
			(w || g || y) && ((i.os = "ios"), (i.ios = !0)),
			g && !y && ((i.osVersion = g[2].replace(/_/g, ".")), (i.iphone = !0)),
			w && ((i.osVersion = w[2].replace(/_/g, ".")), (i.ipad = !0)),
			y &&
				((i.osVersion = y[3] ? y[3].replace(/_/g, ".") : null), (i.ipod = !0)),
			i.ios &&
				i.osVersion &&
				0 <= O.indexOf("Version/") &&
				"10" === i.osVersion.split(".")[0] &&
				(i.osVersion = O.toLowerCase().split("version/")[1].split(" ")[0]),
			(i.webView =
				!(
					!(g || w || y) ||
					(!O.match(/.*AppleWebKit(?!.*Safari)/i) && !K.navigator.standalone)
				) ||
				(K.matchMedia && K.matchMedia("(display-mode: standalone)").matches)),
			(i.webview = i.webView),
			(i.standalone = i.webView),
			(i.desktop = !(i.ios || i.android) || A),
			i.desktop &&
				((i.electron = A),
				(i.macos = r),
				(i.windows = a),
				i.macos && (i.os = "macos"),
				i.windows && (i.os = "windows")),
			(i.pixelRatio = K.devicePixelRatio || 1),
			i);
	function Y() {
		var e,
			t,
			i = this.params,
			s = this.el;
		(s && 0 === s.offsetWidth) ||
			(i.breakpoints && this.setBreakpoint(),
			(s = this.allowSlideNext),
			(e = this.allowSlidePrev),
			(t = this.snapGrid),
			(this.allowSlideNext = !0),
			(this.allowSlidePrev = !0),
			this.updateSize(),
			this.updateSlides(),
			this.updateSlidesClasses(),
			("auto" === i.slidesPerView || 1 < i.slidesPerView) &&
			this.isEnd &&
			!this.isBeginning &&
			!this.params.centeredSlides
				? this.slideTo(this.slides.length - 1, 0, !1, !0)
				: this.slideTo(this.activeIndex, 0, !1, !0),
			this.autoplay &&
				this.autoplay.running &&
				this.autoplay.paused &&
				this.autoplay.run(),
			(this.allowSlidePrev = e),
			(this.allowSlideNext = s),
			this.params.watchOverflow && t !== this.snapGrid && this.checkOverflow());
	}
	var F = !1;
	function W() {}
	var d,
		h,
		p,
		R = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: !1,
			updateOnWindowResize: !0,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: 0.02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: !1,
			centeredSlidesBounds: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
			roundLengths: !1,
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: !0,
			shortSwipes: !0,
			longSwipes: !0,
			longSwipesRatio: 0.5,
			longSwipesMs: 300,
			followFinger: !0,
			allowTouchMove: !0,
			threshold: 0,
			touchMoveStopPropagation: !1,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: 0.85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
			grabCursor: !1,
			preventClicks: !0,
			preventClicksPropagation: !0,
			slideToClickedSlide: !1,
			preloadImages: !0,
			updateOnImagesReady: !0,
			loop: !1,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: !1,
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",
			runCallbacksOnInit: !0,
		},
		q = {
			update: e,
			translate: H,
			transition: {
				setTransition: function (e, t) {
					this.params.cssMode || this.$wrapperEl.transition(e),
						this.emit("setTransition", e, t);
				},
				transitionStart: function (e, t) {
					void 0 === e && (e = !0);
					var i = this.activeIndex,
						s = this.params,
						a = this.previousIndex;
					s.cssMode ||
						(s.autoHeight && this.updateAutoHeight(),
						(s = (s = t) || (a < i ? "next" : i < a ? "prev" : "reset")),
						this.emit("transitionStart"),
						e &&
							i !== a &&
							("reset" === s
								? this.emit("slideResetTransitionStart")
								: (this.emit("slideChangeTransitionStart"),
								  "next" === s
										? this.emit("slideNextTransitionStart")
										: this.emit("slidePrevTransitionStart"))));
				},
				transitionEnd: function (e, t) {
					void 0 === e && (e = !0);
					var i = this.activeIndex,
						s = this.previousIndex,
						a = this.params;
					(this.animating = !1),
						a.cssMode ||
							(this.setTransition(0),
							(a = (a = t) || (s < i ? "next" : i < s ? "prev" : "reset")),
							this.emit("transitionEnd"),
							e &&
								i !== s &&
								("reset" === a
									? this.emit("slideResetTransitionEnd")
									: (this.emit("slideChangeTransitionEnd"),
									  "next" === a
											? this.emit("slideNextTransitionEnd")
											: this.emit("slidePrevTransitionEnd"))));
				},
			},
			slide: B,
			loop: N,
			grabCursor: V,
			manipulation: X,
			events: {
				attachEvents: function () {
					var e,
						t = this.params,
						i = this.touchEvents,
						s = this.el,
						a = this.wrapperEl,
						n =
							((this.onTouchStart = function (e) {
								var t,
									i,
									s,
									a,
									n,
									r = this.touchEventsData,
									o = this.params,
									l = this.touches;
								(this.animating && o.preventInteractionOnTransition) ||
									((t = E(
										(e = (e = e).originalEvent ? e.originalEvent : e).target
									)),
									("wrapper" === o.touchEventsTarget &&
										!t.closest(this.wrapperEl).length) ||
										((r.isTouchEvent = "touchstart" === e.type),
										(!r.isTouchEvent && "which" in e && 3 === e.which) ||
											(!r.isTouchEvent && "button" in e && 0 < e.button) ||
											(r.isTouched && r.isMoved)) ||
										(o.noSwiping &&
										t.closest(o.noSwipingSelector || "." + o.noSwipingClass)[0]
											? (this.allowClick = !0)
											: (o.swipeHandler && !t.closest(o.swipeHandler)[0]) ||
											  ((l.currentX = (
													"touchstart" === e.type ? e.targetTouches[0] : e
											  ).pageX),
											  (l.currentY = (
													"touchstart" === e.type ? e.targetTouches[0] : e
											  ).pageY),
											  (i = l.currentX),
											  (s = l.currentY),
											  (a = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection),
											  (n = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold),
											  (a && (i <= n || i >= K.screen.width - n)) ||
													(U.extend(r, {
														isTouched: !0,
														isMoved: !1,
														allowTouchCallbacks: !0,
														isScrolling: void 0,
														startMoving: void 0,
													}),
													(l.startX = i),
													(l.startY = s),
													(r.touchStartTime = U.now()),
													(this.allowClick = !0),
													this.updateSize(),
													(this.swipeDirection = void 0),
													0 < o.threshold && (r.allowThresholdMove = !1),
													"touchstart" !== e.type &&
														((a = !0),
														t.is(r.formElements) && (a = !1),
														f.activeElement &&
															E(f.activeElement).is(r.formElements) &&
															f.activeElement !== t[0] &&
															f.activeElement.blur(),
														(n =
															a &&
															this.allowTouchMove &&
															o.touchStartPreventDefault),
														(o.touchStartForcePreventDefault || n) &&
															e.preventDefault()),
													this.emit("touchStart", e)))));
							}.bind(this)),
							(this.onTouchMove = function (e) {
								var t = this.touchEventsData,
									i = this.params,
									s = this.touches,
									a = this.rtlTranslate;
								if ((e.originalEvent && (e = e.originalEvent), t.isTouched)) {
									if (!t.isTouchEvent || "touchmove" === e.type) {
										var n =
												"touchmove" === e.type &&
												e.targetTouches &&
												(e.targetTouches[0] || e.changedTouches[0]),
											r = ("touchmove" === e.type ? n : e).pageX,
											n = ("touchmove" === e.type ? n : e).pageY;
										if (e.preventedByNestedSwiper)
											return (s.startX = r), void (s.startY = n);
										if (!this.allowTouchMove)
											return (
												(this.allowClick = !1),
												void (
													t.isTouched &&
													(U.extend(s, {
														startX: r,
														startY: n,
														currentX: r,
														currentY: n,
													}),
													(t.touchStartTime = U.now()))
												)
											);
										if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
											if (this.isVertical()) {
												if (
													(n < s.startY &&
														this.translate <= this.maxTranslate()) ||
													(n > s.startY &&
														this.translate >= this.minTranslate())
												)
													return (t.isTouched = !1), void (t.isMoved = !1);
											} else if (
												(r < s.startX &&
													this.translate <= this.maxTranslate()) ||
												(r > s.startX && this.translate >= this.minTranslate())
											)
												return;
										if (
											t.isTouchEvent &&
											f.activeElement &&
											e.target === f.activeElement &&
											E(e.target).is(t.formElements)
										)
											return (t.isMoved = !0), void (this.allowClick = !1);
										if (
											(t.allowTouchCallbacks && this.emit("touchMove", e),
											!(e.targetTouches && 1 < e.targetTouches.length))
										) {
											(s.currentX = r), (s.currentY = n);
											(r = s.currentX - s.startX), (n = s.currentY - s.startY);
											if (
												!(
													this.params.threshold &&
													Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2)) <
														this.params.threshold
												)
											)
												if (
													(void 0 === t.isScrolling &&
														((this.isHorizontal() && s.currentY === s.startY) ||
														(this.isVertical() && s.currentX === s.startX)
															? (t.isScrolling = !1)
															: 25 <= r * r + n * n &&
															  ((o =
																	(180 * Math.atan2(Math.abs(n), Math.abs(r))) /
																	Math.PI),
															  (t.isScrolling = this.isHorizontal()
																	? o > i.touchAngle
																	: 90 - o > i.touchAngle))),
													t.isScrolling && this.emit("touchMoveOpposite", e),
													void 0 !== t.startMoving ||
														(s.currentX === s.startX &&
															s.currentY === s.startY) ||
														(t.startMoving = !0),
													t.isScrolling)
												)
													t.isTouched = !1;
												else if (t.startMoving) {
													(this.allowClick = !1),
														!i.cssMode && e.cancelable && e.preventDefault(),
														i.touchMoveStopPropagation &&
															!i.nested &&
															e.stopPropagation(),
														t.isMoved ||
															(i.loop && this.loopFix(),
															(t.startTranslate = this.getTranslate()),
															this.setTransition(0),
															this.animating &&
																this.$wrapperEl.trigger(
																	"webkitTransitionEnd transitionend"
																),
															(t.allowMomentumBounce = !1),
															!i.grabCursor ||
																(!0 !== this.allowSlideNext &&
																	!0 !== this.allowSlidePrev) ||
																this.setGrabCursor(!0),
															this.emit("sliderFirstMove", e)),
														this.emit("sliderMove", e),
														(t.isMoved = !0);
													var o = this.isHorizontal() ? r : n,
														r =
															((s.diff = o),
															(o *= i.touchRatio),
															(this.swipeDirection =
																0 < (o = a ? -o : o) ? "prev" : "next"),
															(t.currentTranslate = o + t.startTranslate),
															!0),
														n = i.resistanceRatio;
													if (
														(i.touchReleaseOnEdges && (n = 0),
														0 < o && t.currentTranslate > this.minTranslate()
															? ((r = !1),
															  i.resistance &&
																	(t.currentTranslate =
																		this.minTranslate() -
																		1 +
																		Math.pow(
																			-this.minTranslate() +
																				t.startTranslate +
																				o,
																			n
																		)))
															: o < 0 &&
															  t.currentTranslate < this.maxTranslate() &&
															  ((r = !1),
															  i.resistance &&
																	(t.currentTranslate =
																		this.maxTranslate() +
																		1 -
																		Math.pow(
																			this.maxTranslate() -
																				t.startTranslate -
																				o,
																			n
																		))),
														r && (e.preventedByNestedSwiper = !0),
														!this.allowSlideNext &&
															"next" === this.swipeDirection &&
															t.currentTranslate < t.startTranslate &&
															(t.currentTranslate = t.startTranslate),
														!this.allowSlidePrev &&
															"prev" === this.swipeDirection &&
															t.currentTranslate > t.startTranslate &&
															(t.currentTranslate = t.startTranslate),
														0 < i.threshold)
													) {
														if (
															!(
																Math.abs(o) > i.threshold ||
																t.allowThresholdMove
															)
														)
															return void (t.currentTranslate =
																t.startTranslate);
														if (!t.allowThresholdMove)
															return (
																(t.allowThresholdMove = !0),
																(s.startX = s.currentX),
																(s.startY = s.currentY),
																(t.currentTranslate = t.startTranslate),
																void (s.diff = this.isHorizontal()
																	? s.currentX - s.startX
																	: s.currentY - s.startY)
															);
													}
													i.followFinger &&
														!i.cssMode &&
														((i.freeMode ||
															i.watchSlidesProgress ||
															i.watchSlidesVisibility) &&
															(this.updateActiveIndex(),
															this.updateSlidesClasses()),
														i.freeMode &&
															(0 === t.velocities.length &&
																t.velocities.push({
																	position:
																		s[
																			this.isHorizontal() ? "startX" : "startY"
																		],
																	time: t.touchStartTime,
																}),
															t.velocities.push({
																position:
																	s[
																		this.isHorizontal()
																			? "currentX"
																			: "currentY"
																	],
																time: U.now(),
															})),
														this.updateProgress(t.currentTranslate),
														this.setTranslate(t.currentTranslate));
												}
										}
									}
								} else
									t.startMoving &&
										t.isScrolling &&
										this.emit("touchMoveOpposite", e);
							}.bind(this)),
							(this.onTouchEnd = function (e) {
								var t = this,
									i = t.touchEventsData,
									s = t.params,
									a = t.touches,
									n = t.rtlTranslate,
									r = t.$wrapperEl,
									o = t.slidesGrid,
									l = t.snapGrid;
								if (
									(e.originalEvent && (e = e.originalEvent),
									i.allowTouchCallbacks && t.emit("touchEnd", e),
									(i.allowTouchCallbacks = !1),
									!i.isTouched)
								)
									return (
										i.isMoved && s.grabCursor && t.setGrabCursor(!1),
										(i.isMoved = !1),
										void (i.startMoving = !1)
									);
								s.grabCursor &&
									i.isMoved &&
									i.isTouched &&
									(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
									t.setGrabCursor(!1);
								var d,
									h = (v = U.now()) - i.touchStartTime;
								if (
									(t.allowClick &&
										(t.updateClickedSlide(e),
										t.emit("tap click", e),
										h < 300 &&
											v - i.lastClickTime < 300 &&
											t.emit("doubleTap doubleClick", e)),
									(i.lastClickTime = U.now()),
									U.nextTick(function () {
										t.destroyed || (t.allowClick = !0);
									}),
									!i.isTouched ||
										!i.isMoved ||
										!t.swipeDirection ||
										0 === a.diff ||
										i.currentTranslate === i.startTranslate)
								)
									return (
										(i.isTouched = !1),
										(i.isMoved = !1),
										void (i.startMoving = !1)
									);
								if (
									((i.isTouched = !1),
									(i.isMoved = !1),
									(i.startMoving = !1),
									(d = s.followFinger
										? n
											? t.translate
											: -t.translate
										: -i.currentTranslate),
									!s.cssMode)
								)
									if (s.freeMode)
										if (d < -t.minTranslate()) t.slideTo(t.activeIndex);
										else if (d > -t.maxTranslate())
											t.slides.length < l.length
												? t.slideTo(l.length - 1)
												: t.slideTo(t.slides.length - 1);
										else {
											if (s.freeModeMomentum) {
												1 < i.velocities.length
													? ((v = i.velocities.pop()),
													  (a = i.velocities.pop()),
													  (p = v.position - a.position),
													  (a = v.time - a.time),
													  (t.velocity = p / a),
													  (t.velocity /= 2),
													  Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
															(t.velocity = 0),
													  (150 < a || 300 < U.now() - v.time) &&
															(t.velocity = 0))
													: (t.velocity = 0),
													(t.velocity *= s.freeModeMomentumVelocityRatio),
													(i.velocities.length = 0);
												var p = 1e3 * s.freeModeMomentumRatio,
													a = t.velocity * p,
													c = t.translate + a;
												n && (c = -c);
												var u,
													m,
													v = !1,
													a =
														20 *
														Math.abs(t.velocity) *
														s.freeModeMomentumBounceRatio;
												if (c < t.maxTranslate())
													s.freeModeMomentumBounce
														? (c + t.maxTranslate() < -a &&
																(c = t.maxTranslate() - a),
														  (u = t.maxTranslate()),
														  (i.allowMomentumBounce = v = !0))
														: (c = t.maxTranslate()),
														s.loop && s.centeredSlides && (m = !0);
												else if (c > t.minTranslate())
													s.freeModeMomentumBounce
														? (c - t.minTranslate() > a &&
																(c = t.minTranslate() + a),
														  (u = t.minTranslate()),
														  (i.allowMomentumBounce = v = !0))
														: (c = t.minTranslate()),
														s.loop && s.centeredSlides && (m = !0);
												else if (s.freeModeSticky) {
													for (var f, g = 0; g < l.length; g += 1)
														if (l[g] > -c) {
															f = g;
															break;
														}
													c = -(Math.abs(l[f] - c) < Math.abs(l[f - 1] - c) ||
													"next" === t.swipeDirection
														? l[f]
														: l[f - 1]);
												}
												if (
													(m &&
														t.once("transitionEnd", function () {
															t.loopFix();
														}),
													0 !== t.velocity)
												)
													(p = n
														? Math.abs((-c - t.translate) / t.velocity)
														: Math.abs((c - t.translate) / t.velocity)),
														s.freeModeSticky &&
															(p =
																(a = Math.abs((n ? -c : c) - t.translate)) <
																(m = t.slidesSizesGrid[t.activeIndex])
																	? s.speed
																	: a < 2 * m
																	? 1.5 * s.speed
																	: 2.5 * s.speed);
												else if (s.freeModeSticky)
													return void t.slideToClosest();
												s.freeModeMomentumBounce && v
													? (t.updateProgress(u),
													  t.setTransition(p),
													  t.setTranslate(c),
													  t.transitionStart(!0, t.swipeDirection),
													  (t.animating = !0),
													  r.transitionEnd(function () {
															t &&
																!t.destroyed &&
																i.allowMomentumBounce &&
																(t.emit("momentumBounce"),
																t.setTransition(s.speed),
																setTimeout(function () {
																	t.setTranslate(u),
																		r.transitionEnd(function () {
																			t && !t.destroyed && t.transitionEnd();
																		});
																}, 0));
													  }))
													: t.velocity
													? (t.updateProgress(c),
													  t.setTransition(p),
													  t.setTranslate(c),
													  t.transitionStart(!0, t.swipeDirection),
													  t.animating ||
															((t.animating = !0),
															r.transitionEnd(function () {
																t && !t.destroyed && t.transitionEnd();
															})))
													: t.updateProgress(c),
													t.updateActiveIndex(),
													t.updateSlidesClasses();
											} else if (s.freeModeSticky)
												return void t.slideToClosest();
											(!s.freeModeMomentum || h >= s.longSwipesMs) &&
												(t.updateProgress(),
												t.updateActiveIndex(),
												t.updateSlidesClasses());
										}
									else {
										for (
											var b = 0, w = t.slidesSizesGrid[0], y = 0;
											y < o.length;
											y += y < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
										) {
											var x =
												y < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
											void 0 !== o[y + x]
												? d >= o[y] &&
												  d < o[y + x] &&
												  (w = o[(b = y) + x] - o[y])
												: d >= o[y] &&
												  ((b = y), (w = o[o.length - 1] - o[o.length - 2]));
										}
										(n = (d - o[b]) / w),
											(a = b < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup);
										h > s.longSwipesMs
											? s.longSwipes
												? ("next" === t.swipeDirection &&
														(n >= s.longSwipesRatio
															? t.slideTo(b + a)
															: t.slideTo(b)),
												  "prev" === t.swipeDirection &&
														(n > 1 - s.longSwipesRatio
															? t.slideTo(b + a)
															: t.slideTo(b)))
												: t.slideTo(t.activeIndex)
											: s.shortSwipes
											? !t.navigation ||
											  (e.target !== t.navigation.nextEl &&
													e.target !== t.navigation.prevEl)
												? ("next" === t.swipeDirection && t.slideTo(b + a),
												  "prev" === t.swipeDirection && t.slideTo(b))
												: e.target === t.navigation.nextEl
												? t.slideTo(b + a)
												: t.slideTo(b)
											: t.slideTo(t.activeIndex);
									}
							}.bind(this)),
							t.cssMode &&
								(this.onScroll = function () {
									var e = this.wrapperEl,
										t = this.rtlTranslate;
									(this.previousTranslate = this.translate),
										this.isHorizontal()
											? (this.translate = t
													? e.scrollWidth - e.offsetWidth - e.scrollLeft
													: -e.scrollLeft)
											: (this.translate = -e.scrollTop),
										-0 === this.translate && (this.translate = 0),
										this.updateActiveIndex(),
										this.updateSlidesClasses(),
										(0 == (e = this.maxTranslate() - this.minTranslate())
											? 0
											: (this.translate - this.minTranslate()) / e) !==
											this.progress &&
											this.updateProgress(t ? -this.translate : this.translate),
										this.emit("setTranslate", this.translate, !1);
								}.bind(this)),
							(this.onClick = function (e) {
								this.allowClick ||
									(this.params.preventClicks && e.preventDefault(),
									this.params.preventClicksPropagation &&
										this.animating &&
										(e.stopPropagation(), e.stopImmediatePropagation()));
							}.bind(this)),
							!!t.nested);
					!x.touch && x.pointerEvents
						? (s.addEventListener(i.start, this.onTouchStart, !1),
						  f.addEventListener(i.move, this.onTouchMove, n),
						  f.addEventListener(i.end, this.onTouchEnd, !1))
						: (x.touch &&
								((e = !(
									"touchstart" !== i.start ||
									!x.passiveListener ||
									!t.passiveListeners
								) && { passive: !0, capture: !1 }),
								s.addEventListener(i.start, this.onTouchStart, e),
								s.addEventListener(
									i.move,
									this.onTouchMove,
									x.passiveListener ? { passive: !1, capture: n } : n
								),
								s.addEventListener(i.end, this.onTouchEnd, e),
								i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, e),
								F || (f.addEventListener("touchstart", W), (F = !0))),
						  ((t.simulateTouch && !o.ios && !o.android) ||
								(t.simulateTouch && !x.touch && o.ios)) &&
								(s.addEventListener("mousedown", this.onTouchStart, !1),
								f.addEventListener("mousemove", this.onTouchMove, n),
								f.addEventListener("mouseup", this.onTouchEnd, !1))),
						(t.preventClicks || t.preventClicksPropagation) &&
							s.addEventListener("click", this.onClick, !0),
						t.cssMode && a.addEventListener("scroll", this.onScroll),
						t.updateOnWindowResize
							? this.on(
									o.ios || o.android
										? "resize orientationchange observerUpdate"
										: "resize observerUpdate",
									Y,
									!0
							  )
							: this.on("observerUpdate", Y, !0);
				},
				detachEvents: function () {
					var e,
						t = this.params,
						i = this.touchEvents,
						s = this.el,
						a = this.wrapperEl,
						n = !!t.nested;
					!x.touch && x.pointerEvents
						? (s.removeEventListener(i.start, this.onTouchStart, !1),
						  f.removeEventListener(i.move, this.onTouchMove, n),
						  f.removeEventListener(i.end, this.onTouchEnd, !1))
						: (x.touch &&
								((e = !(
									"onTouchStart" !== i.start ||
									!x.passiveListener ||
									!t.passiveListeners
								) && { passive: !0, capture: !1 }),
								s.removeEventListener(i.start, this.onTouchStart, e),
								s.removeEventListener(i.move, this.onTouchMove, n),
								s.removeEventListener(i.end, this.onTouchEnd, e),
								i.cancel &&
									s.removeEventListener(i.cancel, this.onTouchEnd, e)),
						  ((t.simulateTouch && !o.ios && !o.android) ||
								(t.simulateTouch && !x.touch && o.ios)) &&
								(s.removeEventListener("mousedown", this.onTouchStart, !1),
								f.removeEventListener("mousemove", this.onTouchMove, n),
								f.removeEventListener("mouseup", this.onTouchEnd, !1))),
						(t.preventClicks || t.preventClicksPropagation) &&
							s.removeEventListener("click", this.onClick, !0),
						t.cssMode && a.removeEventListener("scroll", this.onScroll),
						this.off(
							o.ios || o.android
								? "resize orientationchange observerUpdate"
								: "resize observerUpdate",
							Y
						);
				},
			},
			breakpoints: {
				setBreakpoint: function () {
					var e,
						i,
						t,
						s,
						a = this.activeIndex,
						n = this.initialized,
						r = this.loopedSlides,
						o = (void 0 === r && (r = 0), this.params),
						l = this.$el,
						d = o.breakpoints;
					d &&
						0 !== Object.keys(d).length &&
						(e = this.getBreakpoint(d)) &&
						this.currentBreakpoint !== e &&
						((i = e in d ? d[e] : void 0) &&
							[
								"slidesPerView",
								"spaceBetween",
								"slidesPerGroup",
								"slidesPerGroupSkip",
								"slidesPerColumn",
							].forEach(function (e) {
								var t = i[e];
								void 0 !== t &&
									(i[e] =
										"slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
											? "slidesPerView" === e
												? parseFloat(t)
												: parseInt(t, 10)
											: "auto");
							}),
						(d = i || this.originalParams),
						(t = 1 < o.slidesPerColumn),
						(s = 1 < d.slidesPerColumn),
						t && !s
							? l.removeClass(
									o.containerModifierClass +
										"multirow " +
										o.containerModifierClass +
										"multirow-column"
							  )
							: !t &&
							  s &&
							  (l.addClass(o.containerModifierClass + "multirow"),
							  "column" === d.slidesPerColumnFill &&
									l.addClass(o.containerModifierClass + "multirow-column")),
						(t = d.direction && d.direction !== o.direction),
						(s = o.loop && (d.slidesPerView !== o.slidesPerView || t)),
						t && n && this.changeDirection(),
						U.extend(this.params, d),
						U.extend(this, {
							allowTouchMove: this.params.allowTouchMove,
							allowSlideNext: this.params.allowSlideNext,
							allowSlidePrev: this.params.allowSlidePrev,
						}),
						(this.currentBreakpoint = e),
						s &&
							n &&
							(this.loopDestroy(),
							this.loopCreate(),
							this.updateSlides(),
							this.slideTo(a - r + this.loopedSlides, 0, !1)),
						this.emit("breakpoint", d));
				},
				getBreakpoint: function (e) {
					if (e) {
						var t = !1,
							i = Object.keys(e).map(function (e) {
								var t;
								return "string" == typeof e && 0 === e.indexOf("@")
									? ((t = parseFloat(e.substr(1))),
									  { value: K.innerHeight * t, point: e })
									: { value: e, point: e };
							});
						i.sort(function (e, t) {
							return parseInt(e.value, 10) - parseInt(t.value, 10);
						});
						for (var s = 0; s < i.length; s += 1) {
							var a = i[s],
								n = a.point;
							a.value <= K.innerWidth && (t = n);
						}
						return t || "max";
					}
				},
			},
			checkOverflow: {
				checkOverflow: function () {
					var e = this.params,
						t = this.isLocked,
						i =
							0 < this.slides.length &&
							e.slidesOffsetBefore +
								e.spaceBetween * (this.slides.length - 1) +
								this.slides[0].offsetWidth * this.slides.length;
					e.slidesOffsetBefore && e.slidesOffsetAfter && i
						? (this.isLocked = i <= this.size)
						: (this.isLocked = 1 === this.snapGrid.length),
						(this.allowSlideNext = !this.isLocked),
						(this.allowSlidePrev = !this.isLocked),
						t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
						t &&
							t !== this.isLocked &&
							((this.isEnd = !1), this.navigation && this.navigation.update());
				},
			},
			classes: {
				addClasses: function () {
					var t = this.classNames,
						i = this.params,
						e = this.rtl,
						s = this.$el,
						a = [];
					a.push("initialized"),
						a.push(i.direction),
						i.freeMode && a.push("free-mode"),
						i.autoHeight && a.push("autoheight"),
						e && a.push("rtl"),
						1 < i.slidesPerColumn &&
							(a.push("multirow"),
							"column" === i.slidesPerColumnFill && a.push("multirow-column")),
						o.android && a.push("android"),
						o.ios && a.push("ios"),
						i.cssMode && a.push("css-mode"),
						a.forEach(function (e) {
							t.push(i.containerModifierClass + e);
						}),
						s.addClass(t.join(" "));
				},
				removeClasses: function () {
					var e = this.$el,
						t = this.classNames;
					e.removeClass(t.join(" "));
				},
			},
			images: {
				loadImage: function (e, t, i, s, a, n) {
					function r() {
						n && n();
					}
					!(E(e).parent("picture")[0] || (e.complete && a)) && t
						? (((e = new K.Image()).onload = r),
						  (e.onerror = r),
						  s && (e.sizes = s),
						  i && (e.srcset = i),
						  t && (e.src = t))
						: r();
				},
				preloadImages: function () {
					var e = this;
					function t() {
						null != e &&
							e &&
							!e.destroyed &&
							(void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
							e.imagesLoaded === e.imagesToLoad.length &&
								(e.params.updateOnImagesReady && e.update(),
								e.emit("imagesReady")));
					}
					e.imagesToLoad = e.$el.find("img");
					for (var i = 0; i < e.imagesToLoad.length; i += 1) {
						var s = e.imagesToLoad[i];
						e.loadImage(
							s,
							s.currentSrc || s.getAttribute("src"),
							s.srcset || s.getAttribute("srcset"),
							s.sizes || s.getAttribute("sizes"),
							!0,
							t
						);
					}
				},
			},
		},
		j = {},
		c =
			((h = t) && (S.__proto__ = h),
			(p = {
				extendedDefaults: { configurable: !0 },
				defaults: { configurable: !0 },
				Class: { configurable: !0 },
				$: { configurable: !0 },
			}),
			(((S.prototype = Object.create(h && h.prototype)).constructor =
				S).prototype.slidesPerViewDynamic = function () {
				var e = this.params,
					t = this.slides,
					i = this.slidesGrid,
					s = this.size,
					a = this.activeIndex,
					n = 1;
				if (e.centeredSlides) {
					for (var r, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
						t[l] &&
							!r &&
							((n += 1), (o += t[l].swiperSlideSize) > s && (r = !0));
					for (var d = a - 1; 0 <= d; --d)
						t[d] &&
							!r &&
							((n += 1), (o += t[d].swiperSlideSize) > s && (r = !0));
				} else
					for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (n += 1);
				return n;
			}),
			(S.prototype.update = function () {
				var e,
					t,
					i = this;
				function s() {
					var e = i.rtlTranslate ? -1 * i.translate : i.translate,
						e = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
					i.setTranslate(e), i.updateActiveIndex(), i.updateSlidesClasses();
				}
				i &&
					!i.destroyed &&
					((e = i.snapGrid),
					(t = i.params).breakpoints && i.setBreakpoint(),
					i.updateSize(),
					i.updateSlides(),
					i.updateProgress(),
					i.updateSlidesClasses(),
					i.params.freeMode
						? (s(), i.params.autoHeight && i.updateAutoHeight())
						: (("auto" === i.params.slidesPerView ||
								1 < i.params.slidesPerView) &&
						  i.isEnd &&
						  !i.params.centeredSlides
								? i.slideTo(i.slides.length - 1, 0, !1, !0)
								: i.slideTo(i.activeIndex, 0, !1, !0)) || s(),
					t.watchOverflow && e !== i.snapGrid && i.checkOverflow(),
					i.emit("update"));
			}),
			(S.prototype.changeDirection = function (i, e) {
				void 0 === e && (e = !0);
				var t = this.params.direction;
				return (
					(i = i || ("horizontal" === t ? "vertical" : "horizontal")) === t ||
						("horizontal" !== i && "vertical" !== i) ||
						(this.$el
							.removeClass("" + this.params.containerModifierClass + t)
							.addClass("" + this.params.containerModifierClass + i),
						(this.params.direction = i),
						this.slides.each(function (e, t) {
							"vertical" === i ? (t.style.width = "") : (t.style.height = "");
						}),
						this.emit("changeDirection"),
						e && this.update()),
					this
				);
			}),
			(S.prototype.init = function () {
				this.initialized ||
					(this.emit("beforeInit"),
					this.params.breakpoints && this.setBreakpoint(),
					this.addClasses(),
					this.params.loop && this.loopCreate(),
					this.updateSize(),
					this.updateSlides(),
					this.params.watchOverflow && this.checkOverflow(),
					this.params.grabCursor && this.setGrabCursor(),
					this.params.preloadImages && this.preloadImages(),
					this.params.loop
						? this.slideTo(
								this.params.initialSlide + this.loopedSlides,
								0,
								this.params.runCallbacksOnInit
						  )
						: this.slideTo(
								this.params.initialSlide,
								0,
								this.params.runCallbacksOnInit
						  ),
					this.attachEvents(),
					(this.initialized = !0),
					this.emit("init"));
			}),
			(S.prototype.destroy = function (e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var i = this,
					s = i.params,
					a = i.$el,
					n = i.$wrapperEl,
					r = i.slides;
				return (
					void 0 === i.params ||
						i.destroyed ||
						(i.emit("beforeDestroy"),
						(i.initialized = !1),
						i.detachEvents(),
						s.loop && i.loopDestroy(),
						t &&
							(i.removeClasses(),
							a.removeAttr("style"),
							n.removeAttr("style"),
							r &&
								r.length &&
								r
									.removeClass(
										[
											s.slideVisibleClass,
											s.slideActiveClass,
											s.slideNextClass,
											s.slidePrevClass,
										].join(" ")
									)
									.removeAttr("style")
									.removeAttr("data-swiper-slide-index")),
						i.emit("destroy"),
						Object.keys(i.eventsListeners).forEach(function (e) {
							i.off(e);
						}),
						!1 !== e &&
							((i.$el[0].swiper = null),
							i.$el.data("swiper", null),
							U.deleteProps(i)),
						(i.destroyed = !0)),
					null
				);
			}),
			(S.extendDefaults = function (e) {
				U.extend(j, e);
			}),
			(p.extendedDefaults.get = function () {
				return j;
			}),
			(p.defaults.get = function () {
				return R;
			}),
			(p.Class.get = function () {
				return h;
			}),
			(p.$.get = function () {
				return E;
			}),
			Object.defineProperties(S, p),
			S),
		u = { name: "device", proto: { device: o }, static: { device: o } },
		_ = { name: "support", proto: { support: x }, static: { support: x } },
		T = {
			isEdge: !!K.navigator.userAgent.match(/Edge/g),
			isSafari:
				0 <= (d = K.navigator.userAgent.toLowerCase()).indexOf("safari") &&
				d.indexOf("chrome") < 0 &&
				d.indexOf("android") < 0,
			isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
				K.navigator.userAgent
			),
		},
		Z = { name: "browser", proto: { browser: T }, static: { browser: T } },
		m = {
			name: "resize",
			create: function () {
				var e = this;
				U.extend(e, {
					resize: {
						resizeHandler: function () {
							e &&
								!e.destroyed &&
								e.initialized &&
								(e.emit("beforeResize"), e.emit("resize"));
						},
						orientationChangeHandler: function () {
							e && !e.destroyed && e.initialized && e.emit("orientationchange");
						},
					},
				});
			},
			on: {
				init: function () {
					K.addEventListener("resize", this.resize.resizeHandler),
						K.addEventListener(
							"orientationchange",
							this.resize.orientationChangeHandler
						);
				},
				destroy: function () {
					K.removeEventListener("resize", this.resize.resizeHandler),
						K.removeEventListener(
							"orientationchange",
							this.resize.orientationChangeHandler
						);
				},
			},
		},
		v = {
			func: K.MutationObserver || K.WebkitMutationObserver,
			attach: function (e, t) {
				void 0 === t && (t = {});
				var i = this,
					s = new v.func(function (e) {
						var t;
						1 !== e.length
							? ((t = function () {
									i.emit("observerUpdate", e[0]);
							  }),
							  K.requestAnimationFrame
									? K.requestAnimationFrame(t)
									: K.setTimeout(t, 0))
							: i.emit("observerUpdate", e[0]);
					});
				s.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData,
				}),
					i.observer.observers.push(s);
			},
			init: function () {
				if (x.observer && this.params.observer) {
					if (this.params.observeParents)
						for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
							this.observer.attach(e[t]);
					this.observer.attach(this.$el[0], {
						childList: this.params.observeSlideChildren,
					}),
						this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
				}
			},
			destroy: function () {
				this.observer.observers.forEach(function (e) {
					e.disconnect();
				}),
					(this.observer.observers = []);
			},
		},
		g = {
			name: "observer",
			params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
			create: function () {
				U.extend(this, {
					observer: {
						init: v.init.bind(this),
						attach: v.attach.bind(this),
						destroy: v.destroy.bind(this),
						observers: [],
					},
				});
			},
			on: {
				init: function () {
					this.observer.init();
				},
				destroy: function () {
					this.observer.destroy();
				},
			},
		},
		b = {
			update: function (e) {
				var t = this,
					i = t.params,
					s = i.slidesPerView,
					a = i.slidesPerGroup,
					i = i.centeredSlides,
					n = t.params.virtual,
					r = n.addSlidesBefore,
					n = n.addSlidesAfter,
					o = t.virtual,
					l = o.from,
					d = o.to,
					h = o.slides,
					p = o.slidesGrid,
					c = o.renderSlide,
					o = o.offset;
				t.updateActiveIndex();
				var u,
					m = t.activeIndex || 0,
					v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
					i = i
						? ((u = Math.floor(s / 2) + a + r), Math.floor(s / 2) + a + n)
						: ((u = s + (a - 1) + r), a + n),
					f = Math.max((m || 0) - i, 0),
					g = Math.min((m || 0) + u, h.length - 1),
					s = (t.slidesGrid[f] || 0) - (t.slidesGrid[0] || 0);
				function b() {
					t.updateSlides(),
						t.updateProgress(),
						t.updateSlidesClasses(),
						t.lazy && t.params.lazy.enabled && t.lazy.load();
				}
				if (
					(U.extend(t.virtual, {
						from: f,
						to: g,
						offset: s,
						slidesGrid: t.slidesGrid,
					}),
					l === f && d === g && !e)
				)
					return (
						t.slidesGrid !== p && s !== o && t.slides.css(v, s + "px"),
						void t.updateProgress()
					);
				if (t.params.virtual.renderExternal)
					return (
						t.params.virtual.renderExternal.call(t, {
							offset: s,
							from: f,
							to: g,
							slides: (function () {
								for (var e = [], t = f; t <= g; t += 1) e.push(h[t]);
								return e;
							})(),
						}),
						void b()
					);
				var w = [],
					y = [];
				if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
				else
					for (var x = l; x <= d; x += 1)
						(x < f || g < x) &&
							t.$wrapperEl
								.find(
									"." +
										t.params.slideClass +
										'[data-swiper-slide-index="' +
										x +
										'"]'
								)
								.remove();
				for (var E = 0; E < h.length; E += 1)
					f <= E &&
						E <= g &&
						(void 0 === d || e
							? y.push(E)
							: (d < E && y.push(E), E < l && w.push(E)));
				y.forEach(function (e) {
					t.$wrapperEl.append(c(h[e], e));
				}),
					w
						.sort(function (e, t) {
							return t - e;
						})
						.forEach(function (e) {
							t.$wrapperEl.prepend(c(h[e], e));
						}),
					t.$wrapperEl.children(".swiper-slide").css(v, s + "px"),
					b();
			},
			renderSlide: function (e, t) {
				var i = this.params.virtual;
				if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
				e = i.renderSlide
					? E(i.renderSlide.call(this, e, t))
					: E(
							'<div class="' +
								this.params.slideClass +
								'" data-swiper-slide-index="' +
								t +
								'">' +
								e +
								"</div>"
					  );
				return (
					e.attr("data-swiper-slide-index") ||
						e.attr("data-swiper-slide-index", t),
					i.cache && (this.virtual.cache[t] = e),
					e
				);
			},
			appendSlide: function (e) {
				if ("object" == typeof e && "length" in e)
					for (var t = 0; t < e.length; t += 1)
						e[t] && this.virtual.slides.push(e[t]);
				else this.virtual.slides.push(e);
				this.virtual.update(!0);
			},
			prependSlide: function (e) {
				var s,
					a,
					t = this.activeIndex,
					i = t + 1,
					n = 1;
				if (Array.isArray(e)) {
					for (var r = 0; r < e.length; r += 1)
						e[r] && this.virtual.slides.unshift(e[r]);
					(i = t + e.length), (n = e.length);
				} else this.virtual.slides.unshift(e);
				this.params.virtual.cache &&
					((s = this.virtual.cache),
					(a = {}),
					Object.keys(s).forEach(function (e) {
						var t = s[e],
							i = t.attr("data-swiper-slide-index");
						i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
							(a[parseInt(e, 10) + n] = t);
					}),
					(this.virtual.cache = a)),
					this.virtual.update(!0),
					this.slideTo(i, 0);
			},
			removeSlide: function (e) {
				if (null != e) {
					var t = this.activeIndex;
					if (Array.isArray(e))
						for (var i = e.length - 1; 0 <= i; --i)
							this.virtual.slides.splice(e[i], 1),
								this.params.virtual.cache && delete this.virtual.cache[e[i]],
								e[i] < t && --t,
								(t = Math.max(t, 0));
					else
						this.virtual.slides.splice(e, 1),
							this.params.virtual.cache && delete this.virtual.cache[e],
							e < t && --t,
							(t = Math.max(t, 0));
					this.virtual.update(!0), this.slideTo(t, 0);
				}
			},
			removeAllSlides: function () {
				(this.virtual.slides = []),
					this.params.virtual.cache && (this.virtual.cache = {}),
					this.virtual.update(!0),
					this.slideTo(0, 0);
			},
		},
		w = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0,
				},
			},
			create: function () {
				U.extend(this, {
					virtual: {
						update: b.update.bind(this),
						appendSlide: b.appendSlide.bind(this),
						prependSlide: b.prependSlide.bind(this),
						removeSlide: b.removeSlide.bind(this),
						removeAllSlides: b.removeAllSlides.bind(this),
						renderSlide: b.renderSlide.bind(this),
						slides: this.params.virtual.slides,
						cache: {},
					},
				});
			},
			on: {
				beforeInit: function () {
					var e;
					this.params.virtual.enabled &&
						(this.classNames.push(
							this.params.containerModifierClass + "virtual"
						),
						U.extend(this.params, (e = { watchSlidesProgress: !0 })),
						U.extend(this.originalParams, e),
						this.params.initialSlide || this.virtual.update());
				},
				setTranslate: function () {
					this.params.virtual.enabled && this.virtual.update();
				},
			},
		},
		Q = {
			handle: function (e) {
				var t = this.rtlTranslate,
					i = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode,
					s = this.params.keyboard.pageUpDown,
					a = s && 33 === i,
					s = s && 34 === i,
					n = 37 === i,
					r = 39 === i,
					o = 38 === i,
					l = 40 === i;
				if (
					!this.allowSlideNext &&
					((this.isHorizontal() && r) || (this.isVertical() && l) || s)
				)
					return !1;
				if (
					!this.allowSlidePrev &&
					((this.isHorizontal() && n) || (this.isVertical() && o) || a)
				)
					return !1;
				if (
					!(
						e.shiftKey ||
						e.altKey ||
						e.ctrlKey ||
						e.metaKey ||
						(f.activeElement &&
							f.activeElement.nodeName &&
							("input" === f.activeElement.nodeName.toLowerCase() ||
								"textarea" === f.activeElement.nodeName.toLowerCase()))
					)
				) {
					if (
						this.params.keyboard.onlyInViewport &&
						(a || s || n || r || o || l)
					) {
						var d = !1;
						if (
							0 < this.$el.parents("." + this.params.slideClass).length &&
							0 === this.$el.parents("." + this.params.slideActiveClass).length
						)
							return;
						var h = K.innerWidth,
							p = K.innerHeight,
							c = this.$el.offset();
						t && (c.left -= this.$el[0].scrollLeft);
						for (
							var u = [
									[c.left, c.top],
									[c.left + this.width, c.top],
									[c.left, c.top + this.height],
									[c.left + this.width, c.top + this.height],
								],
								m = 0;
							m < u.length;
							m += 1
						) {
							var v = u[m];
							0 <= v[0] && v[0] <= h && 0 <= v[1] && v[1] <= p && (d = !0);
						}
						if (!d) return;
					}
					this.isHorizontal()
						? ((a || s || n || r) &&
								(e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
						  (((s || r) && !t) || ((a || n) && t)) && this.slideNext(),
						  (((a || n) && !t) || ((s || r) && t)) && this.slidePrev())
						: ((a || s || o || l) &&
								(e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
						  (s || l) && this.slideNext(),
						  (a || o) && this.slidePrev()),
						this.emit("keyPress", i);
				}
			},
			enable: function () {
				this.keyboard.enabled ||
					(E(f).on("keydown", this.keyboard.handle),
					(this.keyboard.enabled = !0));
			},
			disable: function () {
				this.keyboard.enabled &&
					(E(f).off("keydown", this.keyboard.handle),
					(this.keyboard.enabled = !1));
			},
		},
		y = {
			name: "keyboard",
			params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
			create: function () {
				U.extend(this, {
					keyboard: {
						enabled: !1,
						enable: Q.enable.bind(this),
						disable: Q.disable.bind(this),
						handle: Q.handle.bind(this),
					},
				});
			},
			on: {
				init: function () {
					this.params.keyboard.enabled && this.keyboard.enable();
				},
				destroy: function () {
					this.keyboard.enabled && this.keyboard.disable();
				},
			},
		};
	function S() {
		for (var i, e = [], t = arguments.length; t--; ) e[t] = arguments[t];
		(i =
			(i =
				1 === e.length && e[0].constructor && e[0].constructor === Object
					? e[0]
					: ((n = e[0]), e[1])) || {}),
			(i = U.extend({}, i)),
			n && !i.el && (i.el = n),
			h.call(this, i),
			Object.keys(q).forEach(function (t) {
				Object.keys(q[t]).forEach(function (e) {
					S.prototype[e] || (S.prototype[e] = q[t][e]);
				});
			});
		var s,
			a,
			n,
			r = this,
			o =
				(void 0 === r.modules && (r.modules = {}),
				Object.keys(r.modules).forEach(function (e) {
					var t,
						e = r.modules[e];
					e.params &&
						((t = Object.keys(e.params)[0]),
						"object" == typeof (e = e.params[t]) &&
							null !== e &&
							t in i &&
							"enabled" in e &&
							(!0 === i[t] && (i[t] = { enabled: !0 }),
							"object" != typeof i[t] ||
								"enabled" in i[t] ||
								(i[t].enabled = !0),
							i[t] || (i[t] = { enabled: !1 })));
				}),
				U.extend({}, R)),
			l =
				(r.useModulesParams(o),
				(r.params = U.extend({}, o, j, i)),
				(r.originalParams = U.extend({}, r.params)),
				(r.passedParams = U.extend({}, i)),
				(r.$ = E)(r.params.el));
		if ((n = l[0]))
			return 1 < l.length
				? ((s = []),
				  l.each(function (e, t) {
						t = U.extend({}, i, { el: t });
						s.push(new S(t));
				  }),
				  s)
				: ((n.swiper = r),
				  l.data("swiper", r),
				  n && n.shadowRoot && n.shadowRoot.querySelector
						? ((a = E(
								n.shadowRoot.querySelector("." + r.params.wrapperClass)
						  )).children = function (e) {
								return l.children(e);
						  })
						: (a = l.children("." + r.params.wrapperClass)),
				  U.extend(r, {
						$el: l,
						el: n,
						$wrapperEl: a,
						wrapperEl: a[0],
						classNames: [],
						slides: E(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === r.params.direction;
						},
						isVertical: function () {
							return "vertical" === r.params.direction;
						},
						rtl: "rtl" === n.dir.toLowerCase() || "rtl" === l.css("direction"),
						rtlTranslate:
							"horizontal" === r.params.direction &&
							("rtl" === n.dir.toLowerCase() || "rtl" === l.css("direction")),
						wrongRTL: "-webkit-box" === a.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: r.params.allowSlideNext,
						allowSlidePrev: r.params.allowSlidePrev,
						touchEvents:
							((o = x.pointerEvents
								? ["pointerdown", "pointermove", "pointerup"]
								: ["mousedown", "mousemove", "mouseup"]),
							(r.touchEventsTouch = {
								start: (n = [
									"touchstart",
									"touchmove",
									"touchend",
									"touchcancel",
								])[0],
								move: n[1],
								end: n[2],
								cancel: n[3],
							}),
							(r.touchEventsDesktop = { start: o[0], move: o[1], end: o[2] }),
							x.touch || !r.params.simulateTouch
								? r.touchEventsTouch
								: r.touchEventsDesktop),
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							formElements:
								"input, select, option, textarea, button, video, label",
							lastClickTime: U.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0,
						},
						allowClick: !0,
						allowTouchMove: r.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0,
						},
						imagesToLoad: [],
						imagesLoaded: 0,
				  }),
				  r.useModules(),
				  r.params.init && r.init(),
				  r);
	}
	var C = {
			lastScrollTime: U.now(),
			lastEventBeforeSnap: void 0,
			recentWheelEvents: [],
			event: function () {
				return -1 < K.navigator.userAgent.indexOf("firefox")
					? "DOMMouseScroll"
					: ((t = "onwheel" in f) ||
							((e = f.createElement("div")).setAttribute("onwheel", "return;"),
							(t = "function" == typeof e.onwheel)),
					  (t =
							!t &&
							f.implementation &&
							f.implementation.hasFeature &&
							!0 !== f.implementation.hasFeature("", "")
								? f.implementation.hasFeature("Events.wheel", "3.0")
								: t)
							? "wheel"
							: "mousewheel");
				var e, t;
			},
			normalize: function (e) {
				var t = 0,
					i = 0,
					s = 0,
					a = 0;
				return (
					"detail" in e && (i = e.detail),
					"wheelDelta" in e && (i = -e.wheelDelta / 120),
					"wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
					"wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
					"axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
					(s = 10 * t),
					(a = 10 * i),
					"deltaY" in e && (a = e.deltaY),
					"deltaX" in e && (s = e.deltaX),
					e.shiftKey && !s && ((s = a), (a = 0)),
					(s || a) &&
						e.deltaMode &&
						(1 === e.deltaMode
							? ((s *= 40), (a *= 40))
							: ((s *= 800), (a *= 800))),
					{
						spinX: (t = s && !t ? (s < 1 ? -1 : 1) : t),
						spinY: (i = a && !i ? (a < 1 ? -1 : 1) : i),
						pixelX: s,
						pixelY: a,
					}
				);
			},
			handleMouseEnter: function () {
				this.mouseEntered = !0;
			},
			handleMouseLeave: function () {
				this.mouseEntered = !1;
			},
			handle: function (e) {
				var t = e,
					i = this,
					s = i.params.mousewheel,
					a = (i.params.cssMode && t.preventDefault(), i.$el);
				if (
					("container" !== i.params.mousewheel.eventsTarged &&
						(a = E(i.params.mousewheel.eventsTarged)),
					!i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
				)
					return !0;
				t.originalEvent && (t = t.originalEvent);
				var a = 0,
					n = i.rtlTranslate ? -1 : 1,
					r = C.normalize(t);
				if (s.forceToAxis)
					if (i.isHorizontal()) {
						if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
						a = -r.pixelX * n;
					} else {
						if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
						a = -r.pixelY;
					}
				else
					a =
						Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
				if (0 === a) return !0;
				if ((s.invert && (a = -a), i.params.freeMode)) {
					var o = {
							time: U.now(),
							delta: Math.abs(a),
							direction: Math.sign(a),
						},
						n = i.mousewheel.lastEventBeforeSnap,
						r =
							n &&
							o.time < n.time + 500 &&
							o.delta <= n.delta &&
							o.direction === n.direction;
					if (!r) {
						(i.mousewheel.lastEventBeforeSnap = void 0),
							i.params.loop && i.loopFix();
						var l,
							d,
							n = i.getTranslate() + a * s.sensitivity,
							s = i.isBeginning,
							h = i.isEnd;
						if (
							((n = n >= i.minTranslate() ? i.minTranslate() : n) <=
								i.maxTranslate() && (n = i.maxTranslate()),
							i.setTransition(0),
							i.setTranslate(n),
							i.updateProgress(),
							i.updateActiveIndex(),
							i.updateSlidesClasses(),
							((!s && i.isBeginning) || (!h && i.isEnd)) &&
								i.updateSlidesClasses(),
							i.params.freeModeSticky &&
								(clearTimeout(i.mousewheel.timeout),
								(i.mousewheel.timeout = void 0),
								15 <= (l = i.mousewheel.recentWheelEvents).length && l.shift(),
								(s = l.length ? l[l.length - 1] : void 0),
								(h = l[0]),
								l.push(o),
								s && (o.delta > s.delta || o.direction !== s.direction)
									? l.splice(0)
									: 15 <= l.length &&
									  o.time - h.time < 500 &&
									  1 <= h.delta - o.delta &&
									  o.delta <= 6 &&
									  ((d = 0 < a ? 0.8 : 0.2),
									  (i.mousewheel.lastEventBeforeSnap = o),
									  l.splice(0),
									  (i.mousewheel.timeout = U.nextTick(function () {
											i.slideToClosest(i.params.speed, !0, void 0, d);
									  }, 0))),
								i.mousewheel.timeout ||
									(i.mousewheel.timeout = U.nextTick(function () {
										(i.mousewheel.lastEventBeforeSnap = o),
											l.splice(0),
											i.slideToClosest(i.params.speed, !0, void 0, 0.5);
									}, 500))),
							r || i.emit("scroll", t),
							i.params.autoplay &&
								i.params.autoplayDisableOnInteraction &&
								i.autoplay.stop(),
							n === i.minTranslate() || n === i.maxTranslate())
						)
							return !0;
					}
				} else {
					(s = {
						time: U.now(),
						delta: Math.abs(a),
						direction: Math.sign(a),
						raw: e,
					}),
						(h = i.mousewheel.recentWheelEvents),
						(r =
							(2 <= h.length && h.shift(),
							h.length ? h[h.length - 1] : void 0));
					if (
						(h.push(s),
						(!r ||
							s.direction !== r.direction ||
							s.delta > r.delta ||
							s.time > r.time + 150) &&
							i.mousewheel.animateSlider(s),
						i.mousewheel.releaseScroll(s))
					)
						return !0;
				}
				return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
			},
			animateSlider: function (e) {
				return (
					(6 <= e.delta && U.now() - this.mousewheel.lastScrollTime < 60) ||
					(e.direction < 0
						? (this.isEnd && !this.params.loop) ||
						  this.animating ||
						  (this.slideNext(), this.emit("scroll", e.raw))
						: (this.isBeginning && !this.params.loop) ||
						  this.animating ||
						  (this.slidePrev(), this.emit("scroll", e.raw)),
					(this.mousewheel.lastScrollTime = new K.Date().getTime()),
					!1)
				);
			},
			releaseScroll: function (e) {
				var t = this.params.mousewheel;
				if (e.direction < 0) {
					if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
				} else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
					return !0;
				return !1;
			},
			enable: function () {
				var e = C.event();
				if (this.params.cssMode)
					return (
						this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
					);
				if (!e) return !1;
				if (this.mousewheel.enabled) return !1;
				var t = this.$el;
				return (
					(t =
						"container" !== this.params.mousewheel.eventsTarged
							? E(this.params.mousewheel.eventsTarged)
							: t).on("mouseenter", this.mousewheel.handleMouseEnter),
					t.on("mouseleave", this.mousewheel.handleMouseLeave),
					t.on(e, this.mousewheel.handle),
					(this.mousewheel.enabled = !0)
				);
			},
			disable: function () {
				var e = C.event();
				if (this.params.cssMode)
					return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
				if (!e) return !1;
				if (!this.mousewheel.enabled) return !1;
				var t = this.$el;
				return (
					(t =
						"container" !== this.params.mousewheel.eventsTarged
							? E(this.params.mousewheel.eventsTarged)
							: t).off(e, this.mousewheel.handle),
					!(this.mousewheel.enabled = !1)
				);
			},
		},
		M = {
			update: function () {
				var e,
					t,
					i = this.params.navigation;
				this.params.loop ||
					((e = (t = this.navigation).$nextEl),
					(t = t.$prevEl) &&
						0 < t.length &&
						(this.isBeginning
							? t.addClass(i.disabledClass)
							: t.removeClass(i.disabledClass),
						t[
							this.params.watchOverflow && this.isLocked
								? "addClass"
								: "removeClass"
						](i.lockClass)),
					e &&
						0 < e.length &&
						(this.isEnd
							? e.addClass(i.disabledClass)
							: e.removeClass(i.disabledClass),
						e[
							this.params.watchOverflow && this.isLocked
								? "addClass"
								: "removeClass"
						](i.lockClass)));
			},
			onPrevClick: function (e) {
				e.preventDefault(),
					(this.isBeginning && !this.params.loop) || this.slidePrev();
			},
			onNextClick: function (e) {
				e.preventDefault(),
					(this.isEnd && !this.params.loop) || this.slideNext();
			},
			init: function () {
				var e,
					t,
					i = this.params.navigation;
				(i.nextEl || i.prevEl) &&
					(i.nextEl &&
						((e = E(i.nextEl)),
						this.params.uniqueNavElements &&
							"string" == typeof i.nextEl &&
							1 < e.length &&
							1 === this.$el.find(i.nextEl).length &&
							(e = this.$el.find(i.nextEl))),
					i.prevEl &&
						((t = E(i.prevEl)),
						this.params.uniqueNavElements &&
							"string" == typeof i.prevEl &&
							1 < t.length &&
							1 === this.$el.find(i.prevEl).length &&
							(t = this.$el.find(i.prevEl))),
					e && 0 < e.length && e.on("click", this.navigation.onNextClick),
					t && 0 < t.length && t.on("click", this.navigation.onPrevClick),
					U.extend(this.navigation, {
						$nextEl: e,
						nextEl: e && e[0],
						$prevEl: t,
						prevEl: t && t[0],
					}));
			},
			destroy: function () {
				var e = this.navigation,
					t = e.$nextEl,
					e = e.$prevEl;
				t &&
					t.length &&
					(t.off("click", this.navigation.onNextClick),
					t.removeClass(this.params.navigation.disabledClass)),
					e &&
						e.length &&
						(e.off("click", this.navigation.onPrevClick),
						e.removeClass(this.params.navigation.disabledClass));
			},
		},
		P = {
			update: function () {
				var e = this.rtl,
					s = this.params.pagination;
				if (
					s.el &&
					this.pagination.el &&
					this.pagination.$el &&
					0 !== this.pagination.$el.length
				) {
					var a,
						t = (
							this.virtual && this.params.virtual.enabled ? this.virtual : this
						).slides.length,
						i = this.pagination.$el,
						n = this.params.loop
							? Math.ceil(
									(t - 2 * this.loopedSlides) / this.params.slidesPerGroup
							  )
							: this.snapGrid.length;
					if (
						(this.params.loop
							? ((a = Math.ceil(
									(this.activeIndex - this.loopedSlides) /
										this.params.slidesPerGroup
							  )) >
									t - 1 - 2 * this.loopedSlides &&
									(a -= t - 2 * this.loopedSlides),
							  n - 1 < a && (a -= n),
							  a < 0 &&
									"bullets" !== this.params.paginationType &&
									(a = n + a))
							: (a =
									void 0 !== this.snapIndex
										? this.snapIndex
										: this.activeIndex || 0),
						"bullets" === s.type &&
							this.pagination.bullets &&
							0 < this.pagination.bullets.length)
					) {
						var r,
							o,
							l,
							d = this.pagination.bullets;
						if (
							(s.dynamicBullets &&
								((this.pagination.bulletSize = d
									.eq(0)
									[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
								i.css(
									this.isHorizontal() ? "width" : "height",
									this.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"
								),
								1 < s.dynamicMainBullets &&
									void 0 !== this.previousIndex &&
									((this.pagination.dynamicBulletIndex +=
										a - this.previousIndex),
									this.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
										? (this.pagination.dynamicBulletIndex =
												s.dynamicMainBullets - 1)
										: this.pagination.dynamicBulletIndex < 0 &&
										  (this.pagination.dynamicBulletIndex = 0)),
								(r = a - this.pagination.dynamicBulletIndex),
								(l =
									((o = r + (Math.min(d.length, s.dynamicMainBullets) - 1)) +
										r) /
									2)),
							d.removeClass(
								s.bulletActiveClass +
									" " +
									s.bulletActiveClass +
									"-next " +
									s.bulletActiveClass +
									"-next-next " +
									s.bulletActiveClass +
									"-prev " +
									s.bulletActiveClass +
									"-prev-prev " +
									s.bulletActiveClass +
									"-main"
							),
							1 < i.length)
						)
							d.each(function (e, t) {
								var t = E(t),
									i = t.index();
								i === a && t.addClass(s.bulletActiveClass),
									s.dynamicBullets &&
										(r <= i &&
											i <= o &&
											t.addClass(s.bulletActiveClass + "-main"),
										i === r &&
											t
												.prev()
												.addClass(s.bulletActiveClass + "-prev")
												.prev()
												.addClass(s.bulletActiveClass + "-prev-prev"),
										i === o &&
											t
												.next()
												.addClass(s.bulletActiveClass + "-next")
												.next()
												.addClass(s.bulletActiveClass + "-next-next"));
							});
						else {
							var t = d.eq(a),
								h = t.index();
							if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
								for (var t = d.eq(r), p = d.eq(o), c = r; c <= o; c += 1)
									d.eq(c).addClass(s.bulletActiveClass + "-main");
								if (this.params.loop)
									if (h >= d.length - s.dynamicMainBullets) {
										for (var u = s.dynamicMainBullets; 0 <= u; --u)
											d.eq(d.length - u).addClass(
												s.bulletActiveClass + "-main"
											);
										d.eq(d.length - s.dynamicMainBullets - 1).addClass(
											s.bulletActiveClass + "-prev"
										);
									} else
										t
											.prev()
											.addClass(s.bulletActiveClass + "-prev")
											.prev()
											.addClass(s.bulletActiveClass + "-prev-prev"),
											p
												.next()
												.addClass(s.bulletActiveClass + "-next")
												.next()
												.addClass(s.bulletActiveClass + "-next-next");
								else
									t
										.prev()
										.addClass(s.bulletActiveClass + "-prev")
										.prev()
										.addClass(s.bulletActiveClass + "-prev-prev"),
										p
											.next()
											.addClass(s.bulletActiveClass + "-next")
											.next()
											.addClass(s.bulletActiveClass + "-next-next");
							}
						}
						s.dynamicBullets &&
							((h = Math.min(d.length, s.dynamicMainBullets + 4)),
							(t =
								(this.pagination.bulletSize * h - this.pagination.bulletSize) /
									2 -
								l * this.pagination.bulletSize),
							(p = e ? "right" : "left"),
							d.css(this.isHorizontal() ? p : "top", t + "px"));
					}
					"fraction" === s.type &&
						(i.find("." + s.currentClass).text(s.formatFractionCurrent(a + 1)),
						i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
						"progressbar" === s.type &&
							((h = s.progressbarOpposite
								? this.isHorizontal()
									? "vertical"
									: "horizontal"
								: this.isHorizontal()
								? "horizontal"
								: "vertical"),
							(l = (a + 1) / n),
							(p = e = 1),
							"horizontal" == h ? (e = l) : (p = l),
							i
								.find("." + s.progressbarFillClass)
								.transform(
									"translate3d(0,0,0) scaleX(" + e + ") scaleY(" + p + ")"
								)
								.transition(this.params.speed)),
						"custom" === s.type && s.renderCustom
							? (i.html(s.renderCustom(this, a + 1, n)),
							  this.emit("paginationRender", this, i[0]))
							: this.emit("paginationUpdate", this, i[0]),
						i[
							this.params.watchOverflow && this.isLocked
								? "addClass"
								: "removeClass"
						](s.lockClass);
				}
			},
			render: function () {
				var e = this.params.pagination;
				if (
					e.el &&
					this.pagination.el &&
					this.pagination.$el &&
					0 !== this.pagination.$el.length
				) {
					var t = (
							this.virtual && this.params.virtual.enabled ? this.virtual : this
						).slides.length,
						i = this.pagination.$el,
						s = "";
					if ("bullets" === e.type) {
						for (
							var a = this.params.loop
									? Math.ceil(
											(t - 2 * this.loopedSlides) / this.params.slidesPerGroup
									  )
									: this.snapGrid.length,
								n = 0;
							n < a;
							n += 1
						)
							e.renderBullet
								? (s += e.renderBullet.call(this, n, e.bulletClass))
								: (s +=
										"<" +
										e.bulletElement +
										' class="' +
										e.bulletClass +
										'"></' +
										e.bulletElement +
										">");
						i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
					}
					"fraction" === e.type &&
						((s = e.renderFraction
							? e.renderFraction.call(this, e.currentClass, e.totalClass)
							: '<span class="' +
							  e.currentClass +
							  '"></span> / <span class="' +
							  e.totalClass +
							  '"></span>'),
						i.html(s)),
						"progressbar" === e.type &&
							((s = e.renderProgressbar
								? e.renderProgressbar.call(this, e.progressbarFillClass)
								: '<span class="' + e.progressbarFillClass + '"></span>'),
							i.html(s)),
						"custom" !== e.type &&
							this.emit("paginationRender", this.pagination.$el[0]);
				}
			},
			init: function () {
				var e,
					t = this,
					i = t.params.pagination;
				i.el &&
					0 !== (e = E(i.el)).length &&
					(t.params.uniqueNavElements &&
						"string" == typeof i.el &&
						1 < e.length &&
						(e = t.$el.find(i.el)),
					"bullets" === i.type && i.clickable && e.addClass(i.clickableClass),
					e.addClass(i.modifierClass + i.type),
					"bullets" === i.type &&
						i.dynamicBullets &&
						(e.addClass("" + i.modifierClass + i.type + "-dynamic"),
						(t.pagination.dynamicBulletIndex = 0),
						i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
					"progressbar" === i.type &&
						i.progressbarOpposite &&
						e.addClass(i.progressbarOppositeClass),
					i.clickable &&
						e.on("click", "." + i.bulletClass, function (e) {
							e.preventDefault();
							e = E(this).index() * t.params.slidesPerGroup;
							t.params.loop && (e += t.loopedSlides), t.slideTo(e);
						}),
					U.extend(t.pagination, { $el: e, el: e[0] }));
			},
			destroy: function () {
				var e,
					t = this.params.pagination;
				t.el &&
					this.pagination.el &&
					this.pagination.$el &&
					0 !== this.pagination.$el.length &&
					((e = this.pagination.$el).removeClass(t.hiddenClass),
					e.removeClass(t.modifierClass + t.type),
					this.pagination.bullets &&
						this.pagination.bullets.removeClass(t.bulletActiveClass),
					t.clickable && e.off("click", "." + t.bulletClass));
			},
		},
		z = {
			setTranslate: function () {
				var e, t, i, s, a, n, r, o;
				this.params.scrollbar.el &&
					this.scrollbar.el &&
					((n = this.scrollbar),
					(e = this.rtlTranslate),
					(o = this.progress),
					(t = n.dragSize),
					(i = n.trackSize),
					(s = n.$dragEl),
					(a = n.$el),
					(n = this.params.scrollbar),
					(o = (i - (r = t)) * o),
					e
						? 0 < (o = -o)
							? ((r = t - o), (o = 0))
							: i < -o + t && (r = i + o)
						: o < 0
						? ((r = t + o), (o = 0))
						: i < o + t && (r = i - o),
					this.isHorizontal()
						? (s.transform("translate3d(" + o + "px, 0, 0)"),
						  (s[0].style.width = r + "px"))
						: (s.transform("translate3d(0px, " + o + "px, 0)"),
						  (s[0].style.height = r + "px")),
					n.hide &&
						(clearTimeout(this.scrollbar.timeout),
						(a[0].style.opacity = 1),
						(this.scrollbar.timeout = setTimeout(function () {
							(a[0].style.opacity = 0), a.transition(400);
						}, 1e3))));
			},
			setTransition: function (e) {
				this.params.scrollbar.el &&
					this.scrollbar.el &&
					this.scrollbar.$dragEl.transition(e);
			},
			updateSize: function () {
				var e, t, i, s, a, n, r;
				this.params.scrollbar.el &&
					this.scrollbar.el &&
					((t = (e = this.scrollbar).$dragEl),
					(i = e.$el),
					(t[0].style.width = ""),
					(t[0].style.height = ""),
					(s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
					(n = (a = this.size / this.virtualSize) * (s / this.size)),
					(r =
						"auto" === this.params.scrollbar.dragSize
							? s * a
							: parseInt(this.params.scrollbar.dragSize, 10)),
					this.isHorizontal()
						? (t[0].style.width = r + "px")
						: (t[0].style.height = r + "px"),
					(i[0].style.display = 1 <= a ? "none" : ""),
					this.params.scrollbar.hide && (i[0].style.opacity = 0),
					U.extend(e, {
						trackSize: s,
						divider: a,
						moveDivider: n,
						dragSize: r,
					}),
					e.$el[
						this.params.watchOverflow && this.isLocked
							? "addClass"
							: "removeClass"
					](this.params.scrollbar.lockClass));
			},
			getPointerPosition: function (e) {
				return this.isHorizontal()
					? ("touchstart" === e.type || "touchmove" === e.type
							? e.targetTouches[0]
							: e
					  ).clientX
					: ("touchstart" === e.type || "touchmove" === e.type
							? e.targetTouches[0]
							: e
					  ).clientY;
			},
			setDragPosition: function (e) {
				var t = this.scrollbar,
					i = this.rtlTranslate,
					s = t.$el,
					a = t.dragSize,
					n = t.trackSize,
					r = t.dragStartPos,
					t =
						(t.getPointerPosition(e) -
							s.offset()[this.isHorizontal() ? "left" : "top"] -
							(null !== r ? r : a / 2)) /
						(n - a),
					e =
						((t = Math.max(Math.min(t, 1), 0)),
						i && (t = 1 - t),
						this.minTranslate() +
							(this.maxTranslate() - this.minTranslate()) * t);
				this.updateProgress(e),
					this.setTranslate(e),
					this.updateActiveIndex(),
					this.updateSlidesClasses();
			},
			onDragStart: function (e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el,
					n = i.$dragEl;
				(this.scrollbar.isTouched = !0),
					(this.scrollbar.dragStartPos =
						e.target === n[0] || e.target === n
							? i.getPointerPosition(e) -
							  e.target.getBoundingClientRect()[
									this.isHorizontal() ? "left" : "top"
							  ]
							: null),
					e.preventDefault(),
					e.stopPropagation(),
					s.transition(100),
					n.transition(100),
					i.setDragPosition(e),
					clearTimeout(this.scrollbar.dragTimeout),
					a.transition(0),
					t.hide && a.css("opacity", 1),
					this.params.cssMode &&
						this.$wrapperEl.css("scroll-snap-type", "none"),
					this.emit("scrollbarDragStart", e);
			},
			onDragMove: function (e) {
				var t = this.scrollbar,
					i = this.$wrapperEl,
					s = t.$el,
					a = t.$dragEl;
				this.scrollbar.isTouched &&
					(e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
					t.setDragPosition(e),
					i.transition(0),
					s.transition(0),
					a.transition(0),
					this.emit("scrollbarDragMove", e));
			},
			onDragEnd: function (e) {
				var t = this.params.scrollbar,
					i = this.scrollbar,
					s = this.$wrapperEl,
					a = i.$el;
				this.scrollbar.isTouched &&
					((this.scrollbar.isTouched = !1),
					this.params.cssMode &&
						(this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
					t.hide &&
						(clearTimeout(this.scrollbar.dragTimeout),
						(this.scrollbar.dragTimeout = U.nextTick(function () {
							a.css("opacity", 0), a.transition(400);
						}, 1e3))),
					this.emit("scrollbarDragEnd", e),
					t.snapOnRelease && this.slideToClosest());
			},
			enableDraggable: function () {
				var e, t, i, s, a;
				this.params.scrollbar.el &&
					((i = this.scrollbar),
					(e = this.touchEventsTouch),
					(t = this.touchEventsDesktop),
					(a = this.params),
					(i = i.$el[0]),
					(s = !(!x.passiveListener || !a.passiveListeners) && {
						passive: !1,
						capture: !1,
					}),
					(a = !(!x.passiveListener || !a.passiveListeners) && {
						passive: !0,
						capture: !1,
					}),
					x.touch
						? (i.addEventListener(e.start, this.scrollbar.onDragStart, s),
						  i.addEventListener(e.move, this.scrollbar.onDragMove, s),
						  i.addEventListener(e.end, this.scrollbar.onDragEnd, a))
						: (i.addEventListener(t.start, this.scrollbar.onDragStart, s),
						  f.addEventListener(t.move, this.scrollbar.onDragMove, s),
						  f.addEventListener(t.end, this.scrollbar.onDragEnd, a)));
			},
			disableDraggable: function () {
				var e, t, i, s, a;
				this.params.scrollbar.el &&
					((i = this.scrollbar),
					(e = this.touchEventsTouch),
					(t = this.touchEventsDesktop),
					(a = this.params),
					(i = i.$el[0]),
					(s = !(!x.passiveListener || !a.passiveListeners) && {
						passive: !1,
						capture: !1,
					}),
					(a = !(!x.passiveListener || !a.passiveListeners) && {
						passive: !0,
						capture: !1,
					}),
					x.touch
						? (i.removeEventListener(e.start, this.scrollbar.onDragStart, s),
						  i.removeEventListener(e.move, this.scrollbar.onDragMove, s),
						  i.removeEventListener(e.end, this.scrollbar.onDragEnd, a))
						: (i.removeEventListener(t.start, this.scrollbar.onDragStart, s),
						  f.removeEventListener(t.move, this.scrollbar.onDragMove, s),
						  f.removeEventListener(t.end, this.scrollbar.onDragEnd, a)));
			},
			init: function () {
				var e, t, i, s;
				this.params.scrollbar.el &&
					((e = this.scrollbar),
					(s = this.$el),
					(i = E((t = this.params.scrollbar).el)),
					0 ===
						(s = (i =
							this.params.uniqueNavElements &&
							"string" == typeof t.el &&
							1 < i.length &&
							1 === s.find(t.el).length
								? s.find(t.el)
								: i).find("." + this.params.scrollbar.dragClass)).length &&
						((s = E(
							'<div class="' + this.params.scrollbar.dragClass + '"></div>'
						)),
						i.append(s)),
					U.extend(e, { $el: i, el: i[0], $dragEl: s, dragEl: s[0] }),
					t.draggable && e.enableDraggable());
			},
			destroy: function () {
				this.scrollbar.disableDraggable();
			},
		},
		J = {
			setTransform: function (e, t) {
				var i = this.rtl,
					e = E(e),
					i = i ? -1 : 1,
					s = e.attr("data-swiper-parallax") || "0",
					a = e.attr("data-swiper-parallax-x"),
					n = e.attr("data-swiper-parallax-y"),
					r = e.attr("data-swiper-parallax-scale"),
					o = e.attr("data-swiper-parallax-opacity");
				a || n
					? ((a = a || "0"), (n = n || "0"))
					: this.isHorizontal()
					? ((a = s), (n = "0"))
					: ((n = s), (a = "0")),
					(a =
						0 <= a.indexOf("%")
							? parseInt(a, 10) * t * i + "%"
							: a * t * i + "px"),
					(n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t + "%" : n * t + "px"),
					null != o &&
						((s = o - (o - 1) * (1 - Math.abs(t))), (e[0].style.opacity = s)),
					null == r
						? e.transform("translate3d(" + a + ", " + n + ", 0px)")
						: ((i = r - (r - 1) * (1 - Math.abs(t))),
						  e.transform(
								"translate3d(" + a + ", " + n + ", 0px) scale(" + i + ")"
						  ));
			},
			setTranslate: function () {
				var s = this,
					e = s.$el,
					t = s.slides,
					a = s.progress,
					n = s.snapGrid;
				e
					.children(
						"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
					)
					.each(function (e, t) {
						s.parallax.setTransform(t, a);
					}),
					t.each(function (e, t) {
						var i = t.progress;
						1 < s.params.slidesPerGroup &&
							"auto" !== s.params.slidesPerView &&
							(i += Math.ceil(e / 2) - a * (n.length - 1)),
							(i = Math.min(Math.max(i, -1), 1)),
							E(t)
								.find(
									"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
								)
								.each(function (e, t) {
									s.parallax.setTransform(t, i);
								});
					});
			},
			setTransition: function (s) {
				void 0 === s && (s = this.params.speed),
					this.$el
						.find(
							"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
						)
						.each(function (e, t) {
							var t = E(t),
								i = parseInt(t.attr("data-swiper-parallax-duration"), 10) || s;
							0 === s && (i = 0), t.transition(i);
						});
			},
		},
		ee = {
			getDistanceBetweenTouches: function (e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					i = e.targetTouches[0].pageY,
					s = e.targetTouches[1].pageX,
					e = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(s - t, 2) + Math.pow(e - i, 2));
			},
			onGestureStart: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (
					((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !x.gestures)
				) {
					if (
						"touchstart" !== e.type ||
						("touchstart" === e.type && e.targetTouches.length < 2)
					)
						return;
					(i.fakeGestureTouched = !0),
						(s.scaleStart = ee.getDistanceBetweenTouches(e));
				}
				(s.$slideEl && s.$slideEl.length) ||
				((s.$slideEl = E(e.target).closest("." + this.params.slideClass)),
				0 === s.$slideEl.length &&
					(s.$slideEl = this.slides.eq(this.activeIndex)),
				(s.$imageEl = s.$slideEl.find(
					"img, svg, canvas, picture, .swiper-zoom-target"
				)),
				(s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass)),
				(s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
				0 !== s.$imageWrapEl.length)
					? (s.$imageEl && s.$imageEl.transition(0), (this.zoom.isScaling = !0))
					: (s.$imageEl = void 0);
			},
			onGestureChange: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!x.gestures) {
					if (
						"touchmove" !== e.type ||
						("touchmove" === e.type && e.targetTouches.length < 2)
					)
						return;
					(i.fakeGestureMoved = !0),
						(s.scaleMove = ee.getDistanceBetweenTouches(e));
				}
				s.$imageEl &&
					0 !== s.$imageEl.length &&
					((i.scale = x.gestures
						? e.scale * i.currentScale
						: (s.scaleMove / s.scaleStart) * i.currentScale),
					i.scale > s.maxRatio &&
						(i.scale =
							s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
					i.scale < t.minRatio &&
						(i.scale =
							t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
					s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
			},
			onGestureEnd: function (e) {
				var t = this.params.zoom,
					i = this.zoom,
					s = i.gesture;
				if (!x.gestures) {
					if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
					if (
						"touchend" !== e.type ||
						("touchend" === e.type && e.changedTouches.length < 2 && !o.android)
					)
						return;
					(i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
				}
				s.$imageEl &&
					0 !== s.$imageEl.length &&
					((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
					s.$imageEl
						.transition(this.params.speed)
						.transform("translate3d(0,0,0) scale(" + i.scale + ")"),
					(i.currentScale = i.scale),
					(i.isScaling = !1),
					1 === i.scale && (s.$slideEl = void 0));
			},
			onTouchStart: function (e) {
				var t = this.zoom,
					i = t.gesture,
					t = t.image;
				i.$imageEl &&
					0 !== i.$imageEl.length &&
					!t.isTouched &&
					(o.android && e.cancelable && e.preventDefault(),
					(t.isTouched = !0),
					(t.touchesStart.x = (
						"touchstart" === e.type ? e.targetTouches[0] : e
					).pageX),
					(t.touchesStart.y = (
						"touchstart" === e.type ? e.targetTouches[0] : e
					).pageY));
			},
			onTouchMove: function (e) {
				var t = this.zoom,
					i = t.gesture,
					s = t.image,
					a = t.velocity;
				if (
					i.$imageEl &&
					0 !== i.$imageEl.length &&
					((this.allowClick = !1), s.isTouched && i.$slideEl)
				) {
					s.isMoved ||
						((s.width = i.$imageEl[0].offsetWidth),
						(s.height = i.$imageEl[0].offsetHeight),
						(s.startX = U.getTranslate(i.$imageWrapEl[0], "x") || 0),
						(s.startY = U.getTranslate(i.$imageWrapEl[0], "y") || 0),
						(i.slideWidth = i.$slideEl[0].offsetWidth),
						(i.slideHeight = i.$slideEl[0].offsetHeight),
						i.$imageWrapEl.transition(0),
						this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
					var n = s.width * t.scale,
						r = s.height * t.scale;
					if (!(n < i.slideWidth && r < i.slideHeight)) {
						if (
							((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
							(s.maxX = -s.minX),
							(s.minY = Math.min(i.slideHeight / 2 - r / 2, 0)),
							(s.maxY = -s.minY),
							(s.touchesCurrent.x = (
								"touchmove" === e.type ? e.targetTouches[0] : e
							).pageX),
							(s.touchesCurrent.y = (
								"touchmove" === e.type ? e.targetTouches[0] : e
							).pageY),
							!s.isMoved && !t.isScaling)
						) {
							if (
								this.isHorizontal() &&
								((Math.floor(s.minX) === Math.floor(s.startX) &&
									s.touchesCurrent.x < s.touchesStart.x) ||
									(Math.floor(s.maxX) === Math.floor(s.startX) &&
										s.touchesCurrent.x > s.touchesStart.x))
							)
								return void (s.isTouched = !1);
							if (
								!this.isHorizontal() &&
								((Math.floor(s.minY) === Math.floor(s.startY) &&
									s.touchesCurrent.y < s.touchesStart.y) ||
									(Math.floor(s.maxY) === Math.floor(s.startY) &&
										s.touchesCurrent.y > s.touchesStart.y))
							)
								return void (s.isTouched = !1);
						}
						e.cancelable && e.preventDefault(),
							e.stopPropagation(),
							(s.isMoved = !0),
							(s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
							(s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
							s.currentX < s.minX &&
								(s.currentX =
									s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
							s.currentX > s.maxX &&
								(s.currentX =
									s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
							s.currentY < s.minY &&
								(s.currentY =
									s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
							s.currentY > s.maxY &&
								(s.currentY =
									s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
							a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
							a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
							a.prevTime || (a.prevTime = Date.now()),
							(a.x =
								(s.touchesCurrent.x - a.prevPositionX) /
								(Date.now() - a.prevTime) /
								2),
							(a.y =
								(s.touchesCurrent.y - a.prevPositionY) /
								(Date.now() - a.prevTime) /
								2),
							Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
							Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
							(a.prevPositionX = s.touchesCurrent.x),
							(a.prevPositionY = s.touchesCurrent.y),
							(a.prevTime = Date.now()),
							i.$imageWrapEl.transform(
								"translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
							);
					}
				}
			},
			onTouchEnd: function () {
				var e = this.zoom,
					t = e.gesture,
					i = e.image,
					s = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!i.isTouched || !i.isMoved)
						return (i.isTouched = !1), void (i.isMoved = !1);
					(i.isTouched = !1), (i.isMoved = !1);
					var a = 300,
						n = 300,
						r = s.x * a,
						r = i.currentX + r,
						o = s.y * n,
						o = i.currentY + o,
						s =
							(0 !== s.x && (a = Math.abs((r - i.currentX) / s.x)),
							0 !== s.y && (n = Math.abs((o - i.currentY) / s.y)),
							Math.max(a, n)),
						a = ((i.currentX = r), (i.currentY = o), i.width * e.scale),
						n = i.height * e.scale;
					(i.minX = Math.min(t.slideWidth / 2 - a / 2, 0)),
						(i.maxX = -i.minX),
						(i.minY = Math.min(t.slideHeight / 2 - n / 2, 0)),
						(i.maxY = -i.minY),
						(i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
						(i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
						t.$imageWrapEl
							.transition(s)
							.transform(
								"translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
							);
				}
			},
			onTransitionEnd: function () {
				var e = this.zoom,
					t = e.gesture;
				t.$slideEl &&
					this.previousIndex !== this.activeIndex &&
					(t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
					t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
					(e.scale = 1),
					(e.currentScale = 1),
					(t.$slideEl = void 0),
					(t.$imageEl = void 0),
					(t.$imageWrapEl = void 0));
			},
			toggle: function (e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e);
			},
			in: function (e) {
				var t,
					i,
					s,
					a,
					n = this.zoom,
					r = this.params.zoom,
					o = n.gesture,
					l = n.image;
				o.$slideEl ||
					(this.params.virtual && this.params.virtual.enabled && this.virtual
						? (o.$slideEl = this.$wrapperEl.children(
								"." + this.params.slideActiveClass
						  ))
						: (o.$slideEl = this.slides.eq(this.activeIndex)),
					(o.$imageEl = o.$slideEl.find(
						"img, svg, canvas, picture, .swiper-zoom-target"
					)),
					(o.$imageWrapEl = o.$imageEl.parent("." + r.containerClass))),
					o.$imageEl &&
						0 !== o.$imageEl.length &&
						(o.$slideEl.addClass("" + r.zoomedSlideClass),
						(l =
							void 0 === l.touchesStart.x && e
								? ((t = ("touchend" === e.type ? e.changedTouches[0] : e)
										.pageX),
								  ("touchend" === e.type ? e.changedTouches[0] : e).pageY)
								: ((t = l.touchesStart.x), l.touchesStart.y)),
						(n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
						(n.currentScale =
							o.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio),
						e
							? ((r = o.$slideEl[0].offsetWidth),
							  (e = o.$slideEl[0].offsetHeight),
							  (t = o.$slideEl.offset().left + r / 2 - t),
							  (l = o.$slideEl.offset().top + e / 2 - l),
							  (s = o.$imageEl[0].offsetWidth),
							  (a = o.$imageEl[0].offsetHeight),
							  (s = s * n.scale),
							  (a = a * n.scale),
							  (s = -(r = Math.min(r / 2 - s / 2, 0))),
							  (a = -(e = Math.min(e / 2 - a / 2, 0))),
							  s < (i = (i = t * n.scale) < r ? r : i) && (i = s),
							  a < (s = (s = l * n.scale) < e ? e : s) && (s = a))
							: (s = i = 0),
						o.$imageWrapEl
							.transition(300)
							.transform("translate3d(" + i + "px, " + s + "px,0)"),
						o.$imageEl
							.transition(300)
							.transform("translate3d(0,0,0) scale(" + n.scale + ")"));
			},
			out: function () {
				var e = this.zoom,
					t = this.params.zoom,
					i = e.gesture;
				i.$slideEl ||
					(this.params.virtual && this.params.virtual.enabled && this.virtual
						? (i.$slideEl = this.$wrapperEl.children(
								"." + this.params.slideActiveClass
						  ))
						: (i.$slideEl = this.slides.eq(this.activeIndex)),
					(i.$imageEl = i.$slideEl.find(
						"img, svg, canvas, picture, .swiper-zoom-target"
					)),
					(i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
					i.$imageEl &&
						0 !== i.$imageEl.length &&
						((e.scale = 1),
						(e.currentScale = 1),
						i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
						i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
						i.$slideEl.removeClass("" + t.zoomedSlideClass),
						(i.$slideEl = void 0));
			},
			enable: function () {
				var e,
					t,
					i,
					s = this.zoom;
				s.enabled ||
					((s.enabled = !0),
					(e = !(
						"touchstart" !== this.touchEvents.start ||
						!x.passiveListener ||
						!this.params.passiveListeners
					) && { passive: !0, capture: !1 }),
					(t = !x.passiveListener || { passive: !1, capture: !0 }),
					(i = "." + this.params.slideClass),
					x.gestures
						? (this.$wrapperEl.on("gesturestart", i, s.onGestureStart, e),
						  this.$wrapperEl.on("gesturechange", i, s.onGestureChange, e),
						  this.$wrapperEl.on("gestureend", i, s.onGestureEnd, e))
						: "touchstart" === this.touchEvents.start &&
						  (this.$wrapperEl.on(
								this.touchEvents.start,
								i,
								s.onGestureStart,
								e
						  ),
						  this.$wrapperEl.on(
								this.touchEvents.move,
								i,
								s.onGestureChange,
								t
						  ),
						  this.$wrapperEl.on(this.touchEvents.end, i, s.onGestureEnd, e),
						  this.touchEvents.cancel &&
								this.$wrapperEl.on(
									this.touchEvents.cancel,
									i,
									s.onGestureEnd,
									e
								)),
					this.$wrapperEl.on(
						this.touchEvents.move,
						"." + this.params.zoom.containerClass,
						s.onTouchMove,
						t
					));
			},
			disable: function () {
				var e,
					t,
					i,
					s = this.zoom;
				s.enabled &&
					((this.zoom.enabled = !1),
					(e = !(
						"touchstart" !== this.touchEvents.start ||
						!x.passiveListener ||
						!this.params.passiveListeners
					) && { passive: !0, capture: !1 }),
					(t = !x.passiveListener || { passive: !1, capture: !0 }),
					(i = "." + this.params.slideClass),
					x.gestures
						? (this.$wrapperEl.off("gesturestart", i, s.onGestureStart, e),
						  this.$wrapperEl.off("gesturechange", i, s.onGestureChange, e),
						  this.$wrapperEl.off("gestureend", i, s.onGestureEnd, e))
						: "touchstart" === this.touchEvents.start &&
						  (this.$wrapperEl.off(
								this.touchEvents.start,
								i,
								s.onGestureStart,
								e
						  ),
						  this.$wrapperEl.off(
								this.touchEvents.move,
								i,
								s.onGestureChange,
								t
						  ),
						  this.$wrapperEl.off(this.touchEvents.end, i, s.onGestureEnd, e),
						  this.touchEvents.cancel &&
								this.$wrapperEl.off(
									this.touchEvents.cancel,
									i,
									s.onGestureEnd,
									e
								)),
					this.$wrapperEl.off(
						this.touchEvents.move,
						"." + this.params.zoom.containerClass,
						s.onTouchMove,
						t
					));
			},
		},
		te = {
			loadInSlide: function (e, l) {
				void 0 === l && (l = !0);
				var d,
					h = this,
					p = h.params.lazy;
				void 0 !== e &&
					0 !== h.slides.length &&
					((e = (d =
						h.virtual && h.params.virtual.enabled
							? h.$wrapperEl.children(
									"." +
										h.params.slideClass +
										'[data-swiper-slide-index="' +
										e +
										'"]'
							  )
							: h.slides.eq(e)).find(
						"." +
							p.elementClass +
							":not(." +
							p.loadedClass +
							"):not(." +
							p.loadingClass +
							")"
					)),
					0 !==
						(e =
							!d.hasClass(p.elementClass) ||
							d.hasClass(p.loadedClass) ||
							d.hasClass(p.loadingClass)
								? e
								: e.add(d[0])).length &&
						e.each(function (e, t) {
							var i = E(t),
								s = (i.addClass(p.loadingClass), i.attr("data-background")),
								a = i.attr("data-src"),
								n = i.attr("data-srcset"),
								r = i.attr("data-sizes"),
								o = i.parent("picture");
							h.loadImage(i[0], a || s, n, r, !1, function () {
								var e, t;
								null == h ||
									!h ||
									(h && !h.params) ||
									h.destroyed ||
									(s
										? (i.css("background-image", 'url("' + s + '")'),
										  i.removeAttr("data-background"))
										: (n && (i.attr("srcset", n), i.removeAttr("data-srcset")),
										  r && (i.attr("sizes", r), i.removeAttr("data-sizes")),
										  o.length &&
												o.children("source").each(function (e, t) {
													t = E(t);
													t.attr("data-srcset") &&
														(t.attr("srcset", t.attr("data-srcset")),
														t.removeAttr("data-srcset"));
												}),
										  a && (i.attr("src", a), i.removeAttr("data-src"))),
									i.addClass(p.loadedClass).removeClass(p.loadingClass),
									d.find("." + p.preloaderClass).remove(),
									h.params.loop &&
										l &&
										((e = d.attr("data-swiper-slide-index")),
										d.hasClass(h.params.slideDuplicateClass)
											? ((t = h.$wrapperEl.children(
													'[data-swiper-slide-index="' +
														e +
														'"]:not(.' +
														h.params.slideDuplicateClass +
														")"
											  )),
											  h.lazy.loadInSlide(t.index(), !1))
											: ((t = h.$wrapperEl.children(
													"." +
														h.params.slideDuplicateClass +
														'[data-swiper-slide-index="' +
														e +
														'"]'
											  )),
											  h.lazy.loadInSlide(t.index(), !1))),
									h.emit("lazyImageReady", d[0], i[0]),
									h.params.autoHeight && h.updateAutoHeight());
							}),
								h.emit("lazyImageLoad", d[0], i[0]);
						}));
			},
			load: function () {
				var i = this,
					t = i.$wrapperEl,
					s = i.params,
					a = i.slides,
					e = i.activeIndex,
					n = i.virtual && s.virtual.enabled,
					r = s.lazy,
					o = s.slidesPerView;
				function l(e) {
					if (n) {
						if (
							t.children(
								"." + s.slideClass + '[data-swiper-slide-index="' + e + '"]'
							).length
						)
							return 1;
					} else if (a[e]) return 1;
				}
				function d(e) {
					return n ? E(e).attr("data-swiper-slide-index") : E(e).index();
				}
				if (
					("auto" === o && (o = 0),
					i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
					i.params.watchSlidesVisibility)
				)
					t.children("." + s.slideVisibleClass).each(function (e, t) {
						t = n ? E(t).attr("data-swiper-slide-index") : E(t).index();
						i.lazy.loadInSlide(t);
					});
				else if (1 < o)
					for (var h = e; h < e + o; h += 1) l(h) && i.lazy.loadInSlide(h);
				else i.lazy.loadInSlide(e);
				if (r.loadPrevNext)
					if (1 < o || (r.loadPrevNextAmount && 1 < r.loadPrevNextAmount)) {
						for (
							var r = r.loadPrevNextAmount,
								p = o,
								c = Math.min(e + p + Math.max(r, p), a.length),
								p = Math.max(e - Math.max(p, r), 0),
								u = e + o;
							u < c;
							u += 1
						)
							l(u) && i.lazy.loadInSlide(u);
						for (var m = p; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
					} else {
						(r = t.children("." + s.slideNextClass)),
							(p =
								(0 < r.length && i.lazy.loadInSlide(d(r)),
								t.children("." + s.slidePrevClass)));
						0 < p.length && i.lazy.loadInSlide(d(p));
					}
			},
		},
		k = {
			LinearSpline: function (e, t) {
				var i, s, a, n, r;
				return (
					(this.x = e),
					(this.y = t),
					(this.lastIndex = e.length - 1),
					(this.interpolate = function (e) {
						return e
							? ((r = (function (e, t) {
									for (s = -1, i = e.length; 1 < i - s; )
										e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
									return i;
							  })(this.x, e)),
							  (n = r - 1),
							  ((e - this.x[n]) * (this.y[r] - this.y[n])) /
									(this.x[r] - this.x[n]) +
									this.y[n])
							: 0;
					}),
					this
				);
			},
			getInterpolateFunction: function (e) {
				this.controller.spline ||
					(this.controller.spline = this.params.loop
						? new k.LinearSpline(this.slidesGrid, e.slidesGrid)
						: new k.LinearSpline(this.snapGrid, e.snapGrid));
			},
			setTranslate: function (e, t) {
				var i,
					s,
					a = this,
					n = a.controller.control;
				function r(e) {
					var t = a.rtlTranslate ? -a.translate : a.translate;
					"slide" === a.params.controller.by &&
						(a.controller.getInterpolateFunction(e),
						(s = -a.controller.spline.interpolate(-t))),
						(s && "container" !== a.params.controller.by) ||
							((i =
								(e.maxTranslate() - e.minTranslate()) /
								(a.maxTranslate() - a.minTranslate())),
							(s = (t - a.minTranslate()) * i + e.minTranslate())),
						a.params.controller.inverse && (s = e.maxTranslate() - s),
						e.updateProgress(s),
						e.setTranslate(s, a),
						e.updateActiveIndex(),
						e.updateSlidesClasses();
				}
				if (Array.isArray(n))
					for (var o = 0; o < n.length; o += 1)
						n[o] !== t && n[o] instanceof c && r(n[o]);
				else n instanceof c && t !== n && r(n);
			},
			setTransition: function (t, e) {
				var i,
					s = this,
					a = s.controller.control;
				function n(e) {
					e.setTransition(t, s),
						0 !== t &&
							(e.transitionStart(),
							e.params.autoHeight &&
								U.nextTick(function () {
									e.updateAutoHeight();
								}),
							e.$wrapperEl.transitionEnd(function () {
								a &&
									(e.params.loop &&
										"slide" === s.params.controller.by &&
										e.loopFix(),
									e.transitionEnd());
							}));
				}
				if (Array.isArray(a))
					for (i = 0; i < a.length; i += 1)
						a[i] !== e && a[i] instanceof c && n(a[i]);
				else a instanceof c && e !== a && n(a);
			},
		},
		ie = {
			makeElFocusable: function (e) {
				return e.attr("tabIndex", "0"), e;
			},
			makeElNotFocusable: function (e) {
				return e.attr("tabIndex", "-1"), e;
			},
			addElRole: function (e, t) {
				return e.attr("role", t), e;
			},
			addElLabel: function (e, t) {
				return e.attr("aria-label", t), e;
			},
			disableEl: function (e) {
				return e.attr("aria-disabled", !0), e;
			},
			enableEl: function (e) {
				return e.attr("aria-disabled", !1), e;
			},
			onEnterKey: function (e) {
				var t = this.params.a11y;
				13 === e.keyCode &&
					((e = E(e.target)),
					this.navigation &&
						this.navigation.$nextEl &&
						e.is(this.navigation.$nextEl) &&
						((this.isEnd && !this.params.loop) || this.slideNext(),
						this.isEnd
							? this.a11y.notify(t.lastSlideMessage)
							: this.a11y.notify(t.nextSlideMessage)),
					this.navigation &&
						this.navigation.$prevEl &&
						e.is(this.navigation.$prevEl) &&
						((this.isBeginning && !this.params.loop) || this.slidePrev(),
						this.isBeginning
							? this.a11y.notify(t.firstSlideMessage)
							: this.a11y.notify(t.prevSlideMessage)),
					this.pagination &&
						e.is("." + this.params.pagination.bulletClass) &&
						e[0].click());
			},
			notify: function (e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e));
			},
			updateNavigation: function () {
				var e, t;
				!this.params.loop &&
					this.navigation &&
					((e = (t = this.navigation).$nextEl),
					(t = t.$prevEl) &&
						0 < t.length &&
						(this.isBeginning
							? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
							: (this.a11y.enableEl(t), this.a11y.makeElFocusable(t))),
					e &&
						0 < e.length &&
						(this.isEnd
							? (this.a11y.disableEl(e), this.a11y.makeElNotFocusable(e))
							: (this.a11y.enableEl(e), this.a11y.makeElFocusable(e))));
			},
			updatePagination: function () {
				var i = this,
					s = i.params.a11y;
				i.pagination &&
					i.params.pagination.clickable &&
					i.pagination.bullets &&
					i.pagination.bullets.length &&
					i.pagination.bullets.each(function (e, t) {
						t = E(t);
						i.a11y.makeElFocusable(t),
							i.a11y.addElRole(t, "button"),
							i.a11y.addElLabel(
								t,
								s.paginationBulletMessage.replace(
									/\{\{index\}\}/,
									t.index() + 1
								)
							);
					});
			},
			init: function () {
				this.$el.append(this.a11y.liveRegion);
				var e,
					t,
					i = this.params.a11y;
				this.navigation &&
					this.navigation.$nextEl &&
					(e = this.navigation.$nextEl),
					this.navigation &&
						this.navigation.$prevEl &&
						(t = this.navigation.$prevEl),
					e &&
						(this.a11y.makeElFocusable(e),
						this.a11y.addElRole(e, "button"),
						this.a11y.addElLabel(e, i.nextSlideMessage),
						e.on("keydown", this.a11y.onEnterKey)),
					t &&
						(this.a11y.makeElFocusable(t),
						this.a11y.addElRole(t, "button"),
						this.a11y.addElLabel(t, i.prevSlideMessage),
						t.on("keydown", this.a11y.onEnterKey)),
					this.pagination &&
						this.params.pagination.clickable &&
						this.pagination.bullets &&
						this.pagination.bullets.length &&
						this.pagination.$el.on(
							"keydown",
							"." + this.params.pagination.bulletClass,
							this.a11y.onEnterKey
						);
			},
			destroy: function () {
				var e, t;
				this.a11y.liveRegion &&
					0 < this.a11y.liveRegion.length &&
					this.a11y.liveRegion.remove(),
					this.navigation &&
						this.navigation.$nextEl &&
						(e = this.navigation.$nextEl),
					this.navigation &&
						this.navigation.$prevEl &&
						(t = this.navigation.$prevEl),
					e && e.off("keydown", this.a11y.onEnterKey),
					t && t.off("keydown", this.a11y.onEnterKey),
					this.pagination &&
						this.params.pagination.clickable &&
						this.pagination.bullets &&
						this.pagination.bullets.length &&
						this.pagination.$el.off(
							"keydown",
							"." + this.params.pagination.bulletClass,
							this.a11y.onEnterKey
						);
			},
		},
		$ = {
			init: function () {
				if (this.params.history) {
					if (!K.history || !K.history.pushState)
						return (
							(this.params.history.enabled = !1),
							void (this.params.hashNavigation.enabled = !0)
						);
					var e = this.history;
					(e.initialized = !0),
						(e.paths = $.getPathValues()),
						(e.paths.key || e.paths.value) &&
							(e.scrollToSlide(
								0,
								e.paths.value,
								this.params.runCallbacksOnInit
							),
							this.params.history.replaceState ||
								K.addEventListener(
									"popstate",
									this.history.setHistoryPopState
								));
				}
			},
			destroy: function () {
				this.params.history.replaceState ||
					K.removeEventListener("popstate", this.history.setHistoryPopState);
			},
			setHistoryPopState: function () {
				(this.history.paths = $.getPathValues()),
					this.history.scrollToSlide(
						this.params.speed,
						this.history.paths.value,
						!1
					);
			},
			getPathValues: function () {
				var e = K.location.pathname
						.slice(1)
						.split("/")
						.filter(function (e) {
							return "" !== e;
						}),
					t = e.length;
				return { key: e[t - 2], value: e[t - 1] };
			},
			setHistory: function (e, t) {
				this.history.initialized &&
					this.params.history.enabled &&
					((t = this.slides.eq(t)),
					(t = $.slugify(t.attr("data-history"))),
					K.location.pathname.includes(e) || (t = e + "/" + t),
					((e = K.history.state) && e.value === t) ||
						(this.params.history.replaceState
							? K.history.replaceState({ value: t }, null, t)
							: K.history.pushState({ value: t }, null, t)));
			},
			slugify: function (e) {
				return e
					.toString()
					.replace(/\s+/g, "-")
					.replace(/[^\w-]+/g, "")
					.replace(/--+/g, "-")
					.replace(/^-+/, "")
					.replace(/-+$/, "");
			},
			scrollToSlide: function (e, t, i) {
				if (t)
					for (var s = 0, a = this.slides.length; s < a; s += 1) {
						var n = this.slides.eq(s);
						$.slugify(n.attr("data-history")) !== t ||
							n.hasClass(this.params.slideDuplicateClass) ||
							((n = n.index()), this.slideTo(n, e, i));
					}
				else this.slideTo(0, e, i);
			},
		},
		L = {
			onHashCange: function () {
				this.emit("hashChange");
				var e = f.location.hash.replace("#", "");
				e !== this.slides.eq(this.activeIndex).attr("data-hash") &&
					void 0 !==
						(e = this.$wrapperEl
							.children(
								"." + this.params.slideClass + '[data-hash="' + e + '"]'
							)
							.index()) &&
					this.slideTo(e);
			},
			setHash: function () {
				var e;
				this.hashNavigation.initialized &&
					this.params.hashNavigation.enabled &&
					(this.params.hashNavigation.replaceState &&
					K.history &&
					K.history.replaceState
						? K.history.replaceState(
								null,
								null,
								"#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
						  )
						: ((e =
								(e = this.slides.eq(this.activeIndex)).attr("data-hash") ||
								e.attr("data-history")),
						  (f.location.hash = e || "")),
					this.emit("hashSet"));
			},
			init: function () {
				if (
					!(
						!this.params.hashNavigation.enabled ||
						(this.params.history && this.params.history.enabled)
					)
				) {
					this.hashNavigation.initialized = !0;
					var e = f.location.hash.replace("#", "");
					if (e)
						for (var t = 0, i = this.slides.length; t < i; t += 1) {
							var s = this.slides.eq(t);
							(s.attr("data-hash") || s.attr("data-history")) !== e ||
								s.hasClass(this.params.slideDuplicateClass) ||
								((s = s.index()),
								this.slideTo(s, 0, this.params.runCallbacksOnInit, !0));
						}
					this.params.hashNavigation.watchState &&
						E(K).on("hashchange", this.hashNavigation.onHashCange);
				}
			},
			destroy: function () {
				this.params.hashNavigation.watchState &&
					E(K).off("hashchange", this.hashNavigation.onHashCange);
			},
		},
		I = {
			run: function () {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					i = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") &&
					(i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
					clearTimeout(e.autoplay.timeout),
					(e.autoplay.timeout = U.nextTick(function () {
						e.params.autoplay.reverseDirection
							? e.params.loop
								? (e.loopFix(),
								  e.slidePrev(e.params.speed, !0, !0),
								  e.emit("autoplay"))
								: e.isBeginning
								? e.params.autoplay.stopOnLastSlide
									? e.autoplay.stop()
									: (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
									  e.emit("autoplay"))
								: (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
							: e.params.loop
							? (e.loopFix(),
							  e.slideNext(e.params.speed, !0, !0),
							  e.emit("autoplay"))
							: e.isEnd
							? e.params.autoplay.stopOnLastSlide
								? e.autoplay.stop()
								: (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
							: (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
							e.params.cssMode && e.autoplay.running && e.autoplay.run();
					}, i));
			},
			start: function () {
				return (
					void 0 === this.autoplay.timeout &&
					!this.autoplay.running &&
					((this.autoplay.running = !0),
					this.emit("autoplayStart"),
					this.autoplay.run(),
					!0)
				);
			},
			stop: function () {
				return (
					!!this.autoplay.running &&
					void 0 !== this.autoplay.timeout &&
					(this.autoplay.timeout &&
						(clearTimeout(this.autoplay.timeout),
						(this.autoplay.timeout = void 0)),
					(this.autoplay.running = !1),
					this.emit("autoplayStop"),
					!0)
				);
			},
			pause: function (e) {
				!this.autoplay.running ||
					this.autoplay.paused ||
					(this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
					(this.autoplay.paused = !0),
					0 !== e && this.params.autoplay.waitForTransition
						? (this.$wrapperEl[0].addEventListener(
								"transitionend",
								this.autoplay.onTransitionEnd
						  ),
						  this.$wrapperEl[0].addEventListener(
								"webkitTransitionEnd",
								this.autoplay.onTransitionEnd
						  ))
						: ((this.autoplay.paused = !1), this.autoplay.run()));
			},
		},
		se = {
			setTranslate: function () {
				for (var e = this.slides, t = 0; t < e.length; t += 1) {
					var i = this.slides.eq(t),
						s = -i[0].swiperSlideOffset,
						a = (this.params.virtualTranslate || (s -= this.translate), 0),
						n =
							(this.isHorizontal() || ((a = s), (s = 0)),
							this.params.fadeEffect.crossFade
								? Math.max(1 - Math.abs(i[0].progress), 0)
								: 1 + Math.min(Math.max(i[0].progress, -1), 0));
					i.css({ opacity: n }).transform(
						"translate3d(" + s + "px, " + a + "px, 0px)"
					);
				}
			},
			setTransition: function (e) {
				var i,
					s = this,
					t = s.slides,
					a = s.$wrapperEl;
				t.transition(e),
					s.params.virtualTranslate &&
						0 !== e &&
						((i = !1),
						t.transitionEnd(function () {
							if (!i && s && !s.destroyed) {
								(i = !0), (s.animating = !1);
								for (
									var e = ["webkitTransitionEnd", "transitionend"], t = 0;
									t < e.length;
									t += 1
								)
									a.trigger(e[t]);
							}
						}));
			},
		},
		ae = {
			setTranslate: function () {
				var e,
					t = this.$el,
					i = this.$wrapperEl,
					s = this.slides,
					a = this.width,
					n = this.height,
					r = this.rtlTranslate,
					o = this.size,
					l = this.params.cubeEffect,
					d = this.isHorizontal(),
					h = this.virtual && this.params.virtual.enabled,
					p = 0;
				l.shadow &&
					(d
						? (0 === (e = i.find(".swiper-cube-shadow")).length &&
								((e = E('<div class="swiper-cube-shadow"></div>')),
								i.append(e)),
						  e.css({ height: a + "px" }))
						: 0 === (e = t.find(".swiper-cube-shadow")).length &&
						  ((e = E('<div class="swiper-cube-shadow"></div>')), t.append(e)));
				for (var c, u = 0; u < s.length; u += 1) {
					var m = s.eq(u),
						v = u,
						f =
							90 *
							(v = h ? parseInt(m.attr("data-swiper-slide-index"), 10) : v),
						g = Math.floor(f / 360),
						b =
							(r && ((f = -f), (g = Math.floor(-f / 360))),
							Math.max(Math.min(m[0].progress, 1), -1)),
						w = 0,
						y = 0,
						x = 0,
						g =
							(v % 4 == 0
								? ((w = 4 * -g * o), (x = 0))
								: (v - 1) % 4 == 0
								? ((w = 0), (x = 4 * -g * o))
								: (v - 2) % 4 == 0
								? ((w = o + 4 * g * o), (x = o))
								: (v - 3) % 4 == 0 && ((w = -o), (x = 3 * o + 4 * o * g)),
							r && (w = -w),
							d || ((y = w), (w = 0)),
							"rotateX(" +
								(d ? 0 : -f) +
								"deg) rotateY(" +
								(d ? f : 0) +
								"deg) translate3d(" +
								w +
								"px, " +
								y +
								"px, " +
								x +
								"px)");
					b <= 1 && -1 < b && (p = r ? 90 * -v - 90 * b : 90 * v + 90 * b),
						m.transform(g),
						l.slideShadows &&
							((f = d
								? m.find(".swiper-slide-shadow-left")
								: m.find(".swiper-slide-shadow-top")),
							(w = d
								? m.find(".swiper-slide-shadow-right")
								: m.find(".swiper-slide-shadow-bottom")),
							0 === f.length &&
								((f = E(
									'<div class="swiper-slide-shadow-' +
										(d ? "left" : "top") +
										'"></div>'
								)),
								m.append(f)),
							0 === w.length &&
								((w = E(
									'<div class="swiper-slide-shadow-' +
										(d ? "right" : "bottom") +
										'"></div>'
								)),
								m.append(w)),
							f.length && (f[0].style.opacity = Math.max(-b, 0)),
							w.length && (w[0].style.opacity = Math.max(b, 0)));
				}
				i.css({
					"-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
					"-moz-transform-origin": "50% 50% -" + o / 2 + "px",
					"-ms-transform-origin": "50% 50% -" + o / 2 + "px",
					"transform-origin": "50% 50% -" + o / 2 + "px",
				}),
					l.shadow &&
						(d
							? e.transform(
									"translate3d(0px, " +
										(a / 2 + l.shadowOffset) +
										"px, " +
										-a / 2 +
										"px) rotateX(90deg) rotateZ(0deg) scale(" +
										l.shadowScale +
										")"
							  )
							: ((t = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90)),
							  (a =
									1.5 -
									(Math.sin((2 * t * Math.PI) / 360) / 2 +
										Math.cos((2 * t * Math.PI) / 360) / 2)),
							  (t = l.shadowScale),
							  (a = l.shadowScale / a),
							  (c = l.shadowOffset),
							  e.transform(
									"scale3d(" +
										t +
										", 1, " +
										a +
										") translate3d(0px, " +
										(n / 2 + c) +
										"px, " +
										-n / 2 / a +
										"px) rotateX(-90deg)"
							  ))),
					i.transform(
						"translate3d(0px,0," +
							(T.isSafari || T.isWebView ? -o / 2 : 0) +
							"px) rotateX(" +
							(this.isHorizontal() ? 0 : p) +
							"deg) rotateY(" +
							(this.isHorizontal() ? -p : 0) +
							"deg)"
					);
			},
			setTransition: function (e) {
				var t = this.$el;
				this.slides
					.transition(e)
					.find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
					)
					.transition(e),
					this.params.cubeEffect.shadow &&
						!this.isHorizontal() &&
						t.find(".swiper-cube-shadow").transition(e);
			},
		},
		ne = {
			setTranslate: function () {
				for (
					var e = this.slides, t = this.rtlTranslate, i = 0;
					i < e.length;
					i += 1
				) {
					var s,
						a,
						n = e.eq(i),
						r = n[0].progress,
						o =
							-180 *
							(r = this.params.flipEffect.limitRotation
								? Math.max(Math.min(n[0].progress, 1), -1)
								: r),
						l = 0,
						d = -n[0].swiperSlideOffset,
						h = 0;
					this.isHorizontal()
						? t && (o = -o)
						: ((h = d), (l = -o), (o = d = 0)),
						(n[0].style.zIndex = -Math.abs(Math.round(r)) + e.length),
						this.params.flipEffect.slideShadows &&
							((s = this.isHorizontal()
								? n.find(".swiper-slide-shadow-left")
								: n.find(".swiper-slide-shadow-top")),
							(a = this.isHorizontal()
								? n.find(".swiper-slide-shadow-right")
								: n.find(".swiper-slide-shadow-bottom")),
							0 === s.length &&
								((s = E(
									'<div class="swiper-slide-shadow-' +
										(this.isHorizontal() ? "left" : "top") +
										'"></div>'
								)),
								n.append(s)),
							0 === a.length &&
								((a = E(
									'<div class="swiper-slide-shadow-' +
										(this.isHorizontal() ? "right" : "bottom") +
										'"></div>'
								)),
								n.append(a)),
							s.length && (s[0].style.opacity = Math.max(-r, 0)),
							a.length && (a[0].style.opacity = Math.max(r, 0))),
						n.transform(
							"translate3d(" +
								d +
								"px, " +
								h +
								"px, 0px) rotateX(" +
								l +
								"deg) rotateY(" +
								o +
								"deg)"
						);
				}
			},
			setTransition: function (e) {
				var i,
					s = this,
					t = s.slides,
					a = s.activeIndex,
					n = s.$wrapperEl;
				t
					.transition(e)
					.find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
					)
					.transition(e),
					s.params.virtualTranslate &&
						0 !== e &&
						((i = !1),
						t.eq(a).transitionEnd(function () {
							if (!i && s && !s.destroyed) {
								(i = !0), (s.animating = !1);
								for (
									var e = ["webkitTransitionEnd", "transitionend"], t = 0;
									t < e.length;
									t += 1
								)
									n.trigger(e[t]);
							}
						}));
			},
		},
		re = {
			setTranslate: function () {
				for (
					var e = this.width,
						t = this.height,
						i = this.slides,
						s = this.$wrapperEl,
						a = this.slidesSizesGrid,
						n = this.params.coverflowEffect,
						r = this.isHorizontal(),
						o = this.translate,
						l = r ? e / 2 - o : t / 2 - o,
						d = r ? n.rotate : -n.rotate,
						h = n.depth,
						p = 0,
						c = i.length;
					p < c;
					p += 1
				) {
					var u = i.eq(p),
						m = a[p],
						v = ((l - u[0].swiperSlideOffset - m / 2) / m) * n.modifier,
						f = r ? d * v : 0,
						g = r ? 0 : d * v,
						b = -h * Math.abs(v),
						w = n.stretch,
						m =
							("string" == typeof w &&
								-1 !== w.indexOf("%") &&
								(w = (parseFloat(n.stretch) / 100) * m),
							r ? 0 : w * v),
						w = r ? w * v : 0,
						y = 1 - (1 - n.scale) * Math.abs(v),
						w =
							(Math.abs(w) < 0.001 && (w = 0),
							Math.abs(m) < 0.001 && (m = 0),
							Math.abs(b) < 0.001 && (b = 0),
							Math.abs(f) < 0.001 && (f = 0),
							"translate3d(" +
								w +
								"px," +
								m +
								"px," +
								b +
								"px)  rotateX(" +
								(g = Math.abs(g) < 0.001 ? 0 : g) +
								"deg) rotateY(" +
								f +
								"deg) scale(" +
								(y = Math.abs(y) < 0.001 ? 0 : y) +
								")");
					u.transform(w),
						(u[0].style.zIndex = 1 - Math.abs(Math.round(v))),
						n.slideShadows &&
							((m = r
								? u.find(".swiper-slide-shadow-left")
								: u.find(".swiper-slide-shadow-top")),
							(b = r
								? u.find(".swiper-slide-shadow-right")
								: u.find(".swiper-slide-shadow-bottom")),
							0 === m.length &&
								((m = E(
									'<div class="swiper-slide-shadow-' +
										(r ? "left" : "top") +
										'"></div>'
								)),
								u.append(m)),
							0 === b.length &&
								((b = E(
									'<div class="swiper-slide-shadow-' +
										(r ? "right" : "bottom") +
										'"></div>'
								)),
								u.append(b)),
							m.length && (m[0].style.opacity = 0 < v ? v : 0),
							b.length && (b[0].style.opacity = 0 < -v ? -v : 0));
				}
				(x.pointerEvents || x.prefixedPointerEvents) &&
					(s[0].style.perspectiveOrigin = l + "px 50%");
			},
			setTransition: function (e) {
				this.slides
					.transition(e)
					.find(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
					)
					.transition(e);
			},
		},
		oe = {
			init: function () {
				var e = this.params.thumbs,
					t = this.constructor;
				e.swiper instanceof t
					? ((this.thumbs.swiper = e.swiper),
					  U.extend(this.thumbs.swiper.originalParams, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
					  }),
					  U.extend(this.thumbs.swiper.params, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
					  }))
					: U.isObject(e.swiper) &&
					  ((this.thumbs.swiper = new t(
							U.extend({}, e.swiper, {
								watchSlidesVisibility: !0,
								watchSlidesProgress: !0,
								slideToClickedSlide: !1,
							})
					  )),
					  (this.thumbs.swiperCreated = !0)),
					this.thumbs.swiper.$el.addClass(
						this.params.thumbs.thumbsContainerClass
					),
					this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
			},
			onThumbClick: function () {
				var e,
					t,
					i,
					s = this.thumbs.swiper;
				s &&
					((e = s.clickedIndex),
					((i = s.clickedSlide) &&
						E(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
						null == e ||
						((i = s.params.loop
							? parseInt(E(s.clickedSlide).attr("data-swiper-slide-index"), 10)
							: e),
						this.params.loop &&
							((s = this.activeIndex),
							this.slides.eq(s).hasClass(this.params.slideDuplicateClass) &&
								(this.loopFix(),
								(this._clientLeft = this.$wrapperEl[0].clientLeft),
								(s = this.activeIndex)),
							(e = this.slides
								.eq(s)
								.prevAll('[data-swiper-slide-index="' + i + '"]')
								.eq(0)
								.index()),
							(t = this.slides
								.eq(s)
								.nextAll('[data-swiper-slide-index="' + i + '"]')
								.eq(0)
								.index()),
							(i = void 0 === e || (void 0 !== t && t - s < s - e) ? t : e)),
						this.slideTo(i)));
			},
			update: function (e) {
				var t = this.thumbs.swiper;
				if (t) {
					var i,
						s,
						a,
						n =
							"auto" === t.params.slidesPerView
								? t.slidesPerViewDynamic()
								: t.params.slidesPerView,
						r = this.params.thumbs.autoScrollOffset,
						o = r && !t.params.loop,
						l =
							((this.realIndex === t.realIndex && !o) ||
								((i = t.activeIndex),
								(a = t.params.loop
									? (t.slides.eq(i).hasClass(t.params.slideDuplicateClass) &&
											(t.loopFix(),
											(t._clientLeft = t.$wrapperEl[0].clientLeft),
											(i = t.activeIndex)),
									  (a = t.slides
											.eq(i)
											.prevAll(
												'[data-swiper-slide-index="' + this.realIndex + '"]'
											)
											.eq(0)
											.index()),
									  (s = t.slides
											.eq(i)
											.nextAll(
												'[data-swiper-slide-index="' + this.realIndex + '"]'
											)
											.eq(0)
											.index()),
									  (s =
											void 0 === a
												? s
												: void 0 === s
												? a
												: s - i == i - a
												? i
												: s - i < i - a
												? s
												: a),
									  this.activeIndex > this.previousIndex ? "next" : "prev")
									: (s = this.realIndex) > this.previousIndex
									? "next"
									: "prev"),
								o && (s += "next" === a ? r : -1 * r),
								t.visibleSlidesIndexes &&
									t.visibleSlidesIndexes.indexOf(s) < 0 &&
									(t.params.centeredSlides
										? (s =
												i < s
													? s - Math.floor(n / 2) + 1
													: s + Math.floor(n / 2) - 1)
										: i < s && (s = s - n + 1),
									t.slideTo(s, e ? 0 : void 0))),
							1),
						d = this.params.thumbs.slideThumbActiveClass;
					if (
						(1 < this.params.slidesPerView &&
							!this.params.centeredSlides &&
							(l = this.params.slidesPerView),
						this.params.thumbs.multipleActiveThumbs || (l = 1),
						(l = Math.floor(l)),
						t.slides.removeClass(d),
						t.params.loop || (t.params.virtual && t.params.virtual.enabled))
					)
						for (var h = 0; h < l; h += 1)
							t.$wrapperEl
								.children(
									'[data-swiper-slide-index="' + (this.realIndex + h) + '"]'
								)
								.addClass(d);
					else
						for (var p = 0; p < l; p += 1)
							t.slides.eq(this.realIndex + p).addClass(d);
				}
			},
		},
		O = [
			u,
			_,
			Z,
			m,
			g,
			w,
			y,
			{
				name: "mousewheel",
				params: {
					mousewheel: {
						enabled: !1,
						releaseOnEdges: !1,
						invert: !1,
						forceToAxis: !1,
						sensitivity: 1,
						eventsTarged: "container",
					},
				},
				create: function () {
					U.extend(this, {
						mousewheel: {
							enabled: !1,
							enable: C.enable.bind(this),
							disable: C.disable.bind(this),
							handle: C.handle.bind(this),
							handleMouseEnter: C.handleMouseEnter.bind(this),
							handleMouseLeave: C.handleMouseLeave.bind(this),
							animateSlider: C.animateSlider.bind(this),
							releaseScroll: C.releaseScroll.bind(this),
							lastScrollTime: U.now(),
							lastEventBeforeSnap: void 0,
							recentWheelEvents: [],
						},
					});
				},
				on: {
					init: function () {
						!this.params.mousewheel.enabled &&
							this.params.cssMode &&
							this.mousewheel.disable(),
							this.params.mousewheel.enabled && this.mousewheel.enable();
					},
					destroy: function () {
						this.params.cssMode && this.mousewheel.enable(),
							this.mousewheel.enabled && this.mousewheel.disable();
					},
				},
			},
			{
				name: "navigation",
				params: {
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock",
					},
				},
				create: function () {
					U.extend(this, {
						navigation: {
							init: M.init.bind(this),
							update: M.update.bind(this),
							destroy: M.destroy.bind(this),
							onNextClick: M.onNextClick.bind(this),
							onPrevClick: M.onPrevClick.bind(this),
						},
					});
				},
				on: {
					init: function () {
						this.navigation.init(), this.navigation.update();
					},
					toEdge: function () {
						this.navigation.update();
					},
					fromEdge: function () {
						this.navigation.update();
					},
					destroy: function () {
						this.navigation.destroy();
					},
					click: function (e) {
						var t,
							i = this.navigation,
							s = i.$nextEl,
							i = i.$prevEl;
						!this.params.navigation.hideOnClick ||
							E(e.target).is(i) ||
							E(e.target).is(s) ||
							(s
								? (t = s.hasClass(this.params.navigation.hiddenClass))
								: i && (t = i.hasClass(this.params.navigation.hiddenClass)),
							!0 === t
								? this.emit("navigationShow", this)
								: this.emit("navigationHide", this),
							s && s.toggleClass(this.params.navigation.hiddenClass),
							i && i.toggleClass(this.params.navigation.hiddenClass));
					},
				},
			},
			{
				name: "pagination",
				params: {
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: function (e) {
							return e;
						},
						formatFractionTotal: function (e) {
							return e;
						},
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						modifierClass: "swiper-pagination-",
						currentClass: "swiper-pagination-current",
						totalClass: "swiper-pagination-total",
						hiddenClass: "swiper-pagination-hidden",
						progressbarFillClass: "swiper-pagination-progressbar-fill",
						progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
						clickableClass: "swiper-pagination-clickable",
						lockClass: "swiper-pagination-lock",
					},
				},
				create: function () {
					U.extend(this, {
						pagination: {
							init: P.init.bind(this),
							render: P.render.bind(this),
							update: P.update.bind(this),
							destroy: P.destroy.bind(this),
							dynamicBulletIndex: 0,
						},
					});
				},
				on: {
					init: function () {
						this.pagination.init(),
							this.pagination.render(),
							this.pagination.update();
					},
					activeIndexChange: function () {
						(!this.params.loop && void 0 !== this.snapIndex) ||
							this.pagination.update();
					},
					snapIndexChange: function () {
						this.params.loop || this.pagination.update();
					},
					slidesLengthChange: function () {
						this.params.loop &&
							(this.pagination.render(), this.pagination.update());
					},
					snapGridLengthChange: function () {
						this.params.loop ||
							(this.pagination.render(), this.pagination.update());
					},
					destroy: function () {
						this.pagination.destroy();
					},
					click: function (e) {
						this.params.pagination.el &&
							this.params.pagination.hideOnClick &&
							0 < this.pagination.$el.length &&
							!E(e.target).hasClass(this.params.pagination.bulletClass) &&
							(!0 ===
							this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
								? this.emit("paginationShow", this)
								: this.emit("paginationHide", this),
							this.pagination.$el.toggleClass(
								this.params.pagination.hiddenClass
							));
					},
				},
			},
			{
				name: "scrollbar",
				params: {
					scrollbar: {
						el: null,
						dragSize: "auto",
						hide: !1,
						draggable: !1,
						snapOnRelease: !0,
						lockClass: "swiper-scrollbar-lock",
						dragClass: "swiper-scrollbar-drag",
					},
				},
				create: function () {
					U.extend(this, {
						scrollbar: {
							init: z.init.bind(this),
							destroy: z.destroy.bind(this),
							updateSize: z.updateSize.bind(this),
							setTranslate: z.setTranslate.bind(this),
							setTransition: z.setTransition.bind(this),
							enableDraggable: z.enableDraggable.bind(this),
							disableDraggable: z.disableDraggable.bind(this),
							setDragPosition: z.setDragPosition.bind(this),
							getPointerPosition: z.getPointerPosition.bind(this),
							onDragStart: z.onDragStart.bind(this),
							onDragMove: z.onDragMove.bind(this),
							onDragEnd: z.onDragEnd.bind(this),
							isTouched: !1,
							timeout: null,
							dragTimeout: null,
						},
					});
				},
				on: {
					init: function () {
						this.scrollbar.init(),
							this.scrollbar.updateSize(),
							this.scrollbar.setTranslate();
					},
					update: function () {
						this.scrollbar.updateSize();
					},
					resize: function () {
						this.scrollbar.updateSize();
					},
					observerUpdate: function () {
						this.scrollbar.updateSize();
					},
					setTranslate: function () {
						this.scrollbar.setTranslate();
					},
					setTransition: function (e) {
						this.scrollbar.setTransition(e);
					},
					destroy: function () {
						this.scrollbar.destroy();
					},
				},
			},
			{
				name: "parallax",
				params: { parallax: { enabled: !1 } },
				create: function () {
					U.extend(this, {
						parallax: {
							setTransform: J.setTransform.bind(this),
							setTranslate: J.setTranslate.bind(this),
							setTransition: J.setTransition.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						this.params.parallax.enabled &&
							((this.params.watchSlidesProgress = !0),
							(this.originalParams.watchSlidesProgress = !0));
					},
					init: function () {
						this.params.parallax.enabled && this.parallax.setTranslate();
					},
					setTranslate: function () {
						this.params.parallax.enabled && this.parallax.setTranslate();
					},
					setTransition: function (e) {
						this.params.parallax.enabled && this.parallax.setTransition(e);
					},
				},
			},
			{
				name: "zoom",
				params: {
					zoom: {
						enabled: !1,
						maxRatio: 3,
						minRatio: 1,
						toggle: !0,
						containerClass: "swiper-zoom-container",
						zoomedSlideClass: "swiper-slide-zoomed",
					},
				},
				create: function () {
					var s = this,
						t = {
							enabled: !1,
							scale: 1,
							currentScale: 1,
							isScaling: !1,
							gesture: {
								$slideEl: void 0,
								slideWidth: void 0,
								slideHeight: void 0,
								$imageEl: void 0,
								$imageWrapEl: void 0,
								maxRatio: 3,
							},
							image: {
								isTouched: void 0,
								isMoved: void 0,
								currentX: void 0,
								currentY: void 0,
								minX: void 0,
								minY: void 0,
								maxX: void 0,
								maxY: void 0,
								width: void 0,
								height: void 0,
								startX: void 0,
								startY: void 0,
								touchesStart: {},
								touchesCurrent: {},
							},
							velocity: {
								x: void 0,
								y: void 0,
								prevPositionX: void 0,
								prevPositionY: void 0,
								prevTime: void 0,
							},
						},
						a =
							("onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
								.split(" ")
								.forEach(function (e) {
									t[e] = ee[e].bind(s);
								}),
							U.extend(s, { zoom: t }),
							1);
					Object.defineProperty(s.zoom, "scale", {
						get: function () {
							return a;
						},
						set: function (e) {
							var t, i;
							a !== e &&
								((t = s.zoom.gesture.$imageEl
									? s.zoom.gesture.$imageEl[0]
									: void 0),
								(i = s.zoom.gesture.$slideEl
									? s.zoom.gesture.$slideEl[0]
									: void 0),
								s.emit("zoomChange", e, t, i)),
								(a = e);
						},
					});
				},
				on: {
					init: function () {
						this.params.zoom.enabled && this.zoom.enable();
					},
					destroy: function () {
						this.zoom.disable();
					},
					touchStart: function (e) {
						this.zoom.enabled && this.zoom.onTouchStart(e);
					},
					touchEnd: function (e) {
						this.zoom.enabled && this.zoom.onTouchEnd(e);
					},
					doubleTap: function (e) {
						this.params.zoom.enabled &&
							this.zoom.enabled &&
							this.params.zoom.toggle &&
							this.zoom.toggle(e);
					},
					transitionEnd: function () {
						this.zoom.enabled &&
							this.params.zoom.enabled &&
							this.zoom.onTransitionEnd();
					},
					slideChange: function () {
						this.zoom.enabled &&
							this.params.zoom.enabled &&
							this.params.cssMode &&
							this.zoom.onTransitionEnd();
					},
				},
			},
			{
				name: "lazy",
				params: {
					lazy: {
						enabled: !1,
						loadPrevNext: !1,
						loadPrevNextAmount: 1,
						loadOnTransitionStart: !1,
						elementClass: "swiper-lazy",
						loadingClass: "swiper-lazy-loading",
						loadedClass: "swiper-lazy-loaded",
						preloaderClass: "swiper-lazy-preloader",
					},
				},
				create: function () {
					U.extend(this, {
						lazy: {
							initialImageLoaded: !1,
							load: te.load.bind(this),
							loadInSlide: te.loadInSlide.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						this.params.lazy.enabled &&
							this.params.preloadImages &&
							(this.params.preloadImages = !1);
					},
					init: function () {
						this.params.lazy.enabled &&
							!this.params.loop &&
							0 === this.params.initialSlide &&
							this.lazy.load();
					},
					scroll: function () {
						this.params.freeMode &&
							!this.params.freeModeSticky &&
							this.lazy.load();
					},
					resize: function () {
						this.params.lazy.enabled && this.lazy.load();
					},
					scrollbarDragMove: function () {
						this.params.lazy.enabled && this.lazy.load();
					},
					transitionStart: function () {
						this.params.lazy.enabled &&
							(this.params.lazy.loadOnTransitionStart ||
								(!this.params.lazy.loadOnTransitionStart &&
									!this.lazy.initialImageLoaded)) &&
							this.lazy.load();
					},
					transitionEnd: function () {
						this.params.lazy.enabled &&
							!this.params.lazy.loadOnTransitionStart &&
							this.lazy.load();
					},
					slideChange: function () {
						this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
					},
				},
			},
			{
				name: "controller",
				params: { controller: { control: void 0, inverse: !1, by: "slide" } },
				create: function () {
					U.extend(this, {
						controller: {
							control: this.params.controller.control,
							getInterpolateFunction: k.getInterpolateFunction.bind(this),
							setTranslate: k.setTranslate.bind(this),
							setTransition: k.setTransition.bind(this),
						},
					});
				},
				on: {
					update: function () {
						this.controller.control &&
							this.controller.spline &&
							((this.controller.spline = void 0),
							delete this.controller.spline);
					},
					resize: function () {
						this.controller.control &&
							this.controller.spline &&
							((this.controller.spline = void 0),
							delete this.controller.spline);
					},
					observerUpdate: function () {
						this.controller.control &&
							this.controller.spline &&
							((this.controller.spline = void 0),
							delete this.controller.spline);
					},
					setTranslate: function (e, t) {
						this.controller.control && this.controller.setTranslate(e, t);
					},
					setTransition: function (e, t) {
						this.controller.control && this.controller.setTransition(e, t);
					},
				},
			},
			{
				name: "a11y",
				params: {
					a11y: {
						enabled: !0,
						notificationClass: "swiper-notification",
						prevSlideMessage: "Previous slide",
						nextSlideMessage: "Next slide",
						firstSlideMessage: "This is the first slide",
						lastSlideMessage: "This is the last slide",
						paginationBulletMessage: "Go to slide {{index}}",
					},
				},
				create: function () {
					var t = this;
					U.extend(t, {
						a11y: {
							liveRegion: E(
								'<span class="' +
									t.params.a11y.notificationClass +
									'" aria-live="assertive" aria-atomic="true"></span>'
							),
						},
					}),
						Object.keys(ie).forEach(function (e) {
							t.a11y[e] = ie[e].bind(t);
						});
				},
				on: {
					init: function () {
						this.params.a11y.enabled &&
							(this.a11y.init(), this.a11y.updateNavigation());
					},
					toEdge: function () {
						this.params.a11y.enabled && this.a11y.updateNavigation();
					},
					fromEdge: function () {
						this.params.a11y.enabled && this.a11y.updateNavigation();
					},
					paginationUpdate: function () {
						this.params.a11y.enabled && this.a11y.updatePagination();
					},
					destroy: function () {
						this.params.a11y.enabled && this.a11y.destroy();
					},
				},
			},
			{
				name: "history",
				params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
				create: function () {
					U.extend(this, {
						history: {
							init: $.init.bind(this),
							setHistory: $.setHistory.bind(this),
							setHistoryPopState: $.setHistoryPopState.bind(this),
							scrollToSlide: $.scrollToSlide.bind(this),
							destroy: $.destroy.bind(this),
						},
					});
				},
				on: {
					init: function () {
						this.params.history.enabled && this.history.init();
					},
					destroy: function () {
						this.params.history.enabled && this.history.destroy();
					},
					transitionEnd: function () {
						this.history.initialized &&
							this.history.setHistory(
								this.params.history.key,
								this.activeIndex
							);
					},
					slideChange: function () {
						this.history.initialized &&
							this.params.cssMode &&
							this.history.setHistory(
								this.params.history.key,
								this.activeIndex
							);
					},
				},
			},
			{
				name: "hash-navigation",
				params: {
					hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
				},
				create: function () {
					U.extend(this, {
						hashNavigation: {
							initialized: !1,
							init: L.init.bind(this),
							destroy: L.destroy.bind(this),
							setHash: L.setHash.bind(this),
							onHashCange: L.onHashCange.bind(this),
						},
					});
				},
				on: {
					init: function () {
						this.params.hashNavigation.enabled && this.hashNavigation.init();
					},
					destroy: function () {
						this.params.hashNavigation.enabled && this.hashNavigation.destroy();
					},
					transitionEnd: function () {
						this.hashNavigation.initialized && this.hashNavigation.setHash();
					},
					slideChange: function () {
						this.hashNavigation.initialized &&
							this.params.cssMode &&
							this.hashNavigation.setHash();
					},
				},
			},
			{
				name: "autoplay",
				params: {
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1,
					},
				},
				create: function () {
					var t = this;
					U.extend(t, {
						autoplay: {
							running: !1,
							paused: !1,
							run: I.run.bind(t),
							start: I.start.bind(t),
							stop: I.stop.bind(t),
							pause: I.pause.bind(t),
							onVisibilityChange: function () {
								"hidden" === document.visibilityState &&
									t.autoplay.running &&
									t.autoplay.pause(),
									"visible" === document.visibilityState &&
										t.autoplay.paused &&
										(t.autoplay.run(), (t.autoplay.paused = !1));
							},
							onTransitionEnd: function (e) {
								t &&
									!t.destroyed &&
									t.$wrapperEl &&
									e.target === this &&
									(t.$wrapperEl[0].removeEventListener(
										"transitionend",
										t.autoplay.onTransitionEnd
									),
									t.$wrapperEl[0].removeEventListener(
										"webkitTransitionEnd",
										t.autoplay.onTransitionEnd
									),
									(t.autoplay.paused = !1),
									t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
							},
						},
					});
				},
				on: {
					init: function () {
						this.params.autoplay.enabled &&
							(this.autoplay.start(),
							document.addEventListener(
								"visibilitychange",
								this.autoplay.onVisibilityChange
							));
					},
					beforeTransitionStart: function (e, t) {
						this.autoplay.running &&
							(t || !this.params.autoplay.disableOnInteraction
								? this.autoplay.pause(e)
								: this.autoplay.stop());
					},
					sliderFirstMove: function () {
						this.autoplay.running &&
							(this.params.autoplay.disableOnInteraction
								? this.autoplay.stop()
								: this.autoplay.pause());
					},
					touchEnd: function () {
						this.params.cssMode &&
							this.autoplay.paused &&
							!this.params.autoplay.disableOnInteraction &&
							this.autoplay.run();
					},
					destroy: function () {
						this.autoplay.running && this.autoplay.stop(),
							document.removeEventListener(
								"visibilitychange",
								this.autoplay.onVisibilityChange
							);
					},
				},
			},
			{
				name: "effect-fade",
				params: { fadeEffect: { crossFade: !1 } },
				create: function () {
					U.extend(this, {
						fadeEffect: {
							setTranslate: se.setTranslate.bind(this),
							setTransition: se.setTransition.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						var e;
						"fade" === this.params.effect &&
							(this.classNames.push(
								this.params.containerModifierClass + "fade"
							),
							U.extend(
								this.params,
								(e = {
									slidesPerView: 1,
									slidesPerColumn: 1,
									slidesPerGroup: 1,
									watchSlidesProgress: !0,
									spaceBetween: 0,
									virtualTranslate: !0,
								})
							),
							U.extend(this.originalParams, e));
					},
					setTranslate: function () {
						"fade" === this.params.effect && this.fadeEffect.setTranslate();
					},
					setTransition: function (e) {
						"fade" === this.params.effect && this.fadeEffect.setTransition(e);
					},
				},
			},
			{
				name: "effect-cube",
				params: {
					cubeEffect: {
						slideShadows: !0,
						shadow: !0,
						shadowOffset: 20,
						shadowScale: 0.94,
					},
				},
				create: function () {
					U.extend(this, {
						cubeEffect: {
							setTranslate: ae.setTranslate.bind(this),
							setTransition: ae.setTransition.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						var e;
						"cube" === this.params.effect &&
							(this.classNames.push(
								this.params.containerModifierClass + "cube"
							),
							this.classNames.push(this.params.containerModifierClass + "3d"),
							U.extend(
								this.params,
								(e = {
									slidesPerView: 1,
									slidesPerColumn: 1,
									slidesPerGroup: 1,
									watchSlidesProgress: !0,
									resistanceRatio: 0,
									spaceBetween: 0,
									centeredSlides: !1,
									virtualTranslate: !0,
								})
							),
							U.extend(this.originalParams, e));
					},
					setTranslate: function () {
						"cube" === this.params.effect && this.cubeEffect.setTranslate();
					},
					setTransition: function (e) {
						"cube" === this.params.effect && this.cubeEffect.setTransition(e);
					},
				},
			},
			{
				name: "effect-flip",
				params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
				create: function () {
					U.extend(this, {
						flipEffect: {
							setTranslate: ne.setTranslate.bind(this),
							setTransition: ne.setTransition.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						var e;
						"flip" === this.params.effect &&
							(this.classNames.push(
								this.params.containerModifierClass + "flip"
							),
							this.classNames.push(this.params.containerModifierClass + "3d"),
							U.extend(
								this.params,
								(e = {
									slidesPerView: 1,
									slidesPerColumn: 1,
									slidesPerGroup: 1,
									watchSlidesProgress: !0,
									spaceBetween: 0,
									virtualTranslate: !0,
								})
							),
							U.extend(this.originalParams, e));
					},
					setTranslate: function () {
						"flip" === this.params.effect && this.flipEffect.setTranslate();
					},
					setTransition: function (e) {
						"flip" === this.params.effect && this.flipEffect.setTransition(e);
					},
				},
			},
			{
				name: "effect-coverflow",
				params: {
					coverflowEffect: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						scale: 1,
						modifier: 1,
						slideShadows: !0,
					},
				},
				create: function () {
					U.extend(this, {
						coverflowEffect: {
							setTranslate: re.setTranslate.bind(this),
							setTransition: re.setTransition.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						"coverflow" === this.params.effect &&
							(this.classNames.push(
								this.params.containerModifierClass + "coverflow"
							),
							this.classNames.push(this.params.containerModifierClass + "3d"),
							(this.params.watchSlidesProgress = !0),
							(this.originalParams.watchSlidesProgress = !0));
					},
					setTranslate: function () {
						"coverflow" === this.params.effect &&
							this.coverflowEffect.setTranslate();
					},
					setTransition: function (e) {
						"coverflow" === this.params.effect &&
							this.coverflowEffect.setTransition(e);
					},
				},
			},
			{
				name: "thumbs",
				params: {
					thumbs: {
						swiper: null,
						multipleActiveThumbs: !0,
						autoScrollOffset: 0,
						slideThumbActiveClass: "swiper-slide-thumb-active",
						thumbsContainerClass: "swiper-container-thumbs",
					},
				},
				create: function () {
					U.extend(this, {
						thumbs: {
							swiper: null,
							init: oe.init.bind(this),
							update: oe.update.bind(this),
							onThumbClick: oe.onThumbClick.bind(this),
						},
					});
				},
				on: {
					beforeInit: function () {
						var e = this.params.thumbs;
						e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
					},
					slideChange: function () {
						this.thumbs.swiper && this.thumbs.update();
					},
					update: function () {
						this.thumbs.swiper && this.thumbs.update();
					},
					resize: function () {
						this.thumbs.swiper && this.thumbs.update();
					},
					observerUpdate: function () {
						this.thumbs.swiper && this.thumbs.update();
					},
					setTransition: function (e) {
						var t = this.thumbs.swiper;
						t && t.setTransition(e);
					},
					beforeDestroy: function () {
						var e = this.thumbs.swiper;
						e && this.thumbs.swiperCreated && e && e.destroy();
					},
				},
			},
		];
	return (
		void 0 === c.use &&
			((c.use = c.Class.use), (c.installModule = c.Class.installModule)),
		c.use(O),
		c
	);
});
!(function (A, e) {
	function n(A, e) {
		return typeof A === e;
	}
	function a(A) {
		var e,
			n = m.className,
			o = w._config.classPrefix || "";
		B && (n = n.baseVal),
			w._config.enableJSClass &&
				((e = new RegExp("(^|\\s)" + o + "no-js(\\s|$)")),
				(n = n.replace(e, "$1" + o + "js$2"))),
			w._config.enableClasses &&
				((n += " " + o + A.join(" " + o)),
				B ? (m.className.baseVal = n) : (m.className = n));
	}
	function s(A, e) {
		if ("object" == typeof A) for (var n in A) i(A, n) && s(n, A[n]);
		else {
			var o = (A = A.toLowerCase()).split("."),
				t = w[o[0]];
			if (void 0 !== (t = 2 == o.length ? t[o[1]] : t)) return w;
			(e = "function" == typeof e ? e() : e),
				1 == o.length
					? (w[o[0]] = e)
					: (!w[o[0]] ||
							w[o[0]] instanceof Boolean ||
							(w[o[0]] = new Boolean(w[o[0]])),
					  (w[o[0]][o[1]] = e)),
				a([(e && 0 != e ? "" : "no-") + o.join("-")]),
				w._trigger(A, e);
		}
		return w;
	}
	var i,
		o,
		t,
		l,
		r,
		f,
		u,
		c,
		p,
		d = [],
		g = [],
		h = {
			_version: "3.6.0",
			_config: {
				classPrefix: "",
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0,
			},
			_q: [],
			on: function (A, e) {
				var n = this;
				setTimeout(function () {
					e(n[A]);
				}, 0);
			},
			addTest: function (A, e, n) {
				g.push({ name: A, fn: e, options: n });
			},
			addAsyncTest: function (A) {
				g.push({ name: null, fn: A });
			},
		},
		w = (((w = function () {}).prototype = h), new w()),
		m = e.documentElement,
		B = "svg" === m.nodeName.toLowerCase();
	for (c in ((i =
		void 0 === (p = {}.hasOwnProperty) || void 0 === p.call
			? function (A, e) {
					return e in A && void 0 === A.constructor.prototype[e];
			  }
			: function (A, e) {
					return p.call(A, e);
			  }),
	(h._l = {}),
	(h.on = function (A, e) {
		this._l[A] || (this._l[A] = []),
			this._l[A].push(e),
			w.hasOwnProperty(A) &&
				setTimeout(function () {
					w._trigger(A, w[A]);
				}, 0);
	}),
	(h._trigger = function (A, e) {
		var n;
		this._l[A] &&
			((n = this._l[A]),
			setTimeout(function () {
				for (var A = 0; A < n.length; A++) (0, n[A])(e);
			}, 0),
			delete this._l[A]);
	}),
	w._q.push(function () {
		h.addTest = s;
	}),
	w.addAsyncTest(function () {
		function n(n, A, o) {
			function e(A) {
				var e = !(!A || "load" !== A.type) && 1 == t.width;
				s(n, "webp" === n && e ? new Boolean(e) : e), o && o(A);
			}
			var t = new Image();
			(t.onerror = e), (t.onload = e), (t.src = A);
		}
		var o = [
				{
					uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
					name: "webp",
				},
				{
					uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
					name: "webp.alpha",
				},
				{
					uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
					name: "webp.animation",
				},
				{
					uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
					name: "webp.lossless",
				},
			],
			A = o.shift();
		n(A.name, A.uri, function (A) {
			if (A && "load" === A.type)
				for (var e = 0; e < o.length; e++) n(o[e].name, o[e].uri);
		});
	}),
	g))
		if (g.hasOwnProperty(c)) {
			if (
				((o = []),
				(t = g[c]).name &&
					(o.push(t.name.toLowerCase()),
					t.options && t.options.aliases && t.options.aliases.length))
			)
				for (l = 0; l < t.options.aliases.length; l++)
					o.push(t.options.aliases[l].toLowerCase());
			for (r = n(t.fn, "function") ? t.fn() : t.fn, f = 0; f < o.length; f++)
				1 === (u = o[f].split(".")).length
					? (w[u[0]] = r)
					: (!w[u[0]] ||
							w[u[0]] instanceof Boolean ||
							(w[u[0]] = new Boolean(w[u[0]])),
					  (w[u[0]][u[1]] = r)),
					d.push((r ? "" : "no-") + u.join("-"));
		}
	a(d), delete h.addTest, delete h.addAsyncTest;
	for (var v = 0; v < w._q.length; v++) w._q[v]();
	A.Modernizr = w;
})(window, document);
$(document).ready(function () {
	$(".go-modal").leanModal({ closeButton: ".modal_close" }),
		$("#comparar").click(function (o) {
			var a = $(this).attr("href");
			$(a);
			o.preventDefault();
		});
});
-1 < window.location.href.indexOf("index.html") &&
	(window.location.href = window.location.href.replace("index.html", "")),
	$(document).ready(function () {
		var e,
			a = window.location.toString();
		setTimeout(() => {
			$(
				"#onetrust-accept-btn-handler,#onetrust-reject-all-handler,#accept-recommended-btn-handler,.save-preference-btn-handler"
			).click(function () {
				var e;
				0 < a.indexOf("?") &&
					((e = a.substring(0, a.indexOf("?"))),
					window.history.replaceState({}, document.title, e));
			});
		}, 500),
			setTimeout(() => {
				$(".headerWrapper").addClass("activeBar");
			}, 500),
			(window.onscroll = function () {
				20 < document.body.scrollTop || 20 < document.documentElement.scrollTop
					? ($(".headerWrapper").addClass("activeScroll"),
					  $("header").addClass("header-margin"),
					  $(".pre-header").addClass("fade-pre-header"))
					: ($(".headerWrapper").removeClass("activeScroll"),
					  $(".pre-header").removeClass("fade-pre-header"),
					  $("header").removeClass("header-margin"),
					  $(".pre-header").fadeIn("fast"));
			}),
			(window.dataLayer = window.dataLayer || []),
			dataLayer.push({
				language: "PT",
				market: "PT",
				pageType: "ofertas parceria quatru",
				pageCategory: "mobilidade eletrica",
				pageName: "carregamento-carros-eletricos-charger-edp",
				pageVersion: 1,
				status: "ok",
				DLversion: "GA4",
			}),
			$("#header-cta-1").click(function () {
				window.dataLayer.push({
					event: "gaclick",
					dlVersion: "GA4",
					action: "click_open",
					formModal: "modalPedirContacto",
					interactionName: "liguem-me",
					interactionLocation: "header-cta",
				});
			}),
			$("#hero-cta-1").click(function () {
				window.dataLayer.push({
					event: "gaclick",
					dlVersion: "GA4",
					action: "click_open",
					formModal: "modalPedirContacto",
					interactionName: "liguem-me",
					interactionLocation: "hero-section-cta",
				});
			}),
			$("#modal-comparar-caracteristicas").click(function () {
				window.dataLayer.push({
					event: "gaclick",
					dlVersion: "GA4",
					action: "click_open",
					formModal: "modalCompararCaracteristicas",
					interactionName: "Comparar Características",
					interactionLocation: "modal-comparar-caracteristicas",
				});

				window.dataLayer.push({
					DLversion: "GA4",
					event: "gaevent",
					action: "modal_view",
					interactionLocation: "modal-comparar-caracteristicas",
				});
			}),
			$("#close-modal-comparar-caracteristicas").click(function () {
				window.dataLayer.push({
					event: "gaclick",
					dlVersion: "GA4",
					action: "click_close",
					formModal: "modalCompararCaracteristicas",
					interactionName: "Comparar Características",
					interactionLocation: "close-modal-comparar-caracteristicas",
				});
			}),
			$("#barra-ofertas-bt-1").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "barra-ofertas",
					DLversion: "GA4",
				});
			}),
			$("#barra-ofertas-bt-2").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "barra-ofertas",
					DLversion: "GA4",
				});
			}),
			$("#barra-ofertas-bt-3").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "barra-ofertas",
					DLversion: "GA4",
				});
			}),
			$("#barra-ofertas-bt-4").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "barra-ofertas",
					DLversion: "GA4",
				});
			}),
			$("#barra-ofertas-bt-5").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "barra-ofertas",
					DLversion: "GA4",
				});
			}),
			$("#barra-ofertas-bt-6").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "barra-ofertas",
					DLversion: "GA4",
				});
			}),
			$("#liguem-me-banner").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "block-banner",
					DLversion: "GA4",
				});
			}),
			$("#saber-mais-carregamento").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Saber mais",
					interactionLocation: "carregamento-domestico-block",
					DLversion: "GA4",
				});
			}),
			$("#liguem-me-vantangens").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "vantangens-charger",
					DLversion: "GA4",
				});
			}),
			$("#light-charger").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Falar com especialista",
					interactionLocation: "chargers-block",
					DLversion: "GA4",
				});
			}),
			$("#standard-charger").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Falar com especialista",
					interactionLocation: "chargers-block",
					DLversion: "GA4",
				});
			}),
			$("#premium-charger").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Falar com especialista",
					interactionLocation: "chargers-block",
					DLversion: "GA4",
				});
			}),
			$("#plug-in").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Falar com especialista",
					interactionLocation: "chargers-block",
					DLversion: "GA4",
				});
			}),
			$("#plug-in-condominios").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Falar com especialista",
					interactionLocation: "chargers-block",
					DLversion: "GA4",
				});
			}),
			$("#liguem-me-adesao").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "block-adesao",
					DLversion: "GA4",
				});
			}),
			$("#pedir-cartao").click(function () {
				dataLayer.push({
					event: "gaclick",
					action: "click_open",
					pageStatus: "ok",
					formModal: "modalPedirContacto",
					interactionName: "Liguem-me",
					interactionLocation: "cartao-block",
					DLversion: "GA4",
				});
			}),
			0 < $(".block-advantages").length &&
				new Swiper($(".block-advantages .swiper-container"), {
					direction: "horizontal",
					slidesPerView: "auto",
					scrollbar: { el: $(".block-advantages .swiper-scrollbar") },
				}),
			0 < $(".block-column").length &&
				new Swiper($(".block-column .swiper-container"), {
					direction: "horizontal",
					slidesPerView: "auto",
					scrollbar: { el: $(".block-column .swiper-scrollbar") },
				}),
			0 < $(".block-carousel").length &&
				((e = new Swiper($(".block-carousel .block-swiper-carousel-bottom"), {
					slidesPerView: "auto",
					slideToClickedSlide: !0,
					scrollbar: {
						el: $(
							".block-carousel .block-swiper-carousel-bottom .swiper-scrollbar"
						),
					},
					on: {
						click: function () {
							this.slideTo(this.clickedIndex);
						},
					},
				})),
				new Swiper($(".block-carousel .block-swiper-carousel-top"), {
					slidesPerView: 1,
					autoHeight: !0,
					allowTouchMove: !1,
					thumbs: { swiper: e },
				})),
			$("p.prod-info").each(function () {
				$(this).click(function () {
					$(this).parent().addClass("up"),
						$(this).parent().prev().prev().addClass("visible"),
						$(this).parent().next().addClass("visible"),
						$(this).parent().prev().addClass("scaled");
				});
			}),
			$(".prod-back").each(function () {
				$(this).click(function () {
					$(this).removeClass("visible"),
						$(this).next().removeClass("scaled"),
						$(this).next().next().removeClass("up"),
						$(this).next().next().next().removeClass("visible");
				});
			}),
			0 < $(".block-chargers").length &&
				new Swiper($(".block-chargers .swiper-container"), {
					direction: "horizontal",
					slidesPerView: "auto",
					scrollbar: { el: $(".block-chargers .swiper-scrollbar") },
				}),
			$(".info_list").each(function () {
				$(this).click(function () {
					$(".info_list").removeClass("active"),
						$(this).toggleClass("active"),
						console.log($(this).data("id"));
				});
			}),
			$(".icon-block").each(function () {
				$(this).click(function () {
					$(".icon-block").removeClass("swiper-slide-active"),
						$(this).toggleClass("swiper-slide-active"),
						console.log($(this).data("id"));
				});
			}),
			0 < $(".block-carousel-block").length &&
				((e = new Swiper(
					$(".block-carousel-block .block-swiper-carousel-bullets"),
					{
						slidesPerView: "auto",
						slideToClickedSlide: !0,
						scrollbar: { el: $(".mobile_wrapper .swiper-scrollbar") },
						on: {
							click: function () {
								this.slideTo(this.clickedIndex);
							},
						},
					}
				)),
				new Swiper($(".block-carousel-block .block-swiper-carousel-top"), {
					slidesPerView: 1,
					autoHeight: !0,
					allowTouchMove: !1,
					thumbs: { swiper: e },
				})),
			0 < $(".block-disclamer").length &&
				$(document).on(
					"click",
					".block-disclamer .block-accordeon .block-accordeon-header",
					function (e) {
						$(".block-disclamer .block-accordeon").toggleClass("active"),
							$(
								".block-disclamer .block-accordeon .block-accordeon-body"
							).slideToggle();
					}
				),
			0 < $(".modalSlider__slider").length &&
				setTimeout(() => {
					new Swiper($(".modalSlider__slider .swiper-container"), {
						slidesPerView: "auto",
						slideToClickedSlide: !0,
						scrollbar: { el: $(".modalSlider__slider .swiper-scrollbar") },
					});
				}, 500),
			0 < $(".barra-ofertas").length &&
				new Swiper($(".barra-ofertas .swiper-container"), {
					slidesPerView: 1,
					effect: "fade",
					fadeEffect: { crossFade: !0 },
					autoplay: { delay: 5e3 },
					loop: !0,
					simulateTouch: !1,
				}),
			$(".modal").removeClass("hidden"),
			$(".modalBt").click(function () {
				$("#modalComparar").addClass("openModal");
			}),
			$(".modal_close").click(function () {
				$("#modalComparar").removeClass("openModal");
			}),
			$("#ver-oferta").click(function () {
				$("html, body").animate(
					{
						scrollTop:
							$("#chargers-block").offset().top - $(".headerWrapper").height(),
					},
					1e3
				);
			});
	});
