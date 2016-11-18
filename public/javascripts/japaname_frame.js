(function(wind, japanameFrameId){
  var JapanameObject = wind.JapanameObject = {};
  var japanameFrame = null;
  var japanamaFrameId = null;

  JapanameObject.onNameChange = function(fn){
    if(typeof fn === "function"){
      JapanameObject._nameChangeHandler = fn;
    }
  }

  JapanameObject.setJapanameFrameId = function(id){
    japanamaFrameId = id;
  }

  wind.addEventListener("message",function(message){
    switch(message.data.type){
    case "name_change":
      if(JapanameObject._nameChangeHandler){
        JapanameObject._nameChangeHandler(message.data);
      }
      break;
    case "window_height":
      if(japanameFrameId){
        japanameFrame = document.getElementById(japanamaFrameId);
        japanameFrame.height = message.data.height;
      }
      break;
    }
  },false);
}(window, "japanameIframe"));

