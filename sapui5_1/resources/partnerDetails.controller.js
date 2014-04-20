sap.ui.controller("sapui5_1.resources.partnerDetails", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 */

//	onInit: function(oEvent) {


//	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 */
//	onExit: function() {

//	}

	/**
	 * This method populates the UI with business data according to received context and then opens the UI. 
	 * @param oContext - the OData context of the previous view  
	 */
	loadContent:function(oContext){

		var sFirstDetailContext = this.setPartnerFirstDetails(oContext);
		var oOverlaycontainer = sap.ui.getCore().byId("ID_partnerDetailsOverlay");

		if(!oOverlaycontainer.isOpen()){
			oOverlaycontainer.open();
		}  
	},
	
	/**
	 * Updates the details panel with business data obtained after an OData call to the SAP NetWeaver Gateway system.
	 * @param oContext - the OData context of the previous view 
	 */
	setPartnerFirstDetails:function(oContext){
		var oModel  = sap.ui.getCore().byId("ID_PartnerTable").getModel();
		var sNewContext = "";
		oModel.read("",oContext,[],false,
				function(oData,response){
						sap.ui.getCore().byId("ID_partnerDetails_Partner_PartnerNo_1").setText(oData["PartnerNo"]);
						sap.ui.getCore().byId("ID_partnerDetails_Partner_McName2_1").setText(oData["McName2"]);
						sap.ui.getCore().byId("ID_partnerDetails_Partner_McName1_1").setText(oData["McName1"]);
						sap.ui.getCore().byId("ID_partnerDetails_Partner_Type_1").setText(oData["Type"]);
						sap.ui.getCore().byId("ID_partnerDetails_Partner_Bpkind_1").setText(oData["Bpkind"]);
						sap.ui.getCore().byId("ID_partnerDetails_Partner_Chusr_1").setText(oData["Chusr"]);
						var sContext = response.data.__metadata.uri;
						sNewContext = sContext.substring(sContext.lastIndexOf("/") + 1);
				},
				function(error){
					if (error.response != undefined ){
						displayError({message: error.message, statusCode: error.response.statusCode , statusText: error.response.statusText, requestUri: error.response.requestUri});
					}
					else if (error.message != undefined){
						alert(oBundle.getText("MESSAGE") + " " + error.message);
					}
					else{
						alert(oBundle.getText("GENERAL_ERROR_MESSAGE"));
					}
				});
		return sNewContext;
	},

 	

});