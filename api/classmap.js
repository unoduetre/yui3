YAHOO.env.classMap = {"Console": "console", "YQL": "yql", "DOMEventFacade": "event", "plugin.NodeFocusManager": "node-focusmanager", "YUI": "yui", "DataSource.Local": "datasource", "Plugin.EditorPara": "editor", "Easing": "anim", "NodeList": "node", "Selector": "dom", "Text.WordBreak": "text", "Widget": "widget", "Plugin.Drag": "dd", "Object": "yui", "YUI~array~extras": "collection", "Base": "base", "History.Module": "history-deprecated", "Plugin.Base": "plugin", "Do.AlterArgs": "event-custom", "Pollable": "datasource", "ImgLoadImgObj": "imageloader", "Text.AccentFold": "text", "ClassNameManager": "classnamemanager", "YUI~dump": "dump", "Plugin.DDWindowScroll": "dd", "Assert.ComparisonFailure": "test", "DataSchema.XML": "dataschema", "TabView": "tabview", "ArrayList": "collection", "Loader": "loader", "Tab": "tabview", "Attribute": "attribute", "Text.Data.WordBreak": "text", "Plugin.SortScroll": "sortable", "Do.Prevent": "event-custom", "DataSourceCacheExtension": "datasource", "AutoCompleteHighlighters": "autocomplete", "State": "attribute", "HistoryHash": "history", "Test.Format": "test", "Plugin.Shim": "shim-plugin", "CustomEvent": "event-custom", "Plugin.Drop": "dd", "Text.Data.AccentFold": "text", "JSONPRequest": "jsonp", "DataSource.Get": "datasource", "Plugin.CreateLinkBase": "editor", "DataSourceXMLSchema": "datasource", "WidgetPosition": "widget-position", "Uploader": "uploader", "Plugin.Align": "align-plugin", "YUI~oop": "oop", "DD.Drop": "dd", "DataType.Number": "datatype", "HistoryBase": "history", "DataSourceArraySchema": "datasource", "Plugin.EditorLists": "editor", "ScrollView": "scrollview-base", "Profiler": "profiler", "Queue": "yui", "DataSource.IO": "datasource", "Plugin.EditorTab": "editor", "WidgetChild": "widget-child", "ImgLoadGroup": "imageloader", "Test.Wait": "test", "Do.Method": "event-custom", "AutoCompleteBase": "autocomplete", "SliderValueRange": "slider", "DataSourceCache": "datasource", "Selection": "editor", "EditorBase": "editor", "Get": "yui", "Do.AlterReturn": "event-custom", "SyntheticEvent.Notifier": "event", "Event": "event", "Plugin.NodeFX": "anim", "Escape": "escape", "CacheOffline": "cache", "UA": "yui", "DataSourceJSONSchema": "datasource", "WidgetParent": "widget-parent", "DOM": "dom", "YUI~array~invoke": "collection", "Plugin.Flick": "node-flick", "Cache": "cache", "DD.Delegate": "dd", "plugin.NodeMenuNav": "node-menunav", "DataSchema.Base": "dataschema", "Do.Halt": "event-custom", "YUI~substitute": "substitute", "SyntheticEvent": "event", "Mock": "test", "Node": "node", "Test.Runner": "test", "Assert.ShouldError": "test", "Plugin.DDConstrained": "dd", "AutoComplete": "autocomplete", "ArrayList~add": "collection", "JSON": "json", "Test.Manager": "test", "Cookie": "cookie", "DataType.Date": "datatype", "DataSchema.Array": "dataschema", "WidgetPositionConstrain": "widget-position-constrain", "Lang": "yui", "DD.Drag": "dd", "DataSchema.JSON": "dataschema", "Transition": "transition", "AsyncQueue": "async-queue", "Highlight": "highlight", "Plugin.AutoComplete": "autocomplete", "Plugin.ExecCommand": "editor", "DataSource.Function": "datasource", "History": "history-deprecated", "Plugin.Host": "pluginhost-base", "Plugin.DDNodeScroll": "dd", "Plugin.Sortable": "sortable", "Intl": "intl", "Frame": "editor", "YQLRequest": "yql", "StyleSheet": "stylesheet", "Plugin.WidgetAnim": "widget-anim", "AutoCompleteList": "autocomplete", "Assert.Error": "test", "ArrayList~filter": "collection", "Mock.Value.ObjectAssert": "test", "DD.Scroll": "dd", "SliderBase": "slider", "Overlay": "overlay", "SWF": "swf", "Subscriber": "event-custom", "Plugin.EditorBR": "editor", "io": "io", "Test.Suite": "test", "Assert.UnexpectedError": "test", "Do": "event-custom", "Anim": "anim", "Plugin.Cache": "cache", "DateAssert": "test", "DD.DDM": "dd", "Coverage.Format": "test", "WidgetStack": "widget-stack", "Test.Case": "test", "Assert": "test", "Slider": "slider", "Assert.UnexpectedValue": "test", "config": "yui", "Resize": "resize", "AutoCompleteFilters": "autocomplete", "Assert.ShouldFail": "test", "DataSchema.Text": "dataschema", "EventTarget": "event-custom", "DataType.XML": "datatype", "Test.Reporter": "test", "WidgetStdMod": "widget-stdmod", "ArrayAssert": "test", "DataType.Date.Locale": "datatype", "Plugin.DDProxy": "dd", "Plugin.ScrollViewPaginator": "scrollview-paginator", "EventHandle": "event-custom", "Do.Error": "event-custom", "HistoryHTML5": "history", "Plugin.ScrollViewScrollbars": "scrollview-scrollbars", "Plugin.ConsoleFilters": "console-filters", "QueryString": "querystring", "Plugin.EditorBidi": "editor", "WidgetPositionAlign": "widget-position-align", "ValueChange": "event-valuechange", "ClickableRail": "slider", "Array": "yui", "EventFacade": "event-custom", "DataSourceTextSchema": "datasource"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
