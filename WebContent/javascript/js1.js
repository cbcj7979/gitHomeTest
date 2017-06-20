function init() {
         Ext.MessageBox.alert("ExtJS", "你好Hello ExtJS");
			
      }
//    Ext.onReady(init);
      
      
/*Ext.onReady(function() {
			

			var win = new Ext.Window({
						title : "hello",
						width : 300,
						height : 200,
						html : '<h1>Hello, ExtJs!哈哈</h1>'
					});
			win.show();
		});*/
/*Ext.onReady(function(){
		Ext.QuickTips.init();
		var form = new Ext.form.Panel({
		title:'表单',
		height:200,
		width:200,
		frame:true,
		renderTo:'form',
		layout:'anchor',
		margin:'200,200',
		defaults:{
			anchor:'80%',
			allowBlank:false,
			blankText:'不允许为空'
		
		},
		items:[{
				xtype:'textfield',
				fieldLabel:'姓名',
				allowBlank:false
				
				
		},{
				xtype:'numberfield',
				fieldLabel:'年龄'
				
				
		}]
});
		
});*/


function initpanel(){
	var panel=Ext.create('Ext.panel.Panel',{
		layout:'card',
		width:400,
		height:400,
		title:'面板布局',
		frame:true,
		renderTo:Ext.getBody(),
		defaults:{},
		activeItem:0,
		items: [{
	        id: 'card-1',
	        html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
	    	},{
	        id: 'card-2',
	        html: '<p>Step 2 of 3</p>'
	    	},{
	        id: 'card-3',
	        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
   		 	}],
   		 buttons:[{
   		 	text:'上一页',
   		 	handler:change
   		 },{
   		 	text:'下一页',
   		 	handler:change
   		 	}]
	});

	function change(btn){
		var index = Number(panel.layout.activeItem.id.substring(5));
		if(btn.text=='上一页'){
			index-=1;
			if(index<1){
				index=1;
			}
		}else{
			index+=1;
			if(index>3){
				index=3;
			}
		}
		panel.layout.setActiveItem('card-'+index);
	};
};
Ext.onReady(initpanel);
		












