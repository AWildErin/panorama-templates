"use strict";

// --------------------------------------------------------------------------------------------------
// Purpose: Main menu controller
//			NOTE: This is NOT a class because the main menu uses a global v8 context, which is never
//			cleared. This means that if you do use a class here, reloading the JS file will result
//			in v8 complaining that the class is already defined. So basically, yes, you can
//			use a class here, but ONLY if you DONT want to be able to reload JS on the main menu
// --------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-var
var MainMenuController = (function () {

    function _onEscapeKeyPressed(_eSource, _nRepeats, _focusPanel) {
    	if (GameInterfaceAPI.GetGameUIState() === GameUIState.PAUSEMENU) {
			$.DispatchEvent('ChaosMainMenuResumeGame');
        }
    }

    function _onShowMainMenu() {
    }

    function _onHideMainMenu() {
    }

    function _onShowPauseMenu() {
    }

    function _onHidePauseMenu() {
    }

	return {
		onShowMainMenu: _onShowMainMenu,
		onHideMainMenu: _onHideMainMenu,
		onShowPauseMenu: _onShowPauseMenu,
		onHidePauseMenu: _onHidePauseMenu,
		onEscapeKeyPressed: _onEscapeKeyPressed,
	};

})();


// Entry point called on create
(function () {
	$.RegisterForUnhandledEvent("ChaosShowMainMenu", MainMenuController.onShowMainMenu);
	$.RegisterForUnhandledEvent("ChaosHideMainMenu", MainMenuController.onHideMainMenu);
	$.RegisterForUnhandledEvent("ChaosShowPauseMenu", MainMenuController.onShowPauseMenu);
	$.RegisterForUnhandledEvent("ChaosHidePauseMenu", MainMenuController.onHidePauseMenu);
})();