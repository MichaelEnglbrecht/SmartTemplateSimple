sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.smart.controller.Main", {
	onInit: function() {
			this.getView().bindElement("/Products('4711')");
		}
	});

});