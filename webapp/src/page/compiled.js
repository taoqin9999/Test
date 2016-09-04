var templates = {};
/* global Hogan */
/* jshint ignore:start */
templates['page.test'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"test\">\r");t.b("\n" + i);t.b("    111111111111111\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
templates['page.test1'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"test\">\r");t.b("\n" + i);t.b("    222222222222222 test1\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
/* jshint ignore:end */