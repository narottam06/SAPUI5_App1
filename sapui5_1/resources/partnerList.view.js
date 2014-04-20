jQuery.sap.require("sapui5_1.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("sapui5_1.resources.partnerList", {

      getControllerName : function() {
         return "sapui5_1.resources.partnerList";
    	 
      },
      
      createContent : function(oController) {
		var oShell = this.createShell();
       	oShell.addContent(this.createPartnerTable());	
       	return oShell;
       	
      },

      createShell:function(oController){
      
    	  var oShell = sap.ui.ux3.Shell("ID_PartnerShell",{
    	      appIcon: "images/SAPLogo.gif",
    		  appTitle: oBundle.getText("APP_TITLE"),
    		  showLogoutButton:false,
    		  showSearchTool: false,
    		  showInspectorTool: false,
    		  showFeederTool: false,
    		  worksetItems: [new sap.ui.ux3.NavigationItem("navItemList",{key: "PartnerList",text:oBundle.getText("WORKSET_TITLE")})]
    	  });
    	  return oShell;
      },
      
      /**
	 * Returns a table with the required columns, each column is bound for a specific odata service property   
	 * @returns {sap.ui.table.Table}
	 */
      createPartnerTable:function(){
      
    	var oTable = new sap.ui.table.Table("ID_PartnerTable", {
    		visibleRowCount  : 20,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 

    	  oTable.addColumn(new sap.ui.table.Column({
    	  	label: new sap.ui.commons.Label({text:oBundle.getText("PARTNER_PARTNERNO")}),
			template:new sap.ui.commons.Link().bindProperty("text", "PartnerNo")
											  .attachPress(this.getController().onPressGetPartnerdetails),
			sortProperty: "PartnerNo",
			filterProperty: "PartnerNo"
		}));
			

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("PARTNER_MCNAME2")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "McName2"),
			sortProperty: "McName2",
			filterProperty: "McName2"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("PARTNER_MCNAME1")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "McName1"),
			sortProperty: "McName1",
			filterProperty: "McName1"
 		}));
 		return oTable;   		
      }
      
});
