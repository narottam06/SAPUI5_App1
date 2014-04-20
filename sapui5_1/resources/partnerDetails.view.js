sap.ui.jsview("sapui5_1.resources.partnerDetails", {

	getControllerName : function() {
		return "sapui5_1.resources.partnerDetails";
	},

	createContent : function(oController) {
		this.createOverlayContainer();
	},
	
	createOverlayContainer:function(){
		
		var oOverlayContainer = new sap.ui.ux3.OverlayContainer("ID_partnerDetailsOverlay",{openButtonVisible:false});
		oOverlayContainer.addContent(this.createFirstDetailPartner());
		return oOverlayContainer;

	},

	/**
	 * Returns a panel with the user-selected name-value properties.  
	 * @returns {sap.ui.commons.Panel}
	 */
	createFirstDetailPartner:function(){
	
		var oPanel = new sap.ui.commons.Panel({
			width: "100%",
			height: "40%",
			text: oBundle.getText("PARTNER__DETAILS_TITLE"),
			showCollapseIcon: false,
			areaDesign: sap.ui.commons.enums.AreaDesign.Plain
		});

		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: true, 
			width: '100%', 
			widths:["10%", "90%"], 
			columns: 2
		});
			
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("PARTNER_PARTNERNO"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_partnerDetails_Partner_PartnerNo_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("PARTNER_MCNAME2"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_partnerDetails_Partner_McName2_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("PARTNER_MCNAME1"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_partnerDetails_Partner_McName1_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("PARTNER_TYPE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_partnerDetails_Partner_Type_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("PARTNER_BPKIND"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_partnerDetails_Partner_Bpkind_1",{editable:false })
			);
			oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("PARTNER_CHUSR"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_partnerDetails_Partner_Chusr_1",{editable:false })
			);

		oPanel.addContent(oMatrix);
		return oPanel;

	},

 
});