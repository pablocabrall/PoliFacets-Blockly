Blockly.Instrucoes = new Blockly.Generator("Instrucoes");
Blockly.Instrucoes.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.Instrucoes.ORDER_ATOMIC = 0;
Blockly.Instrucoes.ORDER_NEW = 1.1;
Blockly.Instrucoes.ORDER_MEMBER = 1.2;
Blockly.Instrucoes.ORDER_FUNCTION_CALL = 2;
Blockly.Instrucoes.ORDER_INCREMENT = 3;
Blockly.Instrucoes.ORDER_DECREMENT = 3;
Blockly.Instrucoes.ORDER_BITWISE_NOT = 4.1;
Blockly.Instrucoes.ORDER_UNARY_PLUS = 4.2;
Blockly.Instrucoes.ORDER_UNARY_NEGATION = 4.3;
Blockly.Instrucoes.ORDER_LOGICAL_NOT = 4.4;
Blockly.Instrucoes.ORDER_TYPEOF = 4.5;
Blockly.Instrucoes.ORDER_VOID = 4.6;
Blockly.Instrucoes.ORDER_DELETE = 4.7;
Blockly.Instrucoes.ORDER_DIVISION = 5.1;
Blockly.Instrucoes.ORDER_MULTIPLICATION = 5.2;
Blockly.Instrucoes.ORDER_MODULUS = 5.3;
Blockly.Instrucoes.ORDER_SUBTRACTION = 6.1;
Blockly.Instrucoes.ORDER_ADDITION = 6.2;
Blockly.Instrucoes.ORDER_BITWISE_SHIFT = 7;
Blockly.Instrucoes.ORDER_RELATIONAL = 8;
Blockly.Instrucoes.ORDER_IN = 8;
Blockly.Instrucoes.ORDER_INSTANCEOF = 8;
Blockly.Instrucoes.ORDER_EQUALITY = 9;
Blockly.Instrucoes.ORDER_BITWISE_AND = 10;
Blockly.Instrucoes.ORDER_BITWISE_XOR = 11;
Blockly.Instrucoes.ORDER_BITWISE_OR = 12;
Blockly.Instrucoes.ORDER_LOGICAL_AND = 13;
Blockly.Instrucoes.ORDER_LOGICAL_OR = 14;
Blockly.Instrucoes.ORDER_CONDITIONAL = 15;
Blockly.Instrucoes.ORDER_ASSIGNMENT = 16;
Blockly.Instrucoes.ORDER_COMMA = 17;
Blockly.Instrucoes.ORDER_NONE = 99;
Blockly.Instrucoes.ORDER_OVERRIDES = [
    [Blockly.Instrucoes.ORDER_FUNCTION_CALL, Blockly.Instrucoes.ORDER_MEMBER],
    [Blockly.Instrucoes.ORDER_FUNCTION_CALL, Blockly.Instrucoes.ORDER_FUNCTION_CALL],
    [Blockly.Instrucoes.ORDER_MEMBER, Blockly.Instrucoes.ORDER_MEMBER],
    [Blockly.Instrucoes.ORDER_MEMBER, Blockly.Instrucoes.ORDER_FUNCTION_CALL],
    [Blockly.Instrucoes.ORDER_LOGICAL_NOT, Blockly.Instrucoes.ORDER_LOGICAL_NOT],
    [Blockly.Instrucoes.ORDER_MULTIPLICATION, Blockly.Instrucoes.ORDER_MULTIPLICATION],
    [Blockly.Instrucoes.ORDER_ADDITION,
        Blockly.Instrucoes.ORDER_ADDITION
    ],
    [Blockly.Instrucoes.ORDER_LOGICAL_AND, Blockly.Instrucoes.ORDER_LOGICAL_AND],
    [Blockly.Instrucoes.ORDER_LOGICAL_OR, Blockly.Instrucoes.ORDER_LOGICAL_OR]
];
Blockly.Instrucoes.ONE_BASED_INDEXING = !0;
Blockly.Instrucoes.init = function(a) {
    Blockly.Instrucoes.definitions_ = Object.create(null);
    Blockly.Instrucoes.functionNames_ = Object.create(null);
    Blockly.Instrucoes.variableDB_ ? Blockly.Instrucoes.variableDB_.reset() : Blockly.Instrucoes.variableDB_ = new Blockly.Names(Blockly.Instrucoes.RESERVED_WORDS_);
    var b = [];
    a = Blockly.Variables.allVariables(a);
    if (a.length) {
        for (var c = 0; c < a.length; c++) b[c] = Blockly.Instrucoes.variableDB_.getName(a[c], Blockly.Variables.NAME_TYPE);
        Blockly.Instrucoes.definitions_.variables;
              }
};
Blockly.Instrucoes.finish = function(a) {
    var b = [],
        c;
    for (c in Blockly.Instrucoes.definitions_) b.push(Blockly.Instrucoes.definitions_[c]);
    delete Blockly.Instrucoes.definitions_;
    delete Blockly.Instrucoes.functionNames_;
    Blockly.Instrucoes.variableDB_.reset();
    return b.join("\n\n\n") + "\n\n\n\n\n\n"+a
};
Blockly.Instrucoes.scrubNakedValue = function(a) {
    return a + ".\n"
};
Blockly.Instrucoes.quote_ = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
Blockly.Instrucoes.scrub_ = function(a, b) {
    var c = "";
    if (!a.outputConnection || !a.outputConnection.targetConnection) {
        var d = a.getCommentText();
        (d = Blockly.utils.wrap(d, Blockly.Instrucoes.COMMENT_WRAP - 3)) && (c = a.getProcedureDef ? c + ("/**\n" + Blockly.Instrucoes.prefixLines(d + "\n", " * ") + " */\n") : c + Blockly.Instrucoes.prefixLines(d + "\n", "<span class='glyphicon glyphicon-question-sign' aria-hidden='true'></span> Comentário: "));
        for (var e = 0; e < a.inputList.length; e++) a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = Blockly.Instrucoes.allNestedComments(d)) && (c +=
            Blockly.Instrucoes.prefixLines(d, "<span class='glyphicon glyphicon-question-sign' aria-hidden='true'></span> Comentário: "))
    }
    e = a.nextConnection && a.nextConnection.targetBlock();
    e = Blockly.Instrucoes.blockToCode(e);
    return c + b + e
};
Blockly.Instrucoes.getAdjusted = function(a, b, c, d, e) {
    c = c || 0;
    e = e || Blockly.Instrucoes.ORDER_NONE;
    Blockly.Instrucoes.ONE_BASED_INDEXING && c--;
    var f = Blockly.Instrucoes.ONE_BASED_INDEXING ? "1" : "0";
    a = 0 < c ? Blockly.Instrucoes.valueToCode(a, b, Blockly.Instrucoes.ORDER_ADDITION) || f : 0 > c ? Blockly.Instrucoes.valueToCode(a, b, Blockly.Instrucoes.ORDER_SUBTRACTION) || f : d ? Blockly.Instrucoes.valueToCode(a, b, Blockly.Instrucoes.ORDER_UNARY_NEGATION) || f : Blockly.Instrucoes.valueToCode(a, b, e) || f;
    if (Blockly.isNumber(a)) a = parseFloat(a) +
        c, d && (a = -a);
    else {
        if (0 < c) {
            a = a + " + " + c;
            var g = Blockly.Instrucoes.ORDER_ADDITION
        } else 0 > c && (a = a + " - " + -c, g = Blockly.Instrucoes.ORDER_SUBTRACTION);
        d && (a = c ? "-(" + a + ")" : "-" + a, g = Blockly.Instrucoes.ORDER_UNARY_NEGATION);
        g = Math.floor(g);
        e = Math.floor(e);
        g && e >= g && (a = "(" + a + ")")
    }
    return a
};

Blockly.Instrucoes.lists = {};
Blockly.Instrucoes.lists_create_empty = function(a) {
    return ["[]", Blockly.Instrucoes.ORDER_ATOMIC];
};
Blockly.Instrucoes.lists_create_with = function(a) {
    for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Instrucoes.valueToCode(a, "ADD" + c, Blockly.Instrucoes.ORDER_COMMA) || " <img src='img/blockly.png' height='20' width='30'>";
    return ["Criar lista[" + b.join(", ") + " ]", Blockly.Instrucoes.ORDER_ATOMIC]
};
Blockly.Instrucoes.lists_repeat = function(a) {
        c = Blockly.Instrucoes.valueToCode(a, "ITEM", Blockly.Instrucoes.ORDER_COMMA) || "<img src='img/blockly.png' height='20' width='30'>";
    a = Blockly.Instrucoes.valueToCode(a, "NUM", Blockly.Instrucoes.ORDER_COMMA) || "0";
    return ["Criar lista repetindo " + a + " vezes o intem " + c, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.lists_length = function(a) {
    return ["tamanho da lista: "+(Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_MEMBER) || "[]")]
};
Blockly.Instrucoes.lists_isEmpty = function(a) {
    return ["verificar se a lista " + (Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_MEMBER) || "[]") + " é vazia", Blockly.Instrucoes.ORDER_LOGICAL_NOT]
};
Blockly.Instrucoes.lists_indexOf = function(a) {
    var b = "FIRST" == a.getFieldValue("END") ? "primeira ocorrência" : "última ocorrência",
        c = Blockly.Instrucoes.valueToCode(a, "FIND", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
    a = "encontrar na lista "+(Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_MEMBER) || "<img src='img/blockly.png' height='20' width='30'>") + " a " + b + "do intem " + c + "";
    return a
};
Blockly.Instrucoes.lists_getIndex = function(a) {
    var b = a.getFieldValue("MODE") || "GET",
        c = a.getFieldValue("WHERE") || "FROM_START",
        d = Blockly.Instrucoes.valueToCode(a, "VALUE", "RANDOM" == c ? Blockly.Instrucoes.ORDER_COMMA : Blockly.Instrucoes.ORDER_MEMBER) || "[]";
    switch (c) {
        case "FIRST":
            if ("GET" == b) return [d + "[0]", Blockly.Instrucoes.ORDER_MEMBER];
            if ("GET_REMOVE" == b) return [d + ".shift()", Blockly.Instrucoes.ORDER_MEMBER];
            if ("REMOVE" == b) return d + ".shift();\n";
            break;
        case "LAST":
            if ("GET" == b) return [d + ".slice(-1)[0]", Blockly.Instrucoes.ORDER_MEMBER];
            if ("GET_REMOVE" == b) return [d + ".pop()", Blockly.Instrucoes.ORDER_MEMBER];
            if ("REMOVE" == b) return d + ".pop();\n";
            break;
        case "FROM_START":
            a = Blockly.Instrucoes.getAdjusted(a, "AT");
            if ("GET" == b) return [d + "[" + a + "]", Blockly.Instrucoes.ORDER_MEMBER];
            if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.Instrucoes.ORDER_FUNCTION_CALL];
            if ("REMOVE" == b) return d + ".splice(" + a + ", 1);\n";
            break;
        case "FROM_END":
            a = Blockly.Instrucoes.getAdjusted(a, "AT", 1, !0);
            if ("GET" == b) return [d + ".slice(" + a + ")[0]", Blockly.Instrucoes.ORDER_FUNCTION_CALL];
            if ("GET_REMOVE" == b) return [d + ".splice(" + a + ", 1)[0]", Blockly.Instrucoes.ORDER_FUNCTION_CALL];
            if ("REMOVE" == b) return d + ".splice(" + a + ", 1);";
            break;
        case "RANDOM":
            d = Blockly.Instrucoes.provideFunction_("listsGetRandomItem", ["function " + Blockly.Instrucoes.FUNCTION_NAME_PLACEHOLDER_ + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {", "    return list[x];", "  }", "}"]) + "(" + d + ", " + ("GET" != b) + ")";
            if ("GET" == b || "GET_REMOVE" == b) return [d,
                Blockly.Instrucoes.ORDER_FUNCTION_CALL
            ];
            if ("REMOVE" == b) return d + ";\n"
    }
    throw "Unhandled combination (lists_getIndex).";
};
Blockly.Instrucoes.lists_setIndex = function(a) {
    function b() {
        if (c.match(/^\w+$/)) return "";
        var a = Blockly.Instrucoes.variableDB_.getDistinctName("tmpList", Blockly.Variables.NAME_TYPE),
            b = "var " + a + " = " + c + ";\n";
        c = a;
        return b
    }
    var c = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_MEMBER) || "[]",
        d = a.getFieldValue("MODE") || "GET",
        e = a.getFieldValue("WHERE") || "FROM_START",
        f = Blockly.Instrucoes.valueToCode(a, "TO", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "null";
    switch (e) {
        case "FIRST":
            if ("SET" == d) return c +
                "[0] = " + f + ";\n";
            if ("INSERT" == d) return c + ".unshift(" + f + ");\n";
            break;
        case "LAST":
            if ("SET" == d) return a = b(), a + (c + "[" + c + ".length - 1] = " + f + ";\n");
            if ("INSERT" == d) return c + ".push(" + f + ");\n";
            break;
        case "FROM_START":
            e = Blockly.Instrucoes.getAdjusted(a, "AT");
            if ("SET" == d) return c + "[" + e + "] = " + f + ";\n";
            if ("INSERT" == d) return c + ".splice(" + e + ", 0, " + f + ");\n";
            break;
        case "FROM_END":
            e = Blockly.Instrucoes.getAdjusted(a, "AT", 1, !1, Blockly.Instrucoes.ORDER_SUBTRACTION);
            a = b();
            if ("SET" == d) return a + (c + "[" + c + ".length - " + e +
                "] = " + f + ";\n");
            if ("INSERT" == d) return a + (c + ".splice(" + c + ".length - " + e + ", 0, " + f + ");\n");
            break;
        case "RANDOM":
            a = b();
            e = Blockly.Instrucoes.variableDB_.getDistinctName("tmpX", Blockly.Variables.NAME_TYPE);
            a += "var " + e + " = Math.floor(Math.random() * " + c + ".length);\n";
            if ("SET" == d) return a + (c + "[" + e + "] = " + f + ";\n");
            if ("INSERT" == d) return a + (c + ".splice(" + e + ", 0, " + f + ");\n")
    }
    throw "Unhandled combination (lists_setIndex).";
};
Blockly.Instrucoes.lists.getIndex_ = function(a, b, c) {
    return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c
};
Blockly.Instrucoes.lists_getSublist = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_MEMBER) || "[]",
        c = a.getFieldValue("WHERE1"),
        d = a.getFieldValue("WHERE2");
    if ("FIRST" == c && "LAST" == d) b += ".slice(0)";
    else if (b.match(/^\w+$/) || "FROM_END" != c && "FROM_START" == d) {
        switch (c) {
            case "FROM_START":
                var e = Blockly.Instrucoes.getAdjusted(a, "AT1");
                break;
            case "FROM_END":
                e = Blockly.Instrucoes.getAdjusted(a, "AT1", 1, !1, Blockly.Instrucoes.ORDER_SUBTRACTION);
                e = b + ".length - " + e;
                break;
            case "FIRST":
                e =
                    "0";
                break;
            default:
                throw "Unhandled option (lists_getSublist).";
        }
        switch (d) {
            case "FROM_START":
                a = Blockly.Instrucoes.getAdjusted(a, "AT2", 1);
                break;
            case "FROM_END":
                a = Blockly.Instrucoes.getAdjusted(a, "AT2", 0, !1, Blockly.Instrucoes.ORDER_SUBTRACTION);
                a = b + ".length - " + a;
                break;
            case "LAST":
                a = b + ".length";
                break;
            default:
                throw "Unhandled option (lists_getSublist).";
        }
        b = b + ".slice(" + e + ", " + a + ")"
    } else {
        e = Blockly.Instrucoes.getAdjusted(a, "AT1");
        a = Blockly.Instrucoes.getAdjusted(a, "AT2");
        var f = Blockly.Instrucoes.lists.getIndex_,
            g = {
                FIRST: "First",
                LAST: "Last",
                FROM_START: "FromStart",
                FROM_END: "FromEnd"
            },
            b = Blockly.Instrucoes.provideFunction_("subsequence" + g[c] + g[d], ["function " + Blockly.Instrucoes.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  var start = " + f("sequence", c, "at1") + ";", "  var end = " + f("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" ==
                d ? ", " + a : "") + ")"
    }
    return [b, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.lists_sort = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_FUNCTION_CALL) || "[]",
        c = "1" === a.getFieldValue("DIRECTION") ? 1 : -1;
    a = a.getFieldValue("TYPE");
    var d = Blockly.Instrucoes.provideFunction_("listsGetSortCompare", ["function " + Blockly.Instrucoes.FUNCTION_NAME_PLACEHOLDER_ + "(type, direction) {", "  var compareFuncs = {", '    "NUMERIC": function(a, b) {', "        return parseFloat(a) - parseFloat(b); },", '    "TEXT": function(a, b) {', "        return a.toString() > b.toString() ? 1 : -1; },",
        '    "IGNORE_CASE": function(a, b) {', "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },", "  };", "  var compare = compareFuncs[type];", "  return function(a, b) { return compare(a, b) * direction; }", "}"
    ]);
    return [b + ".slice().sort(" + d + '("' + a + '", ' + c + "))", Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.lists_split = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "INPUT", Blockly.Instrucoes.ORDER_MEMBER),
        c = Blockly.Instrucoes.valueToCode(a, "DELIM", Blockly.Instrucoes.ORDER_NONE) || "''";
    a = a.getFieldValue("MODE");
    if ("SPLIT" == a) b || (b = "''"), a = "split";
    else if ("JOIN" == a) b || (b = "[]"), a = "join";
    else throw "Unknown mode: " + a;
    return [b + "." + a + "(" + c + ")", Blockly.Instrucoes.ORDER_FUNCTION_CALL]
}
//logica
Blockly.Instrucoes.logic = {};
Blockly.Instrucoes.controls_if = function(a) {

    for (var b = 0, c = Blockly.Instrucoes.valueToCode(a, "IF" + b, Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>", d = Blockly.Instrucoes.statementToCode(a, "DO" + b), e = "<a href='#se_verdadeiro' class='ints' onclick='logic_a()' title='Veja que tipo de bloco é este!'>Se a condição</a> '" + c + "' for verdadeira executar o (s) seguinte (s) bloco (s) :\n "+ d + " ", b = 1; b <= a.elseifCount_; b++) c = Blockly.Instrucoes.valueToCode(a, "IF" + b, Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>", d = Blockly.Instrucoes.statementToCode(a, "DO" + b), e += "Senão se a condição '" + c + "' for verdadeira executar o (s) seguinte (s) bloco (s):\n " + d + "\n";
    a.elseCount_ && (d = Blockly.Instrucoes.statementToCode(a, "ELSE"), e += " Senão executar o (s) seguinte (s) bloco (s): \n " + d + " ");
   
	return e +"\n"
};
Blockly.Instrucoes.logic_compare = function(a) {
    var b = {
            EQ: "<a href='#comparacao' class='ints' onclick='logic_b()' title='Veja que tipo de bloco é este!'>igual a</a>",
            NEQ: "<a href='#comparacao' class='ints' onclick='logic_b()' title='Veja que tipo de bloco é este!'>diferente de</a>",
            LT: "<a href='#comparacao' class='ints' onclick='logic_b()' title='Veja que tipo de bloco é este!'>menor que </a>",
            LTE: "<a href='#comparacao' class='ints' onclick='logic_b())' title='Veja que tipo de bloco é este!'>menor ou igual a</a>",
            GT: "<a href='#comparacao'  class='ints' onclick='logic_b()' title='Veja que tipo de bloco é este!'>maior que</a>",
            GTE: "<a href='#comparacao' class='ints' onclick='logic_b()' title='Veja que tipo de bloco é este!'>maior ou igual a</a>"
        }[a.getFieldValue("OP")],
        c = "==" == b || "!=" == b ? Blockly.Instrucoes.ORDER_EQUALITY : Blockly.Instrucoes.ORDER_RELATIONAL,
        d = Blockly.Instrucoes.valueToCode(a, "A", c) || "<img src='img/blockly.png' height='20' width='30'>";
    a = Blockly.Instrucoes.valueToCode(a, "B", c) || "<img src='img/blockly.png' height='20' width='30'>";
    return [d + " " + b + " " + a, c]
};
Blockly.Instrucoes.logic_operation = function(a) {
    var b = "AND" == a.getFieldValue("OP") ? "<a href='#operacao_logica' class='ints' onclick='logic_c()' title='Veja que tipo de bloco é este!'>e</a>" : "<a href='#operacao_logica' class='ints' onclick='logic_c()' title='Veja que tipo de bloco é este!'>ou</a>",
        c = "&&" == b ? Blockly.Instrucoes.ORDER_LOGICAL_AND : Blockly.Instrucoes.ORDER_LOGICAL_OR,
        d = Blockly.Instrucoes.valueToCode(a, "A", c);
    a = Blockly.Instrucoes.valueToCode(a, "B", c);
    if (d || a) {
        var e = "&&" == b ? "<img src='img/blockly.png' height='20' width='30'>" : "<img src='img/blockly.png' height='20' width='30'>";
        d || (d = e);
        a || (a = e)
    } else a = d = "<img src='img/blockly.png' height='20' width='30'>";
    return [d + " " + b + " " + a, c]
};
Blockly.Instrucoes.logic_negate = function(a) {
    var b = Blockly.Instrucoes.ORDER_LOGICAL_NOT;
    return ["" + (Blockly.Instrucoes.valueToCode(a, "BOOL", b) || "<a href='#negacao_logica' class='ints' onclick='logic_d()' title='Veja que tipo de bloco é este!' >não</a>"), b]
};
Blockly.Instrucoes.logic_boolean = function(a) {
    return ["TRUE" == a.getFieldValue("BOOL") ? "<a href='#logica_boolean' class='ints' onclick='logic_e()' title='Veja que tipo de bloco é este!' >verdadeiro</a>" : "<a href='#logica_boolean' class='ints' onclick='logic_e()' title='Veja que tipo de bloco é este!' >falso</a>", Blockly.Instrucoes.ORDER_ATOMIC]
};
Blockly.Instrucoes.logic_null = function(a) {
    return ["<a href='#logica_nulo' class='ints' onclick='logic_f()' title='Veja que tipo de bloco é este!'>nulo</a>", Blockly.Instrucoes.ORDER_ATOMIC]
};
Blockly.Instrucoes.logic_ternary = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "IF", Blockly.Instrucoes.ORDER_CONDITIONAL) || "<img src='img/blockly.png' height='20' width='30'>",
        c = Blockly.Instrucoes.valueToCode(a, "THEN", Blockly.Instrucoes.ORDER_CONDITIONAL) || "<img src='img/blockly.png' height='20' width='30'>";
    a = Blockly.Instrucoes.valueToCode(a, "ELSE", Blockly.Instrucoes.ORDER_CONDITIONAL) || "<img src='img/blockly.png' height='20' width='30'>";
    return ["<a href='#logica_ternaria' class='ints' onclick='logic_g()' title='Veja que tipo de bloco é este!'>Testa a condição</a> "+b+" Se verdadeiro retorna o valor "+ c + " Se falso retorna o valor " + a, Blockly.Instrucoes.ORDER_CONDITIONAL]
};
//laços
Blockly.Instrucoes.loops = {};
Blockly.Instrucoes.controls_repeat_ext = function(a) {
    var b = a.getField("TIMES") ? String(Number(a.getFieldValue("TIMES"))) : Blockly.Instrucoes.valueToCode(a, "TIMES", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "0",
        c = Blockly.Instrucoes.statementToCode(a, "DO"),
        c = Blockly.Instrucoes.addLoopTrap(c, a.id);
    a = "";
    var d = Blockly.Instrucoes.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE),
        e = b;
    b.match(/^\w+$/) || Blockly.isNumber(b) || (e = Blockly.Instrucoes.variableDB_.getDistinctName("repeat_end", Blockly.Variables.NAME_TYPE));
    return a + ("<a href='#repeticao' class='ints' onclick='controls_b()' title='Veja que tipo de bloco é este!'>Repita</a> " + b + " vezes o (s) bloco (s) dentro deste laço:\n" + c + "\n")
};
Blockly.Instrucoes.controls_repeat = Blockly.Instrucoes.controls_repeat_ext;
Blockly.Instrucoes.controls_whileUntil = function(a) {
    var b = "UNTIL" == a.getFieldValue("MODE"),
        c = Blockly.Instrucoes.valueToCode(a, "BOOL", b ? Blockly.Instrucoes.ORDER_LOGICAL_NOT : Blockly.Instrucoes.ORDER_NONE) || "'<img src='img/blockly.png' height='20' width='30'>'",
        d = Blockly.Instrucoes.statementToCode(a, "DO"),
        d = Blockly.Instrucoes.addLoopTrap(d, a.id);
    b || (c = "<a href='#enquanto_ate' class='ints' onclick='controls_a()' title='Veja que tipo de bloco é este!' >enquanto a condição</a>" +c+" for verdadeira");
	b && (c = "<a href='#enquanto_ate' class='ints' onclick='controls_a()' title='Veja que tipo de bloco é este!' >até a condição</a>" +c+" ser verdadeira");
    return "Repita o(s) bloco (s) dentro deste laço " + c + "\n" + d + ".\n"
};
Blockly.Instrucoes.controls_for = function(a) {
    var b = Blockly.Instrucoes.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
        c = Blockly.Instrucoes.valueToCode(a, "FROM", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "0",
        d = Blockly.Instrucoes.valueToCode(a, "TO", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "0",
        e = Blockly.Instrucoes.valueToCode(a, "BY", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "1",
		f = Blockly.Codigo.statementToCode(a, "DO"),
        f = Blockly.Codigo.addLoopTrap(f, a.id);
    if (Blockly.isNumber(c) && Blockly.isNumber(d) &&
        Blockly.isNumber(e)) {
        var g = parseFloat(c) <= parseFloat(d);
        a = "Contar com variável <strong> " + b + "</strong> então, repetir o (s) bloco (s) dentro deste laço de " + c +" até "+d+"vezes, com valor de incremento "+b;
        b = Math.abs(parseFloat(e));
        a = (1 == b ? a + (g ? "<strong>++</strong>" : "<strong>--</strong>") : a + ((g ? "<strong> +=</strong> " : "<strong> -=</strong> ") + b)) + ("\n" + f + "\n")
    } else a = "<a href='#repeticao_cont' class='ints' onclick='controls_c()' title='Veja que tipo de bloco é este!'>Contar com a variável</a> <strong>" + b + "</strong> então, repetir os bloco(s) dentro deste laço de " + c + " até " + d + " vezes, com valor de incremento "+ b + "+="+ e + "\n" + f + "\n";
    return a
};
Blockly.Instrucoes.controls_forEach = function(a) {
    var b = Blockly.Instrucoes.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
        c = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "<img src='img/blockly.png' height='20' width='30'>",
        d = Blockly.Instrucoes.statementToCode(a, "DO"),
        d = Blockly.Instrucoes.addLoopTrap(d, a.id);
    a = "";
    var e = c;
    d = Blockly.Instrucoes.INDENT + d;
    return a + ("<a href='#repeticao_lista' class='ints' onclick='controls_d()' title='Veja que tipo de bloco é este!' >Para cada item</a><strong> " + b + "</strong> na lista <strong>" + e + "</strong> executar o(s) seguinte (s) bloco (s):\n" + d + "\n")
};
Blockly.Instrucoes.controls_flow_statements = function(a) {
    switch (a.getFieldValue("FLOW")) {
        case "BREAK":
            return "<a href='#break' class='ints' onclick='controls_e()' title='Veja que tipo de bloco é este!'>encerrar laço</a>;\n";
        case "CONTINUE":
            return "<a href='#break' class='ints' onclick='controls_e()' title='Veja que tipo de bloco é este!'>continuar laço</a>;\n"
    }
    throw "Unknown flow statement.";
};
Blockly.Instrucoes.math = {};
Blockly.Instrucoes.math_number = function(a) {
    return ["<a href='#numero' onclick='math_a()' class='ints' title='Veja que tipo de bloco é este!'>"+parseFloat(a.getFieldValue("NUM"))+"</a>", Blockly.Instrucoes.ORDER_ATOMIC]
};
Blockly.Instrucoes.math_arithmetic = function(a) {
    var b = {
            ADD: ["<a href='#aritmetica' class='ints' onclick='math_b()' title='Veja que tipo de bloco é este!'>+ (soma)</a>", Blockly.Instrucoes.ORDER_ADDITION],
            MINUS: ["<a href='#aritmetica' class='ints' onclick='math_b()' title='Veja que tipo de bloco é este!'> - (subtração)</a> ", Blockly.Instrucoes.ORDER_SUBTRACTION],
            MULTIPLY: ["<a href='#aritmetica' class='ints' onclick='math_b()' title='Veja que tipo de bloco é este!'> * (multiplicação)</a>", Blockly.Instrucoes.ORDER_MULTIPLICATION],
            DIVIDE: ["<a href='#aritmetica' class='ints' onclick='math_b()' title='Veja que tipo de bloco é este!'> / (divisão)</a> ", Blockly.Instrucoes.ORDER_DIVISION],
            POWER: [null, Blockly.Instrucoes.ORDER_COMMA]
        }[a.getFieldValue("OP")],
        c = b[0],
        b = b[1],
        d = Blockly.Instrucoes.valueToCode(a, "A", b) || "0";
    a = Blockly.Instrucoes.valueToCode(a, "B", b) || "0";
    return c ? [d + c + a, b] : [ d + "<a href='#aritmetica' class='ints' onclick='math_b()' title='Veja que tipo de bloco é este!'>^ (elevado)</a>" + a, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.math_single = function(a) {
    var b = a.getFieldValue("OP"),
        c;
    if ("NEG" == b) return a = Blockly.Instrucoes.valueToCode(a, "NUM", Blockly.Instrucoes.ORDER_UNARY_NEGATION) || "0", "-" == a[0] && (a = " " + a), ["-" + a, Blockly.Instrucoes.ORDER_UNARY_NEGATION];
    a = "SIN" == b || "COS" == b || "TAN" == b ? Blockly.Instrucoes.valueToCode(a, "NUM", Blockly.Instrucoes.ORDER_DIVISION) || "0" : Blockly.Instrucoes.valueToCode(a, "NUM", Blockly.Instrucoes.ORDER_NONE) || "0";
    switch (b) {
        case "ABS":
            c = "um número, representando o <a href='#single' class='ints' onclick='math_c()' title='Veja que tipo de bloco é este!' >valor absoluto</a> de <strong>" + a + "</strong>";
            break;
        case "ROOT":
            c = "um número, representando a <a href='#single' class='ints' onclick='math_c()' title='Veja que tipo de bloco é este!' >raiz quadrada</a> de <strong>" +
                a + "</strong>";
            break;
        case "LN":
            c = "um número, representando o <a href='#single' class='ints' onclick='math_c()' title='Veja que tipo de bloco é este!' >logaritmo</a> de <strong>" + a + "</strong>";
            break;
        case "EXP":
            c = "um número, <a href='#single' class='ints' onclick='math_c()' title='Veja que tipo de bloco é este!' >elevado a potência</a> de <strong>" + a + "</strong>";
            break;
        case "POW10":
            c = "um número, representando <a href='#single' class='ints' onclick='math_c()' title='Veja que tipo de bloco é este!' >10 elevado a potência</a> de <strong>" + a + "</strong>";
            break;
        case "ROUND":
            c = "<a href='#arredondar' class='ints' onclick='math_f()' title='Veja que tipo de bloco é este!' >arredondar</a> o valor <strong>" + a + "</strong>";
            break;
        case "ROUNDUP":
            c = "<a href='#arredondar' class='ints' onclick='math_f()' title='Veja que tipo de bloco é este!' >arredondar para cima</a> o valor <strong>" + a + "</strong>";
            break;
        case "ROUNDDOWN":
            c = "<a href='#arredondar' class='ints' onclick='math_f()' title='Veja que tipo de bloco é este!' >arredondar para baixo</a> o valor <strong>" + a + "</strong>";
            break;
        case "SIN":
            c = "Um número, representando <a href='#trigonometria' class='ints' onclick='math_d()' title='Veja que tipo de bloco é este!' >seno</a> do valor <strong>" + a + "</strong>";
            break;
        case "COS":
            c = "Um número, representando o <a href='#trigonometria' class='ints' onclick='math_d()' title='Veja que tipo de bloco é este!' >coseno</a> do valor <strong>" + a + "</strong>";
            break;
        case "TAN":
            c = "Um número, representando a <a href='#trigonometria' class='ints' onclick='math_d()' title='Veja que tipo de bloco é este!' >tangente</a> do valor <strong>" + a + "</strong>"
    }
    if (c) return [c, Blockly.Instrucoes.ORDER_FUNCTION_CALL];
    switch (b) {
        case "LOG10":
            c = "Um número, representando o <a href='#single' class='ints' onclick='math_c()' title='Veja que tipo de bloco é este!' >logaritmo de base 10</a> do valor <strong>" + a +
                "</strong>";
            break;
        case "ASIN":
            c = "Um número, representando o <a href='#trigonometria' class='ints' onclick='math_d()' title='Veja que tipo de bloco é este!' >arco seno</a> do valor <strong>" + a + "</strong>";
            break;
        case "ACOS":
            c = "Um número, representando o <a href='#trigonometria' class='ints' onclick='math_d()' title='Veja que tipo de bloco é este!' >arco co-seno</a> do valor <strong>" + a + "</strong>";
            break;
        case "ATAN":
            c = "Um número, representando o <a href='#trigonometria' class='ints' onclick='math_d()' title='Veja que tipo de bloco é este!' >arco tangente</a> do valor <strong>" + a + "</strong>";
            break;
        default:
            throw "Unknown math operator: " + b;
    }
    return [c, Blockly.Instrucoes.ORDER_DIVISION]
};
Blockly.Instrucoes.math_constant = function(a) {
    return {
        PI: ["Um número, representando a <a href='#constante' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >constante PI</a>", Blockly.Instrucoes.ORDER_MEMBER],
        E: ["Um número, representando a <a href='#constante' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >constante de Euler</a>", Blockly.Instrucoes.ORDER_MEMBER],
        GOLDEN_RATIO: ["Um número, representando a <a href='#constante' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >constante goldem ratio</a>", Blockly.Instrucoes.ORDER_DIVISION],
        SQRT2: ["Um número, representando a <a href='#constante' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >raiz quadrada de 2</a>", Blockly.Instrucoes.ORDER_MEMBER],
        SQRT1_2: ["Um número, representando a <a href='#constante' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >raiz quadrada de 1/2</a>", Blockly.Instrucoes.ORDER_MEMBER],
        INFINITY: ["Um número, representando <a href='#constante' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >Infinito</a>", Blockly.Instrucoes.ORDER_ATOMIC]
    }[a.getFieldValue("CONSTANT")]
};
Blockly.Instrucoes.math_number_property = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "NUMBER_TO_CHECK", Blockly.Instrucoes.ORDER_MODULUS) || "0",
        c = a.getFieldValue("PROPERTY"),
        d;
    if ("PRIME" == c) d= b + " é um número <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!'>primo</a>";
    switch (c) {
        case "EVEN":
            d = b + " é um número <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!' >par</a>";
            break;
        case "ODD":
            d = b + " é um número <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!' >ímpar</a>";
            break;
        case "WHOLE":
            d = b + " é um número <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!' >inteiro</a>";
            break;
        case "POSITIVE":
            d =
                b + " é um número <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!' >positivo</a>";
            break;
        case "NEGATIVE":
            d = b + " é um número <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!' >negativo</a>";
            break;
        case "DIVISIBLE_BY":
            a = Blockly.Instrucoes.valueToCode(a, "DIVISOR", Blockly.Instrucoes.ORDER_MODULUS) || "<img src='img/blockly.png' height='20' width='30'>", d = b + " <a href='#propriedade' class='ints' onclick='math_e()' title='Veja que tipo de bloco é este!' >é divisivel</a> por <strong>" + a +"</strong>";
    }
    return [d, Blockly.Instrucoes.ORDER_EQUALITY]
};
Blockly.Instrucoes.math_change = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "DELTA", Blockly.Instrucoes.ORDER_ADDITION) || "0";
    a = Blockly.Instrucoes.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n"
};
Blockly.Instrucoes.math_round = Blockly.Instrucoes.math_single;
Blockly.Instrucoes.math_trig = Blockly.Instrucoes.math_single;
Blockly.Instrucoes.math_on_list = function(a) {
    var b = a.getFieldValue("OP");
    switch (b) {
        case "SUM":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_MEMBER) || "<img src='img/blockly.png' height='20' width='30'>";
            a="um número, representando a <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >soma de todos os elementos da lista</a>: "+a;
            break;
        case "MIN":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_COMMA) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um número, representando o <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >menor elemento da lista</a>: " + a;
            break;
        case "MAX":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_COMMA) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um número, representando o <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >maior elemento da lista</a>:" + a;
            break;
        case "AVERAGE":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um número, <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >representando a média da lista</a>:" + a;
            break;
        case "MEDIAN":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um número, representando a <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >mediana da lista</a>:" + a;
            break;
        case "MODE":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um número, representando a <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!'> moda da lista</a>:" + a;
            break;
        case "STD_DEV":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um número, representando o <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >desvio padrão da lista </a>:" + a;
            break;
        case "RANDOM":
            a = Blockly.Instrucoes.valueToCode(a, "LIST", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "um <a href='#mat_lista' class='ints' onclick='math_g()' title='Veja que tipo de bloco é este!' >número aleatório da lista</a> :" + a;
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.math_modulo = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "DIVIDEND", Blockly.Instrucoes.ORDER_MODULUS) || "<strong>0</strong>";
    a = Blockly.Instrucoes.valueToCode(a, "DIVISOR", Blockly.Instrucoes.ORDER_MODULUS) || "<strong>0</strong>";
    return ["<a href='#resto_divisao' class='ints' onclick='math_h()' title='Veja que tipo de bloco é este!' >resto da divisão</a> entre" + b + " e " + a, Blockly.Instrucoes.ORDER_MODULUS]
};
Blockly.Instrucoes.math_constrain = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_COMMA) || "0",
        c = Blockly.Instrucoes.valueToCode(a, "LOW", Blockly.Instrucoes.ORDER_COMMA) || "0";
    a = Blockly.Instrucoes.valueToCode(a, "HIGH", Blockly.Instrucoes.ORDER_COMMA) || "Infinity";
    return ["<a href='#limite' class='ints' onclick='math_i()' title='Veja que tipo de bloco é este!' >restringe o número</a>" + b + " numa sequência entre o número inferior <strong>" + c + "</strong> e superior <strong>" + a +"</strong>", Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.math_random_int = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "FROM", Blockly.Instrucoes.ORDER_COMMA) || "0";
    a = Blockly.Instrucoes.valueToCode(a, "TO", Blockly.Instrucoes.ORDER_COMMA) || "0";
    return "<a href='#int_aleatorio' class='ints' onclick='math_j()' title='Veja que tipo de bloco é este!' >um número inteiro aleatório</a> entre os números " + b + " e " + a
};
Blockly.Instrucoes.math_random_float = function(a) {
    return ["<a href='#real_aleatorio' class='ints' onclick='math_k()' title='Veja que tipo de bloco é este!' >um número real aleatório</a> entre 0 e 1", Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
//blocos de texto
Blockly.Instrucoes.texts = {};
Blockly.Instrucoes.text = function(a) {
    return ["<a href='#texto' class='ints' onclick='text_a()' title='Veja que tipo de bloco é este!' >"+Blockly.Instrucoes.quote_(a.getFieldValue("TEXT",))+"</a>", Blockly.Instrucoes.ORDER_ATOMIC]
};
Blockly.Instrucoes.text_join = function(a) {
    switch (a.itemCount_) {
        case 0:
            return ["<img src='img/blockly.png' height='20' width='30'>", Blockly.Instrucoes.ORDER_ATOMIC];
        case 1:
            return ["criar texto com " + (Blockly.Instrucoes.valueToCode(a, "ADD0", Blockly.Instrucoes.ORDER_NONE) || "''"), Blockly.Instrucoes.ORDER_FUNCTION_CALL];
        case 2:
            var b = Blockly.Instrucoes.valueToCode(a, "ADD0", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            a = Blockly.Instrucoes.valueToCode(a, "ADD1", Blockly.Instrucoes.ORDER_NONE) || "<img src='img/blockly.png' height='20' width='30'>";
            return ["criar texto juntanto " + b + " com " + a, Blockly.Instrucoes.ORDER_ADDITION];
        default:
            for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Instrucoes.valueToCode(a, "ADD" + c, Blockly.Instrucoes.ORDER_COMMA) || "<img src='img/blockly.png' height='20' width='30'>";
            a = "<a href='#juntartexto' class='ints' onclick='text_b()' title='Veja que tipo de bloco é este!' >criar texto juntanto</a> " + b.join(",") + "";
            return [a, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
    }
};
Blockly.Instrucoes.text_append = function(a) {
    var b = Blockly.Instrucoes.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    a = Blockly.Instrucoes.valueToCode(a, "TEXT", Blockly.Instrucoes.ORDER_NONE) || "''";
    return "<a href='#acrescentar' class='ints' onclick='text_c()' title='Veja que tipo de bloco é este!' >acrescentar o texto</a> "+a+ " na variável <strong>"+b+"</strong>";
};
Blockly.Instrucoes.text_length = function(a) {
    return ["<a href='#tamanhotexto' class='ints' onclick='text_d()' title='Veja que tipo de bloco é este!' >tamanho do texto</a> "+(Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_FUNCTION_CALL) || "''"), Blockly.Instrucoes.ORDER_MEMBER]
};
Blockly.Instrucoes.text_isEmpty = function(a) {
    return [" verifica se "+(Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_MEMBER) || "''")+" é um <a href='#textovazio' class='ints' onclick='text_e()' title='Veja que tipo de bloco é este!' >texto vazio</a>", Blockly.Instrucoes.ORDER_LOGICAL_NOT]
};
Blockly.Instrucoes.text_indexOf = function(a) {
    var b = "FIRST" == a.getFieldValue("END") ? " <a href='#textovazio' class='ints' onclick='text_f()' title='Veja que tipo de bloco é este!' >primeira ocorrência do texto</a> " : "<a href='#textovazio' class='ints' onclick='text_f()' title='Veja que tipo de bloco é este!' >última ocorrência</a> do texto ",
        c = Blockly.Instrucoes.valueToCode(a, "FIND", Blockly.Instrucoes.ORDER_NONE) || "''";
    a =b+c+" no texto da variável " +(Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_MEMBER) || "''");
    return Blockly.Instrucoes.ONE_BASED_INDEXING ? [a, Blockly.Instrucoes.ORDER_ADDITION] : [a, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.text_charAt = function(a) {
	
   var b = a.getFieldValue("WHERE") || "FROM_START",
        c = Blockly.Instrucoes.valueToCode(a, "VALUE", "RANDOM" == b ? Blockly.Instrucoes.ORDER_NONE : Blockly.Instrucoes.ORDER_MEMBER) || "''";
    switch (b) {
        case "FIRST":
            return ["obter a <strong>primeira letra</strong> da lista <strong>" +c+ "</strong>", Blockly.Instrucoes.ORDER_FUNCTION_CALL];
        case "LAST":
            return ["obter a <strong>última letra</strong> da lista <strong>" +c+ "</strong>", Blockly.Instrucoes.ORDER_FUNCTION_CALL];
        case "FROM_START":
            return a =Blockly.Instrucoes.getAdjusted(a, "AT")||"teste",["obter a <strong>letra de nº "+ a +"</strong> no texto da variável <strong>"+ c + "</strong>", Blockly.Instrucoes.ORDER_FUNCTION_CALL]; 
        case "FROM_END":
            return a = Blockly.Instrucoes.getAdjusted(a, "AT")||"teste2", ["obter a letra de nº <strong>" + a + "</strong> a <strong>partir do final</strong> no texto da variável <strong>"+ c + "</strong>", Blockly.Instrucoes.ORDER_FUNCTION_CALL];
        case "RANDOM":
            return ["obter a <strong>uma letra aleatória</strong> da lista <strong>" +c+ "</strong>", Blockly.Instrucoes.ORDER_FUNCTION_CALL]
    }
    throw "Unhandled option (text_charAt).";
};
Blockly.Instrucoes.text.getIndex_ = function(a, b, c) {
    return "FIRST" == b ? "0" : "FROM_END" == b ? a + ".length - 1 - " + c : "LAST" == b ? a + ".length - 1" : c
};
Blockly.Instrucoes.text_getSubstring = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "STRING", Blockly.Instrucoes.ORDER_FUNCTION_CALL) || "''",
        c = a.getFieldValue("WHERE1"),
        d = a.getFieldValue("WHERE2");
    if ("FIRST" != c || "LAST" != d)
        if (b.match(/^'?\w+'?$/) || "FROM_END" != c && "LAST" != c && "FROM_END" != d && "LAST" != d) {
            switch (c) {
                case "FROM_START":
                    var e = Blockly.Instrucoes.getAdjusted(a, "AT1");
                    break;
                case "FROM_END":
                    e = Blockly.Instrucoes.getAdjusted(a, "AT1", 1, !1, Blockly.Instrucoes.ORDER_SUBTRACTION);
                    e = e+" contando do final";
                    break;
                case "FIRST":
                    e = "0";
                    break;
                default:
                    throw "Unhandled option (text_getSubstring).";
            }
            switch (d) {
                case "FROM_START":
                    a = Blockly.Instrucoes.getAdjusted(a, "AT2", 1);
                    break;
                case "FROM_END":
                    a = Blockly.Instrucoes.getAdjusted(a, "AT2", 0, !1, Blockly.Instrucoes.ORDER_SUBTRACTION);
                    a = a+" contando do final";
                    break;
                case "LAST":
                    a = " última";
                    break;
                default:
                    throw "Unhandled option (text_getSubstring).";
            }
            b ="obter um trecho entre a letra na posição <strong>" + e + "</strong> até a letra na posoção <strong>" + a + "</strong> do texto da variável <strong>"+b+"</strong>";
        } else {
            e = Blockly.Instrucoes.getAdjusted(a, "AT1");
            a = Blockly.Instrucoes.getAdjusted(a, "AT2");
            var f = Blockly.Instrucoes.text.getIndex_,
                g = {
                    FIRST: "First",
                    LAST: "Last",
                    FROM_START: "FromStart",
                    FROM_END: "FromEnd"
                },
                b = Blockly.Instrucoes.provideFunction_("subsequence" + g[c] + g[d], ["function " + Blockly.Instrucoes.FUNCTION_NAME_PLACEHOLDER_ + "(sequence" + ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") + ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") + ") {", "  var start = " + f("sequence", c, "at1") + ";", "  var end = " + f("sequence", d, "at2") + " + 1;", "  return sequence.slice(start, end);", "}"]) + "(" + b + ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") + ("FROM_END" == d || "FROM_START" ==
                    d ? ", " + a : "") + ")"
        }
    return [b, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.text_changeCase = function(a) {
    var b = {
        UPPERCASE: " para maiúsculo",
        LOWERCASE: " para minúsculo",
        TITLECASE: null
    }[a.getFieldValue("CASE")];
    a = Blockly.Instrucoes.valueToCode(a, "TEXT", b ? Blockly.Instrucoes.ORDER_MEMBER : Blockly.Instrucoes.ORDER_NONE) || "''";
    return [b ? a + b : a + "para nome próprio", Blockly.Instrucoes.ORDER_FUNCTION_CALL
    ]
};
Blockly.Instrucoes.text_trim = function(a) {
    var b = {
        LEFT: " <strong>à esquerda de </strong>",
        RIGHT: " <strong>à direita de </strong>",
        BOTH: " <strong>de ambos os lados de</strong> "
    }[a.getFieldValue("MODE")];
    return ["remover espaçoes "+b+(Blockly.Instrucoes.valueToCode(a, "TEXT", Blockly.Instrucoes.ORDER_MEMBER) || "''"), Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.text_print = function(a) {
    return "<a href='#textprint' class='ints' onclick='text_k()'>Imprimir</a> bloco " +(Blockly.Instrucoes.valueToCode(a, "TEXT", Blockly.Instrucoes.ORDER_NONE) || "''") + "\n"
};
Blockly.Instrucoes.text_prompt_ext = function(a) {
    var b = (a.getField("TEXT") ? Blockly.Instrucoes.quote_(a.getFieldValue("TEXT")) : Blockly.Instrucoes.valueToCode(a, "TEXT", Blockly.Instrucoes.ORDER_NONE) || "''");
	"TEXT" == a.getFieldValue("TYPE") && (b = "<a href='#textprompt' class='ints' onclick='text_l()' title='Veja que tipo de bloco é este!'>Pede um texto</a> ao usuário com a mensagem " +b);
    "NUMBER" == a.getFieldValue("TYPE") && (b = "<a href='#textprompt' class='ints' onclick='text_l()' title='Veja que tipo de bloco é este!'>Pede um número</a> ao usuário com a mensagem " +b);
    return [b, Blockly.Instrucoes.ORDER_FUNCTION_CALL]
};
Blockly.Instrucoes.text_prompt = Blockly.Instrucoes.text_prompt_ext;
Blockly.Instrucoes.variables = {};
Blockly.Instrucoes.variables_get = function(a) {
    return ["<a href='#variavel' class='ints' onclick='variables_b()' title='Veja que tipo de bloco é este!'>"+Blockly.Instrucoes.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"</a>",Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.Instrucoes.variables_set = function(a) {
    var b = Blockly.Instrucoes.valueToCode(a, "VALUE", Blockly.Instrucoes.ORDER_ASSIGNMENT) || "<img src='img/blockly.png' height='20' width='30'>";
    return "A variável <strong>"+Blockly.Instrucoes.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + "</strong> <a href='#setvariavel' class='ints' onclick='variables_a()' title='Veja que tipo de bloco é este!'>recebe</a> : " + b + "\n"
};

//tooltips
//blocos de repetição
	function controls_a(){
	setTimeout(function (){$('#label_enquanto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_enquanto').tooltip('destroy');} , 5000);
	}
	function controls_b(){
	setTimeout(function (){$('#label_repeticao').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_repeticao').tooltip('destroy');} , 5000);
	}
	function controls_c(){
	setTimeout(function (){$('#label_repeticao_cont').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_repeticao_cont').tooltip('destroy');} , 5000);
	}
	function controls_d(){
	setTimeout(function (){$('#label_repeticao_lista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_repeticao_lista').tooltip('destroy');} , 5000);
	}
	function controls_e(){
	setTimeout(function (){$('#label_break').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_break').tooltip('destroy');} , 5000);
	}
//blocos de logica
	function logic_a (){
	setTimeout(function (){$('#label_se_verdadeiro').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_se_verdadeiro').tooltip('destroy');} , 5000);
	}
	function logic_b (){
	setTimeout(function (){$('#label_comparacao').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_comparacao').tooltip('destroy');} , 5000);
	}
	function logic_c (){
	setTimeout(function (){$('#label_operacao_logica').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_operacao_logica').tooltip('destroy');} , 5000);
	}
	function logic_d (){
	setTimeout(function (){$('#label_negacao_logica').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_negacao_logica').tooltip('destroy');} , 5000);
	}
	function logic_e (){
	setTimeout(function (){$('#label_logica_boolean').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_logica_boolean').tooltip('destroy');} , 5000);
	}
	function logic_f (){
	setTimeout(function (){$('#label_logica_nulo').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_logica_nulo').tooltip('destroy');} , 5000);
	}
	function logic_g (){
	setTimeout(function (){$('#label_logica_ternaria').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_logica_ternaria').tooltip('destroy');} , 5000);
	}
//blocos de matematica

	function math_a (){
	setTimeout(function (){$('#label_numero').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_numero').tooltip('destroy');} , 5000);
	}
	function math_b (){
	setTimeout(function (){$('#label_aritmetica').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_aritmetica').tooltip('destroy');} , 5000);
	}
	function math_c (){
	setTimeout(function (){$('#label_single').tooltip('show');} , 1000);
		setTimeout(function (){$('#llabel_single').tooltip('destroy');} , 5000);
	}
	function math_d (){
	setTimeout(function (){$('#label_trigonometria').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_trigonometria').tooltip('destroy');} , 5000);
	}
	function math_e (){
	setTimeout(function (){$('#label_propriedade').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_propriedade').tooltip('destroy');} , 5000);
	}
	function math_f (){
	setTimeout(function (){$('#label_arredondar').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_arredondar').tooltip('destroy');} , 5000);
	}
	function math_g (){
	setTimeout(function (){$('#label_mat_lista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_mat_lista').tooltip('destroy');} , 5000);
	}
	function math_h(){
	setTimeout(function (){$('#label_resto_divisao').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_resto_divisao').tooltip('destroy');} , 5000);
	}function math_i (){
	setTimeout(function (){$('#label_limite').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_limite').tooltip('destroy');} , 5000);
	}
	function math_j (){
	setTimeout(function (){$('#label_int_aleatorio').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_int_aleatorio').tooltip('destroy');} , 5000);
	}
	function math_k (){
	setTimeout(function (){$('#label_real_aleatorio').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_real_aleatorio').tooltip('destroy');} , 5000);
	}
	function math_i (){
	setTimeout(function (){$('#label_constante').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_constante').tooltip('destroy');} , 5000);
	}
	//blocos de texto
	function text_a (){
	setTimeout(function (){$('#label_texto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_texto').tooltip('destroy');} , 5000);
	}
	function text_b (){
	setTimeout(function (){$('#label_juntartexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_juntartexto').tooltip('destroy');} , 5000);
	}
	function text_c (){
	setTimeout(function (){$('#label_acrescentartexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_acrescentartexto').tooltip('destroy');} , 5000);
	}
	function text_d (){
	setTimeout(function (){$('#label_tamanhotexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_tamanhotexto').tooltip('destroy');} , 5000);
	}
	function text_e (){
	setTimeout(function (){$('#label_textovazio').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_textovazio').tooltip('destroy');} , 5000);
	}
	function text_f (){
	setTimeout(function (){$('#label_ocorrenciatexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_ocorrenciatexto').tooltip('destroy');} , 5000);
	}
	function text_g (){
	setTimeout(function (){$('#label_letranotexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_letranotexto').tooltip('destroy');} , 5000);
	}
	function text_h (){
	setTimeout(function (){$('#label_subtexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_subtexto').tooltip('destroy');} , 5000);
	}
	function text_i (){
	setTimeout(function (){$('#label_ajustartexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_ajustartexto').tooltip('destroy');} , 5000);
	}
	function text_j (){
	setTimeout(function (){$('#label_espacotexto').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_espacotexto').tooltip('destroy');} , 5000);
	}
	function text_k (){
	setTimeout(function (){$('#label_textprint').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_textprint').tooltip('destroy');} , 5000);
	}
	function text_l (){
	setTimeout(function (){$('#label_textprompt').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_textprompt').tooltip('destroy');} , 5000);
	}
//blocos de lista
	function lists_a (){
	setTimeout(function (){$('#label_listwith').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_listwith').tooltip('destroy');} , 5000);
	}
	function lists_b (){
	setTimeout(function (){$('#label_repeticaolista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_repeticaolista').tooltip('destroy');} , 5000);
	}
	function lists_c (){
	setTimeout(function (){$('#label_tamanholista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_tamanholista').tooltip('destroy');} , 5000);
	}
	function lists_d (){
	setTimeout(function (){$('#label_listavazia').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_listavazia').tooltip('destroy');} , 5000);
	}
	function lists_e (){
	setTimeout(function (){$('#label_ocorrencialista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_ocorrencialista').tooltip('destroy');} , 5000);
	}
	function lists_e (){
	setTimeout(function (){$('#label_obterlista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_obterlista').tooltip('destroy');} , 5000);
	}
	function lists_f (){
	setTimeout(function (){$('#label_inserirlista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_inserirlista').tooltip('destroy');} , 5000);
	}
	function lists_g (){
	setTimeout(function (){$('#label_sublista').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_sublista').tooltip('destroy');} , 5000);
	}
	function lists_h (){
	setTimeout(function (){$('#label_listadelimitador').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_listadelimitador').tooltip('destroy');} , 5000);
	}
	function lists_i (){
	setTimeout(function (){$('#label_listasort').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_listasort').tooltip('destroy');} , 5000);
	}
//variaveis
		function variables_a (){
	setTimeout(function (){$('#label_setvariavel').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_setvariavel').tooltip('destroy');} , 5000);
	}
		function variables_b (){
	setTimeout(function (){$('#label_variavel').tooltip('show');} , 1000);
		setTimeout(function (){$('#label_variavel').tooltip('destroy');} , 5000);
	}