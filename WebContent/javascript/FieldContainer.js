var left_Container = new Ext.form.FieldContainer({
            layout: { type: "vbox" },
            width: 480,
            height:300,
            items: [
                { xtype: "fieldcontainer", layout: { type: "hbox" },width:480, items: [
                    { fieldLabel: "姓名", xtype: "textfield", labelWidth: 60, margin: "5 0 0 5",labelAlign:"right" },
                    { fieldLabel: "编号", xtype: "textfield", labelWidth: 90, margin: "5 0 0 5",labelAlign:"right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "人才类型", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "性别", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "身份证", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "出身日期", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "联系电话", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "联系地址", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "电子邮箱", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "视力", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "身高", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "体重", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "现居住地", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "血型", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { xtype: "fieldcontainer", layout: { type: "hbox" }, width: 480, items: [
                    { fieldLabel: "健康状况", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" },
                    { fieldLabel: "婚姻状况", xtype: "textfield", labelWidth: 90, margin: "0 0 0 5", labelAlign: "right" }
                ]
                },
                { fieldLabel: "政治面貌", xtype: "textfield", labelWidth: 60, margin: "0 0 0 5", labelAlign: "right" }
            ]
        });
        var right_Container = new Ext.form.FieldContainer({
            height: 300,
            width: 270,
            layout: { type: "vbox", align: "center" },
            items: [
                { xtype: "fieldset", width: 170, height: 200, title: "个人照片", margin: "10 0 10 0" },
                { xtype: "filefield" ,fieldLabel:"选择照片",labelWidth:60}
            ]
        });
        var tab = new Ext.tab.Panel({
            items: [
                { title: "基本信息", frame: true, layout: { type: "vbox", align: "center" }, items: [
                    { xtype: "fieldset", width: 750, height: 300, items: [left_Container, right_Container], layout: {type:"hbox"} },
                    { xtype: "fieldset", width: 750, height: 200 }
                ]
                },
                { title: "详细信息", frame: true,items:[{xtype: "fieldset", width: 750, height: 300},
                {xtype: "fieldset", width: 750, height: 300}] }
            ]
        });
        Ext.onReady(function () {
            var win = new Ext.window.Window({
                width: 800,
                height: 600,
                title: "成都海翔技术有限公司-职位申请表",
                layout: "fit",
                items: [{  xtype: "form", frame: true, layout: "fit", items: [tab]}]
            });
            win.show();
        });
        
        
