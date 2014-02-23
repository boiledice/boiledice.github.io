angular.module("ramlEditorApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("views/help.html",
    "<div class=\"modal-header\">\n" +
    "    <h3><i class=\"icon-question-sign\"></i> Help</h3>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <p>\n" +
    "        The API Designer for RAML is built by MuleSoft, and is a web-based editor designed to help you author RAML specifications for your APIs.\n" +
    "        <br />\n" +
    "        <br />\n" +
    "        RAML is a human-and-machine readable modeling language for REST APIs, backed by a workgroup of industry leaders.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        To learn more about the RAML specification and other tools which support RAML, please visit <a href=\"http://www.raml.org\" target=\"_blank\">http://www.raml.org</a>.\n" +
    "        <br />\n" +
    "        <br />\n" +
    "        For specific questions, or to get help from the community, head to the community forum at <a href=\"http://forums.raml.org\" target=\"_blank\">http://forums.raml.org</a>.\n" +
    "    </p>\n" +
    "</div>\n"
  );

  $templateCache.put("views/raml-editor-context-menu.tmpl.html",
    "<ul role=\"context-menu\" ng-show=\"opened\">\n" +
    "  <li role=\"context-menu-item\" ng-repeat=\"action in actions\" ng-click=\"action.execute()\">{{ action.label }}</li>\n" +
    "</ul>\n"
  );

  $templateCache.put("views/raml-editor-file-browser.tmpl.html",
    "<raml-editor-context-menu></raml-editor-context-menu>\n" +
    "<ul class=\"file-list\">\n" +
    "  <li class=\"file-item\"\n" +
    "      ng-repeat=\"file in homeDirectory.files | orderBy:'name'\"\n" +
    "      ng-click=\"fileBrowser.selectFile(file)\"\n" +
    "      ng-class=\"{currentfile: fileBrowser.selectedFile === file, dirty: file.dirty, geared: fileBrowser.contextMenuOpenedFor(file)}\">\n" +
    "    <span class=\"file-name\">{{file.name}}</span>\n" +
    "    <i class=\"icon icon-cog\" ng-click=\"fileBrowser.showContextMenu($event, file)\"></i>\n" +
    "  </li>\n" +
    "</ul>\n"
  );

  $templateCache.put("views/raml-editor-main.tmpl.html",
    "<div role=\"raml-editor\" class=\"{{theme}}\" ng-controller=\"ramlEditorMain\">\n" +
    "  <div role=\"notifications\" ng-controller=\"notifications\" class=\"hidden\" ng-class=\"{hidden: !shouldDisplayNotifications}\">\n" +
    "    {{message}}\n" +
    "    <i class=\"icon-ok\" ng-click=\"hideNotifications()\"></i>\n" +
    "  </div>\n" +
    "\n" +
    "  <header>\n" +
    "    <h1>\n" +
    "      <strong>API</strong> Designer\n" +
    "    </h1>\n" +
    "\n" +
    "    <a role=\"logo\" target=\"_blank\" href=\"http://mulesoft.com\"></a>\n" +
    "  </header>\n" +
    "\n" +
    "  <ul class=\"menubar\">\n" +
    "    <li class=\"menu-item menu-item-ll\">\n" +
    "      <raml-editor-new-file-button></raml-editor-new-file-button>\n" +
    "    </li>\n" +
    "    <li class=\"menu-item menu-item-ll\">\n" +
    "      <raml-editor-save-file-button></raml-editor-save-file-button>\n" +
    "    </li>\n" +
    "    <li class=\"spacer file-absolute-path\">{{getSelectedFileAbsolutePath()}}</li>\n" +
    "    <li class=\"menu-item menu-item-fr\" ng-click=\"openHelp()\">\n" +
    "      <i class=\"help icon-question-sign\"></i>\n" +
    "      <span>&nbsp;Help</span>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <div role=\"flexColumns\">\n" +
    "    <raml-editor-file-browser role=\"browser\"></raml-editor-file-browser>\n" +
    "\n" +
    "    <div id=\"browserAndEditor\" ng-splitter=\"vertical\" ng-splitter-collapse-target=\"prev\"><div class=\"split split-left\">&nbsp;</div></div>\n" +
    "\n" +
    "    <div role=\"editor\" ng-class=\"{error: currentError}\">\n" +
    "      <div id=\"code\" role=\"code\"></div>\n" +
    "\n" +
    "      <div role=\"shelf\" ng-show=\"getIsShelfVisible()\" ng-class=\"{expanded: !shelf.collapsed}\">\n" +
    "        <div role=\"shelf-tab\" ng-click=\"toggleShelf()\">\n" +
    "          <i class=\"icon-inbox icon-large\"></i><i ng-class=\"shelf.collapsed ? 'icon-caret-up' : 'icon-caret-down'\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <div role=\"shelf-container\" ng-show=\"!shelf.collapsed\" ng-include src=\"'views/raml-editor-shelf.tmpl.html'\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"consoleAndEditor\" ng-show=\"getIsConsoleVisible()\" ng-splitter=\"vertical\" ng-splitter-collapse-target=\"next\"><div class=\"split split-right\">&nbsp;</div></div>\n" +
    "\n" +
    "    <div ng-show=\"getIsConsoleVisible()\" role=\"preview-wrapper\">\n" +
    "      <div role=\"preview\">\n" +
    "        <div role=\"console\">\n" +
    "          <raml-console with-root-documentation></raml-console>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("views/raml-editor-shelf.tmpl.html",
    "<ul role=\"sections\" ng-controller=\"ramlEditorShelf\">\n" +
    "  <li role=\"section\" ng-repeat=\"section in model.sections | orderBy:orderSections\" class=\"{{section.name | dasherize}}\">\n" +
    "    {{section.name}}&nbsp;({{section.items.length}})\n" +
    "    <ul role=\"items\">\n" +
    "      <li ng-repeat=\"item in section.items\" ng-click=\"itemClick(item)\"><i class=\"icon-reply\"></i><span>{{item.title}}</span></li>\n" +
    "    </ul>\n" +
    "  </li>\n" +
    "</ul>\n"
  );

}]);
