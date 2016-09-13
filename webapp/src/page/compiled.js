var templates = {};
/* global Hogan */
/* jshint ignore:start */
templates['page.test'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"test\">\r");t.b("\n" + i);t.b("    1111111111111112222\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
templates['page.test1'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"test\">\r");t.b("\n" + i);t.b("    222222222222222 test12222\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
/* jshint ignore:end */