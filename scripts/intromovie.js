'use strict';

class IntroMovie {
    static showIntroMovie()
    {
        $("#IntroMoviePlayer").SetMovie("file://{resources}/videos/intro.webm");
                                                                                              
        $.Schedule(0.0, IntroMovie.playIntroMovie);
        $("#IntroMoviePlayer").SetFocus();
        $.RegisterKeyBind($("#IntroMoviePlayer"), "key_enter,key_space,key_escape", IntroMovie.skipIntroMovie);
    }

    static playIntroMovie()
    {
        $("#IntroMoviePlayer").Play();
    }
    
    static skipIntroMovie()
    {
        $("#IntroMoviePlayer").Stop();
    }
    
    static destroyMoviePlayer()
    {
        $("#IntroMoviePlayer").SetMovie("");
    }

    static hideIntroMovie()
    {                                                             
        $.Schedule(0.0, IntroMovie.destroyMoviePlayer);
    
        $.DispatchEvent("ChaosHideIntroMovie");
    }
}

//--------------------------------------------------------------------------------------------------
// Entry point called when panel is created
//--------------------------------------------------------------------------------------------------
(function()
{
    $.RegisterForUnhandledEvent("ChaosShowIntroMovie", IntroMovie.showIntroMovie);
    $.RegisterEventHandler("MoviePlayerPlaybackEnded", $("#IntroMoviePlayer"), IntroMovie.hideIntroMovie);
})();
