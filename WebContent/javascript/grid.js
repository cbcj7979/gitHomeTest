Ext.onReady(function(){
	var datas=[['1','老大','23'],['2','老二','22'],['3','老三','24']];
	Ext.create('Ext.grid.Panel',{
		renderTo:Ext.getBody(),
		width:200,
		height:300,
		frame:true,
		viewConfig:{
			stripeRows: true,
			forceFit:true
		},
		store:{
			fields:['id','name','age'],
			proxy:{
				type:'memory',
				data:datas,
				reader:'array'
			},
			autoLoad:true
		},
		columns:[{header:'id',width:30,dataIndex:'id',sortable:true},
		{header:'姓名',width:80,dataIndex:'name',sortable:true},
		{header:'年龄',width:80,dataIndex:'age',sortable:true}]
		
	});
});