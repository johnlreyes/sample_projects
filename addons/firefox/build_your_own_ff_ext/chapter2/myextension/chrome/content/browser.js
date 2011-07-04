
var myextension = 
{
	'prefservice' : Components
							.classes["@mozilla.org/preferences-service;1"]
							.getService(Components.interfaces['nsIPrefService'])
							.getBranch('extensions.myextension.')
	,

	init: function()
	{
		//alert('init');
		var menuitem = document.getElementById('myextension-toolsmenuitem');
		menuitem.addEventListener(
			'command',
			function(e)
			{
				alert('Welcome from init '+e.target.getAttribute('label'));
			},
			false
		);
		//myextension.prefservice.setBoolPref('showinstatus1', false);
		var showinstatus = myextension.prefservice.getBoolPref('showinstatus.10.08');
		alert('showinstatus='+showinstatus);
		if (showinstatus) 
		{
			document.getElementById('myextension-nba.com').setAttribute('hidden', 'true');
		}
	}
	,

	greet: function() 
	{
		var menuitem = document.getElementById('myextension-toolsmenuitem');
		alert('Welcome to [again] ' + menuitem.getAttribute('label'));

		var newMenuItem = document.createElement('menuitem');
		newMenuItem.setAttribute('label', 'On The Fly MenuItem');

		var separator = document.getElementById('sanitizeSeparator');
		var toolsmenu = document.getElementById('menu_ToolsPopup');

		toolsmenu.insertBefore(newMenuItem, separator);
	}
	,

	showdialog: function() 
	{
		alert('showDialog');
		window.openDialog(
			'chrome://myextension/content/clearconfirm.xul',
			'clearconfirm',
			'modal,centerscreen,resizable=no'
		);
	}
	,

	gotoNBA: function()
	{
		//alert('gotoNBA');
		getBrowser().addTab('http://www.nba.com/', null);
	}

};

window.addEventListener('load', myextension.init, false);
