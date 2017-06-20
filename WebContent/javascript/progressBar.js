Ext.onReady(function(){
	/*var p = Ext.create('Ext.ProgressBar',{
		renderTo:Ext.getBody(),
		width:300,
		margin:200
	});
	p.wait({animate:true,
			interval:500,
			duration:10000,
			increment:100,
			text:'Updating',
			fn:function(){
				p.updateText('done!');
			}
		});*/
	
	/*var progressbar =  Ext.create('Ext.ProgressBar',{
			width:300,
			margin:200,
			cls:'focus',
			renderTo:Ext.getBody()
	});
	var count=0;
	var perrent='';
	var perrentText='';
	var task={
		run:function(){
			count++;
			if(count>10){
			progressbar.hide();
			}
			perrent=count/10;
			perrentText=perrent*100+'%';
			progressbar.updateProgress(perrent,perrentText,true);
		},
		interval:1000,
		repeat:6
		
	};
	Ext.TaskManager.start(task);*/
	
	var toolbar =new Ext.create('Ext.toolbar.Toolbar',{
			renderTo:Ext.getBody(),
			width:500,
			margin:300
	});
		toolbar.add({text:'新建'},{text:'打开'}
		,{text:'编辑'},{text:'保存'},
			{
				xtype:'textfield',
				hideLaber:true,
				width:150
			},'->','<a href="">超链接</a>',{
				xtype:'tbspacer',width:50
			},'静态文本');	
	
});